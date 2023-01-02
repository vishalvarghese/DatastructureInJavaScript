let word= 'MaayalaM';

function palindrome(checkword){
if(checkword.split('').reverse().join('').toLowerCase()==checkword.toLowerCase())
{
    console.log('palindrome');
}else{
console.log('Not palindrome');
}
}


// let sentence="welcome to ooty";

// console.log(sentence.split('').reverse().join(" "))
// console.log(sentence.split(' ').reverse().join(" "))

palindrome(word);

console.log(word.toLowerCase())

console.log(word)