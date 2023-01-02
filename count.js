const iteams = ['a', 'b', 'c', 'd', 'a', 'a', 'b', 'b', 'b', 'b']

function duplicate(data) {
    const outPut = {}

    data.forEach(element => {
        outPut[element] = (outPut[element] || 0) + 1;
    });

    return outPut
}

console.log(duplicate(iteams));