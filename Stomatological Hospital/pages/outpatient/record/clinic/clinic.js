// pages/outpatient/record/clinic/clinic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chose: true,
    chose1: false
  },
  chose: function() {
    this.setData({
      chose: true,
      chose1: false
    })
  },
  chose1: function() {
    this.setData({
      chose1: true,
      chose: false
    })
  },
  onnumber:function(){
   wx.navigateTo({
     url: '/pages/outpatient/record/clinic/inregist/inregist',
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})