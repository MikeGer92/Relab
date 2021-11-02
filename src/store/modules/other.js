
var ctimes = [
    1634215450000,
    1634215461000,
    1634215475000,
    1634215491000,
    1634215522000
];

// var t1 = 1634215491;

var newCtimes = ctimes.map(function(ctime) {
    return (new Date(ctime).toLocaleString())
});
console.log(newCtimes);
// let date = new Date(1634215450000);
// console.log(date);

// console.log(typeof(t1));