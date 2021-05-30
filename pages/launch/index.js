import { wxLogin, getUserInfo } from '../../api/index'
const app = getApp()
Page({
  data: {
    show: false
  },
  async wxLogin(redirect) {
    try {
      const { code } = await wx.$pro.login()
      const { data } = await wxLogin({ code: code })
      if (!data.nickname) this.setData({ show: true })
      else this.getUserInfo()
    } catch ({ msg }) {
      wx.showToast({ title: msg, icon: 'none' })
    }
  },
  async getUserInfo() {
    try {
      const { data } = await getUserInfo()
      app.globalData.userInfo = data
      wx.$nav.switchTab('/pages/index/index')
    } catch (err) {
      console.log(err)
    }
  },
  success() {
    this.getUserInfo()
  },
  async onLoad() {
    this.wxLogin()
  }
})
