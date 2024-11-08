let limiteInferior = 400;
let limiteSuperior = 200;
let limitePista = 100;


function comprar(){
    //Pegar as informações do tipo de ingresso e quantidade
    let tipoIngresso = document.getElementById('tipo-ingresso').value;    
    let quantidade = document.getElementById('qtd').value;
    
    
    //decrementar a quantidade no tipo de ingresso até 0, se for menor que zero aparecer um alert afirmando nao estar mais disponivel
    //mostrar em tela a quantidade de ingressos

    //Se for o tipo ingresso inferior
    if (tipoIngresso == 'inferior'){
        if (limiteInferior > 0){              
            limiteInferior -= quantidade;
            document.getElementById('qtd-inferior').textContent = limiteInferior;

        } else {
            alert(`Número maximo de ingressos para cadeira inferior é de ${limiteInferior}`)
        }

    //Se for o tipo ingresso superior
    } else if (tipoIngresso == 'superior'){
        if (limiteSuperior > 0){              
            limiteSuperior -= quantidade;
            document.getElementById('qtd-superior').textContent = limiteSuperior;

        } else {
            alert(`Número maximo de ingressos para cadeira superior é de ${limiteSuperior}`)
        }

    //Se for o tipo ingresso pista
    } else if (tipoIngresso == 'pista'){
        if (limitePista > 0){              
            limitePista -= quantidade;
            document.getElementById('qtd-pista').textContent = limitePista;
        
        } else {
            alert(`Número maximo de ingressos para pista é de ${limitePista}`)
        }
    }    
}