import { Invoice } from "./models/Invoice.js";
import { ListTemplate } from "./models/ListTemplate.js";
import { Payment } from "./models/Payment.js";


const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const tofromlabel = document.querySelector("#tofromlabel") as HTMLLabelElement;
const buttons = document.querySelector('button') as HTMLButtonElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);



type.addEventListener('change', (e:Event) => {
    if (type.value === "payment") {
        tofromlabel.innerText = "From:";
        buttons.className = "paymentButton";       
    } else {
        tofromlabel.innerText = "To:";
        buttons.removeAttribute('class');     
    }
});

form.addEventListener('submit', (e: Event)=> {
    e.preventDefault();
    let values: [string, string, number] = [tofrom.value,details.value,amount.valueAsNumber]
    let doc: HasFormatter;
    if (type.value === "invoice") {       
        doc = new Invoice(...values);
    }
    else{
        doc = new Payment(...values);
    }
    
    list.render(doc,type.value,"end");
});

