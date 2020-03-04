import {greet,getId,goodbye} from './strings';


describe('group test string function',()=>{


    const greets = greet('Alexis');
    const id    = getId();
    const exit  = goodbye();

    test('test function greet',()=>{
        expect(greets).toMatch('Alexis')
    })

    test('testing the function says goodbye',()=>{
        expect(exit).not.toMatch('Bye')
    })

    test('Test function getId regular expressions',()=>{
        expect(id).toMatch(/\d{2}-\d{3}/)
    })


})