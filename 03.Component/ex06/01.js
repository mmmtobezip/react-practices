import fs from 'fs';

console.log("== Violation ===================================");
//json파일을 string으로 읽어 json.parse를 이용해 order 객체로 만들기 
let order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));
const updateOrderProducts1 = order.products;
//1. 직접 상태 변경 
updateOrderProducts1.push({
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 1
});
//1. 기존에 있는 상태와 변경된 상태 비교 -> 같은 값 
console.log(order.products, updateOrderProducts1, order.products === updateOrderProducts1);

console.log("== Sol1 ========================================");
order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

// 2. concat: 배열에 무언갈 추가할 때 사용(비파괴 배열 메서드 및 연산자 사용) -> 1번 해결책 
const updateOrderProducts2 = order.products.concat({
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 1
})
console.log(order.products, updateOrderProducts2, order.products === updateOrderProducts2);

// 3. spread: 배열에 
const updateOrderProducts3 = [...order.products, {
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 1
}];
console.log(order.products, updateOrderProducts3, order.products === updateOrderProducts3);

console.log("== Sol2 ========================================");
order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));




// data = [ {no:10, status: 'Done'}, {no:20, status:'Doing'}, {no:11, status:'Doing'}, no:10, status:'Todo'}]
// cards = data.filter(e => e.status === 'Doing') 
// -> 리턴해주는 배열이 doing인 애들만 나오게됨. 
// console.log(cards);
