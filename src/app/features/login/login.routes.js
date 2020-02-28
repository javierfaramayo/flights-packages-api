import { Router } from 'express'
const router = Router()

router
    .get('/', (req, res) => {
        res.send('login get')
    })
    .post('/', (req, res) => {
        res.send('login post')
    })
    .put('/', (req, res) => {
        res.send('login put')
    })
    .delete('/', (req, res) => {
        res.send('login delete')
    })

export default router