import './App.css';
import {Provider, useDispatch, useSelector} from 'react-redux';
import { store } from './TodoStore';
import { addTodo, removeTodo } from './TodoAction';
import { useState } from 'react';

const TodoApp = () => {

    const todos = useSelector((state) => state.todos);

    const [input, setInput] = useState('')

    const dispatch = useDispatch();

    const handleAddTodo = () => {
      if(input.trim()){
        dispatch(addTodo(Date.now(), input));
        setInput(''); // 입력창 비우기
      }
    }

    const handleRemoveTodo = (id) => {
      dispatch(removeTodo(id));
    }

    return(
      <div>
        <h1>Todo List</h1>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder='Add a new todo' 
          />
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove Todo</button>
            </li>
          ))}
        </ul>
      </div>
    )

}

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider> 
  );
}

export default App;
