import { useShoppingCart } from "../context/ShoppingCartContext";
//import storeItems from "../data/items.json";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/currencyFormat";
import { useTranslation } from 'react-i18next';


export function CartItem({ id, quantity }) {
    const { removeFromCart } = useShoppingCart()
    const { t } = useTranslation();
    const cart = new Set(t('cart', { returnObjects: true }))
    const item = Array.from(cart).find(i => i.id === id)
    if(item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{width: "125 px", height: "75px", objectFit: "cover"}} />
            <div className="me-auto">
                <div>
                    {item.name}{quantity > 1 && 
                    <span className="text-muted" style={{fontSize: ".65rem"}}>{quantity}x</span>}
                </div>
                <div className="text-muted" style={{fontSize: ".75rem"}}>{formatCurrency(item.price)}</div>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}