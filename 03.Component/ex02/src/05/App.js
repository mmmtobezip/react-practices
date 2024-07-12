import React from 'react';
import {App, Header} from './assets/scss/App.scss';
// id: App , class: Header
export default function() {
    return (
        <div id = {App}>
            <h1 className={Header}>SASS & SCSS</h1>
        </div>
    );
}