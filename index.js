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