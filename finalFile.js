// Problem One 

function radianToDegree(radian){

    let degree = radian * 57.296;
    degree = degree.toFixed(2);
    degree = parseFloat(degree)
    if(typeof radian !== "number"){
        return `Not A Number`
    }
    return degree

}
//  End  Of Problem One ----
//-----------------------------//
//   Problem 2 

function isJavaScriptFile(files){
    let file = files;
    file = file.endsWith("js");
    if(file === true){
        return true
    }else{
        return false
    }
}

//  End  Of Problem Two ----
//-----------------------------//
//  Problem 3  


function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){
    const dieselPricePerltr = 114;
    const petrolPricePerltr = 130;
    const octanePricePerltr = 135;

    const totalDieselPrice = dieselPricePerltr * dieselQuantity;
    const totalPetrolPrice = petrolPricePerltr * petrolQuantity;
    const totalOctanePrice = octanePricePerltr * octaneQuantity;

    const totalOilPrice = totalDieselPrice + totalOctanePrice + totalPetrolPrice;
    
 if( typeof dieselQuantity  !== 'number' && typeof  petrolQuantity  !== 'number' && typeof octaneQuantity  !== 'number'){
        return `Not  A Number`
    } 
    return totalOilPrice;
}
//  End  Of Problem 3 ----
//-----------------------------//
//  Problem 4


function publicBusFare(people) {
    if(typeof people !== 'number'){
        return `Please Enter a Number`
    }

    const reservedBus = 50;
    const microBus = 11;
    const publicBusCost = 250;

    let busRemaining = people % reservedBus;
    let microBusRemaining = busRemaining % microBus;
    let publicBus = publicBusCost * microBusRemaining
    return publicBus;

}
//  End  Of Problem 4 ----
//-----------------------------//
//  Problem 5


let abul = { name: "abul",friend : "Babul"};
abul = abul.name.toLowerCase();

let babul = {name : "Babul",friend: "abul"};
babul = babul.name.toLowerCase();


function isBestFriend( para1, para2){
    if(para1.name === para2.friend && para2.name === para1.friend){
        return true;
    }
    return false
}
 /* Happy Journey OF Milestone 4 */ 
