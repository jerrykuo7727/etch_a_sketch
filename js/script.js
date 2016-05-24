$(document).ready(function(){
	for (var i = 0; i < 16; i++)
		$('#gameboard').append("<div></div>");
	for (var i = 0; i < 16; i++)
		$('#gameboard > div').append("<div>0</div>")
});