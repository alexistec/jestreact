const getValue = (exp) => {

    switch (exp){
        case 'definite':
            return {};
        case 'no_definido':
            return undefined;
        case 'righful':
            return  true;
        case 'false':
            return false
        default: 
            return null;
    }
}

describe('Test null, undefined  and boolean values',()=>{

    test('Validate if a value exists or if it is defined',()=>{
        expect(null).toBeDefined()
    })

    test('Validate if a value exits or if it is true',()=>{
        expect(getValue('righful')).toBeTruthy()
    })

    test('Validate if a value it is false',()=>{
        expect(getValue('false')).toBeFalsy()
    })

    test('Validate if a value it is false',()=>{
        expect(getValue('false')).toBeFalsy()
    })

    test('Validate if a value it is false',()=>{
        expect(NaN).toBeNaN()
    })
})