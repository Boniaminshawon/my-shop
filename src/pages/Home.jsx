import Product from "../component/product";
import ProductsContainer from "../component/ProductsContainer";


const Home = () => {
    return (
        <div className=" min-h-screen">
      <Product></Product>
      <ProductsContainer></ProductsContainer>
        </div>
    );
};

export default Home;