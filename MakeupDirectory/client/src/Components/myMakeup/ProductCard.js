import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export const ProductCard = ({ product, deleteAndSetProducts }) => {
    return (
        <Card>
            <CardBody>
                <h3>name</h3>
                <div>brand</div>
                <div>ImageLink</div>
                <div>Experation date</div>
                <br></br>
                {/* <button onClick={() => deleteAndSetPosts(post.id)}>Delete</button>
                <Link to={`/post/${post.id}`}><button>Details</button></Link>
                <Link to={`/post/edit/${post.id}`}><button>Edit</button></Link> */}
            </CardBody>
        </Card>
    )
};

export default ProductCard;