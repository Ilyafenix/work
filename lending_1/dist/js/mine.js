// анимация меню

$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.menu-nav__link').toggleClass('menu-nav__link_active');
});

// скрипт плавного перехода по ссылкам

 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

// получаем переменные для слайдера
let sliderImg = document.getElementById("slider-img"),
    dotsWrap = document.getElementsByClassName("slider-dots")[0],
    dots = document.getElementsByClassName("dot"),
    left = -400,
    imgWidth = -200;
// стартовая позиция для слайдера
sliderImg.style.left = left + 'px';

// функция перелистывания
slideTo = (direction) => {
    if (direction == "left") {
        left = left - imgWidth;
    }
    if (direction == "right") {
        left = left + imgWidth;
    }
    if (left < -800) left = 0;
    if (left > 0) left = -800;
    sliderImg.style.left = left + 'px';
}