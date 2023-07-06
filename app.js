//Jonathan Emanuel Mendoza Olvera

function bigWords(string, array) {
    const result = [];
    for (let i = 0; i< array.length; i++)
    if(array[i].length>string.length){
        result.push(array[i]);
    }
    return result;
}

const Amistad = ['Karla', 'hugo', 'paco', 'carmen', 'blanca', 'jonathan'];
const result = bigWords('pedro', Amistad);
console.log(result);

function printArray(array) {
    const ul = document.createElement('ul');
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li')
        li.textContent=array[i];
        ul.appendChild(li);

    }

    document.body.appendChild(ul);

}

const myArray2 =['Karla', 'paco', 'blanca']
printArray(myArray2);