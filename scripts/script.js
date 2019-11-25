// your script file for adding your own jquery
$(function () {
    // Your Code from here on down. Don't delete that line above!

    'use strict'


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



   

    //when the page loads call toggleIcon;
    $(toggleIcon);
    $(closeMobileMenu);
    $(desktopMenu);



    var i = 0;
	slideCount = 5;
	function timeout() {
		setTimeout(function() {
			$("#quote" + i).animate({
				right: "120%"
			}, 2000);
			i++;
			if(i > (slideCount - 1)) {
				i = 0;
			}
			$("#quote" + i).css("right", "-60%");
			$("#quote" + i).animate({
				right: "20%"
			}, 2000);
			timeout();
		}, 7000);
	};
	timeout();


    // End of Your Code . Don't delete that line below!!
});
