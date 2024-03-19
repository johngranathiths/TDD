import { isEmailValid } from './isEmailValid';

describe('isEmailValid.ts tests', () => {
    it('should return true when email is valid', () => {
        const validEmail = 'jonatan@gmail.com';
        const isValid = isEmailValid(validEmail);
        expect(isValid).toBe(true);
    });

    it('Should return false when email lacks domain', () => {
        const invalidEmail = 'jonatan@gmail';
        const isValid = isEmailValid(invalidEmail);
        expect(isValid).toBe(false);
    });

    it('should return false when email lacks @ symbol', () => {
        const invalidEmail = 'jonatan.com';
        const isValid = isEmailValid(invalidEmail);
        expect(isValid).toBe(false);
    });
});