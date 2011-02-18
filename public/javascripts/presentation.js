// Place your application-specific JavaScript functions and classes here
// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var ProjectsCarousel = {};
var numberOfSlides;
var currentSlideNumber;

$(document).ready(function() {
  ProjectsCarousel.originalThumb;
  ProjectsCarousel.isAnimating = false;
  ProjectsCarousel.isScrollingSet = true;
  ProjectsCarousel.leftClicked = true;
  numberOfSlides = $(".presentation").attr("value");
  currentSlideNumber = 1; 
  function slideRight() {
    if(ProjectsCarousel.isAnimating == false) {
      currentSlideNumber--;
      ProjectsCarousel.isAnimating = true;
      var carousel = $(".presentation");
      carousel.animate({left: '+=883', queue: true}, 700, function() {
        carousel.animate({left: '-=65', queue: true}, function(){
          carousel.animate({left: '+=10', queue: true}, function() { carousel.animate({queue: true}, function() {
            ProjectsCarousel.isAnimating = false;
          });
        });
      });
    });
  }
}
  function slideLeft() {
    if(ProjectsCarousel.isAnimating == false) {
      currentSlideNumber++;
      ProjectsCarousel.isAnimating = true;
      var carousel = $(".presentation");
      carousel.animate({left: '-=883', queue: true}, 700, function() {
        carousel.animate({left: '+=65', queue: true}, function(){
          carousel.animate({left: '-=10', queue: true}, function() { carousel.animate({queue: true}, function() {
            ProjectsCarousel.isAnimating = false;
          });
        });
      });
    });
      }
    }

  function easeRight() {
      if(ProjectsCarousel.isAnimating == false) {
        ProjectsCarousel.isAnimating = true;
        var carousel = $(".presentation");
        carousel.animate({left: '+=83', queue: true}, 300, function() {
          carousel.animate({left: '-=98', queue: true}, 450, function(){
            carousel.animate({left: '+=15', queue: true}, 500, function() {
              carousel.animate({queue: true}, function() {
                ProjectsCarousel.isAnimating = false;
              });
            });
          });
        });
      }
  }

  function easeLeft() {
      if(ProjectsCarousel.isAnimating == false) {
        ProjectsCarousel.isAnimating = true;
        var carousel = $(".presentation");
        carousel.animate({left: '-=83', queue: true}, 300, function() {
          carousel.animate({left: '+=98', queue: true}, 450, function(){
            carousel.animate({left: '-=15', queue: true}, 500, function() {
              carousel.animate({queue: true}, function() {
                ProjectsCarousel.isAnimating = false;
              });
            });
          });
        });
      }
  }

  $(document).bind('keydown', function(e){
    if(e.which == 37){
      if(currentSlideNumber == 1){
        easeRight();
      } else {
        slideRight();
      }
    } else if(e.which == 39){
      if(currentSlideNumber == numberOfSlides){
        easeLeft();
      } else {
        slideLeft();
      }
    }
  });

});

 /* 
  $("#portfolio").live('mouseover',
    function() {
        ProjectsCarousel.isScrollingSet = false;
        ProjectsCarousel.isAnimating = false;
        clearInterval(ProjectsCarousel.scrollInterval);
        $("#left-arrow").show();
        $("#right-arrow").show();
      })
  .live('mouseout',
    function() {
        $("#left-arrow").hide();
        $("#right-arrow").hide();
        if(ProjectsCarousel.isScrollingSet == false) {
          if(ProjectsCarousel.leftClicked == true) {
            ProjectsCarousel.scrollInterval = setInterval(slideLeft, 4000);
          } else { 
            ProjectsCarousel.scrollInterval = setInterval(slideRight, 4000);
          }
          ProjectsCarousel.isScrollingSet = true;
        }
      }
      );
      
  
  $("#left-arrow").mousedown( 
    function() {
      clearInterval(ProjectsCarousel.scrollInterval);
      ProjectsCarousel.leftClicked = true;
      slideLeft();
      $(this).attr("src", "http://paulgrenning.com/leftArrowClicked.png");
    });
    $("#left-arrow").mouseup(
      function() {
        $(this).attr("src", "http://paulgrenning.com/leftArrow.png");
      });
  $("#right-arrow").mousedown( 
    function() {
      clearInterval(ProjectsCarousel.scrollInterval);
      ProjectsCarousel.leftClicked = false;
      slideRight();
      $(this).attr("src", "http://paulgrenning.com/rightArrowClicked.png");
    });
    $("#right-arrow").mouseup(
      function() {
        $(this).attr("src", "http://paulgrenning.com/rightArrow.png");
    });
    
  });*/
// This file is automatically included by javascript_include_tag :defaults

/*
var ProjectsCarousel = {};

$(document).ready(function() {
  ProjectsCarousel.originalThumb;
  $(".thumb").live('mouseover',
    function() {
      currentThumbNail = $(this);
      ProjectsCarousel.originalThumb = currentThumbNail.attr('src'); 
      currentThumbNail.attr('src', currentThumbNail.attr('src2')); 
    })
  .live('mouseout',
    function() {
      currentThumbNail = $(this);
      currentThumbNail.attr('src', ProjectsCarousel.originalThumb); 
    }
  );
  
  ProjectsCarousel.isAnimating = false;
  ProjectsCarousel.isScrollingSet = true;
  ProjectsCarousel.leftClicked = true;
  
//  ProjectsCarousel.scrollInterval = setInterval(slideLeft, 4000);
  function slideRight() {
      if(ProjectsCarousel.isAnimating == false) {
        ProjectsCarousel.isAnimating = true;
        var carousel = $("#carousel-images");
        carousel.animate({left: '-=294', queue: true});
        carousel.children("a").first().animate({queue: true}, function() { 
          $(this).remove();
          $(this).appendTo(carousel);
          $(carousel).css({left: "-346"});
          $(this).animate({queue: true}, function() {
            ProjectsCarousel.isAnimating = false;
          });
        });
      }
  }
  function slideLeft() {
      if(ProjectsCarousel.isAnimating == false) {
        ProjectsCarousel.isAnimating = true;
        var carousel = $("#carousel-images");
        carousel.animate({left: '+=294', queue: true});
        carousel.children("a").last().animate({queue: true}, function() { 
          $(this).remove();
          $(this).prependTo(carousel);
          $(carousel).css({left: "-346"}) 
          $(this).animate({queue: true}, function() {
            ProjectsCarousel.isAnimating = false;
          });
        });
      }
  }
  
  $("#portfolio").live('mouseover',
    function() {
        ProjectsCarousel.isScrollingSet = false;
        ProjectsCarousel.isAnimating = false;
        clearInterval(ProjectsCarousel.scrollInterval);
        $("#left-arrow").show();
        $("#right-arrow").show();
      })
  .live('mouseout',
    function() {
        $("#left-arrow").hide();
        $("#right-arrow").hide();
        if(ProjectsCarousel.isScrollingSet == false) {
          if(ProjectsCarousel.leftClicked == true) {
            ProjectsCarousel.scrollInterval = setInterval(slideLeft, 4000);
          } else { 
            ProjectsCarousel.scrollInterval = setInterval(slideRight, 4000);
          }
          ProjectsCarousel.isScrollingSet = true;
        }
      }
      );
      
  
  $("#left-arrow").mousedown( 
    function() {
      clearInterval(ProjectsCarousel.scrollInterval);
      ProjectsCarousel.leftClicked = true;
      slideLeft();
      $(this).attr("src", "http://paulgrenning.com/leftArrowClicked.png");
    });
    $("#left-arrow").mouseup(
      function() {
        $(this).attr("src", "http://paulgrenning.com/leftArrow.png");
      });
  $("#right-arrow").mousedown( 
    function() {
      clearInterval(ProjectsCarousel.scrollInterval);
      ProjectsCarousel.leftClicked = false;
      slideRight();
      $(this).attr("src", "http://paulgrenning.com/rightArrowClicked.png");
    });
    $("#right-arrow").mouseup(
      function() {
        $(this).attr("src", "http://paulgrenning.com/rightArrow.png");
    });
    
});
*/
