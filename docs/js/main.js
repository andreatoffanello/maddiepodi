const swup = new Swup();





$(document).ready(function() {

	$(".menu_trigger").click(function() {
	      $(".fullscreen-menu").toggleClass("show");
	      $(".menu_trigger").toggleClass("open");
	      $("body").toggleClass( "menu_open" );
	      $(".nav").toggleClass( "menu_open" );
	});

	$(".primary a").click(function() {
		$(".fullscreen-menu").removeClass("show");
		$(".menu_trigger").removeClass("open");
		$("body").removeClass("menu_open");
		$(".nav").removeClass("menu_open");
	});


  function pageloaded() {
	  var boxHeight = $(".grid_box").width();
	  $(".grid_box").height(boxHeight);

	  var boxImgHeight = $(".box_img").width();
	  $(".box_img").height(boxImgHeight);

	  $("#wp-toolbar a, #menu-switch-lingue a").addClass('no-barba');

  };

  pageloaded();

  function bottombar() {

    $('.bar_btn[data-open="share"]').click(function() {

      $('.bottom_panel[data-panel="buy"]').removeClass("show");
      $('.bottom_panel[data-panel="share"]').addClass("show");


    });

    $('.bar_btn[data-open="buy"]').click(function() {

      $('.bottom_panel[data-panel="share"]').removeClass("show");
      $('.bottom_panel[data-panel="buy"]').addClass("show");

    });


    $('[data-close-panel]').click(function() {

      $('.bottom_panel[data-panel="share"]').removeClass("show");
      $('.bottom_panel[data-panel="buy"]').removeClass("show");

    });

  };

  bottombar();



});
