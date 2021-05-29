import { promisifyAll } from 'miniprogram-api-promise'
import { wxLogin } from './api/index'
import nav from './router/index'
const pro = {}
promisifyAll(wx, pro)
wx.$pro = pro
wx.$nav = nav
App({
  globalData: {
    isCreated: false,
    systemInfo: {},
    userInfo: {},
    card: {}, // 我的名片信息
    shareParams: null,
    config: {},
    cardImage: '', // 我的名片分享图
    platform: '',
    once_share: 0, // 是否点过分享按钮
  },
  getSystemInfo () {
    const { windowHeight, screenHeight, pixelRatio, statusBarHeight } = wx.getSystemInfoSync()
    this.globalData.systemInfo.windowHeight = windowHeight
    this.globalData.systemInfo.screenHeight = screenHeight
    this.globalData.systemInfo.pixelRatio = pixelRatio
    this.globalData.systemInfo.statusBarHeight = statusBarHeight
  },
  getUserInfo() {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success(res) {
              console.log(res)
            }
          })
        }
      }
    })
  },
  async login() {
    try {
      const { code } = await wx.$pro.login()
      const { data } = await wxLogin({code})
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
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
