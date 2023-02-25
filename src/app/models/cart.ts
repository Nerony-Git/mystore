import CartProduct from "./cart-product";

type Cart = {
    items: { [id: number]: CartProduct } | null,
    totalCartPrice: number
};

export default Cart;