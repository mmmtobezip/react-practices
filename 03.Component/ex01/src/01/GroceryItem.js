//rsf 사용 
import React from 'react';

function GroceryItem({name, count}) {
    // console.log(props);  // name: 'Bread', count: 20
    console.log({name});
    return (
        <li>
            {/* <strong>{props.name}</strong> */}
            <strong>{name}</strong>
            <span>{count}</span>
        </li>
    );
}

export default GroceryItem;