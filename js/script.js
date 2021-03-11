let canvas = document.getElementById("snek");
let context = canvas.getContext("2d");
let box = 32;
let snek = [];
snek[0] = {
	x: 8 * box,
	y: 8 * box
}
let direction = "right";

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

function iniciarJogo() {
	criarBG();
	criarSnek();

	let snekX = snek[0].x;
	let snekY = snek[0].y;

	if(direction == "right") snekX += box;
	if(direction == "left") snekX -= box;
	if(direction == "up") snekY -= box;
	if(direction == "down") snekY += box;

	snek.pop();

	let newHead= {
		x: snekX * box,
		y: snekY * box
	}

	snek.unshift(newHead);
}

jogo = setInterval(iniciarJogo, 100);