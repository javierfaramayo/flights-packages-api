import { FlightsService } from "./flight.service";
import { Flight } from "./flight.model";

export class FlightsController {
    static getAll() {
        const flightsDB  = FlightsService.getAllDB()
        const mappedFlights = flightsDB.map( ({ _id, desde, hasta, aerolinea }) => {
            return new Flight(_id, desde, hasta, aerolinea.nombre)
        })

        return mappedFlights
    }
    static getById(id) {
        const flightsDB  = FlightsService.getAllDB()

        const flight = flightsDB.filter( ({ _id }) => _id === id)
        
        return flight
    }
}