import { wxLogin } from '../../api/index'
const app = getApp()
Page({
  data: {
    show: false
  },
  async wxLogin(redirect) {
    try {
      const { code } = await wx.$pro.login()
      const { data } = await wxLogin({ code: code })
      if (!data.nickname) {
        this.setData({ show: true })
      }
    } catch ({ msg }) {
      wx.showToast({ title: msg, icon: 'none' })
    }
  },
  async onLoad() {
    this.wxLogin()
  }
})
