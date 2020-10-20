import { Endereco } from "./endereco";
import { Venda } from "./venda";
import { Operador } from './operador';
import { ImpressoraFiscal } from './impressoraFiscal';

export class Loja {

    constructor(
        public nome_loja: string,
        public endereco: Endereco,
        public telefone: string,
        public observacao: string, 
        public cnpj: string, 
        public inscricao_estadual: string,
        public vendas: Array<Venda> = new Array<Venda>(),
        public operador: Operador = new Operador(494715),
        public impressoraFiscal: ImpressoraFiscal = new ImpressoraFiscal("\nSWEDA IF ST200", "01.00.05", "067", "SW031300000000045629")) { }
        

    public vender(loja: Loja, datahora: string, ccf: string, coo: string, tipoPagamento: string, valorPagamento: number): Venda{
        let novaVenda = new Venda(loja, datahora, ccf, coo, tipoPagamento, valorPagamento);
        this.vendas.push(novaVenda);
        return novaVenda;
    }    
        
    public dadosFiscais(): string {
        let dadosOperador: string = this.operador.dados_codigoOperador();
        let dadosImpressora: string = this.impressoraFiscal.dados_ImpressoraFiscal();

        return dadosOperador + dadosImpressora;

    }
    public verificaCampoObrigatorio(): void {
  
        if (this.nome_loja == "")
            throw new Error(`O campo nome da loja é obrigatório`)
    
        if(this.cnpj == "")
            throw new Error("O campo CNPJ da loja é obrigatório")
  
        if(this.inscricao_estadual == "")
            throw new Error("O campo inscrição estadual da loja é obrigatório")
    
    }

    public dados_loja(): string {

        let _telefone : string = this.telefone? `Tel ${this.telefone}` : ""
        _telefone = this.endereco.cep && _telefone? " " + _telefone : _telefone
        
        const _observacao : string = this.observacao? this.observacao : ""
  
        const _cnpj : string = `CNPJ: ${this.cnpj}`
        const _inscricao_estadual : string = `IE: ${this.inscricao_estadual}`

        return(
`${this.nome_loja}
${this.endereco.dados_endereco()}${_telefone}
${_observacao}
${_cnpj}
${_inscricao_estadual}
`)

    }
}