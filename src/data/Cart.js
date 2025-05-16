import { Products } from "./Products";

class Cart {
    constructor() {
        this.currency = "PKR";
        this.items = [];
    }

    addItem(productId, variantId, qty = 1) {
        const item = this.items.find(i => i.productId === productId && i.variantId === variantId);
        if (item) {
            item.qty += qty;
        } else {
            this.items.push({ productId, variantId, qty });
        }
        this.setLocal();
    }

    removeItem(productId, variantId) {
        this.items = this.items.filter(i => !(i.productId === productId && i.variantId === variantId));
        this.setLocal();
    }

    updateItem(productId, variantId, qty) {
        const item = this.items.find(i => i.productId === productId && i.variantId === variantId);
        if (item) {
            if (qty <= 0) {
                this.removeItem(productId, variantId);
            } else {
                item.qty = qty;
            }
        }
        this.setLocal();
    }

    setLocal() {
        localStorage.setItem("cart", JSON.stringify(this.getCart()));
    }

    getCartTotal() {
        let total = 0;
        this.items.forEach(({ productId, variantId, qty }) => {
            const product = Products[productId];
            const variant = product?.variants.find(v => v.id === variantId);
            if (variant) {
                total += variant.price * qty;
            }
        });
        return total;
    }

    getCartQuantity() {
        return this.items.reduce((sum, item) => sum + item.qty, 0);
    }

    getCart() {
        return {
            currency: this.currency,
            items: this.items
        };
    }

    setCart(cart) {
        this.currency = cart.currency;
        this.items = cart.items;
    }
}

export default Cart
