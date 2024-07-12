import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
//export default App;로 받으면 {App} -> App으로 넣어야함. (default export) -> es6에서 참고하자 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

