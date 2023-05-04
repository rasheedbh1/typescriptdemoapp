export class Invoice implements HasFormatter{
	
    constructor(
    public client: string,
    private details:string,
    readonly amount:number) 
    {

	}
    format(): string {
        return `${this.client} owes us $${this.amount} for  
        ${this.details}`;
    }
}