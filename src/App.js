import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



const App=()=> {

  const [progress, setProgress] = useState(0)
  
   const apikey= process.env.REACT_APP_API_KEY_NEWS

    return (
      <Router>
      <div>
        <Navbar/>
      <LoadingBar
      height={4}
        color='#f11946'
        progress={progress}
      />

            <Routes> 

                <Route exact path='/business' element={<News setProgress={setProgress}  key="business" pages={9} apikey={apikey}  country={"in"} colr={'danger'} category={"business"}/>}/>
                <Route exact path='/entertainment' element={<News setProgress={setProgress}  key="entertainment" pages={9} apikey={apikey}  colr={'success'} country={"in"} category={"entertainment"}/>}/>
                <Route exact path='/' element={<News setProgress={setProgress}  key="general" pages={9} apikey={apikey}  country={"in"} colr={'dark'} category={"general"}/>}/>
                <Route exact path='/health' element={<News setProgress={setProgress}  key="health" pages={9} apikey={apikey}  country={"in"}colr={'primary'} category={"health"}/>}/>
                <Route exact path='/science' element={<News setProgress={setProgress}  key="science" pages={9} apikey={apikey}  country={"in"}colr={'info'} category={"science"}/>}/>
                <Route exact path='/sports' element={<News setProgress={setProgress}  key="sports" pages={9} apikey={apikey}  country={"in"}colr={'warning'} category={"sports"}/>}/>
                <Route exact path='/technology' element={<News setProgress={setProgress}  key="technology" pages={9} apikey={apikey}  country={"in"}colr={'dark'} category={"technology"}/>}/>


            </Routes>
      </div>
      </Router>
    )
  
}

export default App;