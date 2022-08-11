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

console.log(publicBusFare(10))
