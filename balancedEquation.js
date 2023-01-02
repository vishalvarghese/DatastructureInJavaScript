let a="(a*(c+d)"

let arr=a.split('')
console.log(arr)
let check=[]
let j=0
for(i=0;i<arr.length;i++){
  if(arr[i]=='(')
    {
      check[j]='(';
      j++;
    }
  if(arr[i]==')')
    {
      j--;
      check[j]=0;    
    }
}

console.log(check)

if (check[0]==0)
  {
    console.log('equation correct')
  }
else{
  console.log('equation is wrong')
}