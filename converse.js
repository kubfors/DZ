function convertCurrency(amount, fromCurrency, toCurrency) {
    const rubToUsd = 0.011;
    const rubToEur = 0.010;
    const usdToRub = 90.91;
    const eurToRub = 100.00;

    
    if (fromCurrency === toCurrency) {
        return amount;
    }
    
    switch(fromCurrency + "-" + toCurrency) {
        case "rub-usd": return amount * rubToUsd;
        case "rub-eur": return amount * rubToEur;
        case "usd-rub": return amount * usdToRub;
        case "eur-rub": return amount * eurToRub;
         default: return null;
    }
}


