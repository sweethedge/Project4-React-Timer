import logo from './logo.svg';
import './App.css';
import MyTime from './mycom/MyTime';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MyTime />
      <p></p>
    </div>
  );
}

export default App;
