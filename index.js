
const headQ = 42;

function distanceFromHqInBlocks(farNess){
  if (farNess >= headQ){
    return farNess - headQ;
  }else {
    return headQ - farNess;
  }
  
}

distanceFromHqInBlocks(43);

const HQ = 42;
function distanceFromHqInFeet(pickUpLocation){
  if (pickUpLocation >= HQ){
    return (pickUpLocation - HQ) * 264;
  }else {
    return (HQ - pickUpLocation)*264;
  }
  
}

distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, end){
  if (end >= start){
    return (end - start)*264;
  }else {
    return (start - end)*264;
  }
}


function calculatesFarePrice(start, end){
  let destance = distanceTravelledInFeet(start, end);
  if (destance < 400){
    return 0;
  }else if (distance > 400 && distance < 2000){
    return (distance-400) * 0.02;
  }else if (distance >= 2000 && distance < 2500){
    return 25
  }else if (distance > 2500){
    return 'cannot travel that far'
  }

};