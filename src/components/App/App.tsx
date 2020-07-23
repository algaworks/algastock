import React from 'react';
import './App.css';
import Header from '../Header';
import Button from '../Button';

function TestComponent () {
  return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="search icon" />
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />

      <div className="Container">
        <Button
          onClick={() => window.alert('UIIIU')}
          appendIcon={<TestComponent />}
        >
          Alert
        </Button>
      </div>
    </div>
  );
}

export default App;
