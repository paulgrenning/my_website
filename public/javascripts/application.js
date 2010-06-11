// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() {
  var offset = 15;
  var scale = 70;
  var setOriginalData =function() {
    var image = $(this); 
    console.log($(this));
    image.data('original_left', image.position().top);
    image.data('original_width', image.width());
    image.data('original_source', image.attr('src'));
  }
  $("#thumb-1").each(setOriginalData).hover(
    function() {
        $(this).attr("src", "images/bug-splat.png");
      },
    function() {
        $(this).attr("src", $(this).data('original_source'));
      }
  );
  $("#thumb-2").each(setOriginalData).hover(
    function() {
        $(this).attr("src", "images/darktide-logo-light.png");
      },
    function() {
        $(this).attr("src", $(this).data('original_source'));
      }
  );
  $("#thumb-3").each(setOriginalData).hover(
    function() {
        $(this).attr("src", "images/website-thumb2.png");
      },
    function() {
        $(this).attr("src", $(this).data('original_source'));
      }
  );
  $('#navhome').each(setOriginalData).hover(
      function() {
        $(this).attr("src", "images/home.png");
        $(this).stop().animate({ top: $(this).data('original_left')+offset, width: $(this).data('original_width')+scale});
      },
      function() {
        $(this).stop().animate({ top: $(this).data('original_left'), width: $(this).data('original_width')});
        $(this).attr("src", $(this).data('original_source'));
      }
   );
    $('#navabout').each(setOriginalData).hover(
      function() {
        $(this).attr("src", "images/about.png");
        $(this).stop().animate({ top: $(this).data('original_left')+offset, width: $(this).data('original_width')+scale});
      },
      function() {
        $(this).stop().animate({ top: $(this).data('original_left'), width: $(this).data('original_width')});
        $(this).attr("src", $(this).data('original_source'));
      }
   );
    $('#navprojects').each(setOriginalData).hover(
      function() {
        $(this).attr("src", "images/projects.png");
        $(this).stop().animate({ top: $(this).data('original_left')+offset, width: $(this).data('original_width')+scale});
      },
      function() {
        $(this).stop().animate({  top: $(this).data('original_left'), width: $(this).data('original_width')});
        $(this).attr("src", $(this).data('original_source'));
      }
   );
    $('#navcontact').each(setOriginalData).hover(
      function() {
        $(this).attr("src", "images/contact.png");
        $(this).stop().animate({ top: $(this).data('original_left')+offset, width: $(this).data('original_width')+scale});
      },
      function() {
        $(this).stop().animate({ top: $(this).data('original_left'), width: $(this).data('original_width')});
        $(this).attr("src", $(this).data('original_source'));
      }
   );
});
