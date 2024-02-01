import { useState } from "react";
import Button from "./Button";

export default function Pagesbar(props, {clicked}){

    const [start, setStart ] = useState(props.start);
    const rows = []  
    for (let i = start; i < start+10; i++){
        rows.push( <Button clicked={clicked} setPage={props.setPage} i={i}/> )
    }

    return (<div className="pagesbar"> 
        <button className="pagebtn" id={start<=9 ? "backward-hide" : "backward"} onClick={()=>{ 
        setStart((prevStart) => (prevStart-10));
        }}>Backward</button>
        {rows}
        <button className="pagebtn" id="forward" onClick={()=> {setStart((prevStart) => (prevStart+10))}}>
            Foreward
            </button>
    </div>);
}