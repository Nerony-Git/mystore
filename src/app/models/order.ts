import Cart from "./cart";

type Order = {
    cart: Cart,
    name: string,
    address: string,
    creditCard: string
};

export default Order;
