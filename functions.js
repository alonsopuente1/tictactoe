function DrawBorders() {
  fill(0);
  line(width / 3, 0, width / 3, height);
  line(width / 3 * 2, 0, width / 3 * 2, height);
  line(0, height / 3, width, height / 3);
  line(0, height / 3 * 2, width, height / 3 * 2);
}

function DrawPieces(board) {
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      let gap = height / 3;
      textSize(gap);
      fill(0);
      text(board[j][i], gap * i + 30, gap * j + 170);
    }
  }
}

function PlacePiece(mouseX, mouseY) {
  if(mouseX < width / 3 && mouseY < height / 3) {
    if(board[0][0] == '' && X) {
      board[0][0] = 'X';
      X = false;
      return 1;
    }
    else if(board[0][0] == ''){
      board[0][0] = 'O';
      X = true;
      return 1;
    }
    else {
      return 0;
    }
  }
  else if(mouseX > width / 3 && mouseX < width / 3 * 2 && mouseY < height / 3) {
    if(board[0][1] == '' && X) {
      board[0][1] = 'X';
      X = false;
      return 1;
    }
    else if(board[0][1] == ''){
      board[0][1] = 'O';
      X = true;
      return 1;
    }
    else {
      return 0;
    }
  }
  else if(mouseX > width / 3 * 2 && mouseY < height / 3) {
    if(board[0][2] == '' && X) {
      board[0][2] = 'X';
      X = false;
      return 1;
    }
    else if(board[0][2] == '') {
      board[0][2] = 'O';
      X = true;
      return 1;
    }
    else {
      return 0;
    }
  }
  else if(mouseX < width / 3 && mouseY > height / 3 && mouseY < height / 3 * 2) {
    if(board[1][0] == '' && X) {
      board[1][0] = 'X';
      X = false;
      return 1;
    }
    else if(board[1][0] == '') {
      board[1][0] = 'O';
      X = true;
      return 1;
    }
    else {
       return 0;
    }
  }
  else if(mouseX > width / 3 && mouseX < height / 3 * 2 && mouseY > height / 3 && mouseY < height / 3 * 2) {
    if(board[1][1] == '' && X) {
      board[1][1] = 'X';
      X = false;
      return 1;
    }
    else if(board[1][1] == '') {
      board[1][1] = 'O';
      X = true;
      return 1;
    }
    else {
      return 0;
    }
  }
  else if(mouseX > width / 3 * 2 && mouseY > height / 3 && mouseY < height / 3 * 2) {
    if(board[1][2] == '' && X) {
      board[1][2] = 'X';
      X = false;
      return 1;
    }
    else if(board[1][2] == '') {
      board[1][2] = 'O';
      X = true;
      return 1;
    }
    else {
      return 0;
    }
  }
  else if(mouseX < width / 3 && mouseY > height / 3 * 2) {
    if(board[2][0] == '' && X) {
      board[2][0] = 'X';
      X = false;
      return 1;
    }
    else if(board[2][0] == '') {
      board[2][0] = 'O';
      X = true;
      return 1;
    }
    else {
      return 0;
    }
  }
  else if(mouseX > width / 3 && mouseX < width / 3 * 2 && mouseY > height / 3 * 2) {
    if(board[2][1] == '' && X) {
      board[2][1] = 'X';
      X = false;
      return 1;
    }
    else if(board[2][1] == '') {
      board[2][1] = 'O';
      X = true;
      return 1;
    }
    else {
      return 0;
    }
  }
  else if(mouseX > width / 3 * 2 && mouseY > height / 3 * 2) {
    if(board[2][2] == '' && X) {
      board[2][2] = 'X';
      X = false;
      return 1;
    }
    else if(board[2][2] == '') {
      board[2][2] = 'O';
      X = true;
      return 1;
    }
    else {
      return 0;
    }
  }
}

function CheckXWin(board) {
  if(board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') {
    return true;
  }
  if(board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') {
    return true;
  }
  if(board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X') {
    return true;
  }
  if(board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') {
    return true;
  }
  if(board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') {
    return true;
  }
  if(board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X') {
    return true;
  }
  if(board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') {
    return true;
  }
  if(board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X') {
    return true;
  }
}

function CheckOWin(board) {
  if(board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O') {
    return true;
  }
  if(board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O') {
    return true;
  }
  if(board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O') {
    return true;
  }
  if(board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O') {
    return true;
  }
  if(board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O') {
    return true;
  }
  if(board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O') {
    return true;
  }
  if(board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') {
    return true;
  }
  if(board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O') {
    return true;
  }
}

function Reset() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  turns = 0;
  oWin = false;
  xWin = false;
  if(!X) {
	X = true;
  }
  else {
	X = false;
  }
}
