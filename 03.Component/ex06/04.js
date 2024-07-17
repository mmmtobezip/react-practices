import fs from 'fs';
import update from 'react-addons-update';

console.log("== Sol =========================================");
const order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrder = update(order, {
    // 프로퍼티 변경 
    receive: {
        $set: "강남구 논형동..."
    },
    // nest 객체 프로퍼티 변경
    payment: {
        method: {
            $set: "mobile"
        }
    },
    products: { // json형태이기에 배열이라도 [] 사용x -> 업데이트하고자 하는 요소의 인덱스로 값 변경 가능 
        // 배열 요소 객체 프로퍼티 변경
        0: {  //0번째 요소(index 0)
            amount: {
                $set: 200
            }
        },
        //배열 요소 추가: push 명령어 사용 
        $push: [{ //배열에 값 추가할 땐 [{}] 
            no: 'c002-003',
            name: '블루양말',
            price: 2000,
            amount: 1
        }]
    }
});

console.log(updateOrder, order);
