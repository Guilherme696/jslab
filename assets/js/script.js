let quantidadeExemplo = 3;
console.log(quantidadeExemplo); 
quantidadeExemplo = 5;
console.log(quantidadeExemplo); 

const nomeCurso = "Desenvolvimento de Interfaces Web";
console.log(nomeCurso);

const nomeExemplo = "Carlos";
const idadeExemplo = 24;
const aprovadoExemplo = true;

console.log(typeof nomeExemplo);     
console.log(typeof idadeExemplo);    
console.log(typeof aprovadoExemplo); 

const mensagemExemplo = `Nome: ${nomeExemplo} | Idade: ${idadeExemplo}`;
console.log(mensagemExemplo);

console.log(10 === "10"); 

const possuiIngressoExemplo = true;
const podeEntrarExemplo = idadeExemplo >= 18 && possuiIngressoExemplo;
console.log(`Pode entrar? ${podeEntrarExemplo}`); 


const produtoNome = "Teclado Mecânico RGB";
const produtoPreco = 280.00;
const produtoQuantidade = 2;
const produtoDescontoPercentual = 10; 
const produtoDisponivel = true;

const compraSubtotal = produtoPreco * produtoQuantidade;
const compraDesconto = (compraSubtotal * produtoDescontoPercentual) / 100;
const compraValorFinal = compraSubtotal - compraDesconto;

console.log("--- RESULTADO DO EXERCÍCIO ---");
console.log(`Produto comprado: ${produtoNome}`);
console.log(`Quantidade: ${produtoQuantidade} unidades`);
console.log(`Disponibilidade em estoque: ${produtoDisponivel}`);
console.log(`Subtotal: R$ ${compraSubtotal.toFixed(2)}`);
console.log(`Valor do Desconto: R$ ${compraDesconto.toFixed(2)}`);
console.log(`Valor Final a Pagar: R$ ${compraValorFinal.toFixed(2)}`);

console.log(`Tipo da constante 'produtoNome': ${typeof produtoNome}`);
console.log(`Tipo da constante 'produtoPreco': ${typeof produtoPreco}`);
console.log(`Tipo da constante 'produtoDisponivel': ${typeof produtoDisponivel}`);
