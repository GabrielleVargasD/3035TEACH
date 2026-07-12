let listTarefas = [];


function addTarefa(nome) {
    let tarefa = {
        nome: nome,
        data: new Date().toLocaleDateString(), //Pega a data atual
        status: "Pendente"
    };

    listTarefas.push(tarefa);
}

function concluirTarefa(indice){
listTarefas[indice].status="Concluído";
}

function pendentes() {
    for (let tarefa of listTarefas) {
        if (tarefa.status === "Pendente") {
            console.log(tarefa);
        }
    }
}

addTarefa("Estudar");
addTarefa("Dormir");
addTarefa("Levar o dog pra passear");

concluirTarefa(0);
concluirTarefa(1);

pendentes();

