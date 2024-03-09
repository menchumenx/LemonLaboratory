
// devolviendo un number
function calTotalPerPersonTS(ticketAmount: number, n_friends: number, drinksAmount: number): number {
    return (ticketAmount - drinksAmount) / n_friends
}

// devolviendo un string
function calTotalPerPersonString(ticketAmount: number, n_friends: number, drinksAmount: number): string {
    let total: number = (ticketAmount - drinksAmount) / n_friends
    return `Cada comensal tendra que pagar un total de ${total}€`
}

// ejemplo de uso
let ticket: number = 120;
let riends: number = 6;
let drinks: number = 18;

console.log(calTotalPerPersonTS(ticket, riends, drinks));
console.log(calTotalPerPersonString(ticket, riends, drinks));