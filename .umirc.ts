import { defineConfig } from '@umijs/max';

export default defineConfig({
  title: '测试暗门',
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes: [
    {
      path: '/',
      exact: true,
      component: '@/pages/Home',
    },
  ],
  npmClient: 'yarn',
});
