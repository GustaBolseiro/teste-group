import { Buttons } from "../Components/Buttons";

const ProductCard = ({products}) => {
    return (
        <div>
            <h1>Produtos</h1>
            <ul className="flex flex-col items-center">
                {products.map(products =>
                  <div>
                    <h3>{products.name}</h3>
                    <h3>R$ {products.price}</h3>
                    <img src={products.image} alt="pao" className="w-20 h-20"/>
                  </div>
                )}
            </ul>
            <Buttons/>
        </div>
    );
};

export default ProductCard;