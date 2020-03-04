export class Flight {
    constructor(from, to, airline, id = null) {
        this.id = id
        this.from = from
        this.to = to
        this.airline = airline
    }
}