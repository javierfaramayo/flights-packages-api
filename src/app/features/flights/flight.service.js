import { Service } from "../../core/services/service";

export class FlightsService {

    static async getAllDB() {
        return await Service.getQuery('SELECT * FROM flight')
    }

    static async getOneById(id) {
        return await Service.getQuery('SELECT * FROM flight WHERE id = ?', [id])
    }

    static async store(flight) {
        return await Service.setQuery('INSERT INTO flight VALUES (null, ?, ?, ?)', [
            flight.from,
            flight.to,
            flight.airline
        ])
    }

}