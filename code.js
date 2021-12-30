const getCurrentRate = async (from, to) => {
   // if (id === 0) {
   //    throw 'Invalid id';
   // }
   
   const response = await fetch(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}`);
   const data = await response.json();
   
   return data
   }
    

const fromRub = document.querySelector('.rub');
const fromUsd = document.querySelector('.usd');
const fromEur = document.querySelector('.eur');
const fromGbp = document.querySelector('.gbp');

const toRub = document.querySelector('.to-rub');
const toUsd = document.querySelector('.to-usd');
const toEur = document.querySelector('.to-eur');
const toGbp = document.querySelector('.to-gbp');

const unitCostFrom = document.querySelector('.unit-cost-from');
const unitCostTo = document.querySelector('.unit-cost-to');

const inputFrom = document.querySelector('.input-value-to-convert');
const inputTo = document.querySelector('.input-value-converted');

function validate(){
  inputFrom.value = inputFrom.value.replace(/,/g, ".");
  inputFrom.value = inputFrom.value.replace(/[^\.\d]/g, '');

  inputTo.value = inputTo.value.replace(/,/g, ".");
  inputTo.value = inputTo.value.replace(/[^\.\d]/g, '');
}


fromRub.addEventListener('click', () => {
   fromRub.classList.add('active-currency')
   fromEur.classList.remove('active-currency')
   fromGbp.classList.remove('active-currency')
   fromUsd.classList.remove('active-currency')

   if (toEur.classList[1] == 'active-currency') {
      getCurrentRate('RUB', 'EUR')
         .then(res => {
            unitCostFrom.innerHTML = `1 RUB = ${res.rates.EUR} EUR`;
            inputTo.value = inputFrom.value * res.rates.EUR;
         })
      getCurrentRate('EUR', 'RUB')
         .then(res => {
            unitCostTo.innerHTML = `1 EUR = ${res.rates.RUB} RUB`;
         })
   }
   else if (toUsd.classList[1] == 'active-currency') {
      getCurrentRate('RUB', 'USD')
         .then(res => {
            unitCostFrom.innerHTML = `1 RUB = ${res.rates.USD} USD`;
            inputTo.value = inputFrom.value * res.rates.USD;
         })
      getCurrentRate('USD', 'RUB')
         .then(res => {
            unitCostTo.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
         })
   }
   else if (toGbp.classList[1] == 'active-currency') {
      getCurrentRate('RUB', 'GBP')
         .then(res => {
            unitCostFrom.innerHTML = `1 RUB = ${res.rates.GBP} GBP`;
            inputTo.value = inputFrom.value * res.rates.GBP;
         })
      getCurrentRate('GBP', 'RUB')
         .then(res => {
            unitCostTo.innerHTML = `1 GBP = ${res.rates.RUB} RUB`;
         })
   }
})

fromUsd.addEventListener('click', () => {
   fromRub.classList.remove('active-currency')
   fromEur.classList.remove('active-currency')
   fromGbp.classList.remove('active-currency')
   fromUsd.classList.add('active-currency')

   if (toEur.classList[1] == 'active-currency') {
      getCurrentRate('USD', 'EUR')
         .then(res => {
            unitCostFrom.innerHTML = `1 USD = ${res.rates.EUR} EUR`;
            inputTo.value = inputFrom.value / res.rates.EUR;
         })
      getCurrentRate('EUR', 'USD')
         .then(res => {
            unitCostTo.innerHTML = `1 EUR = ${res.rates.USD} USD`;
         })
   }
   else if (toRub.classList[1] == 'active-currency') {
      getCurrentRate('USD', 'RUB')
         .then(res => {
            unitCostFrom.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
            inputTo.value = inputFrom.value * res.rates.RUB;
         })
      getCurrentRate('RUB', 'USD')
         .then(res => {
            unitCostTo.innerHTML = `1 RUB = ${res.rates.USD} USD`;
         })
   }
   else if (toGbp.classList[1] == 'active-currency') {
      getCurrentRate('USD', 'GBP')
         .then(res => {
            unitCostFrom.innerHTML = `1 USD = ${res.rates.GBP} GBP`;
            inputTo.value = inputFrom.value * res.rates.GBP;
         })
      getCurrentRate('GBP', 'USD')
         .then(res => {
            unitCostTo.innerHTML = `1 GBP = ${res.rates.USD} USD`;
         })
   }
})

fromEur.addEventListener('click', () => {
   fromRub.classList.remove('active-currency')
   fromEur.classList.add('active-currency')
   fromGbp.classList.remove('active-currency')
   fromUsd.classList.remove('active-currency')

   if (toRub.classList[1] == 'active-currency') {
      getCurrentRate('EUR', 'RUB')
         .then(res => {
            unitCostFrom.innerHTML = `1 EUR = ${res.rates.RUB} RUB`;
            inputTo.value = inputFrom.value * res.rates.RUB;
         })
      getCurrentRate('RUB', 'EUR')
         .then(res => {
            unitCostTo.innerHTML = `1 RUB = ${res.rates.EUR} EUR`;
         })
   }
   else if (toUsd.classList[1] == 'active-currency') {
      getCurrentRate('EUR', 'USD')
         .then(res => {
            unitCostFrom.innerHTML = `1 EUR = ${res.rates.USD} USD`;
            inputTo.value = inputFrom.value * res.rates.USD;
         })
      getCurrentRate('USD', 'EUR')
         .then(res => {
            unitCostTo.innerHTML = `1 USD = ${res.rates.EUR} EUR`;
         })
   }
   else if (toGbp.classList[1] == 'active-currency') {
      getCurrentRate('EUR', 'GBP')
         .then(res => {
            unitCostFrom.innerHTML = `1 EUR = ${res.rates.GBP} GBP`;
            inputTo.value = inputFrom.value * res.rates.GBP;
         })
      getCurrentRate('GBP', 'EUR')
         .then(res => {
            unitCostTo.innerHTML = `1 GBP = ${res.rates.EUR} EUR`;
         })
   }
})

fromGbp.addEventListener('click', () => {
   fromRub.classList.remove('active-currency')
   fromEur.classList.remove('active-currency')
   fromGbp.classList.add('active-currency')
   fromUsd.classList.remove('active-currency')

   if (toRub.classList[1] == 'active-currency') {
      getCurrentRate('GBP', 'RUB')
         .then(res => {
            unitCostFrom.innerHTML = `1 GBP = ${res.rates.RUB} RUB`;
            inputTo.value = inputFrom.value * res.rates.RUB;
         })
      getCurrentRate('RUB', 'GBP')
         .then(res => {
            unitCostTo.innerHTML = `1 RUB = ${res.rates.GBP} GBP`;
         })
   }
   else if (toUsd.classList[1] == 'active-currency') {
      getCurrentRate('GBP', 'USD')
         .then(res => {
            unitCostFrom.innerHTML = `1 GBP = ${res.rates.USD} USD`;
            inputTo.value = inputFrom.value * res.rates.USD;
         })
      getCurrentRate('USD', 'GBP')
         .then(res => {
            unitCostTo.innerHTML = `1 USD = ${res.rates.GBP} GBP`;
         })
   }
   else if (toGbp.classList[1] == 'active-currency') {
      getCurrentRate('GBP', 'EUR')
         .then(res => {
            unitCostFrom.innerHTML = `1 GBP = ${res.rates.EUR} EUR`;
            inputTo.value = inputFrom.value * res.rates.EUR;
         })
      getCurrentRate('EUR', 'GBP')
         .then(res => {
            unitCostTo.innerHTML = `1 EUR = ${res.rates.GBP} GBP`;
         })
   }
})

toRub.addEventListener('click', () => {
   toEur.classList.remove('active-currency')
   toGbp.classList.remove('active-currency')
   toUsd.classList.remove('active-currency')
   toRub.classList.add('active-currency')

   if (fromEur.classList[1] == 'active-currency') {
      getCurrentRate('RUB', 'EUR')
         .then(res => {
            unitCostFrom.innerHTML = `1 RUB = ${res.rates.EUR} EUR`;
            inputTo.value = inputFrom.value / res.rates.EUR;
         })
      getCurrentRate('EUR', 'RUB')
         .then(res => {
            unitCostTo.innerHTML = `1 EUR = ${res.rates.RUB} RUB`;
         })
   }
   else if (fromUsd.classList[1] == 'active-currency') {
      getCurrentRate('RUB', 'USD')
         .then(res => {
            unitCostFrom.innerHTML = `1 RUB = ${res.rates.USD} USD`;
            inputTo.value = inputFrom.value / res.rates.USD;
         })
      getCurrentRate('USD', 'RUB')
         .then(res => {
            unitCostTo.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
         })
   }
   else if (fromGbp.classList[1] == 'active-currency') {
      getCurrentRate('RUB', 'GBP')
         .then(res => {
            unitCostFrom.innerHTML = `1 RUB = ${res.rates.GBP} GBP`;
            inputTo.value = inputFrom.value / res.rates.GBP;
         })
      getCurrentRate('GBP', 'RUB')
         .then(res => {
            unitCostTo.innerHTML = `1 GBP = ${res.rates.RUB} RUB`;
         })
   }
})

toUsd.addEventListener('click', () => {
   toEur.classList.remove('active-currency')
   toGbp.classList.remove('active-currency')
   toUsd.classList.add('active-currency')
   toRub.classList.remove('active-currency')

   if (fromEur.classList[1] == 'active-currency') {
      getCurrentRate('EUR', 'USD')
         .then(res => {
            unitCostFrom.innerHTML = `1 EUR = ${res.rates.USD} USD`;
            inputTo.value = inputFrom.value * res.rates.USD;
         })
      getCurrentRate('USD', 'EUR')
         .then(res => {
            unitCostTo.innerHTML = `1 USD = ${res.rates.EUR} EUR`;
         })
   }
   else if (fromRub.classList[1] == 'active-currency') {
      getCurrentRate('RUB', 'USD')
         .then(res => {
            unitCostFrom.innerHTML = `1 RUB = ${res.rates.USD} USD`;
            inputTo.value = inputFrom.value * res.rates.USD;
         })
      getCurrentRate('USD', 'RUB')
         .then(res => {
            unitCostTo.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
         })
   }
   else if (fromGbp.classList[1] == 'active-currency') {
      getCurrentRate('GBP', 'USD')
         .then(res => {
            unitCostFrom.innerHTML = `1 GBP = ${res.rates.USD} USD`;
            inputTo.value = inputFrom.value * res.rates.USD;
         })
      getCurrentRate('USD', 'GBP')
         .then(res => {
            unitCostTo.innerHTML = `1 USD = ${res.rates.GBP} GBP`;
         })
   }
})

toEur.addEventListener('click', () => {
   toEur.classList.add('active-currency')
   toGbp.classList.remove('active-currency')
   toUsd.classList.remove('active-currency')
   toRub.classList.remove('active-currency')

   if (fromRub.classList[1] == 'active-currency') {
      getCurrentRate('RUB', 'EUR')
         .then(res => {
            unitCostFrom.innerHTML = `1 RUB = ${res.rates.EUR} EUR`;
            inputTo.value = inputFrom.value * res.rates.EUR;
         })
      getCurrentRate('EUR', 'RUB')
         .then(res => {
            unitCostTo.innerHTML = `1 EUR = ${res.rates.RUB} RUB`;
         })
   }
   else if (fromUsd.classList[1] == 'active-currency') {
      getCurrentRate('USD', 'EUR')
         .then(res => {
            unitCostFrom.innerHTML = `1 USD = ${res.rates.EUR} EUR`;
            inputTo.value = inputFrom.value / res.rates.EUR;
         })
      getCurrentRate('EUR', 'USD')
         .then(res => {
            unitCostTo.innerHTML = `1 EUR = ${res.rates.USD} USD`;
         })
   }
   else if (fromGbp.classList[1] == 'active-currency') {
      getCurrentRate('GBP', 'EUR')
         .then(res => {
            unitCostFrom.innerHTML = `1 GBP = ${res.rates.EUR} EUR`;
            inputTo.value = inputFrom.value * res.rates.EUR;
         })
      getCurrentRate('EUR', 'GBP')
         .then(res => {
            unitCostTo.innerHTML = `1 EUR = ${res.rates.GBP} GBP`;
         })
   }
})

toGbp.addEventListener('click', () => {
   toEur.classList.remove('active-currency')
   toGbp.classList.add('active-currency')
   toUsd.classList.remove('active-currency')
   toRub.classList.remove('active-currency')

   if (fromRub.classList[1] == 'active-currency') {
      getCurrentRate('RUB', 'GBP')
         .then(res => {
            unitCostFrom.innerHTML = `1 RUB = ${res.rates.GBP} GBP`;
            inputTo.value = inputFrom.value * res.rates.GBP;
         })
      getCurrentRate('GBP', 'RUB')
         .then(res => {
            unitCostTo.innerHTML = `1 GBP = ${res.rates.RUB} RUB`;
         })
   }
   else if (fromUsd.classList[1] == 'active-currency') {
      getCurrentRate('USD', 'GBP')
         .then(res => {
            unitCostFrom.innerHTML = `1 USD = ${res.rates.GBP} GBP`;
            inputTo.value = inputFrom.value * res.rates.GBP;
         })
      getCurrentRate('GBP', 'USD')
         .then(res => {
            unitCostTo.innerHTML = `1 GBP = ${res.rates.USD} USD`;
         })
   }
   else if (fromEur.classList[1] == 'active-currency') {
      getCurrentRate('EUR', 'GBP')
         .then(res => {
            unitCostFrom.innerHTML = `1 EUR = ${res.rates.GBP} GBP`;
            inputTo.value = inputFrom.value * res.rates.GBP;
         })
      getCurrentRate('GBP', 'EUR')
         .then(res => {
            unitCostTo.innerHTML = `1 GBP = ${res.rates.EUR} EUR`;
         })
   }
})

getCurrentRate('RUB', 'USD')
.then(res => {
   unitCostFrom.innerHTML = `1 RUB = ${res.rates.USD} USD`;
   inputTo.value = inputFrom.value * res.rates.USD;
})
getCurrentRate('USD', 'RUB')
.then(res => {
   unitCostTo.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
})

//ИЗМЕНЕНИЕ ПЕРВОГО ИНПУТА
inputFrom.addEventListener('keyup', (event) => {
   if (fromRub.classList[1] == 'active-currency' && toUsd.classList[1] == 'active-currency') {
      getCurrentRate('RUB', 'USD')
         .then(res => {
            unitCostFrom.innerHTML = `1 RUB = ${res.rates.USD} USD`;
            inputTo.value = inputFrom.value * res.rates.USD;
         })
      getCurrentRate('USD', 'RUB')
         .then(res => {
            unitCostTo.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
         })
   }
   else if (fromRub.classList[1] == 'active-currency' && toEur.classList[1] == 'active-currency') {
      getCurrentRate('RUB', 'EUR')
         .then(res => {
            unitCostFrom.innerHTML = `1 RUB = ${res.rates.EUR} EUR`;
            inputTo.value = inputFrom.value * res.rates.EUR;
         })
      getCurrentRate('EUR', 'RUB')
         .then(res => {
            unitCostTo.innerHTML = `1 EUR = ${res.rates.RUB} RUB`;
         })
   }
   else if (fromRub.classList[1] == 'active-currency' && toGbp.classList[1] == 'active-currency') {
      getCurrentRate('RUB', 'GBP')
         .then(res => {
            unitCostFrom.innerHTML = `1 RUB = ${res.rates.GBP} GBP`;
            inputTo.value = inputFrom.value * res.rates.GBP;
         })
      getCurrentRate('GBP', 'RUB')
         .then(res => {
            unitCostTo.innerHTML = `1 GBP = ${res.rates.RUB} RUB`;
         })
   }
   else if (fromUsd.classList[1] == 'active-currency' && toRub.classList[1] == 'active-currency') {
      getCurrentRate('USD', 'RUB')
         .then(res => {
            unitCostFrom.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
            inputTo.value = inputFrom.value * res.rates.RUB;
         })
      getCurrentRate('RUB', 'USD')
         .then(res => {
            unitCostTo.innerHTML = `1 RUB = ${res.rates.USD} USD`;
         })
   }
   else if (fromUsd.classList[1] == 'active-currency' && toEur.classList[1] == 'active-currency') {
      getCurrentRate('USD', 'EUR')
         .then(res => {
            unitCostFrom.innerHTML = `1 USD = ${res.rates.EUR} EUR`;
            inputTo.value = inputFrom.value * res.rates.EUR;
         })
      getCurrentRate('EUR', 'USD')
         .then(res => {
            unitCostTo.innerHTML = `1 EUR = ${res.rates.USD} USD`;
         })
   }
   else if (fromUsd.classList[1] == 'active-currency' && toGbp.classList[1] == 'active-currency') {
      getCurrentRate('USD', 'GBP')
         .then(res => {
            unitCostFrom.innerHTML = `1 USD = ${res.rates.GBP} GBP`;
            inputTo.value = inputFrom.value * res.rates.GBP;
         })
      getCurrentRate('GBP', 'USD')
         .then(res => {
            unitCostTo.innerHTML = `1 GBP = ${res.rates.USD} USD`;
         })
   }
   else if (fromEur.classList[1] == 'active-currency' && toRub.classList[1] == 'active-currency') {
      getCurrentRate('EUR', 'RUB')
         .then(res => {
            unitCostFrom.innerHTML = `1 EUR = ${res.rates.RUB} RUB`;
            inputTo.value = inputFrom.value * res.rates.RUB;
         })
      getCurrentRate('RUB', 'EUR')
         .then(res => {
            unitCostTo.innerHTML = `1 RUB = ${res.rates.EUR} EUR`;
         })
   }
   else if (fromEur.classList[1] == 'active-currency' && toUsd.classList[1] == 'active-currency') {
      getCurrentRate('EUR', 'USD')
         .then(res => {
            unitCostFrom.innerHTML = `1 EUR = ${res.rates.USD} USD`;
            inputTo.value = inputFrom.value * res.rates.USD;
         })
      getCurrentRate('USD', 'EUR')
         .then(res => {
            unitCostTo.innerHTML = `1 USD = ${res.rates.EUR} EUR`;
         })
   }
   else if (fromEur.classList[1] == 'active-currency' && toGbp.classList[1] == 'active-currency') {
      getCurrentRate('EUR', 'GBP')
         .then(res => {
            unitCostFrom.innerHTML = `1 EUR = ${res.rates.GBP} GBP`;
            inputTo.value = inputFrom.value * res.rates.GBP;
         })
      getCurrentRate('GBP', 'EUR')
         .then(res => {
            unitCostTo.innerHTML = `1 GBP = ${res.rates.EUR} EUR`;
         })
   }
   else if (fromGbp.classList[1] == 'active-currency' && toRub.classList[1] == 'active-currency') {
      getCurrentRate('GBP', 'RUB')
         .then(res => {
            unitCostFrom.innerHTML = `1 GBP = ${res.rates.RUB} RUB`;
            inputTo.value = inputFrom.value * res.rates.RUB;
         })
      getCurrentRate('RUB', 'GBP')
         .then(res => {
            unitCostTo.innerHTML = `1 RUB = ${res.rates.GBP} GBP`;
         })
   }
   else if (fromGbp.classList[1] == 'active-currency' && toUsd.classList[1] == 'active-currency') {
      getCurrentRate('GBP', 'USD')
         .then(res => {
            unitCostFrom.innerHTML = `1 GBP = ${res.rates.USD} USD`;
            inputTo.value = inputFrom.value * res.rates.USD;
         })
      getCurrentRate('USD', 'GBP')
         .then(res => {
            unitCostTo.innerHTML = `1 USD = ${res.rates.GBP} GBP`;
         })
   }
   else if (fromGbp.classList[1] == 'active-currency' && toEur.classList[1] == 'active-currency') {
      getCurrentRate('GBP', 'EUR')
         .then(res => {
            unitCostFrom.innerHTML = `1 GBP = ${res.rates.EUR} EUR`;
            inputTo.value = inputFrom.value * res.rates.EUR;
         })
      getCurrentRate('EUR', 'GBP')
         .then(res => {
            unitCostTo.innerHTML = `1 EUR = ${res.rates.GBP} GBP`;
         })
   }
})

//ИЗМЕНЕНИЕ ВТОРОГО ИНПУТА
inputTo.addEventListener('keyup', () => {
   if (fromRub.classList[1] == 'active-currency' && toUsd.classList[1] == 'active-currency') {
      getCurrentRate('RUB', 'USD')
         .then(res => {
            unitCostFrom.innerHTML = `1 RUB = ${res.rates.USD} USD`;
            inputFrom.value = inputTo.value / res.rates.USD;
         })
      getCurrentRate('USD', 'RUB')
         .then(res => {
            unitCostTo.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
         })
   }
   else if (fromRub.classList[1] == 'active-currency' && toEur.classList[1] == 'active-currency') {
      getCurrentRate('RUB', 'EUR')
         .then(res => {
            unitCostFrom.innerHTML = `1 RUB = ${res.rates.EUR} EUR`;
            inputFrom.value = inputTo.value / res.rates.EUR;
         })
      getCurrentRate('EUR', 'RUB')
         .then(res => {
            unitCostTo.innerHTML = `1 EUR = ${res.rates.RUB} RUB`;
         })
   }
   else if (fromRub.classList[1] == 'active-currency' && toGbp.classList[1] == 'active-currency') {
      getCurrentRate('RUB', 'GBP')
         .then(res => {
            unitCostFrom.innerHTML = `1 RUB = ${res.rates.GBP} GBP`;
            inputFrom.value = inputTo.value / res.rates.GBP;
         })
      getCurrentRate('GBP', 'RUB')
         .then(res => {
            unitCostTo.innerHTML = `1 GBP = ${res.rates.RUB} RUB`;
         })
   }
   else if (fromUsd.classList[1] == 'active-currency' && toRub.classList[1] == 'active-currency') {
      getCurrentRate('USD', 'RUB')
         .then(res => {
            unitCostFrom.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
            inputFrom.value = inputTo.value / res.rates.RUB;
         })
      getCurrentRate('RUB', 'USD')
         .then(res => {
            unitCostTo.innerHTML = `1 RUB = ${res.rates.USD} USD`;
         })
   }
   else if (fromUsd.classList[1] == 'active-currency' && toEur.classList[1] == 'active-currency') {
      getCurrentRate('USD', 'EUR')
         .then(res => {
            unitCostFrom.innerHTML = `1 USD = ${res.rates.EUR} EUR`;
            inputFrom.value = inputTo.value / res.rates.EUR;
         })
      getCurrentRate('EUR', 'USD')
         .then(res => {
            unitCostTo.innerHTML = `1 EUR = ${res.rates.USD} USD`;
         })
   }
   else if (fromUsd.classList[1] == 'active-currency' && toGbp.classList[1] == 'active-currency') {
      getCurrentRate('USD', 'GBP')
         .then(res => {
            unitCostFrom.innerHTML = `1 USD = ${res.rates.GBP} GBP`;
            inputFrom.value = inputTo.value / res.rates.GBP;
         })
      getCurrentRate('GBP', 'USD')
         .then(res => {
            unitCostTo.innerHTML = `1 GBP = ${res.rates.USD} USD`;
         })
   }
   else if (fromEur.classList[1] == 'active-currency' && toRub.classList[1] == 'active-currency') {
      getCurrentRate('EUR', 'RUB')
         .then(res => {
            unitCostFrom.innerHTML = `1 EUR = ${res.rates.RUB} RUB`;
            inputFrom.value = inputTo.value / res.rates.RUB;
         })
      getCurrentRate('RUB', 'EUR')
         .then(res => {
            unitCostTo.innerHTML = `1 RUB = ${res.rates.EUR} EUR`;
         })
   }
   else if (fromEur.classList[1] == 'active-currency' && toUsd.classList[1] == 'active-currency') {
      getCurrentRate('EUR', 'USD')
         .then(res => {
            unitCostFrom.innerHTML = `1 EUR = ${res.rates.USD} USD`;
            inputFrom.value = inputTo.value / res.rates.USD;
         })
      getCurrentRate('USD', 'EUR')
         .then(res => {
            unitCostTo.innerHTML = `1 USD = ${res.rates.EUR} EUR`;
         })
   }
   else if (fromEur.classList[1] == 'active-currency' && toGbp.classList[1] == 'active-currency') {
      getCurrentRate('EUR', 'GBP')
         .then(res => {
            unitCostFrom.innerHTML = `1 EUR = ${res.rates.GBP} GBP`;
            inputFrom.value = inputTo.value / res.rates.GBP;
         })
      getCurrentRate('GBP', 'EUR')
         .then(res => {
            unitCostTo.innerHTML = `1 GBP = ${res.rates.EUR} EUR`;
         })
   }
   else if (fromGbp.classList[1] == 'active-currency' && toRub.classList[1] == 'active-currency') {
      getCurrentRate('GBP', 'RUB')
         .then(res => {
            unitCostFrom.innerHTML = `1 GBP = ${res.rates.RUB} RUB`;
            inputFrom.value = inputTo.value / res.rates.RUB;
         })
      getCurrentRate('RUB', 'GBP')
         .then(res => {
            unitCostTo.innerHTML = `1 RUB = ${res.rates.GBP} GBP`;
         })
   }
   else if (fromGbp.classList[1] == 'active-currency' && toUsd.classList[1] == 'active-currency') {
      getCurrentRate('GBP', 'USD')
         .then(res => {
            unitCostFrom.innerHTML = `1 GBP = ${res.rates.USD} USD`;
            inputFrom.value = inputTo.value / res.rates.USD;
         })
      getCurrentRate('USD', 'GBP')
         .then(res => {
            unitCostTo.innerHTML = `1 USD = ${res.rates.GBP} GBP`;
         })
   }
   else if (fromGbp.classList[1] == 'active-currency' && toEur.classList[1] == 'active-currency') {
      getCurrentRate('GBP', 'EUR')
         .then(res => {
            unitCostFrom.innerHTML = `1 GBP = ${res.rates.EUR} EUR`;
            inputFrom.value = inputTo.value / res.rates.EUR;
         })
      getCurrentRate('EUR', 'GBP')
         .then(res => {
            unitCostTo.innerHTML = `1 EUR = ${res.rates.GBP} GBP`;
         })
   }
})