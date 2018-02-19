function validatePIN (pin) {
  let pin1 = pin.split('');
  let re = /^[0-9]+$/;
  console.log(pin1);
   if (pin1.length === 4 || pin1.length === 6){
     if (re.test(pin)){
     console.log(pin);
     return true;
   }else{
     return false;
   }
 }return false;
 }