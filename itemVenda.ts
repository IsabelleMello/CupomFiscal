import { Produto } from './produto';


export class ItemVenda {

    constructor(
        public item: number,
        public produto: Produto,
        public quantidade: number) { }

    public verificaCampoObrigatorio(): void {
        
        if(this.item == 0)
            throw new Error("O campo item da venda é obrigatório")
      
        if(this.produto == null)
            throw new Error("O campo produto da venda é obrigatório")

        if(this.quantidade == 0)
            throw new Error("O campo quantidade da venda é obrigatório")

        }

        public valorItem(): number {
            return this.quantidade * this.produto.valorUnitario;
        }
    
        public dados_item(): string {
            return `${this.item} ${this.produto.codigo} ${this.produto.descricao} ${this.quantidade} ${this.produto.unidade} ${this.produto.valorUnitario} ${this.produto.substituicaoTributaria} ${this.valorItem().toFixed(2)}`;
          }
      }