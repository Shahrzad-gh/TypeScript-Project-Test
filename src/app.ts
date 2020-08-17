import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/Hasformatter.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement
const toform = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement;


const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(
            toform.value,
            details.value,
            amount.valueAsNumber
        )
    }else{
        doc = new Payment(            
            toform.value,
            details.value,
            amount.valueAsNumber

        )
    }

    list.render(doc, type.value, 'end')
});