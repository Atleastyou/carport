import { fetch } from '../utils/fetch'

// 上传微信登录信息
const wxLogin = (data) => fetch({
  url: '/user/login',
  method: 'POST',
  data
})
// 上传微信登录信息
const updateUserInfo = (data) => fetch({
  url: '/user/wechat/info',
  method: 'POST',
  data
})
// 获取用户信息
const getUserInfo = (data) => fetch({
  url: '/user/mine',
  data
})
// 获取楼盘列表
const getEstateList = (data) => fetch({
  url: '/estate/search',
  method: 'POST',
  data
})
// 楼盘详情
const getDetail = (data) => fetch({
  url: `/estate/view/${data.id}`,
})

export {
  wxLogin,
  updateUserInfo,
  getUserInfo,
  getEstateList,
  getDetail
}