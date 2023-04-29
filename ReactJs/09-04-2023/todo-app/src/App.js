import Title from './components/title';
import './App.css';

function App() {
  return (
    <div className="App">
    <Title/>
    <ul className="todo-list">
      <li>Todo 1</li>
      <li>Todo 2</li>
      <li>Todo 3</li>
      <li>Todo 4</li>
      <li>Todo 5</li>
     </ul>
    </div>
  );
}

export default App;
