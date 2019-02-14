// Logic Challenge - Tukar Besar Kecil

function tukarBesarKecil(kalimat) {
    var gantiKata = ""
    for(var i = 0; i < kalimat.length; i++){
        if(kalimat[i] === kalimat[i].toUpperCase()){
        gantiKata += kalimat[i].toLowerCase();
        } else {
        gantiKata += kalimat[i].toUpperCase()
        }
    }
return gantiKata
  // you can only write your code here!
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"