import { useState } from 'react'
import './App.css'
import Landing from './Landing'
import Flowers from './Flowers'

function App() {
  const [showFlowers, setShowFlowers] = useState(false);

  const handleShowFlowers = () => {
    setShowFlowers(true);
  };

  // const [showFlowers, setShowFlowers] = useState(false);

  // const handleShowDistribution = () => {
  //   setShowDistribution(true);
  // }

  return (
    <div className="App">
      {showFlowers ? <Flowers /> : <Landing onShowFlowers={handleShowFlowers} />}
    </div>
  );
}

export default App