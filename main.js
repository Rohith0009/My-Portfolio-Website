var screen_width = screen.width;
var screen_height = screen.height;

//Extra Stuff Starts

//Smooth Scrolling Starts
$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});
//smooth scroling ends

//mobile Nav Close Starts

//mobile Nav Close Ends

//Extra Stuff Ends