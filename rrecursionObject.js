nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}


let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false


function contains(object, value){
    for(let key in object){
        if(object[key] === value){
            return true
        }else if(typeof object[key] === "object"){
            return contains(object[key], value)
        }
    }
    return false;
}

console.log(hasIt);
console.log(doesntHaveIt);