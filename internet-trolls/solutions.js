function disemvowel(str) {
  let strArr = str.split('');
  let testArr = ['a','e','i','o','u','A','E','I','O','U'];
  let testResult;
  
   for(let i in str){
     for(let j in testArr){
       if(str[i] === testArr[j]){
        strArr.splice(i, 1, '');
       }
   }
   }
   testResult = strArr.join('');
   return testResult;
  }