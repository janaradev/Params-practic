import React, {useState} from 'react';

const Header = () => {
    const [count,setCount] = useState(0)
    const [status,setStatus] = useState(false)
    const [status2,setStatus2] = useState(false)
    return (
        <div id="header">
        <div className="container">
            <div className="header">
            <h1 style={{
                margin:"20px"
            }}>{count}</h1>
            <button onClick={()=> {
                setCount(count + 5)
                setStatus( true)

            }} style={{
                width:"100px",
                height:"50px",
                borderRadius:"10px",
                background:status === true ? "red" : "blue",
                cursor:"pointer",
                color:"white"
            }}>Add</button>
            <button onClick={()=> {
                setCount(count -5)
                setStatus2(true)
                setStatus(false)
            }} style={{
                width:"100px",
                height:"50px",
                borderRadius:"10px",
                background:status2 === true ? "purple" : "red",
                cursor:"pointer",
                color:"white",

            }}>Delete</button>
            <button onClick={()=> setCount(0)} style={{
                width:"100px",
                height:"50px",
                borderRadius:"10px",
                background:"green",
                cursor:"pointer",
                color:"white"
            }}>Reset</button>
        </div>
        </div>
        </div>
    );
};

export default Header;