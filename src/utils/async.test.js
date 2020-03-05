import {getDataCallback,getDataPromise} from './async';

describe('Test asynchronous operations',()=>{
    test('Testing callback',(done) => {
        getDataCallback((name) => {
            expect(name).toBe('Alexis quiñonez')
            done()
        })
    })


    test('Testing promises',(done) =>{
        getDataPromise()
        .then((name)=>{
            expect(name).toBe('Alexis Quiñonez')
            done()
        })
    })


    test('Testing promises to expect',()=>{
        return expect(getDataPromise()).resolves.toBe('Alexis sssss')
    })


    test('Testing promise to expect',()=>{
        //return expect()
    })

})