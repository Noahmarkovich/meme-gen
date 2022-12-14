'use strict'
let gElCanvas
let gCtx

function init(){
    renderGallery()
}

function renderGallery(){
    let gallery = _createGallery()
    var strHtmls = gallery.map(img => `  
        <img onclick="openEditor(this, ${img.id})" src="${img.url}">`
        )
    document.querySelector('.gallery').innerHTML = strHtmls.join('')
}

function openEditor(img, imgId){
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    const elEditor = document.querySelector('.meme-editor')
    const elGallery = document.querySelector('.gallery')
    console.log(elGallery)
    elGallery.style.display = "none"
    elEditor.hidden = false
    // let elImg = <img class="initImg" src="img/1.jpg" alt="An image of a dog"/>
    // elImg.innerHTML = clickedImg
    gCtx.drawImage(img , 0, 0, gElCanvas.width, gElCanvas.height)
    uploadImg(imgId)
}