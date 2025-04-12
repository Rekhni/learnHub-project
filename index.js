document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.burger-toggle');
  const navbar = document.querySelector('.navbar');

  toggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });
});