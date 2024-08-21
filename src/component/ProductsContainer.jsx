import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";


const ProductsContainer = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {

        const getData = async () => {
            const { data } = await axios('http://localhost:5000/products')
            setProducts(data);

        }
        getData()
    }, []);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    products.map(product => <div key={product.id}>

                        <div className="border shadow-xl">


                            <img className="md:h-[310px] h-[225px] w-full" src={product.productImage} alt="" />

                            <div className="p-4 space-y-3 bg-[#f3e4e4]">
                              
                                    <p className="text-2xl font-bold text-[#b71c1c]">{product.productName}</p>
                              
                               

                                <div className="flex justify-between">

                                    <p className="text-[#f9aa4a] text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-xl ">Category: </span> {product.category}</p>


                                    <p className="text-[#fdac49] text-xl font-medium font-secondary flex items-center"> <FaRegStarHalfStroke /><span className="font-semibold text-[#2C4549] text-xl ml-2"></span > {product.ratings} </p>
                                </div>
                                <p className="font-semibold text-[#2C4549] text-xl ">Price: <span className="text-[#b71c1c]">{product.price} $</span></p>

                              <p className="font-semibold text-[#2C4549] text-xl ">Description: <span className="text-base text-black">{product.description}</span></p>
                            </div>

                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default ProductsContainer;