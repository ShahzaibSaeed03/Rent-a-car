document.addEventListener("DOMContentLoaded", () => {
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  // Handle scroll event
  window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  };
});
const sr = ScrollReveal ({
  distance: '60px',
  duration: 2500,
  dealy:400,
  rest:true
})
sr.reveal('.text',{delay:200, origin:'top'});
sr.reveal('.form-section form',{delay:800, origin:'left'});
sr.reveal('.heading',{delay:600, origin:'top'});
sr.reveal('.ride-section .box',{delay:600, origin:'top'});
sr.reveal('.service-section .box' ,{delay:600, origin:'top'});
sr.reveal('about-section ',{delay:600, origin:'top'});
sr.reveal('about-section .box ',{delay:600, origin:'bottom'});
sr.reveal('review-section ',{delay:600, origin:'top'});
sr.reveal('review-section .box',{delay:600, origin:'right'});
sr.reveal('newsletter .box',{delay:600, origin:'left'});