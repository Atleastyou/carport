import { fetch } from '../utils/fetch'

// 上传微信登录信息
const wxLogin = (data) => fetch({
  url: '/author/wxLogin',
  method: 'POST',
  data
})
// 获取授权用户信息
const getUserInfoByWx = (data) => fetch({
  url: '/Author/getUserInfoByWx',
  data
})
// 获取系统配置信息
const getConfig = (data) => fetch({
  url: '/System/getConfig',
  data
})
// 保存授权的微信信息
const updateUserInfoByWx = (data) => fetch({
  url: '/User/updateUserInfoByWx',
  method: 'POST',
  data
})
// 获取用户信息
const userInfo = (data) => fetch({
  url: '/User/getMyInfo',
  data
})
// 绑定手机号
const bindPhone = (data) => fetch({
  url: '/User/bindPhoneByWx',
  method: 'POST',
  data
})
// 开通获客宝
const doOpenVip = (data) => fetch({
  url: '/User/doOpenVip',
  method: 'POST',
  data
})
// 编辑名片
const editCard = (data) => fetch({
  url: '/Card/editCard',
  method: 'POST',
  data
})
// 信息完善度
const integrityOfInformation = (data) => fetch({
  url: '/User/integrityOfInformation',
  data
})
// 编辑名片拓展信息
const editCardExtend = (data) => fetch({
  url: '/Card/editCardExtend',
  method: 'POST',
  data
})
// 获取名片拓展信息
const getCardExtend = (data) => fetch({
  url: '/Card/getCardExtend',
  data
})
// 获取我的名片
const getMyCard = (data) => fetch({
  url: '/User/getMyCard',
  data
})
// 获取指定用户的名片
const getCardInfo = (data) => fetch({
  url: '/Card/getUserCard',
  data
})
// 获取获客概况
const getStatistical = (data) => fetch({
  url: '/Tool/statistical',
  data
})
// 获取客户访问记录列表
const getCustomerClue = (data) => fetch({
  url: '/Customer/getClue',
  data
})
// 获取七牛上传凭证
const getQiniuToken = (data) => fetch({
  url: '/System/getQiniuToken',
  data
})
// 获取所有客户
const getCustomerList = (data) => fetch({
  url: '/Customer/getList',
  data
})
// 获取客户意向级别列表
const getLevel = (data) => fetch({
  url: '/Customer/getLevel',
  data
})
// 改变分组
const setCustomerLevel = (data) => fetch({
  url: '/Customer/setLevel',
  method: 'POST',
  data
})
// 获取客户访问类型列表
const getVisitType = (data) => fetch({
  url: '/Customer/getVisitType',
  data
})
// 获取客户详情
const getCustomerDetail = (data) => fetch({
  url: '/Customer/detail',
  data
})
// 设置客户备注名
const setNoteName = (data) => fetch({
  url: '/Customer/setNoteName',
  method: 'POST',
  data
})
// 获取小程序二维码
const getQrCode = (data) => fetch({
  url: '/WxApplet/getQrCode',
  data
})
// 点赞
const postLikeCard = (data) => fetch({
  url: '/Card/likeCard',
  method: 'POST',
  data
})
// 取消点赞
const postUnLikeCard = (data) => fetch({
  url: '/Card/unLikeCard',
  method: 'POST',
  data
})
// 检查是否点赞
const getCheckLike = (data) => fetch({
  url: '/Card/checkLike',
  data
})
// 获取小程序码参数
const getScene = (data) => fetch({
  url: '/WxApplet/getScene',
  data
})
// 获取通知消息
const getNotice = (data) => fetch({
  url: '/Notice/getNotice',
  data
})
// 获取未读消息数量
const getUnReadNum = (data) => fetch({
  url: '/Chat/getUnReadNum',
  data
})
// 获取图片素材列表
const getPictureList = (data) => fetch({
  url: '/Picture/getList',
  data
})
// 获取图片素材详情
const getPictureDetail = (data) => fetch({
  url: '/Picture/detail',
  data
})
// 添加编辑图片素材
const editPicture = (data) => fetch({
  url: '/Picture/edit',
  method: 'POST',
  data
})
// 删除图片素材
const delPicture = (data) => fetch({
  url: '/Picture/del',
  method: 'POST',
  data
})
// 获取产品列表
const getGoodsList = (data) => fetch({
  url: '/Goods/getList',
  data
})
// 收藏素材
const postCollection = (data) => fetch({
  url: '/Collection/collection',
  method: 'POST',
  data
})
// 取消收藏素材
const unCollection = (data) => fetch({
  url: '/Collection/unCollection',
  method: 'POST',
  data
})
// 获取文章分类
const getArticleCategoryList = (data) => fetch({
  url: '/ArticleCategory/getList',
  data
})
// 获取文章素材列表
const getArticleList = (data) => fetch({
  url: '/Article/getList',
  data
})
// 通过链接获取文章标题描述封面图
const getDetailByUrl = (data) => fetch({
  url: '/Article/getDetailByUrl',
  data
})
// 获取文章素材详情
const getArticleDetail = (data) => fetch({
  url: '/Article/detail',
  data
})
// 添加编辑文章
const editArticle = (data) => fetch({
  url: '/Article/edit',
  method: 'POST',
  data
})
// 获取视频获客素材列表
const getVideoList = (data) => fetch({
  url: '/Video/getList',
  data
})
// 获取视频素材详情
const getVideoDetail = (data) => fetch({
  url: '/Video/detail',
  data
})
// 添加编辑视频素材
const editVideo = (data) => fetch({
  url: '/Video/edit',
  method: 'POST',
  data
})
// 删除视频素材
const delVideo = (data) => fetch({
  url: '/Video/del',
  method: 'POST',
  data
})
// 获取VR获客素材列表
const getVrList = (data) => fetch({
  url: '/Vr/getVrList',
  data
})
// 添加编辑VR素材
const editVrName = (data) => fetch({
  url: '/vr/reName',
  method: 'POST',
  data
})
// 删除VR素材
const delVr = (data) => fetch({
  url: '/Vr/delVr',
  method: 'POST',
  data
})
// 获取案例素材列表
const getCasesList = (data) => fetch({
  url: '/Cases/getList',
  data
})
// 获取案例分类列表
const getCaseCategoryList = (data) => fetch({
  url: '/CaseCategory/getList',
  data
})
// 获取案例配置
const getCaseConfig = (data) => fetch({
  url: '/CaseCategory/getConfig',
  data
})
// 设置案例配置
const setCategoryConfig = (data) => fetch({
  url: '/CaseCategory/setConfig',
  method: 'POST',
  data
})
// 添加编辑案例分类
const editCaseCategory = (data) => fetch({
  url: '/CaseCategory/edit',
  method: 'POST',
  data
})
// 删除案例分类
const delCaseCategory = (data) => fetch({
  url: '/CaseCategory/del',
  method: 'POST',
  data
})
// 获取语音列表
const getVoiceList = (data) => fetch({
  url: '/Voice/getList',
  data
})
// 编辑添加案例
const editCases = (data) => fetch({
  url: '/Cases/edit',
  method: 'POST',
  data
})
// 获取案例详情
const getCasesDetail = (data) => fetch({
  url: '/Cases/detail',
  data
})
// 删除案例
const delCases = (data) => fetch({
  url: '/Cases/del',
  method: 'POST',
  data
})
// 获取产品分类列表
const getGoodCategoryList = (data) => fetch({
  url: '/GoodCategory/getList',
  data
})
// 添加产品分类
const editGoodCategory = (data) => fetch({
  url: '/GoodCategory/edit',
  method: 'POST',
  data
})
// 删除产品分类
const delGoodCategory = (data) => fetch({
  url: '/GoodCategory/del',
  method: 'POST',
  data
})
// 获取产品配置
const getGoodsConfig = (data) => fetch({
  url: '/GoodCategory/getConfig',
  data
})
// 设置产品配置
const setGoodsConfig = (data) => fetch({
  url: '/GoodCategory/setConfig',
  data
})
// 添加产品
const editGoods = (data) => fetch({
  url: '/Goods/edit',
  method: 'POST',
  data
})
// 获取产品详情
const getGoodsDetail = (data) => fetch({
  url: '/Goods/detail',
  data
})
// 开始浏览页面
const startViewPage = (data) => fetch({
  url: '/Page/startVisit',
  method: 'POST',
  data
})
// 结束浏览页面
const endViewPage = (data) => fetch({
  url: '/Page/endVisit',
  method: 'POST',
  data
})
// 删除产品
const delGoods = (data) => fetch({
  url: '/Goods/del',
  data
})
// 获取收藏类型
const getCollectionType = (data) => fetch({
  url: '/Collection/getType',
  data
})
// 获取已收藏数据列表
const getCollectionList = (data) => fetch({
  url: '/Collection/getList',
  data
})
// 获取名片夹数据
const getAcceptCard = (data) => fetch({
  url: '/Card/getAcceptCard',
  data
})
// 名片置顶取消置顶
const setCardTop = (data) => fetch({
  url: '/Card/setTop',
  method: 'POST',
  data
})
// 获取支付金额
const getVipPrice = (data) => fetch({
  url: '/Pay/getVipPrice',
  data
})
// 购买会员
const postBuyVIP = (data) => fetch({
  url: '/Pay/buyVIP',
  method: 'POST',
  data
})
// 开启微信通知
const setWxNotice = (data) => fetch({
  url: '/User/setWxNotice',
  method: 'POST',
  data
})
// 开启聊天通知
const setWxChatNotice = (data) => fetch({
  url: '/User/setWxChatNotice',
  method: 'POST',
  data
})
// 获取获客宝使用方法图片
const getToolConfig = (data) => fetch({
  url: '/Tool/getConfig',
  data
})
// 最后访问页面
const getLastVisitUid = (data) => fetch({
  url: '/User/getLastVisitUid',
  data
})
// 是否关注公众号
const wxFollowed = (data) => fetch({
  url: '/User/wxFollowed',
  data
})
// 授权登录
const confirmLogin = (data) => fetch({
  url: '/User/confirmLogin',
  data
})
// 获取文章分享数据
const getArticleShareData = (data) => fetch({
  url: '/Article/getShareData',
  data
})
// 获取案例分享数据
const getCasesShareData = (data) => fetch({
  url: '/Cases/getShareData',
  data
})
// 获取产品分享数据
const getGoodsShareData = (data) => fetch({
  url: '/Goods/getShareData',
  data
})
// 获取图文分享数据
const getPictureShareData = (data) => fetch({
  url: '/Picture/getShareData',
  data
})
// 获取视频分享数据
const getVideoShareData = (data) => fetch({
  url: '/Video/getShareData',
  data
})
// 获取VR分享数据
const getVrShareData = (data) => fetch({
  url: '/Vr/getShareData',
  data
})
// 删除文章素材
const postDelArticle = (data) => fetch({
  url: '/Article/del',
  method: 'POST',
  data
})
// 获取VR素材详情
const getVrDetail = (data) => fetch({
  url: '/Vr/getVrInfo',
  data
})
// 获取名片欢迎语
const getCardWelcome = (data) => fetch({
  url: '/Card/getWelcome',
  data
})
// 设置名片欢迎语
const setCardWelcome = (data) => fetch({
  url: '/Card/setWelcome',
  method: 'POST',
  data
})
// 分享次数
const updateShareNum = (data) => fetch({
  url: '/Share/updateShareNum',
  method: 'POST',
  data
})
// 关闭首页体验vip续费提示
const closePrompt = (data) => fetch({
  url: '/User/closePrompt',
  method: 'POST',
  data
})
// 下线
const offline = (data) => fetch({
  url: '/System/offline',
  method: 'POST',
  data
})
// 企业版海报
const getCompanyPoster = (data) => fetch({
  url: '/Company/getPoster',
  data
})
// 创建我的企业
const createMyCompany = (data) => fetch({
  url: '/Company/createMyCompany',
  method: 'POST',
  data
})
// 获取升级企业版价格
const getCompanyVipPrice = (data) => fetch({
  url: '/Company/getVipPrice',
  data
})
// 获取我创建中的企业
const getCreatingCompany = (data) => fetch({
  url: '/Company/getCreatingCompany',
  data
})
// 购买企业会员
const payCompanyVip = (data) => fetch({
  url: '/Company/pay',
  method: 'POST',
  data
})
// 获取邀请我的企业
const getInviteCompany = (data) => fetch({
  url: '/User/getInviteCompany',
  data
})
// 加入企业
const joinCompany = (data) => fetch({
  url: '/User/joinCompany',
  method: 'POST',
  data
})
// 获取企业获客概况
const getCompanyStatistical = (data) => fetch({
  url: '/Company/statistical',
  data
})
// 检查企业支付成功状态
const getPayCheckStatus = (data) => fetch({
  url: '/Pay/checkStatus',
  data
})
// 用公司ID拿用户ID
const getUidByCompanyId = (data) => fetch({
  url: '/Company/getUidByCompanyId',
  data
})
// 获取企业部门列表
const getDepartmentList = (data) => fetch({
  url: '/Department/getList',
  data
})
// 添加编辑企业部门
const editDepartment = (data) => fetch({
  url: '/Department/edit',
  method: 'POST',
  data
})
// 获取企业员工列表
const getCompanyStaffList = (data) => fetch({
  url: '/CompanyStaff/getList',
  data
})
// 删除企业部门
const delDepartment = (data) => fetch({
  url: '/Department/del',
  method: 'POST',
  data
})
// 编辑员工资料
const editCompanyStaff = (data) => fetch({
  url: '/CompanyStaff/edit',
  method: 'POST',
  data
})
// 获取员工详情
const getStaffDetail = (data) => fetch({
  url: '/CompanyStaff/detail',
  data
})
// 获取员工获客概况
const getStaffStatistical = (data) => fetch({
  url: '/CompanyStaff/statistical',
  data
})
// 移除员工
const delCompanyStaff = (data) => fetch({
  url: '/CompanyStaff/del',
  method: 'POST',
  data
})
// 替换员工
const replaceCompanyStaff = (data) => fetch({
  url: '/CompanyStaff/replace',
  method: 'POST',
  data
})
// 获取我的其他账号
const getMyOtherAccount = (data) => fetch({
  url: '/User/getMyOtherAccount',
  data
})
// 获取企业信息
const getCompanyDetail = (data) => fetch({
  url: '/company/detail',
  data
})
// 编辑企业信息
const editCompany = (data) => fetch({
  url: '/company/edit',
  method: 'POST',
  data
})
// 企业支付成功后获取login_uid
const getCheckCompany = (data) => fetch({
  url: '/Company/checkCompany',
  data
})
// 获取VR详情场景
const getVrSceneList = (data) => fetch({
  url: '/Vr/getVrSceneList',
  data
})
// 获取用户是否点过分享按钮
const getIsOnceShare = (data) => fetch({
  url: '/Share/isOnceShare',
  data
})
// 更新首次分享状态
const updateOnceShare = (data) => fetch({
  url: '/Share/updateOnceShare',
  method: 'POST',
  data
})
// 编辑添加公文包
const editDocument = (data) => fetch({
  url: '/Document/edit',
  method: 'POST',
  data
})
// 获取公文包列表
const getDocumentList = (data) => fetch({
  url: '/Document/getList',
  data
})
// 删除公文包
const delDocument = (data) => fetch({
  url: '/Document/del',
  method: 'POST',
  data
})
// 获取公文包分享海报
const getDocumentShareData = (data) => fetch({
  url: '/Document/getShareData',
  data
})
// 获取公文包详情
const getDocumentDetail = (data) => fetch({
  url: '/Document/detail',
  data
})

export {
  wxLogin,
  getUserInfoByWx,
  getConfig,
  updateUserInfoByWx,
  userInfo,
  bindPhone,
  doOpenVip,
  editCard,
  integrityOfInformation,
  editCardExtend,
  getCardExtend,
  getMyCard,
  getCardInfo,
  getStatistical,
  getCustomerClue,
  getQiniuToken,
  getCustomerList,
  getLevel,
  setCustomerLevel,
  getVisitType,
  getCustomerDetail,
  setNoteName,
  getQrCode,
  postLikeCard,
  postUnLikeCard,
  getCheckLike,
  getScene,
  getNotice,
  getUnReadNum,
  getPictureList,
  getPictureDetail,
  editPicture,
  delPicture,
  getGoodsList,
  postCollection,
  unCollection,
  getArticleCategoryList,
  getArticleList,
  getDetailByUrl,
  getArticleDetail,
  editArticle,
  getVideoList,
  getVideoDetail,
  editVideo,
  delVideo,
  getVrList,
  editVrName,
  delVr,
  getCasesList,
  getCaseCategoryList,
  getCaseConfig,
  setCategoryConfig,
  editCaseCategory,
  delCaseCategory,
  getVoiceList,
  editCases,
  getCasesDetail,
  delCases,
  getGoodCategoryList,
  editGoodCategory,
  delGoodCategory,
  getGoodsConfig,
  setGoodsConfig,
  editGoods,
  getGoodsDetail,
  startViewPage,
  endViewPage,
  delGoods,
  getCollectionType,
  getCollectionList,
  getAcceptCard,
  setCardTop,
  getVipPrice,
  postBuyVIP,
  setWxNotice,
  setWxChatNotice,
  getToolConfig,
  getLastVisitUid,
  wxFollowed,
  confirmLogin,
  getArticleShareData,
  getCasesShareData,
  getGoodsShareData,
  getPictureShareData,
  getVideoShareData,
  getVrShareData,
  postDelArticle,
  getVrDetail,
  getCardWelcome,
  setCardWelcome,
  updateShareNum,
  closePrompt,
  offline,
  getCompanyPoster,
  createMyCompany,
  getCompanyVipPrice,
  getCreatingCompany,
  payCompanyVip,
  getInviteCompany,
  joinCompany,
  getCompanyStatistical,
  getPayCheckStatus,
  getUidByCompanyId,
  getDepartmentList,
  editDepartment,
  getCompanyStaffList,
  delDepartment,
  editCompanyStaff,
  getStaffDetail,
  getStaffStatistical,
  delCompanyStaff,
  replaceCompanyStaff,
  getMyOtherAccount,
  getCompanyDetail,
  editCompany,
  getCheckCompany,
  getVrSceneList,
  getIsOnceShare,
  updateOnceShare,
  editDocument,
  getDocumentList,
  delDocument,
  getDocumentShareData,
  getDocumentDetail
}