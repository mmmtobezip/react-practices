// import React from 'react';
// import TaskList from './TaskList';
// import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';

// function Card({no, title, description, status, tasks}) {
//     return (
//         <div className={_Card}>
//             {/* <div className={[Card_Title, Card_Title_Open].join(' ')}></div> */}
//             <div className={Card_Title}>{title}</div>
//             <div className={'Card_Title_Open'}>{status}</div>
//             <div className={'Card_Details'}>{description}</div>
//                 {/* <TaskList tasks={tasks} /> */}
//                 <TaskList tasks={tasks}/>
//         </div>
//     );
// }

// export default Card;

import React, {useState} from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title} from './assets/scss/Card.scss';

function Card({no, title, description, tasks}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={_Card}>
            <div 
                className={`${Card_Title} ${isOpen ? 'Card_Title_Open' : ''}`}
                onClick={() => { setIsOpen(!isOpen);}}
            >
                {title}
            </div>
            {description}
            {isOpen && (
                <>
                    <div className={'Card_Details'}></div>
                    <TaskList tasks={tasks}/>
                </>
            )}
        </div>
    );
}

export default Card;