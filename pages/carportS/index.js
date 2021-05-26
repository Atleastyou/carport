const app = getApp()

Page({
  data: {
    imageInfo: {
      width: '',
      height: ''
    },
    matrix: {
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: 0,
      f: 0
    },
    preTouchesClientx1y1x2y2: [],
    preTouchPosition: {
      x: 0,
      y: 0
    },
    rect: {
      left: '',
      top: ''
    },
    translateX: 0,
    translateY: 0,
    scaleRatio: 1,
    scaleOrigin: {
      x: 0,
      y: 0
    },
    transformOrigin: {
      x: 0,
      y: 0
    },
    originHaveSet: false,
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
          'imageInfo.height': height,
          'imageInfo.top': '-480',
          'imageInfo.left': '-55'
        })
        // that.createContent()
      }
    })
  },
  recordPreTouchPosition(touch) {
    let preTouchPosition = {
      x: touch.clientX,
      y: touch.clientY
    }
    this.setData({
      preTouchPosition: preTouchPosition
    })
  },
  getDistance(x0, y0, x1, y1) { // 返回两指之间的距离
    const xMove = x1 - x0
    const yMove = y1 - y0
    return Math.sqrt(xMove * xMove + yMove * yMove)
  },
  relativeCoordinate(x, y, rect) {
    let cx = (x - this.data.rect.left) / this.data.scaleRatio
    let cy = (y - this.data.rect.top) / this.data.scaleRatio
    return {
      x: cx,
      y: cy
    }
  },
  getDomQuery() {
    let that = this
    let query = wx.createSelectorQuery()
    query.select('.detail-container').boundingClientRect(res => {
      let rect = {
        left: res.left,
        top: res.top
      }
      that.setData({
        rect: rect
      })
      // this.canvasWidth = Math.round(res.width)
      // this.canvasHeight = Math.round(res.height)
    }).exec()
  },
  start({ touches }) {
    if (touches.length > 1) {
      let one = touches['0']
      let two = touches['1']
      this.setData({
        preTouchesClientx1y1x2y2: [one.clientX, one.clientY, two.clientX, two.clientY],
        originHaveSet: false
      })
    }
    this.recordPreTouchPosition(touches[0])
  },
  moving({ touches }) {
    if (touches.length === 1) {
      let oneTouch = touches['0']
      let translated = { left: this.data.matrix.e, top: this.data.matrix.f }
      let translateX = oneTouch.clientX - this.data.preTouchPosition.x + translated.left
      let translateY = oneTouch.clientY - this.data.preTouchPosition.y + translated.top
      // if (translateX <= 0) translateX = 0
      // if (translateY >= this.data.imageInfo.width)  translateY = this.data.imageInfo.width
      let matrix = {
        a: this.data.scaleRatio,
        b: 0,
        c: 0,
        d: this.data.scaleRatio,
        e: translateX,
        f: translateY
      }
      // let matrix = `matrix(${scaleRatio}, 0, 0, ${scaleRatio}, ${translateX}, ${translateY})`;
      // setStyle('transform', matrix);
      this.setData({
        matrix: matrix,
        translateX: translateX,
        translateY: translateY
      })
      this.recordPreTouchPosition(oneTouch)
    } else {
      let one = touches['0']
      let two = touches['1']
      let diff = this.getDistance(one.clientX, one.clientY, two.clientX, two.clientY) - this.getDistance(...this.data.preTouchesClientx1y1x2y2) // 新旧差值
      let _scale = this.data.scaleRatio + 0.005 * diff
      if (_scale <= 0.5) _scale = 0.5
        // 移动视线中心
      this.getDomQuery()
      let origin = this.relativeCoordinate((one.clientX + two.clientX) / 2, (one.clientY + two.clientY) / 2)
      // 修正视野变化带来的平移量
      let translateX = (_scale - 1) * (origin.x - this.data.scaleOrigin.x) + this.data.translateX
      let translateY = (_scale - 1) * (origin.y - this.data.scaleOrigin.y) + this.data.translateY
      let transformOrigin = {
        x: origin.x,
        y: origin.y
      }
      let matrix = {
        a: _scale,
        b: 0,
        c: 0,
        d: _scale,
        e: translateX,
        f: translateY,
      }
      let preTouchesClientx1y1x2y2 = [one.clientX, one.clientY, two.clientX, two.clientY]
      this.setData({
        matrix: matrix,
        scaleRatio: _scale,
        translateX: translateX,
        translateY: translateY,
        scaleOrigin: origin,
        transformOrigin: transformOrigin,
        preTouchesClientx1y1x2y2: preTouchesClientx1y1x2y2
      })
      // let matrix = `matrix(${scaleRatio}, 0, 0, ${scaleRatio}, ${translateX}, ${translateY})`;
      // setStyle('transform', matrix);
      // preTouchesClientx1y1x2y2 = [one.clientX, one.clientY, two.clientX, two.clientY];
    }
  },
  end({ touches }) {
    if (touches.length === 1) {
      this.recordPreTouchPosition(touches['0'])
    }
  },
  onLoad() {
    this.getImage()
  },
})
