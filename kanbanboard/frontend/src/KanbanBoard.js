import React from 'react';
import CardList from './CarList';
import './assets/scss/kanbanBoard.scss';
import boards from './assets/json/data';

function KanbanBoard() {
    return (
        //{''} <-> {} 구분 
        <div className={'Kanban_Board'}>
            <CardList cards={boards.filter(data => data.status === "ToDo")}/>
            <CardList cards={boards.filter(data => data.status === "Doing")}/>
            <CardList cards={boards.filter(data => data.status === "Done")}/>
        </div>
    );
}

export default KanbanBoard;