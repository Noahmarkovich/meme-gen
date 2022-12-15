'use strict'

var gMeme

var gCurrImg
var gCurrImgObj

var gCurrIdx = 0

function getImg(){
    return gCurrImg
}
function _creatMeme(selectedImgId, selectedLineIdx, lines = [{txt:"", fontSizeChange:0, align:'center', color: 'white'}]){
    var meme = {
        selectedImgId,
        selectedLineIdx,
        lines
        }
    return meme
}

function getMem(){
    return gMeme
}

function setLineTxt(text){
    gMeme.lines[0].txt = text
}
function updateColor(color){
    gMeme.lines[0].color = color
}

function setFontSizeChang(fontSizeChange){
    gMeme.lines[0].fontSizeChange = fontSizeChange
}

function updateMeme(){
    if (gCurrImgObj){
        var meme = _creatMeme(gCurrImgObj.id, gCurrIdx)
    }
    gMeme= meme
}

function uploadImg(imgId){
    let clickedImg =  gGallery.find(img=> img.id === imgId)
    gCurrImgObj =clickedImg
}

const gFontSize = 40 
function drawText(text, x, y, color='white',align, fontSizeChange = 0) {
    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color
    gCtx.font = `800 ${gFontSize+fontSizeChange}px Arial`;
    gCtx.textAlign = align
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}