function kick_haha_desktop(){
    var images = document.querySelectorAll('[aria-label*="Haha"]')
    for(i=0; i<images.length; i++){
        if(images[i].parentNode.parentNode.parentNode.tagName.toLowerCase() == 'div'){
            images[i].remove()
        }
        else{
            images[i].parentNode.parentNode.parentNode.remove()
        }
        
    }
}

function kick_haha_mobile(){
    var images = document.querySelectorAll('img')
    images.forEach(image => {
        if(sources.indexOf(image.src) > -1){
            image.remove()
        }
    })
}    

var sources = ["https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/SiB5naaVLhd.png", 
"https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/yzxDz4ZUD49.png"]
var pat1 = /www.facebook.com/
var pat2 = /m.facebook.com/

if(window.location.href.search(pat1) > -1){
    setInterval(kick_haha_desktop, 100)
}

else if(window.location.href.search(pat2) > -1){
    setInterval(kick_haha_mobile, 100)
}
