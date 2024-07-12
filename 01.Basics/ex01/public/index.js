function App() {
    const App = document.createElement('div');
    App.textContent = "Hello World";

    return App;
}

//div에 존재하는 'hello world'를 'root' element에 넣기 
document.getElementById('root').appendChild(App());