import { Router } from 'express'
const router = Router()

router
    .get('/', (req, res) => {
        res.send('hotels get')
    })
    .get('/:id', (req, res) => {
        res.send('hotels by id get')
    })
    .post('/', (req, res) => {
        res.send('hotels post')
    })
    .put('/', (req, res) => {
        res.send('hotels put')
    })
    .delete('/', (req, res) => {
        res.send('hotels delete')
    })

export default router