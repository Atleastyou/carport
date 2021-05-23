const app = getApp()
Page({
  data: {
    quicks: ['区县', '定位', '热门', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    scrollIntoView: ''
  },
  selectQuick({ target }) {
    this.setData({ scrollIntoView: target.dataset.item })
  },
  async onLoad() {}
})
