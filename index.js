// Code your solution in this file!
let scrubberHeadquarters = 42;
let blockFeet = 264; 
function distanceFromHqInBlocks(passengerLocation){
    if(passengerLocation < scrubberHeadquarters){
        return scrubberHeadquarters - passengerLocation
    }else {
        return passengerLocation - scrubberHeadquarters
    }
}

function distanceFromHqInFeet(passengerLocation){
    return distanceFromHqInBlocks(passengerLocation)*blockFeet
}

function distanceTravelledInFeet(start, destination){
    if(destination > start){
        return (destination - start)*blockFeet
    } else{
        return (start - destination)*blockFeet
    }
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400){
        return 0;
    } else if(distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    } else if(distance > 2000 && distance < 2500){
        return 25
    } else if(distance > 2500){
        return 'cannot travel that far'
    }
}
