export class Sale {
    constructor(id, packageId, userId, passengers, price, date, paymentMethod) {
        this.id = id
        this.packageId = packageId
        this.userId = userId
        this.passengers = passengers
        this.price = price
        this.date = date
        this.paymentMethod = paymentMethod
    }
}