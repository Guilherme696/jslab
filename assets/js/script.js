console.log("--- Itens 4 ao 11: Manipulação de Arrays ---");
const categorias = ["Infraestrutura", "Software", "Hardware", "Rede"];
console.log(categorias);

console.log(`Primeira categoria (índice 0): ${categorias[0]}`);
console.log(`Quantidade de elementos: ${categorias.length}`);

const ultimaCategoria = categorias[categorias.length - 1];
console.log(`Última categoria: ${ultimaCategoria}`);

categorias.push("Segurança");
console.log("Após push:", categorias);

const removida = categorias.pop();
console.log(`Categoria removida com pop: ${removida}`);
console.log("Após pop:", categorias);

console.log("Percorrendo com forEach:");
categorias.forEach(categoria => {
    console.log(`- ${categoria}`);
});

console.log("--- Itens 13 ao 15: Objetos e Propriedades ---");
const pedido = {
    id: 1042,
    cliente: "Clínica Central",
    prioridade: "alta",
    status: "aberto"
};
console.log("Objeto pedido original:", pedido);

pedido.status = "atendimento";
console.log("Objeto pedido modificado:", pedido);

console.log("--- Itens 17 ao 21: Arrays de Objetos e Desestruturação ---");
const pedidos = [
    {
        id: 1042,
        cliente: "Clínica Central",
        prioridade: "alta",
        status: "atendimento",
        valor: 850
    },
    {
        id: 1043,
        cliente: "Loja Horizonte",
        prioridade: "normal",
        status: "aberto",
        valor: 420
    },
    {
        id: 1044,
        cliente: "Escritório Almeida",
        prioridade: "urgente",
        status: "aberto",
        valor: 1200
    }
];
console.log("Coleção de Pedidos:", pedidos);

const { id: primeiroId, cliente: primeiroCliente } = pedidos[0];
console.log(`Desestruturação isolada -> ID: ${primeiroId} | Cliente: ${primeiroCliente}`);

console.log("forEach combinado com Desestruturação:");
pedidos.forEach(p => {
    const { id, cliente, status } = p;
    console.log(`ID: ${id} - Cliente: ${cliente} - Status: ${status}`);
});
