console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

$(document).ready(function () {
  $('.menu-icon').click(function (e) { 
    e.preventDefault();
    $('.navbar').toggleClass('active');
  });
});