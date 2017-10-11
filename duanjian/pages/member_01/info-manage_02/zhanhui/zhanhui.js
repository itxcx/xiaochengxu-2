Page({
  data: {
    navArr: ["已发布", "审核中","未通过","供应分类"],
    index: 0,
    currentTab: 0,
    hiddenTips: 1,
    showTips: '',
    animationData: {},
    userName: '',
    userPwd: '',
    userPhone: '',
    code: '',
    send: "发送",
    lock: 'disable',
    click: true
  },
  onLoad: function () {

    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          screenWidth: res.screenWidth,
          screenHeight: res.screenHeight
        });
      }
    });

  },
  onBindChange: function (ev) {
    var index = ev.detail.current;
    this.setData({
      offLeft: this.data.screenWidth / 4 * index,
      currentTab: index,
    })
  },

  onNavTap: function (ev) {
    var index = ev.currentTarget.dataset.index;
    var offLeft = ev.currentTarget.offsetLeft;
    this.setData({
      currentTab: index,
      offLeft: offLeft,
      color: "#03a9f4",
    })
  },
  onAdd:function(){
    wx.navigateTo({
      url: '../changdata/changdata',
    })
  }

})