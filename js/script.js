$(document).ready(function(){
	for (var i = 0; i < 16; i++)
		$("#gameboard").append('<div align="center"></div>');
	for (var i = 0; i < 16; i++)
		$("#gameboard > div").append('<div class="square"></div>')
	$(".square").on("mouseenter", function(){
		$(this).css("background", "#666666");
		$(this).css("border", "1px inset black");
	});
	$("#reset").click(function(){
		$("#gameboard div div").css("background", "#FFFFFF");
	});
	$("#resize").click(function(){
		var row = Math.ceil(prompt("請輸入畫板列數(最多50)"));
		var col = Math.ceil(prompt("請輸入畫板行數(最多50)"));
		if (row > 0 || col > 0) {
			if (row > 50) row = 50;
			if (col > 50) col = 50;
			$("#gameboard").empty();
			var width = 800 / col;
			var height = 800 / row;
			var side = width < height ? width : height;
			for (var i = 0; i < row; i++)
				$("#gameboard").append('<div align="center"></div>');
			for (var i = 0; i < col; i++)
				$("#gameboard > div").append('<div class="square"></div>');
			$("#gameboard > div").css("height", side + "px");
			$("#gameboard div div").css("height", side + "px");
			$("#gameboard div div").css("width", side + "px");
			$(".square").on("mouseenter", function(){
				$(this).css("background", "#666666");
			});
		}
	});
});
