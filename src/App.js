import React from 'react';
import Question from './component/Question';

function App() {
  return (
    <div className="App container">
      <header>
        <h1>Weekly Budget</h1>

        <div className="main-content content">
          <Question/>
        </div>
      </header>
    </div>
  );
}

export default App;
