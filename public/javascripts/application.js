// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() {
  var offset = 100;
  var scale = 70;
  var currentIndex = 0;
  isAnimating = false;
  scrollInterval = setInterval(slideLeft, 4000);
  function slideRight() {
      if(isAnimating == false) {
        isAnimating = true;
        var carousel = $("#carousel-images"); carousel.animate({left: '-=300', queue: true});
        carousel.children("a").first().animate({queue: true}, function() { 
          $(this).remove();
          $(this).appendTo(carousel);
          $(carousel).css({left: "-300px"});
          $(this).animate({queue: true}, function() {
            isAnimating = false;
          });
        });
      }
  }
  function slideLeft() {
      if(isAnimating == false) {
        isAnimating = true;
        var carousel = $("#carousel-images");
        carousel.animate({left: '+=300', queue: true});
        carousel.children("a").last().animate({queue: true}, function() { 
          $(this).remove();
          $(this).prependTo(carousel);
          $(carousel).css({left: "-300px"}) 
          $(this).animate({queue: true}, function() {
            isAnimating = false;
          });
        });
      }
  }
  var setOriginalData =function() {
    var image = $(this); 
    image.data('original_left', image.position().top);
    image.data('original_width', image.width());
    image.data('original_source', image.attr('src'));
  }
  var getOriginalPosition =function() {
    var list = $(this);
    list.data('original_left', list.position().left);
    list.data('original_right', list.position().right);
  }
  $("#portfolio").live('mouseover',
    function() {
        $("#left-arrow").show();
        $("#right-arrow").show();
        clearInterval(scrollInterval);
      })
  .each(setOriginalData).live('mouseout',
    function() {
        $("#left-arrow").hide();
        $("#right-arrow").hide();
        scrollInterval = setInterval(slideLeft, 4000);
      }
      );
  $("#thumb-1").each(setOriginalData).live('mouseover',
    function() {
        $(this).attr("src", "images/darktide-logo-light.png");
      })
  .each(setOriginalData).live('mouseout',
    function() {
        $(this).attr("src", "images/darktide-logo-dark.png")// $(this).data('original_source'));
      }
  );
  $("#thumb-2").each(setOriginalData).live('mouseover',
    function() {
        $(this).attr("src", "images/bug-splat.png");
      })
  .each(setOriginalData).live('mouseout',
    function() {
        $(this).attr("src", "images/bug.png");
      }
  );
  $("#thumb-3").each(setOriginalData).live('mouseover',
    function() {
        $(this).attr("src", "images/urchin2.png");
      })
  .each(setOriginalData).live('mouseout',
    function() {
        $(this).attr("src", "images/urchin1.png");
      }
  );
  $("#thumb-4").each(setOriginalData).live('mouseover',
    function() {
        $(this).attr("src", "images/website-thumb2.png");
      })
  .each(setOriginalData).live('mouseout',
    function() {
        $(this).attr("src", "images/website-thumb.png");
      }
  );
  $("#thumb-5").each(setOriginalData).live('mouseover',
    function() {
        $(this).attr("src", "images/ninja-defense2.png");
      })
  .each(setOriginalData).live('mouseout',
    function() {
        $(this).attr("src", "images/ninja-defense1.png");
      }
  );
  $("#left-arrow").each(setOriginalData).live('mouseover',
    function() {
      })
  .each(setOriginalData).live('mouseout',
    function() {
      }
  );
  $("#right-arrow").each(setOriginalData).live('mouseover',
    function() {
      })
  .each(setOriginalData).live('mouseout',
    function() {
      }
  );
  $("#left-arrow").mousedown( 
    function() {
        $(this).attr("src", "images/leftArrowClicked.png");
    });
    $("#left-arrow").mouseup(
      function() {
        $(this).attr("src", "images/leftArrow.png");
      });
  $("#right-arrow").mousedown( 
    function() {
        $(this).attr("src", "images/rightArrowClicked.png");
    });
    $("#right-arrow").mouseup(
      function() {
        $(this).attr("src", "images/rightArrow.png");
      });
  $("#left-arrow").click(
    function() {
      if(isAnimating == false) {
        clearInterval(scrollInterval);
        scrollInterval = setInterval(slideLeft, 4000);
      }
      slideLeft();
    }
  );
  $("#right-arrow").click(
    function() {
      if(isAnimating == false) {
        clearInterval(scrollInterval);
        scrollInterval = setInterval(slideRight, 4000);
      }
      slideRight();
    }
  );
});
