export default function Single(props){
    return ( 
        <div id="Single">
            <div id="single-left"></div>
            <div id="main">
                <h1>{props.title}</h1>
                <img src="" alt="" />
                <h3>{props.desc}</h3>
                <h3>{props.brand}</h3>
                <h3>{props.cat}</h3>
                <h3>{props.price}</h3>
                <h3>{props.rat}</h3>
                <h3>{props.inst}</h3>
                <a href="/"><button className="pagebtn">Go back</button></a>
            </div>
        </div>
     );
}
