$(document).ready(function(){

	$('ul.tablelist li p').hide();

	$('li:has(span + p)').each(function() {
		$(this).addClass('unfold');
	});

	$('ul.tablelist li').click(function() {
		// Select the p element within the clicked li element
		const pElement = $(this).find('p');
  
		// Check if the clicked li element contains a p element
		if (pElement.length) {

			// Check if the clicked li element has already been toggled
			if ($(this).hasClass('fold')) {

				$(this).removeClass('fold').addClass('unfold');
				$(this).find('p').slideUp();

			} else {

				// Slide toggle the p element within the clicked li element
				pElement.slideToggle();
  
				// Add the "fold" class to the clicked li element
				$(this).addClass('fold');
  
				// Remove the "fold" class from all other ul.tablelist li elements
				$('ul.tablelist li').not(this).removeClass('fold');
  
				// Hide all other open p elements within the ul.tablelist
				$('ul.tablelist li p').not(pElement).slideUp();
  
				// Add the "unfold" class to the clicked li element
				$(this).addClass('unfold');

			}

		}

	});

});
