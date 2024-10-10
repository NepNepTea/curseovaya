function Customer(lName='', name='', patr='', sex='', nation='', height=172, weight=70, bDate='', phone='', address='', card='', bank='') {
    this.lName = lName;
    this.name = name;
    this.patr = patr;
    this.sex = sex;
    this.nation = nation;
    this.height = height;
    this.weight = weight;
    this.bDate = bDate;
    this.phone = phone;
    this.address = address;
    this.card = card;
    this.bank = bank;
}

let customers = [];

function makeList() {//заполнить массив выбранным количеством покупателей
    let count = Number(prompt("number of customer"));
for (let i = 0; i < count; i++) {
    customers.push(new Customer(prompt(`customer number ${i+1} last name`), prompt(`customer number ${i+1} name`)))
}
}
function seeAll() {//вывести всех в консоль
    for (let i = 0; i < customers.length; i++) {
    console.log(customers[i])
}
}
function lNameSearch (lastName) {//поиск по фамилии
    console.log(customers.find(customer => customer.lName === lastName))
}
makeList();
seeAll();
lNameSearch(prompt("last name of customer"));