import { isPrimeTime } from './primeTime';

describe('lowerCase.ts tests', () => {
    it('should return true for prime number', () => {
        const optimusPrime = 7;
        const isPrime = isPrimeTime(optimusPrime);
        expect(isPrime).toBe(true);
    });
    it('Should return false for non-prime numbers', () => {
        const nopetimusPrime = 8;
        const isPrime = isPrimeTime(nopetimusPrime);
        expect(isPrime).toBe(false);
    });
});
