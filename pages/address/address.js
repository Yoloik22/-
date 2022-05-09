
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0,
    longitude: 0
  },

  onLoad: function (options) {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log(latitude, longitude)
        this.setData({
          latitude,
          longitude
        })
      }
    })
  },


})