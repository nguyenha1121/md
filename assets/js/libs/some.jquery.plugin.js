console.log('some jquery plugin');
$(document).ready(function(){


	$(".range-example-single").asRange({
	    range: true,
	    limit: true,
	    // tip: {
	    //     active: 'onMove'
	    // },
		format: function(value) {
	        return '$' + value;
	    },
	    onChange: function(value) {
	    	console.log( value[0],"-", value[1]);
	    }
	});


	$('.filter button').click(function(e){
		$(this).next().toggle();
	})

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
	  ],
	   adaptiveHeight: true,
	  	nextArrow: '<a class="hn-5-nextx" href="#"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>',
		prevArrow: '<a class="hn-5-prevx" href="#"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>'
	});
	$('.hnn-slider-cat').slick({
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
	  ],
	   adaptiveHeight: true,
	  	nextArrow: '<a class="hn-5-next" href="#"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>',
		prevArrow: '<a class="hn-5-prev" href="#"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>'
	});
	$('.arc').click(function(e){
		var next = $(this).next();
		// next.removeClass('hide-cat');
		next.toggle();
	})
	$('.navbar-toggle').click(function(){
		var boo = $(this).attr('aria-expanded');
		console.log(boo);
		if (boo == 'true'){
			$('.ct-brand').css('display','block');
		} else{
			$('.ct-brand').css('display','none');
		}
	});
	$('.hide-list-wr').click(function(){
		$(this).next().toggle('slow');
	})
})