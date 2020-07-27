import React from 'react';
import './App.css';
import Header from '../Header';
import Container from '../../shared/Container';
import Table from '../../shared/Table';

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Table />
      </Container>
    </div>
  );
}

export default App;
