// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
/**
 * 
 * @param {*} array array contente lunghezze 
 * @returns peso totale dell'array
 */
function calcolaPeso(array) {
    let pesoTot = 0; //init variabile peso complessivo
    for (let index = 0; index < array.length; index++) {
        pesoTot += array[index]['peso']; //incrementa peso 
    }
    return  pesoTot; //treurn peso totale
}
/**
 * 
 * @param {*} array array contenente lunghezze
 * @returns stampa nel div.container i nostri dati
 */
function separate_less_more_15cm (array) {
    const arrayZucchine_less15 = [];
    const arrayZucchine_more15 = [];
    //devo aggiungere in base alla lunghezza
    for (let index = 0; index < array.length; index++) {
        const zucchina = array[index];
        if(zucchina.lunghezza < 15) {
            arrayZucchine_less15.push(zucchina);
        } else if (zucchina.lunghezza > 15) {
            arrayZucchine_more15.push(zucchina);
        }
    }
    return [arrayZucchine_less15,arrayZucchine_more15];
}
function printData (array) {
    const container = document.querySelector('.container');
    //stampa a video peso complessivo
    container.innerHTML = `Peso complessivo delle zucchine con lunghezza inferiore a 15cm: 
    ${calcolaPeso(separate_less_more_15cm(array)[0])} cm`;
    container.innerHTML += `<br>Peso complessivo delle zucchine con lunghezza superiore a 15cm: ${calcolaPeso(separate_less_more_15cm(array)[1])} cm`;
}
//mio array contenente le zucchine
/**
 * contiente oggetti con peso,lunghezza
 */
const arrayZucchine = [
    {
        lunghezza: 10,
        peso: 10
    },
    {
        lunghezza: 20,
        peso: 20
    },
    {
        lunghezza: 20,
        peso: 20
    },
    {
        lunghezza: 20,
        peso: 20
    },
    {
        lunghezza: 20,
        peso: 20
    },
    {
        lunghezza: 20,
        peso: 20
    },
    {
        lunghezza: 20,
        peso: 20
    },
    {
        lunghezza: 10,
        peso: 10
    },
    {
        lunghezza: 10,
        peso: 10
    },
    {
        lunghezza: 10,
        peso: 10
    },
];
//stampa le dimensioni totali dei due array
printData(arrayZucchine);