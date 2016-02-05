$(document).ready(function() {


    if ( $(window).width() > 500) {     
      $('#fullpage').fullpage({
        verticalCentered: true,
        autoScrolling: true,

      });

      var controller = new ScrollMagic.Controller();
      var home = document.getElementById("home");

      var somosA = new  TimelineMax()
                  .to(home, 0.1, {delay:0.1,scale:0, opacity:0})
                  .to(home, 0.7, {delay:0.9, scale:1, opacity:1, repeat:14})
                  .to(home, 0.3, {delay:1.2, scale:0, opacity:0});



      var x = new ScrollMagic.Scene({
                    triggerElement: "#sec1", // point of execution
                    duration: 0 // pin the element for a total of 400px
                  })
                  .setTween(SomosA)
                  .addTo(controller);

      //Add your javascript for large screens here
    }
    else {
      //Add your javascript for small screens here
      $('#fullpage').fullpage({
       verticalCentered: true,
       autoScrolling: false,
       fitToSection: false,
       fitToSectionDelay: 35000,

    });
    }



});
