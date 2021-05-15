const app = getApp()
let timer = null
import mixins from '../../../utils/mixins'
import {} from '../../../api/index'
Page({
  behaviors: [],
  data: {},
  async getMyCard() {
    try {
      const { card } = app.globalData
      this.setData({ cardInfo: card })
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  initNavBar({ detail }) {
    let { navBarHeight, navBarExtendHeight } = detail
    this.setData({
      navbarHeight: navBarHeight + navBarExtendHeight,
    })
  },
  promote() {
    this.setData({ showPayModal: true })
    wx.hideTabBar()
  },
  async open() {
    await doOpenVip()
    await this.getUserInfo()
    await this.getNewMyCard()
  },
  async createCompany() {
    if (!this.data.userInfo.base.company_id && this.data.userInfo.create_company_id) {
      this.getCheckCompany()
    } else {
      await this.getInviteCompany()
      if (this.data.companyList.length) {
        this.setData({ showSelectCompany: true })
      } else {
        wx.$nav.navigateTo('/pages/company/introduce/index')
      }
    }
  },
  closeSelectCompany() {
    this.setData({ showSelectCompany: false })
  },
  makePhoneCall() {
    if (this.data.config.cs_phone) {
      wx.makePhoneCall({
        phoneNumber: this.data.config.cs_phone
      })
    }
  },
  paySuccess() {
    const userInfo = app.globalData.userInfo
    if (userInfo.base.user_type !== 1) this.getMyCard()
    this.setData({
      userInfo: userInfo,
      'extra.mobile': userInfo.base.mobile,
      showPayModal: false,
      showPaySuccess: true
    })
  },
  closePaySuccess() {
    wx.showTabBar()
    this.setData({
      showPaySuccess: false
    })
  },
  closePayModal() {
    if (this.data.userInfo.base.user_type !== 1 && this.data.userInfo.vip.remaining_time) wx.showTabBar()
    this.setData({ showPayModal: false })
  },
  success() {
    if (this.data.userInfo.base.user_type !== 1) this.getMyCard()
    this.setData({
      userInfo: userInfo,
      'extra.mobile': userInfo.base.mobile
    })
  },
  companyPromote() {
    wx.showModal({
      title: '提示',
      content: '请联系客服4000-666-820',
      confirmText: '拨打电话',
      success(res) {
        if (res.confirm) {
          wx.makePhoneCall({
            phoneNumber: '4000-666-820'
          })
        }
      }
    })
  },
  closeCompanyPayModal() {
    this.setData({ showCompanyPay: false })
  },
  payCompanySuccess() {
    this.closeCompanyPayModal()
    const { userInfo, card } = app.globalData
    this.setData({ cardInfo: card, userInfo })
    // wx.$nav.switchTab('/pages/account/index/index')
  },
  async getCheckCompany() {
    try {
      const { data } = await getCheckCompany({ company_id: this.data.userInfo.create_company_id })
      if (data.status !== 3) wx.$nav.navigateTo('/pages/company/apply/index')
    } catch (err) {
      console.log(err)
      wx.showToast({ title: err.msg, duration: 5000, icon: 'fail' })
    }
  },
  // async getMobile({ detail }) {
  //   if (detail.errMsg === 'getPhoneNumber:ok') {
  //     try {
  //       wx.showLoading()
  //       const { code } = await wx.$pro.login()
  //       const { data } = await bindPhone({ iv: detail.iv, enc_data: detail.encryptedData, js_code: code })
  //       app.globalData.userInfo.base.mobile = data.mobile
  //       wx.$nav.navigateTo('/pages/company/introduce/index')
  //     } catch (err) {
  //       wx.showToast({ title: err.msg, icon: 'none' })
  //     } finally {
  //       wx.hideLoading()
  //     }
  //   }
  // },
  async getUnReadNum() {
    try {
      const { data } = await getUnReadNum()
      if (data.unread_num) wx.showTabBarRedDot({ index: 3 })
      else wx.hideTabBarRedDot({ index: 3 })
    } catch (err) {
      console.log(err)
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  async changeAccount() {
    wx.showLoading({ title: '正在切换...' })
    await this.wxLogin({ login_uid: this.data.accounts[0].id })
    await this.getMyOtherAccount()
    wx.hideLoading()
  },
  async getMyOtherAccount() {
    try {
      const { data } = await getMyOtherAccount()
      this.setData({ accounts: data.accounts })
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  async changeFailAccount() {
    wx.showLoading({ title: '正在切换...' })
    await this.wxLogin({ login_uid: this.data.userInfo.vip.login_uid })
    wx.hideLoading()
  },
  async getIsOnceShare() {
    try {
      const { data } = await getIsOnceShare()
      app.globalData.once_share = data.once_share
    } catch (err) {
      console.log(err)
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  async wxLogin({ login_uid }) {
    try {
      const { code } = await wx.$pro.login()
      await wxLogin({ js_code: code, login_uid })
      wx.showTabBar({})
      this.getUserInfo()
      this.getNewMyCard()
      this.getIsOnceShare()
    } catch ({ msg }) {
      wx.showToast({ title: msg, icon: 'none' })
    }
  },
  async getNewMyCard() {
    try {
      const { data } = await getMyCard()
      this.setData({ cardInfo: data.card || {} })
      app.globalData.card = data.card || {}
      if (data.video_url) app.globalData.card.video_url = data.video_url
    } catch (err) {
      console.log(err)
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  async getUserInfo() {
    try {
      const { data } = await userInfo()
      this.setData({ userInfo: data })
      app.globalData.userInfo = data
      if (data.vip.id && !data.vip.remaining_time) {
        wx.hideTabBar({})
        this.setData({ showFailModal: true })
      } else {
        wx.showTabBar({})
        this.setData({ showFailModal: false })
      }
    } catch (err) {
      console.log(err)
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  onShow () {},
  onHide() {},
  onUnload () {}
})
