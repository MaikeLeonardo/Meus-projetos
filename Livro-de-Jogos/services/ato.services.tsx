import { Ato } from '../models/ato.model'
import {DatabaseConnection} from '../database/database-connection'

const table = "atos"
const db=DatabaseConnection.getConnection()

export default class AtoService {

     static addData(param: Ato) {
        return new Promise((resolve, reject) =>db.transaction(
            tx => {
                tx.executeSql(`insert into ${table} (enredo, historia_id) 
                values (?, ?)`, 
                [param.enredo,
                 param.historia_id], 
                (_, { insertId, rows }) => {
                    console.log("id insert: " + insertId);
                    resolve(insertId)
                }), (sqlError) => {
                    console.log(sqlError);
                }}, (txError) => {
                console.log(txError);
            }));
    }

     static deleteById(id: number) {
        db.transaction(
            tx => {
                tx.executeSql(`delete from ${table} where id = ?;`, [id], (_, { rows }) => {
                }), (sqlError) => {
                    console.log(sqlError);
                }}, (txError) => {
                console.log(txError);
    
            });
    }

     static updateById(param: Ato) {
        return new Promise((resolve, reject) =>db.transaction(tx => {
                tx.executeSql(`update ${table} set enredo = ? historia_id = ? where id = ?;`, [param.enredo, param.historia_id, param.id], () => {
                }), (sqlError) => {
                    console.log(sqlError);
                }}, (txError) => {
                console.log(txError);
    
            }));
    }

     static findById(id: number) {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table} where id=?`, [id], (_, { rows }) => {
                resolve(rows)
            }), (sqlError) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);

        }));
    }

    static findAll() {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
                resolve(rows)
            }), (sqlError) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);
        }))
   }

   static getAtosByHistoria(idHistoria: number) {
    return new Promise((resolve, reject) => db.transaction(tx => {
        console.log(idHistoria)
        tx.executeSql(`select * from ${table} where historia_id=?`, [idHistoria], (_, { rows }) => {
            resolve(rows)
        }), (sqlError) => {
            console.log(sqlError);
        }}, (txError) => {
        console.log(txError);
    }))
}

}