let home = document.querySelector("#home")
let about = document.querySelector("#about")
let find = document.querySelector("#find")
let shop = document.querySelector("#shop")
let page = document.querySelector(".flex")
let homepage = document.querySelector(".Home")
let findpage = document.querySelector(".FindUs")
let aboutUspage = document.querySelector(".AboutUs")
let shoppage = document.querySelector(".Shop")

findpage.style.display = 'none'
aboutUspage.style.display = 'none'
shoppage.style.display = 'none'

console.log(home)
console.log(about)
console.log(find)
console.log(shop)
console.log(homepage)
console.log(findpage)
console.log(aboutUspage)
console.log(shoppage)


home.addEventListener ('click',goHome)
about.addEventListener ('click',goAbout)
find.addEventListener ('click',goFind)
shop.addEventListener ('click',goShop)

function goHome (){
    homepage.style.display = 'initial'
    findpage.style.display = 'none'
    aboutUspage.style.display = 'none'
    shoppage.style.display = 'none'
}

function goAbout (){
    homepage.style.display = 'none'
    findpage.style.display = 'none'
    aboutUspage.style.display = 'initial'
    shoppage.style.display = 'none'
}

function goFind (){
    homepage.style.display = 'none'
    findpage.style.display = 'initial'
    aboutUspage.style.display = 'none'
    shoppage.style.display = 'none'
}

function goShop (){
    homepage.style.display = 'none'
    findpage.style.display = 'none'
    aboutUspage.style.display = 'none'
    shoppage.style.display = 'initial'
}

window.onload = function() {


   var slider2 = new Slider({
        images: '.slider-2 img',
        btnPrev: '.slider-2 .buttons .prev',
        btnNext: '.slider-2 .buttons .next',
        auto: true,
        rate: 2000
    });
}

function Slider(obj) {

  this.images = document.querySelectorAll(obj.images);
  this.auto = obj.auto;
  this.btnPrev = obj.btnPrev;
  this.btnNext = obj.btnNext;
    this.rate = obj.rate || 1000;

  var i = 0;
    var slider = this;

  this.prev = function () {
    slider.images[i].classList.remove('shown');
    i--;

    if (i < 0) {
      i = slider.images.length - 1;
    }

    slider.images[i].classList.add('shown');
  }

  this.next = function () {
    slider.images[i].classList.remove('shown');
    i++;

    if (i >= slider.images.length) {
      i = 0;
    }

    slider.images[i].classList.add('shown');
  }

    document.querySelector(slider.btnPrev).onclick = slider.prev;
    document.querySelector(slider.btnNext).onclick = slider.next;

  if (slider.auto)  {
        setInterval(slider.next, slider.rate);
    }
};
