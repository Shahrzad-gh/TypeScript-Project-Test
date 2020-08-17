import { HasFormatter } from "../interfaces/Hasformatter.js"

export class Payment implements HasFormatter{
    constructor(
        readonly recepient: string,
         private details: string,
          public amount: number
    ){}

    format(){
        return `${this.recepient} is owes $${this.amount} for ${this.details}`
    }
}