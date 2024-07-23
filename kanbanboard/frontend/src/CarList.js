import React from 'react';
import Card from './Card';
import {Card_List} from './assets/scss/CardList.scss';

function CardList({cards}) {
    console.log(cards[0].status);
    return (
        <div className={Card_List}>
            <h1>{cards[0].status}</h1>
            {cards.map(e => 
                <Card 
                    key={e.no} 
                    no={e.no} 
                    title={e.title} 
                    description={e.description} 
                    tasks={e.tasks}  
                />
            )}
        </div>
    );
}

export default CardList;