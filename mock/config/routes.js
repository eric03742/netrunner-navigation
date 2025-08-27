const routes = [
  { path: '/warn', exact: true, component: '@/pages/Warn' },
  {
    path: '/approveLanding',
    component: '@/layouts/LandingLayout',
    routes: [{ path: '/approveLanding', exact: true, component: '@/pages/ApproveLanding' }],
  },
  {
    path: '/file-preview',
    component: '@/layouts/LandingLayout',
    routes: [{ path: '/file-preview/:id', exact: true, component: '@/pages/FilePreview' }],
  },
  {
    path: '/admin',
    component: '@/layouts/AdminLayout',
    routes: [
      {
        path: '/admin/portal',
        component: '@/pages/Admin/Portal',
      },
      {
        path: '/admin/competition',
        component: '@/pages/Admin/Competition',
      },
      {
        path: '/admin/forefront',
        component: '@/pages/Admin/Forefront',
      },
      {
        path: '/admin/topic',
        component: '@/pages/Admin/Topic',
      },
      {
        path: '/admin/operation',
        component: '@/pages/Admin/Operation',
      },
      {
        path: '/admin/search',
        component: '@/pages/Admin/Search',
      },
      {
        path: '/admin/workbench',
        component: '@/pages/Admin/Workbench',
      },
      {
        path: '/admin/workbench/collection',
        component: '@/pages/Admin/Workbench/Collection',
      },
      {
        path: '/admin/workbench/collection/content',
        component: '@/pages/Admin/Workbench/Collection/Content',
      },
      {
        path: '/admin/message-list',
        component: '@/pages/Admin/MessageList',
      },
      {
        path: '/admin/createCollect',
        component: '@/pages/Admin/CreateCollect/List',
        routes: [
          {
            path: '/admin/createCollect/detail/:id',
            component: '@/pages/Admin/CreateCollect/Detail',
          },
          {
            path: '/admin/createCollect/add',
            component: '@/pages/Admin/CreateCollect/Add',
          },
          {
            path: '/admin/createCollect/edit/:id',
            component: '@/pages/Admin/CreateCollect/Edit',
          },
          {
            path: '/admin/createCollect/change/:id',
            component: '@/pages/Admin/CreateCollect/Change',
          },
          {
            path: '/admin/createCollect/change-detail/:id',
            component: '@/pages/Admin/CreateCollect/ChangeDetail',
          },
        ],
      },
      {
        path: '/admin/todo-list',
        component: '@/pages/Admin/TodoList',
      },
      {
        path: '/admin/consultation',
        component: '@/pages/Admin/Consultation',
      },
      {
        path: '/admin/activity',
        component: '@/pages/Admin/Consultation',
      },
      {
        path: '/admin/playback',
        component: '@/pages/Admin/Consultation',
      },
      {
        path: '/admin/lectureHall',
        component: '@/pages/Admin/LectureHall',
      },
      {
        path: '/admin/enterprise-store',
        component: '@/pages/Admin/EnterpriseStore',
        routes: [
          {
            path: '/admin/enterprise-store/detail/:id',
            component: '@/pages/Admin/EnterpriseStore/Detail',
          },
        ],
      },
      {
        path: '/admin/expert-store',
        component: '@/pages/Admin/ExpertStore',
        routes: [
          {
            path: '/admin/expert-store/detail/:id',
            component: '@/pages/Admin/ExpertStore/Detail',
          },
        ],
      },
      {
        path: '/admin/achievement-store',
        component: '@/pages/Admin/AchievementStore',
        routes: [
          {
            path: '/admin/achievement-store/detail/:id',
            component: '@/pages/Admin/AchievementStore/Detail',
          },
        ],
      },
      {
        path: '/admin/cnki-store',
        component: '@/pages/Admin/CnkiStore',
      },
      {
        path: '/admin/product-hall',
        component: '@/pages/Admin/ProductHall',
        routes: [
          {
            path: '/admin/product-hall/detail/:id',
            component: '@/pages/Admin/ProductHall/Detail',
          },
        ],
      },
      {
        path: '/admin/creat',
        component: '@/pages/Admin/Creat',
      },
      {
        path: '/admin/creat/race/list',
        component: '@/pages/Admin/Creat/Race',
      },
      {
        path: '/admin/creat/orient/list',
        component: '@/pages/Admin/Creat/Orient',
      },
      {
        path: '/admin/creat/detail/:id',
        component: '@/pages/Admin/Creat/Detail',
      },
      {
        path: '/admin/creat/submit/:id',
        component: '@/pages/Admin/Creat/Submit',
      },
      {
        path: '/admin/roadmap',
        component: '@/pages/Admin/Roadmap',
      },
      {
        path: '/admin/column',
        component: '@/pages/Admin/Column/List',
        routes: [
          {
            path: '/admin/column/detail/:id',
            component: '@/pages/Admin/Column/Detail',
          },
        ],
      },
    ],
  },
  {
    path: '/external',
    component: '@/layouts/ExternalLayout',
    routes: [
      {
        path: '/external/portal',
        component: '@/pages/External/Portal',
      },
      {
        path: '/external/workbench',
        component: '@/pages/External/Workbench',
      },
      {
        path: '/external/workbench/myInfo-detail',
        component: '@/pages/External/Workbench/MyInfo/Detail',
      },
      {
        path: '/external/workbench/myInfo-edit',
        component: '@/pages/External/Workbench/MyInfo/Edit',
      },
      {
        path: '/external/require/detail/:id',
        component: '@/pages/External/Require/Detail',
      },
      {
        path: '/external/expert/detail/:id',
        component: '@/pages/External/Expert/Detail',
      },
    ],
  },
  {
    path: '/console',
    component: '@/layouts/PageWithHeaderAndSider',
    routes: [
      // 资讯列表
      {
        path: '/console/information/list',
        component: '@/pages/Console/Information/List',
      },
      {
        path: '/console/information/add',
        component: '@/pages/Console/Information/Add',
      },
      {
        path: '/console/information/edit/:id',
        component: '@/pages/Console/Information/Edit',
      },
      {
        path: '/console/information/detail/:id',
        component: '@/pages/Console/Information/Detail',
      },
      // 标签管理
      {
        path: '/console/label/:type',
        component: '@/pages/Console/Label/List',
      },
      // 活动列表
      {
        path: '/console/activity',
        component: '@/pages/Console/Activity/List',
        routes: [
          {
            path: '/console/activity/add',
            component: '@/pages/Console/Activity/Add',
          },
          {
            path: '/console/activity/edit/:id',
            component: '@/pages/Console/Activity/Edit',
          },
          {
            path: '/console/activity/detail/:id',
            component: '@/pages/Console/Activity/Detail',
          },
        ],
      },
      // 科技大讲堂
      {
        path: '/console/science-class',
        component: '@/pages/Console/ScienceClass/List',
        routes: [
          {
            path: '/console/science-class/add',
            component: '@/pages/Console/ScienceClass/Add',
          },
          {
            path: '/console/science-class/edit/:id',
            component: '@/pages/Console/ScienceClass/Edit',
          },
          {
            path: '/console/science-class/detail/:id',
            component: '@/pages/Console/ScienceClass/Detail',
          },
        ],
      },
      // 外部资讯管理
      {
        path: '/console/external-consultation',
        component: '@/pages/Console/ExternalConsultation/List',
        routes: [
          {
            path: '/console/external-consultation/edit/:id',
            component: '@/pages/Console/ExternalConsultation/Edit',
          },
          {
            path: '/console/external-consultation/detail/:id',
            component: '@/pages/Console/ExternalConsultation/Detail',
          },
        ],
      },
      // 外部信源管理
      {
        path: '/console/external-origin',
        component: '@/pages/Console/ExternalOrigin/List',
      },
      // 评论统计
      {
        path: '/console/comment-statistics',
        component: '@/pages/Console/CommentStatistics/List',
      },
      // 咨询深挖
      {
        path: '/console/consulting-dive',
        component: '@/pages/Console/ConsultingDive/List',
        routes: [
          {
            path: '/console/consulting-dive/detail',
            exact: true,
            component: '@/pages/Console/ConsultingDive/Detail',
          },
        ],
      },

      // 日志管理
      {
        path: '/console/operate-log',
        component: '@/pages/Console/OperateLog/List',
      },
      {
        path: '/console/search-log',
        component: '@/pages/Console/SearchLog/List',
      },
      {
        path: '/console/visit-log',
        component: '@/pages/Console/VisitLog/List',
      },
      // 课题登记
      {
        path: '/console/topicRegister',
        component: '@/pages/Console/Topic/topicRegister/List',
        routes: [
          {
            path: '/console/topicRegister/add',
            component: '@/pages/Console/Topic/topicRegister/Add',
          },
          {
            path: '/console/topicRegister/edit/:id',
            component: '@/pages/Console/Topic/topicRegister/Edit',
          },
          {
            path: '/console/topicRegister/detail/:id',
            component: '@/pages/Console/Topic/topicRegister/Detail',
          },
        ],
      },
      // 课题进度
      {
        path: '/console/topicProcess',
        component: '@/pages/Console/Topic/topicProcess/List',
        routes: [
          {
            path: '/console/topicProcess/change/:id',
            component: '@/pages/Console/Topic/topicRegister/Change',
          },
          {
            path: '/console/topicProcess/change-detail/:id',
            component: '@/pages/Console/Topic/topicRegister/ChangeDetail',
          },
        ],
      },
      // 科技创新平台
      {
        path: '/console/innovationPlatform',
        component: '@/pages/Console/Topic/innovationPlatform/List',
        routes: [
          {
            path: '/console/innovationPlatform/add',
            component: '@/pages/Console/Topic/innovationPlatform/Add',
          },
          {
            path: '/console/innovationPlatform/edit/:id',
            component: '@/pages/Console/Topic/innovationPlatform/Edit',
          },
          {
            path: '/console/innovationPlatform/detail/:id',
            component: '@/pages/Console/Topic/innovationPlatform/Detail',
          },
        ],
      },
      // 科技创新平台
      {
        path: '/console/topicScreen',
        component: '@/pages/Console/Topic/topicScreen',
      },
      // 成果分享
      {
        path: '/console/achievement-share',
        component: '@/pages/Console/AchievementShare/List',
        routes: [
          {
            path: '/console/achievement-share/add',
            component: '@/pages/Console/AchievementShare/Add',
          },
          {
            path: '/console/achievement-share/edit/:id',
            component: '@/pages/Console/AchievementShare/Edit',
          },
          {
            path: '/console/achievement-share/detail/:id',
            component: '@/pages/Console/AchievementShare/Detail',
          },
          {
            path: '/console/achievement-share/change/:id',
            component: '@/pages/Console/AchievementShare/Change',
          },
          {
            path: '/console/achievement-share/change-detail/:id',
            component: '@/pages/Console/AchievementShare/ChangeDetail',
          },
        ],
      },
      // 证书管理
      {
        path: '/console/license',
        component: '@/pages/Console/License/List',
        routes: [
          {
            path: '/console/license/detail/:id',
            component: '@/pages/Console/License/Detail',
          },
        ],
      },
      {
        path: '/console/creativity-call',
        component: '@/pages/Console/CreativityCall/List',
        routes: [
          {
            path: '/console/creativity-call/detail/:id',
            component: '@/pages/Console/CreativityCall/Detail',
          },
          {
            path: '/console/creativity-call/edit/:id',
            component: '@/pages/Console/CreativityCall/Edit',
          },
          {
            path: '/console/creativity-call/add',
            component: '@/pages/Console/CreativityCall/Add',
          },
        ],
      },
      {
        path: '/console/creativity-idea',
        component: '@/pages/Console/CreativityIdea/List',
        routes: [
          {
            path: '/console/creativity-idea/detail/:id',
            component: '@/pages/Console/CreativityIdea/Detail',
          },
        ],
      },
      {
        path: '/console/creativity-hatch',
        component: '@/pages/Console/CreativityHatch/List',
        routes: [
          {
            path: '/console/creativity-hatch/detail/:id',
            component: '@/pages/Console/CreativityHatch/Detail',
          },
        ],
      },
      {
        path: '/console/expert',
        component: '@/pages/Console/Expert/List',
        routes: [
          {
            path: '/console/expert/add',
            component: '@/pages/Console/Expert/Add',
          },
          {
            path: '/console/expert/edit/:id',
            component: '@/pages/Console/Expert/Edit',
          },
          {
            path: '/console/expert/detail/:id',
            component: '@/pages/Console/Expert/Detail',
          },
        ],
      },
      {
        path: '/console/company',
        component: '@/pages/Console/Company/List',
        routes: [
          {
            path: '/console/company/add',
            component: '@/pages/Console/Company/Add',
          },
          {
            path: '/console/company/edit/:id',
            component: '@/pages/Console/Company/Edit',
          },
          {
            path: '/console/company/detail/:id',
            component: '@/pages/Console/Company/Detail',
          },
        ],
      },
      {
        path: '/console/inviteRegister',
        component: '@/pages/Console/inviteRegister',
      },
      {
        path: '/console/product-management',
        component: '@/pages/Console/ProductManagement/List',
        routes: [
          {
            path: '/console/product-management/add',
            component: '@/pages/Console/ProductManagement/Add',
          },
          {
            path: '/console/product-management/edit/:id',
            component: '@/pages/Console/ProductManagement/Edit',
          },
          {
            path: '/console/product-management/detail/:id',
            component: '@/pages/Console/ProductManagement/Detail',
          },
          {
            path: '/console/product-management/change/:id',
            component: '@/pages/Console/ProductManagement/Change',
          },
          {
            path: '/console/product-management/change-detail/:id',
            component: '@/pages/Console/ProductManagement/ChangeDetail',
          },
        ],
      },
      {
        path: '/console/sensitive-words',
        component: '@/pages/Console/SensitiveWords/List',
      },
      {
        path: '/console/function-words',
        component: '@/pages/Console/FunctionWords/List',
      },
      {
        path: '/console/similar-words',
        component: '@/pages/Console/SimilarWord/List',
      },
      {
        path: '/console/key-words',
        component: '@/pages/Console/KeyWords/List',
      },
      {
        path: '/console/hot-words/config',
        component: '@/pages/Console/HotWordsConfig/List',
      },
      {
        path: '/console/hot-words/statistics',
        component: '@/pages/Console/HotWordsStatistics/List',
      },
      {
        path: '/console/correction',
        component: '@/pages/Console/Correction/List',
      },
      {
        path: '/console/phone-apply',
        component: '@/pages/Console/PhoneApply/List',
        routes: [
          {
            path: '/console/phone-apply/detail/:id',
            component: '@/pages/Console/PhoneApply/Detail',
          },
        ],
      },
      {
        path: '/console/roadmap',
        component: '@/pages/Console/Roadmap/List',
      },
      {
        path: '/console/roadmap-template',
        component: '@/pages/Console/RoadmapTemplate/List',
        routes: [
          {
            path: '/console/roadmap-template/detail/:id',
            component: '@/pages/Console/RoadmapTemplate/Detail',
          },
          {
            path: '/console/roadmap-template/edit/:id',
            component: '@/pages/Console/RoadmapTemplate/Edit',
          },
          {
            path: '/console/roadmap-template/add',
            component: '@/pages/Console/RoadmapTemplate/Add',
          },
        ],
      },
      // 外部用户管理
      {
        path: '/console/user-management',
        component: '@/pages/Console/UserManagement/List',
        routes: [
          {
            path: '/console/user-management/detail/:id',
            component: '@/pages/Console/UserManagement/Detail',
          },
          {
            path: '/console/user-management/edit/:id',
            component: '@/pages/Console/UserManagement/Edit',
          },
        ],
      },
      // 组织管理
      {
        path: '/console/enterprise-management',
        component: '@/pages/Console/EnterpriseManagement/List',
        routes: [
          {
            path: '/console/enterprise-management/detail/:id',
            component: '@/pages/Console/EnterpriseManagement/Detail',
          },
          {
            path: '/console/enterprise-management/edit/:id',
            component: '@/pages/Console/EnterpriseManagement/Edit',
          },
        ],
      },
      // 认证审核
      {
        path: '/console/certification-audit',
        component: '@/pages/Console/CertificationAudit/List',
        routes: [
          {
            path: '/console/certification-audit/detail/:id',
            component: '@/pages/Console/CertificationAudit/Detail',
          },
        ],
      },
    ],
  },
  {
    path: '/mobile',
    component: '@/layouts/MobileLayout',
    routes: [
      {
        path: '/mobile/privacy-protocol',
        component: '@/pages/Mobile/PrivacyProtocol',
      },
    ],
  },
  {
    path: '/',
    component: '@/layouts/PortalLayout',
    routes: [
      {
        path: '/',
        exact: true,
        component: '@/pages/Portal',
      },
      {
        path: '/docs',
        component: '@/pages/Docs',
        routes: [
          {
            path: '/docs/:type',
            exact: true,
            component: '@/pages/Docs/DocTypes',
          },
        ],
      },
      {
        path: '*',
        redirect: '/',
      },
    ],
  },
];

export default routes;
