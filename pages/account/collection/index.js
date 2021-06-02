import { getCollectionList, cancelCollection, batchCollection } from '../../../api/index'

Page({
  data: {
    list: [],
    current: 1,
    size: 20,
    type: 1,
    radio: false,
    isHandle: false,
    keyword: '',
  },
  onChange({ detail }) {
    this.setData({keyword: detail})
    this.getList()
  },
  changeTab({ currentTarget: { dataset: { type } } }) {
    this.setData({ type : type })
    this.getList()
  },
  changeRadio({ detail }) {
    this.data.list.forEach(item => {
      item.isSelect = detail
    })
    this.setData({ radio: detail, list: this.data.list })
  },
  handle() {
    this.setData({ isHandle: !this.data.isHandle })
  },
  seeFloorDetail({ currentTarget: { dataset: { item } } }) {
    wx.$nav.navigateTo('/pages/carport/detail/index', { id: item.realEstateInfoId })
  },
  seeCarDetail({ currentTarget: { dataset: { item } } }) {
    wx.$nav.navigateTo('/pages/carport/carDetail/index', { id: item.parkingInfoId })
  },
  async batchDelete() {
    try {
      let ids = []
      this.data.list.forEach(item => {
        if (item.isSelect && parseInt(this.data.type) === 1) ids.push(item.realEstateInfoId)
        else if (item.isSelect && parseInt(this.data.type) === 2) ids.push(item.parkingInfoId)
      })
      if (ids.length <= 0) {
        wx.showToast({ title: '请先选择要删除的数据！', icon: 'none' })
        return
      }
      await batchCollection([...ids])
      this.getList()
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  selectFloor({ currentTarget: { dataset: { index } } }) {
    this.data.list[index].isSelect = !this.data.list[index].isSelect
    this.setData({ list: this.data.list })
  },
  async deleteFloor({ currentTarget: { dataset: { item, index } } }) {
    try {
      await cancelCollection({ favoriteType: 1, favoriteId: item.realEstateInfoId })
      this.data.list.splice(index, 1)
      this.setData({
        list: this.data.list
      })
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  async deleteCar({ currentTarget: { dataset: { item, index } } }) {
    try {
      await cancelCollection({ favoriteType: 2, favoriteId: item.parkingInfoId })
      this.data.list.splice(index, 1)
      this.setData({
        list: this.data.list
      })
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  async getList() {
    try {
      const { data } = await getCollectionList({ current: 1, size: 20, type: this.data.type, key: this.data.keyword })
      data.records.forEach(item => {
        item.isSelect = false
      })
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
      const { data } = await getCollectionList({ current: this.data.current, size: this.data.size, key: this.data.keyword, type: this.data.type })
      this.alloaded = !data.records.length
      if (data.records.length) {
        data.records.forEach(item => {
          item.isSelect = false
        })
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
  onLoad() {
    this.getList()
  }
})