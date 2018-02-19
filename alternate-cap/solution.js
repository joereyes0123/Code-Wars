function capitalize(s){
  let stringArr = s.toUpperCase().split('');
  let stringArr1 = s.split('');
  let stringArr2 = s.split('');
  let thirdArray = [];
  let word1;
  let word2;
  function capital(){
   for(let i = 0; i < stringArr.length; i += 2){
        stringArr1.splice(i, 1, stringArr[i]);
    }
    word1 = stringArr1.join('');
    thirdArray.push(word1);
  for(let i = 1; i < stringArr.length; i += 2){
        stringArr2.splice(i, 1, stringArr[i]);
    }
    word2 = stringArr2.join('');
    thirdArray.push(word2);
  }
  capital();
  return thirdArray;
  };