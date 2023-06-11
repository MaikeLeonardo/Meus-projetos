const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const clickOnCookie = document.querySelector("#closedCookie")
const btnTry = document.querySelector('#btnTry')


const phrases = [
    'Consagre ao Senhor tudo o que você faz,e os seus planos serão bem-sucedidos-Provérbios 16:3',
    'Quem tem muitos amigos pode chegar à ruína, mas existe amigo mais apegado que um irmão.Provérbios 18:24',
    'Não compense na ira o que lhe falta na razão.',
    'A mulher sábia edifica a sua casa, mas com as próprias mãos a insensata derruba a sua.Provérbios 14:1',
    'O amigo ama em todos os momentos; é um irmão na adversidade.Provérbios 17:17',
    'Quem encontra uma esposa encontra algo excelente; recebeu uma bênção do Senhor.Provérbios 18:22',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam, a flecha lançada, a palavra dita e a oportunidade perdida.',
    'Quem esconde os seus pecados não prospera, mas quem os confessa e os abandona encontra misericórdia.Provérbios 28:13',
    'A beleza é enganosa, e a formosura é passageira; mas a mulher que teme o Senhor será elogiada. Provérbios 31:30',
    'Dê toda a atenção à formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
    'Siga os bons e aprenda com eles.',
    'Não importa o tamanho da montanha, ela não pode tapar o sol.',
    'O coração em paz dá vida ao corpo, mas a inveja apodrece os ossos. Provérbios 14:30',
    'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
    'São os nossos amigos que nos ensinam as mais valiosas lições.',
    'Acima de tudo, guarde o seu coração, pois dele depende toda a sua vida. Provérbios 4:23',
    'A adversidade é um espelho que reflete o verdadeiro eu.',
    'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
    'Uma bela flor é incompleta sem as suas folhas.',
    'Sem o fogo do entusiasmo, não há o calor da vitória.',
    'O riso é a menor distância entre duas pessoas.',
    'Os defeitos são mais fortes quando o amor é fraco.',
    'Amizade e Amor são coisas que se unem num piscar de olhos.',
    'Surpreender e ser surpreendido é o segredo do amor.',
    'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.',
    'A paciência na adversidade é sinal de um coração sensível.',
    'A sorte favorece a mente bem preparada.',
    'A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.',
    'Quem olha para fora sonha, quem olha para dentro acorda.'
  ];

let randomPhrase = document.querySelector("#randomPhrase")
let generateRandomPhrase

clickOnCookie.addEventListener('click', generatePhrase)
document.addEventListener('keydown', pressEnterKey)

function generatePhrase(){
    toggleScreen()

    generateRandomPhrase = Math.floor(Math.random()*(phrases.length));

    randomPhrase.innerText = phrases[generateRandomPhrase]

}

function buttonTry(event){
    event.preventDefault()
    toggleScreen()
}


function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnterKey(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        toggleScreen()
    }
}