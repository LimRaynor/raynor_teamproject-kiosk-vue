<script setup>
</script>

<template>

  <div class="상품선택">
    <header class="header">
      <div class="광고">
        <h2>자사 광고</h2>
      </div>
    </header>

    <main class="main">

      <section class="menu-section">
        <aside class="목록">
          <ul>
            <button class="footer-btn">목록</button>
            <button class="footer-btn">목록</button>
            <button class="footer-btn">목록</button>
            <button class="footer-btn">목록</button>
            <button class="footer-btn">목록</button>
            <button class="footer-btn">목록</button>
            <button class="footer-btn">목록</button>
          </ul>
        </aside>

        <div class="product-grid-container">
          <div class="product-grid">
            <div>
              <div class="product-img">상품</div>
              <div class="product-info">메뉴명 / 가격</div>
            </div>
            <div>
              <div class="product-img">상품</div>
              <div class="product-info">메뉴명 / 가격</div>
            </div>
            <div>
              <div class="product-img">상품</div>
              <div class="product-info">메뉴명 / 가격</div>
            </div>
            <div>
              <div class="product-img">상품</div>
              <div class="product-info">메뉴명 / 가격</div>
            </div>
            <div>
              <div class="product-img">상품</div>
              <div class="product-info">메뉴명 / 가격</div>
            </div>
            <div>
              <div class="product-img">상품</div>
              <div class="product-info">메뉴명 / 가격</div>
            </div>
            <div>
              <div class="product-img">상품</div>
              <div class="product-info">메뉴명 / 가격</div>
            </div>
            <div>
              <div class="product-img">상품</div>
              <div class="product-info">메뉴명 / 가격</div>
            </div>
            <div>
              <div class="product-img">상품</div>
              <div class="product-info">메뉴명 / 가격</div>
            </div>
            <div>
              <div class="product-img">상품</div>
              <div class="product-info">메뉴명 / 가격</div>
            </div>
            <div>
              <div class="product-img">상품</div>
              <div class="product-info">메뉴명 / 가격</div>
            </div>
            <div>
              <div class="product-img">상품</div>
              <div class="product-info">메뉴명 / 가격</div>
            </div>


          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <button class="footer-btn">뒤로가기</button>
      <button class="footer-btn">장바구니</button>
      <button class="footer-btn">결제하기</button>
    </footer>
  </div>
</template>


<style scoped>
.상품선택 {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #4A7C52;
  padding: 20px;
  box-sizing: border-box;
  font-weight: bold;
}


.header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}


.main {
  flex: 0.5;
  background-color: #CC7A50;
  padding: 20px;
  display: flex;
  overflow-y: auto;
}


.광고 {
  width: 100%;
  height: 100%;
  background-color: #C3F2E8;
  display: flex;
  font-size: 20px;
  justify-content: center;
}


.menu-section {
  flex: 1;
  display: flex;
  gap: 20px;
}


.목록 {
  width: 100px;
  background-color: #DDD;
  display: flex;
  align-items: center;
  font-weight: bold;
  overflow-y: auto;

}

.목록 ul {
  list-style: none;
  padding: 0;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
}


.product-grid-container {
  flex: 1;
  background-color: #E0E0E0;
  padding: 20px;
  overflow-y: auto;

}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  overflow-y: auto;

}


.product-img {
  width: 80px;
  height: 100px;
  background-color: #F8F4A6;
  border-radius: 40%;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  justify-content: center;


}

.product-info {
  background-color: #f31fbf;
  font-size: 10px;
  width: 100%;
  text-align: center;
}


.footer-btn {
  background-color: #e9e9e9;
  border: none;
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
}

.footer {
  display: flex;
  justify-content: space-between;
}
</style>