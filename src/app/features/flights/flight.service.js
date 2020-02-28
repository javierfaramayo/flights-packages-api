import { Service } from "../../core/services/service";

export class FlightsService extends Service {

    static getAllDB() {
        return [
            {
                _id: 1,
                desde: 'China',
                hasta: 'Japón',
                aerolinea: {
                    nombre: 'Wuhan Airlines',
                    razon_social: 'QDS21'
                }
            },
            {
                _id: 2,
                desde: 'Japón',
                hasta: 'China',
                aerolinea: {
                    nombre: 'Murciélago Airlines',
                    razon_social: 'DFG43'
                }
            }
        ]
    }

}