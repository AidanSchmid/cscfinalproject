import React, { useEffect, useState} from "react"
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card' 
function App() {
  const [stats, setStats] = useState(null);
  const [platform, setConsole] = useState(" ");
  const [input, setInput] = useState(" ");
  
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
      <a class="navbar-brand" href="index.html">StatTracker</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-link active" aria-current="page" href="#home-section">Home</a>
          <a class="nav-link" href="#explore-head-section">Explore</a>
          <a class="nav-link" href="#create-head-section">Create</a>
          <a class="nav-link" href="#share-head-section">Share</a>
        </div>
      </div>
    </div>
  </Nav>
      {stats &&(
        <div>
          <div className="home">

  <Card  bg="dark"style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Input User Information</Card.Title>
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
  
  <Button onClick={searchStats} variant="secondary" type="button">
    Submit
  </Button>
</Form>
</Card.Body>
</Card>
          {/* <div className="search"> 
            <input onChange={consoleInput} type="text" />
            <input onChange={statsInput} type="text" />
            <button onClick={searchStats}>Search</button>
          </div> */}
          </div>

          <div className="stats">

          
          <div className="character-info">
            <h1 class="name">{stats.global.name}</h1>
            <h1>{stats.legends.selected.LegendName}</h1>
          <h2>Level {stats.global.level}</h2>
          <div className="condition">
              
              <h3>{stats.legends.selected.data[0].value} Kills! </h3>
              <h3>{stats.realtime.currentState}</h3>
              <h3>{stats.total.kd.value} KD</h3>
            <img src={stats.legends.selected.ImgAssets.icon} alt="" />
            
          </div>
          </div>
          
        </div>
        </div>
      )}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
    crossorigin="anonymous"></link>
    </div>
    
  );
}

export default App;
