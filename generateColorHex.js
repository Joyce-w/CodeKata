/**Generate a valid randomly generated hexadecimal color string. Assume all of them always have 6 digits. */

var generateColor = function() {
  // show em the code!
  const digits = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

  let random = ['#'];
  //loop through 6 times
  for(let i = 0; i < 6; i++){  
    
  //randomly pick index
  let ranNum = Math.floor(Math.random() * digits.length);
    random.push(digits[ranNum])
  }
  //join array values
  return random.join('')
};
