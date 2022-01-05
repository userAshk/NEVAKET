//BURGER MENU 
$('.menu-btn').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.menu-block').toggleClass('menu-block_active')
  
    $('.menu-block a' ).on('click', function(e){
      $('.menu-block').removeClass('menu-block_active')
      $('.menu-btn').removeClass('menu-btn_active')

    })  

});


$('.carousel').slick({
  centerMode: true,
  dots: true,
  centerPadding: '60px',
  slidesToShow: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


var map;

  DG.then(function () {
    map = DG.map('map', {
    center: [42.87, 74.58],
    zoom: 13
  });
});
