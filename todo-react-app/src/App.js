import {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
//경로는 현재파일을
import Todo from './Todo';
import AddTodo from './AddTodo';
import {Container, List, Paper} from '@mui/material';

//Container
//레이아웃의 가로 폭을 제한하고, 중앙 정렬 및 기본 패딩을 자동으로 적용해주는 컴포넌트

//주요 props
//maxWidth : 최대 너비를 지정(xs,sm,md,lg,xl,false)
//fixed : maxWidth와 관계없이 항상 고정폭 적용

function App() {
  //하나의 할 일을 객체로 관리할 것이다.
  //id, title, done  
  const [items, setItems] = useState([]);

  //Todo를 추가하기 위한 백엔드 콜을 대신할 가짜함수를 만들어보자.
  const add = (item) => {
    //newItem 객체가 하나의 Todo
    const newItem = {
      ...item,
      id: "ID-" + items.length,
      done: false
    }
    // prev : useState의 초기값이 들어감
    setItems(prev => [...prev, newItem])
    console.log("items : ", [...items, newItem]);
  }

  //삭제를 해주는 deleteItem()함수 만들기
  //DELETE FROM TABLE WHERE ID=0;
  const deleteItem = (item) => {
    //배열에서 삭제하려고 하는 아이템을 찾는다.
    const newItems = items.filter(e => e.id !== item.id);
    //삭제할 아이템을 제외한 아이템을 다시 배열에 지정한다.
    setItems([...newItems]);
  }

  const editItem = () => {
    setItems([...items]); // 재 렌더링 해준다.
  }
  



  //상태를 변화시키는 함수를 호출하면 state의 변경사항이 화면에 적용이된다.
  

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
          <Todo item={item} key={item.id} deleteItem={deleteItem} editItem={editItem}/>
          ))}
      </List>
    </Paper>

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo add={add}/> {/* AddTodo에 add함수를 전달 {add : function add(item) { }*/}
        {todoItems}
      </Container>
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


//useState(), 기능을 하는 함수를 App.js에 만든 이유?
//전체 Todo리스트는 App.js에서 관리를 하기 때문에