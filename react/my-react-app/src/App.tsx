import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createContext, useState } from 'react';
import Layout from './pages/Layout/Layout';
import { About } from './pages/About/About';
import Login from './pages/Login/Login';
import { Home } from './pages/Home/Home';
export const ThemeContext = createContext('');

function App() {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <button onClick={() => setCount(count + 1)}>
          父组件count+1：{count}
        </button>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              {/* 这行是关键 */}
              <Route index element={<Navigate to='/home' replace />} />

              <Route path='home' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='login' element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
