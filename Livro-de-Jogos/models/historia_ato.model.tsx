export class HistoriaAtos {

    public id: number
    public historia_id: number
    public ato_id: number
    public ato_id_a: number
    public ato_id_b: number

    constructor(id: number, historia_id: number, ato_id: number, ato_id_a: number, ato_id_b: number) {  
        this.id = id
        this.historia_id = historia_id
        this.ato_id = ato_id
        this.ato_id_a = ato_id_a
        this.ato_id_b = ato_id_b
    }

}