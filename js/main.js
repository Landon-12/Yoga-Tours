$(function() {
 $('.pending__slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
 });
});

$(function(){
$('.proggram__slider').slick({
   dots: false,
   arrows: false,
   autoplay: true,
   infinite: true,
   slidesToShow: 1,
   centerMode: true,
   variableWidth: true
 })
});

$(function(){
   $('.reviews__slider').slick({
      infinite: true,
      prevArrow: ' <button class="slick-arrow slick-prev"><img src="images/icon/next.png" alt="prev arrow"></button>',
      nextArrow: ' <button class="slick-arrow slick-next"><img src="images/icon/prev.png" alt="next arrow"></button>',
 
    });
   });
