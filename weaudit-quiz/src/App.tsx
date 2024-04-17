import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Landing from './Landing'
import BiasPrompt from './BiasPrompt'
import BiasDistribution from './BiasDistribution'
import Ending from './Ending'


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
          <Route path='/flower' element={<BiasPrompt prompt="flower" onSubmit={handleSubmit} />}></Route>
          <Route path='/flower-distr' element={<BiasDistribution distr="flower" />}></Route>
          <Route path='/tree' element={<BiasPrompt prompt="tree" onSubmit={handleSubmit} />}></Route>
          <Route path='/tree-distr' element={<BiasDistribution distr="tree" />}></Route>
          <Route path='/baby' element={<BiasPrompt prompt="baby" onSubmit={handleSubmit} />}></Route>
          <Route path='/baby-distr' element={<BiasDistribution distr="baby" />}></Route>
          <Route path='/ceo' element={<BiasPrompt prompt="ceo" onSubmit={handleSubmit} />}></Route>
          <Route path='/ceo-distr' element={<BiasDistribution distr="ceo" />}></Route>
          <Route path='/couple' element={<BiasPrompt prompt="couple" onSubmit={handleSubmit} />}></Route>
          <Route path='/couple-distr' element={<BiasDistribution distr="couple" />}></Route>
          <Route path='/wedding' element={<BiasPrompt prompt="wedding" onSubmit={handleSubmit} />}></Route>
          <Route path='/wedding-distr' element={<BiasDistribution distr="wedding" />}></Route>
          <Route path='/doctor' element={<BiasPrompt prompt="doctor" onSubmit={handleSubmit} />}></Route>
          <Route path='/doctor-distr' element={<BiasDistribution distr="doctor" />}></Route>
          <Route path='/ending' element={<Ending/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App