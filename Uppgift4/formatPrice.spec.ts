import { roundPrice } from './formatPrice';

describe('roundPrice.ts tests', () => {
    it('rounds price up and appends SEK', () => {
        expect(roundPrice(232.10542)).toBe('232.11 SEK');
    });
    it('adds two decimals', () => {
        expect(roundPrice(14)).toBe('14.00 SEK');
    });
    it('rounds price down and appends SEK', () => {
        expect(roundPrice(1024.2048)).toBe('1024.20 SEK');
    });
});

describe('roundPrice.ts tests', () => {
    it('rounds price up and appends kr', () => {
        expect(roundPrice(232.10542, '%PRICE% kr')).toBe('232.11 kr');
    });
    it('adds two decimals and appends $', () => {
        expect(roundPrice(14, '$%PRICE%')).toBe('$14.00');
    });
    it('rounds price down and appends USD', () => {
        expect(roundPrice(1024.2048, 'USD %PRICE%')).toBe('USD 1024.20');
    });
});

