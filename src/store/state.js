// 初始化状态, 这个非常重要，用于表示整个状态的结构
export default {
  // 当前登录的用户者信息
  userInfo: {
    // 头像
    avatarUrl: '',

    // 国家
    country: '',

    // 省份
    province: '',

    // 城市
    city: '',

    // 0：未知、1：男、2：女
    gender: 0,

    // 语言
    language: '',

    // 昵称
    nickName: ''
  },
  // 页面的配置信息
  pages: {
    // 页面地址
    'pages/frame/frame': {
      // 页面中的模块
      templates: ['ma', 'mb', 'mc', 'ma'],
      // 模块ma的数据
      ma: {},
      mb: {},
      mc: {}
    }
  }
}
