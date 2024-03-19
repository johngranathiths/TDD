import { makeHeading } from './heading';

describe('heading.ts tests', () => {
    it('should return a correct h1 tag', () => {
        const text = 'Hello';
        const level = 1;
        const heading = makeHeading(text, level);
        expect(heading).toBe('<h1>Hello</h1>');
    });
    it('should return a correct h2 tag', () => {
        const text = 'Next level';
        const level = 2;
        const heading = makeHeading(text, level);
        expect(heading).toBe('<h2>Next level</h2>');
    });
    it('should invalidate too low level', () => {
        const text = 'invalid header';
        const level = 0;
        const heading = makeHeading(text, level);
        expect(heading).toBe('invalid header');
        });
    it('should invalidate too high level', () => {
        const text = 'invalid header';
        const level = 3;
        const heading = makeHeading(text, level);
        expect(heading).toBe('invalid header');
    });
    it('should handle empty text', () => {
        const text = '';
        const level = 1;
        const heading = makeHeading(text, level);
        expect(heading).toBe('<h1></h1>');
    });
});
