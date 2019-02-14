// Logic Challenge - Angka Prima

function angkaPrima(num) {
    var prime = true;
    prime = num != 1;
    for(var i=2; i<num; i++) {
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false