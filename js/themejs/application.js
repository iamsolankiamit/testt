/* -------------------------------------------------------------------------------- /

	Avendor jQuery
	Created by 4grafx
	v1.0 - 20.02.2014
	All rights reserved.

	+----------------------------------------------------+
		TABLE OF CONTENTS
	+----------------------------------------------------+

	[1]		Page Preloader
	[2]		Initialize Boostrap
	[3]		Main Menu
	[4]		Smooth Scroll to Section
	[5]		Sticky Nav Bar
	[6]		Panel Slide
	[7]		Revolution Slider
	[8]		Revolution Shop Slider
	[9]		Portfolio
	[10]	OWL Carousel
	[11]	Parallax
	[12]	Lightbox
	[13]	Tooltips
	[14]	Animation on Scroll
	[15]	Google Maps
	[16]	Counters
	[17]	Pie Chart
	[18]	Twitter
	[19]	Back to top
	[20]	Under Construction Counter
	[21]	Animate Demo - remove on production websites

/ -------------------------------------------------------------------------------- */

var gfx=jQuery;
gfx.noConflict();

/* ---------------------------------------------------
	Page Preloader
-------------------------------------------------- */



    gfx("body").queryLoader2({
        barColor: "#32313b",
        backgroundColor: "#1b1b22",
        percentage: true,
        barHeight: 1,
        completeAnimation: "grow",
        minimumTime: 100,
		onLoadComplete: hidePreLoader

    });

function hidePreLoader() {
        gfx("#preloader").hide();
    }


/* ---------------------------------------------------
	Initialize Boostrap
-------------------------------------------------- */

!function (gfx) {

  gfx(function(){
    // Bootstrap Tooltip
    gfx("[data-toggle=tooltip-boot]").tooltip()

    // Bootstrap Popover
    gfx("[data-toggle=popover]")
      .popover()
		}
	)
}(window.jQuery)

/* ---------------------------------------------------
	Main Menu
-------------------------------------------------- */


gfx('.navbar .dropdown').hover(function() {
gfx(this).addClass('open').find('.dropdown-menu').first().stop(true, true).slideDown(300);
    }, function() {
gfx(this).removeClass('open').find('.dropdown-menu').first().stop(true, true).hide(300);
    });

gfx('.navbar .dropdown > a').click(function(){
location.href = this.href;
});


gfx(document).on('click', '.gfx-nav .dropdown-menu', function(e) {
  e.stopPropagation()
})


/* ---------------------------------------------------
	Smooth Scroll to Section
-------------------------------------------------- */

    gfx(function() {
        gfx('a.smooth-scroll[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = gfx(this.hash);
                target = target.length ? target : gfx('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    gfx('html,body').animate({
                        scrollTop: target.offset().top
                    }, 2000, 'easeInOutExpo');
                    return false;
                }
            }
        });
    });


/* ---------------------------------------------------
	Sticky Bar
-------------------------------------------------- */

            gfx(function() {

                gfx(".header-main").stickOnScroll({
                    topOffset: 0,
                    setParentOnStick:   true
                });

				 var shrinkHeader = 600;
  					gfx(window).scroll(function() {
    				var scroll = getCurrentScroll();
      					if ( scroll >= shrinkHeader ) {
           					gfx('.header-main').addClass('shrink');
        					}
       					else {
            				gfx('.header-main').removeClass('shrink');
        					 }
						});
				function getCurrentScroll() {
				return window.pageYOffset || document.documentElement.scrollTop;
				}

            });


/* ---------------------------------------------------
	Panel Slide
-------------------------------------------------- */


gfx(document).ready(function(){

	gfx(".slide-panel-btn").click(function(){
		gfx("#slide-panel").slideToggle(250);
		gfx(this).toggleClass("active"); return false;
	});


});



/* ---------------------------------------------------
	Revolution Slider
-------------------------------------------------- */
				jQuery(document).ready(function() {



					jQuery('.tp-banner').show().revolution(
					{
						delay:800,
						startwidth:1170,
						startheight:700,
						hideThumbs:200,

						thumbWidth:100,
						thumbHeight:50,
						thumbAmount:3,

						navigationType:"none",
						navigationArrows:"solo",
						navigationStyle:"preview4",

						touchenabled:"on",
						onHoverStop:"on",

						swipe_velocity: 0.7,
						swipe_min_touches: 1,
						swipe_max_touches: 1,
						drag_block_vertical: false,

						parallax:"scroll",
						parallaxBgFreeze:"on",
						parallaxLevels:[10,20,30,40,50,60,70,80,90,100],

						keyboardNavigation:"off",

						navigationHAlign:"center",
						navigationVAlign:"bottom",
						navigationHOffset:0,
						navigationVOffset:20,

						soloArrowLeftHalign:"left",
						soloArrowLeftValign:"center",
						soloArrowLeftHOffset:20,
						soloArrowLeftVOffset:0,

						soloArrowRightHalign:"right",
						soloArrowRightValign:"center",
						soloArrowRightHOffset:20,
						soloArrowRightVOffset:0,

						shadow:0,
						fullWidth:"off",
						fullScreen:"on",

						spinner:"spinner4",

						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,

						shuffle:"off",

						autoHeight:"off",
						forceFullWidth:"off",

						hideThumbsOnMobile:"off",
						hideNavDelayOnMobile:1500,
						hideBulletsOnMobile:"off",
						hideArrowsOnMobile:"off",
						hideThumbsUnderResolution:0,

						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						startWithSlide:0,
						fullScreenOffsetContainer: ".header-wrapper"
					});




				});	//ready

/* ---------------------------------------------------
	Revolution Shop Slider
-------------------------------------------------- */
				jQuery(document).ready(function() {



					jQuery('.shop-slider').show().revolution(
					{
						dottedOverlay:"none",
						delay:16000,
						startwidth:1170,
						startheight:600,
						hideThumbs:200,

						thumbWidth:100,
						thumbHeight:50,
						thumbAmount:3,

						navigationType:"none",
						navigationArrows:"solo",
						navigationStyle:"preview4",

						touchenabled:"on",
						onHoverStop:"on",

						swipe_velocity: 0.7,
						swipe_min_touches: 1,
						swipe_max_touches: 1,
						drag_block_vertical: false,

						parallax:"scroll",
						parallaxBgFreeze:"on",
						parallaxLevels:[10,20,30,40,50,60,70,80,90,100],

						keyboardNavigation:"off",

						navigationHAlign:"center",
						navigationVAlign:"bottom",
						navigationHOffset:0,
						navigationVOffset:20,

						soloArrowLeftHalign:"left",
						soloArrowLeftValign:"center",
						soloArrowLeftHOffset:20,
						soloArrowLeftVOffset:0,

						soloArrowRightHalign:"right",
						soloArrowRightValign:"center",
						soloArrowRightHOffset:20,
						soloArrowRightVOffset:0,

						shadow:0,
						fullWidth:"off",
						fullScreen:"off",

						spinner:"spinner4",

						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,

						shuffle:"off",

						autoHeight:"off",
						forceFullWidth:"off",

						hideThumbsOnMobile:"off",
						hideNavDelayOnMobile:1500,
						hideBulletsOnMobile:"off",
						hideArrowsOnMobile:"off",
						hideThumbsUnderResolution:0,

						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						startWithSlide:0,
						fullScreenOffsetContainer: ".header-wrapper"
					});




				});	//ready

/* ---------------------------------------------------
	Portfolio
-------------------------------------------------- */

		gfx(document).ready(function(){



			// "colio" plugin
			gfx('.portfolio .portfolio-grid').colio({
				theme: 'gfx',
				placement: 'after',
				scrollOffset: 60,
				expandLink: '.portfolio-expand',          // selector for element to expand colio viewport
    			expandDuration: 900,                // duration of expand animation, ms
    			expandEasing: 'swing',              // easing for expand animation
    			collapseDuration: 500,              // duration of collapse animation, ms
    			collapseEasing: 'swing',            // easing for collapse animation
    			scrollDuration: 1300,                // page scroll duration, ms
    			scrollEasing: 'swing',              // page scroll easing
    			syncScroll: true,                  // sync page scroll with expand/collapse of colio viewport
    			contentFadeIn: 900,                 // content fade-in duration, ms
    			contentFadeOut: 300,                // content fade-out duration, ms
    			contentDelay: 600,                  // content fade-in delay on expand, ms
				closeText: '<span>X</span>',    // text/html for close button
				nextText: '<span></span>',      // text/html for next button
    			prevText: '<span></span>',      // text/html for previous button
				hiddenItems: '.isotope-hidden',
				onExpand: 	function(content){gfx(".colio").resize() },

				onContent: function(content){

						gfx('.carousel-box-portfolio .carousel',content).each(function(index, element) {

							var carousel = gfx(this).closest('.carousel-box-portfolio');

							gfx(this).owlCarousel({
								//direction:'rtl', //use if your site is RTL
								autoPlay	 	 : gfx(this).data('carousel-autoplay'),
								items		 	 : gfx(this).data('carousel-items'),
								navigation		 : gfx(this).data('carousel-nav'),
								pagination		 : gfx(this).data('carousel-pagination'),
								singleItem		 : gfx(this).data('carousel-single'),
								transitionStyle	 : gfx(this).data('carousel-transition'),
								slideSpeed	     : gfx(this).data('carousel-speed'),
								navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
							})

						});


						if (gfx().magnificPopup) {
												  gfx('[data-lightbox=image], .lightbox').each(function(index, element) {gfx(this).magnificPopup({type:'image',	mainClass: 'mfp-fade',removalDelay: 300, fixedContentPos: false,  fixedBgPos: true,  overflowY: 'auto',	closeOnContentClick: true}); });
												  gfx('[data-lightbox=video], [data-lightbox=map], [data-lightbox=iframe], .lightbox-video, .lightbox-map, .lightbox-iframe').each(function(index, element) {gfx(this).magnificPopup({mainClass: 'mfp-fade', removalDelay: 300, fixedContentPos: false, fixedBgPos: true, overflowY: 'auto',  type: 'iframe',  fixedContentPos: false});});
												  gfx('[data-lightbox=gallery], .lightbox-gallery').each(function(index, element) {gfx(this).magnificPopup({mainClass: 'mfp-fade',
removalDelay: 300, fixedContentPos: false, fixedBgPos: true, overflowY: 'auto',  type: 'image', delegate: 'a', gallery: { enabled: true}});});
												};
					}

			});



			// "isotope" plugin
			var $container = gfx('.portfolio-grid');
			$container.imagesLoaded( function(){
				$container.isotope({

				});
			});

			var filter = '*', isotope_run = function(f) {
				$container.isotope({filter: f}).
				trigger('colio','excludeHidden');
			};
			gfx('#filters a').click(function(){
				var selector = gfx(this).attr('data-filter');
				$container.isotope({ filter: selector });
				return false;
			});

			// set selected menu items
			var $optionSets = gfx('.option-set'),
			$optionLinks = $optionSets.find('a');
			$optionLinks.click(function(){
				var $this = gfx(this);
				// don't proceed if already selected
				if ( $this.hasClass('selected') ) {
				return false;
				}
			var $optionSet = $this.parents('.option-set');
			$optionSet.find('.selected').removeClass('selected');
			$this.addClass('selected');
			});

			isotope_run(filter);

		});


/* ---------------------------------------------------
	OWL Carousel
-------------------------------------------------- */

  gfx('.carousel-box .carousel').each(function () {
	var carousel = gfx(this).closest('.carousel-box');

		gfx(this).owlCarousel({
			//direction		 :'rtl', //use if your site is RTL
	  		autoPlay	 	 : gfx(this).data('carousel-autoplay'),
	  		items		 	 : gfx(this).data('carousel-items'),
			navigation		 : gfx(this).data('carousel-nav'),
			pagination		 : gfx(this).data('carousel-pagination'),
			singleItem		 : gfx(this).data('carousel-single'),
			transitionStyle	 : gfx(this).data('carousel-transition'),
			slideSpeed	     : gfx(this).data('carousel-speed'),
			navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			lazyLoad : true,
	  		autoHeight : true,
		})
  });


/* Sync Carousel */

    gfx(document).ready(function() {

    var sync1 = gfx("#full-sync");
    var sync2 = gfx("#thumb-sync");

    sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: false,
    pagination:false,
	transitionStyle : "fade",
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
    });

    sync2.owlCarousel({
    items : 3,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,3],
	itemsTablet : [768,3],
	itemsMobile : [479,2],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
    el.find(".owl-item").eq(0).addClass("synced");
    }
    });

    function syncPosition(el){
    var current = this.currentItem;
    gfx("#thumb-sync")
    .find(".owl-item")
    .removeClass("synced")
    .eq(current)
    .addClass("synced")
    if(gfx("#thumb-sync").data("owlCarousel") !== undefined){
    center(current)
    }
    }

    gfx("#thumb-sync").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = gfx(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
    });

    function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
    if(num === sync2visible[i]){
    var found = true;
    }
    }

    if(found===false){
    if(num>sync2visible[sync2visible.length-1]){
    sync2.trigger("owl.goTo", num - sync2visible.length+2)
    }else{
    if(num - 1 === -1){
    num = 0;
    }
    sync2.trigger("owl.goTo", num);
    }
    } else if(num === sync2visible[sync2visible.length-1]){
    sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
    sync2.trigger("owl.goTo", num-1)
    }
    }

    });




/* ---------------------------------------------------
	Parallax
-------------------------------------------------- */


		gfx(function(){
			gfx.stellar({
				horizontalScrolling: false,
				verticalOffset: 0,
			});
		});


/* ---------------------------------------------------
	Lightbox
-------------------------------------------------- */


if (gfx().magnificPopup) {
	gfx('[data-lightbox=image], .lightbox').each(function(index, element) {
		gfx(this).magnificPopup({
			type:'image',
			mainClass: 'mfp-fade',
			fixedContentPos: false,
           	fixedBgPos: true,
           	overflowY: 'auto',
			removalDelay: 300,
			closeOnContentClick: true,

		});
	});

	gfx('[data-lightbox=video], [data-lightbox=map], [data-lightbox=iframe], .lightbox-video, .lightbox-map, .lightbox-iframe').each(function(index, element) {
		gfx(this).magnificPopup({
			mainClass: 'mfp-fade',
			removalDelay: 300,
			fixedContentPos: false,
           	fixedBgPos: true,
           	overflowY: 'auto',
		  	type: 'iframe',
		  	fixedContentPos: false
		});
	});

	gfx('[data-lightbox=gallery], .lightbox-gallery').each(function(index, element) {
		gfx(this).magnificPopup({
			mainClass: 'mfp-fade',
			removalDelay: 300,
			fixedContentPos: false,
           	fixedBgPos: true,
           	overflowY: 'auto',
		  	type: 'image',
		  	delegate: 'a',
			gallery: {
				enabled: true
			}
		});
	});


};


/* ---------------------------------------------------
	Tooltips
-------------------------------------------------- */

        gfx(document).ready(function() {
            gfx(".ToolTip").OpieTooltip({

            });
        });

/* ---------------------------------------------------
	Animation on Scroll
-------------------------------------------------- */

gfx('.animation').waypoint(function(direction) {
  gfx(this).addClass('animation-active');
}, { 	offset: '100%',
triggerOnce: true });

/* ---------------------------------------------------
	Google Maps
-------------------------------------------------- */
gfx(document).ready(function () {

if (gfx('#google-map-footer').length>0) {
	var e=new google.maps.LatLng(20.264927, 73.004852),
		o={zoom:17,center:new google.maps.LatLng(20.264927, 73.004852),
		mapTypeId:google.maps.MapTypeId.ROADMAP,
		mapTypeControl:false,
		scrollwheel:false,
		zoomControl: true,
		zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
		draggable:!0,
		navigationControl:!1,
		styles: [	{featureType:"administrative",elementType:"all",stylers:[{visibility:"on"},{saturation:-100},{lightness:20}]},	{featureType:"road",elementType:"all",stylers:[{visibility:"on"},{saturation:-100},{lightness:40}]},	{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{saturation:-10},{lightness:30}]},	{featureType:"landscape.man_made",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60},{lightness:10}]},	{featureType:"landscape.natural",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60},{lightness:60}]},	{featureType:"poi",elementType:"all",stylers:[{visibility:"off"},{saturation:-100},{lightness:60}]},	{featureType:"transit",elementType:"all",stylers:[{visibility:"off"},{saturation:-100},{lightness:60}]}]
	},
		n=new google.maps.Map(document.getElementById("google-map-footer"),o);
		google.maps.event.addDomListener(window,"resize",function(){var e=n.getCenter();
		google.maps.event.trigger(n,"resize"),n.setCenter(e)});

		var g='<div class="map-marker"><h4 class="color-dark xbold">ASTORION</h4><p>D &amp; n H, India</p><p>Silvassa, Garden City.</p></div>',a=new google.maps.InfoWindow({content:g})
		,t=new google.maps.MarkerImage("img/theme/logo-ams-bw.png",new google.maps.Size(157,70),
		new google.maps.Point(0,0),new google.maps.Point(75,50)),
		i=new google.maps.LatLng(20.264927, 73.004852),
		p=new google.maps.Marker({position:i,map:n,icon:t,zIndex:3});
		google.maps.event.addListener(p,"click",function(){a.open(n,p)}),
		gfx(".gmap-button").click(function(){gfx("#google-map-footer").slideToggle(300,function(){google.maps.event.trigger(n,"resize"),n.setCenter(e)}),
		gfx(this).toggleClass("show-map")});

}

if (gfx('#google-map').length>0) {

	var e=new google.maps.LatLng(20.264927, 73.004852),
		o={zoom:17,center:new google.maps.LatLng(20.264927, 73.004852),
		mapTypeId:google.maps.MapTypeId.ROADMAP,
		mapTypeControl:false,
		scrollwheel:false,
		zoomControl: true,
		zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
		draggable:!0,
		navigationControl:!1,
		styles: [	{featureType:"administrative",elementType:"all",stylers:[{visibility:"on"},{saturation:-100},{lightness:20}]},	{featureType:"road",elementType:"all",stylers:[{visibility:"on"},{saturation:-100},{lightness:40}]},	{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{saturation:-10},{lightness:30}]},	{featureType:"landscape.man_made",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60},{lightness:10}]},	{featureType:"landscape.natural",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60},{lightness:60}]},	{featureType:"poi",elementType:"all",stylers:[{visibility:"off"},{saturation:-100},{lightness:60}]},	{featureType:"transit",elementType:"all",stylers:[{visibility:"off"},{saturation:-100},{lightness:60}]}]
	},
		n=new google.maps.Map(document.getElementById("google-map"),o);
		google.maps.event.addDomListener(window,"resize",function(){var e=n.getCenter();
		google.maps.event.trigger(n,"resize"),n.setCenter(e)});

		var g='<div class="map-marker"><h4 class="color-dark xbold">ASTORION</h4><p>D &amp; n H, India</p><p>Silvassa, Garden City.</p></div>',a=new google.maps.InfoWindow({content:g})
		,t=new google.maps.MarkerImage("img/theme/logo-ams-bw.png",new google.maps.Size(157,70),
		new google.maps.Point(0,0),new google.maps.Point(75,50)),
		i=new google.maps.LatLng(20.264927, 73.004852),
		p=new google.maps.Marker({position:i,map:n,icon:t,zIndex:3});
		google.maps.event.addListener(p,"click",function(){a.open(n,p)}),
		gfx(".gmap-button").click(function(){gfx("#google-map").slideToggle(300,function(){google.maps.event.trigger(n,"resize"),n.setCenter(e)}),
		gfx(this).toggleClass("show-map")});

}

});

/* ---------------------------------------------------
	Team Members
-------------------------------------------------- */
gfx(".team-wrapper").on("click", function() {
    gfx(this).toggleClass('cardtoggle').siblings().removeClass('cardtoggle');
});

/* ---------------------------------------------------
	Counters
-------------------------------------------------- */

gfx('.counter').waypoint(function(direction) {
  gfx(this).addClass('timer');
  gfx('.timer').countTo()
}, { 	offset: '100%',
triggerOnce: true });

gfx('.timer').countTo()


/* ---------------------------------------------------
	Pie Chart
-------------------------------------------------- */

gfx(document).ready(function()

	{ jQuery(".chart").waypoint(function(direction) {

  gfx('.progress-pie .chart').each(function () {
	var carousel = gfx(this).closest('.progress-pie');

    gfx(this).easyPieChart({
		barColor: gfx(this).data('bar-color'),
		trackColor: gfx(this).data('track-color'),
		scaleColor: gfx(this).data('scale-color'),
		lineWidth: gfx(this).data('line-width'),
		lineCap: "butt",
		scaleLength: 6,
		size:180,
		rotate: 0,
		animate:2000,

    })
  });
	}, { offset: '100%',
triggerOnce: true }); });




/* ---------------------------------------------------
	Twitter
-------------------------------------------------- */

      gfx(function($){
        gfx(".twitterfeed").tweet({
			modpath: "http://fourgrafx.com/avendor/avendor-multipage/twitter/",
          	username: "4grafx",
          	count: 3,
			template: "{join}{text}{time}{avatar}",
          	loading_text: "loading tweets..."
			});
		});

      gfx(function($){
        gfx(".twitter").tweet({
			modpath: "http://fourgrafx.com/avendor/avendor-multipage/twitter/",
          	username: "4grafx",
			avatar_size: 48,
          	count: 3,
			template: "{avatar}{join}{text}{time}",
          	loading_text: "loading tweets..."
			});
		});

      gfx(function($){
        gfx(".twitter-footer").tweet({
			modpath: "http://fourgrafx.com/avendor/avendor-multipage/twitter/",
          	username: "4grafx",
          	count: 2,
			template: "{join}{text}{time}",
          	loading_text: "loading tweets..."
			});
		});

		/* -- Twitter Carousel -- */
		gfx(document).ready(function() {

    		gfx(".twitterfeed .tweet_list").owlCarousel({

    			autoPlay: false,
				items : 1,
				singleItem : true,
				navigation: true,
				pagination:true,
				slideSpeed : 1200,
				paginationSpeed : 1200,
				navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  			autoHeight : true,
				});

		});



/* ---------------------------------------------------
	Video BG
-------------------------------------------------- */



/* Shop Input */
gfx('.qup').on('click',function(){
    gfx('.input-quantity').val(parseInt(gfx('.input-quantity').val())+1);
});

gfx('.qdown').on('click',function(){
    gfx('.input-quantity').val(parseInt(gfx('.input-quantity').val())-1);
});


/* ---------------------------------------------------
	Back to Top
-------------------------------------------------- */

gfx(document).ready(function(){

	gfx(window).scroll(function(){
	    if (gfx(this).scrollTop() > 100) {
	        gfx('.scrollup').fadeIn();
	    } else {
	        gfx('.scrollup').fadeOut();
	    }
	});

});

/* ---------------------------------------------------
	UnderConstruction Counter
-------------------------------------------------- */

      gfx(function() {
        var endDate = "May 12, 2015 09:03:25";

        gfx('.countdown.styled').countdown({
          date: endDate,
          render: function(data) {
            gfx(this.el).html("<div class='col-md-3 col-sm-6'><div class='counter-block'>" + this.leadingZeros(data.days, 3) + " <span>days</span></div></div><div class='col-md-3 col-sm-6'><div class='counter-block'>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div></div><div class='col-md-3 col-sm-6'><div class='counter-block'>" + this.leadingZeros(data.min, 2) + " <span>min</span></div></div><div class='col-md-3 col-sm-6'><div class='counter-block'>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div></div>");
          }
        });


      });


/* ---------------------------------------------------
	Animate Demo - can be removed on production website
-------------------------------------------------- */
  function testAnim(x) {
    gfx('#animationSandbox').removeClass().addClass(x + ' animation animation-active').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function(){
      gfx(this).removeClass();
    });
  };

  gfx(document).ready(function(){
    gfx('.js--triggerAnimation').click(function(){
      var anim = gfx('.js--animations').val();
      testAnim(anim);
    });
  });



