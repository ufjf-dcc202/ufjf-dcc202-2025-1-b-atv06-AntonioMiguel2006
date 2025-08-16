const jogoAtual = [
  [-1, -1, 1, 1, 1, -1, -1],
  [-1, -1, 1, 1, 1, -1, -1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [-1, -1, 1, 1, 1, -1, -1],
  [-1, -1, 1, 1, 1, -1, -1],
];  

let pecaAtual = null;

export function getTabuleiro() {
  return jogoAtual.map((linha) => [...linha]);
}

export function getPecaSelecionada() {
  return pecaAtual;
}

export function selecionar(l, c) {
  if (!pecaAtual && jogoAtual[l][c] === 1) {
    pecaAtual = { linha: l, coluna: c };
    return;
  }

  if (pecaAtual && pecaAtual.linha === l && pecaAtual.coluna === c) {
    pecaAtual = null;
    return;
  }

  if (pecaAtual && jogoAtual[l][c] === 0) {
    tentaMover(pecaAtual, { linha: l, coluna: c });
    pecaAtual = null;
  }
}

function tentaMover(ondeTa, praOndeVai) {
  const { linha: l1, coluna: c1 } = ondeTa;
  const { linha: l2, coluna: c2 } = praOndeVai;

  const distL = Math.abs(l1 - l2);
  const distC = Math.abs(c1 - c2);

  if (!((distL === 2 && distC === 0) || (distL === 0 && distC === 2))) {
    return;
  }

  const lMeio = l1 + (l2 - l1) / 2;
  const cMeio = c1 + (c2 - c1) / 2;

  if (jogoAtual[lMeio][cMeio] !== 1) {
    return;
  }

  jogoAtual[l2][c2] = 1;
  jogoAtual[l1][c1] = 0;
  jogoAtual[lMeio][cMeio] = 0;
}
