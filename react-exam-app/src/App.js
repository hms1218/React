import './App.css';
import { Counter } from './component/counter';
import { useState } from 'react';
import { RouterEx } from './router/routers';
import { MyProvider } from './context/context';
import { Parent } from './context/parent';

function App() {

  //useState()
  //리액트에서 제공하는 훅(HOOK)
  //함수를 실행하면 상태변수 1개와, 변수의 값을 바꿔줄 수 있는 함수 1개를 요소로 갖는 배열을 반환
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterEx />
      <Counter count={count} setCount={setCount}/> {/* 컴포넌트의 호출 */}
      <MyProvider> {/* 감싸서 Parent의 하위 객체에서 사용 가능 */}
        <Parent />
      </MyProvider>
    </>
  );
}

export default App;
