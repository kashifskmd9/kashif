import React from 'react';
import './App.css';
import Profile from './Profile';
import Resume from './Resume';
import {BrowserRouter,Route,Link} from 'react-router-dom';

  let App=()=>{
      
    return(

     
      <div className="entire">
        <BrowserRouter>
            <Route exact path="/"component={Profile} />
            <Route exact path= "/resume" component={Resume} />
        </BrowserRouter>

       </div>
    )
  }


export default App;