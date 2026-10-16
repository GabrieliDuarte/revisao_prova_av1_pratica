import { pool } from "../database/connection.js";
import { Cama } from "../types/cama.js"

class CamaService {

    async criar(data: Cama) {

        const query = `
        INSERT INTO cama (nome,tamanho,preco)
        VALUES ($1,$2,$3)
        RETURNING *;
        `;

        const values = [data.nome, data.tamanho, data.preco];
        const result = await pool.query(query, values);
        result.rows[0];
    }

    async listar() {
        const res = await pool.query("SELECT * FROM camas")
        return res.rows
    }


}

export const camaService = new CamaService()