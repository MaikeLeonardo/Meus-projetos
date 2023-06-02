
let listadeAlunos = [
    {
      nome: "João",
      notaProva1: 8.5,
      notaProva2: 7.9
    },
    {
      nome: "Maria",
      notaProva1: 4.2,
      notaProva2: 5.8
    },
    {
      nome: "Pedro",
      notaProva1: 7.6,
      notaProva2: 8.3
    }
  ]

  function calculamedia(notaProva1, notaProva2){
    let media = (notaProva1 + notaProva2) / 2
    return media
  }

  for (let estudante of listadeAlunos){
    mediaInvidual = calculamedia(estudante.notaProva1, estudante.notaProva2)
    let aprovadoOuNao = mediaInvidual < 7 ? 'Infelizmente não foi dessa vez, Estude mais' : 'Parabéns pela sua aprovação'

    alert(`A média de ${estudante.nome} é ${mediaInvidual},
    ${aprovadoOuNao}`)
  }
  