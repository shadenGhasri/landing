import { useState } from "react";

const TextMovable = ({textData}) => {

    const randomColor = ()=>{
        const r = Math.floor(Math.random()*255+1)
        const g = Math.floor(Math.random()*255+1)
        const b = Math.floor(Math.random()*255+1)
        return    `rgb(${r},${g},${b})`
    }

    return (<>
        <p className="animate-text" style={{color:randomColor()}}>{ textData}</p>
    </>);
}
 
export default TextMovable;