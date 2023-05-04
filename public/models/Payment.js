export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `We owe ${this.recipient} $${this.amount} for  
        ${this.details}`;
    }
}
