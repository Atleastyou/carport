import  { getDetail, getEstateParking, postCollection, cancelCollection } from '../../../api/index.js'
const app = getApp()
Page({
  data: {
    detailId: '',
    indicatorIndex: 1,
    detail: {},
    touchStartTime: 0
  },
  async getDetail() {
    try {
      const { data } = await getDetail({id: this.data.detailId})
      this.setData({ detail: data })
      this.getParking()
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  async getParking() {
    try {
      const { data } = await getEstateParking({id: this.data.detailId})
      this.setData({ detail: { ...this.data.detail, ...data } })
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  async collection() {
    try {
      if (this.data.detail.favoriteStatus) {
        await cancelCollection({ favoriteType: 1, favoriteId: this.data.detail.realEstateInfoId })
        this.setData({
          'detail.favoriteStatus': 0
        })
        wx.showToast({ title: '取消收藏！', icon: 'none' })
      } else {
        await postCollection({ favoriteType: 1, favoriteId: this.data.detail.realEstateInfoId })
        this.setData({
          'detail.favoriteStatus': 1
        })
        wx.showToast({ title: '收藏成功！', icon: 'none' })
      }
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  openLocation() {
    let that = this
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          name: that.data.detail.address
        })
      }
    })
    
  },
  changeCurrent({detail}) {
    this.setData({ indicatorIndex: detail.current + 1 })
  },
  selectCar() {
    wx.$nav.navigateTo('/pages/carportSelect/index', { id: this.data.detail.realEstateInfoId })
  },
  preview(e) {
    if (e.timeStamp - this.data.touchStartTime < 300) {
      wx.$nav.navigateTo('/pages/carportSelect/index', { id: e.currentTarget.dataset.item.floorInfoId })
    }
    this.setData({ touchStartTime: e.timeStamp })
  },
  onLoad({ id }) {
    this.setData({ detailId: id })
    this.getDetail()
  }
})