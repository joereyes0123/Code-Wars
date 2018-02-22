if(Array.isArray(words)){
  let test1 = words.filter(word => word.length > 0);
  let test2 = test1;
  let string = '';
  
    for(let i in test1){
      if( i < test1.length - 2) test2[i] = test1[i] +  ', ' ;
      else if(i == test1.length - 1 && test1.length > 1) test2[i] = ' and ' + test1[i];
      else test2[i] = test1[i]; 
    }
    console.log(test2.join(''));
    return(test2.join(''));
    }else{
     return '';
     }
    }