'use strict'


var gMeme
var gMemes = []
var gCurrImg
var gCurrImgObj

var gCurrLineIdx = 0

const KEY = 'memeDB'

function getImg(){
    return gCurrImg
}
function _creatMeme(selectedImgId, selectedLineIdx, lines = [{txt:"", fontSize:40, align:'center', color: 'white', font:'Impact'}]){
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

function setFontSizeChang(fontSize){
    gMeme.lines[gCurrLineIdx].fontSize = fontSize
}

function updateMeme(){
    (gMemes = loadFromStorage(KEY))? gMemes = loadFromStorage(KEY) : gMemes=[]
    console.log(gMemes)
    let meme
    if (gMemes !==undefined && getIsFromMemes()){
            meme = gMemes.find(meme=> meme.selectedImgId === gCurrImgObj.id)
            console.log(meme)
            gMeme = meme
    }
    else if (gCurrImgObj){
        meme = _creatMeme(gCurrImgObj.id, gCurrLineIdx)
        gMeme = meme
    }
}

function uploadImg(imgId){
    // let clickedImg
    // if(getIsFromMemes()) 
    //     clickedImg =  gGallery.find(img=> img.id === imgId)
    let clickedImg =  gGallery.find(img=> img.id === imgId)
    gCurrImgObj =clickedImg
}




function updateCurrLineIdx(){
    if (gCurrLineIdx === 2) return
    else{
        gCurrLineIdx += 1 
       gMeme.selectedLineIdx = gCurrLineIdx
    } 
    gMeme.lines.push({txt:"", fontSize:40, align:'center', color: 'white'})
}

function switchLine(){
    //let currLine = gMeme.selectedLineIdx
    if (gCurrLineIdx === 0 ) gCurrLineIdx = 2 
    else if (gCurrLineIdx === 2) gCurrLineIdx = 1
    else if( gCurrLineIdx === 1) gCurrLineIdx = 0
    gMeme.selectedLineIdx = gCurrLineIdx
    
    return gMeme.lines[gCurrLineIdx].txt
}

function deleteLine(){
    gCurrLineIdx = gMeme.selectedLineIdx-1
    gMeme.lines.splice(gMeme.selectedLineIdx,1)
    gMeme.selectedLineIdx = gCurrLineIdx
    console.log(gMeme)
}

function alignText(alignTo){
    gMeme.lines[gMeme.selectedLineIdx].align = alignTo
}

function changeFont(font){
    gMeme.lines[gMeme.selectedLineIdx].font = font
}

function saveImg(){
    gMemes.push(gMeme)
    saveToStorage(KEY, gMemes)
}

function drawText(text, x, y, color='white',align, fontSize, font='Impact') {
    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color
    gCtx.font = `400 ${fontSize}px ${font}`;
    gCtx.textAlign = align
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

function drawRect(x, y, width , height) {
    gCtx.beginPath()
    // gCtx.rectBaseline = 'middle'
    gCtx.fillStyle = '#ffffff80'
    gCtx.fillRect(x, y, width, height)
    gCtx.strokeStyle = '#ffffff80'
    // gCtx.strokeRect(x, y, width, height)
}