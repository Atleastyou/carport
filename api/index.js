import { fetch } from '../utils/fetch'

// 上传微信登录信息
const wxLogin = (data) => fetch({
  url: '/user/login',
  method: 'POST',
  data
})
// 上传微信登录信息
const updateUserInfo = (data) => fetch({
  url: '/user/update',
  method: 'POST',
  data
})

export {
  wxLogin,
  updateUserInfo
}