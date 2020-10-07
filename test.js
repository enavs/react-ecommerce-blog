var products = [{name: 'mango'}, {name: 'mango'}, {name: 'mango'}, {name:'pear'}];
var shallowProducts = [];

// Function that counts unique number of items in a list
function getCount(productList, itemToCount) {
    let tempList = [];
    let itemCount = 0;

    for (let i of productList) {
        tempList.push(i.name);
    }
    for (let i of tempList) {
        if(i === itemToCount) {
            itemCount++;
        }
    }
    return itemCount;
}
getCount(products, 'mango');

// Create list of uniquely-named products
var referenceProducts = [];
for (const i of products) {
    if(!referenceProducts.includes(i.name)) {
        referenceProducts.push(i.name);
    }
}
// console.log(referenceProducts);

// Create a list of unique objects along with their counts
for (const i of referenceProducts) {
    shallowProducts.push({
        name: i,
        count: getCount(products, i)
    });
}
console.log(shallowProducts);

var products = [
    {
        'price': 100,

    },
    {
        'price': 40,

    },
    {
        'price': 20,

    },
];

// console.log(products.reduce((a, b) => { price: a.price + b.price }), 0)
// products.reduce(function (a, b) {
    //     count = { price: a.price + b.price }
    // });
    
var count = 0; 
for (const p of products) {
    count += p.price;
}
console.log(count);