import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MultipleButtons from './MultiButtons';
import Address from './api/Address';

function App() {
  return (
    <div className="App" style={{marginTop:"10px"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MultipleButtons />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
