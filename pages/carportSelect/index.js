const app = getApp()

Page({
  data: {
    viewSize: {
      x: '',
      y: ''
    },
    imageSize: {
      x: '',
      y: ''
    },
    scaleSize: {
      x: '',
      y: ''
    },
    postTranslate: {
      x: '',
      y: ''
    },
    bitmapOriginPoint: {
      x: '',
      y: ''
    },
    clickPoint: {
      x: '',
      y: ''
    },
    tempPoint: {
      x: '',
      y: ''
    },
    originScale: {
      x: '',
      y: ''
    },
    doubleClickZoom: 2,
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
        const { windowWidth, windowHeight } = wx.getSystemInfoSync()
        let viewSize = { x: windowWidth, y: windowHeight }
        let imageSize = { x: width, y: height }
        let scalex = viewSize.x / imageSize.x
        let scaley = viewSize.y / imageSize.y
        let scale = scalex < scaley ? scalex : scaley
        let scaleSize = { x: scale * imageSize.x, y: scale * imageSize.y }
        let bitmapOriginPoint= {}
        if (scalex < scaley) {
          that.translationImage(0, viewSize.y / 2 - scaleSize.y / 2)
          bitmapOriginPoint = {
            x: 0,
            y: viewSize.y / 2 - scaleSize.y / 2
          }
        } else {
          that.translationImage(viewSize.x / 2 - scaleSize.x / 2, 0)
          bitmapOriginPoint = {
            x: viewSize.x / 2 - scaleSize.x / 2,
            y: 0
          }
        }
        let originScale = {
          x: scale,
          y: scale
        }
        that.setData({ 'viewSize': viewSize, 'imageSize': imageSize, 'scaleSize': scaleSize, 'bitmapOriginPoint': bitmapOriginPoint, 'originScale': originScale })
      }
    })
  },
  translationImage(x, y) {
    this.setData({
      'postTranslate.x': x,
      'postTranslate.y': y
    })
  },
  start({ touches }) {
    let clickPoint = {
      x: touches[0].clientX,
      y: touches[0].clientY
    }
    let bitmapOriginPoint = this.data.bitmapOriginPoint
    let scaleSize = this.data.scaleSize
    let originScale = this.data.originScale
    let imageSize = this.data.imageSize
    let tempPoint = {
      x: (clickPoint.x - bitmapOriginPoint.x) / scaleSize.x,
      y: (clickPoint.y - bitmapOriginPoint.y) / scaleSize.y
    }
    let newScaleSize = {
      x: originScale.x * 2 * imageSize.x,
      y: originScale.y * 2 * imageSize.y
    }
    let postTranslate = {
      x: clickPoint.x - (bitmapOriginPoint.x + tempPoint.x * newScaleSize.x),
      y: clickPoint.y - (bitmapOriginPoint.y + tempPoint.y * newScaleSize.y)
    }
    this.setData({
      'scaleSize': newScaleSize,
      'postTranslate': postTranslate,
      'tempPoint': tempPoint,
      'clickPoint': clickPoint
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
  // start({touches}) {
  //   if (touches.length === 2) {
  //     this.touchesMove = true
  //     this.startTouches = touches
  //   }
  //   this.initTranslation = this.data.imageInfo
  // },
  end() {
    this.touchesMove = false
  },
  moving({ touches }) {
    if (touches.length === 2 && this.touchesMove) {
      let xPoit = (touches[0].clientX + touches[1].clientX) / 2
      let yPoit = (touches[0].clientY + touches[1].clientY) / 2
      let x = (xPoit - this.initTranslation.left) / this.initTranslation.width
      let newx = xPoit - (this.initTranslation.left + x * this.initTranslation.width)
      let y = (yPoit - this.initTranslation.top) / this.initTranslation.height
      let newy = yPoit - (this.initTranslation.top + x * this.initTranslation.height)
      console.log(newx, newy)
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
