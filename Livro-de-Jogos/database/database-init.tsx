import { DatabaseConnection } from './database-connection'

var db = DatabaseConnection.getConnection();
export default class DatabaseInit {

    constructor() {
        this.InitDb()
    }
    private InitDb() {
        var sql = [
            `DROP TABLE IF EXISTS historias;`,
            `DROP TABLE IF EXISTS atos;`,
            `DROP TABLE IF EXISTS historia_atos;`,

            `CREATE TABLE IF NOT EXISTS historias (
                id integer primary key autoincrement,
                nome text, 
                sequencia integer, 
                autores text, 
                versao text         
            );`,

            `CREATE TABLE IF NOT EXISTS atos (
                id integer primary key autoincrement,
                enredo text,
                historia_id integer         
            );`,

            `CREATE TABLE IF NOT EXISTS historia_atos (
                id integer primary key autoincrement,
                historia_id integer,
                ato_id integer,
                ato_id_a integer,
                ato_id_b integer
            );`,

            `insert into historias (nome, sequencia, autores, versao) values ('Um', 1, 'Um', 'Um');`,
            `insert into historias (nome, sequencia, autores, versao) values ('Dois', 2, 'Dois', 'Dois');`,
            `insert into historias (nome, sequencia, autores, versao) values ('Três', 3, 'Três', 'Três');`,
            `insert into historias (nome, sequencia, autores, versao) values ('Quatro', 4, 'Quatro', 'Quatro');`,
            `insert into historias (nome, sequencia, autores, versao) values ('Cinco', 5, 'Cinco', 'Cinco');`,
            
            `insert into atos (enredo, historia_id) values ('Enredo Ato 001', 1);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 002', 1);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 003', 1);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 004', 1);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 005', 1);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 006', 1);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 007', 1);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 008', 1);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 009', 1);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 010', 1);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 011', 2);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 012', 2);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 013', 2);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 014', 2);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 015', 2);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 016', 2);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 017', 2);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 018', 2);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 019', 2);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 020', 2);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 021', 3);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 022', 3);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 023', 3);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 024', 3);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 025', 3);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 026', 3);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 027', 3);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 028', 3);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 029', 3);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 030', 3);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 031', 4);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 032', 4);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 033', 4);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 034', 4);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 035', 4);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 036', 4);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 037', 4);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 038', 4);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 039', 4);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 040', 4);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 041', 5);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 042', 5);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 043', 5);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 044', 5);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 045', 5);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 046', 5);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 047', 5);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 048', 5);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 049', 5);`,
            `insert into atos (enredo, historia_id) values ('Enredo Ato 050', 5);` 

            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(1, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(1, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(1, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(1, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(1, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(1, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(1, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(1, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(1, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(1, );`,

            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(2, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(2, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(2, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(2, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(2, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(2, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(2, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(2, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(2, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(2, );`,

            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(3, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(3, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(3, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(3, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(3, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(3, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(3, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(3, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(3, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(3, );`,

            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(4, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(4, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(4, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(4, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(4, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(4, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(4, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(4, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(4, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(4, );`,

            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(5, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(5, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(5, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(5, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(5, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(5, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(5, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(5, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(5, );`,
            // `insert into historia_atos (historia_id, ato_id, ato_id_a, ato_id_b) values(5, );`,

        ];

        db.transaction(
            tx => {
                for (var i = 0; i < sql.length; i++) {
                    console.log("execute sql : " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error) => {
                console.log("error call back : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction complete call back ");
            }
        );
    }

}