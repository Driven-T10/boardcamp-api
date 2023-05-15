import { db } from "../database/database.connection.js"

export async function validateGetCustomer(req, res, next) {
    const { id } = req.params
    try {
        const customer = await db.query(`SELECT * FROM customers WHERE id=$1`, [id])
        if (customer.rowCount === 0) return res.status(404).send({ message: "Esse usuário não existe!" })
        res.locals.customer = customer.rows[0]
        next()
    } catch (err) {
        res.status(500).send(err.message)
    }
}