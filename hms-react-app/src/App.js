import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './context/context';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './navigation/navigation';
import { Posts } from './pages/posts';
import { Settings } from './pages/settings';
import { Home } from './pages/home';

function App() {

  const {theme, toggleTheme} = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#333',
    color: theme === 'light' ? '#333' : '#f9f9f9',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    fontFamily: 'sans-serif',
   };

  return (
    <div style={style}>
      <NavBar />
      <Routes>
        <Route path="/src/pages/home.js" element={<Home />}/>
        <Route path="/src/pages/posts.js" element={<Posts />}/>
        <Route path="/src/pages/settings.js" element={<Settings />}/>
      </Routes>
    </div>
  );
}

export default App;
