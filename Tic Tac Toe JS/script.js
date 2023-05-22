var x = "<p>X</p>";
var o = "<p>O</p>";
var turn = "O";
var turnCount = 0;
var gameIsActive = true;

var board = new Array(9);

board = ['', '', '', '', '', '', '', '', ''];

window.onload = PrepareBoard;

function PrepareBoard()
{
    var boardElement = document.getElementById('board');
    var className = "square";
    var htmlCode = "";

    for (let i=0; i<9; i++)
    {
        let id = "square" + i;
        let squareElement = "<div onclick='TakeTurn("+i+")' class='"+ className +"' id='"+id+"'></div>";
        htmlCode += squareElement;
    }
    
    boardElement.innerHTML = htmlCode;

    ChangeTurnInfo(turn);
}

function ChangeTurnInfo(turn)
{
    var turnElement = document.getElementById('turn');

    if (gameIsActive == true) 
    {
        if (turn == 'X')    
            turnElement.innerHTML = "<p> Player X Turn Now </p>";
        else if (turn == 'O')
            turnElement.innerHTML = "<p> Player O Turn Now </p>";
    }
}

function DisplayMatchResult(result)
{
    var boardElement = document.getElementById('board');
    var turnElement = document.getElementById('turn');

    if (result == 'WIN')
        turnElement.innerHTML = '<p style="color: green">Player '+ turn +' won!</p>';
    else if (result == 'DRAW')
        turnElement.innerHTML = '<p style="color: yellow">Draw!</p>';

    boardElement.innerHTML = '<p onclick="location.reload();" class="play-again">WANNA PLAY AGAIN???</p>';
    gameIsActive = false;
}

function CheckGameStatus()
{
    // horizontal
    if 
    (
    (board[0] == board[1] && board[1] == board[2] && board[0] != '') ||
    (board[3] == board[4] && board[4] == board[5] && board[3] != '') ||
    (board[6] == board[7] && board[7] == board[8] && board[6] != '')
    )
    {
        DisplayMatchResult("WIN");
    }
    // vertical
    else if
    (
    (board[0] == board[3] && board[3] == board[6] && board[0] != '') ||
    (board[1] == board[4] && board[4] == board[7] && board[1] != '') ||
    (board[2] == board[5] && board[5] == board[8] && board[2] != '')
    )
    {
        DisplayMatchResult("WIN");
    }
    else if
    (
    (board[0] == board[4] && board[4] == board[8] && board[0] != '') ||
    (board[2] == board[4] && board[4] == board[6] && board[2] != '')    
    )
    {
        DisplayMatchResult("WIN");
    }
}

function TakeTurn(position) 
{
    let squareBoard = document.getElementById('square' + position);

    if (board[position] == '')
    {
        if (turn == 'X')
        {
            squareBoard.innerHTML = x;
            board[position] = 'X';
            CheckGameStatus();
            turn = 'O';
        }
        else if (turn == 'O')
        {
            squareBoard.innerHTML = o;
            board[position] = 'O';
            CheckGameStatus();
            turn = 'X';
        }
        turnCount += 1;

        if (turnCount == 9)
        {
            DisplayMatchResult('DRAW');
        }
    }

    ChangeTurnInfo(turn);
}