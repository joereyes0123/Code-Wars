function isNice(arr){
  let count = 0;
    for(let i in arr){
     if(arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1 )){
      count++;
      console.log(i);
   }
   }
   
    if(count === arr.length && arr.length !== 0){
    return true
    }else{
     return false
     }
     }