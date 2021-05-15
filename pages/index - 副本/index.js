const app = getApp()

Page({
  data: {
    imageInfo: {
      top: -100,
      left: -500
    },
    imageRotate: 1,
    scale: 1,
    touches: {},
    tags: [
      {
        color: 'rgb(255, 0, 0)',
        height: 70,
        id: '1001',
        pageX: 627,
        pageY: 364,
        text: 'C16↵16.5',
        width: 77
      },
      {
        color: 'rgb(255, 255, 0)',
        height: 70,
        id: '1002',
        pageX: 709,
        pageY: 364,
        text: 'C16↵16.18',
        width: 77
      },
      {
        color: 'rgb(255, 255, 0)',
        height: 162,
        id: '1002',
        pageX: 57,
        pageY: 528,
        text: 'C16↵16.18',
        width: 62,
        rotate: 26
      }
    ]
  },
  getImage() {
    let that = this
    wx.getImageInfo({
      src: '../../images/demo_picture.jpg',
      success: function (res) {
        const { width, height } = res
        that.setData({
          'imageInfo.width': width,
          'imageInfo.height': height
        })
        // that.createContent()
      }
    })
  },
  // createContent() {
  //   this.data.tags.forEach(item => {
  //     this.createCanvas(item)
  //   })
  // },
  // createCanvas(item) {
  //   const ctx = wx.createCanvasContext(`canvas_${item.id}`, this)
  //   ctx.save()
  //   ctx.beginPath()
  //   ctx.moveTo(item.pageX, item.pageY)
  //   ctx.lineTo(item.pageX + item.width, item.pageY)
  //   ctx.lineTo(item.pageX + item.width, item.pageY + item.height)
  //   ctx.lineTo(item.pageX, item.pageY + item.height)
  //   ctx.fill()
  //   ctx.draw()
  // },
  clickTag({ target: { dataset: { item } } }) {
    wx.showToast({ title: item.id, icon: 'none' })
  },
  start({touches}) {
    if (touches.length === 1) {
      this.setData({
        touches: touches[0]
      })
      this.imageLeft = this.data.imageInfo.left
      this.imageTop = this.data.imageInfo.top
    }
  },
  moving({ touches }) {
    try {
      const { windowWidth, windowHeight } = wx.getSystemInfoSync()
      let widthScale = this.data.imageInfo.width / windowWidth
      let heightScale = this.data.imageInfo.height / windowHeight
      let _touches = touches[0]
      let left = this.imageLeft + _touches.clientX - this.data.touches.clientX
      let top = this.imageTop + _touches.clientY - this.data.touches.clientY
      this.setData({
        'imageInfo.left': left,
        'imageInfo.top': top
      })
    } catch (err) {
      console.log(err)
    }
  },
  rotate() {
    const { pageX, pageY } = this.data.touches
    this.data.scale = this.data.scale + 1
    const { windowWidth, windowHeight } = wx.getSystemInfoSync()
    let left = this.data.imageInfo.left - (windowWidth / 2 - this.data.imageInfo.left) * (this.data.scale) / (this.data.scale)
    let top = this.data.imageInfo.top - (windowHeight / 2 - this.data.imageInfo.top) * (this.data.scale) / (this.data.scale)
    this.data.tags.forEach(item => {
      item.height = item.height * this.data.scale
      item.pageX = item.pageX * this.data.scale
      item.pageY = item.pageY * this.data.scale
      item.width = item.width * this.data.scale
    })
    this.setData({
      'imageInfo.width': this.data.imageInfo.width * this.data.scale,
      'imageInfo.height': this.data.imageInfo.height * this.data.scale,
      'imageInfo.left': left,
      'imageInfo.top': top,
      tags: this.data.tags,
      scale: this.data.scale
    })
  },
  // narrow() {
  //   const { pageX, pageY } = this.data.touches
  //   let scale = this.data.scale - 1
  //   const { windowWidth, windowHeight } = wx.getSystemInfoSync()
  //   let left = this.data.imageInfo.left - (windowWidth / 2 - this.data.imageInfo.left) * (scale) / (scale)
  //   console.log(left)
  //   let top = this.data.imageInfo.top - (windowHeight / 2 - this.data.imageInfo.top) * (scale) / (scale)
  //   this.data.tags.forEach(item => {
  //     item.height = item.height * scale
  //     item.pageX = item.pageX * scale
  //     item.pageY = item.pageY * scale
  //     item.width = item.width * scale
  //   })
  //   this.setData({
  //     'imageInfo.width': this.data.imageInfo.width * scale,
  //     'imageInfo.height': this.data.imageInfo.height * scale,
  //     'imageInfo.left': left,
  //     'imageInfo.top': top,
  //     tags: this.data.tags,
  //     scale: scale
  //   })
  // },
  onLoad() {
    this.getImage()
  },
})
