const arr =[3,4,5,6];
arr.foo='JI';

for(let i of arr){
    console.log(i);
}

for(let i in arr)
{
    console.log(i);
}

console.log(arr)