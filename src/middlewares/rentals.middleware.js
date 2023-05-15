import { db } from "../database/database.connection.js"

export async function validateCreateRental(req, res, next) {
    const { customerId, gameId } = req.body

    const customers = await db.query(`SELECT * FROM customers WHERE id=$1;`, [customerId])
    if (customers.rowCount === 0) return res.status(400).send({ message: "Cliente inexistente!" })

    const games = await db.query(`SELECT * FROM games WHERE id=$1;`, [gameId])
    if (games.rowCount === 0) return res.status(400).send({ message: "Jogo inexistente!" })

    const checkGameStock = await db.query(`
        SELECT * FROM rentals WHERE "gameId"=$1 AND "returnDate" IS NULL;
    `, [gameId])
    if (checkGameStock.rowCount >= games.rows[0].stockTotal) return res.status(400).send({ message: "Não há mais desse jogo disponível no estoque!"})

    res.locals.pricePerDay = games.rows[0].pricePerDay
    next()
}