export const createStore = ()=>  {

    let store = [];

    return{
        addItem : (item) => {
            store = [...store,item]
        },

        getItem: ()=> {
            return store;
        },

        getId : (id)=> {
            return store.filter(item => item.id === id)[0]
        }
    }
}