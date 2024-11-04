type Language = 'zh-cn' | 'zh-tw' | 'en'
type ElementSize = 'large' | 'default' | 'small'
type layoutMode = 'onlyTopNav' | 'onlySubSideNav' | 'mainSubSideNav' | 'topSubSideNav'
type ColorScheme = '' | 'light' | 'dark'
type RouteMode = 'frontend' | 'backend'

interface IGlobalApp {
  enablePermission: boolean
  routeMode: RouteMode
  enableProgress: boolean
  enableDyableTitle: boolean
  enableHome: boolean
  layoutMode: LayleoutMode
  colorScheme: ColorScheme
}

interface IGlobalNav {
  subMenuCollaspe: boolean
  fixed: boolean
}
interface IGlobalTabbar {
  enable: boolean
}

interface IGlobalToolbar {
  enable: boolean
  enableSidebarCollapse: boolean
  enableBreadcrumb: boolean
  enableMenuSearch: boolean
  enableElementSize: boolean
  enableNotification: boolean
  enableI18n: boolean
  enableFullscreen: boolean
  enableColorScheme: boolean
  enableChangeTheme: boolean
  enablePageReload: boolean
  enableAppSetting: boolean
}

interface IGlobalTheme {
  logoBgColor: string
  logoTextColor: string
  menuBgColor: string
  menuActiveBgColor: string
  menuHoverBgColor: string
  menuTextColor: string
  menuHoverTextColor: string
  menuActiveTextColor: string
  mainMenuBgColor: string
  mainMenuActiveBgColor: string
  mainMenuHoverBgColor: string
  mainMenuTextColor: string
  mainMenuActiveTextColor: string
  mainMenuHoverTextColor: string
  tabbarBgColor: string
  tabbarItemBgColor: string
  tabbarItemActiveBgColor: string
  tabbarItemHoverBgColor: string
  tabbarItemTextColor: string
  tabbarItemActiveTextColor: string
  tabbarItemHoverTextColor: string
  toolbarBgColor: string
  toolbarTextColor: string
}
declare interface IGlobalConfig {
  defaultLanguage: Language
  elementSize: ElementSize
  app: IGlobalApp
  nav: IGlobalNav
  theme: IGlobalTheme
  tabbar: IGlobalTabbar
  toolbar: IGlobalToolbar
}

declare namespace Menu{
  interface recordRaw {
    path: string
    meta: RouteMeta
    children?: recordRaw[]
  }
  interface recordMainRaw {
    title: string
    icon: string
    parentIndex?: number
    children: recordMainRaw[]
  }
}
