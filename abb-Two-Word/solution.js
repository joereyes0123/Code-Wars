function abbrevName(name){
  var initial = [];
  var newName = name.split(" ");
  console.log(newName);
  for(var i = 0; i < newName.length; i++){
     initial.push(newName[i].charAt(0).toUpperCase());
   }return initial.join(".");
  }