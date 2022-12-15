'use strict'

var gMeme

var gCurrImg
var gCurrImgObj

var gCurrLineIdx = 0

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
    // var currMemLine = gMeme.find(meme=> meme.selectedLineIdx === gCurrLineIdx)
    return gMeme
}

function setLineTxt(text){
    gMeme.lines[gCurrLineIdx].txt = text
}
function updateColor(color){
    gMeme.lines[gCurrLineIdx].color = color
}

function setFontSizeChang(fontSizeChange){
    gMeme.lines[gCurrLineIdx].fontSizeChange = fontSizeChange
}

function updateMeme(){
    if (gCurrImgObj){
        var meme = _creatMeme(gCurrImgObj.id, gCurrLineIdx)
    }
    gMeme = meme
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
function updateCurrLineIdx(){
    if (gCurrLineIdx === 2) return
    else{
       gCurrLineIdx += 1 
       gMeme.selectedLineIdx = gCurrLineIdx
    } 
    gMeme.lines.push({txt:"", fontSizeChange:0, align:'center', color: 'white'})
}

function switchLine(){
    //let currLine = gMeme.selectedLineIdx
    if (gCurrLineIdx === 0 ) gCurrLineIdx = 2 
    else if (gCurrLineIdx === 2) gCurrLineIdx = 1
    else if( gCurrLineIdx === 1) gCurrLineIdx = 0
    gMeme.selectedLineIdx = gCurrLineIdx
    console.log(gMeme)
}

