const month=['may','april','april','june','july','may']

let countofDulicates=month.reduce((obj,month)=>{
 if(obj[month]==undefined){
    obj[month]=1;
    return obj;
 }else{
    obj[month]++;
    return obj;
 }   
},{})

console.log(countofDulicates)