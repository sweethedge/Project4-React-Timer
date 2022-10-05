import logo from './logo.svg';
import './App.css';
import MyTick from './mycom/MyTick';
import MyTime from './mycom/MyTime';
import MyImage from './mycom/MyImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MyTime />
    </div>
  );
}

export default App;
