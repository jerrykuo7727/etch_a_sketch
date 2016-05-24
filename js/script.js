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
		var row = Math.ceil(prompt("請輸入畫板列數(最多30)"));
		var col = Math.ceil(prompt("請輸入畫板行數(最多30)"));
		if (row > 0 || col > 0) {
			if (row > 30) row = 30;
			if (col > 30) col = 30;
			$("#gameboard").empty();
			var width = 640 / col;
			var height = 640 / row;
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
