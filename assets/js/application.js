$(document).ready(function(){
	setHeight('.splash');
	setHeight('.skills');
	setHeight('.projects');
	setHeight('.muffins');
	setHeight('.divider');
	smoothScroll();
	projectPress();
});

function setHeight(section){
	$(section).height(window.innerHeight);
};

function smoothScroll(){
  $('a[href*="#"]').on("click touch", function(e){
      e.preventDefault();
      var link = $(this).attr('href');
      // captures section from smooth-scroll href
      var section = link.match(/#(.*)/)[1];
      var offset = $(`.${section}`).offset().top;
      $("html, body").animate({ scrollTop: offset });
  });
};

function projectPress(){
	buttonDown();
	buttonUp();
};

function buttonDown(){
	$('.project img').mousedown(function(e){
		e.preventDefault();
		var $this = $(this);
		$this.css({
			'box-shadow': '-1px -1px #888888',
			'border-top': '1px solid #252a33',
			'border-left': '1px solid #252a33',
			'border-right': '1px solid #cecece',
			'border-bottom': '1px solid #cecece'
		});
	});
}

function buttonUp(){
	$('.project img').mouseup(function(e){
		e.preventDefault();
		var $this = $(this);
		$this.css({
			'box-shadow': '2px 2px #888888',
			'border-top': '1px solid #cecece',
			'border-left': '1px solid #cecece',
			'border-right': '1px solid #252a33',
			'border-bottom': '1px solid #252a33'
		});
	});
}

