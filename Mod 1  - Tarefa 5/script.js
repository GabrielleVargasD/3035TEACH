let conta = document.querySelector("#conta");
let botao = document.querySelector("#calcular");

/* 
    1. verificação dos valores
        - Se é vazio
        - se tem ao menos um numero
        - Se tem um operador no inicio ou fim
        - se tem um operador do lado do outro
        - se tem divisão por zero
    2. Separação dos numeros e operadores
    3. Resolver de acordo com a prioridade de operadores
    4. mostrar o resultado
    */
//1 - validação
function validar(conta){
let temNumero = false;
let operadores = ["+", "-", "*", "/"];
let primeiro = conta[0];
let ultimo = conta[conta.length - 1];

// é vazio?
if (conta==" " || conta==""){
    return "A conta não pode ser vazia.";
}

//tem ao menos 1 número?
for(let i = 0; i < conta.length; i++){

    if(!isNaN(conta[i]) && conta[i] != " "){
        temNumero = true;
        break;
    }

}

if (temNumero==false){
    return "A conta deve ter ao menos 1 número";
}

//Tem um operador no inicio ou fim?

if (operadores.includes(primeiro) || operadores.includes(ultimo)){
    return "A conta não pode começar ou terminar com um operador"
}

//se tem um operador do lado do outro
for(let i = 0; i < conta.length - 1; i++){

    let atual = conta[i];
    let proximo = conta[i + 1];

    if(operadores.includes(atual) && operadores.includes(proximo)){
        return "A conta não pode conter dois operadores seguidos";
    }

}

//ser tem divisão por zero
for(let i = 0; i < conta.length - 1; i++){

    let atual = conta[i];
    let proximo = conta[i + 1];

    if (atual === "/" && proximo === "0") {
    return "Não é permitido divisão por zero";
}

}

return null;
}

//calcular
function calcular(conta){
let numeros = []
let operadores = []
let numeroAtual = "";

//2. Separação dos numeros e operadores
for (let i=0; i<conta.length; i++){
    if (!isNaN(conta[i])){
        numeroAtual+=conta[i];
    } else {
        numeros.push(Number(numeroAtual));
        operadores.push(conta[i]);
        numeroAtual="";
    } 
}
numeros.push(Number(numeroAtual));

//3. Resolver de acordo com a prioridade de operadores
/* 
conta = ((numero[0], operador[0], numero[1],) operador[1], numero[2])
resolver o 1 parenteses e substituir o numero[0] e numero[1] por 1 só numero
(numero[0], operador[1], numero[2])....

padrão? 
se operador[0], ele vai pegar numero[0] e numero[1]
se operador[1], ele pega numero anterior e numero sucessor
então...
operadores[i] trabalha com:
    numero[i]
    numero[i + 1]

*/

for(let i= 0; i<operadores.length; i++){
    if (operadores[i]=="/"){
        let resultDiv = numeros[i] / numeros[i+1];
        numeros[i] = resultDiv;
        numeros.splice(i + 1, 1);
        operadores.splice(i, 1);
        i--;
    } else if(operadores[i]=="*"){
        let resultMult = numeros[i] * numeros[i+1];
        numeros[i] = resultMult;
        numeros.splice(i + 1, 1);
        operadores.splice(i, 1);
        i--;
    }
}

for(let i= 0; i<operadores.length; i++){
    if (operadores[i]=="+"){
        let resultSoma = numeros[i] + numeros[i+1];
        numeros[i] = resultSoma;
        numeros.splice(i + 1, 1);
        operadores.splice(i, 1);
        i--;
    } else if(operadores[i]=="-"){
        let resultSub = numeros[i] - numeros[i+1];
        numeros[i] = resultSub;
        numeros.splice(i + 1, 1);
        operadores.splice(i, 1);
        i--;
    }
}

//mostrar o resultado
return numeros[0];
}

botao.addEventListener("click", () => {
    let erro = validar(conta.value);

    if(erro){
        alert(erro);
        return;
    }

    let resultado = calcular(conta.value);
alert(resultado);

})