

function calculateMoney(ticketSale){
    const ticketPrice = 120;
    const daroanPrice = 500;
    const stapPrice = 50 * 8;
    if(ticketSale < 0 || typeof ticketSale !== 'number'){
        return 'Invalid Number';
    }
    let ticketTotal = ticketPrice * ticketSale;
    ticketTotal = ticketTotal - daroanPrice - stapPrice;
    return ticketTotal;
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
console.log(calculateMoney('dfd'));