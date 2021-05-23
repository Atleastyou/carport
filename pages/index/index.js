const app = getApp()

Page({
  data: {
    banners: [
      '../../images/banner1.jpeg',
      '../../images/banner2.jpeg',
      '../../images/banner3.jpeg'
    ]
  },
  selectAddress() {
    wx.navigateTo({ url: '/pages/address/index' })
  },
  onLoad() {},
})
