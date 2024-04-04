import { useState } from 'react'
import './App.css'
import Landing from './Landing'
import Flower from './Flower'
import FlowerDistr from './FlowerDistr'
import Rating from './Rating'
import FreeResponse from './FreeResponse'
import BiasPrompt from './BiasPrompt'

function App() {
  const [submit, setSubmit] = useState(false);
  let currPage:string = "landing";

  const handleSubmit = () => {
    setSubmit(true);
  };
  
  // TODO: fix this -- using Router and Navigate react libraries to 
  // implement control flow of pages: Landing -> Flower (w/ rating) -> Flower (w/ free response) -> FlowerDistribution
  return (
    <div className="App">
      
      {/* {submit ? <BiasPrompt prompt={"flower"} pictures={'./assets/prompts/flower'}/> : <Landing onSubmit={handleSubmit} />} */}
      {submit ? <Flower onSubmit={handleSubmit}/> : <Landing onSubmit={handleSubmit} />}
    </div>
  );
}

export default App