type Language = 'zh-cn' | 'zh-tw' | 'en'
type ElementSize = 'large' | 'default' | 'small'
type layoutMode = 'onlyTopNav' | 'onlySubSideNav' | 'mainSubSideNav' | 'topSubSideNav'
type ColorScheme = '' | 'light' | 'dark'

interface IGlobalApp {
  enablePermission: boolean
  layoutMode: LayleoutMode
  colorScheme: ColorScheme
}

interface IGlobalNav {
  subMenuCollaspe: boolean
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
}
declare interface IGlobalConfig {
  defaultLanguage: Language
  elementSize: ElementSize
  app: IGlobalApp
  nav: IGlobalNav
  theme: IGlobalTheme
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
