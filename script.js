let puzzle=[
[5,3,0,0,7,0,0,0,0],
[6,0,0,1,9,5,0,0,0],
[0,9,8,0,0,0,0,6,0],
[8,0,0,0,6,0,0,0,3],
[4,0,0,8,0,3,0,0,1],
[7,0,0,0,2,0,0,0,6],
[0,6,0,0,0,0,2,8,0],
[0,0,0,4,1,9,0,0,5],
[0,0,0,0,8,0,0,7,9]
];

let solution=[
[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]
];

function createBoard(){
let board=document.getElementById("board");
board.innerHTML="";
for(let r=0;r<9;r++){
for(let c=0;c<9;c++){
let input=document.createElement("input");
input.className="cell";
input.maxLength=1;
if(puzzle[r][c]!=0){
input.value=puzzle[r][c];
input.disabled=true;
input.classList.add("fixed");
}
board.appendChild(input);
}}
}

function checkSolution(){
let cells=document.querySelectorAll(".cell");
let correct=true;
cells.forEach((cell,index)=>{
let row=Math.floor(index/9);
let col=index%9;
if(Number(cell.value)!==solution[row][col]) correct=false;
});
document.getElementById("message").innerHTML=correct?"🎉 Correct!":"❌ Try Again";
}

function newGame(){location.reload();}
createBoard();
