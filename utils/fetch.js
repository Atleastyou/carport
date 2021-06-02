const { miniProgram: { envVersion } } = wx.getAccountInfoSync()
import { wxLogin } from '../api/index.js'

const baseUrl = {
  // 开发版
  develop: "https://parking-mini.hyp-arch.com/api",
  // 体验版
  trial: "https://parking-mini.hyp-arch.com/api",
  // 正式版
  release: "https://parking-mini.hyp-arch.com/api"
}[envVersion || 'release']

// 设置请求拦截器
const fetch = (params = {}) => {
  const cookie = wx.getStorageSync('cookie')
  let { platform } = wx.getSystemInfoSync()
  let ver = 14
  if (params.method === 'POST') {
    params.header = { 'mini-token': cookie, ver: ver, platform: platform }
  } else {
    params.header = { 'Content-Type': 'application/json', 'mini-token': cookie, ver: ver, platform: platform }
    params.timestamp = +new Date()
  }
  params.url = baseUrl + params.url

  // 返回promise
  return wx.$pro.request({ ...params })
    .then(async ({ data }) => {
      // 保存cookie
      if (data && data.data && data.data.token) wx.setStorageSync('cookie', data.data.token)
      // ... 各种异常情况的逻辑处理
      if (data.code === 0) return Promise.resolve(data)
      else if (data.code === 200100002) againLogin()
      else return Promise.reject(data)
    })
}
let againLogin = async function () {
  try {
    const { code } = await wx.$pro.login()
    await wxLogin({ code: code })
  } catch (err) {
    console.log(err)
  }
}
export { fetch }