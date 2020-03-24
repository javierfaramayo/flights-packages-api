import express from 'express'
import bodyParser from 'body-parser'
import flightRoutes from './features/flights/flight.routes'
import hotelRoutes from './features/hotels/hotel.routes'
import loginRoutes from './features/login/login.routes'
import { verifyToken, verifyRole } from './middlewares/auth.middleware'

const server = express()

server
  .use(bodyParser.json())
  .use('/login', loginRoutes)
  .use(verifyToken)
  .use('/flights', flightRoutes)
  .use(verifyRole)
  .use('/hotels', hotelRoutes)

export default server
