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
                    <h1>MAKEUP DIRECTORY</h1>
                    <h4>No one wants to be using crusty old makeup on their beautiful face</h4>
                    <h4>But who can remember when to throw away their old products</h4>
                    <h4>Well we have made it easy for you</h4>
                </div>
                <div className="home-cards">
                    <div className="home-card">
                        <h5>Step 1 </h5>
                        <p>head over to the "My Makeup" tab,</p>
                        <p>here you will be able see a list of all your makeup products</p>
                    </div>
                    <div className="home-card">
                        <h5>Step 2 </h5>
                        <p>Click the "Add Product" button to add new makeup to your list</p>
                        <p>you can then select to search for a product or enter a product manualy</p>
                        <p>Once you save a product it will be added to your list</p>
                    </div>
                    <div className="home-card">
                        <h5>Products</h5>
                        <p>When you are viewing your list of makeup products you will be able </p>
                        <p>to filter the products based on category</p>
                    </div>
                </div>
            </div>
        </>
    );
}