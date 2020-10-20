export class ImpressoraFiscal{

    constructor(

        public impressora: string,
        public ecf_if: string,
        public ecf: string,
        public numeroSerial: string) {}

    public validar_dados_obrigatorios(): void {

        if (!this.impressora){
            throw new Error (`A informação do modelo da impressora fiscal é obrigatória`)
        }

        if (!this.ecf_if){
            throw new Error (`A informação do ecf_if da impressora é obrigatória`)
        }

        if (!this.ecf){
            throw new Error (`A informação do ecf da impressora é obrigatória`)
        }

        if (!this.numeroSerial){
            throw new Error (`A informação do serial da impressora é obrigatória`)
        }
    }

    public dados_ImpressoraFiscal(): string {

        this.validar_dados_obrigatorios()

        let _ecfIf : string = "ECF-IF VERSÃO: " + this.ecf_if + " ECF: " + this.ecf

        let _numeroSerial : string =  "FAB: " + this.numeroSerial


        return (
`${this.impressora}
${_ecfIf}
${_numeroSerial}`
         )
    }
}