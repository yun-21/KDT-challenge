const arr = [
    {name : "mina", tel: "010-2569-8895"},
    {name : "hoju", tel: "010-4252-1434"},
    {name : "jogu", tel: "010-1234-5345"},
]

const nameArr = [];
const telArr = [];

arr.forEach((element)=>{
    nameArr.push(element.name);
    telArr.push(element.tel);
})
console.log(nameArr)
console.log(telArr)

console.log(nameArr.indexOf('hoju')===telArr.indexOf('010-4252-1434'))