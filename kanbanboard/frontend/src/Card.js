import React from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';

function Card({no, title, description, status, tasks}) {
    return (
        <div className={_Card}>
            {/* <div className={[Card_Title, Card_Title_Open].join(' ')}></div> */}
            <div className={Card_Title}>{title}</div>
            <div className={Card_Title_Open}>{status}</div>
            <div className={'Card_Details'}>{description}
                {/* <TaskList tasks={tasks} /> */}
                <TaskList />
            </div>
        </div>
    );
}

export default Card;