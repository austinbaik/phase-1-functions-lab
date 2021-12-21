// Code your solution in this file!


function distanceFromHqInBlocks(someValue) { 
    return Math.abs(someValue - 42);
    //distance from 42nd street by arithmetic and absolute value
}


function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }


function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    
    distanceTravelledInFeet(start, destination)
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) -400) * .02;
    }
    // charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!):
    else if (distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    }
    else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far';
    }
  }
