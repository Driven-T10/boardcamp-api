import { db } from "../database/database.connection.js"

export async function getCustomers(req, res) {
    try {
        const { rows: customers } = await db.query(`SELECT * FROM customers;`)
        res.send(customers)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getCustomerById(req, res) {
    try {
        res.send(res.locals.customer)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function createCustomer(req, res) {
    try {
        res.send("Oi")
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function updateCustomer(req, res) {
    try {
        res.send("Oi")
    } catch (err) {
        res.status(500).send(err.message)
    }
} 