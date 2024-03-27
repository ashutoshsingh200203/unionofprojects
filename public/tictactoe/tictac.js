body = document.getElementsByTagName("body");
// cells = document.querySelectorAll(".cell");
let cells = document.getElementsByClassName("cell");
let message = document.getElementById("mess");
let msgcont = document.querySelector(".mescont");
let rst = document.getElementsByClassName("reset");
let restart = document.getElementsByClassName("start");
console.log(rst)

// console.log(body);
console.log(message);

let turn = true;
let val = 0;

const wp =
    [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

/* if use query selector method in DOM then only this below foreach 
method is usable because it return a node list in response */

// cells.forEach((cell) => {
//     cell.addEventListener("click",()=>{
//         if(turn)
//         {
//             cell.innerText = "0";
//         }
//     })
// })



const reset = () => {
    turn = true;
    val = 0;
    enable();
    msgcont.classList.add("hide");
}

const enable = () => {
    for (let cell of cells) {
        cell.disabled = false;
        cell.innerText = "";
    }
}

const whoiswinner = () =>
{
    message.innerText = "Booyah Winner Winner Chicken Dinner";
    msgcont.classList.remove("hide");
}

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
        if (turn) {
            cells[i].innerText = "X";
            turn = false;
        }
        else {
            cells[i].innerText = "O"
            turn = true;
        }
        cells[i].disabled = true;
        val++;
        winner();

        if (val === 9 && !winner()) {
            draw();
        }

    })
}

const winner = () => {
    for (let win of wp) {
        let pos1 = cells[win[0]].innerText;
        let pos2 = cells[win[1]].innerText;
        let pos3 = cells[win[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("winnnn!")
                whoiswinner();
            }
        }
    }
}

const draw = () => {
    message.innerText = "Match is drawn";
    msgcont.classList.remove("hide");
}

rst[0].addEventListener("click", reset);
restart[0].addEventListener("click", reset);