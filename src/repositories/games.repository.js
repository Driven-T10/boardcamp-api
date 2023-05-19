import { db } from "../database/database.connection.js"

export function getAllGamesDB() {
    const result = db.query(`SELECT * FROM games;`)
    return result
}

export async function createGameDB(body) {
    const {name, image, stockTotal, pricePerDay} = body

    const result = await db.query(`
    INSERT INTO games (name, image, "stockTotal", "pricePerDay")
        VALUES ($1, $2, $3, $4);
    `, [name, image, stockTotal, pricePerDay])

    return result   
}

export async function getGameByNameDB(name) {
    const result = await db.query(`SELECT * FROM games WHERE name=$1;`, [name])
    return result
}