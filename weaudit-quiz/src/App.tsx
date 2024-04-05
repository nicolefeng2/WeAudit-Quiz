import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import { Route, createBroswerRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
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
  // implemented
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/flower' element={<Flower onSubmit={handleSubmit} />}></Route>
          <Route path='/flower-distr' element={<FlowerDistr />}></Route>
        </Routes>
      </BrowserRouter>
      
      {/* {submit ? <Flower onSubmit={handleSubmit}/> : <Landing />}
      {/* {submit ? <BiasPrompt prompt={"flower"} pictures={'./assets/prompts/flower'}/> : <Landing onSubmit={handleSubmit} />} */}
      
    </div>
  );
}

export default App