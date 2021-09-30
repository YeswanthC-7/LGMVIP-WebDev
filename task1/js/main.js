
var n = 1;
var images = [];

var t = 1
var bgs = []
images[1] = "https://source.unsplash.com/user/erondu/900x900?water"
images[2] = "https://source.unsplash.com/user/erondu/900x900?laptop"
images[3] = "https://source.unsplash.com/user/erondu/900x900?blue"
images[4] = "https://source.unsplash.com/user/erondu/900x900?book"
images[5] = "https://source.unsplash.com/user/erondu/900x900?clothes"
images[6] = "https://source.unsplash.com/user/erondu/900x900?phone"
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {

    document.getElementById("pic").src = images[n]
}

bgs[1] = "../img/bg/1.jpg"
bgs[2] = "../img/bg/2.jpg"
bgs[3] = "../img/bg/3.jpg"
function setSlide(t) {
    changeSlide(slideNo = t)
    clickchange()
}

function changeSlide(t) {
    document.getElementById('home').style.backgroundImage = `url(${bgs[t]})`

}

