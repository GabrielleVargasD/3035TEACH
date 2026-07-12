let listaClientes = document.querySelector("#lista-clientes");

let modal = document.querySelector("#modal");

let informacoes = document.querySelector("#informacoes");

let fechar = document.querySelector("#fechar");


let clientes = JSON.parse(localStorage.getItem("clientes")) || [];



clientes.forEach(cliente => {


    let card = document.createElement("div");

    card.classList.add("card-cliente");


    card.innerHTML = `

        <h3>${cliente.animal}</h3>

        <p>Data: ${cliente.data}</p>

    `;


    card.addEventListener("click", function(){

        abrirModal(cliente);

    });


    listaClientes.appendChild(card);

});



function abrirModal(cliente){


    informacoes.innerHTML = `

        <p><strong>Tutor:</strong> ${cliente.tutor}</p>

        <p><strong>Telefone:</strong> ${cliente.telefone}</p>

        <p><strong>Endereço:</strong> ${cliente.endereco}</p>

        <br>

        <p><strong>Animal:</strong> ${cliente.animal}</p>

        <p><strong>Idade:</strong> ${cliente.idade}</p>

        <p><strong>Porte:</strong> ${cliente.porte}</p>

        <p><strong>Data:</strong> ${cliente.data}</p>

    `;


    modal.style.display = "flex";

}



fechar.addEventListener("click", function(){

    modal.style.display = "none";

});