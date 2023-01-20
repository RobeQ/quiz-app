import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/content/HomeView/HomeView.vue';
import MyQuizzes from '../views/content/MyQuizzes/MyQuizzes.vue';
import MyProfile from '../views/content/MyProfile/MyProfile.vue';
import QuizRules from '../views/content/QuizRules/QuizRules.vue';
import QuizCreator from '../views/content/MyQuizzes/QuizCreator/QuizCreator.vue';

type HeaderIcon =
  | 'mdi-controller'
  | 'mdi-puzzle'
  | 'mdi-account-cog'
  | 'mdi-calendar-text-outline'
  | 'mdi-help';

type HeaderRouteRecord = RouteRecordRaw & {
  icon: HeaderIcon;
};

export const headerRoutes: ReadonlyArray<HeaderRouteRecord> = [
  {
    path: '/play',
    name: 'Play',
    component: MyQuizzes,
    icon: 'mdi-controller',
  },
  {
    path: '/contests',
    name: 'My Quizzes',
    component: MyQuizzes,
    icon: 'mdi-puzzle',
  },
  {
    path: '/profile',
    name: 'My Profile',
    component: MyProfile,
    icon: 'mdi-account-cog',
  },
  {
    path: '/rules',
    name: 'Rules',
    component: QuizRules,
    icon: 'mdi-calendar-text-outline',
  },
  {
    path: '/help',
    name: 'Help',
    component: QuizRules,
    icon: 'mdi-help',
  },
];

const routes: ReadonlyArray<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/contests/create',
    name: 'contest-creator',
    component: QuizCreator,
  },
  ...headerRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
