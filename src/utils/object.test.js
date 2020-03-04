import {createStore} from './object';


describe('Object test',()=>{
    test('Adding a new object',()=>{

        const store = createStore();

        store.addItem({
            name : 'Alexis',
            id:1,
            country : 'Argentina'
        })

        //we compare de object 
        expect(store.getItem()[0]).toEqual({
            name: 'Alexis',
            id:1,
            country:'Argentina'
        })

    })


    test('Search for an item id',()=>{
        const store = createStore();
        store.addItem({
            name: 'Alexis',
            id:1,
            country:'Argentina'
        })

        expect(store.getId(1)).toEqual({
            name: 'Alexis',
            id:1,
            country:'Argentina'
        })

    })

    test('We check if there is an object property',()=>{
        const store = createStore();
        store.addItem({
            name: 'Alexis',
            id:1,
            country:'Argentina'
        })

        expect(store.getId(1)).toMatchObject({
            name: 'Alexis',
        })
    })
})