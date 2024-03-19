import { isLowerCase } from './lowerCase';

describe('lowerCase.ts tests', () => {
    it('should return true for valid case and length', () => {
        const crackedCase = 'formatpricevarinterolig';
        const isCracked = isLowerCase(crackedCase);
        expect(isCracked).toBe(true);
    });
    it('Should return false for invalid case & valid length', () => {
        const unCrackedCase = 'artIcunO';
        const isCracked = isLowerCase(unCrackedCase);
        expect(isCracked).toBe(false);
    });
    it('Should return false for empty string', () => {
        const unCrackedCase = '';
        const isCracked = isLowerCase(unCrackedCase);
        expect(isCracked).toBe(false);
    });
});
