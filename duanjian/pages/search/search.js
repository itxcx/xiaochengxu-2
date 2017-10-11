// pages/search/search.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  active:false,//隐藏框text样式
  djCate:["锻件供应","锻件采购","锻件展会","锻件知识","锻件资讯","锻件消息"]  ,
  cate:"锻件供应",
  modalFlag:true,
  keyword:'',
  warm:'',
  curent_id:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  init: function () {

  },
//改变隐藏框显示状态
  cateShow:function(){
    this.setData({
      show:true,
      modalFlag: false
    })
  },
  //改变隐藏框text样式
  changeCate:function(ev){
    var id = ev.target.dataset.id
    this.setData({
      cate: this.data.djCate[ev.target.dataset.id],
      modalFlag:true,
      curent_id: ev.target.dataset.id
    })
    
  },
  changeStyle:function(ev){
    this.setData({
      cateId: ev.target.dataset.id,
      modalFlag: true
    })
  },
  onSearch:function(){
    if (this.data.keyword==''){
      this.setData({
        warm:'请输入关键字'
      })
    }
 else{
   app.globalData.searchKeyword = this.data.keyword;
   if (this.data.curent_id == 0){
     wx.navigateTo({
       url: '../gongyin/gongyin'
     })
   }
   else if (this.data.curent_id == 1){
     wx.navigateTo({
       url: '../buy/buy'
     })
   }
   else if (this.data.curent_id == 2) {
     wx.navigateTo({
       url: '../exhibit/exhibit'
     })
   }
   else if (this.data.curent_id == 3) {
     wx.navigateTo({
       url: '../know/know'
     })
   }
   else if (this.data.curent_id == 4) {
     wx.navigateTo({
       url: '../zixun/zixun'
     })
   }
   else if (this.data.curent_id == 5) {
     wx.navigateTo({
       url: '../newsDetail/newsDetail'
     })
   }

 }
  
  },
  keywordInput: function (e) {
    this.setData({
      keyword: e.detail.value
    })
  },
})