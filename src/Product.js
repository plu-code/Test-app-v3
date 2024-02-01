export default function Product(props){
    const thumbnail = props.thumbnail;
    const title = props.title;
    const description = props.description;
    const id = props.id;
    return (<div className="product" key={id}>
            <div className="image-div">    
            <a href={"/product/id:"+id} id={id}><img className="thumb" src={thumbnail}></img></a>
            </div>
            <div className="side-bar">
                <a href={"/product/id:"}><h2 className="product-name">
                {title}
                </h2></a>
                <h3 className="product-details">
                {description}
                </h3>
            </div>
        </div>)}