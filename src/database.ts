import { createPool } from "mysql2/promise";

export async function connect(){
    const connection = await createPool({
        host: "localhost",
        user: "root",
        password: "165998",
        database: "cetyssorteosbasedatos",
        connectionLimit: 10
    });

    return connection;
}