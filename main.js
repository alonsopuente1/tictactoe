let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]
let oScore = 0;
let xScore = 0;
let X = true;
let turns = 0;
let xWin = false;
let oWin = false;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  DrawBorders();
  DrawPieces(board);
  textSize(30);
  fill(0);
  text('X: ' + xScore, 0, height);
  text('O: ' + oScore, 53, height);
  if(oWin) {
    textSize(90);
    fill(0, 255, 0);
    text('O wins!', 160, 310);
    console.log(oWin);
  }
  if(xWin) {
    textSize(90);
    fill(0, 255, 0);
    text('X wins!', 160, 310);
    console.log(xWin);
  }
  if(turns == 9 && !xWin && !oWin) {
    textSize(90);
    fill(0, 255, 0);
    text('Tie!', 220, 310);
    console.log(turns);
  }
}

function mousePressed() {
  if(!xWin && !oWin && turns < 9) {
    turns += PlacePiece(mouseX, mouseY);
	xWin = CheckXWin(board);
	oWin = CheckOWin(board);
	if(xWin) {
		xScore++;
	}
	if(oWin) {
		oScore++;
	}
  }
}

function keyPressed() {
  if(keyCode == 82) {
    Reset();
  }
}
