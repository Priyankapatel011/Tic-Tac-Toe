let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let draw = document.querySelector(".draw");

let turnO = true;    //player-X   player-O

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

//TODO : DRAW CASE HANDLE
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    draw.classList.add("hide");
    count = 0;
}

let count = 0;
boxes.forEach((box) => {
    box.addEventListener(("click"), () => {
        // console.log("Box clicked");
        count++;
        if(count === 9 && winner === ""){
            draw.classList.remove("hide");
        }

        if(turnO) {
            box.innerText = "O";
            box.classList.add("pink");
            turnO = false;
        }
        else if(turnO === false){
            box.innerText = "X";
            box.classList.add("blue");
            turnO = true;
        }

        box.disabled = true;

        checkWinner();


        // console.log("Hello");
        // box.innerText = "abcdefg";
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Bravo, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


function checkWinner() {
    for(let pattern of winPattern){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);