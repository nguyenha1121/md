// ********************** Start Customize JS ******************
function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 200,
  main_nav = document.getElementById('main-nav');
  topheader = document.getElementById('top-header');
	toggle_btn = document.getElementById('toggle-bottom-btn');
  bot_header = document.getElementById('bottom-header');
  if(main_nav){
  	 if (distanceY > shrinkOn) {
			main_nav.classList.add("smaller");
	    topheader.classList.add("smaller");
	    toggle_btn.classList.add("smaller");
	    bot_header.classList.add("smaller");
	  } else {
			main_nav.classList.remove("smaller");
	    topheader.classList.remove("smaller");
	    toggle_btn.classList.remove("smaller");
	    bot_header.classList.remove("smaller");
	  }
  }
 
}

window.addEventListener('scroll', resizeHeaderOnScroll);
// ********************** End Customize JS ******************




$(document).ready(function(){
	$('.ng-loc').html('<i class="fa fa-chevron-right" aria-hidden="true">');
	$('.ng-loc').click(function(){
		var s = $(this).attr('data-dp');
		if(s == "0"){
			$(this).attr('data-dp','1');
			$(this).html('<i class="fa fa-chevron-left" aria-hidden="true">');
			$(this).css("color","#fff");
			$(this).css("border","1px solid #fff");
			$(".ng-hack").toggle("slow");
		} else{
			$(this).attr('data-dp','0');
			$(this).html('<i class="fa fa-chevron-right" aria-hidden="true">');
			$(".ng-hack").toggle("slow");
			$(this).css("color","#000");
			$(this).css("border","1px solid #000");
		}
		console.log(s);
	});

	  $('#toggle-bottom-btn').on('click', function() {
	    if ($('#bottom-header').hasClass('smaller')) {
	      $('#bottom-header').parent('.collapse').addClass('in');
	      $('#bottom-header').removeClass('smaller');
	    }
	  });

	if (matchMedia) {
	  var mq = window.matchMedia("(min-width: 768px)");
	  mq.addListener(WidthChange);
	  WidthChange(mq);
	}

	// media query change
	function WidthChange(mq) {
	  if (mq.matches) {
	  	console.log(1);
	    $('.slick-slider').slick({
			dots: false,
			responsive: [{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false
				}
			}],
			nextArrow: '<a class="hn-5-next" href="#"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>',
			prevArrow: '<a class="hn-5-prev" href="#"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>'
		});
	  } else {
	  	console.log(2);
	  	$('.slick-slider-small').slick({
			dots: false,
			arrows: false,
			responsive: [{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				}
			}],
			nextArrow: '<a class="hn-5-next" href="#"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>',
			prevArrow: '<a class="hn-5-prev" href="#"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>'
		});
		$('.slick-slider-small2').slick({
			dots: false,
			arrows: false,
			responsive: [{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			}],
			nextArrow: '<a class="hn-5-next" href="#"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>',
			prevArrow: '<a class="hn-5-prev" href="#"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>'
		});
	    // window width is less than 500px
	  }

	}

	$('.slider-footer').slick({
		  dots: false,
		  infinite: true,
		  adaptiveHeight: true,
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		      	arrows: false,
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		      	arrows: false,
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        unslick: true
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ],
		   adaptiveHeight: true,
		  	nextArrow: '<a class="hn-5-nextx" href="#"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>',
			prevArrow: '<a class="hn-5-prevx" href="#"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>'
		});
	 // $('.slider-for').slick({
		//   slidesToShow: 1,
		//   slidesToScroll: 1,
		//   arrows: false,
		//   fade: true,
		//   asNavFor: '.slider-nav'
		// });
		// $('.slider-nav').slick({
		//   slidesToShow: 3,
		//   slidesToScroll: 1,
		//   asNavFor: '.slider-for',
		//   centerMode: false,
		//   focusOnSelect: true
		// });
		$(".hnn-imgs").slick({
			slidesToShow: 5,
		    slidesToScroll: 1,
		    nextArrow: '<a class="hnn-arrow hnn-right" href="#"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>',
			prevArrow: '<a class="hnn-arrow hnn-left" href="#"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>',
			 responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		      	arrows: false,
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: false
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: false,
		      }
		    }]
		});
		$(".hovers ").hover(function(){
			// console.log($(this));
			var src = $(this).attr('src');
			var org = $(this).attr('data-origin');
			$('#hover-to').attr('src',src);
			$('#hover-to').attr('data-origin',org);
		})
		//  $("#number_range").rangepicker({
		//     type: "double",
		//     startValue: 0,
		//     endValue: 100,
		//     translateSelectLabel: function(currentPosition, totalPosition) {
		//         return parseInt(100 * (currentPosition / totalPosition));
		//     }
		// });

});

