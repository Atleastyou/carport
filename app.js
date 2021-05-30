import { promisifyAll } from 'miniprogram-api-promise'
import { wxLogin } from './api/index'
import nav from './router/index'
const pro = {}
promisifyAll(wx, pro)
wx.$pro = pro
wx.$nav = nav
App({
  globalData: {
    userInfo: {},
    systemInfo: {}
  },
  getSystemInfo () {
    const { windowHeight, screenHeight, pixelRatio, statusBarHeight } = wx.getSystemInfoSync()
    this.globalData.systemInfo.windowHeight = windowHeight
    this.globalData.systemInfo.screenHeight = screenHeight
    this.globalData.systemInfo.pixelRatio = pixelRatio
    this.globalData.systemInfo.statusBarHeight = statusBarHeight
  },
  onLaunch() {
    // this.login()
    // this.getUserInfo()
  },
  onHide () {},
  onUnhandledRejection ({reason}) {
    if (reason.errMsg.indexOf('system deny') !== -1) wx.showToast({ title: '操作失败，请在设置中打开微信权限', icon: 'none' })
  }
})
