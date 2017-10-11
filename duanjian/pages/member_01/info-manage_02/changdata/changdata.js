var data = require("../../../../utils/util.js");
const app = getApp();
Page({
  data: {
    navArr: ["个人资料", "密码管理", "公司资料", "联系方式"],
    index: 0,
    currentTab: 0,
    hidden:true,
    openHangye:false,
    openType:false,
    openArea:false,
    openSize:false,
    hangye: ['锻造厂家', '钢材厂家','设备厂家', '其他相关行业'],
    compType: ['个体经营', '有限责任公司', '股份有限公司', '其他'],
    size: ['0-100', '100-1000', '1000-5000', '5000-10000','10000以上'],
    selectHangye:'请选择',
    selectType: '请选择',
    selectArea: '请选择',
    selectSize:'请选择',
    provence:'',
    zhuceData:'',
    email:'',
    department:'',
    career:'',
    QQ:'',
    ali:'',
    useri:'',
    imgSrc:'../../../../images/QQ.png',
    companyname:'',
    range:'',
    start:'',
    sellgoods:'',
    buygoods:''
  },
  onLoad: function () {
    var that = this;
    that.setData({
      zhuceData: app.globalData.member
    })
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

  dele:function(){
    this.setData({
      hidden:false
    })
  },
  cancel: function () {
    this.setData({
      hidden: true
    })
  },
  confirm: function () {
    this.setData({
      hidden: true,
      imgSrc:'../../../../images/addpic.jpg'
    })
  },
  showitemHangye: function () {
    this.setData({
      openHangye: !this.data.openHangye
    })
  },
  selectHangye:function(ev){
    this.setData({
      openHangye: false,
      selectHangye: this.data.hangye[ev.target.dataset.id],
    })
  },
  selectType:function(ev){
    this.setData({
      openType: false,
      selectType: this.data.compType[ev.target.dataset.id],
    })
  },
    showitemType: function () {
    this.setData({
      openType: !this.data.openType
    })
  },
    selectArea: function (ev) {
      this.setData({
        openArea: false,
        selectArea: this.data.provence[ev.target.dataset.id].areaname,
      })
    },
    showitemArea: function () {
      this.setData({
        openArea: !this.data.openArea,
        provence: app.globalData.provence
      })
    },
    selectSize: function (ev) {
      this.setData({
        openSize: false,
        selectSize: this.data.size[ev.target.dataset.id],
      })
    },
    showitemSize: function () {
      this.setData({
        openSize: !this.data.openSize,
      })
    },
    emailInput: function (e) {
      this.setData({
        email: e.detail.value
      })
    },
    departmentInput: function (e) {
      this.setData({
        department: e.detail.value
      })
    },
    careerInput: function (e) {
      this.setData({
        career: e.detail.value
      })
    },
    QQInput: function (e) {
      this.setData({
        QQ: e.detail.value
      })
    },
    aliInput: function (e) {
      this.setData({
        ali: e.detail.value
      })
    },
    companynameInput: function (e) {
      this.setData({
        companyname: e.detail.value
      })
    },
    rangeInput: function (e) {
      this.setData({
        range: e.detail.value
      })
    },
    startInput: function (e) {
      this.setData({
        start: e.detail.value
      })
    },
    sellgoodsInput: function (e) {
      this.setData({
        sellgoods: e.detail.value
      })
    },
    buygoodsInput: function (e) {
      this.setData({
        buygoods: e.detail.value
      })
    },
    onUpdata:function(){
     if(this.data.email==''&&this.data.department==''&&this.data.QQ==''&&this.data.ali==''){
      wx.showToast({
        title: '请填写修改信息',
      })
     }
     else{
       var that = this;
       data.updataMes(function (data) {
       }, that.data.email, that.data.department, that.data.career, that.data.QQ, that.data.ali, app.globalData.member.userid)

       wx.showToast({
         title: '提交成功',
       })
     }
    },
      oncompanyUpdata: function () {
        console.log(app.globalData.member.userid)
      if (this.data.companyname == '' && this.data.range == '' && this.data.start == '' && this.data.buygoods == ''&&this.data.sellgoods=='') {
        wx.showToast({
          title: '请填写修改信息',
        })
      }
      else {
        var that = this;
        data.updataCompanyMes(function (data) {
        }, that.data.companyname, that.data.selectHangye, that.data.selectType, that.data.selectArea, that.data.range, that.data.start, that.data.selectSize, that.data.sellgoods, that.data.buygoods,app.globalData.member.userid)
        wx.showToast({
          title: '提交成功',
        })
      }
    }
})