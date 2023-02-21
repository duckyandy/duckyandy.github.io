$(document).ready(() => {
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });

  var typed = new Typed(".element", {
    strings: [
      "Andy Kwak",
      "a Hungry Developer",
      "a Life-Long Learner",
      "and wish to stay humble.",
    ],
    smartBackSpace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });

  //experience progress bars

  var waypoint = new Waypoint({
    element: document.getElementById("exp-id"),
    handler: function () {
      var p = document.querySelectorAll(".progress-bar");
      p[0].setAttribute("style", "width:80%;transition:2s all");
      p[1].setAttribute("style", "width:80%;transition:2.25s all");
      p[2].setAttribute("style", "width:70%;transition:2.5s all");
      p[3].setAttribute("style", "width:80%;transition:2.75s all");
      p[4].setAttribute("style", "width:60%;transition:3s all");
      p[5].setAttribute("style", "width:70%;transition:3.25s all");
      p[6].setAttribute("style", "width:60%;transition:3.5s all");
      p[7].setAttribute("style", "width:80%;transition:3.75s all");
      p[8].setAttribute("style", "width:80%;transition:4s all");
      p[9].setAttribute("style", "width:20%;transition:4.25s all");
    },
    offset: "80%",
  });
});
