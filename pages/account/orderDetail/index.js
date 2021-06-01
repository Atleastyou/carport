import { getOrderDetail } from '../../../api/index.js'

Page({
  data: {
    orderId: '',
    detail: {}
  },
  async getDetail() {
    try {
      const { data } = await getOrderDetail({ id: this.data.orderId })
      this.setData({ detail: data })
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  onLoad({ id }) {
    console.log(id)
    this.setData({ orderId: id })
    this.getDetail()
  }
})