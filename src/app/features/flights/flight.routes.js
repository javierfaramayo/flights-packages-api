import { Router } from 'express'
import {FlightsController} from './flights.controller'
const router = Router()

router
    .get('/', (req, res) => {
        const flights = FlightsController.getAll()
        res.json(flights)
    })
    .get('/:id', (req, res) => {
        const id = parseInt(req.params.id)

        if(typeof(id) === 'number') {

            const flight = FlightsController.getById(id)

            if(flight.length) res.json(flight)
            else res.status(404).send('Flight not found')

        } else {
            res.status(402).send('Bad request. Id must be a number')
        }

        res.json(FlightsController.getById(req.params.id))
    })
    .post('/', (req, res) => {

        const result = FlightsController.add(req.body)

        res.json(result)
    })
    .put('/', (req, res) => {
        res.send('flights put')
    })
    .delete('/', (req, res) => {
        res.send('flights delete')
    })

export default router