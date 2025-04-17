import {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
//경로는 현재파일을
import Todo from './Todo';
import {List, Paper} from '@mui/material';

function App() {
  //하나의 할 일을 객체로 관리할 것이다.
  //id, title, done  
  const [items, setItem] = useState([
    {
      id: "0",
      title: "Hello world 1",
      done: true
  },
  {
    id: "1",
    title: "Hello world 2",
    done: false
  }]);

  //react는 key속성에 들어있는 값을 참고해서, 리스트의 요소가 변경될 경우
  //어떤 요소가 변경되었는지 빠르게 파악할 수 있다.
  const todoItems = items.length > 0 && 
    //Paper컴포넌트
    //종이 같은 표면 효과를 제공하는 컨테이너 컴포넌트
    //elevation(그림자 깊이)를 통해 높낮이를 표현하고
    //배경색과 그림자 효과로 콘텐츠를 돋보이게 한다.
    <Paper style={{margin: 16}}>
      <List> {/*일련의 항목을 세로로 나열하는 컨테이너 역할*/}
        {items.map((item) => (
          <Todo item={item} key={item.id} />
          ))}
      </List>
    </Paper>

  return (
    <div className="App">
      {todoItems}
      {/* <Todo item={item2}/> */}
      {/*컴포넌트의 호출 <컴포넌트명 /> */}
    </div>
  );
}

export default App;

//1. Todo를 하나 더 만들어 item을 하나 더 넘겨보자
//id = '1' , title = "Hello world 2" , done = false

//2. Todo를 두 개 연속으로 늘어 놓는 대신, 배열과 반복문을 이용해보자
//반복문으로 생성된 Todo컴포넌트들을 어떻게 넘길것인가?