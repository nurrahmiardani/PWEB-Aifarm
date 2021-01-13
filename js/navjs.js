const menuTooggle = document.querySelector('.menu-toggle input')
const nav = document.querySelector('nav ul');

menuTooggle.addEventListener("click", function() {
    nav.classList.toggle('slide')
})