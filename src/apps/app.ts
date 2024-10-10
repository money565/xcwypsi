const sysGlobalConfig: IGlobalConfig = {
  defaultLanguage: 'zh-cn',
  /**
   * element组件尺寸
   * 主内容区默认文字大小关联
   * 可选：large、default、small
   * large：16px
   * default：14px
   * small：12px
   */
  elementSize: 'default',
  app: {
    /**
     * 是否开启权限功能
     */
    enablePermission: false,
    // 是否开启载入进度条
    enableProgress: true,
    // 是否开启动态标题
    enableDyableTitle: true,
    // 是否开启home首页(设置位false时，登陆后框架会跳转到菜单中的第一个模块)
    enableHome: true,
    /**
     * 布局模式
     * onlyTopNav  只有顶部导航
     * onlySubSideNav  只有侧边栏导航
     * mainSubSideNav  侧边主导航+侧边次栏导航
     * topSubSideNav  顶部主导航+侧边次栏导航
     */
    layoutMode: 'onlySubSideNav',
    /**
     * 颜色方案
     * ''系统默认
     * 'light'明亮模式
     * 'dark'暗黑模式
     */
    colorScheme: 'light',
  },
  nav: {
    // 此导航栏是否收起
    subMenuCollaspe: false,
    // 操作栏（tabbar和toolbar）是否固定
    fixed: true,
  },
  tabbar: {
    // 是否开启
    enable: true,
  },
  // 工具栏
  toolbar: {
    // 是否开启
    enable: true,
    // 是否开启全屏
    enableFullscreen: true,
    // 是否开启颜色系统（明亮暗黑模式）
    enableColorScheme: true,
    // 是否开启换肤
    enableChangeTheme: true,
    // 是否开启国际化
    enableI18n: true,
    // 是否开启侧边栏展开收起按钮
    enableSidebarCollapse: true,
    // 是否开启面包屑导航
    enableBreadcrumb: true,
    // 是否开启页面刷新
    enablePageReload: true,
    // 是否开启菜单搜索
    enableMenuSearch: true,
    // 是否开启框架元素大小切换（改变elementui的大小和上方elementSize的作用一样）
    enableElementSize: true,
    // 是否开启应用配置（建议在生产环境关闭）
    enableAppSetting: true,
    // 是否开启通知中心
    enableNotification: false,
  },
  theme: {
    // -----Logo-------
    logoBgColor: '#cad7fe',
    logoTextColor: '#ffffff',
    // -----顶部菜单-----
    mainMenuBgColor: '#CAFF70',
    mainMenuActiveBgColor: '#cad7fe', // 选中次菜单背景色
    mainMenuHoverBgColor: '#cad7fe', // 鼠标经过次菜单背景色
    mainMenuTextColor: '#2f4f4f', // 次菜单文字色
    mainMenuActiveTextColor: '#2f4f4f', // 选中次菜单文字颜色
    mainMenuHoverTextColor: '#2f4f4f', // 鼠标经过次菜文字色
    // -----次菜单------
    menuBgColor: 'linear-gradient(to right, #c9d6ff,#e2e2e2)', // 次菜单背景色
    menuActiveBgColor: '#cad7fe', // 选中次菜单背景色
    menuHoverBgColor: '#cad7fe', // 鼠标经过次菜单背景色
    menuTextColor: '#2f4f4f', // 次菜单文字色
    menuActiveTextColor: '#2f4f4f', // 选中次菜单文字颜色
    menuHoverTextColor: '#2f4f4f', // 鼠标经过次菜文字色

  },
}

export default sysGlobalConfig
