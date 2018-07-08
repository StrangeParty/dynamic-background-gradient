<?php

init();

function init() {
	if(!file_exists("../gradient.txt")) {
		$picture = imagecreatefrompng("../img/gradient.png");
		$picture = imagescale($picture, 100);
		for($i = 0; $i < 100; $i++) {
			$rgb = imagecolorat($picture, $i, 0);
			$r = ($rgb >> 16) & 0xFF;
			$g = ($rgb >> 8) & 0xFF;
			$b = $rgb & 0xFF;
			$colorsList .= "(".$r.",".$g.",".$b.");";
		}
		file_put_contents("../gradient.txt", $colorsList);
	}

	print file_get_contents("../gradient.txt");
}