// Show Menu

const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')

// Active and Remove Menu

const navLink = document.querySelectorAll('.nav-link');   

function linkAction(){
  // Active link
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  // Remove menu mobile
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Reveal Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
});

sr.reveal('.hero-text',{}); 
sr.reveal('.hero-button',{delay: 200});

// Scroll About
sr.reveal('.about-description',{}); 
sr.reveal('.about-image',{delay: 400}); 

// Scroll Menu
sr.reveal('.card-menu',{interval: 200}); 

// Scroll Contact
sr.reveal('.input',{interval: 200}); 
sr.reveal('.button-submit',{delay: 200}); 


