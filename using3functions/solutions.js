//Use map()to double the values in an array
function double(array) {
  let newArray = array.map(array => array *= 2);
  return newArray;
}




// List Filtering
function filter_list(l) {
  let newl = l.filter( function(l){ return typeof l === "number"});
  return newl;
}




//Calculate average
function find_average(array) {
  const reducer = (accumulator, currentValue) => (accumulator + currentValue);
  let newArray = array.reduce(reducer);
  
    return (newArray/ array.length);
  
  }