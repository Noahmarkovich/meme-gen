'use strict'
var gCurrFontSize
var gIsBold = false
var gFontWeight 
function initEdit(){
    renderCanvas()
}

function renderCanvas(){
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    gCtx.drawImage(getImg() , 0, 0, gElCanvas.width, gElCanvas.height)
    // drawText(text, gElCanvas.width/2, 50, getColor())
    renderMeme()

}

function renderMeme() {
    //Get the props we need from the circle
    var lineLocationY
    var lineLocationX
    const { selectedImgId, selectedLineIdx, lines} = getMem()
    // var memes = getMem()
    lines.forEach((line, idx) => {
        // console.log (meme.lines[0].color) 
        if(idx === 0){
            lineLocationY = 50
        }
        else if(idx === 1){
            lineLocationY = 500
        }
        else if(idx > 1){
            lineLocationY = 250
        } 
        if (line.align === 'center') lineLocationX =gElCanvas.width/2
        if (line.align === 'left') lineLocationX = 20
        if (line.align === 'right') lineLocationX = gElCanvas.width - 20
        drawText(line.txt, lineLocationX , lineLocationY , line.color, line.align, line.fontSize, line.font)
    })
}

function onText(text){
    // const text = document.querySelector('input[name="enterd-text"]')s
    // updateMeme(text)
    setLineTxt(text)
    renderCanvas()
    
}

function changeFontSize(fontSizeChange){
    const {selectedLineIdx, lines} = getMem()
    gCurrFontSize = lines[selectedLineIdx].fontSize
    if((fontSizeChange=== '+10' && gCurrFontSize === 100)|| (fontSizeChange=== '-10' && gCurrFontSize=== 10)) return
    else{
        gCurrFontSize+=+fontSizeChange
        setFontSizeChang(+gCurrFontSize)
        renderCanvas()
    }  
   
}

function getColor(){
    const elColor = document.querySelector('input[name=text-color]')
    const textColor = elColor.value
    updateColor(textColor)
    renderCanvas()
    // return textColor
}

function onAddLine(){
    const elTxt = document.querySelector('input[name="enterd-text"]')
    elTxt.value = ''
    updateCurrLineIdx()
    const {selectedLineIdx, lines} = getMem()
    gCurrFontSize = lines[selectedLineIdx].fontSize
    renderCanvas()
}

function onSwitchLine(){
    const elTxt = document.querySelector('input[name="enterd-text"]')
    // const {lines} = getMem()
    const currText = switchLine()
    renderCanvas()
    elTxt.value = currText

}

function onGallery(elLink){
    gIsMemeOn = false
    const elMemes = document.querySelector('.memes') 
    elMemes.classList.remove('clicked')
    elLink.classList.add('clicked')
    const elEditor = document.querySelector('.edit-container')
    const elGallery = document.querySelector('.gallery-container')
    const elAbout = document.querySelector('.about')
    elEditor.style.display = "none"
    elGallery.style.display = "grid"
    elAbout.style.display = "flex"
    elEditor.classList.remove('meme-editor')
    
    const elTxt = document.querySelector('input[name="enterd-text"]')
    elTxt.value = ''
    renderGallery()
}



function onDelete(){
    const elTxt = document.querySelector('input[name="enterd-text"]')
    elTxt.value = ''
    deleteLine()
    renderCanvas()
}

function onTextAlign(alignTo){
    alignText(alignTo)
    renderCanvas()
}

function onChangeFont(font){
    changeFont(font)
    renderCanvas()
}

function onSave(){
    saveImg()
}

function downloadImg(elLink){
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}


function onShareImg(){
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg') // Gets the canvas content as an image format

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        // Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }
    // Send the image to the server
    doUploadImg(imgDataUrl, onSuccess)
}