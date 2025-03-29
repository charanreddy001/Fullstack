
// filter method

let erip = ['alluarjun','prabhas','mahesh','ntr']

let persons = [
    {namee:"charan",age:19},
    {namee:"Pranay Thaduri",age:20},
    {namee:"vignesh",age:16},
    {namee:"Madhu",age:28},
    {namee:"Tharun",age:23},
    {namee:"Shasi",age:12},
    {namee:"Gagan",age:17}   
]

let majors = persons.filter(
    (person) => {
        return person.age >=18;
    }
);

console.log(majors)

let products = [
    {
        id: 1, 
        productName: 'realme narzo 50i',
        brand: 'realme',
        details: 'Mint Green, 2GB RAM+32GB Storage - 6.5" inch Large Display',
        price: 5749,
    },
    {
        id: 2,
        productName: 'Redmi 9 Activ',
        brand: 'Redmi',
        details: 'Carbon Black, 4GB RAM, 64GB Storage, Octa-core Helio G35',
        price: 8099,
    },
    {
        id: 3,
        productName: 'OnePlus Nord CE 2 5G',
        brand: 'OnePlus',
        details: 'Bahamas Blue, 8GB RAM, 128GB Storage',
        price: 24999,
    },
    {
        id: 4,
        productName: 'OnePlus 10R 5G Prime Edition',
        brand: 'OnePlus',
        details: 'Prime Blue, 8GB RAM, 128GB Storage, 80W SuperVOOC',
        price: 32999,
    },
    {
        id: 5,
        productName: 'Redmi Note 11',
        brand: 'Redmi',
        details: 'Horizon Blue, 4GB RAM, 64GB Storage, 90Hz FHD Display',
        price: 11999,
    },
    {
        id: 6,
        productName: 'OPPO A74 5G',
        brand: 'OPPO',
        details: 'Fantastic Purple,6GB RAM,128GB Storage',
        price: 14990,
    },
    {
        id: 7,
        productName: 'Samsung Galaxy M33 5G',
        brand: 'Samsung',
        details: 'Deep Ocean Blue, 8GB, 128GB Storage',
        price: 18499,
    },
    {
        id: 8,
        productName: 'Apple iPhone 12',
        brand: 'Apple',
        details: '128GB - White',
        price: 54900,
    },
    {
        id: 9,
        productName: 'Apple iPhone 13',
        brand: 'Apple',
        details: '128GB - Starlight',
        price: 65900,
    },
    {
        id: 10,
        productName: 'Apple iPhone 14',
        brand: 'Apple',
        details: '128GB - Blue',
        price: 79900,
    }
]

function printdetails(products){
    for(let i=0;i<products.length;i++){       // by `` you can write in different lines by also placing line space in between them
        console.log(`product id: ${products[i].id}
            product name: ${products[i].productName}
            brand: ${products[i].brand}
            product details: ${products[i].details}
            price: ${products[i].price}`)
    }
}
// printdetails(products)

let appleproducts = products.filter(
    (p) => {
        return p.brand.toLowerCase() === 'apple';
    }
);

printdetails(appleproducts);
console.log('---------------------------------------------')

let costlierproducts = products.filter(
    (pk) => {
        return pk.price >= 40000;
    }
)
printdetails(costlierproducts)
console.log('---------------------------------------------')

let cheapproducts = products.filter(
    (p) => {
        return p.price <= 10000;
    }
)
printdetails(cheapproducts)
console.log('---------------------------------------------')

// find method
// syntax is just like filter method 
// but find method just give one first found element instead of array of all elements satisfy the condition

let product = products.find(
    (po) => {
        return po.brand == "Apple"
    }
)

console.log(product) 

let jk = products.find(
    (p) => {
        return p.price >= 10000;
    }
)
console.log(jk)