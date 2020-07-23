var mySwiper = new Swiper('.swiper-container', {
    
  effect:'slide',
  loop: true,
  spaceBetween:0,
  slidesPerView: 'auto',
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    // disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
 
});

  var maNav= document.getElementById('navigation-white');
  document.addEventListener('scroll', function(){
    maNav.classList.add('white');
  });
      
  $('a[href^="#"]').click(function(){
    var the_id = $(this).attr("href");
    if (the_id === '#') {
      return;
    }
    $('html, body').animate({
      scrollTop:$(the_id).offset().top
    }, 'slow');
    return false;
  });