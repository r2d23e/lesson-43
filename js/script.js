let company = [
    {
        month: 1,
        incom: 40000,
        trata: 200
    },

    {
        month: 2,
        incom: 578000,
        trata: 5000
    },
    {
        month: 3,
        incom: 30000,
        trata: 9000
    },
    {
        month: 4,
        incom: 1000000,
        trata: 5000000
    },
    {
        month: 5,
        incom: 60000,
        trata: 40000
    }
];




for (let item of company) {//обращение через for ко всем obj
    item.balance = item.incom - item.trata// создание ключа во все obj
    if (item.balance < 0) {//условие создание ключа еще одного ключа
        item.pribil = false
    }
    else {
        item.pribil = true
    }
}



let arr1 = []
let arr2 = []
for (let item of company) {
    if (item.balance > 0) {
        arr1.push(item)
    }
    else {
        arr2.push(item)
    }
}
console.log(arr1);
console.log(arr2);


console.log(company);

let arr3 = []
let arr4 = []
for (let item of company) {

    if (item.month % 2 == 0) {
        arr3.push(item)
    }
    else {
        arr4.push(item)
    }

}
console.log(arr3);
console.log(arr4);



