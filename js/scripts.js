// Enables Tool Tip 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Dynamically add the +/- icon
$(document).ready(function() {
	$('.collapse:has(.card-body)').prev('.card-header').prepend('<i class="fa fa-plus pull-right"></i> ');
	$('.card-header').click(function() {
		$(this).children('i').toggleClass('fa-plus').toggleClass('fa-minus');
	});
});

// Toggle +/- icon
$(document).ready(function() {
	$('#toggle').click(function() {
		if ($('.collapse').hasClass('show')) {
			$('.collapse').removeClass('show');
			$('#toggle').html('+ Expand All Panels');
			$('.card-header').children('i').removeClass('fa-minus').addClass('fa-plus');
 		} else {
			$('.collapse').addClass('show');
			$('#toggle').html('- Collapse All Panels');
			$('.card-header').children('i').removeClass('fa-plus').addClass('fa-minus');
 		}
	});
});
 

// Sorting
$(document).ready(function() {
    $('input[type=radio][name=group1]').change(function() {

        if (this.value == 'tracktype-break-meal') {
			$('.card , h4.text-secondary').attr('hidden',true);
   			$(".card.tracktype-break-meal").attr('hidden',false);
        }
        if (this.value == 'tracktype-keynote') {
			$('.card , h4.text-secondary').attr('hidden',true);
  			$(".card.tracktype-keynote").attr('hidden',false);
        }
        if (this.value == 'tracktype-panel-discussion') {
			$('.card , h4.text-secondary').attr('hidden',true);
  			$(".card.tracktype-panel-discussion").attr('hidden',false);
        }
        if (this.value == 'tracktype-round-table') {
			$('.card , h4.text-secondary').attr('hidden',true);
  			$(".card.tracktype-round-table").attr('hidden',false);
        }
    });
});


// '.col-12.rounded[class*="bg-"]'
// $('.col-12.rounded[class*="bg-"]').css('style', 'background-color: transparent !important');





// Clear Sorting
$('#clearAllButton').click(function() {
	$('input[type=radio]').prop('checked', false);
	$(".card , h4.text-secondary").attr('hidden',false);
});
 
// Smooth On Scroll Nav with Offsets 
$('.scroll').on('click',function(e) {
	e.preventDefault();
	var offset = 0;
	var target = this.hash;
	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
	$('html, body').stop().animate({
		'scrollTop': $(target).offset().top - offset
	}, 800, 'swing', function() {
		// window.location.hash = target;
	});
});