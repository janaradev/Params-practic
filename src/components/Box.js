import React from 'react';
import Hero from "./Hero";

const Box = () => {
    return (
        <div className="container">
           <div className="boxes">
               <Hero text={"About"} sub={"click"} />
               <Hero text={"home"} sub={"1123"}/>
               <Hero text={"About you"} sub={"gfdzsA"}/>
               <Hero text={"contact"} sub={123}/>
           </div>
        </div>
    );
};


export default Box;