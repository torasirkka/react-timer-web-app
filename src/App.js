import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

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
  let timer_list = [
    { name: 'timer1', start_timestamp: 1632693980366 / 1000, duration_seconds: 10000 }
  ];
  const [seconds, setSeconds] = useState(0);

  useEffect(() =>
  {
    const interval = setInterval(() =>
    {
      setSeconds(seconds => seconds + 1)
    }, 1000);
  }, []);

  return (
    <Container className="timer-container">
      <TimerList timer_list={timer_list} />
    </Container>
  )
};

function TimerList(props)
{
  return (
    <Row>
      <Col>
        {props.timer_list.map(timer =>
          <TimerListItem timer={timer} key={timer.start_timestamp} />
        )}
      </Col>
    </Row>
  )
};

function TimerListItem(props)
{
  let time_left = Math.max(Math.round(props.timer.duration_seconds - (Date.now() / 1000 - props.timer.start_timestamp)), 0);
  return (
    <p>
      {props.timer.name}: {time_left}
    </p>
  )
};

export default App;
