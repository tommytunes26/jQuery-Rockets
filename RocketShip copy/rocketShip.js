//Animate 1st RocketShip-------------------------------------------|

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#rocketShip").removeClass("flip");
        $("#rocketShip").animate({
        left: width
      }, 5000, function() {
         setTimeout(goLeft, 50);
      });
    }
    function goLeft() {
        $("#rocketShip").addClass("flip");
        $("#rocketShip").animate({
        left: -200
      }, 5000, function() {
         setTimeout(goRight, 50);
      });        
    }

    setTimeout(goRight, 50);
});


//Animate 2nd RocketShip-------------------------------------------|

$(document).ready(function(e) {
    var width = $(document).width();
    
    $("#rocketShip2").addClass("rocket2");

    function goRight() {
        $("#rocketShip2").removeClass("flip");
        $("#rocketShip2").animate({
        left: width
      }, 5000, function() {
         setTimeout(goLeft, 300);
      });
    }
    function goLeft() {
        $("#rocketShip2").addClass("flip");
        $("#rocketShip2").animate({
        left: -200
      }, 5000, function() {
         setTimeout(goRight, 300);
      });        
    }

    setTimeout(goRight, 1000);
});


//Animate Ufo-------------------------------------------|

$(document).ready(function(e) {
    var width = $(document).width();
    
    $("#ufo").addClass("rocket2");

    function goRight() {
        $("#ufo").removeClass("flip");
        $("#ufo").animate({
        left: width
      }, 8000, function() {
         setTimeout(goLeft, 8000);
      });
    }
    function goLeft() {
        $("#ufo").addClass("flip");
        $("#ufo").animate({
        left: -200
      }, 8000, function() {
         setTimeout(goRight, 200);
      });        
    }

    setTimeout(goRight, 10000);
});



//Animate Missle--------------------------------------------|

$(document).ready(function(e) {
    var height = $(document).height();
    
    function goTop() {
        $("#missle").animate({
        bottom: height
      }, 6000, function() {
         setTimeout(reset, 1000);
      });
    }
    function reset() {
        $("<img id='missle' src='missleSm.png' />").prependTo("#launchPad");
        setTimeout(goTop, 6000);
    }

    setTimeout(goTop, 6000);
});

