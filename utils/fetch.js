const { miniProgram: { envVersion } } = wx.getAccountInfoSync()

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
    .then(({ data }) => {
      // 保存cookie
      console.log(data)
      if (data.data.token) wx.setStorageSync('cookie', data.data.token)
      // ... 各种异常情况的逻辑处理
      if (data.code === 0) return Promise.resolve(data)
      return Promise.reject(data)
    })
}
export { fetch }