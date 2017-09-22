$(".hovers ").hover(function(){
	console.log("ssss");
	var src = $(this).attr('src');
	var org = $(this).attr('data-origin');
	$('#hover-to').attr('src',src);
	$('#hover-to').attr('data-origin',org);
});