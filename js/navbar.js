//On start
activeNavbarController(); // THIS FIRST!
scrollToTask();
menuButton();

function activeNavbarController() {
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
}

function scrollToTask() {
  // Task section controller
  //First task
  $("#n1-task-1").on("click", () => {
    scrollToElement($("#section-2-title"), 25);
  });
  $("#n2-task-1").on("click", () => {
    toggleNavBar2(); // Hide 2nd  navigation when navigation is clicked
    scrollToElement($("#section-2-title"), 100);
  });

  //Second task
  $("#n1-task-2").on("click", () => {
    if ($(".query-4").parent().hasClass("active")) {
      // if it is not active its position is not same
      scrollToElement($(".query-4"), 40);
      return;
    }
    scrollToElement($(".query-4"), 40 + 120);
  });
  $("#n2-task-2").on("click", () => {
    toggleNavBar2(); // Hide 2nd  navigation when navigation is clicked
    if ($(".query-4").parent().hasClass("active")) {
      // if it is not active its position is not same
      scrollToElement($(".section3"), 25);
      return;
    }
    scrollToElement($(".section3"), 25);
  });

  //Third task
  $("#n1-task-3").on("click", () => {
    if ($(".query-5").parent().hasClass("active")) {
      // if it is not active its position is not same
      scrollToElement($(".query-5"), 40);
      return;
    }
    scrollToElement($(".query-5"), 40 + 120);
  });
  $("#n2-task-3").on("click", () => {
    toggleNavBar2(); // Hide 2nd  navigation when navigation is clicked
    if ($(".query-5").parent().hasClass("active")) {
      // if it is not active its position is not same
      scrollToElement($(".query-5"), 125);
      return;
    }
    scrollToElement($(".query-5"), 125 + 120);
  });

  //Fourth task
  $("#n1-task-4").on("click", () => {
    if ($(".query-a").parent().hasClass("active")) {
      // if it is not active its position is not same
      scrollToElement($(".query-a"), 40);
      return;
    }
    scrollToElement($(".query-a"), 40 + 120);
  });
  $("#n2-task-4").on("click", () => {
    toggleNavBar2(); // Hide 2nd  navigation when navigation is clicked
    if ($(".query-a").parent().hasClass("active")) {
      // if it is not active its position is not same
      scrollToElement($(".query-a"), 125);
      return;
    }
    scrollToElement($(".query-a"), 125 + 120);
  });
}

// Hide 2nd  navigation when navigation is clicked
function toggleNavBar2() {
  $("#navbarSupportedContent").toggleClass("show");
  $(".navbar-toggler").toggleClass("collapsed");
}

// Side menu button functionality
function menuButton() {
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
}

function scrollToElement(target, offset) {
  console.log(target);
  $("html, body").animate(
    {
      scrollTop: target.offset().top - offset,
    },
    50
  );
}
