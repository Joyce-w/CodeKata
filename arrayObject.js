

function blackAndWhite(arr){
  //coding here...
  if(!Array.isArray(arr)){
    return "It's a fake array"
  }
  else if(arr.includes(5) && arr.includes(13)){
    return "It's a black array"
  }
 else {
    return "It's a white array"   
 }

  
}

blackAndWhite(5,13)//  "It's a fake array"
blackAndWhite([5,13]) // "It's a black array"
blackAndWhite([5,12]) //"It's a white array"