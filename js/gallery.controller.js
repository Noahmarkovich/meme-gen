'use strict'
let gElCanvas
let gCtx

let gIsMemeOn = false

function init(){
    renderGallery()
}

function renderGallery(){
    let gallery
    if (gIsMemeOn) createLoadGallery()
    else  _createGallery()
    gallery = getGallery()
    var strHtmls = gallery.map(img => `  
        <img onclick="openEditor(this, ${img.id})" src="${img.url}">`
        )
    document.querySelector('.gallery').innerHTML = strHtmls.join('')
}

function openEditor(img, imgId){
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    const elLink = document.querySelector('.gallery-ref')
    elLink.classList.remove('clicked')
    const elEditor = document.querySelector('.edit-container')
    const elGallery = document.querySelector('.gallery-container')
    const elAbout = document.querySelector('.about')
    elGallery.style.display = "none"
    // elEditor.classList.add('meme-editor')
    elAbout.style.display = "none"
    elEditor.style.display = "flex"
    // let elImg = <img class="initImg" src="img/1.jpg" alt="An image of a dog"/>
    // elImg.innerHTML = clickedImg
    // gCtx.drawImage(img , 0, 0, gElCanvas.width, gElCanvas.height)
    uploadImg(imgId)
    updateMeme()
    gCurrImg= img
    renderCanvas()
    // initEdit()
}

function onMemes(elLink){           
    gIsMemeOn = true
    const elGalleryLink = document.querySelector('.gallery-ref') 
    elGalleryLink.classList.remove('clicked')
    elLink.classList.add('clicked')
    const elEditor = document.querySelector('.edit-container')
    const elGallery = document.querySelector('.gallery-container')
    const elAbout = document.querySelector('.about')
    elGallery.style.display = "grid"
    elEditor.style.display = "none"
    elAbout.style.display = "flex"
    // elEditor.classList.remove('meme-editor')
    // elEditor.hidden = true
    const elTxt = document.querySelector('input[name="enterd-text"]')
    elTxt.value = ''
    renderGallery()
}

function getIsFromMemes(){
    console.log(gIsMemeOn)
    return gIsMemeOn
}

function onSearchBy (ev){
    ev.preventDefault()
    const elTxt = document.querySelector('input[name="txt-filter"]')
    var filterBy =  elTxt.value
    console.log(filterBy)
    setImgFilter(filterBy)
    elTxt.value = ''
    renderGallery()

    const queryStringParams = `?searchedBy=${filterBy}`
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + queryStringParams
    window.history.pushState({ path: newUrl }, '', newUrl)
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}