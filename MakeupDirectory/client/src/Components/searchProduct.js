import { Switch, Route, Redirect } from "react-router-dom";
import ProductSearch from "./myMakeup/SearchForProduct";
import ProductList from "./myMakeup/ProductList";
import './ApplicationViews.css';

export const ProductSearchview = () => {

    return (
        <>
            <main id="search-view">


                <Route path="/usersProducts/create/search" exact>
                    <ProductSearch />
                </Route>


                <Route path="/usersProducts/myproducts" exact>
                    <ProductList />
                </Route>

            </main>
        </>
    );
};