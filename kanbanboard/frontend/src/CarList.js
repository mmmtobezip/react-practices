import React from 'react';
import Card from './Card';
import {Card_List} from './assets/scss/CardList.scss';

function CardList({cards}) {
    console.log(cards[0].status);
    return (
        <div className={Card_List}>
            {/* status: ToDo / Done / Doing */}
            <h1>{cards[0].status}</h1>
            {cards.map(card => (
                <Card
                    key = {card.no}
                    no = {card.no}
                    title = {card.title}
                    description = {card.description}
                    status = {card.status}
                    tasks = {card.tasks}
                /> 
            ))}
        </div>

        // <div className={Card_List}>
        //     <h1>{name}</h1>
        // </div>
    );
}

export default CardList;