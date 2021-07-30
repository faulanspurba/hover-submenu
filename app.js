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

// open dropdown when clicked
const nav_dropdown = document.querySelectorAll('.nav__dropdown');

for (const d of nav_dropdown) {
    d.addEventListener('click', function(e){
        console.log()
        if(!e.target.classList.contains("nav__dropdown-item")){
            this.classList.toggle("show-dropdown");
            this.children[0].children[2].classList.toggle("rotate");
        }
        
    })
}