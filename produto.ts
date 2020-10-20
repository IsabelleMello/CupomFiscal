export class Produto {

    constructor(
        public codigo: number,
        public descricao: String,
        public unidade: string,
        public valorUnitario: number,
        public substituicaoTributaria: String) { }

    public verificaCampoObrigatorio(): void {
  
        if (this.codigo == 0)
            throw new Error(`O campo código do produto é obrigatório`)
        
        if(this.descricao == "")
            throw new Error("O campo descrição do produto é obrigatório")
      
        if(this.unidade == "")
            throw new Error("O campo unidade do produto é obrigatório")

        if(this.valorUnitario == 0)
            throw new Error("O campo valor unitário do produto é obrigatório")

        if(this.substituicaoTributaria == "")
            throw new Error("O campo valor unitário do produto é obrigatório")
        
        }
}