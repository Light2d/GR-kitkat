let spinner = document.querySelector('.last__img')
let spinner2 = document.querySelector('.last__spinner')
let modal = document.querySelector('.modal')
let modalbtn = document.querySelector('.modal__btn')
let prize = document.querySelector('.prize')
let show = document.querySelector('.show')
let body = document.querySelector('body')
let overlay = document.querySelector('.overlay')

let firstCl = true;

spinner2.addEventListener('click', function() {
  if (firstCl) {
      spinner.style.animation = 'spin 5s ease forwards';
      setTimeout(function() {
          modal.style.animation = 'fadeIn 1s ease-in-out';
          modal.style.display = "block";
      }, 5500);
      firstCl = false;
  }
});

modalbtn.addEventListener('click', function() {
  modal.style.animation = 'fadeOut 1s ease-in-out forwards';
  setTimeout(function() {
      spinner.style.animation = 'spin2 5s ease forwards';
  }, 1000);
  setTimeout(function() {
      prize.style.animation = 'fadeIn 1s ease forwards';
      prize.style.display = 'block';
  }, 7000);
  setTimeout(function() {
      prize.style.animation = 'rotate 1s ease forwards';
  }, 7300);
  setTimeout(function() {
      prize.style.display = 'none';
      show.style.display = 'block';
      countdown2();
  }, 9000);
});



$('.js-pickup').click(function (e) {
e.preventDefault();
$('.loader-wrp').fadeIn();
$('#game').fadeOut();
$('#comments_display_one').hide();
$('#page_two').hide();
setTimeout(function () {
    $('.order-data-wrp').removeClass('hidden');
    $('.order-data-wrp').show();
    $('.loader-wrp').fadeOut();
    $('.cart-content').css('z-index', '9');
}, 2000);
});
