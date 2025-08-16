import { getTabuleiro, selecionar, getPecaSelecionada } from "./restaUm.js";

const campoJogo = document.getElementById("tabuleiro-container");

function clicouCelula(clique) {
  const l = parseInt(clique.target.dataset.linha);
  const c = parseInt(clique.target.dataset.coluna);

  selecionar(l, c);
  desenhaTudo();
}

function desenhaTudo() {
  const jogo = getTabuleiro();
  const pecaAtiva = getPecaSelecionada();
  campoJogo.innerHTML = "";

  jogo.forEach((linha, i) => {
    linha.forEach((celula, j) => {
      const cel = document.createElement("div");
      cel.classList.add("celula");

      if (celula === 1) {
        cel.classList.add("peca");
      } else if (celula === 0) {
        cel.classList.add("vazio");
      } else {
        cel.classList.add("invalido");
      }

      if (pecaAtiva && pecaAtiva.linha === i && pecaAtiva.coluna === j) {
        cel.classList.add("selecionada");
      }

      cel.dataset.linha = i;
      cel.dataset.coluna = j;

      if (celula !== -1) {
        cel.addEventListener("click", clicouCelula);
      }

      campoJogo.appendChild(cel);
    });
  });
}

desenhaTudo();  