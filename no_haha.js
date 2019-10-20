//www.facebook.com
function moveHaha1() {
    img = document.getElementsByClassName("sx_8279dc")

    for(i=0; i<img.length; i++){
        img[i].style.height = '0px'
        img[i].style.width = '0px'
    }
}

//m.facebook.com
function moveHaha2() {
    img1 = document.getElementsByClassName('t')
    img2 = document.getElementsByClassName('s')
    
    for(i=0; i<img1.length; i++){
        if(sources.indexOf(img1[i].src) > -1){
            img1[i].style.height = '0px'
            img1[i].style.width = '0px'
        }
    }
    
    for(i=0; i<img2.length; i++){
        if(sources.indexOf(img2[i].src) > -1){
            img2[i].style.height = '0px'
            img2[i].style.width = '0px'
        }
    }
}

var sources = ["https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/SiB5naaVLhd.png", "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/yzxDz4ZUD49.png"]
var pat1 = /www.facebook.com/
var pat2 = /m.facebook.com/

if(window.location.href.search(pat1) > -1){
    setInterval(moveHaha1, 100)
}

else if(window.location.href.search(pat2) > -1){
    setInterval(moveHaha2, 100)
}