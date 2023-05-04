import { Invoice } from "./models/Invoice.js";
import { ListTemplate } from "./models/ListTemplate.js";
import { Payment } from "./models/Payment.js";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const tofromlabel = document.querySelector("#tofromlabel");
const buttons = document.querySelector('button');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
type.addEventListener('change', (e) => {
    if (type.value === "payment") {
        tofromlabel.innerText = "From:";
        buttons.className = "paymentButton";
    }
    else {
        tofromlabel.innerText = "To:";
        buttons.removeAttribute('class');
    }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
