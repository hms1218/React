import logo from './logo.svg';
import './App.css';
import Counter from './hook/UseStateEx';
import ShowHide from './hook/Exam';
import Sol1 from './hook/Exam';
import {useState} from 'react';
import TimerFunction, {UserList, CountFunction, Cleanup} from './hook/UseEffectEx';
import {Counter_ref, InputFocus, InputSample, PreviousValue} from './hook/UseRefEx';

function App() {

  const value = 0;

  return (
    <div className="App">
      <PreviousValue />
    </div>
  );
}

export default App;
