import {setTimeout} from 'timers'

export const getDataCallback = (callback) => {
    
    
    const name = 'Alexis quiñonez';

    setTimeout(() => {
        callback(name)
    },2000)
}


export const getDataPromise = ()=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Alexis Quiñonez')
        },2000)
    })
}

export const getDataPromiseError = ()=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('Error')
        },2000)
    })
}