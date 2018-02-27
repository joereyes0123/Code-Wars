function cubeOdd(arr) {
  let open1 = [];
    if(arr.length !== 0){
    for(let i in arr) if(typeof arr[i] !== 'number' || arr.length === 0) return undefined;
    else if(arr[i] % 2 !== 0) open1.push(arr[i])
    return open1.map(x => x = x*x*x).reduce((acc, curr) => acc + curr);
  
  }
  }