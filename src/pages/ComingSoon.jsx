import { Card, Button, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Productlist from "../products.json";
import { useDispatch } from "react-redux/es/exports";
import { update } from "../features/productSlice";
import axios from "axios";
// import React, { useState } from "react";

function ComingSoon() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    // const [count, setCount] = useState(1);

    const getList = async () => {
        try {
            let data = await axios.get("http://localhost:2000/products");
            setProducts(data.data);
        } catch (error) {}
    };

    useEffect(() => {
        getList();
    }, []);

    const updateCart = (param) => {
        // setCount((previousCount) => previousCount++);
        console.log(param);
        let cart = {
            id: param.id,
            productName: param.productName,
            productImage: param.productImage,
            price: param.price,
            // qty: count,
        };
        let method = "ADD";

        dispatch(update({ cart, method }));
    };

    const productcard = products.map((product) => {
        return (
            <Col md={4} className="mb-3">
                <Card style={{ width: "300px" }} className="card-product">
                    <Card.Img
                        variant="top"
                        src={product.productImage}
                        className="product-card-img"
                    />
                    <Card.Body className="card-info">
                        <Card.Title>
                            <b>{product.productName}</b>
                        </Card.Title>
                        <Card.Text>Rp.{product.price}.-</Card.Text>
                        <Button
                            className="card-button"
                            variant="success"
                            onClick={() => updateCart(product)}
                        >
                            Add to Cart
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    });

    return (
        <div class="container d-flex mt-4 comingsoon-container">
            <div class="row">{productcard}</div>
        </div>
    );
}

export default ComingSoon;
