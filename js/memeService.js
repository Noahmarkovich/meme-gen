'use strict'

var gMeme




function _creatMeme(selectedImgId, selectedLineIdx, lines = [{txt:"", size:20, align:'center', color: 'white'}]){
    var meme = {
        selectedImgId,
        selectedLineIdx,
        lines
        }
    return meme
}


function uploadImg(imgId){
    let clickedImg =  gGallery.find(img=> img.id === imgId)
    return clickedImg
}