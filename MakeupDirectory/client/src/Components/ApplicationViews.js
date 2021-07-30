import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import ProductList from "./myMakeup/ProductList";
import ProductForm from "./myMakeup/ProductForm";
import { ProductDetails } from "./myMakeup/ProductDetails";
import NoteForm from "./Notes/NoteForm";


export default function ApplicationViews({ isLoggedIn }) {

    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
                </Route>

                <Route path="/usersProducts/myproducts" exact>
                    <ProductList />
                </Route>

                <Route path="/usersProducts/create" exact>
                    <ProductForm />
                </Route>
                <Route path="/usersProducts/:productId(\d+)" exact>
                    <ProductDetails />
                </Route>

                <Route path="/usersProducts/:productId(\d+)/createNote" exact>
                    <NoteForm />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>

            </Switch>
        </main>
    );
};
