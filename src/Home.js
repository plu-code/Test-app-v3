import RenderProduct from "./RenderProduct";
export default function Home({current}){

    const products = []
    for (let i = current; i < current+10; i++){
        products.push(<RenderProduct current={current+i}  />)
    }
    return <div className="products">
        {products}
        </div>;
}    
