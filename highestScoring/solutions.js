function high(x){
  let array = x.split(' ');
  let array1 = [];
  let index1 = 0;
  
    for(let i in array){
      let c = 0;
    for(let j in array[i]) c += array[i].charCodeAt(j) - 96;
      array1.push(c);
    }
  index1 = array1.indexOf(Math.max(...array1));
  return array[index1];
  }