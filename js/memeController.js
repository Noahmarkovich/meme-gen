'use strict'
var gCurrFontSize = 0
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
    const { selectedImgId, selectedLineIdx, lines} = getMem()
    //Draw the circle
    drawText(lines[0].txt, gElCanvas.width/2, 50, lines[0].color, lines[0].align, lines[0].fontSizeChange)
}

function onText(text){
    // const text = document.querySelector('input[name="enterd-text"]')s
    // updateMeme(text)
    setLineTxt(text)
    renderCanvas()
    
}

function changeFontSize(fontSizeChange){
    if((fontSizeChange=== '+10' && gCurrFontSize === 60)|| (fontSizeChange=== '-10' && gCurrFontSize=== -30)) return
    else{
        gCurrFontSize+=+fontSizeChange
        setFontSizeChang(+gCurrFontSize)
        renderCanvas()
    } 
    console.log(gCurrFontSize)   
   
}

function getColor(){
    const elColor = document.querySelector('input[name=text-color]')
    const textColor = elColor.value
    updateColor(textColor)
    renderCanvas()
    // return textColor
}

