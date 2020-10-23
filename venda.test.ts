import { Endereco } from './endereco';
import { Loja } from './loja';
import { Venda } from './venda';
import { ItemVenda } from './itemVenda';
import { Produto } from './produto';

function verificaCampoObrigatorio(mensagemEsperada: string, venda: Venda) {
  try {
    venda.dados_venda();
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
    }
}

function validaItem(mensagemEsperada: string, item: Venda, produto: Produto, quantidade: number) {
  try {
    venda.adicionarItem(item, produto, quantidade);
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}  

function validaImpressao(mensagemEsperada: string, venda: Venda) {
  try {
    venda.imprimir_cupom();
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}  

function imprimeCupom(mensagemEsperada: string, venda: Venda) {
  try {
    expect(venda.imprimir_cupom()).toBe(mensagemEsperada);
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}  
function validaPagamento(mensagemEsperada: string, venda: Venda) {
  try {
    venda.validaPagamento();
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}  

function finalizaVenda(mensagemEsperada: string, venda: Venda) {
  try {
    venda.finalizaVenda();
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}  

const NOME_LOJA = "Loja 1"
const LOGRADOURO = "Log 1"
const NUMERO = 10
const COMPLEMENTO = "C1"
const BAIRRO = "Bai 1"
const MUNICIPIO = "Mun 1"
const ESTADO = "E1"
const CEP = "11111-111"
const TELEFONE = "(11) 1111-1111"
const OBSERVACAO = "Obs 1"
const CNPJ = "11.111.111/1111-11"
const INSCRICAO_ESTADUAL = "123456789"
const CCF_VENDA = "021784"
const COO_VENDA = "035804"

const QUANTIDADE01 = 10
const QUANTIDADE02 = 5
const UNIDADE= "cx"
const SUBSTITUICAO_TRIBUTARIA = "ST" 
const CODIGO1 = 100
const DESCRICAO1 = "Banana"
const VALOR_UNITARIO1 = 7.45
const VALOR_UNITARIO3 = -2
const CODIGO2 = 101
const DESCRICAO2 = "Laranja"
const VALOR_UNITARIO2 = 3.32
const CODIGO3 = 3
const CODIGO4 = 4

const TIPO_PAGAMENTO1 = "cartão de crédito"
const TIPO_PAGAMENTO2 = "cartão de débito"
const TIPO_PAGAMENTO3 = "dinheiro"

const VALOR_PAGAMENTO = 100

const DATAHORA = "25/11/2020 10:30:40"


let paramEndereco : Endereco = new Endereco(LOGRADOURO, NUMERO, COMPLEMENTO,
  BAIRRO, MUNICIPIO, ESTADO, CEP);

let paramLoja: Loja = new Loja(NOME_LOJA, paramEndereco, TELEFONE, OBSERVACAO, CNPJ, INSCRICAO_ESTADUAL);

let venda = new Venda(paramLoja, DATAHORA, CCF_VENDA, COO_VENDA, TIPO_PAGAMENTO1, VALOR_PAGAMENTO);


//Mensagens 

const MENSAGEM_VENDA_SEM_ITENS = `Venda sem itens`;
const MENSAGEM_PRODUTO_DUPLICADO = `Produto duplicado`;
const MENSAGEM_QUANTIDADE = "Item com quantidade zero ou negativa";
const MENSAGEM_VALOR_PRODUTO = "Produto com valor unitário zero ou negativo";
const MENSAGEM_VALIDA_PAGAMENTO = "Tipo de pagamento inválido";
const MENSAGEM_TIPO_PAGAMENTO = "Operação inválida";

const TEXTO_ESPERADO_CUPOM_COMPLETO = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
------------------------------
25/11/2020 10:30:40V CCF:021784 COO: 035804
    CUPOM FISCAL
ITEM CODIGO DESCRICAO QTD UN VL UNIT(R$) ST VL ITEM(R$)
1 100 Banana 10 cx 7.45 ST 74.50
2 101 Laranja 5 cx 3.32 ST 16.60
------------------------------
TOTAL R$ 91.10
Dinheiro 100.00
Troco R$ 8.90
Lei 12.741, Valor aprox., Imposto F=6.87 (7.54%), E=4.38 (4.81%)
------------------------------
OPERADOR: 494715
------------------------------
SWEDA IF ST200
ECF-IF VERSÃO: 01.00.05 ECF: 067
FAB: SW031300000000045629`


let venda_sem_itens: Venda = new Venda(paramLoja, DATAHORA, CCF_VENDA, COO_VENDA, TIPO_PAGAMENTO1, VALOR_PAGAMENTO);

let produto01: Produto = new Produto(
  CODIGO1, 
  DESCRICAO1, 
  UNIDADE, 
  VALOR_UNITARIO1, 
  SUBSTITUICAO_TRIBUTARIA
);

let produto02: Produto = new Produto(
  CODIGO2, 
  DESCRICAO2, 
  UNIDADE, 
  VALOR_UNITARIO2, 
  SUBSTITUICAO_TRIBUTARIA
);
  
let produto03: Produto = new Produto(
  CODIGO3, 
  DESCRICAO1, 
  UNIDADE, 
  VALOR_UNITARIO3, 
  SUBSTITUICAO_TRIBUTARIA
);

let produto04: Produto = new Produto(
  CODIGO4, 
  DESCRICAO2, 
  UNIDADE, 
  VALOR_UNITARIO2, 
  SUBSTITUICAO_TRIBUTARIA
);

let produto_gratis: Produto = new Produto(
  CODIGO1, 
  DESCRICAO1, 
  UNIDADE, 
  0, 
  SUBSTITUICAO_TRIBUTARIA
);

let item01: ItemVenda = new ItemVenda(1, produto01, QUANTIDADE01)

let item02: ItemVenda = new ItemVenda(2, produto01, QUANTIDADE02)

let vendaComDoisItens: Venda = new Venda(
  paramLoja, 
  DATAHORA,
  CCF_VENDA, COO_VENDA, 
  TIPO_PAGAMENTO1,
  VALOR_PAGAMENTO,   
  new Array<ItemVenda>(item01, item02)

)
let item03: ItemVenda = new ItemVenda(3, produto03, QUANTIDADE01)

let item04: ItemVenda = new ItemVenda(4, produto04, QUANTIDADE02)

let item05: ItemVenda = new ItemVenda(2, produto02, QUANTIDADE02)


let vendaComDoisItensNegativo: Venda = new Venda(
  paramLoja, 
  DATAHORA,
  CCF_VENDA,
  COO_VENDA, 
  TIPO_PAGAMENTO1,
  VALOR_PAGAMENTO, 
  new Array<ItemVenda>(item03, item04)
)

let vendaTeste: Venda = new Venda(
  paramLoja, 
  DATAHORA,
  CCF_VENDA, COO_VENDA, 
  TIPO_PAGAMENTO3,
  VALOR_PAGAMENTO,   
  new Array<ItemVenda>(item01, item05)

)

test('ccf vazio', () => {
  let ccf_vazio: Venda = new Venda(paramLoja, DATAHORA, "", COO_VENDA,  TIPO_PAGAMENTO1, VALOR_PAGAMENTO);
    verificaCampoObrigatorio(`O campo CCF da venda é obrigatório`, ccf_vazio);
});

test('coo vazio', () => {
  let coo_vazio: Venda = new Venda(paramLoja, DATAHORA, CCF_VENDA, "",  TIPO_PAGAMENTO1, VALOR_PAGAMENTO);
    verificaCampoObrigatorio(`O campo COO da venda é obrigatório`, coo_vazio);
});

test('Sem itens', () =>{
  validaImpressao(MENSAGEM_VENDA_SEM_ITENS, venda_sem_itens)
});

test('Item duplicado', () =>{
  validaItem(MENSAGEM_PRODUTO_DUPLICADO, vendaComDoisItens, produto01, 5)
});

test('Quantidade do item', () =>{
  validaItem(MENSAGEM_QUANTIDADE, venda_sem_itens, produto01, 0)
});

test('Valor produto', () =>{
  validaItem(MENSAGEM_VALOR_PRODUTO, vendaComDoisItensNegativo, produto_gratis, 3)
});

test('Valida Pagamento', () => {
  let valida_pagamento: Venda = new Venda(paramLoja, DATAHORA, CCF_VENDA, COO_VENDA, "fiado", VALOR_PAGAMENTO);
    validaPagamento(MENSAGEM_VALIDA_PAGAMENTO, valida_pagamento);
});

test('Valida tipo do Pagamento', () => {
  let valida_tipo_pagamento: Venda = new Venda(paramLoja, DATAHORA, CCF_VENDA, COO_VENDA, TIPO_PAGAMENTO3, VALOR_PAGAMENTO, new Array<ItemVenda>(item01));
    validaPagamento(MENSAGEM_TIPO_PAGAMENTO, valida_tipo_pagamento);
});

test('Valida troco', () => {
  let valida_troco: Venda = new Venda(paramLoja, DATAHORA, CCF_VENDA, COO_VENDA, TIPO_PAGAMENTO3, 100, new Array<ItemVenda>(item01));
    finalizaVenda("89", valida_troco);
});


test('Imprimir cupom fiscal completo', () => {
    imprimeCupom(TEXTO_ESPERADO_CUPOM_COMPLETO, vendaTeste);
});