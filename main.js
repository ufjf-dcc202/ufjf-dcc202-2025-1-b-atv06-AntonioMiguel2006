import { getTabuleiro } from "/restaUm.js";

const campoJogo = document.getElementById("tabuleiro-container");

function desenhaTudo() {
  const jogo = getTabuleiro();
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

      cel.dataset.linha = i;
      cel.dataset.coluna = j;

      campoJogo.appendChild(cel);
    });
  });
}

desenhaTudo();
