//Extracting an element from an array
person= {
    name: 'Pepito',
    age: 30,
    country: 'USA',
}

let { name, ...all }= person
console.log(all)

//Joining 2 objects
person2={
    name: 'Pablito',
    age: 22,
}

person3= {
    ...person2,
    country: 'MX'
}
console.log(person3)


//"Finally", for promises

const helloWorld= () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve('Hello world'), 3000)
        : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Ended'))