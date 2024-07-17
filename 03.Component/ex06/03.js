import fs from 'fs';

console.log("== Violation ===================================");
let order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))

//Object.assign은 얕은 복사만 지원o -> 새로운 객체를 만들어내지 x 

//deep copy는 Object.assign 지원x 
const updateOrder = Object.assign({}, order, {receive: '강남구 논형동 ...'});
updateOrder.payment.method = "mobile";

console.log(order, updateOrder);

// order: creditCard, updateOrder:mobile로 나오면 깊은 복사 -> 위 예제에선 안나옴 즉, 얕은 복사를 의미 
// 리액트에서 제공하는 addon을 통해 깊은 복사를 할 수 있음. 
// 변경되는 것만 깊은 복사(변경된 값을 확인할 필요가 있을 때) 를 쓰고, 나머지 기본적인건 얕은 복사를 선택적으로 사용하자 
//react addons update 메서드를 사용해서 이 문제를 해결할 수 o -> 최적화된 변경된 값을 가지는 새로운 객체를(깊은/얕은 복사) 직접 판단해서 리턴해준다 
