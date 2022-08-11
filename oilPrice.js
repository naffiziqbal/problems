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
