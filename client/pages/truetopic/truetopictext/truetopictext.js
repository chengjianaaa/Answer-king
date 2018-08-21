var trueListData= require('../../../data/truetopic-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    time: "",
    min: 119,
    second: 59,
    answer: '', //答案
    current: 0, //第几题
    optionId: '', //选择某一个
    select: '', //选中项
    list: [],//是否已打
    dyclist:[],//是否答对
    singlelen:'',//单选题长度
    manylen:'',//多选题长度
    judgelen:'',//判断题长度
    choicelen:'',
    truelist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    var trueList=trueListData.trueList[0];
    this.setData({
      title: trueList.title,
      single: trueList.single,//单选题
      singlelen: trueList.single.length,//单选题长度
      many: trueList.many,//多选题
      manylen:trueList.many.length,//多选题长度
      judge: trueList.judge,//判断题
      judgelen: trueList.judge.length,//判断题长度
      brief: trueList.brief,//简答题
      choicelen: trueList.single.length + trueList.many.length + trueList.judge.length,//所有选择题的长度
      truelist: trueList.single.concat(trueList.many.concat(trueList.judge.concat(trueList.brief)))
    })
    console.log(_this.data.choicelen)
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    for (var i = 0; i < _this.data.truelist.length; i++) {
      _this.setData({
        list: _this.data.list.concat(''),
        dyclist: _this.data.list.concat('')
      })
    }
    this.times();
  },
  times: function () {
    var _this = this;
    _this.setData({
      time: setInterval(function () {
        if (_this.data.second >0) {
          _this.setData({
            second: _this.data.second -1
          })
        } else {
          _this.setData({
            min: _this.data.min -1,
            second: 59
          })
        }

      }, 1000)
    })

  },
  //显示答案
  tapjie: function (event) {
    var eve = event.currentTarget.dataset.id;
    if (this.data.answer != eve) {
      this.setData({
        answer: eve
      })
    } else {
      this.setData({
        answer: 0
      })
    }
  },
  //选择
  nextTap: function (event) {
    var _this = this;
      var price = 'list[' + (event.currentTarget.dataset.index - 1) + ']';
      var dyclist = 'dyclist[' + (event.currentTarget.dataset.index - 1) + ']';
      _this.setData({
        current: event.currentTarget.dataset.index,
        [price]: event.currentTarget.dataset.id,
        [dyclist]: event.currentTarget.dataset.dyc ? 1 : 0,
        select: event.currentTarget.dataset.id,
        optionId: event.currentTarget.dataset.index - 1
      })
  },
  //多选题
  manyTap: function (event){
    var _this = this;
    var check;
    var price = 'list[' + event.currentTarget.dataset.id + ']';
    var dyclist = 'dyclist[' + event.currentTarget.dataset.id + ']';
    var indexarr = event.currentTarget.dataset.dyc;
    var valuestr = event.detail.value;
    var dycarr='';
    var valuearr='';
    valuestr.sort(function (a, b) { return a - b })
    for (let i = 0; i < valuestr.length; i++) {
      valuearr+=`${valuestr[i]}`;
    }
    for (let i = 0; i < indexarr.length;i++){
      indexarr[i].typekey ? dycarr+=`${i}`:null;
    }
    _this.setData({
      [price]: event.currentTarget.dataset.id,
      [dyclist]: valuearr - dycarr==0?1:0
    })
  },
  //简答题
  briefTap: function (event) {
    var _this = this;
    var price = 'list[' + (event.currentTarget.dataset.index - 1) + ']';
    var dyclist = 'dyclist[' + (event.currentTarget.dataset.index - 1) + ']';
    _this.setData({
      [price]:event.currentTarget.dataset.id,
      [dyclist]:1
    })
  },
  //菜单
  menutap: function () {
    this.setData({
      current: this.data.truelist.length
    })
  },
  //菜单按钮
  btnTap: function (eve) {
    this.setData({
      current: eve.currentTarget.id
    })
  },
  //提交答案
  subTap: function () {
    clearTimeout(this.data.time);
    wx.redirectTo({
      url: '/pages/practice/practice_list/practice_analysis/practice_analysis?list=' + this.data.dyclist + '&&choicelen=' + this.data.choicelen+'&&min=' + this.data.min + '&&second=' + this.data.second
    })
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
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