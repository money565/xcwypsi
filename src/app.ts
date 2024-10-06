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
    logoBgColor: '#FFFFFF',
    logoTextColor: '#000000',
  },
}

export default sysGlobalConfig
