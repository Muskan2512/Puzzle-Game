let rows = 4;
let cols = 5;
let len = rows * cols;

let Score=0;
let currentTile;
let otherTile;

let piecesArr = [];
for (let i = 0; i < len; i++) {
  piecesArr[i] = i + 1;
}
for (let i = 0; i < len; i++) {
  let random = Math.ceil(Math.random() * rows * cols);
  let temp = piecesArr[i];
  piecesArr[i] = piecesArr[random - 1];
  piecesArr[random - 1] = temp;
}
console.log(piecesArr);
for (let i = 0; i < len; i++) {
  let img = document.createElement("img");
  img.src = "./images/white.jpg";
  img.addEventListener("dragstart", dragStart)
  img.addEventListener("dragover", dragover)
  img.addEventListener("dragenter", dragenter)
  img.addEventListener("dragleave", dragleave)
  img.addEventListener("drop", drop)
  img.addEventListener("dragend", dragend)
  board.append(img);
}

for (let i = 0; i < rows * cols; i++) {
  let img = document.createElement("img");
  let tile = piecesArr[i];
  img.src = `./images/image${tile}.jpg`;
  // drag functionalities 
  img.addEventListener("dragstart", dragStart)
  img.addEventListener("dragover", dragover)
  img.addEventListener("dragenter", dragenter)
  img.addEventListener("dragleave", dragleave)
  img.addEventListener("drop", drop)
  img.addEventListener("dragend", dragend)

  piecesBox.append(img);
}
function dragStart() {
  currentTile = this;
}

function dragover(e) {
  e.preventDefault();
}
function dragenter(e) {
  e.preventDefault();
}
function dragleave(e) {
  e.preventDefault();

}
function drop() {
  otherTile=this;//this refers to image that is being dropped on
  
}
function dragend(){
  let currImg=currentTile.src;
  let otherImg=otherTile.src;
  //swap the images
  // console.log(currImg,otherImg);
  if(currImg.toString().includes("white")){
// don't swap
return;
  }
  // if(currImg.toString())
  currentTile.src=otherImg;
  otherTile.src=currImg;
  Score++;
  document.querySelector("#turn").innerHTML=Score;
}