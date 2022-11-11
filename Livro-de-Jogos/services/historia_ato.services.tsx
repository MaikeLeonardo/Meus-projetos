import { HistoriaAtos } from '../models/historia_ato.model'
import {DatabaseConnection} from '../database/database-connection'

const table = "historia_atos"
const db=DatabaseConnection.getConnection()

export default class HistoriaAtosService {

    static addData(param: HistoriaAtos) {
        return new Promise((resolve, reject) =>db.transaction(
            tx => {
                tx.executeSql(`insert into ${table} (historia_id, ato_id, ato_id_a, ato_id_b) 
                values (?, ?, ?, ?)`, 
                [param.historia_id,
                 param.ato_id,
                 param.ato_id_a,
                 param.ato_id_b], 
                (_, { insertId, rows }) => {
                    console.log("id insert: " + insertId);
                    resolve(insertId)
                }), (sqlError) => {
                    console.log(sqlError);
                }}, (txError) => {
                console.log(txError);
            }));
    }


    static getEnredoByHistoriaId(idHistoria) {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`SELECT historias.id, historias.nome, 
                                  historia_atos.ato_id id_ato_atual, ato_atual.enredo enredo_atual, 
                                  historia_atos.ato_id_a, ato_op_a.enredo enredo_op_a, 
                                  historia_atos.ato_id_b, ato_op_b.enredo ato_op_b
                             FROM historia_atos
                            INNER JOIN historias
                               ON (historias.id = historia_atos.historia_id)
                            INNER JOIN atos ato_atual
                               ON (ato_atual.id = historia_atos.ato_id)
                            INNER JOIN atos ato_op_a
                               ON (ato_op_a.id = historia_atos.ato_id_a)
                            INNER JOIN atos ato_op_b
                               ON (ato_op_b.id = historia_atos.ato_id_b)
                           WHERE historia_atos.historia_id = ?
                           LIMIT 1`, [idHistoria], (_, { rows }) => {
                resolve(rows)
                //console.log(rows);
            }), (sqlError) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);
        }))
    }    

    static getEnredoCompletoByHistoriaId(idHistoria) {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`SELECT historias.nome, ato_atual.enredo enredo_atual, ato_op_a.enredo enredo_op_a, ato_op_b.enredo ato_op_b
                                FROM historia_atos
                            INNER JOIN historias
                                ON (historias.id = historia_atos.historia_id)
                            INNER JOIN atos ato_atual
                                ON (ato_atual.id = historia_atos.ato_id)
                            INNER JOIN atos ato_op_a
                                ON (ato_op_a.id = historia_atos.ato_id_a)
                            INNER JOIN atos ato_op_b
                                ON (ato_op_b.id = historia_atos.ato_id_b
                            WHERE historia_atos.historia_id = ?) `, [idHistoria], (_, { rows }) => {
                resolve(rows)
            }), (sqlError) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);

        }));
    }

    static getAtoById(idAto) {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table} where id = ?`, [idAto], (_, { rows }) => {
                resolve(rows)
            }), (sqlError) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);

        }));
    }

}

