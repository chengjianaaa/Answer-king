// pages/ranking/ranking.js
var rankingData=require('../../data/ranking-data.js')
var config = require('../../config')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
  //比较器
    function compare(propertyName) {
      return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value2 > value1) {
          return 1;
        } else if (value2 < value1) {
          return -1;
        } else {
          return 0;
        }
      }
    }
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight,
          rankingList: rankingData.rankingList.sort(compare("integral"))
        });
      }
    });
    wx.reportAnalytics('daily_rankings', {
      daily_rankings: 0,
      rankings: 0,
    });
  },
  //排行榜
  getRankFriendsData: function () {
    const that = this
    qcloud.request({
      login: false,
      url: app.appData.baseUrl + 'getRankFriendsData',
      data: {
        openId: this.data.openId
      },
      success: (res) => {
        this.setData({
          friendsData: res.data.data
        })
        
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      },
    });
    console.log(this.data.friendsData)
  },
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  swichNav: function (e) {
    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
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