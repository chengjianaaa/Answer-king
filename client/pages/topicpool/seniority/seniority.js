// pages/topicpool/seniority/seniority.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    first: 0, //是否第一次进入;是为1，否为0
    period: 1, //资格证为1，招聘为2
    confirm: 1, //选择到哪个了‘学段，学科，地区’
    course: [], //储存学段库
    schools: '', //选的哪个学段
    courses: '', //选的哪个学科
    address: '', //选的哪个地址
    mschool: ['语文', '数学', '英语', '音乐', '美术', '体育与健康', '信息技术', '思想品德', '科学'],
    hschool: ['语文', '数学', '英语', '音乐', '美术', '体育与健康', '地理', '历史', '物理', '化学', '生物', '信息技术', '思想品德', '历史与社会', '科学', '通用技术']
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this=this;
    if (options.confirm) {
      console.log(123)
      this.setData({
        first: options.confirm?1:0,
        confirm:options.confirm,
        course: options.school == '小学' ? _this.data.mschool : _this.data.hschool
      })
    }
  },
  //幼儿园
  skip: function() {
    this.setData({
      confirm: 3,
      schools: '幼儿园'
    })
    if (this.data.first){
      var _this = this;
      var pages = getCurrentPages(); //  获取页面栈
      var currPage = pages[pages.length - 1]; // 当前页面
      var prevPage = pages[pages.length - 2]; // 上一个页面
      prevPage.setData({
        schools: _this.data.schools,
        courses: ''//选的哪个学科
      })
      wx.navigateBack({
        delta: 1
      })
    }
  },
  //小学
  mschool: function(event) {
    this.setData({
      confirm: 2,
      schools: '小学',
      course: this.data.mschool
    })
    if (this.data.first) {
      var _this = this;
      var pages = getCurrentPages(); //  获取页面栈
      var currPage = pages[pages.length - 1]; // 当前页面
      var prevPage = pages[pages.length - 2]; // 上一个页面
      prevPage.setData({
        schools: _this.data.schools,
        courses: ''//选的哪个学科
      })
      wx.navigateBack({
        delta: 1
      })
    }
    
  },
  //初中高中
  hschool: function (event) {
    var _this = this;
    this.setData({
      confirm: 2,
      schools: event.currentTarget.dataset.school,
      course: this.data.hschool
    })
    if (this.data.first) {
      var pages = getCurrentPages(); //  获取页面栈
      var currPage = pages[pages.length - 1]; // 当前页面
      var prevPage = pages[pages.length - 2]; // 上一个页面
      prevPage.setData({
        schools: _this.data.schools,
        courses: ''//选的哪个学科
      })
      wx.navigateBack({
        delta: 1
      })
    }
    
  },
  //学科
  course: function(event) {
    this.setData({
      confirm: 3,
      courses: event.currentTarget.dataset.course
    })
    console.log(this.data.courses)
    if (this.data.first) {
      var _this = this;
      var pages = getCurrentPages(); //  获取页面栈
      var currPage = pages[pages.length - 1]; // 当前页面
      var prevPage = pages[pages.length - 2]; // 上一个页面
      prevPage.setData({
        courses: _this.data.courses, //选的哪个学科
      })
      wx.navigateBack({
        delta: 1
      })
    }
    
  },
  //地址
  address: function(event) {
    var _this = this;
    this.setData({
      address: event.currentTarget.dataset.address
    })
    wx.redirectTo({
      url: '/pages/topicpool/complete/complete?schools=' +_this.data.schools+ '&&courses='+_this.data.courses+'&&address='+_this.data.address
    })
    if (this.data.first) {
      var _this = this;
      var pages = getCurrentPages(); //  获取页面栈
      var currPage = pages[pages.length - 1]; // 当前页面
      var prevPage = pages[pages.length - 2]; // 上一个页面
      prevPage.setData({
        address: _this.data.address //选的哪个地址
      })
      wx.navigateBack({
        delta: 1
      })
    }
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