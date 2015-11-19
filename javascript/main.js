/* CURRENTLY IN: javascript/main.js */

(function(){ // protect da scope

	$('.js-select').draggable({
		containment: 'window',
		stack: '.block',
		snap: true,
		snapMode: 'outer',
		snapTolerance: 13,
	});
	


	$('.blocks__canvas').on('mouseover', function () {
		$('.block__canvas-title').fadeOut('slow');
	});


})();