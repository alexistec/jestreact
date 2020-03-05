import {getDataCallback} from './async';

describe('Test asynchronous operations',()=>{
    test('Testing callback',(done) => {
        getDataCallback((name) => {
            expect(name).toBe('Alexis quiñonez')
            done()
        })
    })
})