var cellElements = document.querySelectorAll("[data-cell]")
var winningMessage = document.getElementById("win-message")
var top = document.getElementById("squareOne")
var isCircleTurn = false;
var btn = document.querySelector('button')

const changeTurns = () => {
    isCircleTurn = !isCircleTurn 
}
// Testando todos os casos em que X ganha
const xWin = () => {
    if (
        // Linhas
        (cellElements[0].textContent == "X" && cellElements[1].textContent == "X" && cellElements[2].textContent == "X") || 
        (cellElements[3].textContent == "X" && cellElements[4].textContent == "X" && cellElements[5].textContent == "X") || 
        (cellElements[6].textContent == "X" && cellElements[7].textContent == "X" && cellElements[8].textContent == "X") ||
        // Colunas
        (cellElements[0].textContent == "X" && cellElements[3].textContent == "X" && cellElements[6].textContent == "X") ||
        (cellElements[1].textContent == "X" && cellElements[4].textContent == "X" && cellElements[7].textContent == "X") ||
        (cellElements[2].textContent == "X" && cellElements[5].textContent == "X" && cellElements[8].textContent == "X") ||
        // Diagonais
        (cellElements[0].textContent == "X" && cellElements[4].textContent == "X" && cellElements[8].textContent == "X") ||
        (cellElements[2].textContent == "X" && cellElements[4].textContent == "X" && cellElements[6].textContent == "X") 
    ){
        console.log("x venceu")
        return true
    }
}

// Testando todos os casos em que circulo ganha
const circleWin = () => {
    if (
        // Linhas
        (cellElements[0].textContent == "O" && cellElements[1].textContent == "O" && cellElements[2].textContent == "O") || 
        (cellElements[3].textContent == "O" && cellElements[4].textContent == "O" && cellElements[5].textContent == "O") || 
        (cellElements[6].textContent == "O" && cellElements[7].textContent == "O" && cellElements[8].textContent == "O") ||
        // Colunas
        (cellElements[0].textContent == "O" && cellElements[3].textContent == "O" && cellElements[6].textContent == "O") ||
        (cellElements[1].textContent == "O" && cellElements[4].textContent == "O" && cellElements[7].textContent == "O") ||
        (cellElements[2].textContent == "O" && cellElements[5].textContent == "O" && cellElements[8].textContent == "O") ||
        // Diagonais
        (cellElements[0].textContent == "O" && cellElements[4].textContent == "O" && cellElements[8].textContent == "O") ||
        (cellElements[2].textContent == "O" && cellElements[4].textContent == "O" && cellElements[6].textContent == "O")
    ){console.log("Circulo venceu")
        return true
}
}

const handleClick = (e) => {
    // Colocar a marca (x ou circulo)
    // o event.target possibilita sabermos quem disparou o evento
    
    const cell = e.target;
    var elementToAdd = isCircleTurn ? "O" : "X";
    cell.innerHTML= elementToAdd;
    // Verificar pela vitória 

    if(circleWin()){
        const xMessage = document.querySelector('#circle')
        xMessage.classList.toggle('circle')
        winningMessage.classList.toggle('win-message-toggle')
    }
    if (xWin()){
        const xMessage = document.querySelector('#x')
        xMessage.classList.toggle('x')
        winningMessage.classList.toggle('win-message-toggle')
    }
    
    // Verificar empate
    if(cell.textContent == "X" || cell.textContent == "O" ){
        i = i + 1; 
        // console.log(i)
        if(i == 9){
            const tieMessage = document.querySelector('#tie')
            tieMessage.classList.toggle('tie')
            winningMessage.classList.toggle('win-message-toggle')
        }
    }
    
    // Mudar símbolo
    changeTurns()
}
var i = 0;
for (var cell of cellElements){
    cell.addEventListener("click", handleClick, {once: true});  
}


// Por enquanto coloquei um reloader
function reloader(){
    location.reload()
}
btn.addEventListener('click', reloader)










