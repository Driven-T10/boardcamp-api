import { getGameByNameDB } from "../repositories/games.repository.js"

export async function validateCreateGame(req, res, next) {
    const { name } = req.body

    try {
        const game = await getGameByNameDB(name)
        if (game.rowCount !== 0) return res.status(409).send({ message: "Esse jogo já existe!" })
        next()
    } catch (err) {
        res.status(500).send(err.message)
    }
}