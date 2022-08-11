function radianToDegree (radian) {    
    let pi = Math.PI;
    let degree = radian * (180/pi);
    let result = degree.toFixed(2);
    
    if(typeof radian !== 'number'){
        return 'please enter a number';
    }         
    return result;
}
//end

// 2. problem

function isJavaScriptFile (file) {    
    if(typeof file !== 'string') {
        return 'please enter a file name';
    }  

    if(file.endsWith('.js')){
        return true;
    }else{
        return false;
    }  
 }
//...end

//3.problem

function oilPrice (diselQuantity,petrolQuantity,octaneQuantity){ 
    let diselPrice = 114;
    let petrolPrice = 130;
    let octanePrice = 135;

    let totalDiselPrice = diselPrice * diselQuantity;
    let totalPetrolPrice = petrolPrice * petrolQuantity;
    let totalOctanePrice = octanePrice * octaneQuantity;

    let totalOilPrice = totalDiselPrice + totalPetrolPrice + totalOctanePrice;  

    if(typeof diselQuantity !== 'number' && petrolQuantity !== 'number' && octaneQuantity !== 'number' ){
        return 'please enter a number';     
     }

    return totalOilPrice;
}

//..end 

//4 problem

function publicBusFare (totalPassenger) {
    if(typeof totalPassenger !== 'number'){
        return 'please enter a number';
    }
    let reserveBus = 50;
    let microBus = 11;
    let publicBusTicket = 250;

    let busRemaing = totalPassenger % reserveBus;
    let microRemaing = busRemaing % microBus;
    let publicBus = microRemaing * publicBusTicket;

    return publicBus;
}

//...end


// 5. problem

function isBestFriend (f1,f2){

 if(f1.name.toLowerCase() === f2.friend.toLowerCase() && f2.name.toLowerCase() === f1.friend.toLowerCase()){
    return true;
 }else{
    return false;
 }

}
let tom = {name:'tom',friend:'jaCk'};
let jack = {name:'Jack',friend:'Tom'};


//...end
