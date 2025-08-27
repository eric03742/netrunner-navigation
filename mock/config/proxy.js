/*
 * @Description: proxy 本地开发代理
 */
const target = 'https://k8stest.cscec3b-iti.com/';
const proxy = {
  development: {
    '/g3-ctop-web': {
      // 注意路径改为自己服务端的路径，一般为工程管理中“你的工程名称-web”
      target,
      changeOrigin: true,
      secure: false,
    },
    '/api': {
      // 注册登录权限等相关接口
      target,
      changeOrigin: true,
      secure: false,
    },
    '/tg-user': {
      // tg-开头的均为UC相关接口
      target,
      changeOrigin: true,
      secure: false,
    },
    '/tg-application': {
      target,
      changeOrigin: true,
      secure: false,
    },
    '/tg-tenant': {
      target,
      changeOrigin: true,
      secure: false,
    },
    '/tg-workflow': {
      target,
      changeOrigin: true,
      secure: false,
    },
    '/g3-workflow-web': {
      // 奥哲审批流组件
      target,
      changeOrigin: true,
      secure: false,
    },
    '/g3-designer-web': {
      // 星磐相关接口
      target,
      changeOrigin: true,
      secure: false,
    },
    '/g3-team-web': {
      // 工程管理相关接口，理论上项目不需要
      target,
      changeOrigin: true,
      secure: false,
    },
    '/g3-file-web': {
      // oss存储相关接口
      target,
      changeOrigin: true,
      secure: false,
    },
    '/g3-devsupport-web': {
      // 星磐相关接口
      target,
      changeOrigin: true,
      secure: false,
    },
    '/g3-msg-web': {
      // 待办组件相关接口
      target,
      changeOrigin: true,
      secure: false,
    },
    '/g3-safety-web': {
      // uc内安全相关接口
      target,
      changeOrigin: true,
      secure: false,
    },
    // '/g3-org-web': {
    //   // 六统一适配层接口
    //   target,
    //   changeOrigin: true,
    //   secure: false,
    // },
  },
};

export default proxy;
