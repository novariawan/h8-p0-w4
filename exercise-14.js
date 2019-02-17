// Logic Challenge - Naik Angkot

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var result = [];
    for(var i = 0; i < arrPenumpang.length;i++){
    var objTampung = {};
      for(var j = 0; j < rute.length;j++){
        if(arrPenumpang[i][1] === rute[j]){
          var indexNaik = j;
        } else if(arrPenumpang[i][2] === rute[j]){
          var indexTurun = j;
        }
      }
        objTampung.penumpang = arrPenumpang[i][0];
        objTampung.naikDari = arrPenumpang[i][1];
        objTampung.tujuan = arrPenumpang[i][2];
        objTampung.bayar = Math.abs(indexTurun - indexNaik) * 2000;
        result.push(objTampung);
    }
return result;
    //your code here
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]