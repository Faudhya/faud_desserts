import { Card, Button, Col } from "react-bootstrap";
import { useEffect } from "react";
import Productlist from "../products.json";
import { useDispatch } from "react-redux/es/exports";
import { update } from "../features/productSlice";

function Products() {
    const dispatch = useDispatch();

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

    const productcard = Productlist.map((product) => {
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
        <div class="container d-flex mt-4">
            <div class="row">{productcard}</div>
        </div>
    );
}

export default Products;
