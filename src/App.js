import React, { useEffect, useState} from "react"
import './App.css';
import axios from 'axios';

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
  
    <div>
      {stats &&(
        <div>
          <div className="character-info">
            <h1>{stats.global.name}</h1>
            <h1>{stats.legends.selected.LegendName}</h1>
          <h2>Level {stats.global.level}</h2>
          <div className="condition">
              
              <h3>{stats.legends.selected.data[0].value} Kills </h3>
              <h3>{stats.realtime.currentState}</h3>
              <h3>{stats.total.kd.value} KD</h3>
            <img src={stats.legends.selected.ImgAssets.icon} alt="" />
            
          </div>
          </div>
          <div className="search"> 
            <input onChange={consoleInput} type="text" />
            <input onChange={statsInput} type="text" />
            <button onClick={searchStats}>Search</button>
          </div>
        </div>
        
      )}
    </div>
  );
}

export default App;
