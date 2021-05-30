import { updateUserInfo } from '../../api/index.js'
Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    getuserinfo({detail}) {
      if (detail.errMsg === 'getUserInfo:ok') this.eidtUserInfo(detail)
      else this.triggerEvent('fail')
    },
    async eidtUserInfo(detail) {
      try {
        let { cloudID, encryptedData, errMsg, iv, rawData, signature } = detail
        await updateUserInfo({ cloudID, encryptedData, errMsg, iv, rawData, signature })
        this.triggerEvent('success')
      } catch (err) {
        console.log(err)
        wx.showToast({title: err.msg, icon: 'none'})
      } finally {
        wx.hideLoading()
      }
    }
  }
})