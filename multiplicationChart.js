/**
 * Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:
 */

function multiTable(number) {
  let multiplication = [];

  console.log(multiplication)
  //loop through multiplication and add in table
  let chart = [1,2,3,4,5,6,7,8,9,10].map((el, idx) => {
    return `${idx+1} * ${number} = ${(idx+1)*number}`
  })

  return chart.join('\n')
  
  
}
