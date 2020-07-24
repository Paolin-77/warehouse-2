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

  var monBurgerClick= document.querySelector(".burger");
monBurgerClick.addEventListener ('click',function(){
    var burgerNav= document.querySelector(".navigation-burger");
    burgerNav.classList.toggle('visible');
    var crossOne= document.querySelector('.ligne-1-b');
    crossOne.classList.toggle('cross');
    var crossTwo= document.querySelector('.ligne-2-b');
    crossTwo.classList.toggle('cross');
    var crossThree= document.querySelector('.ligne-3-b');
    crossThree.classList.toggle('cross');

});