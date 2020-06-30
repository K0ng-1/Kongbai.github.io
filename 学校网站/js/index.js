$(function () {
  $("nav>ul>li:nth-child(2)").hover(
    function () {
      $(".menu1").stop().slideDown(800);
    },
    function () {
      $(".menu1").stop().slideUp(500);
    }
  );
  $("nav>ul>li:nth-child(3)").hover(
    function () {
      $(".menu2").stop().slideDown(800);
    },
    function () {
      $(".menu2").stop().slideUp(500);
    }
  );
  $("nav>ul>li:nth-child(4)").hover(
    function () {
      $(".menu3").stop().slideDown(800);
    },
    function () {
      $(".menu3").stop().slideUp(500);
    }
  );
  $("nav>ul>li:nth-child(5)").hover(
    function () {
      $(".menu4").stop().slideDown(800);
    },
    function () {
      $(".menu4").stop().slideUp(500);
    }
  );
  $("nav>ul>li:nth-child(6)").hover(
    function () {
      $(".menu5").stop().slideDown(800);
    },
    function () {
      $(".menu5").stop().slideUp(500);
    }
  );
  $("nav>ul>li:nth-child(7)").hover(
    function () {
      $(".menu6").stop().slideDown(800);
    },
    function () {
      $(".menu6").stop().slideUp(500);
    }
  );
  $("nav>ul>li:nth-child(8)").hover(
    function () {
      $(".menu7").stop().slideDown(800);
    },
    function () {
      $(".menu7").stop().slideUp(500);
    }
  );
  $("nav>ul>li:nth-child(9)").hover(
    function () {
      $(".menu8").stop().slideDown(800);
    },
    function () {
      $(".menu8").stop().slideUp(500);
    }
  );
  $("nav>ul>li:nth-child(10)").hover(
    function () {
      $(".menu9").stop().slideDown(800);
    },
    function () {
      $(".menu9").stop().slideUp(500);
    }
  );
  $("nav>ul>li:nth-child(11)").hover(
    function () {
      $(".menu10").stop().slideDown(800);
    },
    function () {
      $(".menu10").stop().slideUp(500);
    }
  );
  $("nav>ul>li:nth-child(12)").hover(
    function () {
      $(".menu11").stop().slideDown(800);
    },
    function () {
      $(".menu11").stop().slideUp(500);
    }
  );

  $(".topTab>ul>li:nth-child(2)").hover(
    function () {
      $(".yaowen").css("display", "none");
      $(".kuaixun").css("display", "block");
      $(".topTab>ul>li:nth-child(2)").css({
        "border-bottom": "1px solid #ac1531",
        "padding-bottom": "5px",
      });
      $(".topTab>ul>li:nth-child(1)").css({
        "border-bottom": "1px solid transparent",
        "padding-bottom": "5px",
      });
    },
    function () {
      if ($(".yaowen").css("color", "gray")) {
        $(".topTab>ul>li:nth-child(1)").hover(function () {
          $(".yaowen").css("display", "block");
          $(".kuaixun").css("display", "none");
          $(".topTab>ul>li:nth-child(1)").css({
            "border-bottom": "1px solid #ac1531",
            "padding-bottom": "5px",
          });
          $(".topTab>ul>li:nth-child(2)").css({
            "border-bottom": "1px solid transparent",
            "padding-bottom": "5px",
          });
        });
      }
    }
  );
  $(".servicebtn>button").on("click", function () {
    if ($(".service").css("display") === "none") {
      $(".service").css("display", "block");
    } else if ($(".service").css("display") === "block") {
      $(".service").css("display", "none");
    }
  });

  $(".topLi>ul li:nth-child(1)").hover(function () {
    $(".voice").css("display", "block");
    $(".activety,.report,.recuit").css("display", "none");
    $(".topLi>ul li:nth-child(1)").css("border-bottom", "1px solid #ac1531");
    $(
      ".topLi>ul li:nth-child(2),.topLi>ul li:nth-child(3),.topLi>ul li:nth-child(4)"
    ).css("border-bottom", "1px solid transparent");
  });
  $(".topLi>ul li:nth-child(2)").hover(function () {
    $(".activety").css("display", "block");
    $(".voice,.report,.recuit").css("display", "none");
    $(".topLi>ul li:nth-child(2)").css("border-bottom", "1px solid #ac1531");
    $(
      ".topLi>ul li:nth-child(1),.topLi>ul li:nth-child(3),.topLi>ul li:nth-child(4)"
    ).css("border-bottom", "1px solid transparent");
  });
  $(".topLi>ul li:nth-child(3)").hover(function () {
    $(".report").css("display", "block");
    $(".voice,.activety,.recuit").css("display", "none");
    $(".topLi>ul li:nth-child(3)").css("border-bottom", "1px solid #ac1531");
    $(
      ".topLi>ul li:nth-child(2),.topLi>ul li:nth-child(1),.topLi>ul li:nth-child(4)"
    ).css("border-bottom", "1px solid transparent");
  });
  $(".topLi>ul li:nth-child(4)").hover(function () {
    $(".recuit").css("display", "block");
    $(".voice,.report,.activety").css("display", "none");
    $(".topLi>ul li:nth-child(4)").css("border-bottom", "1px solid #ac1531");
    $(
      ".topLi>ul li:nth-child(2),.topLi>ul li:nth-child(3),.topLi>ul li:nth-child(1)"
    ).css("border-bottom", "1px solid transparent");
  });

  $(window).scroll(function () {
    var scr = $(window).scrollTop();
    if (scr >= 135) {
      $("nav").css("position", "fixed");
    } else{
      $("nav").css("position", "relative");
    }
  });
});
