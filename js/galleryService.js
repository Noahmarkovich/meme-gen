'use strict'

var gGallery

function _createGallery(){
    let gallery =[]
    for (let i = 1; i <= 18; i++) {
        gallery.push(_createImage(i,i,['funny','nice']))
    }
    gGallery= gallery
    return gGallery
}

function _createImage(id, imgNum , keywords){
    let img = 
        {
            id,
            url: `img/${imgNum}.jpg`,
            keywords
        }
    return img
}


