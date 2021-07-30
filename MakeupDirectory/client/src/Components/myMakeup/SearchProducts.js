// import React, { useEffect, useState } from "react";
// import { ProductSearchCard } from "./ProductSearchCard"
// import { eyeshadows, foundationList, searchForProduct } from "../../modules/apiManager";

// const ProductSearch = () => {
//     const [products, setProducts] = useState([]);

//     const getListOfProducts = () => {
//         foundationList().then(products => setProducts(products));
//     }
//     const getListOfeyeshadow = () => {
//         eyeshadows().then(products => setProducts(products))
//     }
//     console.log(getListOfeyeshadow)
//     const handleinput = (e) => {
//         let enteredValue = e.target.value;
//         searchForProduct(enteredValue).then(products => setProducts(products));
//     }

//     useEffect(() => {
//         getListOfProducts();
//     }, []);


//     return (
//         <>
//             <div>
//                 <input type="text" placeholder="search for product"  ></input><button >Search</button>
//             </div>

//             <div className="container">
//                 <div className="row justify-content-center">
//                     {products.map((product) => (
//                         <ProductSearchCard product={product} key={product.id} />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ProductSearch;
