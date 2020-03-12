import { FlightsService } from "./flight.service";
import { Flight } from "./flight.model";

export class FlightsController {
    static async getAll() {
        return await FlightsService.getAllDB()
    }

    static async getById(id) {
        console.log('get one')
        return await FlightsService.getOneById(id)
    }

    static async add({ from, to, airline }) {
        const flight = new Flight(from, to, airline)
        return await FlightsService.store(flight)
    }
}