const formulario = document.querySelector("form");

formulario.addEventListener("submit", cadastrarCliente);

function cadastrarCliente(event) {
    event.preventDefault();

    let cliente = {
        tutor: document.querySelector("#nome").value,
        telefone: document.querySelector("#tel").value,
        endereco: document.querySelector("#endereco").value,
        data: document.querySelector("#data").value,

        animal: document.querySelector("#nome_animal").value,
        idade: document.querySelector("#idade").value,
        porte: document.querySelector("#porte").value
    };
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    clientes.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    
    alert("Cliente cadastrado com sucesso!");

    formulario.reset();
}



