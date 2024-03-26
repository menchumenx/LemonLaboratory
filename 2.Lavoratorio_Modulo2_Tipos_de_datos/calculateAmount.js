
// devolviendo un number
function calTotalPerPerson(ticketAmount, n_friends, drinksAmount) {
    return (ticketAmount - drinksAmount) / n_friends;
}
// devolviendo un string
function calTotalPerPersonStr(ticketAmount, n_friends, drinksAmount) {
    let total = (ticketAmount - drinksAmount) / n_friends;
    return "Cada comensal tendra que pagar un total de ".concat(total, "\u20AC");
}

// ejemplo de uso
let ticket = 120;
let riends = 6;
let drinks = 18;

console.log(calTotalPerPerson(ticket, riends, drinks));
console.log(calTotalPerPersonStr(ticket, riends, drinks));
