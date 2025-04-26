import './App.css';
import {Provider, useDispatch, useSelector} from 'react-redux';
import { store } from './Store';
import { addTodo, removeTodo } from './TodoAction';
import { useState } from 'react';

import { login, logout } from './LoginAction';

const TodoApp = () => {

    const todos = useSelector((state) => state.todo.todos);

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

const LoginApp = () => {
  
  const {name, isLoggedin} = useSelector(state => state.login);
  
  const [nameInput, setNameInput] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    if(nameInput.trim()){
      dispatch(login(nameInput));
      setNameInput('');
    }
  }

  const handleLogout = () => {
    dispatch(logout());
  }

  return(
    <div>
      <h2>Login Status</h2>
      {isLoggedin ? 
        (
        <div>
          <p>Welcome, {name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
        ) : 
        (
        <div>
          <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder='Enter your username'/>
          <button onClick={handleLogin}>Login</button>
        </div>
      )
    }
    </div>
  )


}

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
      <LoginApp />
    </Provider> 
  );
}

export default App;
