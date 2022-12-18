'use strict'

var gGallery

var gFilterBy = ''

const gKeyWords = [['','mem','political', 'funny' ,'man'], ['','animals', 'cute', 'dogs'] , ['','baby', 'cute', 'dogs', 'sleep'], ['','animals', 'cute', 'cat', 'kitten', 'sleep'], ['','funny', 'child', 'cute'], ['','man', 'funny'] , ['','baby', 'cute', 'child', 'funny'], ['','man', 'funny', 'willy wonka'],['','baby', 'cute', 'child', 'funny', 'schemmy'], ['','political', 'man', 'laugh', 'funny', 'handsome'], ['','fight', 'man', 'love', 'funny'], ['','political', 'man', 'annoying'] , ['','handsome', 'man', 'drink', 'actor', 'leo'], ['', 'man', 'matrix', 'actor', 'serious'], ['', 'man', 'zero', 'actor', 'looser', 'funny'] , ['','actor', 'star', 'funny', 'man'], ['','political', 'scary', 'man'], ['','pixar', 'buzz', 'funny', 'cartoon']]


function _createGallery(){
    let gallery =[]
    for (let i = 1; i <= 18; i++) {
        gallery.push(_createImage(i,i,gKeyWords[i-1]))
    }
    gGallery= gallery
    console.log(gGallery)
    return gGallery
}

function getGallery(){
    var gallery = gGallery.filter(img => img.keywords.includes(gFilterBy.toLocaleLowerCase())) 
    return gallery
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

function createLoadGallery(){
    let gallery = []
    const memes = loadFromStorage (KEY) 
    // console.log(memes) 
    if(memes) {
        memes.forEach((meme) => {
            gallery.push(_createImage(meme.selectedImgId,meme.selectedImgId, gKeyWords[meme.selectedImgId-1]))
        })
    }
    gGallery = gallery
    return gGallery
}

function setImgFilter(filterBy = ''){
    if (filterBy !== undefined) gFilterBy = filterBy
}