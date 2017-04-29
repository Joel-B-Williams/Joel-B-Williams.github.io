$(document).ready(function() {
	emailToMe();
});

var emailToMe = function(){
	$('.send-mail').on('click', function(e){
		e.preventDefault();
		var email = 'joel.b.williams.is@gmail.com';

		document.location = 'mailto:'+email+''
	});
};