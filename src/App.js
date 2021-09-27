import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup"

export function App()
{
  return (
    <Container className="App">
      <header className="App-header">
        <h1 className="App-title">Timers</h1>
      </header>
      <TimerContainer />
    </Container>
  );
}

function TimerContainer()
{

  const [curTime, setCurTime] = useState(Date.now());

  useEffect(() =>
  {
    setInterval(() =>
    {
      setCurTime(curTime => Date.now())
    }, 100);
  }, []
  );

  const [timers, setTimers] = useState([
    { name: 'Bread in oven', startTimestamp: curTime - 500, duration: 10 },
    { name: 'Titration experiment', startTimestamp: curTime, duration: 720 }
  ])

  return (
    <Container className="timer-container">
      <NewTimer timers={timers} setTimers={setTimers} />
      <TimerList timers={timers} curTime={curTime} />
    </Container>
  )
};

function NewTimer(props)
{
  let nameRef = useRef(null);
  let durationRef = useRef(null);

  function handleSubmit(event)
  {
    event.preventDefault();
    let newTimers = props.timers;
    newTimers.push(
      {
        name: nameRef.current.value,
        startTimestamp: Date.now(),
        duration: durationRef.current.valueAsNumber,
      });
    props.setTimers(newTimers);
  }

  return (
    <Form className="new-timer-form" onSubmit={handleSubmit}>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridName" >
          <Form.Control type="text" placeholder="Timer nickname" ref={nameRef} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridTimer">
          <Form.Control type="number" placeholder="Enter time (s)" ref={durationRef} />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Start new timer
      </Button>
    </Form>
  )
};



function TimerList(props)
{
  function secondsLeft(duration, elapsedTime)
  {
    return Math.max(Math.round(duration - elapsedTime / 1000), 0);
  }
  return (
    <ListGroup>
      {props.timers.map(timer =>
        <TimerListItem
          name={timer.name}
          secondsLeft={secondsLeft(timer.duration, (props.curTime - timer.startTimestamp))}
          key={timer.startTimestamp} />
      )}
    </ListGroup>
  )
};

function TimerListItem(props)
{

  return (
    <ListGroup.Item>
      {props.name}: {props.secondsLeft}s
    </ListGroup.Item>
  )
};

export default App;
