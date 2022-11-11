
import { Historia } from '../models/historia.model'
import {DatabaseConnection} from '../database/database-connection'

const table = "historias"
const db=DatabaseConnection.getConnection()

export default class HistoriaService {
     static addData(param: Historia) {
        return new Promise((resolve, reject) =>db.transaction(
            tx => {
                tx.executeSql(`insert into ${table} (nome, sequencia, autores, versao) 
                values (?, ?, ?, ?)`, 
                [param.nome, param.sequencia, param.autores, param.versao], 
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

     static updateById(param: Historia) {
        return new Promise((resolve, reject) =>db.transaction(tx => {
                tx.executeSql(`update ${table} set nome = ?, sequencia = ?, autores = ?, versao = ? where id = ?;`, [param.nome, 
                                                                                                                     param.sequencia, 
                                                                                                                     param.autores,
                                                                                                                     param.versao,
                                                                                                                     param.id], () => {
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
        }));
    }

    static getHistorias() {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select id, nome from ${table}`, [], (_, { rows }) => {
                resolve(rows)
                //console.log(rows);
            }), (sqlError) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);
        }))
    }

    static getHistoriasToDropDownComponent() {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select id As key, nome As value from ${table}`, [], (_, { rows }) => {
                resolve(rows)
                //console.log(rows);
            }), (sqlError) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);        
        }))
    }        

}