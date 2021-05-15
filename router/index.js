import WxNav from "wx-nav"

const nav = new WxNav({
  maxStack: 10,
  tabBarPages: {
    index: 'pages/index/index'
  },
  beforeEach(to, from, next) {
    next()
  },
  afterEach(to, from) {}
})

export default nav