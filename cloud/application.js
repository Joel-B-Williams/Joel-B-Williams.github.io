$(document).ready(function() {
	emailToMe();
	smoothScroll();
});

var emailToMe = function(){
	$('.send-mail').on('click', function(e){
		e.preventDefault();
		var email = 'joel.b.williams.is@gmail.com';

		document.location = 'mailto:'+email+''
	});
};

var smoothScroll = function(){
	$('a[href^="#"]').on('click', function(e){
		e.preventDefault();

		var target = this.hash
		var $target = $(target);

		$('body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function() {
			window.location.hash = target;
		});
	});
	
}