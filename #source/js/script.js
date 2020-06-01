//Menu position fixed, top
$(document).ready(function() {
	var start_pos=$('.header').offset().top;
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 130) {
			if ($('.header').hasClass()==false) $('.header').addClass('change');
		}
		else $('.header').removeClass('change');
	});
});
//Menu position fixed, top