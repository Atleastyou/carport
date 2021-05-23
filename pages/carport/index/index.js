import {} from '../../../api/index'
import { queryToObject } from '../../../utils/util'
const app = getApp()
Page({
  data: {
    types: [
      {
        title: '1-100'
      }, {
        title: '100-300'
      }, {
        title: '3-500'
      }
    ],
    activeType: '全部'
  },
  async wxLogin(redirect) {
    try {
      let login_uid = 0
      if (redirect && decodeURIComponent(redirect).indexOf('?') >= 0) {
        login_uid = queryToObject(decodeURIComponent(redirect).split('?')[1])['login_uid'] || 0
      }
      console.log(login_uid)
      const { code } = await wx.$pro.login()
      // await wxLogin({ js_code: code, login_uid })
    } catch ({ msg }) {
      wx.showToast({ title: msg, icon: 'none' })
    }
  },
  async onLoad() {}
})
