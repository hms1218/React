import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MultipleButtons from './MultiButtons';
import Address from './api/Address';
import MovieApi from './api/Movie';
// import KakaoMap from './api/Map';
import MapContainer from './api/Map';

function App() {
  return (
    <div className="App" style={{marginTop:"10px"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MultipleButtons />} />
          <Route path="/address" element={<Address />} />
          <Route path='/movie' element={<MovieApi />} />
          <Route path='/map' element={<MapContainer />} />
          {/* <Route path='/map' element={<KakaoMap />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
