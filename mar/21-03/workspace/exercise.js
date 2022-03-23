/**
  You manage an e-commerce and you just introduced a new discount system.

You now want to display a message that tells customers how much discount they used and how much do they still need to pay or 0 if the discount is bigger than the amount to pay.

For example:

With an amount to pay of 100€ and a discount of 30€, the output message would be:

With a discount of 30€ you have to pay 70€. 

---

With an amount to pay of 20€ and a discount of 30€, the output message would be:

With a discount of 30€ you have to pay 0€. 
Create 2 variables, discount and cartTotal, and assign 2 numerical values of your choice

Create another variable amountToPay.

this variable should be equal to 0 if discount is larger than cartTotal
otherwise it should be equal to the difference between cartTotal and discount
*/

let discount = 50;
let cartTotal = 70;

// 0, if discount > cartTotal
// cartTotal - discount, if cartTotal > discount

// let amountToPay = discount > cartTotal ? 0 : cartTotal - discount;

// console.log(amountToPay);
// console.log(`With a discount of ${discount}€, you have to pay ${amountToPay}€`);

console.log(`With a discount of ${discount}€, you have to pay ${discount > cartTotal ? 0 : cartTotal - discount}€`);
