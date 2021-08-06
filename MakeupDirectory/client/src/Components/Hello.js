import React from "react";
import '../Home.css';

export default function Hello() {
    return (
        // <span style={{
        //     position: "fixed",
        //     left: 0,
        //     right: 0,
        //     top: "50%",
        //     marginTop: "-0.5rem",
        //     textAlign: "center",
        // }}>hello Wellcome to your Makeup Directory.Here you will be able to keep track of all you beauty and skincare products</span>
        <>
            <div className="home">
                <div className="headers">
                    <h1 className="main-header">MAKEUP DIRECTORY</h1>
                    <h4>No one wants to be using crusty old makeup on their beautiful face</h4>
                    <h4>But who can remember when to throw away their old products</h4>
                    <h4>Well we have made it easy for you</h4>
                </div>
                <div className="home-cards">
                    <div className="home-card">
                        <h5>Add Products </h5>
                        <p>head over to the "My Makeup" tab,</p>
                        <p>here you will be able see a list of all your makeup products</p>
                        <p>Click the add product button, you will then be promted to,</p>
                        <p>search for a product or enter a product</p>
                    </div>
                    <div className="home-card">
                        <h5>View Products </h5>
                        <p>Once you have sucessfully added a product it will display on</p>
                        <p>your makeup list.</p>
                        <p>Your list will be ordered with soonest to expire displaying at the top </p>
                    </div>
                    <div className="home-card">
                        <h5>Filter Products</h5>
                        <p>When you are viewing your list of makeup products you will be able </p>
                        <p>to filter the products based on category</p>
                        <p>Your products are also colored based on category</p>
                    </div>
                </div>
            </div>
        </>
    );
}