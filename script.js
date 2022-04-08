alert('Olá, seja bem vinde a versão 2.0 do Gutify com minhas 5 músicas favoritas SEM BUGS!')

let musicas = [
    {
        titulo:'Love Again',
        artista: 'Dua Lipa',
        src:'music/loveAgain.mp3',
        img:'images/loveAgain.png'
    },
    {
        titulo:'PQP',
        artista: 'NATTAN',
        src:'music/pqp.mp3',
        img:'images/pqp.png'
    },
    {
        titulo:'A Maior Saudade de Todos Os Tempos',
        artista: 'Henrique & Juliano',
        src:'music/maiorSaudade.mp3',
        img:'images/maiorSaudade.png'
    },
    {
        titulo:'Amanda I Love You',
        artista: 'Calcinha Preta',
        src:'music/amanda.mp3',
        img:'images/amanda.png'
    },
    {
        titulo:'Starboy',
        artista: 'The Weeknd',
        src:'music/starboy.mp3',
        img:'images/starboy.png'
    }
]


let musica = document.querySelector('audio')
let indexMusica = 0

document.querySelector('.fim')

let duracaoMusica = document.querySelector('.fim')

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))
let imagens = document.querySelector('img')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')

renderizarMusica(indexMusica)


//eventos
document.querySelector('.play-btn').addEventListener('click', tocarMusica)

document.querySelector('.pause-btn').addEventListener('click', pausarMusica)

musica.addEventListener('timeupdate', atualizarBarra)

document.querySelector('.prev-btn').addEventListener('click', () => {
    indexMusica--
    if(indexMusica < 0) {
        indexMusica = 4
    }
    renderizarMusica(indexMusica)
})
document.querySelector('.next-btn').addEventListener('click', () => {
    indexMusica++
    if(indexMusica > 4) {
        indexMusica = 0
    }
    renderizarMusica(indexMusica)
})

//funções
function tocarMusica() {
    musica.play()
    document.querySelector('.pause-btn').style.display = 'block'
    document.querySelector('.play-btn').style.display = 'none'
}

function pausarMusica() {
    musica.pause()
    document.querySelector('.pause-btn').style.display = 'none'
    document.querySelector('.play-btn').style.display = 'block'
}

function atualizarBarra() {
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    let tempoDeCorrido = document.querySelector('.inicio')
    tempoDeCorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos + ':' + campoSegundos

}

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo
        nomeArtista.textContent = musicas[index].artista
        imagens.src = musicas[index].img
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))
    })
}