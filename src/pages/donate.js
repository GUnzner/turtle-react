import React from 'react';
// import bag from "../images/bag.jpg";
// import mug from "../images/mug.jpg";
// import shirt from "../images/shirt.jpg";
// import candle from "../images/candle.webp";
import storeItems from "../data/items.json";
import {Col, Row} from "react-bootstrap";
import { StoreItem } from '../components/StoreItems';
import { useTranslation } from 'react-i18next';



export default function Donate(){
    const { t } = useTranslation();
    return(
        <><section className="content-section container">
            <h2 className="headline">{t('Donate')}</h2>

            <p>{t('Donate-text')}</p>
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