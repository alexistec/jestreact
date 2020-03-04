import {createStore} from './arrays';


describe('testig list array',()=>{
    test('trying to add new fruit',()=>{
        const store = createStore();

        store.addFruits('mango')

        expect(store.getFruits()).toStrictEqual(['mango'])
    })


    test('Trying to add two new fruit',()=>{
        const store = createStore();

        store.addFruits('mango');
        store.addFruits('Banana');

        expect(store.getFruits()).toStrictEqual(['mango','Banana']);

    })


    test('try if it contains a specific fruit',()=>{
        const store = createStore();
        store.addFruits('pera');
        store.addFruits('nuexz');
        expect(store.getFruits()).toContain('pera');
    })

    test('Testing array length',()=>{

        const store = createStore();

        store.addFruits('css')
        store.addFruits('html')
        store.addFruits('javascript');


        expect(store.getFruits()).toHaveLength(3)


    })

})