// Logic Challenge - Check AB
function checkAB(num) {
    var arrA= []
    var arrB= []

    for (var i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            arrA.push(i)
        }else
        if (num[i] === 'b') {
            arrB.push(i)
        }
    } 
       //console.log (arrA)
       //console.log (arrB)


    for (var i = 0; i < arrA.length; i++) {

        for (var j = 0; j < arrB.length; j++) {

            var jarak= Math.abs(arrB[j]-arrA[i])

        }
        //console.log (jarak)
    }
    return (jarak===4)
  // you can only write your code here!
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false