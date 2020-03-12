import { Router } from 'express'
import {FlightsController} from './flights.controller'
const router = Router()

router
    .get('/', async (req, res) => {

        try {
            const flights = await FlightsController.getAll()
            res.json(flights)

        } catch (error) {
            res.status(500).json({ error: 'Something went wrong. Please retry or contact with an admin.', message: error})
        }

    })
    .get('/:id', async (req, res) => {     
        try {
            const id = req.params.id

            const flight = await FlightsController.getById(id)
            res.json(flight)
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong. Please retry or contact with an admin.', message: error})
        }
    })
    .post('/', async (req, res) => {

        try {            
            await FlightsController.add(req.body)
            res.status(201).json({ message: 'Flight created successfully.' })
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong. Please retry or contact with an admin.', message: error})
        }

    })
    .put('/:id', async (req, res) => {
        const id = parseInt(req.params.id)

        if(!isNaN(id)) {
            
            try {
                await FlightsController.updateById(id)
                res.status(200).json({ message: 'Flight updated successfully.' })
            } catch (error) {
                res.status(500).json({ error: 'Something went wrong. Please retry or contact with an admin.', message: error})
            }

        } else {
            res.status(402).send({ error: 'Bad request.', message: 'Id must be a number' })
        }
    })
    .delete('/:id', async (req, res) => {
        res.send('flights delete')
    })

export default router