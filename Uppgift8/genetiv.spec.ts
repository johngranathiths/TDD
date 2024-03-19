import { isPossessive } from './genetiv';

describe('genetiv.ts tests', () => {
    it('should return name1 in its possessive form', () => {
        expect(isPossessive('Jonatan')).toBe('Jonatans');
    });
    it('should return name2 in its possessive form', () => {
        expect(isPossessive('Anna')).toBe('Annas');
    });
    it('should return name3 in its possessive form', () => {
        expect(isPossessive('Claes')).toBe('Claes');
    });
    it('should return name4 in its possessive form', () => {
        expect(isPossessive('Johanna')).toBe('Johannas');
    });
});
