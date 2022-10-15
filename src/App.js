import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Test from "./pages/Test";
import Success from "./pages/Success";
import FeedbackList from './pages/FeedbackList';



function App() {
  const LOCAL_STORAGE_KEY = "feedback";
  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const addFeedbackHandler = (feedback) => {
    console.log(feedback);
    setFeedback([...feedback, { id: uuid(), ...feedback }]);
  };
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/success" element={<Success />} />
          <Route path="/feedback" element={<FeedbackList feedback={feedback} />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
