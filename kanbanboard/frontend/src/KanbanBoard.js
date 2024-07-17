import React from 'react';
import CardList from './CarList';
import './assets/scss/kanbanBoard.scss';

function KanbanBoard() {
    return (
        //{''} <-> {} 구분 
        <div className={'Kanban_Board'}>
            <CardList name={'To Do'}/>
            <CardList name={'Doing'}/>
            {/* <CardList cards={DoneList} /> */}
            <CardList name={'Done'}/>
        </div>
    );
}

export default KanbanBoard;