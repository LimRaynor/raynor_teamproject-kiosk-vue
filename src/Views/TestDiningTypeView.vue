<template>
  <div class="page-container">

<!-- 상단부 광고판 -->
    <header class="brand-header">
      <h1>🍔 BURGER KINGDOM</h1>
    </header>

<!--  중앙 식사or포장 표기란  -->
    <main class="main-content">
      <div class="selection-container">
        <button class="select-card" @click="selectDining('매장식사')">
          <div class="icon">🏠</div>
          <div class="label">매장 식사</div>
          <div class="sub-label">table</div>
        </button>

        <button class="select-card" @click="selectDining('포장하기')">
          <div class="icon">🎁</div>
          <div class="label">포장 하기</div>
          <div class="sub-label">take-out</div>
        </button>
      </div>
    </main>

    <!-- 화면 최하단 박스 만들기 -->
    <footer class="footer-area">
      <div class="ad-box">
        신메뉴 출시 기념!
      </div>
    </footer>
  </div>
</template>

<script setup>

/* 라우터 기능 사용 준비*/
import { useRouter } from 'vue-router'

/*
 라우터 객체 생성
* push 주소바꾸기 , back 기능 사용할 인스턴스 생성
* */
const router = useRouter()

const selectDining = (type) => {
  console.log(`선택됨: ${type}`)
  alert(`${type === 'dine-in' ? '매장식사' : '포장하기'}를 선택하셨습니다. (다음 페이지 이동 예정)`)
  // 나중에는 여기에 router.push('/menu') 등을 넣어서 이동시킵니다.
}
</script>

<style scoped>
/* 전체 레이아웃  크기조정 */
.page-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f8f8f8;
  font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
}

/* 헤더 */
.brand-header {
  background-color: #d32f2f; /* 빨간색 포인트 */
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 800;
  box-shadow: 0 4px 6px rgba(236, 21, 21, 0.1);
}

/* 메인 영역 */
.main-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.selection-container {
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 800px;
  height: 400px;
}

/* 버튼 디자인 */
.select-card {
  flex: 1;
  background: red;
  border: 3px solid #2b1a1a;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

/*
이건 뭘 하는건지 색을 바꿔봐도 모르겠음
.select-card:hover {
  border-color: #9fdb54;
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(255, 45, 45, 0.2);


select-card:active {
  transform: scale(!*0.95*! 2);
*/

.icon { font-size: 5rem; margin-bottom: 20px; }
.label { font-size: 2.2rem; font-weight: bold; color: rgb(5, 5, 5); margin-bottom: 5px; }
.sub-label { font-size: 1.2rem; color: #ecff05; }

/* footer 최하단 화면창 */
.footer-area {
  padding: 20px;
  background: #cf3535;
  color: #ffff51;
  text-align: center;
  font-size: 1.2rem;
}
</style>