console.log("--- Item 5: Contagem de 1 a 5 ---");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("--- Item 6a: Contagem de 1 a 10 ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("--- Item 6b: Apenas Números Pares de 2 a 10 ---");
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

console.log("--- Item 7: Somatório de 1 a 5 ---");
let soma = 0;
for (let i = 1; i <= 5; i++) {
    soma = soma + i;
}
console.log(`Resultado da soma: ${soma}`); 

console.log("--- Item 8: Números pares de 1 a 20 ---");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("--- Item 9: Contador com while ---");
let contador = 1;
while (contador <= 5) {
    console.log(contador);
    contador++;
}

console.log("--- Item 12: Processamento de Pedidos ---");
const quantidadePedidos = 8;
for (let i = 1; i <= quantidadePedidos; i++) {
    console.log(`Processando pedido ${i}`);
}

console.log("--- Item 13: Contagem Regressiva ---");
let regressiva = 10;
while (regressiva >= 1) {
    console.log(regressiva);
    regressiva--;
}
console.log("Fim");
