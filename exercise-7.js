// Logic Challenge - Mengurutkan Abjad

function urutkanAbjad(str) {
    var arrayTampung = [];
    for (let i = 0; i < str.length; i++) {
        arrayTampung.push(str[i]);
    }

    for (let i = 0; i < arrayTampung.length; i++) {
        for (let j = 0; j < arrayTampung.length; j++) {
        if (arrayTampung[j] > arrayTampung[j + 1]) {
            var kc = arrayTampung[j];
            arrayTampung[j] = arrayTampung[j + 1];
            arrayTampung[j + 1] = kc;
        }
        }
    }

return arrayTampung.join('');
  // you can only write your code here!
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'