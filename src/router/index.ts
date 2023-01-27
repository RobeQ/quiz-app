import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MyQuizzes from '@/views/content/MyQuizzes/MyQuizzes/MyQuizzes.vue';
import MyProfile from '@/views/content/MyProfile/MyProfile.vue';
import QuizRules from '@/views/content/QuizRules/QuizRules.vue';
import QuizCreator from '@/views/content/MyQuizzes/QuizCreator/QuizCreator.vue';
import HelpView from '@/views/content/HelpView/HelpView.vue';
import PlayView from '@/views/content/PlayView/PlayView.vue';
import AdminView from '@/views/content/AdminView/AdminView.vue';

type HeaderIcon =
  | 'mdi-controller'
  | 'mdi-puzzle'
  | 'mdi-account-cog'
  | 'mdi-calendar-text-outline'
  | 'mdi-help'
  | 'mdi-shield-crown';

type HeaderRouteRecord = RouteRecordRaw & {
  icon: HeaderIcon;
};

export const headerRoutes: ReadonlyArray<HeaderRouteRecord> = [
  {
    path: '/',
    name: 'Play',
    component: PlayView,
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
    component: HelpView,
    icon: 'mdi-help',
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView,
    icon: 'mdi-shield-crown',
  },
];

const routes: ReadonlyArray<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: PlayView,
  },
  {
    path: '/contests/create',
    name: 'contest-creator',
    component: QuizCreator,
  },
  {
    path: '/contests/edit/:id',
    name: 'contest-edit',
    component: QuizCreator,
    props: true,
  },
  ...headerRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
