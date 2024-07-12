//rsf 사용 
import React from 'react';
import GroceryItem from './GroceryItem';
import {Grocery_List} from './assets/scss/GroceryList.scss'; //.grocery-list '-'사용 불가  -> '_' 사용하자 e.g. Grocery_List

function GreoceryList({groceries}) {
    return (
        <ol className={Grocery_List}>
            {groceries.map(e => <GroceryItem 
                                        key={e.no}
                                        name={e.name} 
                                        count={e.count} />) }
        </ol>
    );
}

export default GreoceryList;