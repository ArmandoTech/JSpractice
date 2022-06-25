
const notesAndCredits= [
    {
        note: 10,
        credit: 2,
    },
    {
        note: 8,
        credit: 5,
    },
    {
        note: 7,
        credit: 5,
    },
]

const notesWithCredits= notesAndCredits.map(function(objectNotes){
    return objectNotes.note * objectNotes.credit
})

const notesAdded= notesWithCredits.reduce(function (currentValue, nextValue){
    return currentValue+nextValue
})

const creditSelected= notesAndCredits.map(function(objectCredits){
    return objectCredits.credit
    })

const creditAdded= creditSelected.reduce(function(currentValue, nextValue){
    return currentValue + nextValue
})

const weightedAverage= notesAdded/creditAdded

