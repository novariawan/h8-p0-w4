// Logic Challenge - Digit Perkalian Minimum
function digitPerkalianMinimum(angka) {
    var arrFactor = [];
    for (i=1; i<=angka; i++) {
        if (angka % i === 0) {
            var str = '' + i +''+(angka/i)+'';
            arrFactor.push(str);
        }
    }
    var min = arrFactor[0].length;    
    for (j=0; j<arrFactor.length; j++) {
        if ((arrFactor[j].length)<min) {
            min = arrFactor[j].length
        }
    }
return min;
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2