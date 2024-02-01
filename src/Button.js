 const Button = (props) => {

    return ( 
        <button 
        key={props.i}
        className="pagebtn" 
        onClick={()=>{props.setPage(props.page)}}
        >{props.i}</button>
     );
} 
/* 
---Alternativna komponenta:---

function Button(props, {clicked}){
    let value = 1;
return (
    <button 
    key={props.i}
    className="pagebtn" 
    onClick={()=>{
        if (clicked) clicked(value);
    }}
    >{props.i}</button>
)
}

*/
export default Button;
