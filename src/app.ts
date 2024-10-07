const sysGlobalConfig: IGlobalConfig = {
  defaultLanguage: 'zh-cn',
  elementSize: 'default',
  app: {
    /**
     * 布局模式
     * onlyTopNav  只有顶部导航
     * onlySubSideNav  只有侧边栏导航
     * mainSubSideNav  侧边主导航+侧边次栏导航
     * topSubSideNav  顶部主导航+侧边次栏导航
     */
    layoutMode: 'mainSubSideNav',
    /**
     * 颜色方案
     * ''系统默认
     * 'light'明亮模式
     * 'dark'暗黑模式
     */
    colorScheme: 'light',
  },
  nav: {
    subMenuCollaspe: false,
  },
  theme: {
    // -----Logo-------
    logoBgColor: '#cad7fe',
    logoTextColor: '#ffffff',
    // -----次菜单------
    menuBgColor: 'linear-gradient(to right, #c9d6ff,#e2e2e2)', // 次菜单背景色
    menuActiveBgColor: '#cad7fe', // 选中次菜单背景色
    menuHoverBgColor: '#cad7fe', // 鼠标经过次菜单背景色
    menuTextColor: '#2f4f4f', // 次菜单文字色
    menuActiveTextColor: '#2f4f4f', // 选中次菜单文字颜色
    menuHoverTextColor: '#2f4f4f', // 鼠标经过次菜文字色
    // -----顶部菜单-----
    mainMenuBgColor: '#CAFF70',
  },
}

export default sysGlobalConfig
