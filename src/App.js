
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import IslandForm from './Components/IslandForm';
import IslandList from './Components/IslandList';
import data from './data/islands'

function App() {
  const [island, setIsland] = useState(data[0]);

  return (
          <div>
            <Header />
            <div className="homePage">
              <IslandList setIsland = {setIsland}/>
              <IslandForm island={island} />
            </div>
          </div>
  );
}

export default App;
