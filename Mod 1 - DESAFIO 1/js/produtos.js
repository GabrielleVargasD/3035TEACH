let listaProdutos = document.querySelector("#lista-produtos");

const produtos = [
    {
        nome: "Cama Pet Pequeno",
        preco: 89.90,
        imagem: "/assets/cama_pet_pequeno.webp"
    },
    {
        nome: "Torre Arranhador Gato",
        preco: 249.90,
        imagem: "/assets/torre_arranhador_gato.jpg"
    },
    {
        nome: "Coleira Gato Várias Cores",
        preco: 15.00,
        imagem: "/assets/coleira_gato_varias_cores.webp"
    },
    {
        nome: "Coleira Peitoral Gato",
        preco: 29.90,
        imagem: "/assets/coleira_peitoral_gato.webp"
    },
    {
        nome: "Coleira Cachorro Várias Cores",
        preco: 19.90,
        imagem: "/assets/coleira_cachorro_varias_cores.webp"
    },
    {
        nome: "Coleira Peitoral Cachorro",
        preco: 45.00,
        imagem: "/assets/coleira_peitoral_cachorro.jpg"
    },
    {
        nome: "Frisbee Brinquedo Cachorro",
        preco: 25.50,
        imagem: "/assets/frisbe_brinquedo_cachorro.jpg"
    },
    {
        nome: "Brinquedo de Roer Atóxico e Ultra Resistente",
        preco: 39.90,
        imagem: "/assets/brinquedo_roer_atoxico_e_ultra_resistente_para_caes.webp"
    },
    {
        nome: "Galinha de Borracha Gritante Cachorro",
        preco: 18.00,
        imagem: "/assets/galinha_de_borracha_gritante_cachorro.webp"
    },
    {
        nome: "Kit Brinquedos Puxador Cachorro",
        preco: 54.90,
        imagem: "/assets/kit_brinquedos_puxador_cachorro.jpg"
    },
    {
        nome: "Arranhador Casinha Gato",
        preco: 189.00,
        imagem: "/assets/arranhador_casinha_gato.webp"
    },
    {
        nome: "Brinquedo Gato Peixe Louco",
        preco: 32.00,
        imagem: "/assets/brinquedo_gato_peixe_louco.webp"
    },
    {
        nome: "Bola Interativa Cães e Gatos",
        preco: 27.90,
        imagem: "/assets/bola_interativa_caes_gatos.jpg"
    },
    {
        nome: "Brinquedo Gato Interativo",
        preco: 22.00,
        imagem: "/assets/brinquedo_gato_interativo.webp"
    },
    {
        nome: "Ração Whiskas Peixe para Gatos Adultos",
        preco: 24.90,
        imagem: "/assets/racao-whiskas-peixe-para-gatos-adultos-500-g-8.webp"
    },
    {
        nome: "Ração Golden Seleção Natural para Gatos",
        preco: 139.90,
        imagem: "/assets/racao-golden-selecao-natural-para-gatos-filhotes-sabor-frango-e-arroz-1kg.png"
    },
    {
        nome: "Ração Golden Premium Especial Gatos Adultos",
        preco: 125.00,
        imagem: "/assets/racao_golden_premium_especial_gatos_adultos_castrados_salmao_1kg.webp"
    },
    {
        nome: "Ração Golden Cães Adultos 15kg",
        preco: 169.90,
        imagem: "/assets/racao_golden_caes_adultos_15kg.webp"
    },
    {
        nome: "Ração Golden Fórmula Cães Filhote",
        preco: 55.00,
        imagem: "/assets/racao_golden_formula_caes_filhote.webp"
    },
    {
        nome: "Ração Cão Adulto 900g",
        preco: 45.00,
        imagem: "/assets/racao_cao_adulto_900g.webp"
    },
    {
        nome: "Cama Pet Grande",
        preco: 149.90,
        imagem: "/assets/cama_pet_grande.webp"
    }
];


produtos.forEach(produto => {
    let card = document.createElement("div");

    card.classList.add("card-produtos");


    card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">

        <h3>${produto.nome}</h3>

        <p>Preço: R$${produto.preco}</p>

        <button type="button">Adicionar ao carrinho</button>
    `;
    let botao = card.querySelector("button");

    botao.addEventListener("click", function () {

        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        carrinho.push(produto);

        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        alert("Produto adicionado ao carrinho!");

    });


    listaProdutos.appendChild(card);

})