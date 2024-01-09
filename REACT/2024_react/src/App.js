import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import List from './components/List';

function App() {
  return (
    <div className="bg-green-400">
      <header className="App-header">
        <h1>Hello</h1>
        <Button content="Click me"/>
        <Button content="Press me"/>
        <Button content="(Synonym for click) me"/>
        <List listElement1="Tea" listElement2="Sugar" listElement3="Rum"/>
      </header>
    </div>
  );
}

export default App;
