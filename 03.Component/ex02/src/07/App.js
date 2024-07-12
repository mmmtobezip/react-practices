import React from 'react';
import GreoceryList from './GreoceryList';
import {title} from './assets/css/App.css';

function App(props) {
    const groceries = [
        {no:1, name: 'Egg', count: 10},
        {no:2, name: 'Bread', count: 20},
        {no:3, name: 'Milk', count: 30}
    ]
    return (
        <div id={'App'}>
            <h1 className={title}>{'Grocery List'}</h1>
            <GreoceryList groceries={groceries} />     
        </div>  
    );
}

export default App;