const app = getApp()
import { getEstateList, getCity, getBanner } from '../../api/index.js'

Page({
  data: {
    banners: [],
    list: [],
    current: 1,
    size: 20,
    keyword: '',
    citys: [],
    cityValue: '深圳',
    cityId: ''
  },
  selectAddress() {
    wx.navigateTo({ url: '/pages/address/index' })
  },
  changeInput({ detail: { value } }) {
    this.setData({ keyword: value })
    this.getList()
  },
  onChangeCity({ currentTarget: { dataset: { index } } }) {
    this.data.citys.forEach((item, itemIndex) => {
      if (itemIndex === index) {
        this.setData({
          cityValue: item.simpleName,
          cityId: item.id
        })
        item.isSelect = true
      }
      else item.isSelect = false
    })
    this.setData({ citys: this.data.citys })
    this.getList()
    this.selectComponent('#dropdown').toggle()
  },
  async getBanner() {
    try {
      const { data } = await getBanner()
      console.log(data)
      this.setData({ banners: data })
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  async getCity() {
    try {
      const { data } = await getCity()
      data.forEach(item => {
        item.isSelect = false
      })
      this.setData({ citys: data })
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  async getList() {
    try {
      const { data } = await getEstateList({ current: 1, size: this.data.size, key: this.data.keyword, cityId: this.data.cityId })
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
      const { data } = await getEstateList({ current: this.data.current, size: this.data.size, key: this.data.keyword, cityId: this.data.cityId })
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
    this.getBanner()
    this.getList()
    this.getCity()
  },
})
