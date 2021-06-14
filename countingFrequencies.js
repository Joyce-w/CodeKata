/**
 * Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
 */


function highestRank(arr){
  let counter = {}
  //loop thru array and count
  for(let num of arr){
    //if there is a number in counter add to count, if not init count
    counter[num] ? counter[num]++ : counter[num] =1;
  }
  console.log(counter);
  
  //loop through counter and look for the highest value
  let highestVal = 0;
  let highestKey = 0;
  
  for(const [key, value] of Object.entries(counter)){
    console.log(value, highestVal)
    if(value > highestVal){
      highestKey = key;
      highestVal = value;
    }
    else if(value === highestVal){
      if(highestKey < key){
        highestKey = key
        highestVal = value;        
      }
    }
}
  
  return parseInt(highestKey);
  
}