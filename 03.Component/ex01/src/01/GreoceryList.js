//rsf 사용 
import React from 'react';
import GroceryItem from './GroceryItem';

function GreoceryList(props) {
    return (
        <ol className={'grocery-list'}>
            <GroceryItem name={'milk'} count={10}/>
            <GroceryItem name={'Egg'} count={30}/>
            <GroceryItem name={'Bread'} count={20}/>
        </ol>
    );
}

export default GreoceryList;
