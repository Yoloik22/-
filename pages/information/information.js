const chooseLocation = requirePlugin('chooseLocation');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    information: ''
  },

  backIndex(){
    wx.navigateBack({
      delta: 1,
    })
  },

  onShow () {
    const location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
    this.setData({
      information: location
    })
  }
 
})