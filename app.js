const test = document.querySelector('#mobile-menu');
const nestTest = document.querySelector('.navbar__menu');

test.addEventListener('click', function(){
  test.classList.toggle('is-active');
  nestTest.classList.toggle('active');
});