import React from 'react';
// import bag from "../images/bag.jpg";
// import mug from "../images/mug.jpg";
// import shirt from "../images/shirt.jpg";
// import candle from "../images/candle.webp";
import storeItems from "../data/items.json";
import {Col, Row} from "react-bootstrap";
import { StoreItem } from '../components/StoreItems';


export default function Donate(){
    return(
        <><section className="content-section container">
            <h2 className="section-header">Donate</h2>

            <p>Donate for a good cause: buy cute products to save the turtles now!</p>
            <div className="flex-container">
            <Row md={2} xs={1} lg={4} className="g-3">
                {storeItems.map(item => (
                    <Col key={item.id} ><StoreItem className="p-3" {...item} /></Col>
                ))}
                
            </Row>
            </div>   
            </section></>
    )
}