// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Chat from './components/chat';
import Review from './components/review';
import Question from './components/question';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/review" element={<Review/>} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </Router>
  );
}

export default App;
