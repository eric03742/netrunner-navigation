import { defineConfig } from '@umijs/max';

export default defineConfig({
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
      title: '测试暗门',
    },
  ],
  npmClient: 'yarn',
});
