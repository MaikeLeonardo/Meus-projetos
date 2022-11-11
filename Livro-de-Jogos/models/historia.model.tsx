export class Historia {

    public id: number
    public nome: string
    public sequencia: number
    public autores: string
    public versao: string

    constructor(id: number, nome: string, sequencia: number, autores: string, versao: string) {  
        this.id = id;
        this.nome = nome;
        this.sequencia = sequencia;
        this.autores = autores;
        this.versao = versao;

    }
}