var lastScrollTop = 0;

$(window).scroll(function(){
   var sc = $(this).scrollTop();
  if (sc > lastScrollTop)
    {
      //$('#header').animate({ marginTop: '-70px', opacity: 0 }, 150);
      $('#header').animate({ marginTop: '0px', opacity: 0.85}, 0);
    } 
  else 
    {
      $('#header').animate({ marginTop: '0px', opacity:1}, 100);   
    }
   lastScrollTop = sc;
});