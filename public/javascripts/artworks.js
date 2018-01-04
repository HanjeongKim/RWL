$(document).ready(function() {
	//blocksit define
	$(window).load( function() {
		var windowwidth = $(window).width();
		if(windowwidth <= 380){
			$('#maingrid').width(350);
			$('#maingrid ').BlocksIt({
				numOfCol: 2,
				offsetX: 0,
				offsetY: 8,
				blockElement: '.grid'
			});
		} else if(windowwidth < 768) {
			$('#maingrid').width(windowwidth-200);
			$('#maingrid').BlocksIt({
				numOfCol: 3,
				offsetX: 0,
				offsetY: 8,
				blockElement: '.grid'
			});
		} else if(windowwidth < 1100) {
			$('#maingrid').width(windowwidth-windowwidth/3);
			$('#maingrid').BlocksIt({
				numOfCol: 3,
				offsetX: 0,
				offsetY: 8,
				blockElement: '.grid'
			});
		} else if(windowwidth < 1500){
			$('#maingrid').width(windowwidth-windowwidth/3);
			$('#maingrid').BlocksIt({
				numOfCol: 4,
				offsetX: 0,
				offsetY: 8,
				blockElement: '.grid'
			});
		}else{
			$('#maingrid').width(windowwidth-windowwidth/3);
			$('#maingrid').BlocksIt({
				numOfCol: 5,
				offsetX: 0,
				offsetY: 8,
				blockElement: '.grid'
			});
    }
	});
	//window resize
	var currentWidth = 1500;
	$(window).resize(function() {
		var winWidth = $(window).width();
		console.log(winWidth);
		var conWidth;
		if(winWidth < 380) {
			conWidth = 350;
			col = 2
		} else if(winWidth < 600) {
			conWidth = 450;
			col = 2
		} else if(winWidth < 768) {
			conWidth = 600;
			col = 3
		} else if(winWidth < 1100) {
			conWidth = (winWidth-winWidth/3);
			col = 3;
		}  else if(winWidth < 1500){
			conWidth = (winWidth-winWidth/3);
			col = 4;
		} else{
      conWidth = (winWidth-winWidth/3);
			col = 5;
    }

		if(conWidth != currentWidth) {
			currentWidth = conWidth;
			$('#maingrid').width(conWidth);
			$('#maingrid').BlocksIt({
				numOfCol: col,
				offsetX: 0,
				offsetY: 8,
				blockElement: '.grid'
			});
		}
	});
});
