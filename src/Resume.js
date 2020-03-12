import React from 'react';
import data from './Data.json'; 
import icon from './people.svg';


let Resume=(props)=>{
    let info = Object.values(props.location.index.value);
    let person=data.profiles[info];
    console.log(info);
    return(
        <div className='parent'>
            <div className='child'>
                <img src={icon}alt="profile" style={{width: "50%"}}/>
                <h3>{ person.basics.name}</h3>
                <h3>{ person.basics.email}</h3>
                <h3>{ person.basics.mobile}</h3>
            </div>
            <div className='child2'>
                <h3>Educational Qualifications</h3>
                <hr></hr>
                {person.education.map((i,j)=>(
                    <div key={j}>
                        <h4>{i.degree}</h4>
                        <ul>
                            <li>{i.percentage}</li>
                            <li>{i.institute}</li>
                        </ul>
                    </div>
                ))}
                <h3>Skills</h3>     
                <hr></hr>
                {person.Skills.map((x,y)=>(
                    <div>
                        <h4>{x.type}</h4>
                        {x.values.map((k,l)=>(
                            <div className="skills">
                                <span>{k}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Resume;