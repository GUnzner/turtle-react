import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/currencyFormat";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
import { useTranslation } from 'react-i18next';

export function ShoppingCart({isOpen}){
    const { closeCart, cartItems, clearAll } = useShoppingCart()
    const { t } = useTranslation();
    //const cart = new Set(t('cart', { returnObjects: true }))

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                 <Offcanvas.Title> {t('Cart')}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                    <CartItem key={item.id} {...item}/>))}
                    <div className="ms-auto fw-bold fs-5">
                        {t('total')} {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)
                    )}
                    </div>
                </Stack>
                
                <button className="btn btn-primary position-relative bottom-0" 
                    onClick={() => clearAll()}> {t('checkout')}</button>
            </Offcanvas.Body>
           
        </Offcanvas>
    )
}