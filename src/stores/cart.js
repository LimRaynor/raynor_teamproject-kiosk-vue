import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
    // 1. 상태 (장바구니 배열)
    const cartItems = ref([])

    // 2. 계산 (총 결제 금액)
    const totalPrice = computed(() => {
        return cartItems.value.reduce((sum, item) => sum + (item.price * item.qty), 0)
    })

    // 3. 기능 (장바구니 담기)
    const addToCart = (menu) => {
        // 이미 담긴 메뉴인지 확인
        const findItem = cartItems.value.find(item => item.id === menu.id)

        if (findItem) {
            // 이미 있으면 수량만 +1
            findItem.qty++
        } else {
            // 없으면 새로 추가 (수량 1개로 시작)
            cartItems.value.push({
                id: menu.id,
                name: menu.name,
                price: menu.price,
                qty: 1
            })
        }
    }

    // 4. 기능 (수량 변경 - 빼기)
    const decreaseQty = (menuId) => {
        const findIndex = cartItems.value.findIndex(item => item.id === menuId)

        if (findIndex !== -1) {
            const item = cartItems.value[findIndex]
            item.qty-- // 수량 감소

            // 0개가 되면 장바구니에서 삭제
            if (item.qty <= 0) {
                cartItems.value.splice(findIndex, 1)
            }
        }
    }

    return { cartItems, totalPrice, addToCart, decreaseQty }
})