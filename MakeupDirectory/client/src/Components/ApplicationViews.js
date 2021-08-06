import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import ProductList from "./myMakeup/ProductList";
import ProductForm from "./myMakeup/ProductForm";
import { ProductDetails } from "./myMakeup/ProductDetails";
import NoteForm from "./Notes/NoteForm";
import EditProduct from "./myMakeup/ProductUpdate";
import EditNote from "./Notes/NoteUpdate";
import ProductSearch from "./myMakeup/SearchForProduct";
import ProductAdd from "./myMakeup/ProductAdd";
import ProductSearchForm from "./myMakeup/ProductSearchForm";
import './ApplicationViews.css';
import { ProductSearchview } from "./searchProduct";

export default function ApplicationViews({ isLoggedIn }) {

    return (
        <>

            <main id="no-cover">
                <Switch>
                    <Route path="/" exact>
                        {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
                    </Route>

                    <Route path="/usersProducts/myproducts" exact>
                        <ProductSearchview />
                    </Route>

                    <Route path="/usersProducts/create" exact>
                        <ProductAdd />
                    </Route>

                    <Route path="/usersProducts/create/manual" exact>
                        <ProductForm />
                    </Route>

                    <Route path="/usersProducts/create/search" exact>
                        <ProductSearchview />
                    </Route>

                    <Route path="/usersProducts/create/search/form" exact>
                        <ProductSearchForm />
                    </Route>

                    <Route path="/usersProducts/:productId(\d+)" exact>
                        <ProductDetails />
                    </Route>

                    <Route path="/usersProducts/:productId(\d+)/edit" exact>
                        <EditProduct />
                    </Route>

                    <Route path="/usersProducts/:productId(\d+)/createNote" exact>
                        <NoteForm />
                    </Route>

                    <Route path="/usersProducts/:productId(\d+)/notes/:noteId(\d+)/edit" exact>
                        <EditNote />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/register">
                        <Register />
                    </Route>

                </Switch>
            </main>
            {/* <footer>
                <h4>Hello</h4>
            </footer> */}
        </>
    );
};
