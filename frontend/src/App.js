import './App.css';
import axios from 'axios';

import {useState} from 'react';

function App() {

  const [todoList, setTodoList] = useState([]);

  const refreshList = () => {
    axios.get("/api/todos")
    .then((res) => {
      console.log('Received a response from /api/todos', res.data);
      setTodoList = res.data;
    })
    .catch((err) => {
      console.error('An error occurred getting /api/todos', err);
    })
  }

  return (
    <div className="App">
      <h1>This is the homepage</h1>
    </div>
  );
}

export default App;
