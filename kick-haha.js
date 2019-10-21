function create_meh_class(){
    node = document.createElement('img')
    node.src = 'https://static.xx.fbcdn.net/images/emoji.php/v9/tee/1/16/1f611.png'
    node.style.height = '18px'
    node.style.width = '18px'

    return node
}

function delete_all_classes(image){
    image.classList = []
    return image
}

function kick_haha_desktop(){
    var images = document.querySelectorAll('i')
    images.forEach(image => {
        result = image.parentElement.attributes[0].nodeValue.toLowerCase().includes("haha")
        if(result == true){
            image = delete_all_classes(image)
            image.appendChild(create_meh_class())
        }
    })
}


function kick_haha_mobile(){
    var images = document.querySelectorAll('img')
    images.forEach(image => {
        if(sources.indexOf(image.src) > -1){
            image.src = 'https://static.xx.fbcdn.net/images/emoji.php/v9/tee/1/16/1f611.png'
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
