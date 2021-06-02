import { getCarDetail, postCollection, cancelCollection } from '../../../api/index.js'
const app = getApp()

Page({
  data: {
    carId: '',
    detail: {},
    userInfo: {}
  },
  getPhoneNumber({ detail }) {
    console.log(detail)
  },
  async getCarDetail() {
    try {
      const { data } = await getCarDetail({ id: this.data.carId })
      this.setData({ detail: data })
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  async collection() {
    try {
      if (this.data.detail.favoriteStatus) {
        await cancelCollection({ favoriteType: 2, favoriteId: this.data.detail.parkingInfoId })
        this.setData({
          'detail.favoriteStatus': 0
        })
        wx.showToast({ title: '取消收藏！', icon: 'none' })
      } else {
        await postCollection({ favoriteType: 2, favoriteId: this.data.detail.parkingInfoId })
        this.setData({
          'detail.favoriteStatus': 1
        })
        wx.showToast({ title: '收藏成功！', icon: 'none' })
      }
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  onLoad({ id }) {
    this.setData({ carId: id, userInfo: app.globalData.userInfo })
    this.getCarDetail()
  }
})