// When website loads navbar script hide one navbar depending of the current window size
if (window.innerWidth < 576) {
  $("#sidebar").removeClass("active-nav");
  $(".my-container").removeClass("active-cont"); // TODO the bar still shows
  $("#navbar2").show();
  $("#navbar1").hide();
  $("#side-menu-btn").hide();
} else {
  //if screen is wide, show the sidebar menu by adding classes
  $("#navbar2").hide();
  $("#navbar1").show();
  $("#side-menu-btn").show();
}

// When window is being rezised hide one navbar depending of the current window size
$(window).resize(function () {
  if (window.innerWidth < 576) {
    // When we want to show smaller navbar we need to remove the class
    if ($(".my-container").hasClass("active-cont")) {
      $(".my-container").toggleClass("active-cont");
    }
    if ($("#sidebar").hasClass("active-nav")) {
      $("#sidebar").toggleClass("active-nav");
    }
    $("#navbar2").show();
    $("#navbar1").hide();
    $("#side-menu-btn").hide();
  } else {
    $("#navbar2").hide();
    $("#navbar1").show();
    $("#side-menu-btn").show();
  }
});

// Side menu button functionality
if ($("#side-menu-btn") != null) {
  // When button is clicked toggle class names to activate animations from css
  $("#side-menu-btn").on("click", () => {
    $("#sidebar").toggleClass("active-nav");
    $(".my-container").toggleClass("active-cont");
  });
  $("#side-menu-btn").hover(
    // When mouse is over
    function () {
      $("#side-menu-btn").html(">");
    },
    // When mouse leave
    function () {
      $("#side-menu-btn").html("");
    }
  );
}
