var cellElements = document.querySelectorAll("[data-cell]")
var winningMessage = document.getElementById("win-message")
var isCircleTurn = false;
var btn = document.querySelector('button')

const changeTurns = () => {
    isCircleTurn = !isCircleTurn 
}
// Testando todos os casos em que X ganha
var xWin = () => {
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
var circleWin = () => {
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
    // var elementToAddCopy = isCircleTurn ? "X" : "O";
    cell.innerHTML= elementToAdd;
    var random = Math.floor(Math.random() * 1);
    // if (random = 1){
    //     random = elementToAddCopy
    // } else{
    //     random = elementToAdd
    // }
    // Verificar pela vitória 

    if(circleWin()){
        const xMessage = document.querySelector('#circle')
        xMessage.classList.add('circle')
        winningMessage.classList.add('win-message-toggle')
    }
    if (xWin()){
        const xMessage = document.querySelector('#x')
        xMessage.classList.add('x')
        winningMessage.classList.add('win-message-toggle')
    }
    
    // Verificar empate
    if(cell.textContent == "X" || cell.textContent == "O" ){
        console.log(i)
        if((i == 9 && !xWin)){
            const tieMessage = document.querySelector('#tie')
            tieMessage.classList.add('tie')
            winningMessage.classList.add('win-message-toggle')
        }
        i = i + 1; 
    }
    
    // Mudar símbolo
    changeTurns()
}
var i = 1;
for (var cell of cellElements){
    cell.addEventListener("click", handleClick, {once: true});  
}


// Por enquanto coloquei um reload 
function reloadPage(){
    location.reload()
}
btn.addEventListener('click', reloadPage)










