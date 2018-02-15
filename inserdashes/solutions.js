function insertDash(num) {
  num = num.toString().split('').map(returnInt);
  let num1 = [];
  function returnInt(num) {
  return parseInt(num, 10);
}for(let i = 0; i < num.length; i++){
 if(num[i] === 0){
 num1.push(num[i]);
  }else if(num[i] % 2 === 1 && num[i + 1] % 2 === 1){
  num1.push(num[i] + '-');
  }else{
    num1.push(num[i]);
  }
}return num1.join('');
}
