import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [], // 장바구니에 담긴 상품들
    }),
    getters: {
        totalQuantity: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: (state) => state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    },
    actions: {
        addToCart(product) {
            const existingItem = this.items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.items.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart(productId) {
            this.items = this.items.filter(item => item.id !== productId);
        },
        clearCart() {
            this.items = [];
        }
    }
});