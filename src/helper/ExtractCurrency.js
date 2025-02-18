const extractCurrency = (value) => {
    const numberPattern = /[\d,\.]+/;
    const amount = value.match(numberPattern) ? value.match(numberPattern)[0] : '';
    const symbol = value.includes('$') ? '$' : value.includes('£') ? '£' : '$';
   return `${symbol} ${amount}`
};
export default extractCurrency;
export const extractCurrencyPrefill= (value) => {
    const numberPattern = /[\d,\.]+/;
    const amount = value.match(numberPattern) ? value.match(numberPattern)[0] : '';
    const symbol = value.includes('$') ? '$' : value.includes('£') ? '£' : '$';
   return `${symbol}${amount}`
};
