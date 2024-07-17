import React from 'react';
import Task from './Task';
import {Task_List, Input_Add_Task} from './assets/TaskList.scss';

function TaskList({tasks}) {
    return (
        <div className={Task_List}>
            <ul>
                {/* 주어진 task 개수만큼 반복 -> 리스트에 뿌리기  */}
                {tasks.map(t => 
                    <Task 
                        key={t.no}
                        no ={t.no} 
                        name={t.name}
                        done={t.done}
                    />
                )}
                {/* <Task /> */}
            </ul>
            <input className={Input_Add_Task} type='text' placeholder='태스크 추가'></input>
        </div>
    );
}

export default TaskList;