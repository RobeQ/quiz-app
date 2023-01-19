import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/content/HomeView/HomeView.vue';
import MyQuizzes from '../views/content/MyQuizzes/MyQuizzes.vue';
import MyProfile from '../views/content/MyProfile/MyProfile.vue';
import QuizRules from '../views/content/QuizRules/QuizRules.vue';
import QuizCreator from '../views/content/MyQuizzes/QuizCreator/QuizCreator.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/contests',
    name: 'contests',
    component: MyQuizzes,
  },
  {
    path: '/profile',
    name: 'profile',
    component: MyProfile,
  },
  {
    path: '/rules',
    name: 'rules',
    component: QuizRules,
  },
  {
    path: '/contests/create',
    name: 'contest-creator',
    component: QuizCreator,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
