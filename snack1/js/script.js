// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
const arrayZucchine = [
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
    {
        lunghezza: 10,
        peso: 10
    },
];
function calcolaPeso(array) {
    let pesoTot = 0; //init variabile peso complessivo
    for (let index = 0; index < array.length; index++) {
        pesoTot += array[index]['peso']; //incrementa peso 
    }
    return  pesoTot; //treurn peso totale
}
const container = document.querySelector('.container');
//stampa a video peso complessivo
container.innerHTML = `Peso complessivo delle zucchine:${calcolaPeso(arrayZucchine)}`;