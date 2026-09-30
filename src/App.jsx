//App.jsx
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Exhibition from './pages/Exhibition'
import Home from './pages/Home'
import Mypage from './pages/Mypage'
import { useState } from 'react';

function App() {
  //관심 전시 목록을 저장하는 state
  const [savedExhibitions, setSavedExhibitions] = useState([]);


  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exhibition" element={<Exhibition
          savedExhibitions={savedExhibitions}
          setSavedExhibitions={setSavedExhibitions}
        />} />
        <Route
          path="/mypage"
          element={
            <Mypage
              savedExhibitions={savedExhibitions}
              setSavedExhibitions={setSavedExhibitions}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App
