var readlineSync = require('readline-sync');


var pecas = readlineSync.question("insira a quantidade de pecas que voce quer, 4 ou 10: ");
if (pecas >= 10) {
    var lpecas = ["Filtro de Ar", "Motor", "Amortecedor", "Bomba", "Alternador", "Radiador", "Bomba de combústivel","Freio","Suspensão","Roda"]
    console.log(lpecas);
}
else{
    var lpecas = ["Motor","Freio","Suspensão","Roda"]
    console.log(lpecas);
}


if (lpecas < 10) {
    console.log("voce consegue listar mais pecas");
}
else{
    console.log("nao tem capacidade suficiente para mais de 10 pecas");
}


var peso = readlineSync.question("insira o peso da peca: ");
if (peso >= 100) {
    console.log("Pode cadastrar");
}
else{
    console.log("Nao da para cadastrar");
}

var npeca = readlineSync.question("insira o nome da peca: ");
if(npeca.length < 3) {
    console.clear();
    console.log("Nome da peca:",npeca);
    console.log("peso: ",peso);
    console.log("Erro");
}
else{
    console.clear();
    console.log("Nome da peca:",npeca);
    console.log("peso: ",peso);
    console.log("Nome cadastrado ");
}
