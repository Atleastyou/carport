const app = getApp()

Page({
  data: {
    imageInfo: {
      top: -480,
      left: -55
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
    ],
    distance: ''
  },
  getImage() {
    let that = this
    wx.getImageInfo({
      src: '../../images/demo_picture.jpg',
      success: function (res) {
        const { width, height } = res
        that.setData({
          'imageInfo.width': width,
          'imageInfo.height': height,
          'imageInfo.top': '-480',
          'imageInfo.left': '-55'
        })
        // that.createContent()
      }
    })
  },
  changeMovable({ detail }) {
    // console.log(detail)
    // this.setData({
    //   'imageInfo.x': detail.y,
    //   'imageInfo.y': detail.x
    // })
  },
  scaleMovable({ detail }) {
    // this.setData({
    //   'imageInfo.top': detail.y,
    //   'imageInfo.left': detail.x
    // })
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
    } else {
      this.setData({        touches: touches      })
      this.setData({
        distance: this.getDistance(touches)
      })
    }
  },
  end() {
    console.log('end')
  },
  moving({ touches }) {
    if (touches.length === 2) {
      const xMove = this.data.touches[1].clientX > this.data.touches[0].clientX ? this.data.touches[1].clientX - this.data.touches[0].clientX : this.data.touches[0].clientX - this.data.touches[1].clientX
      const yMove = this.data.touches[1].clientY > this.data.touches[0].clientY ? this.data.touches[1].clientY - this.data.touches[0].clientY : this.data.touches[0].clientY - this.data.touches[1].clientY
      let pageX = this.data.touches[1].clientX > this.data.touches[0].clientX ? this.data.touches[1].clientX - (xMove/2) : this.data.touches[0].clientX - (xMove/2)
      let pageY = this.data.touches[1].clientY > this.data.touches[0].clientY ? this.data.touches[1].clientY - (yMove/2) : this.data.touches[0].clientY - (yMove/2)
      const { windowWidth, windowHeight } = wx.getSystemInfoSync()
      let x = this.data.imageInfo.width / (windowWidth / pageX)
      let y = this.data.imageInfo.height / (windowHeight / pageY)
      console.log(x, y)
      this.setData({ 
        'imageInfo.left': -y,
        'imageInfo.top': -x
      })
    }
    // try {
    //   if (touches.length === 1) {
    //     const { windowWidth, windowHeight } = wx.getSystemInfoSync()
    //     let widthScale = this.data.imageInfo.width / windowWidth
    //     let heightScale = this.data.imageInfo.height / windowHeight
    //     let _touches = touches[0]
    //     let left = this.imageLeft + _touches.clientX - this.data.touches.clientX
    //     let top = this.imageTop + _touches.clientY - this.data.touches.clientY
    //     this.setData({
    //       'imageInfo.left': left,
    //       'imageInfo.top': top
    //     })
    //   } else {
    //     let _distance = this.getDistance(touches)
    //     let diff = _distance - this.data.distance // 新旧差值
    //     let _scale = this.data.scale + 0.005 * diff
    //     const xMove = this.data.touches[1].clientX - this.data.touches[0].clientX
    //     const yMove = this.data.touches[1].clientY - this.data.touches[0].clientY
    //     const { windowWidth, windowHeight } = wx.getSystemInfoSync()
    //     console.log(this.data.imageInfo.width * (windowWidth / xMove))
    //     let left = this.data.imageInfo.left * _scale
    //     let top = this.data.imageInfo.top - (windowHeight / 2 - this.data.imageInfo.top) * (_scale) / (_scale)
    //     this.data.tags.forEach(item => {
    //       item.height = item.height * _scale
    //       item.pageX = item.pageX * _scale
    //       item.pageY = item.pageY * _scale
    //       item.width = item.width * _scale
    //     })
    //     this.setData({
    //       'imageInfo.width': this.data.imageInfo.width * _scale,
    //       'imageInfo.height': this.data.imageInfo.height * _scale,
    //       // 'imageInfo.left': left,
    //       // 'imageInfo.top': top,
    //       tags: this.data.tags
    //     })
    //     console.log(_scale, this.data)
    //   }
    // } catch (err) {
    //   console.log(err)
    // }
  },
  getDistance(touches) { // 返回两指之间的距离
    const xMove = touches[1].clientX - touches[0].clientX
    const yMove = touches[1].clientY - touches[0].clientY
    return Math.sqrt(xMove * xMove + yMove * yMove)
  },
  rotate() {
    const { pageX, pageY } = this.data.touches
    this.data.scale = this.data.scale + 1
    const { windowWidth, windowHeight } = wx.getSystemInfoSync()
    let left = this.data.imageInfo.left * (this.data.scale)
    console.log(left)
    let top = this.data.imageInfo.top
    this.data.tags.forEach(item => {
      item.height = item.height * this.data.scale
      item.pageX = item.pageX * this.data.scale
      item.pageY = item.pageY * this.data.scale
      item.width = item.width * this.data.scale
    })
    this.setData({
      'imageInfo.width': this.data.imageInfo.width * this.data.scale,
      'imageInfo.height': this.data.imageInfo.height * this.data.scale,
      // 'imageInfo.left': left,
      // 'imageInfo.top': top,
      tags: this.data.tags,
      scale: this.data.scale
    })
  },
  onLoad() {
    this.getImage()
  },
})
