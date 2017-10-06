$(document).ready(function(){
	setHeight('.splash');
	setHeight('.skills');
	setHeight('.projects');
	setHeight('.muffins');
	setHeight('.divider');
	smoothScroll();
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