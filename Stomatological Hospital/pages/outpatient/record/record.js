// pages/outpatient/record/record.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   choose:true,
   choose1:false,
   
  },
  choose:function(){
    this.setData({
      choose:true,
      choose1:false
    })
  },
  choose1: function () {
    this.setData({
      choose1: true,
      choose: false
    })
  },
  onserve:function(){
    wx.navigateTo({
      url: '/pages/outpatient/record/listdetail/listdetail',
    })
  },
  onload:function(){
    wx.navigateTo({
      url: '/pages/outpatient/record/listdetail/listdetail',
    })
  },
  onregist:function(){
    wx.navigateTo({
      url: '/pages/outpatient/record/clinic/clinic',
    })
  },
  modalcnt:function(){
   wx.showModal({
     title: '温馨提示',
     content: '您确定要取消本次预约吗？',
     success:function(res){
       if(res.confirm){
         console.log('用户点击确认');
          wx.showModal({
            content: '您已经取消本次预约',
            showCancel:false,
            confirmText:'确认',
            confirmColor:'blue',
            duration:3200,
            success:function(res){
         
            }
            
          })
       }else if(res.cancel){
       console.log('用户点击取消');
       }
     }
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onsure:function(){
    this.setData({
      select:false
    })
  },
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})