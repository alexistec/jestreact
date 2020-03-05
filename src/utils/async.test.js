import {
    getDataCallback,
    getDataPromise,
    getDataPromiseError,
    getUsers
} from './async';

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

    //another form of asynchronous test
    test('Testing promises to expect',()=>{
        return expect(getDataPromise()).resolves.toBe('Alexis Quiñonez')
    })


    test('test promise rejected',(done)=>{
        getDataPromiseError()
        .then((name)=>{
        })
        .catch((error)=>{
            expect(error).toBe('Error')
            done()
        })
    })

    test('Proof of a promise rejected',()=>{
        return expect(getDataPromiseError()).rejects.toBe('Error')
    })

    //Example test async await
    test('We test the results of a promise turns out',async () => {
        const name = await getDataPromise();
        expect(name).toBe('Alexis Quiñonez');
    })

    test('We test the results of a promise that doesnt work',async ()=>{
        try{
            const name = await getDataPromiseError();
            expect(name).toBe('Error');
        }catch(error){
            expect(error).toBe('Error')
        }
    })

    test('Test promise with HTTP request',async ()=>{
        const user = await getUsers();
        expect(user).toHaveProperty('username');
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('Direction');
    })

})