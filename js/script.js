let canvas = document.getElementById("snek");
let context = canvas.getContext("2d");
let coordsBox = document.getElementById("coords");
let box = 32;
let snek = [];
snek[0] = {
	x: 8 * box,
	y: 8 * box
}
let direction = "right";
let food = {
	x: Math.floor(Math.random() * 15 + 1) * box,
	y: Math.floor(Math.random() * 15 + 1) * box
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

function desenharComida() {
	context.fillStyle = "red";
	context.fillRect(food.x, food.y, box, box);
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
	for(i = 1; i < snek.length; ++i) {
		if(snek[0].x == snek[i].x && snek[0].y == snek[i].y) {
			clearInterval(jogo);
			alert("Game Over :(");
		}
	}

	if(snek.length == 128) {
		clearInterval(jogo);
		alert("Parabens! Você venceu o jogo!");
	}

	criarBG();
	desenharComida();
	criarSnek();

	let snekX = snek[0].x;
	let snekY = snek[0].y;

	if(direction == "right") snekX += box;
	if(direction == "left") snekX -= box;
	if(direction == "up") snekY -= box;
	if(direction == "down") snekY += box;

	if(snekX > 15 * box && direction == "right") snekX = 0;
	if(snekX < 0 * box && direction == "left") snekX = 15 * box;
	if(snekY > 15 * box && direction == "down") snekY = 0;
	if(snekY < 0 * box && direction == "up") snekY = 15 * box;

	if(snekX != food.x || snekY != food.y) {
		snek.pop();
	}
	else {
		food.x = Math.floor(Math.random() * 15 + 1) * box;
		food.y = Math.floor(Math.random() * 15 + 1) * box;
	}


	let newHead = {
		x: snekX,
		y: snekY
	}

	snek.unshift(newHead);

	coords.innerHTML = snekX + " x " + snekY;
}

jogo = setInterval(iniciarJogo, 100);