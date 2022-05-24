$(function () {
   // sliders
   $('.slider__inner').slick({
      prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8V6H4L8 2L7 0L0 7L7 14L8 12L4 8H16Z" fill="#FD665E"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8V6H12L8 2L9 0L16 7L9 14L8 12L12 8H0Z" fill="#FD665E"/></svg></button>',
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      responsive: [{
            breakpoint: 980,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 661,
            settings: {
               slidesToShow: 1,
               fade: true,
            }
         },
         {
            breakpoint: 461,
            settings: {
               slidesToShow: 1,
               fade: true,
               arrows: false,
               infinite: true
            }
         },
      ],
   });

   $('.blockquote__slider').slick({
      prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8V6H4L8 2L7 0L0 7L7 14L8 12L4 8H16Z" fill="#FD665E"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8V6H12L8 2L9 0L16 7L9 14L8 12L12 8H0Z" fill="#FD665E"/></svg></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      fade: true,
      responsive: [{
         breakpoint: 377,
         settings: {
            slidesToShow: 1,
            fade: true,
            arrows: false,
            infinite: true
         }
      }, ],
   });


   // menu button
   $('.menu__btn, .menu a').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active');
   });
   $('.menu__btn, .menu a').on('click', function () {
      $('.menu__btn').toggleClass('menu__btn-active');
   });
   $('.menu__btn, .menu a').on('click', function () {
      $('.user-nav__link--search').toggleClass('user-nav__link--search--active');
   });


   // scroll
   $(document).ready(function () {
      $(".menu").on("click", "a", function (event) {
         event.preventDefault();
         //забираем идентификатор бока с атрибута href
         var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

         //анимируем переход на расстояние - top за 1500 мс
         $('body,html').animate({
            scrollTop: top
         }, 1500);
      });
   });

});