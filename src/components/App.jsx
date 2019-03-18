import React from 'react';

import Jumbotron from './Jumbotron';
import Form from './Form';

import './../uikit/css/uikit.min.css';
import './../css/App.css';

const App = () => {
  return(
    <div className="App">
        <Jumbotron />
        <main className="App-body">
          <Form />
        </main>
      </div>
  )
}

export default App;
