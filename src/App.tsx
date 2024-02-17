import React from 'react';
import Quiz from './QuizComponents/Quiz';
import NoPage from './Containers/NoPage';
import Layout from './Containers/layout';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Removed Router
import questions from "./QuizComponents/Questions";
import CustomQuiz from "./Containers/CustomQuiz";
import hpFrågor from "./hpFrågor"; 
import { BookmarkList } from './BookmarkList';
import MyBookmarked from './Containers/MyBookmarked';
import vincentBookmark from './vincentBookmark';
import { Outlet, Link } from "react-router-dom";
import { NavComponent } from './NavComponents/NavBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter> {/* Use BrowserRouter instead of Router */}
      <NavComponent />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/MyBookmarked" element={<MyBookmarked vincentBookmark={vincentBookmark} />} />
            <Route path="/EnglishWords" element={<Quiz questions={questions} />} />
            <Route path="/SwedishQuiz" element={<Quiz questions={hpFrågor} />} />
            <Route path="/CustomQuiz" element={<CustomQuiz />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
      </BrowserRouter> {/* Close BrowserRouter */}
    </div>
  );
}

export default App;
