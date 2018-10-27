var names = ['Budi', 'Galih', 'Tono'];

// names.forEach(function(name){
//     console.log('foreach', name);
// })

// names.forEach((name) => {
//     console.log('arrowFunc', name);
// })

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Faza'));

var person = {
    name: 'Faza',
    greet: function(){
        names.forEach((name) => {
            console.log(this.name + ' Say Hi to ', name)
            // this.name = itu menampilkan name yang ada di dalam variabel person
        })
    }
}

person.greet();

// Challenge Area

function add(a,b){
    return a + b;
}

// AddExpression
var AddExpression = (a,b) => a + b;
console.log(AddExpression(1,4));
console.log(AddExpression(3,4));

// AddStatment
var AddStatment = (a,b) => {
    return a + b;
}

console.log(AddStatment(6,8))


// console.log(add(1,4));
// console.log(add(2,8));