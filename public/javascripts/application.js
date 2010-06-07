// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() {
    $('#navhome').hover(
      function() {
        $(this).stop().animate({ left: '50', width: '476' });
      },
      function() {
        $(this).stop().animate({ left: '0', width: '398' });
      }
   );
    $('#navabout').hover(
      function() {
        $(this).stop().animate({ left: '50', width: '428' });
      },
      function() {
        $(this).stop().animate({ left: '0', width: '348' });
      }
   );
    $('#navprojects').hover(
      function() {
        $(this).stop().animate({ left: '50', width: '431' });
      },
      function() {
        $(this).stop().animate({  left: '0', width: '351' });
      }
   );
    $('#navcontact').hover(
      function() {
        $(this).stop().animate({ left: '50', width: '500'});
      },
      function() {
        $(this).stop().animate({ left: '0', width: '420'});
      }
   );
});
