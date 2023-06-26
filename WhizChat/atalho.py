import pyshortcuts

def criar_atalho():
    # Caminho para o script Python
    caminho_script = "C:\Users\VENDEDOR_07\OneDrive\Documentos\Whats\setup.py"
    
    # Nome do atalho e nome do arquivo do atalho
    nome_atalho = "AutomatizandoWhatsApp"
    arquivo_atalho = "AutomatizandoWhatsApp.lnk"  # Somente para Windows
    
    # Criar o atalho
    pyshortcuts.make_shortcut(caminho_script, nome_atalho, filename=arquivo_atalho)

# Chamar a função para criar o atalho
criar_atalho()
