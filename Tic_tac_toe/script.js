const btns = document.querySelectorAll(".btn")
const winner_label = document.getElementById("winner")
let clicked = true
let count = 0
let winner = false

function disable() {
    btns[0].disabled = true
    btns[1].disabled = true
    btns[2].disabled = true
    btns[3].disabled = true
    btns[4].disabled = true
    btns[5].disabled = true
    btns[6].disabled = true
    btns[7].disabled = true
    btns[8].disabled = true
}

function check_winner() {
  if(btns[0].innerHTML === "X" && btns[1].innerHTML === "X" && btns[2].innerHTML === "X") {
     winner = true
     winner_label.innerHTML = "X wins"
     btns[0].style.backgroundColor = "red"
     btns[1].style.backgroundColor = "red"
     btns[2].style.backgroundColor = "red"
     disable()
  } else if(btns[3].innerHTML === "X" && btns[4].innerHTML === "X" && btns[5].innerHTML === "X") {
    winner = true
    winner_label.innerHTML = "X wins"
    btns[3].style.backgroundColor = "red"
    btns[4].style.backgroundColor = "red"
    btns[5].style.backgroundColor = "red"
    disable()

 } else if(btns[6].innerHTML === "X" && btns[7].innerHTML === "X" && btns[8].innerHTML === "X") {
    winner = true
    winner_label.innerHTML = "X wins"
    btns[6].style.backgroundColor = "red"
    btns[7].style.backgroundColor = "red"
    btns[8].style.backgroundColor = "red"
    disable()
 } else  if(btns[0].innerHTML === "X" && btns[3].innerHTML === "X" && btns[6].innerHTML === "X") {
    winner = true
    winner_label.innerHTML = "X wins"
    btns[0].style.backgroundColor = "red"
    btns[3].style.backgroundColor = "red"
    btns[6].style.backgroundColor = "red"
    disable()
 } else if(btns[1].innerHTML === "X" && btns[4].innerHTML === "X" && btns[7].innerHTML === "X") {
   winner = true
   winner_label.innerHTML = "X wins"
   btns[1].style.backgroundColor = "red"
   btns[4].style.backgroundColor = "red"
   btns[7].style.backgroundColor = "red"
   disable()

} else if(btns[2].innerHTML === "X" && btns[5].innerHTML === "X" && btns[8].innerHTML === "X") {
   winner = true
   winner_label.innerHTML = "X wins"
   btns[2].style.backgroundColor = "red"
   btns[5].style.backgroundColor = "red"
   btns[8].style.backgroundColor = "red"
   disable()
} else  if(btns[0].innerHTML === "X" && btns[4].innerHTML === "X" && btns[8].innerHTML === "X") {
    winner = true
    winner_label.innerHTML = "X wins"
    btns[0].style.backgroundColor = "red"
    btns[4].style.backgroundColor = "red"
    btns[8].style.backgroundColor = "red"
    disable()
 } else if(btns[1].innerHTML === "X" && btns[4].innerHTML === "X" && btns[7].innerHTML === "X") {
   winner = true
   winner_label.innerHTML = "X wins"
   btns[1].style.backgroundColor = "red"
   btns[4].style.backgroundColor = "red"
   btns[7].style.backgroundColor = "red"
   disable()

} else   if(btns[0].innerHTML === "O" && btns[1].innerHTML === "O" && btns[2].innerHTML === "O") {
    winner = true
    winner_label.innerHTML = "O wins"
    btns[0].style.backgroundColor = "red"
    btns[1].style.backgroundColor = "red"
    btns[2].style.backgroundColor = "red"
    disable()
 } else if(btns[3].innerHTML === "O" && btns[4].innerHTML === "O" && btns[5].innerHTML === "O") {
   winner = true
   winner_label.innerHTML = "O wins"
   btns[3].style.backgroundColor = "red"
   btns[4].style.backgroundColor = "red"
   btns[5].style.backgroundColor = "red"
   disable()

} else if(btns[6].innerHTML === "O" && btns[7].innerHTML === "O" && btns[8].innerHTML === "O") {
   winner = true
   winner_label.innerHTML = "O wins"
   btns[6].style.backgroundColor = "red"
   btns[7].style.backgroundColor = "red"
   btns[8].style.backgroundColor = "red"
   disable()
} else  if(btns[0].innerHTML === "O" && btns[3].innerHTML === "O" && btns[6].innerHTML === "O") {
   winner = true
   winner_label.innerHTML = "O wins"
   btns[0].style.backgroundColor = "red"
   btns[3].style.backgroundColor = "red"
   btns[6].style.backgroundColor = "red"
   disable()
} else if(btns[1].innerHTML === "O" && btns[4].innerHTML === "O" && btns[7].innerHTML === "O") {
  winner = true
  winner_label.innerHTML = "O wins"
  btns[1].style.backgroundColor = "red"
  btns[4].style.backgroundColor = "red"
  btns[7].style.backgroundColor = "red"
  disable()

} else if(btns[2].innerHTML === "O" && btns[5].innerHTML === "O" && btns[8].innerHTML === "O") {
  winner = true
  winner_label.innerHTML = "O wins"
  btns[2].style.backgroundColor = "red"
  btns[5].style.backgroundColor = "red"
  btns[8].style.backgroundColor = "red"
  disable()
} else  if(btns[0].innerHTML === "O" && btns[4].innerHTML === "O" && btns[8].innerHTML === "O") {
   winner = true
   winner_label.innerHTML = "O wins"
   btns[0].style.backgroundColor = "red"
   btns[4].style.backgroundColor = "red"
   btns[8].style.backgroundColor = "red"
   disable()
} else if(btns[1].innerHTML === "O" && btns[4].innerHTML === "O" && btns[7].innerHTML === "O") {
  winner = true
  winner_label.innerHTML = "O wins"
  btns[1].style.backgroundColor = "red"
  btns[4].style.backgroundColor = "red"
  btns[7].style.backgroundColor = "red"
  disable()

}

if (count === 9 && winner === false) {
    winner_label.innerHTML = "No one wins. It is a tie"
}
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", e => {
        if(clicked === true && e.currentTarget.innerHTML === "") {
            e.currentTarget.innerHTML = "X"
            clicked = false
            count++
            check_winner()
        } else if(clicked == false && e.currentTarget.innerHTML === "") {
            e.currentTarget.innerHTML = "O"
            clicked = true
            count++
            check_winner()
        } else {
            alert("That box is already checked")
        }
    })
    
}