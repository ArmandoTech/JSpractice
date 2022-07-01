//Dynamic import, on script html tag, must add: Type="module"
const button= document.getElementById("btn")

button.addEventListener('click', async function(){
    const module= await import("./fileES2020")
    module.helloWorld()
})


//Optional chaining
user={}
console.log(user?.profile?.email)

if (user?.profile?.email){
    console.log('Email')
} else{
    console.log('There is no email')
}