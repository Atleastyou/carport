const app = getApp()
import { getEstateList } from '../../api/index.js'

Page({
  data: {
    banners: [
      '../../images/banner1.jpeg',
      '../../images/banner2.jpeg',
      '../../images/banner3.jpeg'
    ],
    list: [],
    current: 1,
    size: 20,
    keyword: ''
  },
  selectAddress() {
    wx.navigateTo({ url: '/pages/address/index' })
  },
  changeInput({ detail: { value } }) {
    this.setData({ keyword: value })
    this.getList()
  },
  async getList() {
    try {
      const { data } = await getEstateList({ current: this.data.current, size: this.data.size, key: this.data.keyword })
      this.setData({
        list: data.records,
        current: 2
      })
    } catch (err) {
      console.log(err)
    }
  },
  async loadMore() {
    try {
      if (this.loading || this.alloaded) return
      this.loading = true
      const { data } = await getEstateList({ current: this.data.current, size: this.data.size, key: this.data.keyword })
      this.alloaded = !data.records.length
      if (data.records.length) {
        let list = [...this.data.records]
        list.push(...data.records)
        this.setData({
          page: this.data.page + 1,
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
  },
})
