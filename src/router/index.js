import { createRouter, createWebHistory } from 'vue-router'
import DiningTypeView from '../views/DiningTypeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: DiningTypeView // 첫 화면을 우리가 만든 파일로 설정
        }
    ]
})

export default router