export class Payment implements HasFormatter{
	constructor(
    public recipient: string,
    private details:string,
    readonly amount:number) 
    {

	}
    format(): string {
        return `We owe ${this.recipient} $${this.amount} for  
        ${this.details}`;
    }
}