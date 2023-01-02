var arr =[1,2,34,5,4]

let b=[];
for(i=0;i<arr.length;i++)
{
  b=arr.slice(i+1,arr.length);
  if(b.includes(arr[i])){
    console.log[b]
    console.log(arr[i])
      break;
  }
}