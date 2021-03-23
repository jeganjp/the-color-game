import React,{useState} from 'react';
import Q1Red from './images/Level2/L2Q1Red.jfif';
import Q1Green from './images/Level2/L2Q1Green.jpg';
import Q1LightBlue from './images/Level2/L2Q1LightBlue.jpg';
import Q2Sad1 from './images/L2/L2Q2Sad.png';
import Q2Sad2 from './images/L2/L2Q2Sad2.jpg';
import Q2Happy from './images/L2/L2Q2Happy.png';
import Q3Angry1 from './images/L2/L2Q3angry.png';
import Q3Angry2 from './images/L2/L2Q3angry1.png';
import Q3Cry from './images/L2/L2Q3Cry.jpg';
import Timer from './Timer';
import { Link } from 'react-router-dom';
import level2bg from './images/Level2/Background/Level2bg.jpg';
import {useAlert} from 'react-alert';


const Level2 = () => {
    const [q1answer,setQ1Answer]=useState('');
    const [q2answer,setQ2Answer]=useState('');
    const [q3answer,setQ3Answer]=useState('');
    let answer=0;
    const alert=useAlert();
    const handleChange1=(e)=>{

        setQ1Answer(e.target.value)
    }
    const handleChange2=(e)=>{
        // console.log(e.target.value);
        setQ2Answer(e.target.value)
    }
    const handleChange3=(e)=>{
        // console.log(e.target.value);
        setQ3Answer(e.target.value)
    }
    if(q1answer==='true')
    {
        answer+=1;
    }
    if(q2answer==='true')
    {
        answer+=1;
    }
    if(q3answer==='true')
    {
        answer+=1;
    }
    const finalAnswer=()=>{
        console.log(answer);
        if(answer!==3)
        {alert.show("Not qualified to next round You score is "+answer)}
        if(answer===3)
        {
            alert.show(<div>Click on Continue to next level<button><Link to='Level3'><span style={{color:'white'}}>Continue</span></Link></button></div>)
        }
        
    }
    return (
        <div style={{display:'flex',
        flexDirection:'column',
        justifyContents:'center',
        justifyItems:'center',
        alignItems:'center',
        backgroundImage:`url(${level2bg})`,
        backgroundSize:'cover'
    }}>
                <h1 style={{fontWeight:'bolder',color:'black'}}>Guess the Odd Emoji</h1>
                <Timer/>
                <div style={{padding:30,border:'solid'}}>
                <ul>
                {/* Question1 */}
                <li type='1' style={{}}>
                    {/* <img style={{}} src={happy} alt='happy' height={100} width={100}/> */}
                <input type='radio' 
                value='false' 
                name='question1' 
                onChange={handleChange1} 
                style={{height:20,width:20,margin:20}} />
                <span style={{fontSize:30}}><img src={Q1Red} alt='Q1Red' height={100} width={100}/></span>
                <input type='radio' 
                value='true' 
                name='question1' 
                onChange={handleChange1} 
                style={{height:20,width:20,margin:20}}/>
            <span style={{fontSize:30}}><img src={Q1LightBlue} style={{}} alt='Q1LightBlue' height={100} width={100}/></span>
                <input type='radio'
                 value='false' 
                 name='question1' onChange={handleChange1} 
                 style={{height:20,width:20,margin:20}}/>
                 <span style={{fontSize:30}}><img style={{}} src={Q1Green} alt='Q1Green' height={100} width={100}/></span>    
                </li>
                {/* Question2 */}
                <li type='1'>
                {/* <img src={sad} alt='sad' height={100} width={100}/> */}
                <input type='radio'
                 value='true' 
                 name='question2' 
                 onChange={handleChange2} 
                 style={{height:20,width:20,margin:20}} />
                 <span style={{fontSize:30}}><img src={Q2Happy} alt='happy' height={100} width={100}/></span>
                <input type='radio'
                    value='false'
                    name='question2' 
                    onChange={handleChange2}
                    style={{height:20,width:20,margin:20}}/>
                    <span style={{fontSize:30}}><img style={{}} src={Q2Sad1} alt='happy' height={100} width={100}/></span>
                <input type='radio' 
                value='false' 
                name='question2' 
                onChange={handleChange2} 
                style={{height:20,width:20,margin:20}}/>
                <span style={{fontSize:30}}><img style={{}} src={Q2Sad2} alt='happy' height={100} width={100}/></span>    
                </li>
                {/* Question3 */}
                <li type='1'>
                {/* <img style={{background:'white'}} src={angry} alt='angry' height={100} width={100}/> */}
                <input type='radio' 
                value='false' 
                name='question3' 
                onChange={handleChange3} 
                style={{height:20,width:20,margin:20}} />
                <span style={{fontSize:30}}><img style={{}} src={Q3Angry1} alt='happy' height={100} width={100}/></span>
                <input type='radio' 
                value='true' 
                name='question3' 
                onChange={handleChange3} 
                style={{height:20,width:20,margin:20}}/>
                <span style={{fontSize:30}}><img style={{}} src={Q3Cry} alt='happy' height={100} width={100}/></span>
                <input type='radio'
                 value='false'
                  name='question3' 
                  onChange={handleChange3} 
                  style={{height:20,width:20,margin:20}}/>
                  <span style={{fontSize:30}}><img style={{}} src={Q3Angry2} alt='happy' height={100} width={100}/></span>
                </li>
                </ul>    
                </div>
                <button type='submit' onClick={finalAnswer}><span style={{color:'white'}}>Submit</span></button>
        </div>

    )
}

export default Level2;
