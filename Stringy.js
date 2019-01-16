const string = 'Hello Masha';

function getStringy(size) {
let str = '';
for (let counter = 1; counter < size+1; counter++) {
    str += counter % 2;
}

return str
}
console.log(getStringy(string.length));