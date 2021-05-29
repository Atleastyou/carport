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
      else this.$emit('fail')
    },
    async eidtUserInfo(detail) {
      try {
        console.log(detail)
        await updateUserInfo({ ...detail.userInfo })
        // wx.showLoading()
        // const { data } = await editUser({iv, encrypted_data: encryptedData})
        // this.$parent.$parent.globalData.userInfo = data.userInfo
        // this.$emit('success')
      } catch ({ msg }) {
        wx.showToast({title: msg, icon: 'none'})
      } finally {
        wx.hideLoading()
      }
    }
  }
})