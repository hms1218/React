import './App.css';
import {Provider, useDispatch, useSelector} from 'react-redux';
import { store } from './Store';
import { addTodo, removeTodo } from './TodoAction';
import { useState } from 'react';

import { login, logout } from './LoginAction';

import { addToCart, removeFromCart } from './CartAction';

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

export const CartApp = () => {
  const products = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ];

  const cart = useSelector(state => state.cart.products);

  const dispatch = useDispatch();

  const handleAddToCart = (id,name) => {
    dispatch(addToCart(id,name))
  }

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  return(
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => handleAddToCart(product.id, product.name)}>Add to Cart</button>
          </li>
        ))}
      </ul>
           
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? <p>"Your Cart is empty"</p> : 
      (<ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} (x{product.quantity})
            <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      )}
    </div>
  )
}


function App() {
  return (
    <Provider store={store}>
      <TodoApp />
      <LoginApp />
      <CartApp />
    </Provider> 
  );
}

export default App;
