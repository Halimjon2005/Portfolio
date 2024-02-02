const header =document.querySelector("header")

window.addEventListener("scroll" ,function() {
    header.classList.toggle ("sticky", window.scrollY > 120)
})
 let menu = document.querySelector ('#menu.icns')



 
 const burger = document.querySelector(".menu-icon");
const nav = document.querySelector(".navlist");




burger.addEventListener('click', () => {
  nav.classList.toggle('active')
})