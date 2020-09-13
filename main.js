// Método que realiza o movimento de um disco entre dois pinos
function movimentaDisco(origem, destino) {
  console.log(`Do pino ${origem} para o pino ${destino} `);
}

// Método que faz a recursividade
function resolve(nDisco, pinoOrigem, pinoDestino, pinoAux) {
  if (nDisco > 0) {
    resolve(nDisco - 1, pinoOrigem, pinoAux, pinoDestino);
    movimentaDisco(pinoOrigem, pinoDestino);
    resolve(nDisco - 1, pinoAux, pinoDestino, pinoOrigem);
  }
}

// executa o algoritmo
resolve(5, 'A', 'B', 'C');