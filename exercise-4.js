// Logic Challenge - Mencari Modus

function cariModus(arr) {
    var modus = -1;
    var counterMax = 1;
    for (var i=0; i<arr.length; i++) {
        var count = 1;
        // console.log(modus);
        // console.log("i ="+i);
        // console.log("j ="+j);
        for(var j= i+1 ; j<arr.length; j++) {
            if(arr[i] === arr[j] ) {
                count = count+1;
            }
        }
        if (count > counterMax) {
            counterMax = count;
            modus = arr[i];
            // console.log(modus);
            // console.log("i ="+i);
            // console.log("j ="+j);
        }
    
    }
if (counterMax === arr.length) {
    modus=-1;
    // console.log(modus);
    // console.log("i ="+i);
    // console.log("j ="+j);
}    
return modus;
  // you can only write your code here!
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
