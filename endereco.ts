export class Endereco {

    constructor(
        public logradouro: string,
        public numero: number, 
        public complemento: string,
        public bairro: string, 
        public municipio: string, 
        public estado: string, 
        public cep: string) { }

    public verificaCampoObrigatorio(): void {
  
        if (this.logradouro == "")
            throw new Error(`O campo nome da loja é obrigatório`)
    
        if(this.municipio == "")
            throw new Error("O campo município do endereço é obrigatório")
    
        if(this.estado == "")
            throw new Error("O campo estado do endereço é obrigatório")    
        
    }

    public dados_endereco(): string {
         
        const _logradouro : string = this.logradouro + ", "
        const _numero : string = this.numero? `${this.numero}` : "s/n"
        const _complemento : string = this.complemento && " " + this.complemento || "";
        const _bairro : string = this.bairro? this.bairro + " - " : ""
        const _municipio = this.municipio + " - "
  
        const _cep : string = this.cep? `CEP:${this.cep}` : ""

    return (
`${_logradouro}${_numero}${_complemento}
${_bairro}${_municipio}${this.estado}
${_cep}`)

    }
}   