
let BotoesCategorias = document.querySelectorAll("nav.categorias button");
let jogos = document.querySelectorAll(".jogo");
let BarraPesquisa = document.getElementById("pesquisa");
let CategoriaSelecionada = "Todos"; // Armazena a categoria selecionada
let NomeAtual = document.querySelector("p");
let quadrado = document.querySelector(".q-nome");

quadrado.style.display = "none"

// Função para filtrar jogos com base na categoria e na pesquisa
function filtrarJogos() {
    let PalavraPesquisada = BarraPesquisa.value.toLowerCase().trim();

    jogos.forEach(jogo => {
        let categoriasJogo = jogo.getAttribute("data-categoria").split(", ");
        let NomeJogo = jogo.querySelector("img").alt.toLowerCase();

        // Verifica se a categoria e a palavra de pesquisa sao iguais
        let MostrarJogo = (categoriasJogo.includes(CategoriaSelecionada) || CategoriaSelecionada == "Todos") &&
            (NomeJogo.includes(PalavraPesquisada));

        jogo.style.display = MostrarJogo ? "block" : "none";


    });
}

// Evento de clique nos botões de categoria
BotoesCategorias.forEach(botao => {
    botao.addEventListener("click", () => {
        CategoriaSelecionada = botao.textContent.trim(); // Atualiza a categoria selecionada
        filtrarJogos();
    });
});

// Eventor Mouseover e Mouseout
jogos.forEach(jogo => {
    let NomeJogo = jogo.querySelector("img").alt.toUpperCase();
    jogo.addEventListener("mouseover", () => {
        NomeAtual.innerHTML = NomeJogo;
        quadrado.style.display = "flex"
    });
    jogo.addEventListener("mouseout", () => {
        NomeAtual.innerHTML = "";
        quadrado.style.display = "none"
    });
});



// Evento de entrada na barra de pesquisa
BarraPesquisa.addEventListener("input", filtrarJogos);



let botao = document.querySelector(".q-botao");
let background = document.querySelector("body");
let clique_botao = document.querySelector(".q-botao button");
let Back_Categorias = document.querySelector("nav.categorias");

let imagem = document.querySelector(".q-botao button img");
let imgSol = botao.getAttribute("data-img-sol");
let imgLua = botao.getAttribute("data-img-lua");

// Botao tema
botao.addEventListener("click", () => {
    if (clique_botao.style.marginLeft == "50%") {

        clique_botao.style.marginLeft = ""; //limpa campo do nome do jogo
        tema_branco = false;
        tema(tema_branco);


    } else {
        clique_botao.style.marginLeft = "50%";
        tema_branco = true;
        tema(tema_branco);

    }
});

function tema(tema_branco){
    
    if (tema_branco == true) {
        background.style.backgroundColor = "#D1D1D1";
        botao.style.backgroundColor = "gray";
        imagem.src = imgLua;

        cor_texto = "black";
        cor_categoria = "#9E9E9E";
        jogo_cor = "#9E9E9E";
    }
    else{
        background.style.backgroundColor = "#2C2F48";
        botao.style.backgroundColor = "white";
        imagem.src = imgSol;
        
        cor_texto = "white";
        jogo_cor = "#383B5B";
        cor_categoria = "#383B5B";
    }

    mudar_cor(jogo_cor, cor_categoria, cor_texto);
}

function mudar_cor(cor_jogos, cor_categoria, cor_texto){
    jogos.forEach(jogo => {
        jogo.style.backgroundColor = cor_jogos;
    });
    BotoesCategorias.forEach(botao => {
        botao.style.color = cor_texto;
    });

    Back_Categorias.style.backgroundColor = cor_categoria;
    console.log("Cor da categoria:", cor_categoria);

}


