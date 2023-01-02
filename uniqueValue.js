let arr=[3,44,3,54,77,4,2,11,2]

let unique=arr.filter((ele,index,arr)=>arr.indexOf(ele)==index)

console.log(unique)