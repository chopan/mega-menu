/**
 * jQuery.megaMenu
 * 
 * Licensed under GPL.
 * Date: 9/9/2011
 *
 * Tested on FF 2/3, IE 7/8/9, Opera 9.5/6, Safari 3, Chrome
 *
 * @author Carlos Fco Garcia
 * @version 0.1
 * Carlos Fco. Garcia - chopan(at)gmail(dot)com | http://chopan.tumblr.com
 */
(function($) {
	$.fn.megaMenu = function(options) {
	
	    // Valores para configuracion Predeterminada
	    var opts = jQuery.extend({},jQuery.fn.megaMenu.defaults, options);
		jQuery.fn.megaMenu.defaults = {
			mHeight: "400px",
			mHeaderHeight: "35px",
		};
		
		//Funcion que hace una pausa para que el lanzador tenga un retrazo
		$.fn.pause = function(duration) {
	            $(this).stop().animate({ dummy: 1 }, duration);
	            return this;
	        };
		//Estilos para la altura de los titulos visibles
		$("#mMenu").css({'height': opts.mHeaderHeight, 'overflow-x': 'hidden', 'overflow-y': 'hidden'});
		$("#mWrapper").css({'height': opts.mHeaderHeight});
		$("#mHidden").css({'top': opts.mHeaderHeight});
		$(".mWrapper span").css({ 'height':opts.mHeaderHeight, 'line-height':opts.mHeaderHeight})
		
        //Quita el borde del ultimo li de los UL internos
	    $(".mHidden .menu li:last-child a").css("border", "none");
	    $("#mMenu li:last-child span").css("border-right", "none");
	
	    //Lanzador con una pausa
        $("#mMenu").mouseenter(function() { 
            $(this).stop().pause(60).animate({ height: opts.mHeight }, 200); 
        });

        $(".mWrapper").mouseenter(
            function(){
                          var divId = $(this).attr('id');
                          $(".mContent"+divId).css("height", opts.mHeight).slideDown().show()
                          $(this).find("span").css({'border-left':'1px solid #555'})
                          $(this).prev().find("span").css({'border-right':'1px solid transparent'})
                          $(this).next().find("span").css({'border-left':'1px solid transparent'})
                     });
                                
        $(".mWrapper").mouseleave(
            function(){
                          var divId = $(this).attr('id');
                          $(".mContent"+divId).hide()
                          $(this).find("span").css({'border-left':'1px solid #a3a3a3'})
                          $(this).prev().find("span").css({'border-right':'1px solid #555'})
                          $(this).next().find("span").css({'border-left':'1px solid #a3a3a3'})
                     });
                     
        $("#mMenu").mouseleave(function() { 
            $(this).stop().pause(60).animate({ height:opts.mHeaderHeight }, 400); 
        });

	}	
		
})(jQuery);
