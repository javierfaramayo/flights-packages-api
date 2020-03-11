import config from "../../../config";
import Sequelize from 'sequelize'

const dbQueryString = `mysql://${config.DDBB.USER}:${config.DDBB.PASS}@${config.DDBB.HOST}:${config.DDBB.PORT}/${config.DDBB.NAME}`
const sequelize = new Sequelize(dbQueryString)
export class Service {

    async getQuery(queryString, params) {
        console.log(queryString)
        try {
            return await sequelize.query(queryString, { type: sequelize.QueryTypes.SELECT })
        } catch (error) {
            return error
        }
    }
}