import fs from 'fs';

console.log("== Violation ===================================");
//json파일을 string으로 읽어 json.parse를 이용해 order 객체로 만들기 
let order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrder1 = order;
updateOrder1.receive = "강남구 서초구...";
console.log(order, updateOrder1, order.products === updateOrder1); //order == updateOrder1은 같음.

 
console.log("== Sol1 ========================================");
order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrder2 = Object.assign({}, order, {receive: "강남구 서초구 ..."});
console.log(updateOrder2, order, updateOrder2 === state.order); 
