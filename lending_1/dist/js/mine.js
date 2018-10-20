$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.menu-nav__link').toggleClass('menu-nav__link_active');
});