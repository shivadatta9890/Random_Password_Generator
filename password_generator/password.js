import React, { useState } from 'react';
import usePassword from './custom_hook/usepassword';
import './style.css';
const Password = () => {
    const [length,setLength] = useState(1);
    const [pass,setPass] = useState(false);
    const [checkboxesData,setCheckboxesData] = useState([
        {title:"Include UpperCase Letters", state:false},
        {title:"Include LowerCase Letters", state:false},
        {title:"Include Numbers", state:false},
        {title:"Include Symbols", state:false},
    ]);
    const handlechange = (i)=>{
        let updatedCheckbox = [...checkboxesData];
        updatedCheckbox[i].state = !updatedCheckbox[i].state;
        setCheckboxesData(updatedCheckbox);
    }
    const {password,error,generatepassword} = usePassword();

    const handleCopy = ()=>{
        navigator.clipboard.writeText(password);
        setPass(true);

        setTimeout(()=>{
            setPass(false);
        },2000);
    }
  return (
    <div className='body'>
    {/* <h1>shivadatta</h1> */}
    <div className="container">
        {/* passworda nd copy */}
        {
            password && (<div className="header">
            <div>{password}</div>
            <button className="copyBtn" onClick={()=> handleCopy()}>
                {
                    pass ? "copied" : "copy"
                }
            </button>
        </div>)
        }
        
        {/* character length */}
        <div className="charlength">
            <span>
                <label>Character Length</label>
            <label>{length}</label>
            </span>
            <input type="range"
            min="1"
            max="20"
            value={length}
            onChange={(e)=> setLength(e.target.value)}
            />
        </div>
        {/* checkboxes */}
        <div className="checkboxes">
            {
                checkboxesData.map((checkbox,index)=>{
                    return <div key={index}>
                        <input type="checkbox" checked={checkbox.state} onChange={()=> handlechange(index)} />
                        <label>{checkbox.title}</label>
                    </div>
                })
            }
        </div>
        {
            error && <div className="error">{error}</div>
        }
        {/* generate btn */}
        <button className="generate" onClick={()=> generatepassword(checkboxesData,length)}>generate password</button>
    </div>
    </div>
  )
}

export default Password;