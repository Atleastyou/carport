const app = getApp()
import { getUserInfo } from '../../../api/index'

Page({
  data: {
    userInfo: {}
  },
  async getMyCard() {
    try {
      const { card } = app.globalData
      this.setData({ cardInfo: card })
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  async getUserInfo() {
    try {
      const { data } = await getUserInfo()
      this.setData({ userInfo: data })
      app.globalData.userInfo = data
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  onShow() {
    this.getUserInfo()
  }
})
