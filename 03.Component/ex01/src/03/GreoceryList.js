import React, { Component } from 'react';
import GroceryItem from './GroceryItem';

class GreoceryList extends Component {
    constructor(props) {
        super(props); //Component(부모)의 props 호출 
    }
    render() {
        return (
            <ol className={'grocery-list'}>
                {
                    this.props.groceries.map(e => <GroceryItem 
                                                        key = {e.no}
                                                        name={e.name}
                                                        count={e.count} 
                                                />)
                }
            </ol>
        );
    }
}

export default GreoceryList;