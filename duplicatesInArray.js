let arr=[14,23,4,5,333,14,6,5,4]

let duplicates=arr.filter((ele,index,arr)=>arr.indexOf(ele)!==index)

console.log(duplicates)
