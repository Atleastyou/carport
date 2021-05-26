Page({
  data: {
    orderType: 'all',
    navbars: [
      {
        label: '全部',
        value: 'all'
      }, {
        label: '代付款',
        value: 'pay'
      }, {
        label: '审核中',
        value: 'audit'
      }, {
        label: '已完成',
        value: 'complete'
      }
    ]
  },
  changeNavbar({ target: { dataset: { item } } }) {
    this.setData({
      orderType: item.value
    })
  },
  onLoad({ type }) {
    this.setData({
      orderType: type
    })
  }
})