import { formatCurrency } from "../scripts/utils/formatCurrency.js";

console.log("Test suite: formatCurrency")

console.log("Convert cents to dollars")
if(formatCurrency(2095) === '20.95'){
    console.log("passed");
}else{
    console.log("failed");
}

console.log("Works with 0")
if(formatCurrency(0) === '0.00'){
    console.log("passed");
}else{
    console.log("failed");
}

console.log("Round upto the nearest cents")
if(formatCurrency(2000.5) === '20.01'){
    console.log("passed");
}else{
    console.log("failed");
}