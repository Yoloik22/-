const key = 'VWBBZ-GQDCW-EQORM-OBUZH-56QAV-SFFOK'; 
const referer = '校园链送'; 
const location = JSON.stringify({
  latitude: 39.95529,
  longitude: 116.800061
});
const category = '生活服务,娱乐休闲';

Page({

  //返回触发
  onLoad: function(e){
    wx.navigateBack({
      delta: 1,
    })
  },

  //首先触发
  onShow: function(e){
    wx.navigateTo({
      url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}&category=${category}`
    });
  }
})
