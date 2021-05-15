/**
 * 事件分发方法，可以在组件中使用，也可以在页面中使用，方便页面间数据通信，特别是页面数据的状态同步。
 * 
 * @param {String} name 事件名称，即页面中注册的用于调用的方法名
 * @param {any} props 事件数据，事件发送时传递的数据，可以是String，Number，Boolean，Object等，视具体事件处理逻辑而定，没有固定格式
 * @param {Boolean} isAll 事件传递方式，是否全部页面分发，默认分发给所有页面
 */
const emitEvent = function (name, props, isAll = true) {
  let pages = getCurrentPages()
  if (isAll) {
    for (let i = 0, len = pages.length; i < len; i++) {
      let page = pages[i]
      if (page.hasOwnProperty(name) && typeof (page[name]) === 'function') page[name](props)
    }
  } else {
    if (pages.length > 1) {
      let lastPage = pages[pages.length - 2]
      if (lastPage.hasOwnProperty(name) && typeof (lastPage[name]) === 'function') lastPage[name](props)
    }
  }
}

// px转rpx
const pxToRpx = function (px) {
  return wx.$pro.getSystemInfo().then(systemInfo => 750 / systemInfo.windowWidth * px)
}

// rpx转px
const rpxToPx = function (rpx) {
  return wx.$pro.getSystemInfo().then(systemInfo => 750 / systemInfo.windowWidth / 750 * rpx)
}

// 计算scrollview能够使用的剩余高度
const getScrollViewSize = function (deductedSize) {
  return wx.$pro.getSystemInfo()
    .then(res => this.getPxToRpx(res.windowHeight))
    .then(res => res - deductedSize)
}

// 对象转query
const stringifyQuery = function (query) {
  return Object.keys(query)
    .map(key => `${key}=${query[key]}`)
    .join('&')
}
// query转对象
const queryToObject = function (query) {
  let _query = {}
  query.split('&').forEach(item => {
    const arr = item.split('=')
    _query[arr[0]] = arr[1]
  })
  return _query
}

export {
  emitEvent,
  pxToRpx,
  rpxToPx,
  getScrollViewSize,
  stringifyQuery,
  queryToObject
}
