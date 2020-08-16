import { Invoice } from './classes/Invoice.js'

const invOne = new Invoice('mari', 'working on site', 250)
const invTwo = new Invoice('lina', 'working on site', 290)

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})


const form = document.querySelector('.new-item-form') as HTMLFieldSetElement;

const type = document.querySelector('#type') as HTMLSelectElement
const toform = document.querySelector('#toform') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toform.value,
        details.value,
        amount.value
    )
})