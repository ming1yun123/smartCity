interface SiderInterFaceItem{
    id:string,
    title:string,
    path:string
}
interface SiderInterFaceConfig{
    id:string,
    root:string
    icon:string,
    children:SiderInterFaceItem[]
}

export const adminSiderConfig:SiderInterFaceConfig[] = [
    {
        id:'backstate',
        root:'旅行报社',
        icon: 'pie-chart',
        children:[
            {
                id:'backstate-home',
                title:'首页',
                path:'/backstate/home'
            },
            {
                id:'backstate-personal',
                title:'个人中心',
                path:'/backstate/personal'
            },
            {
              id:'backstate-mytesk',
              title:'我的任务',
              path:'/backstate/mytesk'
          },
        ]
    },
    {
        id:'news',
        root:'新闻',
        icon: 'picture',
        children:[
              {
                id:'news-list',
                title:'文章列表',
                path:'/news/list'
            },
            {
                id:'news-edit',
                title:'文章编辑与评论',
                path:'/news/edit'
            },
            {
                id:'news-check',
                title:'文章发布',
                path:'/news/check'
            },
            
            {
                id:'news-draft',
                title:'草稿箱',
                path:'/news/draft'
            },
        ]
    },


    {
        id: 'ads',
        root: '广告',
        icon: 'paper-clip',
        children: [
          {
            id: 'ads-edit',
            title: '广告发布',
            path: '/ads/edit'
          },
          {
            id: 'ads-check',
            title: '广告审核',
            path: '/ads/check'
          },
          {
            id: 'ads-list',
            title: '广告列表',
            path: '/ads/list'
          },
          {
            id: 'ads-effect',
            title: '广告效果数据',
            path: '/ads/effect'
          },
        ]
    },

    {
        id: 'comments',
        root: '评论',
        icon: 'laptop',
        children: [
          {
            id: 'comments-list',
            title: '评论列表',
            path: '/comments/list'
          },
          {
            id: 'comments-check',
            title: '评论审核',
            path: '/comments/check'
          },
          {
            id: 'comments-effect',
            title: '评论分析',
            path: '/comments/effect'
          },
        ]
    },
    {
        id: 'partment',
        root: '部门',
        icon: 'apartment',
        children: [
          {
            id: 'partment-manager',
            title: '部门管理',
            path: '/partment/manager'
          },
        ]
    },
    {
        id: 'material',
        root: '素材',
        icon: 'file-image',
        children: [
          {
            id: 'material-manager',
            title: '素材管理',
            path: '/material/manager'
          },
        ]
    },
    {
      id: 'sensitive',
      root: '敏感信息',
      icon: 'eye-invisible',
      children: [
        {
          id: 'sensitive-words',
          title: '文字敏感信息',
          path: '/sensitive/words'
        },
        {
          id: 'sensitive-imgs',
          title: '图片敏感信息',
          path: '/sensitive/imgs'
        },
        {
          id: 'sensitive-count',
          title: '敏感信息统计',
          path: '/sensitive/count'
        },
      ]
  },
    {
        id: 'rightsManager',
        root: '权限管理',
        icon: 'setting',
        children: [
          {
            id: 'rightsManager-addRole',
            title: '角色添加',
            path: '/rightsManager/addRole'
          },
          {
            id: 'rightsManager-addRights',
            title: '权限添加',
            path: '/rightsManager/addRights'
          },
        ]
    },
]

export default adminSiderConfig;
