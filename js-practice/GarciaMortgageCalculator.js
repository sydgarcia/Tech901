// Formula for calculating the monthly mortgage payments.

// L[c(1+c)^n]/[(1+c)^n-1]
// From website


let L = Number(prompt("Price of the House?"));
let D = Number(prompt("Whats your downpayment?"))
let C = Number(prompt("What is your interest rate? in decimal form please"));
let N = Number(prompt("Years of financing?"));


function calculateMortgage() {
    let n= N*(12);
    let c = C/100/(12);
    let l = L-D;
    let P= l*(c*(Math.pow((1+c),n))/((Math.pow((1+c),n))-1));
    alert(`Your monthly payment will be ${P}`);
}

calculateMortgage();

// ======================================================================