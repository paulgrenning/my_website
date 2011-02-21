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
  for(i = 2; i <= numberOfSlides; i++){
    $(".slide"+(i)).animate({height: '400', top: '+=84'});;  
    $(".content"+(i)).animate({height: '310'});;  
  }
  function slideRight() {
    if(ProjectsCarousel.isAnimating == false) {
      ProjectsCarousel.isAnimating = true;
      currentSlideNumber--;
      var carousel = $(".presentation");
      $(".slide"+(currentSlideNumber)).animate({height: '568', top: '-=84'});;  
      $(".content"+(currentSlideNumber)).animate({height: '480'});;  
      $(".slide"+(currentSlideNumber+1)).animate({height: '400', top: '+=84'});;  
      $(".content"+(currentSlideNumber+1)).animate({height: '310'});;  
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
      ProjectsCarousel.isAnimating = true;
      currentSlideNumber++;
      var carousel = $(".presentation");
      $(".slide"+(currentSlideNumber-1)).animate({height: '400', top: '+=84'});;  
      $(".content"+(currentSlideNumber-1)).animate({height: '310'});;  
      $(".slide"+(currentSlideNumber)).animate({height: '568', top: '-=84'});;  
      $(".content"+(currentSlideNumber)).animate({height: '480'});;  
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

  $(document).bind('keyup', function(e){
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

  function transitionToSlide(value){
    $(".slide"+(currentSlideNumber)).animate({height: '400', top: '+=84'});;  
    $(".content"+(currentSlideNumber)).animate({height: '310'});;  
    var slider = $(".presentation");
    var currentLocation = slider.position().left;
      $(".slide"+(value)).animate({height: '568', top: '-=84'});  
      $(".content"+(value)).animate({height: '480'});  
      var slideAmount = (currentSlideNumber - value)*-828 + 55;
      currentSlideNumber = value;
      slider.animate({left: '-=' + slideAmount, queue: true}, 700, function() {
        slider.animate({left: '+=65', queue: true}, function(){
          slider.animate({left: '-=10', queue: true}, function() {
            slider.animate({queue: true}, function() {
            ProjectsCarousel.isAnimating = false;
          });
        });
      });
    });
  }

  $(".slide-number-textbox").bind('keyup', function(e){
    if(e.which == 13){
      var textBoxValue = $(".slide-number-textbox").val();
      var intValue = currentSlideNumber;
      try {
        intValue = parseInt(textBoxValue);
        if(intValue > 0 && intValue <= numberOfSlides){
          if(intValue != currentSlideNumber){
            if(ProjectsCarousel.isAnimating == false) {
              ProjectsCarousel.isAnimating = true;
              transitionToSlide(intValue);
            }
          }
        }
      } catch (err){}
    }
  });

});

