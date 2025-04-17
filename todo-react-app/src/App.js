import logo from './logo.svg';
import './App.css';
//경로는 현재파일을
import { Greeting,Farewell } from './Greeting';
import Todo from './Todo';
import { Exmaple } from './Example';

function App() {
  return (
    <div className="App">
      <Exmaple />
      {/* <Todo />
      <Todo />
      <Todo /> */}
      {/*컴포넌트의 호출 <컴포넌트명 /> */}
      {/* <Greeting name="John" />
      <Farewell name="John"/> */}
    </div>
  );
}

export default App;