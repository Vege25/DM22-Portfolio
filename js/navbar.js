// When website loads navbar script hide one navbar depending of the current window size
if (window.innerWidth < 576) {
  $("#navbar2").show();
  $("#navbar1").hide();
  $("#side-menu-btn").hide();
} else {
  $("#navbar2").hide();
  $("#navbar1").show();
  $("#side-menu-btn").show();
}
// When window is being rezised hide one navbar depending of the current window size
$(window).resize(function () {
  if (window.innerWidth < 576) {
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
if ($("#side-menu-btn") != null) {
  $("#side-menu-btn").on("click", () => {
    $("#sidebar").toggleClass("active-nav");
    $(".my-container").toggleClass("active-cont");
  });
}
