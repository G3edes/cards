'use strict'

const diciplinas=[
    {nome:'PWBE', cor:'red', icon:'PWBE.png'},
    {nome:'PWFE', cor:'red', icon:'backend-.png'},
    {nome:'PPDM', cor:'orange', icon:'PPDM.png'},
    {nome:'PRO', cor:'brown', icon:'projetos PRO.png'},
    {nome:'SOP', cor:'blue', icon:'sop.png'},
    {nome:'IOT', cor:'green', icon:'iot.png'},

]
function criarItemMenu(diciplinas){
    const listaMenu = document.getElementById('menu')
    const novoItem = document.createElement('li')
    const novoLink=document.createElement('a')
    const novoimg=document.createElement('img')

    novoimg.src=`./icon/${diciplinas.icon}`
    
    novoLink.href='#'
    novoLink.textContent=diciplinas.nome
    novoLink.style=`--cor-hover:${diciplinas.cor}`
    
    novoItem.appendChild(novoimg)
    novoItem.appendChild(novoLink)
    listaMenu.appendChild(novoItem)
}

const cards=[
    {img:'nb960.webp' , title: 'NEW BALANCE 9060' , dsc: 'O New Balance 9060 é um modelo de tênis que se destaca pela combinação de conforto, estilo e inovação. Ele faz parte da linha Lifestyle da marca, mas traz elementos que remetem ao legado de desempenho esportivo da New Balance.'},
    {img: 'adi2000.jpg', title: 'ADI2000', dsc: 'O Adi2000 é um modelo de tênis retrô da Adidas, que foi inspirado no estilo e na estética dos anos 2000, combinando um visual clássico com toques modernos. Ele se destaca por seu design arrojado e pelas cores vibrantes, frequentemente apresentando combinações de tons neutros com detalhes em cores mais ousadas.'},
    {img: 'airmax95', title:'AIR MAX 95', dsc: 'O Nike Air Max 95 é um dos tênis mais emblemáticos e revolucionários da história da Nike, lançado originalmente em 1995. Criado por Sergio Lozano, o Air Max 95 marcou um grande avanço no design e na tecnologia de tênis esportivos, tornando-se um ícone cultural e de moda.'},
    {img: 'puma180', title: 'PUMA 180', dsc:'O Puma 180 é um tênis da Puma, com design inspirado no estilo clássico dos tênis esportivos dos anos 90. Lançado inicialmente na década de 1990, o Puma 180 se destaca por sua estética retro e a inclusão da tecnologia de amortecimento Air, o que o coloca entre os modelos que mesclam o visual retrô com inovações de performance.' },
    {img: 'FLOR.jpeg', title: 'MIZUNO "FLOR DE LÓTUS"', dsc: 'O Mizuno Flor de Lótus é um modelo de tênis da marca japonesa Mizuno, projetado para corredores que buscam desempenho aliado ao conforto. Com um design sofisticado, esse modelo se destaca principalmente por seu visual inspirado na flor de lótus, que simboliza pureza e resistência, refletindo a filosofia e a beleza natural dessa flor.'},
]
function criarCard(cards){
    const cardsAll = document.getElementById('all')
    const novocard=document.createElement('div')
    const novotenis = document.createElement('img')
    const novotitle=document.createElement('h1')
    const novodesc=document.createElement('p')

    novoimg.src=`./img/${cards.img}`
    novotitle.textContent=cards.title
    novodesc.textContent=cards.desc

    novocard.appendChild(novotenis)
    novocard.appendChild(novotitle)
    novocard.appendChild(novodesc)
}
cards.forEach(criarCard)
diciplinas.forEach(criarItemMenu)

criarItemMenu()
criarCard()