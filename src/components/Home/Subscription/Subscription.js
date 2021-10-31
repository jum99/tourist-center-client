import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import "./Subscription.css";
const Subscription = () => {
    return (
        <div className="subscription-container d-flex justify-content-center align-items-center">
            <div className="text-center w-75">
                <h5 className="top-sub-text">JOIN WITH US</h5>
                <h1 className="news-text">Please Sign Up</h1>
                <p className="text-light">Sign Up To Know Our Latest News And Special Offers</p>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Add Your Email Address"
                        aria-label="Add Your Email Address"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-warning" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
};

export default Subscription;
