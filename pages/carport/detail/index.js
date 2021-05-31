import  { getDetail, getEstateParking } from '../../../api/index.js'
Page({
  data: {
    detailId: '',
    indicatorIndex: 1,
    detail: {}
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
  changeCurrent({detail}) {
    this.setData({ indicatorIndex: detail.current + 1 })
  },
  onLoad({ id }) {
    this.setData({ detailId: id })
    this.getDetail()
  }
})