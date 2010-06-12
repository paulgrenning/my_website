// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() {
  var offset = 100;
  var scale = 70;
  var currentIndex = 0;
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
  $("#slideleft").click(
    function() {
      var carousel = $("#carousel-images");
      carousel.animate({left: '-=300', queue: true});
      carousel.children("a").first().animate({queue: true}, function() { 
        $(this).remove();
        $(this).appendTo(carousel);
        $(carousel).css({left: "-300px"});
      });
    }
  );
  $("#slideright").click(
    function() {
      var carousel = $("#carousel-images");
      carousel.animate({left: '+=300', queue: true});
      carousel.children("a").last().animate({queue: true}, function() { 
        $(this).remove();
        $(this).prependTo(carousel);
        $(carousel).css({left: "-300px"});
      });
    }
  );
});
