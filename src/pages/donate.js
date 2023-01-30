import React from 'react';
import bag from "../images/bag.jpg";
import mug from "../images/mug.jpg";
import shirt from "../images/shirt.jpg";
import candle from "../images/candle.webp";


export default function Donate(){
    return(
        <><section class="content-section container">
            <h2 class="section-header">Donate</h2>

            <p>Donate for a good cause: buy cute products to save the turtles now!</p>
            <div class="flex-container">

                <div class="shop-item">
                    <span class="shop-item-title">BAG</span>
                    <a class="image-link" href="images/bag.jpg">
                        <img class="image-donate" src={bag} alt="Bag" />
                    </a>
                    <div>
                        <span class="shop-item-price">€19.99</span>
                        <button class="button shop-item-button" type="button">ADD TO CART</button>
                    </div>
                </div>
                <div class="shop-item">
                    <span class="shop-item-title">MUG</span>
                    <img class="image-donate" src={mug} alt="Mug" />
                    <div>
                        <span class="shop-item-price">€19.99</span>
                        <button class="button shop-item-button" type="button">ADD TO CART</button>
                    </div>
                </div>
                <div class="shop-item">
                    <span class="shop-item-title">SHIRT</span>
                    <img class="image-donate" src={shirt} alt="Shirt" />
                    <div>
                        <span class="shop-item-price">€19.99</span>
                        <button class="button shop-item-button" type="button">ADD TO CART</button>
                    </div>
                </div>
                <div class="shop-item">
                    <span class="shop-item-title">CANDLE</span>
                    <img class="image-donate" src={candle} alt="Candle" />
                    <div>
                        <span class="shop-item-price">€10.00</span>
                        <button class="button shop-item-button" type="button">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </section><section class="container content-section">
                <h1 class="section-header">CART</h1>
                <div>
                    <div class="cart-row">
                        <span class="cart-item cart-header cart-column">ITEM</span>
                        <span class="cart-price cart-header cart-column">PRICE</span>
                        <span class="cart-quantity cart-header cart-column">QUANTITY</span>
                    </div>

                    <div class="cart-items">
                    </div>

                </div>
                <div class="cart-total">
                    <strong class="cart-total-title">TOTAL</strong>
                    <span class="cart-total-price">€0.00</span>
                </div>
                <button class="button-primary button-purchase" type="button">PURCHASE</button>
            </section></>
    )
}