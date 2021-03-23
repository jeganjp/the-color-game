import React,{useState} from 'react';
import Level1bg from './Images/Level1/L1Bg.jpg';
import red from './Images/Level1/L1Red.jpg'
import green from './Images/Level1/L1green.jpg';
import blue from './Images/Level1/L1blue.jfif'
import Timer from './Timer';
import { Link } from 'react-router-dom';
import {useAlert} from 'react-alert';

const Level1 = () => {
    const [q1answer,setQ1Answer]=useState('');
    const [q2answer,setQ2Answer]=useState('');
    const [q3answer,setQ3Answer]=useState('');
    let answer=0;
    const alert=useAlert();
    const handleChange1=(e)=>{
        // console.log(e.target.value);
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
    if(q1answer==='red')
    {
        answer+=1;
    }
    if(q2answer==='green')
    {
        answer+=1;
    }
    if(q3answer==='blue')
    {
        answer+=1;
    }
    const finalAnswer=()=>{
        console.log(answer);
        if(answer!==3)
        {alert.show("Not qualified to next round You score is "+answer)}
        if(answer===3)
        {
            alert.show(<div>Click on Continue to next level<button><Link to='Level2'><span style={{color:'white'}}>Continue</span></Link></button></div>)
        }
        
    }
    return (
        <div style={{display:'flex',
        flexDirection:'column',
        justifyContents:'center',
        justifyItems:'center',
        alignItems:'center',
        backgroundImage:`url(${Level1bg})`,
        backgroundSize:'cover'
    }}>
                <h1 style={{fontWeight:'bolder',color:'white'}}>Guess the Color</h1>
                <Timer/>
                <div style={{padding:30,border:'solid',borderColor:'white'}}>
                <ul style={{color:'white'}}>
                <li type='1' style={{}}><img style={{}} src={red} alt='red' height={80} width={80}/>
                <input type='radio' value='red' name='question1' onChange={handleChange1} style={{height:20,width:20,margin:20}} /><span style={{fontSize:30,color:'white'}}>Red</span>
                <input type='radio' value='green' name='question1' onChange={handleChange1} style={{height:20,width:20,margin:20}}/><span style={{fontSize:30,color:'white'}}>Green</span>
                <input type='radio' value='blue' name='question1' onChange={handleChange1} style={{height:20,width:20,margin:20}}/><span style={{fontSize:30,color:'white'}}>Blue</span>    
                </li>
                <li type='1'>
                <img src={green} alt='green' height={80} width={80}/>
                <input type='radio' value='red' name='question2' onChange={handleChange2} style={{height:20,width:20,margin:20}} /><span style={{fontSize:30,color:'white'}}>Red</span>
                <input type='radio' value='green' name='question2' onChange={handleChange2} style={{height:20,width:20,margin:20}}/><span style={{fontSize:30,color:'white'}}>Green</span>
                <input type='radio' value='blue' name='question2' onChange={handleChange2} style={{height:20,width:20,margin:20}}/><span style={{fontSize:30,color:'white'}}>Blue</span>    
                </li>
                <li type='1'>
                <img style={{background:'white'}} src={blue} alt='blue' height={80} width={80}/>
                <input type='radio' value='red' name='question3' onChange={handleChange3} style={{height:20,width:20,margin:20}} /><span style={{fontSize:30,color:'white'}}>Red</span>
                <input type='radio' value='green' name='question3' onChange={handleChange3} style={{height:20,width:20,margin:20}}/><span style={{fontSize:30,color:'white'}}>Green</span>
                <input type='radio' value='blue' name='question3' onChange={handleChange3} style={{height:20,width:20,margin:20}}/><span style={{fontSize:30,color:'white'}}>Blue</span>
                </li>
                </ul>    
                </div>
                <button type='submit' onClick={finalAnswer}><span style={{color:'white'}}>Submit</span></button>
        </div>

    )
}

export default Level1
