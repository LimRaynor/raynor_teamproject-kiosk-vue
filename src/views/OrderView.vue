<template>
  <div class="kiosk-container">

    <div class="category-sidebar">
      <button @click="currentCategory = 'all'">전체</button>
      <button @click="currentCategory = 'burger'">버거</button>
      <button @click="currentCategory = 'side'">사이드</button>
      <button @click="currentCategory = 'drink'">음료</button>
    </div>

    <div class="menu-grid">
      <h2>메뉴 선택</h2>
      <div class="menu-list">
        <div
            v-for="menu in filteredMenuList"
            :key="menu.id"
            class="menu-card"
            @click="cartStore.addToCart(menu)"
        >
          <div class="menu-img">{{ menu.image }}</div>
          <h3>{{ menu.name }}</h3>
          <p>{{ menu.price.toLocaleString() }}원</p>
        </div>
      </div>
    </div>

    <div class="cart-section">
      <h2>내 주문 내역</h2>

      <div v-if="cartStore.cartItems.length === 0" class="empty-cart">
        장바구니가 비어있어요.
      </div>

      <ul class="cart-list">
        <li v-for="item in cartStore.cartItems" :key="item.id">
          <span>{{ item.name }}</span>
          <div class="qty-control">
            <button @click="cartStore.decreaseQty(item.id)">-</button>
            <span>{{ item.qty }}</span>
            <button @click="cartStore.addToCart(item)">+</button>
          </div>
          <span>{{ (item.price * item.qty).toLocaleString() }}원</span>
        </li>
      </ul>

      <div class="total-area">
        <h3>총 결제금액: {{ cartStore.totalPrice.toLocaleString() }}원</h3>
        <button class="pay-btn">결제하기</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import menuData from '@/assets/menu.json' // json 데이터 가져오기
import { useCartStore } from '@/stores/cart' // Pinia 스토어 가져오기

const cartStore = useCartStore() // 스토어 사용 시작
const currentCategory = ref('all') // 현재 선택된 카테고리

// 선택된 카테고리에 따라 메뉴 필터링 (Computed)
const filteredMenuList = computed(() => {
  if (currentCategory.value === 'all') {
    return menuData
  }
  return menuData.filter(item => item.category === currentCategory.value)
})
</script>

<style scoped>
/* 간단한 레이아웃 스타일 */
.kiosk-container {
  display: flex;
  height: 100vh;
}

.category-sidebar {
  width: 15%;
  background-color: #333;
  display: flex;
  flex-direction: column;
}
.category-sidebar button {
  padding: 20px;
  font-size: 18px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}
.category-sidebar button:hover { background-color: #555; }

.menu-grid {
  width: 60%;
  padding: 20px;
  background-color: #f9f9f9;
}
.menu-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 한 줄에 3개씩 */
  gap: 15px;
}
.menu-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.1s;
}
.menu-card:active { transform: scale(0.95); }
.menu-img { font-size: 50px; }

.cart-section {
  width: 25%;
  background-color: #fff;
  border-left: 2px solid #ddd;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.cart-list {
  flex: 1; /* 남은 공간 차지 */
  list-style: none;
  padding: 0;
  overflow-y: auto;
}
.cart-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
.qty-control button {
  width: 25px;
  height: 25px;
}
.total-area {
  border-top: 2px solid #333;
  padding-top: 20px;
}
.pay-btn {
  width: 100%;
  padding: 15px;
  background-color: #ff9800;
  color: white;
  border: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>