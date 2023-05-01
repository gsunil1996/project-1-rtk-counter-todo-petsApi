import './App.css';
import Counter from './components/Counter';
import DogsApi from './components/DogsApi';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", }} >
        <div style={{ border: "2px solid black", padding: "10px", width: "50%" }} >
          <Counter />
        </div>
        <div style={{ border: "2px solid black", padding: "10px", width: "50%" }} >
          <Todo />
        </div>
      </div>
      <hr />

      <div>
        <DogsApi />
      </div>

    </div>
  );
}

export default App;
