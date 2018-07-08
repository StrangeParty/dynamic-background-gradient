$(document).ready(function() {

	var colorsArray = [];
	var step = $(document).width() / 100;
	var colorRank = 0;
	var color = "";
	var element = $(".dynamic-gradient");

	init();

	$(document).mousemove(function(e) {
		updateBackgroundColor(e.pageX);
	});

	$(document).on("resize", function() {
		step = $(document).width() / 100;
	});

	function init() {
		$.ajax({
		    url:'gradient/php/dynamic-gradient.php',
		    type:'get',
		    success: function(data)
		    {
		        var colors = data;
		        colorsArray = colors.split(";");
		    }
		});
		updateBackgroundColor();
	}

	function updateBackgroundColor(posX) {
		colorRank = Math.round(posX / step);
		color = colorsArray[colorRank];
		element.css("background-color", "rgb"+color);
	}
});