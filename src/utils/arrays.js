export const createStore = () => {
    let fruitsList = [];


    return {
        getFruits: ()=> {
            return fruitsList;
        },

        addFruits : (fruit)=> {
            fruitsList.push(fruit)
        }
    }
}