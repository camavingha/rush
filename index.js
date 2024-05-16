function ChangeImg(x, image){
    if (x==1) {
        image.src = "img/huh-cat-huh-m4rtin.gif"
        document.getElementById("monImg").style.opacity = ".9"
    } 
    else {
        image.src = "img/huh-cat-huh-m4rtin.png"
        document.getElementById("monImg").style.opacity = "1"
    }
    
}