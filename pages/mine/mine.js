let startY = 0; // 手指起始的坐标
let moveY = 0; // 手指移动的坐标
let moveDistance = 0; // 手指移动的距离

Page({
  data: {
    userInfo: ''
  },
  onLoad(){
    let user = wx.getStorageSync('user')
    console.log('进入小程序的index页面获取缓存',user)
    this.setData({
      userInfo: user
    })
  },
  //授权登录
  login(){
      wx.getUserProfile({
        desc: '必须授权才可以继续使用',
        success: res => {
          let user = res.userInfo
          //把用户信息缓存到本地
          wx.setStorageSync('user', user)
          console.log("用户信息",user)
          this.setData({
            userInfo: user
          })
        },
        fail: res => {
          console.log('授权失败',res)
        }
      })
    },
    //退出登录
    loginOut(){
      this.setData({
        userInfo: ''
      })
      wx.setStorageSync('user', null)
    },
    handleTouchStart(event){
      this.setData({
        coveTransition: ''
      })
      // 获取手指起始坐标
      startY = event.touches[0].clientY;
    },
    handleTouchMove(event){
      moveY = event.touches[0].clientY;
      moveDistance = moveY - startY;
      
      if(moveDistance <= 0){
        return;
      }
      if(moveDistance >= 80){
        moveDistance = 80;
      }
      // 动态更新coverTransform的状态值
      this.setData({
        coverTransform: `translateY(${moveDistance}rpx)`
      })
    },
    handleTouchEnd(){
      // 动态更新coverTransform的状态值
      this.setData({
        coverTransform: `translateY(0rpx)`,
        coveTransition: 'transform 1s linear'
      })
    }
})