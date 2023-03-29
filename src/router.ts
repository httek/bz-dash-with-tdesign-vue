import {createRouter, createWebHistory, RouteRecord} from "vue-router";

const routes: RouteRecord[] = [];

const router = createRouter({
	history: createWebHistory(), routes
})

router.beforeEach(() => {
})
export default router