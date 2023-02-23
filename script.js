var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(mountains) {
    var highMountain = mountains[0];
    mountains.forEach(function (m) {
        if (m.height > highMountain.height) {
            highMountain = m;
        }
    });
    // let highMountain:Mountain = mountains.reduce((prev, current)=>(prev.height > current.height)? prev: current);
    return highMountain.name;
}
var mountainName = findNameOfTallestMountain(mountains);
console.log(mountainName);
//
var averagePrice = 0;
var sumPrice = 0;
var products = [
    {
        name: "Steak",
        price: 16
    },
    {
        name: "Bacon",
        price: 14
    },
    {
        name: "chicken",
        price: 12
    }
];
function calcAverageProductPrice(products) {
    products.forEach(function (p) {
        sumPrice += p.price;
    });
    return sumPrice / 3;
}
var productaverage = calcAverageProductPrice(products);
console.log(productaverage);
