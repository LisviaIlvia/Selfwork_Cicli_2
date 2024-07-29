

let somma = 0;
let count = 0;

console.log('Numeri pari da 1 a 20:');
for (i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        console.log(i);
    } else {
        somma += i;
        count++
    }
}

let media = somma / count;
console.log(`La media dei numeri dispari è: ${media}`);






