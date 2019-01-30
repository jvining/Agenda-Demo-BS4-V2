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
			$('div').attr('style', '');
		} else {
			$('.collapse').addClass('show');
			$('#toggle').html('- Collapse All Panels');
			$('.card-header').children('i').removeClass('fa-plus').addClass('fa-minus');
			$('div').attr('style', '');
		}
	});
});

// Sorting
$(document).ready(function() {
    $('input[type=radio][name=group1]').change(function() {
        if (this.value == 'dangerButton') {
			$(".card").parent().parent().attr('hidden',true);
			$(".card.bg-danger").parent().parent().removeAttr('hidden');
        }
        if (this.value == 'primaryButton') {
			$(".card").parent().parent().attr('hidden',true);
			$(".card.bg-primary").parent().parent().removeAttr('hidden');
        }
        if (this.value == 'warningButton') {
			$(".card").parent().parent().attr('hidden',true);
			$(".card.bg-warning").parent().parent().removeAttr('hidden');
        }
        if (this.value == 'successButton') {
			$(".card").parent().parent().attr('hidden',true);
			$(".card.bg-success").parent().parent().removeAttr('hidden');
        }
        if (this.value == 'infoButton') {
			$(".card").parent().parent().attr('hidden',true);
			$(".card.bg-info").parent().parent().removeAttr('hidden');
        }
    });
});

// Clear Sorting
$('#clearAllButton').click(function() {
	$('input[type=radio]').prop('checked', false);
	$(".card").parent().parent().attr('hidden',false);
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