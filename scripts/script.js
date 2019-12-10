// your script file for adding your own jquery


$(function () {
    // Your Code from here on down. Don't delete that line above!




    function toggleIcon() {
        $('.icon').on('click', function () {
            $('.icon').toggleClass('active');
            $('.menu-mobile').slideToggle(300);
        })
    }

    function closeMobileMenu() {
        $('.menu-mobile').on('click', 'a', function () {
            $('.icon').trigger('click');
        })

    }

    var i = 0;
    slideCount = 3;

    function timeout() {
        setTimeout(function () {
            $("#quote" + i).animate({
                right: "120%"
            }, 1000);
            i++;
            if (i > (slideCount - 1)) {
                i = 0;
            }
            $("#quote" + i).css("right", "-60%");
            $("#quote" + i).animate({
                right: "20%"
            }, 1000);
            timeout();
        }, 3000);
    };
    timeout();


    //when the page loads call toggleIcon;
    $(toggleIcon);
    $(closeMobileMenu);
    $(desktopMenu);

});

$(document).ready(function () {
    "use strict";

    //define menu filtering visibility function
    function menuFilter(categoryClass, button) {
        $(".menuListContainer").removeClass("allMenuColor");
        $(".button").removeClass("activeButton");
        button.addClass("activeButton");
        $(".menuList").hide("fast");
        $(categoryClass).show("fast");
    }

    //button click event handlers
    $("#btnAll").click(function () {
        $(".button").removeClass("activeButton");
        $(".menuListContainer").addClass("allMenuColor");
        $(".menuList").show("fast");
    });

    $("#btnHotline").click(function () {
        menuFilter($(".hotline"), $("#btnHotline"));
    });

    $("#btnBeef").click(function () {
        menuFilter($(".beef"), $("#btnBeef"));
    });

    $("#btnSpecialty").click(function () {
        menuFilter($(".specialty"), $("#btnSpecialty"));
    });

    $("#btnCrispy").click(function () {
        menuFilter($(".crispy"), $("#btnCrispy"));
    });

    $("#btnSandwiches").click(function () {
        menuFilter($(".sandwiches"), $("#btnSandwiches"));
    });

    $("#btnBurgers").click(function () {
        menuFilter($(".burgers"), $("#btnBurgers"));
    });
});

$(document).ready(function () {
    $("#submit").click(function () {
        alert("You're form has been submitted. Thank you!");
    });

});

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

