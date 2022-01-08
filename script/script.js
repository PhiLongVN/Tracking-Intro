const toggle = document.querySelector(".head-toggle");
const menu = document.querySelector(".head-menu");
console.log("menu", menu)

toggle.onclick=() =>{
    menu.classList.toggle("active")
    toggle.classList.toggle("active")
}