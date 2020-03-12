import React from 'react';
import data from './Data.json';
import icon from './people.svg';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from './Resume';

let Profile=()=>{
    const profiles=data.profiles;
    // console.log(profiles[0].basics.name);
    
    return(
        <section className="parent">   
                
               {profiles.map((i,j)=>(
                   <div className="child" key={j}>
                       <BrowserRouter>
                      <Route exact path= "/resume" component={Resume}></Route>
                      </BrowserRouter>
                       
                       <img src={icon}alt="profile" style={{width: "50%"}}/>
                       <h3> {i.basics.name}</h3>
                       <hr></hr>
                       <a href={"mailto:"+i.basics.email}className="link">{i.basics.email}</a><br></br>
                       <a href={"mobile:"+i.basics.mobile}className="link">{i.basics.mobile}</a><br></br>
                       <hr></hr>
                       <Link to={{pathname:"/resume",index:{value:{j}}}} className="btn">view profile</Link>
                   </div>
               ))}
        </section>
        
        
    )
}
export default Profile;