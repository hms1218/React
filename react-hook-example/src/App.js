import logo from './logo.svg';
import './App.css';
import Counter from './hook/UseStateEx';
import ShowHide from './hook/Exam';
import Sol1 from './hook/Exam';
import {useState} from 'react';
import TimerFunction, {UserList, CountFunction} from './hook/UseEffectEx';
import {Counter_ref, InputFocus, InputSample} from './hook/UseRefEx';

function App() {
  return (
    <div className="App">
      <InputSample />
    </div>
  );
}

export default App;
