// Logic Challenge - Change Me!

function changeMe(arr) {
    if(arr.length === 0){
        console.log('""')
      }
    
      var nowDate = new Date().getFullYear();
      var num = 1;
      var changeObject = {}
      for(var i = 0; i < arr.length; i++){
        changeObject.firstName = arr[i][0]
        changeObject.lastName = arr[i][1]
        changeObject.gender = arr[i][2]
    
        if(arr[i][3] > nowDate || !arr[i][3]){
          changeObject.age = 'Invalid Birth Year'
        } else {
          changeObject.age = nowDate-arr[i][3]
        }
        console.log(num + '. ' + changeObject.firstName + ' ' + changeObject.lastName)
        num++
        console.log(changeObject)
      }
    // you can only write your code here!
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""