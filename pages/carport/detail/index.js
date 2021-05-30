import  { getDetail } from '../../../api/index.js'
Page({
  data: {
    detailId: '',
    indicatorIndex: 1,
    banners: [
      '../../../images/banner1.jpeg',
      '../../../images/banner2.jpeg',
      '../../../images/banner3.jpeg'
    ],
  },
  async getDetail() {
    try {
      const { data } = await getDetail({id: this.data.detailId})
      console.log(data)
    } catch (err) {
      console.log(err)
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