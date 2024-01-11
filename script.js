/*
document.querySelector('.hamburger-button').addEventListener('click', function() {
    document.querySelector('.nav-links').style.display = 
    (document.querySelector('.nav-links').style.display == 'none') ? 'block' : 'none';
 });
 */


 const hamburgerButton = document.querySelector(".hamburger-button");
 const navLinks = document.querySelector(".nav-links");

 hamburgerButton.addEventListener("click", () => {
    navLinks.style.display = (navLinks.style.display == 'none') ? 'block' : 'none';

 })