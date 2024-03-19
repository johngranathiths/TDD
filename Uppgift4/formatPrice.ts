export const roundPrice = (price: number, pattern: string = '%PRICE% SEK'): string => {
    const formattedPrice = price.toFixed(2);
    return pattern.replace('%PRICE%', formattedPrice);
};
