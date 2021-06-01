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
// 获取城市列表
const getCity = (data) => fetch({
  url: '/region/index/city',
  data
})
// 获取楼盘车位信息
const getEstateParking = (data) => fetch({
  url: `/estate/${data.id}/parking/num`,
})
// 获取楼层信息
const getFloorList = (data) => fetch({
  url: `/estate/floor/list/${data.id}`,
})
// 收藏
const postCollection = (data) => fetch({
  url: '/favorite/add',
  method: 'POST',
  data
})
// 取消收藏
const cancelCollection = (data) => fetch({
  url: '/favorite/delete/one',
  method: 'POST',
  data
})
// 获取楼层平面图
const getFloorImage = (data) => fetch({
  url: `/floor/image/info/${data.id}`,
})
// 获取楼层车位信息
const getFloorCar = (data) => fetch({
  url: `/parking/floor/map/${data.id}`,
})
// 获取车位详情
const getCarDetail = (data) => fetch({
  url: `/parking/view/${data.id}`,
})
// 获取订单列表
const getOrderList = (data) => fetch({
  url: '/order/search',
  method: 'POST',
  data
})
// 获取订单详情
const getOrderDetail = (data) => fetch({
  url: `/order/view/${data.id}`,
})
// 获取收藏夹列表
const getCollectionList = (data) => fetch({
  url: '/favorite/search',
  method: 'POST',
  data
})
// 批量取消收藏
const batchCollection = (data) => fetch({
  url: '/favorite/delete/ids',
  method: 'POST',
  data
})
// 获取首页banner
const getBanner = (data) => fetch({
  url: `/sys/index/banner`,
})


export {
  wxLogin,
  updateUserInfo,
  getUserInfo,
  getEstateList,
  getDetail,
  getCity,
  getEstateParking,
  getFloorList,
  postCollection,
  cancelCollection,
  getFloorImage,
  getFloorCar,
  getCarDetail,
  getOrderList,
  getOrderDetail,
  getCollectionList,
  batchCollection,
  getBanner
}