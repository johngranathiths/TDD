import { isZipValid } from './isZipValid';

describe('isZipValid.ts tests', () => {
    it('should return true for valid zip code and length', () => {
        const validZip = '12345';
        const isValid = isZipValid(validZip);
        expect(isValid).toBe(true);
    });

    it('Should return false for invalid zip code length - fewer', () => {
        const invalidZip = '1234';
        const isValid = isZipValid(invalidZip);
        expect(isValid).toBe(false);
    });

    it('Should return false for invalid zip code length - more', () => {
        const invalidZip = '123456';
        const isValid = isZipValid(invalidZip);
        expect(isValid).toBe(false);
    });

    it('Should return false for invalid zip code - not using numbers', () => {
        const invalidZip = 'abcde';
        const isValid = isZipValid(invalidZip);
        expect(isValid).toBe(false);
    });
});