import './App.css';
import { useEffect, useState } from 'react';
import {P_Info}  from './P_info';
import { call } from './ApiService';

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    //조회
    call("/product2","GET")
      .then(result => {
        setItems(result.data);
      })
  },[])

  //추가
  const add = (item) => {
    call("/product2","POST",item)
      .then(result => 
        setItems(result.data)
      )
  }

  return (
    <div>
      <P_Info items={items}/>
    </div>
  );
}

export default App;
