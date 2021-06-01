import { getOrderList } from '../../../api/index.js';

Page({
  data: {
    size: 20,
    current: 1,
    list: []
  },
  async getList() {
    try {
      const { data } = await getOrderList({ current: 1, size: this.data.size, type: 2 })
      this.setData({
        list: data.records,
        current: 2
      })
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  async loadMore() {
    try {
      if (this.loading || this.alloaded) return
      this.loading = true
      const { data } = await getOrderList({ current: this.data.current, size: this.data.size, type: 2 })
      this.alloaded = !data.records.length
      if (data.records.length) {
        let list = [...this.data.list]
        list.push(...data.records)
        this.setData({
          current: this.data.current + 1,
          list: list
        })
      }
      this.loading = false
    } catch (err) {
      this.loading = false
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  onReachBottom() {
    this.loadMore()
  },
  onLoad() {
    this.getList()
  }
})