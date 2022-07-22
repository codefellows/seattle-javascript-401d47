'use strict';

function zipLists (listOne, listTwo){
  // console.log(arguments);
  if(arguments.length !== 2){return 'Enter Two Lists as Args';}
  if(!listOne.head && !listTwo.head){return 'Both Lists are Empty';}
  // maybe this is better, or maybe the ternary on the bottom. Either way, if there is no head in either, while loop doesn't happen  
  // if(!listOne.head) {return listTwo;}
  // if(!listTwo.head) {return listOne;}

  let currentOne = listOne.head;
  let currentTwo = listTwo.head;

  while(currentOne && currentTwo){
    let nextOne = currentOne.next;
    let nextTwo = currentTwo.next;
    currentOne.next = currentTwo;
    if(nextOne){
      currentTwo.next = nextOne;
    }
    
    currentOne = nextOne;
    currentTwo = nextTwo;  
  }
  return listOne.head ? listOne : listTwo;
}

module.exports = zipLists;
