import { Service } from "../../core/services/service";

export class FlightsService extends Service {

    static async getAllDB() {
        return await getQuery('SELECT * FROM flights')
    }

}