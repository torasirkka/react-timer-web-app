import React, { Component } from 'react';
import './App.css';
import Container from "react-bootstrap/esm/Container";

class App extends Component
{
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Timers</h1>
        </header>
        <TimerContainer />
      </div>
    );
  }
}

function TimerContainer()
{

  return (
    <Container className="timer-container">
      {Date.now()}
    </Container>
  )
}


export default App;
