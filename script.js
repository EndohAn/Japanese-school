const burger = document.querySelector('.burger');
const nav = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.btn');


burger.addEventListener('click', navSlide)

function navSlide () {
  burger.classList.toggle('toggle');
  nav.classList.toggle('nav-active');
  navLinks.forEach((link, index)=> {
      link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 1.2}s`;
      link.addEventListener( 'click', function(){
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
      })
  })
}

