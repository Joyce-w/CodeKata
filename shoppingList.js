/**
 * ate the cost of a shopping list by writing a function. The function takes an argument which is an array consisting of sub-arrays. For example:

shoppingListCost([["Orange Juice", 2],["Chocolate", 4],["Pears", 8]]) 
The input array includes sub arrays containing the name and quantity of each item being purchased. Already existing in the global scope is an object which gives some information regarding the shopping items:

var groceries = {
  "Orange Juice": {
      "price" : 1.5,
      "discount": 10, 
      "bogof": false
  },
    
  "Chocolate": {
      "price" : 2,
      "discount" : 0,
      "bogof": true
  },
  
  // more items...
}
  
This object contains the price of the item, the discount currently being offered on that item, and whether the item is currently "buy one get one free" (meaning for every item purchased, one of the same item is free).

Return the cost of the shopping list. If the input array contains no items, return zero. Round the answer to 2 decimal places.

All input arrays will be valid and contain items included in the global groceries object. Each item will only appear once in any input array.

Examples

shoppingListCost([["Orange Juice", 2],["Chocolate", 4]]) 
returns 6.7

shoppingListCost([["Chocolate", 5],["Orange Juice", 15]])
returns 26.25
 */

function shoppingListCost(arr) {
  
  //loop thru array
  let items = arr.map((el, idx)=> {
    
  //save item, quality    
    let item = el[0];
    let qty = el[1];

    let itemObj = groceries[item]
    //check for bogof and make adjustment
    if(itemObj['bogof']){
       qty = Math.ceil(qty/2)
    }
    return(qty * itemObj['price']) * `${1-(itemObj['discount']/100)}`;
  })

    //Sum the item total
    let total = items.reduce((acc,next) => {
      return acc + next;
    },0)
    
    //return total as a number with 2 decimal places
    return Number(total.toFixed(2))
  
}