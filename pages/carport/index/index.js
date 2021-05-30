import { getEstateList } from '../../../api/index'
const app = getApp()
Page({
  data: {
    types: [
      {
        title: '1-100'
      }, {
        title: '100-300'
      }, {
        title: '3-500'
      }
    ],
    activeType: '全部',
    list: []
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
  async onLoad() {
    this.getList()
  }
})
