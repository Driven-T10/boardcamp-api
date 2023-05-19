import { createGameDB, getAllGamesDB } from "../repositories/games.repository.js"

export async function getGames(req, res) {
    try {
        const { rows: games } = await getAllGamesDB()
        res.send(games)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function createGames(req, res) {
    try {
        await createGameDB(req.body)
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
} 