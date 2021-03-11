let canvas = document.getElementById("snek");
let context = canvas.getContext("2d");
let box = 32;
let snek = [];
snek[0] = {
	x: 8 * box,
	y: 8 * box
}

function criarBG() {
	context.fillStyle = "lightgreen";
	context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarSnek() {
	for(i = 0; i < snek.length; ++i) {
		context.fillStyle = "green";
		context.fillRect(snek[i].x, snek[i].y, box, box);
	}
}

criarBG();
criarSnek();