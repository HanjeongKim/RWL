$(document).ready(function() {
	//blocksit define
	$(window).load( function() {
		$('#maingrid ul').BlocksIt({
			numOfCol: 2,
			offsetX: 0,
			offsetY: 8
		});
	});
	//window resize
	$(window).resize(function() {
		$('#maingrid ul').BlocksIt({
			numOfCol: 2,
			offsetX: 0,
			offsetY: 8
		});
	});
});
