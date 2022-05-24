$(function () {

  $('.steps-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.steps-tabs__top-item').removeClass('steps-tabs__top-item--active');
    $(this).addClass('steps-tabs__top-item--active');

    $('.steps-tabs__content-item').removeClass('steps-tabs__content-item--active');
    $($(this).attr('href')).addClass('steps-tabs__content-item--active');
  });

  $('.slider__items').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1060,
        settings: {
          focusOnSelect: false,
          centerMode: false,
        }
      },
      {
        breakpoint: 921,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          focusOnSelect: false,
        }
      },
    ],
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  });

});