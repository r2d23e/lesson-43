// let company = [
//     {
//         month: 1,
//         incom: 40000,
//         trata: 200
//     },

//     {
//         month: 2,
//         incom: 578000,
//         trata: 5000
//     },
//     {
//         month: 3,
//         incom: 30000,
//         trata: 9000
//     },
//     {
//         month: 4,
//         incom: 1000000,
//         trata: 5000000
//     },
//     {
//         month: 5,
//         incom: 60000,
//         trata: 40000
//     }
// ];




// for (let item of company) {//обращение через for ко всем obj
//     item.balance = item.incom - item.trata// создание ключа во все obj
//     if (item.balance < 0) {//условие создание ключа еще одного ключа
//         item.pribil = false
//     }
//     else {
//         item.pribil = true
//     }
// }



// let arr1 = []
// let arr2 = []
// for (let item of company) {
//     if (item.balance > 0) {
//         arr1.push(item)
//     }
//     else {
//         arr2.push(item)
//     }
// }
// console.log(arr1);
// console.log(arr2);


// console.log(company);

// let arr3 = []
// let arr4 = []
// for (let item of company) {

//     if (item.month % 2 == 0) {
//         arr3.push(item)
//     }
//     else {
//         arr4.push(item)
//     }

// }
// console.log(arr3);
// console.log(arr4);



let shop = [
    { // марка год цена гарантия
        brand: "Ferrari F430 Spider",
        year: 2044,
        price: 470000,
    },
    {
        brand: "Ferrari F244",
        year: 2000,
        price: 240000,
    },
    {
        brand: "Uazik",
        year: 2020,
        price: 50000,
    },
    {
        brand: "Ferrari 499P",
        year: 2023,
        price: 2500000,
    },
    {
        brand: "BUXANKA",
        year: 1990,
        price: 150000,
    },
    {
        brand: "Gentra Chevrolet",
        year: 2008,
        price: 100000,
    },
    {
        brand: "Bugatti",
        year: 2015,
        price: 550000,
    },
    {
        brand: "Bugatti Chiron",
        year: 2016,
        price: 850000,
    },
]
console.log(shop);

let let_b = []
let old = []
let notold = []
let garantiya = []
let garantiya_true = []
let luxury = []
let let_g = []

for (let item of shop) {
    if (item.brand[0] == "B") {
        let_b.push(item)
    }
    if (item.year <= 2010) {
        item.old = true
        old.push(item)

        if (item.old == true) {
            item.garantiya = false
            garantiya.push(item)
        }

    }
    if (item.year >= 2010) {
        item.notold = true
        notold.push(item)
    }
    if (item.year >= 2010) {
        item.garantiya_true = "1 year"
        garantiya_true.push(item)
    }
    if (item.price >= 200000) {
        item.luxury = true
        luxury.push(item)
    }
    else {
        item.luxury = false
    }
    if (item.brand[0] == "G") {

       delete item.brand
       let_g.push(item)
    }
}





console.log(let_b);//dop 1
console.log(old);//dop2
console.log(notold);//dop2.2
console.log(garantiya);//dop3
console.log(garantiya_true);//dop3.2
console.log(luxury);//dop 4
console.log(let_g);//dop 5