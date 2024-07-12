import React from 'react';
import GreoceryList from './GreoceryList';
import '../assets/css/App.css';

function App(props) {
    //통신을 통해 데이터를 받았다고 가정 
    //groceries데이터를 <GroceryList />로 props로 전달해야한다. 
    const groceries = [
        {no:1, name: 'Egg', count: 10},
        {no:2, name: 'Bread', count: 20},
        {no:3, name: 'Milk', count: 30}
    ]
    return (
        <div id={'App'}>
            <h1 className={'title'}>{'Grocery List'}</h1>
            <GreoceryList groceries={groceries} />     
        </div>  
    );
}

export default App;