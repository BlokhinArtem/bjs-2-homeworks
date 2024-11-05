"use strict"
function solveEquation(a, b, c) {
  let d = b*b-4*a*c;
  let arr = []
  if (d === 0) {
   arr = [(-b / (2 * a))];
  } 
  else if (d > 0) {
   arr = [
     (-b + Math.sqrt(d)) / (2 * a),
     (-b - Math.sqrt(d)) / (2 * a)
   ];
  }
 return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount - contribution;
  let P = percent / 100 / 12;
  let monthlyPayment = S * (P + P / ((1 + P) ** countMonths - 1));
  let totalPay = +(monthlyPayment * countMonths).toFixed(2);
  return totalPay;
}