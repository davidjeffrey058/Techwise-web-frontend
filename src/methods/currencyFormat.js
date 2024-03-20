
function CurrencyFormat(value) {
    const formattedValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value);

    return formattedValue;
}

export default CurrencyFormat;
