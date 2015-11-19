/* CURRENTLY IN: javascript/main.js */

(function(){ // protect da scope

	$('.js-select').draggable({
		containment: 'window',
		stack: '.block',
		snap: true,
		snapMode: 'outer',
		snapTolerance: 13,
	});
	
	// fades title
	$('.blocks__canvas').on('mouseover', function () {
		$('.blocks__canvas-title').fadeOut('slow');
	});


})();