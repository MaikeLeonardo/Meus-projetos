import pandas as pd
import urllib
import PySimpleGUI as sg
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
import time
import datetime
import pyrebase

# Configurar o Firebase

config = {
    "apiKey": "AIzaSyBpXJ6dLAINNCfjNpJiA--pvbtrSgvOCS0",
    "authDomain": "whizchat-d61e6.firebaseapp.com",
    "databaseURL": "https://whizchat-d61e6.firebaseio.com",
    "projectId": "whizchat-d61e6",
    "storageBucket": "whizchat-d61e6.appspot.com",
    "messagingSenderId": "828298529751",
    "appId": "1:828298529751:web:d27ce2f5a6260030ff5992",
    "measurementId": "G-N6VTLFFYDF"
}
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()

def autenticar_usuario(email, password):
    try:
        user = auth.sign_in_with_email_and_password(email, password)
        return user
    except Exception as e:
        print(f"Erro ao autenticar usuário: {str(e)}")
        return None

def verificar_data_validade(usuario):
    uid = usuario['localId']
    data_validade = db.child("usuarios").child(uid).child("data_validade").get().val()

    if data_validade is not None:
        data_validade = datetime.datetime.strptime(data_validade, "%Y-%m-%d").date()
        data_atual = datetime.date.today()

        if data_validade >= data_atual:
            return True
        else:
            print("Login expirado. Entre em contato com o administrador.")
            return False
    else:
        print("Data de validade não encontrada.")
        return False

def verificar_permissao_administrador(usuario):
    print(usuario)
    return True

def enviar_mensagens():
    contatos_df = pd.read_excel("Enviar.xlsx")

    navegador = webdriver.Chrome()
    navegador.get("https://web.whatsapp.com/")
    wait = WebDriverWait(navegador, 10)
    navegador.implicitly_wait(10)

    while len(navegador.find_elements(By.ID, "side")) < 1:
        time.sleep(1)

    # Já estamos com o login feito no WhatsApp Web
    for i, mensagem in enumerate(contatos_df['Mensagem']):
        pessoa = contatos_df.loc[i, "Pessoa"]
        numero = contatos_df.loc[i, "Número"]
        texto = urllib.parse.quote(f"Oi {pessoa}! {mensagem}")
        link = f"https://web.whatsapp.com/send?phone={numero}&text={texto}"
        navegador.get(link)
        time.sleep(10)

        try:
            while len(navegador.find_elements(By.ID, "side")) < 1:
                time.sleep(3)

            navegador.find_element(By.XPATH, '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]/button/span').click()
            time.sleep(10)

        except Exception as e:
            print(f"Erro ao enviar mensagem para o número {numero}: {str(e)}")
            sg.PopupQuick(f"O número {numero} não tem WhatsApp.", auto_close=True)
            continue

    navegador.close()
    sg.Popup("Envio de mensagens concluído!", auto_close=True)

# Layout da interface
layout_login = [
    [sg.Text("Login")],
    [sg.Input(key="-LOGIN-")],
    [sg.Text("Senha")],
    [sg.Input(key="-SENHA-", password_char="*")],
    [sg.Button("Entrar", key="-ENTRAR-")]
]

# Cria a janela de login
janela_login = sg.Window("WhizChat - Login", layout_login, icon="caminho/para/icone.ico")

# Loop de eventos
while True:
    evento, valores = janela_login.read()

    if evento == sg.WINDOW_CLOSED:
        break
    elif evento == "-ENTRAR-":
        login = valores["-LOGIN-"]
        senha = valores["-SENHA-"]

        usuario = autenticar_usuario(login, senha)

        if usuario:
            if verificar_data_validade(usuario):
                if verificar_permissao_administrador(usuario):
                    sg.Popup("Login de administrador bem-sucedido!")
                    # Realize as operações de administrador desejadas
                else:
                    sg.Popup("Login de usuário comum bem-sucedido!")
                    # Realize as operações de usuário comum desejadas
                break
            else:
                sg.Popup("Login inválido ou expirado. Entre em contato com o administrador.")
                break
        else:
            sg.Popup("Login ou senha incorretos!")

# Fecha a janela de login ao sair do loop de eventos
janela_login.close()

# Layout da interface
layout = [
    [sg.Button("Iniciar Envio de Mensagens", key="-ENVIAR-")]
]

# Cria a janela
janela = sg.Window("WhizChat", layout, icon="caminho/para/icone.ico")

# Loop de eventos
while True:
    evento, valores = janela.read()
    
    if evento == sg.WINDOW_CLOSED:
        break
    elif evento == "-ENVIAR-":
        enviar_mensagens()

# Fecha a janela ao sair do loop de eventos
janela.close()
