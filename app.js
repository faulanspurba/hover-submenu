// SHOW NAVBAR
const toggle = document.querySelector('#header-toggle');
const navbar= document.querySelector('#navbar');
toggle.addEventListener('click', ()=>{
    navbar.classList.toggle("show-menu");

    toggle.classList.toggle("bx-x");
})


// LINK ACTIVE
const navLink = document.querySelectorAll('.nav__link');

function colorLink() {
    navLink.forEach(l=>l.classList.remove("active"));
    this.classList.add('active')
}

for (const nl of navLink) {
    nl.addEventListener('click', colorLink)
}