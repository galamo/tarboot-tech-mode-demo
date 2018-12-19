
function thesolver(){
    return new Promise((resolve,reject)=>{
        resolve("hello there")

    })
}


async function solve(){
    let result = await thesolver()
    console.log(result)
    console.log("blocking...")
}
solve();

console.log("non blocking ?")