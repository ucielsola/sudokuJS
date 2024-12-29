import { describe, it, expect } from 'vitest';
import { Sudoku } from '../src/Sudoku.js';

describe('Sudoku', () => {
    it('should return the correct greeting from hello()', () => {
        const sudoku = new Sudoku();
        const greeting = sudoku.hello();
        expect(greeting).toBe('Hello, Sudoku!');
    });
});