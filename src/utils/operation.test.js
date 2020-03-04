import {sum,subtraction,division,multiplication} from './operations';

describe('test math functions',()=>{

    test('testing sum function',()=>{
        expect(sum(4,4)).toBe(8);
    })

    test('testing subtraction function',()=>{
        expect(subtraction(4,4)).toBe(0);
    })

    test('testing multiplication function',()=>{
        expect(multiplication(4,4)).toBe(16);
    })

    test('testing division function',()=>{
        expect(division(4,4)).toBe(3);
    })


})