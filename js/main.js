const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const form = document.querySelector('form');
const listaRobos = document.querySelectorAll('.robotron');

const pecas = {
  "bracos": {
    "forca": 29,
    "poder": 35,
    "energia": -21,
    "velocidade": -5
  },

  "blindagem": {
    "forca": 41,
    "poder": 20,
    "energia": 0,
    "velocidade": -20
  },
  "nucleos": {
    "forca": 0,
    "poder": 7,
    "energia": 48,
    "velocidade": -24
  },
  "pernas": {
    "forca": 27,
    "poder": 21,
    "energia": -32,
    "velocidade": 42
  },
  "foguetes": {
    "forca": 0,
    "poder": 28,
    "energia": 0,
    "velocidade": -2
  }
}

function tocarSom(seletorAudio) {
  console.log(seletorAudio)

  const somRobo = document.querySelector(seletorAudio)
  if (somRobo && somRobo.localName === 'audio') {
    somRobo.play();
  } else {
    console.log('Elemento não encontrado ou seletor inválido');
  }
}

function trocaImagem(cor) {
  document.querySelector(".robo").src = "img/Robotron 2000 - " + cor + ".png";
}

for (let contador = 0; contador < listaRobos.length; contador++) {
  const robo = listaRobos[contador]
  const classRobo = robo.classList[1]
  const idAudio = `#som-${classRobo}`

  robo.onclick = function () {
    trocaImagem(classRobo)
    tocarSom(idAudio)

  }
}

controle.forEach((elemento) => {

  elemento.addEventListener('click', (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    atualizaEstatisticas(evento.target.dataset.peca)
  })
})

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]")
  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1
  } else {
    peca.value = parseInt(peca.value) + 1
  }
}

function atualizaEstatisticas(peca) {
  console.log('pecas', pecas[peca])
  estatisticas.forEach((elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  })
}



form.addEventListener('submit', (evento) => {
  evento.preventDefault()
  
  var audio = new Audio('Robotron-iniciar.mp3');
audio.play();
})
