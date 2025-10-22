import { defineStore } from "pinia";

interface CartItem {
  id: number | string
  name: string
  price: number
  q: number
}

export const useCartStore = defineStore('cart',{
    state: () => ({
        cart: [] as CartItem[],
        showCart: false,
    }),

    getters: {
        count: (state) => state.cart.reduce((s, i) => s + i.q, 0),
        total: (state) => state.cart.reduce((s, i) => s + i.price * i.q, 0),
    },

    actions:{

        addToCart(product:any, q = 1) {
            const idx = this.cart.findIndex(i => i.id === product.id)
            if (idx > -1) {
                this.cart[idx].q += q
            } else {
                this.cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    q,
                })
            }
        },

        toggleCart() {
            this.showCart = !this.showCart
        },

        clearCart() {
            this.cart = [];
        },

        checkout() {
            if (this.cart.length === 0) {
                alert('購物車是空的');
                return
            }
            alert('模擬結帳：總計 NT$' + this.total.toFixed(0));
            this.clearCart();
        },

        incQ(i:number) { this.cart[i].q++ },

        decQ(i:number) {
            this.cart[i].q--;
            this.cart = this.cart.filter(item => item.q > 0);
        },

    }
})