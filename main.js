var input = document.getElementsByClassName('jogada')

// const square = docemnet.getElementsByClassName('square')
var tabela = ["","",""]
escolha = "X"
var test = true

function teste1(){ 
    while(test == true){

        console.log("OK PLS")
        
    
        if(escolha == "X"){
            document.getElementById('jogada1').innerHTML = escolha
            tabela[0] = escolha
            escolha = "O"
        }
        else if(escolha == "O"){
            document.getElementById('jogada1').innerHTML = escolha
            tabela[0] = escolha
            escolha = "X"
        }
        
        
        var i = 0;
        while( i <= 2){
            console.log("Tabela: ", tabela[i])
            i++
            
        }
        // if (input == 'X' || input == 'O'){
        test = false
        // }
    }
    
}
function teste2(){ 
    
    console.log("OK PLS")
    
    if(escolha == "X"){
        document.getElementById('jogada2').innerHTML = escolha
        tabela[1] = escolha
        escolha = "O"
    }
    else if(escolha == "O"){
        document.getElementById('jogada2').innerHTML = escolha
        tabela[1] = escolha
        escolha = "X"
    }
    var count = 0

    while( count <= 2){
        console.log("Tabela: ", tabela[count])
        count++

    }
}






