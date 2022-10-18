import React from 'react';
import { Routes as Router, Route, BrowserRouter } from 'react-router-dom';
import ShowMessages from './components/Gretting';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Collection of Cards Magic The Gatering</h1>
        <Router>
          <Route path="/" element={<ShowMessages />} />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
