// Code your solution in this file!
function distanceFromHqInBlocks(pickUpBlock){
    return Math.abs(42 - pickUpBlock);
}

function distanceFromHqInFeet(pickUpBlock){
  let blocksHq =  distanceFromHqInBlocks(pickUpBlock);
  return (blocksHq * 264);
}

function distanceTravelledInFeet(pickUpBlock, dropOffBlock){
    return Math.abs(pickUpBlock - dropOffBlock) * 264;
}

function calculatesFarePrice(pickUpBlock, dropOffBlock){
    let feetTravelled = distanceTravelledInFeet(pickUpBlock, dropOffBlock);

    if(feetTravelled <= 400){
        return 0;
    } else if(feetTravelled > 400 && feetTravelled <= 2000){
        return (feetTravelled - 400)*0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500){
        return 25;
    } else if(feetTravelled > 2500){
        return 'cannot travel that far';
    }
}