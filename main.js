$(document).ready(function () {
  var icon_normal = document.getElementById("icon-normal");
  var icon_close = document.getElementById("icon-close");

  icon_close.style.display = "none";
  //                                         STICKY NAVIGATION
  //
  $(".grid-container").waypoint(function (direction) {
    if (direction == "down") {
      var x = $(".nav-bar");
      x.addClass("sticky-nav");
    } else {
      $(".nav-bar").removeClass("sticky-nav");
    }
  });

  //   =======================================================================================================
  //                                           SCROLL BUTTONS
  //
  //   $(".js--scroll-to-plans").click(function () {
  //     $("html,body").animate(
  //       { scrollTop: $(".js--section-plans").offset().top },
  //       1000
  //     );
  //   });

  //   $(".js--scroll-to-start").click(function () {
  //     $("html,body").animate(
  //       { scrollTop: $(".js--section-features").offset().top },
  //       500
  //     );
  //   });

  //   =======================================================================================================
  // NAVIGATION MENU OPEN ON CLICK

  $(".nav-bar__icon").click(function (e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    // alternate option .......
    // var x = $(".nav-bar");

    var x = document.getElementById("nav-bar__option");
    if (x.className === "nav-bar__option") {
      x.className += " responsive animate__animated animate__bounceInRight";

      icon_close.style.display = "block";
      icon_normal.style.display = "none";
    } else {
      x.className = "nav-bar__option";
      icon_close.style.display = "none";
      icon_normal.style.display = "block";
    }
    if (target.length) {
      var scrollTo = target.offset().top;
      $("body, html").animate({ scrollTop: scrollTo + "px" }, 800);
    }
  });

  //   =======================================================================================================
  //                                            ANCHOR SCROLLS
  //
  $(".js-scroll").click(function (e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    var x = document.getElementById("nav-bar__option");
    if (x.className === "nav-bar__option") {
    } else {
      x.className = "nav-bar__option";
      icon_close.style.display = "none";
      icon_normal.style.display = "block";
    }
    if (target.length) {
      var scrollTo = target.offset().top;
      $("body, html").animate({ scrollTop: scrollTo + "px" }, 800);
    }
  });
});
