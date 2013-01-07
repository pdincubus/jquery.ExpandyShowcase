/**
 * expandyShowcase! plugin
 * one big, many small. clicky clicky. alternative type carousely thing.
 * @author Phil Steer
 * https://github.com/pdincubus/jquery.Expandy
 * initial settings are based on four li items in a 1000px wide space
 * Include Easing plugin for further animation options
 * see demo page for basic example
 */
 
 (function($){
  $.fn.expandyShowcase = function(options){
  
	// Create some defaults, extending them with any options that were provided
	var settings = $.extend( {
	  'slideElement' 			: 'li',			//the elements under the container that will be expandable
    'slideTrigger' 			: '.info',	//the element that contains the text content
    'hiddenText' 			  : 'p',			//where's the text that you want to appear?
	  'animationDuration' : 500,			//milliseconds - currently applied to both text and box resizing
	  'slideEasing'				: 'swing',	//default options are swing or linear
	  'compressedSize'		: '164px',	//size of boxes when small
	  'expandedSize'			: '500px',	//size of the "expandy"
	  'firstOpen'				  : 0,			  //eq starts from zero, not one. which box should be opened first automatically
	}, options);

	//apparently this lets us do some chains and stuff.
	return this.each(function() {
		var slides = '#' + $(this).attr('id');
		var slideLink = slides + ' > ' + settings.slideElement + ' > ' + settings.slideTrigger;
		
		//do some initial stuff
		var first = $($(slides + ' ' + settings.slideElement).get(settings.firstOpen));
		
    $(slides).find(settings.hiddenText).css({
      opacity: 0
    });
    
		first.animate({
			width : settings.expandedSize
		}, settings.animationDuration, settings.slideEasing, function(){
      $(this).find(settings.hiddenText).animate({
        opacity: 1
      }, settings.animationDuration);
    }).addClass('active');
		
		$(slideLink).on('click', function(){
			
			if(!$(this).hasClass('active')){
			
				//it's not expanded yet, so do it!
				$(this).parent().siblings().animate({
					width : settings.compressedSize
				}, settings.animationDuration, settings.slideEasing, function(){
          $(this).find(settings.hiddenText).animate({
            opacity: 0
          }, settings.animationDuration);
        }).removeClass('active');
				
				$(this).parent().animate({
					width : settings.expandedSize
				}, settings.animationDuration, settings.slideEasing, function(){
          $(this).find(settings.hiddenText).animate({
            opacity: 1
          }, settings.animationDuration);
        }).addClass('active');
				
			}
		});

	});
  };
})(jQuery);