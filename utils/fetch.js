const { miniProgram: { envVersion } } = wx.getAccountInfoSync()
import { wxLogin, getMyCard, userInfo } from '../api/index'

const baseUrl = {
  // 开发版
  develop: "http://t.hkb.chaosaas.cn/api",
  // 体验版
  trial: "https://hkb.chaosaas.cn/api",
  // 正式版
  release: "https://hkb.chaosaas.cn/api"
}[envVersion || 'release']

// 设置请求拦截器
const fetch = (params = {}) => {
  const cookie = wx.getStorageSync('cookie')
  let { platform } = wx.getSystemInfoSync()
  let ver = 14
  if (params.method === 'POST') {
    params.header = { cookie: 'PHPSESSID=' + cookie, ver: ver, platform: platform }
  } else {
    params.header = { 'Content-Type': 'application/json', cookie: 'PHPSESSID=' + cookie, ver: ver, platform: platform }
    params.timestamp = +new Date()
  }
  params.url = baseUrl + params.url

  // 返回promise
  return wx.$pro.request({ ...params })
    .then(({ data }) => {
      if (data.removal && data.removal.removal_msg) {
        wx.showModal({
          title: '提示',
          content: data.removal.removal_msg,
          confirmText: '知道了',
          showCancel: false,
          success: function (res) {
            if (data.removal.login_uid) {
              postWxLogin({ login_uid: data.removal.login_uid })
            }
          }
        })
      }
      // 保存cookie
      if (data.var_session_id) wx.setStorageSync('cookie', data.var_session_id)
      // ... 各种异常情况的逻辑处理
      // if (!data.status && data.msg === '您的VIP已到期') wx.$nav.switchTab('/pages/account/index')
      if (data.status === 1) return Promise.resolve(data)
      return Promise.reject(data)
    })
}
let postWxLogin = async ({ login_uid }) => {
  try {
    const { code } = await wx.$pro.login()
    await wxLogin({ js_code: code, login_uid })
    await getUserInfo()
    await getNewMyCard()
  } catch (err) {
    console.log(err)
    wx.showToast({ title: err.msg, icon: 'none' })
  }
}
let getNewMyCard = async () => {
  try {
    const { data } = await getMyCard()
    const app = getApp()
    app.globalData.card = data.card || {}
    if (data.video_url) app.globalData.card.video_url = data.video_url
    const pages = getCurrentPages()
    let currentPage = pages[pages.length -1]
    currentPage.onShow()
  } catch (err) {
    console.log(err)
    wx.showToast({ title: err.msg, icon: 'none' })
  }
}
let getUserInfo = async () => {
  try {
    const { data } = await userInfo()
    const app = getApp()
    app.globalData.userInfo = data
    wx.$nav.switchTab('/pages/account/index/index')
  } catch (err) {
    console.log(err)
    wx.showToast({ title: err.msg, icon: 'none' })
  }
}
export { fetch }