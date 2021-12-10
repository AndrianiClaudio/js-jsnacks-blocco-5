// Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].
function arrayUnion(array1,array2) {
    if (array1.length == array2.length) { // gli array devono avere la stessa length
        const length = array1.length;
        // devo fondere i due array e crearne uno nuovo con i loro elementi
        const arrayPlus = [];
        for (let index = 0; index < length; index++) {
            arrayPlus.push(array1[index],array2[index]);
        }
        return arrayPlus;
    } else { //ERROR!Lunghezze array diverse
        return 'Hai bisogno di due array di uguali dimensioni!.';
    }
}
// // ho bisogno di due array
// const my_array1 = ['a','b','c'];
// const my_array2 = [1,2,3];
const array_unito = arrayUnion(['a', 'b', 'c'], [1, 2, 3]);

console.log(array_unito);