// pages/user/user.js
var Lock = require('../../utils/gesture_lock.js');
var wxlocker = require("../../utils/wxlocker.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    select: true,
    title: '请设置手势密码',
    resetHidden: false,
    titleColor: ""
  },
  onmodal: function() {
    this.setData({
      select: false
    })
  },
  onmodal1: function() {
    this.setData({
      select: true
    })
  },
  onuse: function() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  forget: function() {
    wx.navigateTo({
      url: '/pages/user/setcode/setcode',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

    wxlocker.lock.init();
    this.initState();
  },
  initState: function() {
    var resetHidden = wxlocker.lock.resetHidden;
    var title = wxlocker.lock.title;
    var titleColor = wxlocker.lock.titleColor;
    this.setData({
      resetHidden: resetHidden,
      title: title,
      titleColor: titleColor
    });
  },
  touchS: function(e) { //touchstart事件绑定
    wxlocker.lock.bindtouchstart(e);
  },
  touchM: function(e) { //touchmove事件绑定
    wxlocker.lock.bindtouchmove(e);
  },
  touchE: function(e) { //touchend事件绑定
    wxlocker.lock.bindtouchend(e, this.lockSucc);
    this.initState();
  },
  lockSucc: function() { //解锁成功的回调函数
    console.log("解锁成功！");
    //do something
    wx.showToast({
      title: '解锁成功',
    })
    setTimeout(function() {
      wx.switchTab({
        url: '/pages/mine/mine',

      })
    }, 1000)

  },
  lockreset: function() {
    wxlocker.lock.updatePassword();
    this.initState();
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