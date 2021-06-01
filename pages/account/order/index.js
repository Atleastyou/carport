import { getOrderList } from '../../../api/index.js'

Page({
  data: {
    orderType: '',
    keyword: '',
    size: 20,
    current: 1,
    list: [],
    navbars: [
      {
        label: '全部',
        value: ''
      }, {
        label: '待支付',
        value: '0'
      }, {
        label: '已支付',
        value: '1'
      }, {
        label: '已完成',
        value: '2'
      }
    ]
  },
  changeNavbar({ target: { dataset: { item } } }) {
    this.setData({
      orderType: item.value
    })
    this.getList()
  },
  onChange({ detail }) {
    this.setData({ keyword: detail })
    this.getList()
  },
  async getList() {
    try {
      const { data } = await getOrderList({ current: 1, size: this.data.size, key: this.data.keyword, type: this.data.orderType })
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
      const { data } = await getOrderList({ current: this.data.current, size: this.data.size, key: this.data.keyword, type: this.data.orderType })
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
  onLoad({ type = '' }) {
    this.setData({
      orderType: type
    })
    this.getList()
  }
})