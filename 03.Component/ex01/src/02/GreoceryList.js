//rsf 사용 
import React from 'react';
import GroceryItem from './GroceryItem';

function GreoceryList({groceries}) {
    // 방법1
    // const groceriesItem = [];
    // groceries.forEach((grocery) => {
    //     groceriesItem.push(<GroceryItem name={grocery.name} count={grocery.count} />);
    // });
    
    return (
        <ol className={'grocery-list'}>
            {/* 방법1 */}
            {/* {groceriesItem.map(e => {
                return <GroceryItem name={e.name} count={e.count} />;
            })} */}
            {/* 방법2: 위에 자바스크립트 문장 없앨 수 O */}
            {groceries.map(e => <GroceryItem 
                                        key={e.no}
                                        name={e.name} 
                                        count={e.count} />) }
        </ol>
    );
}

export default GreoceryList;