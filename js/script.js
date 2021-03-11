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

document.addEventListener('keydown', update);

function update(event) {
	if(event.keyCode == 37 && direction != "right") direction = "left";
	if(event.keyCode == 38 && direction != "down") direction = "up";
	if(event.keyCode == 39 && direction != "left") direction = "right";
	if(event.keyCode == 40 && direction != "up") direction = "down";
	console.log(event.keyCode);
}

function iniciarJogo() {
	if(snek[0].x > 15 * box && direction == "right") snek[0].x = 0;
	if(snek[0].x < 0 * box && direction == "left") snek[0].x = 15 * box;
	if(snek[0].y > 15 * box && direction == "down") snek[0].y = 0;
	if(snek[0].y < 0 * box && direction == "up") snek[0].y = 15 * box;

	criarBG();
	criarSnek();

	let snekX = snek[0].x;
	let snekY = snek[0].y;

	if(direction == "right") snekX += box;
	if(direction == "left") snekX -= box;
	if(direction == "up") snekY -= box;
	if(direction == "down") snekY += box;

	snek.pop();

	let newHead = {
		x: snekX,
		y: snekY
	}

	snek.unshift(newHead);
}

jogo = setInterval(iniciarJogo, 100);