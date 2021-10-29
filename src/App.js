import React, { useEffect, useState} from "react"
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
function App() {
  const [stats, setStats] = useState(null);
  const [platform, setConsole] = useState(" ");
  const [input, setInput] = useState(" ");
  // https://apex-weapon-api.herokuapp.com/v1/guns  
  useEffect(() => {
    axios.get('https://api.mozambiquehe.re/bridge?version=5&platform=PS4&player=SpoiledMilkMan_&auth=Yw66EEZlFaVluqUR110c')
      .then(data => {
        setStats(data.data);
        console.log(data.data);
      })
      .catch (err => console.log(err));
  }, []);
  const statsInput = (e) => {
    setInput(e.target.value);
  }
  const consoleInput = (e) => {
    setConsole(e.target.value);
  }
  const searchStats = () => {
    axios.get(`https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${input}&auth=Yw66EEZlFaVluqUR110c`)
      .then(data => {
        setStats(data.data)
    })
  }
  return (
  // add fixed-top make nav bar move
    <div>
      
    <Nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="main-nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="#home">StatTracker</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-link active" aria-current="page" href="#home">Home</a>
          <a class="nav-link" href="#stats">Explore</a>
          <a class="nav-link" href="#legends">Legends</a>
          <a class="nav-link" href="#share-head-section">Share</a>
        </div>
      </div>
    </div>
  </Nav>
      {stats &&(
        <div>
          <div className="home" id="home">

  <Card bg="dark" style={{ width: '20rem' }}>
  <Card.Body>
    <Card.Title>User Information</Card.Title>
    <Card.Text>
                  Input console and username to see current apex stats
    </Card.Text>
  
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Console</Form.Label>
              <Form.Select onChange={consoleInput} aria-label="Default select example">
                <option>Console Selection</option>
                <option value="PS4">Playstation</option>
                <option value="PC">PC</option>
                <option value="XBOX">XBOX</option>
              </Form.Select>
                  </Form.Group>
                  
  <Form.Group onChange={statsInput} className="mb-3" controlId="formBasicPassword">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Username" />
  </Form.Group>
  
  <Button onClick={searchStats} href="#stats" variant="secondary" type="button">
    Submit
  </Button>
</Form>
</Card.Body>
</Card>
          </div>
          
          <div className="stats" id="stats">

          <div className="character-info">
            <h1 class="name">Username: {stats.global.name}</h1>
            <h1>Legened: {stats.legends.selected.LegendName}</h1>
            <h2>Level: {stats.global.level}</h2>
          <div className="condition">
              
              <h3>Kills: {stats.legends.selected.data[0].value}  </h3>
              <h3>Online status: {stats.realtime.currentState}</h3>
              <h3>Kill Death Ratio: {stats.total.kd.value} KD</h3>
            <img src={stats.legends.selected.ImgAssets.icon} alt="" /> 
          </div>
          </div>
          </div>
          
          <div className="legends" id="legends">
          <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
          </div>
        </div>
      )}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
    crossorigin="anonymous"></link>
    </div>
    
  );
}

export default App;
