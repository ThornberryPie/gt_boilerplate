$(document).ready(function(){
	
	//Run function on resize
	var timeoutid;
	$(window).resize(function() {
		clearTimeout(timeoutid);
		timeoutid = setTimeout(doneResizing, 333);
	});
});

function doneResizing(){
	console.log('resize happened');
}