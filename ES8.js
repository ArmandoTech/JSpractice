//Converts an object into an array
const data={
    fronted: 'Pepito',
    backend: 'Pepita',
    designer: 'María',
}
const dataConverted= Object.entries(data)
console.log(dataConverted)
console.log(dataConverted.length)


//Gives the values of an object
const data2={
    fronted: 'Pepito',
    backend: 'Pepita',
    designer: 'María',
}
const values= Object.values(data2)
console.log(values)


//Async Await
const helloWorld= () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello world'), 3000)
        : reject(new Error('Test error'))
    })
}

const helloAsync= async () => {
    const hello= await helloWorld()
    console.log(hello)
}

helloAsync()

const anotherFunction= async() => {
    try {
        const hello= await helloWorld()
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

anotherFunction()

