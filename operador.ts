export class Operador{

    constructor(

        public codigoOperador: number) {}

    public validar_dados_obrigatorios(): void {

        if (!this.codigoOperador){
            throw new Error (`O código do operador é obrigatório`)
        }
    }

    public dados_codigoOperador(): string {

        this.validar_dados_obrigatorios()

        let _codigoOperador : number = this.codigoOperador;
        let _separator : string = "------------------------------"


        return (
`${_separator}
OPERADOR: ${_codigoOperador}
${_separator}`
         )
    }
}