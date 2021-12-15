import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import RangeSlider from "react-bootstrap-range-slider";
import milano from "./img/Gun Images/milano-821.jpg";
import xm4 from "./img/Gun Images/xm4.jpg";
import ak47 from "./img/Gun Images/ak-47.jpg";
import tundra from "./img/Gun Images/lw3---tundra.jpg";
import mp5 from "./img/Gun Images/mp5.jpg";
import stroke from "./img/Camos/stroke.jpg";
import glacier from "./img/Camos/glacier.jpg";
import grudge from "./img/Camos/grudge.jpg";
import bloodshed from "./img/Camos/bloodshed.jpg";
import rotten from "./img/Camos/rotten.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import wasteland from "./img/Camos/Liquid/wasteland.jpg";
import amphibian from "./img/Camos/Liquid/amphibian.jpg";
import boundary from "./img/Camos/Liquid/boundary.jpg";
import threshold from "./img/Camos/Liquid/threshold.jpg";
import banished from "./img/Camos/Liquid/banished.jpg";
import extortion from "./img/Camos/BrushStroke/extortion.jpg";
import degeneration from "./img/Camos/BrushStroke/degeneration.jpg";
import downfall from "./img/Camos/BrushStroke/downfall.jpg";
import drench from "./img/Camos/BrushStroke/drench.jpg";
import chemical from "./img/Camos/BrushStroke/chemical.jpg";
import Carousel from "react-bootstrap/Carousel";
function App() {
  const [MilanoGrunge, setMilanoGrunge] = useState(0);
  const [Milanoliquid, setMilanoliquid] = useState(0);
  const [MilanoBrushstroke, setMilanoBrushstroke] = useState(0);
  var MilanoGrungeint = parseInt(MilanoGrunge);
  var MilanoLiquidint = parseInt(Milanoliquid);
  var MilanoBrushstrokeint = parseInt(MilanoBrushstroke);
  var MilanoTotal = parseInt(
    (MilanoBrushstrokeint + MilanoGrungeint + MilanoLiquidint) / 3
  );
  const [XM4Grunge, setXM4Grunge] = useState(0);
  const [XM4Liquid, setXM4Liquid] = useState(0);
  const [XM4Brushstroke, setXM4Brushstroke] = useState(0);
  var XM4Grungeint = parseInt(XM4Grunge);
  var XM4Liquidint = parseInt(XM4Liquid);
  var XM4Brushstrokeint = parseInt(XM4Brushstroke);
  var XM4Total = parseInt(
    (XM4Grungeint + XM4Liquidint + XM4Brushstrokeint) / 3
  );
  const [AK47Grunge, setAK47Grunge] = useState(0);
  const [AK47Liquid, setAK47Liquid] = useState(0);
  const [AK47Brushstroke, setAK47Brushstroke] = useState(0);
  var AK47Grungeint = parseInt(AK47Grunge);
  var AK47Liquidint = parseInt(AK47Liquid);
  var AK47Brushstrokeint = parseInt(AK47Brushstroke);
  var AK47Total = parseInt(
    (AK47Grungeint + AK47Liquidint + AK47Brushstrokeint) / 3
  );
  const [MP5Grunge, setMP5Grunge] = useState(0);
  const [MP5Liquid, setMP5Liquid] = useState(0);
  const [MP5Brushstroke, setMP5Brushstroke] = useState(0);
  var MP5Grungeint = parseInt(MP5Grunge);
  var MP5Liquidint = parseInt(MP5Liquid);
  var MP5Brushstrokeint = parseInt(MP5Brushstroke);
  var MP5Total = parseInt(
    (MP5Brushstrokeint + MP5Grungeint + MP5Liquidint) / 3
  );
  const [TundraGrunge, setTundraGrunge] = useState(0);
  const [TundraLiquid, setTundraLiquid] = useState(0);
  const [TundraBrushstroke, setTundraBrushstroke] = useState(0);
  var TundraGrungeint = parseInt(TundraGrunge);
  var TundraLiquidint = parseInt(TundraLiquid);
  var TundraBrushstrokeint = parseInt(TundraBrushstroke);
  var TundraTotal = parseInt(
    (TundraBrushstrokeint + TundraGrungeint + TundraLiquidint) / 3
  );
  var FinalTotal = parseInt(
    (MilanoTotal + XM4Total + AK47Total + MP5Total + TundraTotal) / 5
  );
  const [stats, setStats] = useState(null);
  const [platform, setConsole] = useState(" ");

  // if (MilanoGrunge >= 20) {
  //   document.getElementById("camo1").style.filter = "grayscale(0%)";
  // }
  // if (MilanoGrunge < 20) {
  //   document.getElementById("camo1").style.filter = "grayscale(100%)";
  // }
  // if (MilanoGrunge >= 40) {
  //   document.getElementById("camo2").style.filter = "grayscale(0%)";
  // }
  // if (MilanoGrunge < 40) {
  //   document.getElementById("camo2").style.filter = "grayscale(100%)";
  // }
  // if (MilanoGrunge >= 60) {
  //   document.getElementById("camo3").style.filter = "grayscale(0%)";
  // }
  // if (MilanoGrunge < 60) {
  //   document.getElementById("camo3").style.filter = "grayscale(100%)";
  // }
  // if (MilanoGrunge >= 80) {
  //   document.getElementById("camo4").style.filter = "grayscale(0%)";
  // }
  // if (MilanoGrunge < 80) {
  //   document.getElementById("camo4").style.filter = "grayscale(100%)";
  // }
  // if (MilanoGrunge >= 100) {
  //   document.getElementById("camo5").style.filter = "grayscale(0%)";
  // }
  // if (MilanoGrunge < 100) {
  //   document.getElementById("camo5").style.filter = "grayscale(100%)";
  // }
  const [input, setInput] = useState(" ");
  // https://apex-weapon-api.herokuapp.com/v1/guns
  useEffect(() => {
    axios
      .get(
        "https://api.mozambiquehe.re/bridge?version=5&platform=PS4&player=SpoiledMilkMan_&auth=Yw66EEZlFaVluqUR110c"
      )
      .then((data) => {
        setStats(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const statsInput = (e) => {
    setInput(e.target.value);
  };
  const consoleInput = (e) => {
    setConsole(e.target.value);
  };
  const searchStats = () => {
    axios
      .get(
        `https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${input}&auth=Yw66EEZlFaVluqUR110c`
      )
      .then((data) => {
        setStats(data.data);
      });
  };
  return (
    // add fixed-top make nav bar move
    <div>
      <Nav
        class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="main-nav"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#home">
            StatTracker
          </a>
          <div style={{ marginLeft: "60px" }}>
            <ProgressBar
              style={{ width: "150px" }}
              variant="danger"
              animated
              now={FinalTotal}
              label={`${FinalTotal}%`}
            />
          </div>
          <a class="navbar-brand" href="#camo" style={{ marginLeft: "30px" }}>
            Total Camo Progress
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
              <a class="nav-link active" aria-current="page" href="#home">
                Apex
              </a>
              <a class="nav-link" href="#stats">
                Stats
              </a>
              <a class="nav-link" href="#cod">
                Call of Duty
              </a>
              <a class="nav-link" href="#slideshow">
                Display
              </a>
              <a class="nav-link" href="#camos">
                Camos
              </a>
            </div>
          </div>
        </div>
      </Nav>
      {stats && (
        <div>
          <div className="home" id="home">
            <div className="row">
              <div className="col-lg-8"></div>
              <div className="col-lg-4">
                <Card bg="dark" style={{ width: "20rem" }}>
                  <Card.Body>
                    <Card.Title>User Information</Card.Title>
                    <Card.Text>
                      Input console and username to see current apex stats
                    </Card.Text>

                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Console</Form.Label>
                        <Form.Select
                          onChange={consoleInput}
                          aria-label="Default select example"
                        >
                          <option>Console Selection</option>
                          <option value="PS4">Playstation</option>
                          <option value="PC">PC</option>
                          <option value="X1">XBOX</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group
                        onChange={statsInput}
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                      </Form.Group>

                      <Button
                        onClick={searchStats}
                        href="#stats"
                        variant="secondary"
                        type="button"
                      >
                        Submit
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>

          <div className="stats" id="stats">
            <div className="character-info">
              <h1 class="name">Username: {stats.global.name}</h1>
              <h1>Legened: {stats.legends.selected.LegendName}</h1>
              <h2>Level: {stats.global.level}</h2>
              <div className="condition">
                <h3>Kills: {stats.legends.selected.data[0].value} </h3>
                <h3>Online status: {stats.realtime.currentState}</h3>

                <img src={stats.legends.selected.ImgAssets.icon} alt="" />
              </div>
            </div>
          </div>

          <div className="cod" id="cod">
            <ListGroup style={{ width: "250px" }}>
              <ListGroup.Item>
                <img id="small" src={milano} alt="Card image cap" />
                <ProgressBar
                  style={{ width: "200px" }}
                  variant="danger"
                  animated
                  now={MilanoTotal}
                  label={`${MilanoTotal}%`}
                />
              </ListGroup.Item>

              <ListGroup.Item>
                <img id="small" src={xm4} alt="Card image cap" />
                <ProgressBar
                  style={{ width: "200px" }}
                  variant="danger"
                  animated
                  now={XM4Total}
                  label={`${XM4Total}%`}
                />
              </ListGroup.Item>

              <ListGroup.Item>
                <img id="small" src={ak47} alt="Card image cap" />
                <ProgressBar
                  style={{ width: "200px" }}
                  variant="danger"
                  animated
                  now={AK47Total}
                  label={`${AK47Total}%`}
                />
              </ListGroup.Item>

              <ListGroup.Item>
                <img id="small" src={mp5} alt="Card image cap" />
                <ProgressBar
                  style={{ width: "200px" }}
                  variant="danger"
                  animated
                  now={MP5Total}
                  label={`${MP5Total}%`}
                />
              </ListGroup.Item>

              <ListGroup.Item>
                <img id="small" src={tundra} alt="Card image cap" />
                <ProgressBar
                  style={{ width: "200px" }}
                  variant="danger"
                  animated
                  now={TundraTotal}
                  label={`${TundraTotal}%`}
                />
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className="slideshow" id="slideshow">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={ak47} alt="First slide" />
                <Carousel.Caption>
                  <h3>AK-47</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={xm4} alt="Second slide" />

                <Carousel.Caption>
                  <h3>XM4</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={mp5} alt="Third slide" />

                <Carousel.Caption>
                  <h3>MP5</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={tundra} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Tundra</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={milano} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Milano</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="camos" id="camos">
            <h1>Camos</h1>

            <div class="card-deck ">
              <div class="card shadow mb-5 bg-white rounded" id="guns">
                <img class="card-img-top" src={milano} alt="Card image cap" />
                <div class="card-body ">
                  <h5 class="card-title">Milano</h5>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Grunge
                        <div style={{ marginLeft: "60px" }}>
                          <ProgressBar
                            style={{ width: "150px" }}
                            variant="danger"
                            animated
                            now={MilanoGrunge}
                            label={`${MilanoGrunge}%`}
                          />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <img
                          style={{ width: "100px" }}
                          id="camo1"
                          class="card-img-sm"
                          src={stroke}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo2"
                          class="card-img-sm"
                          src={glacier}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo3"
                          class="card-img-sm"
                          src={grudge}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo4"
                          class="card-img-sm"
                          src={bloodshed}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo5"
                          class="card-img-sm"
                          src={rotten}
                          alt="Card image cap"
                        />

                        <p class="card-text">Kills {MilanoGrunge} </p>
                        <RangeSlider
                          tooltipPlacement="top"
                          value={MilanoGrunge}
                          onChange={(changeEvent) =>
                            setMilanoGrunge(changeEvent.target.value)
                          }
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Liquid
                        <div style={{ marginLeft: "68px" }}>
                          <ProgressBar
                            style={{ width: "150px" }}
                            variant="danger"
                            animated
                            now={Milanoliquid}
                            label={`${Milanoliquid}%`}
                          />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={wasteland}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={amphibian}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={boundary}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={threshold}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={banished}
                          alt="Card image cap"
                        />

                        <p class="card-text">Critical Hits {Milanoliquid} </p>

                        <RangeSlider
                          tooltipPlacement="top"
                          value={Milanoliquid}
                          onChange={(changeEvent) =>
                            setMilanoliquid(changeEvent.target.value)
                          }
                        />
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Brushstroke
                        <div style={{ marginLeft: "28px" }}>
                          <ProgressBar
                            style={{ width: "150px" }}
                            variant="danger"
                            animated
                            now={MilanoBrushstroke}
                            label={`${MilanoBrushstroke}%`}
                          />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <img
                          style={{ width: "100px" }}
                          id="camo1"
                          class="card-img-sm"
                          src={extortion}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo2"
                          class="card-img-sm"
                          src={degeneration}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo3"
                          class="card-img-sm"
                          src={downfall}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo4"
                          class="card-img-sm"
                          src={drench}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo5"
                          class="card-img-sm"
                          src={chemical}
                          alt="Card image cap"
                        />

                        <p class="card-text">
                          Pack-A-Punch Kills {MilanoBrushstroke}{" "}
                        </p>

                        <RangeSlider
                          tooltipPlacement="top"
                          value={MilanoBrushstroke}
                          onChange={(changeEvent) =>
                            setMilanoBrushstroke(changeEvent.target.value)
                          }
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <p>Total</p>

                  <ProgressBar
                    variant="danger"
                    animated
                    now={MilanoTotal}
                    label={`${MilanoTotal}%`}
                  />
                </div>
              </div>
              <div class="card shadow mb-5 bg-white rounded" id="guns">
                <img class="card-img-top" src={xm4} alt="Card image cap" />
                <div class="card-body ">
                  <h5 class="card-title">XM4</h5>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Grunge
                        <div style={{ marginLeft: "60px" }}>
                          <ProgressBar
                            style={{ width: "150px" }}
                            variant="danger"
                            animated
                            now={XM4Grunge}
                            label={`${XM4Grunge}%`}
                          />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <img
                          style={{ width: "100px" }}
                          id="camo1"
                          class="card-img-sm"
                          src={stroke}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo2"
                          class="card-img-sm"
                          src={glacier}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo3"
                          class="card-img-sm"
                          src={grudge}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo4"
                          class="card-img-sm"
                          src={bloodshed}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo5"
                          class="card-img-sm"
                          src={rotten}
                          alt="Card image cap"
                        />

                        <p class="card-text">Kills {XM4Grunge} </p>
                        <RangeSlider
                          tooltipPlacement="top"
                          value={XM4Grunge}
                          onChange={(changeEvent) =>
                            setXM4Grunge(changeEvent.target.value)
                          }
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Liquid
                        <div style={{ marginLeft: "68px" }}>
                          <ProgressBar
                            style={{ width: "150px" }}
                            variant="danger"
                            animated
                            now={XM4Liquid}
                            label={`${XM4Liquid}%`}
                          />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={wasteland}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={amphibian}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={boundary}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={threshold}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={banished}
                          alt="Card image cap"
                        />

                        <p class="card-text">Critical Hits {XM4Liquid} </p>

                        <RangeSlider
                          tooltipPlacement="top"
                          value={XM4Liquid}
                          onChange={(changeEvent) =>
                            setXM4Liquid(changeEvent.target.value)
                          }
                        />
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Brushstroke
                        <div style={{ marginLeft: "28px" }}>
                          <ProgressBar
                            style={{ width: "150px" }}
                            variant="danger"
                            animated
                            now={XM4Brushstroke}
                            label={`${XM4Brushstroke}%`}
                          />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <img
                          style={{ width: "100px" }}
                          id="camo1"
                          class="card-img-sm"
                          src={extortion}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo2"
                          class="card-img-sm"
                          src={degeneration}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo3"
                          class="card-img-sm"
                          src={downfall}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo4"
                          class="card-img-sm"
                          src={drench}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo5"
                          class="card-img-sm"
                          src={chemical}
                          alt="Card image cap"
                        />

                        <p class="card-text">
                          Pack-A-Punch Kills {XM4Brushstroke}{" "}
                        </p>

                        <RangeSlider
                          tooltipPlacement="top"
                          value={XM4Brushstroke}
                          onChange={(changeEvent) =>
                            setXM4Brushstroke(changeEvent.target.value)
                          }
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <p>Total</p>

                  <ProgressBar
                    variant="danger"
                    animated
                    now={XM4Total}
                    label={`${XM4Total}%`}
                  />
                </div>
              </div>
              <div class="card shadow mb-5 bg-white rounded" id="guns">
                <img class="card-img-top" src={ak47} alt="Card image cap" />
                <div class="card-body ">
                  <h5 class="card-title">AK-47</h5>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Grunge
                        <div style={{ marginLeft: "60px" }}>
                          <ProgressBar
                            style={{ width: "150px" }}
                            variant="danger"
                            animated
                            now={AK47Grunge}
                            label={`${AK47Grunge}%`}
                          />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <img
                          style={{ width: "100px" }}
                          id="camo1"
                          class="card-img-sm"
                          src={stroke}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo2"
                          class="card-img-sm"
                          src={glacier}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo3"
                          class="card-img-sm"
                          src={grudge}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo4"
                          class="card-img-sm"
                          src={bloodshed}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo5"
                          class="card-img-sm"
                          src={rotten}
                          alt="Card image cap"
                        />

                        <p class="card-text">Kills {AK47Grunge} </p>
                        <RangeSlider
                          tooltipPlacement="top"
                          value={AK47Grunge}
                          onChange={(changeEvent) =>
                            setAK47Grunge(changeEvent.target.value)
                          }
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Liquid
                        <div style={{ marginLeft: "68px" }}>
                          <ProgressBar
                            style={{ width: "150px" }}
                            variant="danger"
                            animated
                            now={AK47Liquid}
                            label={`${AK47Liquid}%`}
                          />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={wasteland}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={amphibian}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={boundary}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={threshold}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={banished}
                          alt="Card image cap"
                        />

                        <p class="card-text">Critical Hits {AK47Liquid} </p>

                        <RangeSlider
                          tooltipPlacement="top"
                          value={AK47Liquid}
                          onChange={(changeEvent) =>
                            setAK47Liquid(changeEvent.target.value)
                          }
                        />
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Brushstroke
                        <div style={{ marginLeft: "28px" }}>
                          <ProgressBar
                            style={{ width: "150px" }}
                            variant="danger"
                            animated
                            now={AK47Brushstroke}
                            label={`${AK47Brushstroke}%`}
                          />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <img
                          style={{ width: "100px" }}
                          id="camo1"
                          class="card-img-sm"
                          src={extortion}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo2"
                          class="card-img-sm"
                          src={degeneration}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo3"
                          class="card-img-sm"
                          src={downfall}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo4"
                          class="card-img-sm"
                          src={drench}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo5"
                          class="card-img-sm"
                          src={chemical}
                          alt="Card image cap"
                        />

                        <p class="card-text">
                          Pack-A-Punch Kills {AK47Brushstroke}{" "}
                        </p>

                        <RangeSlider
                          tooltipPlacement="top"
                          value={AK47Brushstroke}
                          onChange={(changeEvent) =>
                            setAK47Brushstroke(changeEvent.target.value)
                          }
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <p>Total</p>

                  <ProgressBar
                    variant="danger"
                    animated
                    now={AK47Total}
                    label={`${AK47Total}%`}
                  />
                </div>
              </div>
            </div>
            <div class="card-deck ">
              <div class="card shadow mb-5 bg-white rounded" id="guns">
                <img class="card-img-top" src={mp5} alt="Card image cap" />
                <div class="card-body ">
                  <h5 class="card-title">MP5</h5>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Grunge
                        <div style={{ marginLeft: "60px" }}>
                          <ProgressBar
                            style={{ width: "150px" }}
                            variant="danger"
                            animated
                            now={MP5Grunge}
                            label={`${MP5Grunge}%`}
                          />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <img
                          style={{ width: "100px" }}
                          id="camo1"
                          class="card-img-sm"
                          src={stroke}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo2"
                          class="card-img-sm"
                          src={glacier}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo3"
                          class="card-img-sm"
                          src={grudge}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo4"
                          class="card-img-sm"
                          src={bloodshed}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo5"
                          class="card-img-sm"
                          src={rotten}
                          alt="Card image cap"
                        />

                        <p class="card-text">Kills {MP5Grunge} </p>
                        <RangeSlider
                          tooltipPlacement="top"
                          value={MP5Grunge}
                          onChange={(changeEvent) =>
                            setMP5Grunge(changeEvent.target.value)
                          }
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Liquid
                        <div style={{ marginLeft: "68px" }}>
                          <ProgressBar
                            style={{ width: "150px" }}
                            variant="danger"
                            animated
                            now={MP5Liquid}
                            label={`${MP5Liquid}%`}
                          />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={wasteland}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={amphibian}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={boundary}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={threshold}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={banished}
                          alt="Card image cap"
                        />

                        <p class="card-text">Critical Hits {MP5Liquid} </p>

                        <RangeSlider
                          tooltipPlacement="top"
                          value={MP5Liquid}
                          onChange={(changeEvent) =>
                            setMP5Liquid(changeEvent.target.value)
                          }
                        />
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Brushstroke
                        <div style={{ marginLeft: "28px" }}>
                          <ProgressBar
                            style={{ width: "150px" }}
                            variant="danger"
                            animated
                            now={MP5Brushstroke}
                            label={`${MP5Brushstroke}%`}
                          />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <img
                          style={{ width: "100px" }}
                          id="camo1"
                          class="card-img-sm"
                          src={extortion}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo2"
                          class="card-img-sm"
                          src={degeneration}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo3"
                          class="card-img-sm"
                          src={downfall}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo4"
                          class="card-img-sm"
                          src={drench}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo5"
                          class="card-img-sm"
                          src={chemical}
                          alt="Card image cap"
                        />

                        <p class="card-text">
                          Pack-A-Punch Kills {MP5Brushstroke}{" "}
                        </p>

                        <RangeSlider
                          tooltipPlacement="top"
                          value={MP5Brushstroke}
                          onChange={(changeEvent) =>
                            setMP5Brushstroke(changeEvent.target.value)
                          }
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <p>Total</p>

                  <ProgressBar
                    variant="danger"
                    animated
                    now={MP5Total}
                    label={`${MP5Total}%`}
                  />
                </div>
              </div>
              <div class="card shadow mb-5 bg-white rounded" id="guns">
                <img class="card-img-top" src={tundra} alt="Card image cap" />
                <div class="card-body ">
                  <h5 class="card-title">Tundra</h5>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Grunge
                        <div style={{ marginLeft: "60px" }}>
                          <ProgressBar
                            style={{ width: "150px" }}
                            variant="danger"
                            animated
                            now={TundraGrunge}
                            label={`${TundraGrunge}%`}
                          />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <img
                          style={{ width: "100px" }}
                          id="camo1"
                          class="card-img-sm"
                          src={stroke}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo2"
                          class="card-img-sm"
                          src={glacier}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo3"
                          class="card-img-sm"
                          src={grudge}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo4"
                          class="card-img-sm"
                          src={bloodshed}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo5"
                          class="card-img-sm"
                          src={rotten}
                          alt="Card image cap"
                        />

                        <p class="card-text">Kills {TundraGrunge} </p>
                        <RangeSlider
                          tooltipPlacement="top"
                          value={TundraGrunge}
                          onChange={(changeEvent) =>
                            setTundraGrunge(changeEvent.target.value)
                          }
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Liquid
                        <div style={{ marginLeft: "68px" }}>
                          <ProgressBar
                            style={{ width: "150px" }}
                            variant="danger"
                            animated
                            now={TundraLiquid}
                            label={`${TundraLiquid}%`}
                          />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={wasteland}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={amphibian}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={boundary}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={threshold}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          class="card-img-sm"
                          src={banished}
                          alt="Card image cap"
                        />

                        <p class="card-text">Critical Hits {TundraLiquid} </p>

                        <RangeSlider
                          tooltipPlacement="top"
                          value={TundraLiquid}
                          onChange={(changeEvent) =>
                            setTundraLiquid(changeEvent.target.value)
                          }
                        />
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Brushstroke
                        <div style={{ marginLeft: "28px" }}>
                          <ProgressBar
                            style={{ width: "150px" }}
                            variant="danger"
                            animated
                            now={TundraBrushstroke}
                            label={`${TundraBrushstroke}%`}
                          />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <img
                          style={{ width: "100px" }}
                          id="camo1"
                          class="card-img-sm"
                          src={extortion}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo2"
                          class="card-img-sm"
                          src={degeneration}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo3"
                          class="card-img-sm"
                          src={downfall}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo4"
                          class="card-img-sm"
                          src={drench}
                          alt="Card image cap"
                        />
                        <img
                          style={{ width: "100px" }}
                          id="camo5"
                          class="card-img-sm"
                          src={chemical}
                          alt="Card image cap"
                        />

                        <p class="card-text">
                          Pack-A-Punch Kills {TundraBrushstroke}{" "}
                        </p>

                        <RangeSlider
                          tooltipPlacement="top"
                          value={TundraBrushstroke}
                          onChange={(changeEvent) =>
                            setTundraBrushstroke(changeEvent.target.value)
                          }
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <p>Total</p>

                  <ProgressBar
                    variant="danger"
                    animated
                    now={TundraTotal}
                    label={`${TundraTotal}%`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
        crossorigin="anonymous"
      ></link>
    </div>
  );
}

export default App;
