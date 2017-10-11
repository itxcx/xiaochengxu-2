// pages/info-mange_02/info.js
Page({

  manger:function(){
    wx:wx.navigateTo({
      url: 'gongyin/gongyin',

    })
  },
  caigou: function () {
    wx: wx.navigateTo({
      url: 'caigou/caigou',

    })
  },
  zhanhui: function () {
    wx: wx.navigateTo({
      url: 'zhanhui/zhanhui',

    })
  },
  zixun: function () {
    wx: wx.navigateTo({
      url: 'zixun/zixun',

    })
  },
})