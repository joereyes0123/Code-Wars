function validateUsr(username) {
  let res =  /^[a-z\d\_]{4,16}$/.test(username) 
  return res;
}