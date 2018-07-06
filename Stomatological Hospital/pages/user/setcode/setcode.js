// pages/user/setcode/setcode.js
var Lock = require('../../../utils/gesture_lock.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var s = this;
    this.lock = new Lock("id-gesture-lock", wx.createCanvasContext("id-gesture-lock"), function(checkPoints, isCancel) {
      console.log('over');
      s.lock.gestureError();
      setTimeout(function() {
        s.lock.reset();
      }, 1000);
    }, {
      width: 300,
      height: 300
    })
    this.lock.drawGestureLock();
    console.log('onLoad')
    var that = this;
    //调用应用实例的方法获取全局数据

  },
  onTouchStart: function(e) {
    this.lock.onTouchStart(e);
  },
  onTouchMove: function(e) {
    this.lock.onTouchMove(e);
  },
  onTouchEnd: function(e) {
    this.lock.onTouchEnd(e);

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