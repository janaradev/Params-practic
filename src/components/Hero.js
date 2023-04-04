import React from 'react';

const Hero = ({text,sub}) => {
    return (
        <div className="container">
            <div className="hero">
                <h1 style={{
                    padding:"20px",
                    color:"white",
                    textAlign:"center"
                }}>{text}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae distinctio iste, laboriosam nostrum perferendis velit. Eius nobis perspiciatis quod similique!</p>
                <button>{sub}</button>
            </div>
        </div>
    );
};
export default Hero;