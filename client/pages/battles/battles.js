// pages/battles/battles.js
var battlesData = require('../../utils/util.js')
const app = getApp()
const innerAudioContext = wx.createInnerAudioContext()
// innerAudioContext.autoplay = true
// innerAudioContext.loop = true

Page({

  // 页面的初始数据(傻子不知道)
  data: {
    indexs: '', //选择的选项
    times: 30, //倒计时秒数
    timer: '', //倒计时
    timerout: '', //4秒等待
    ttimer: '', //倒计时为零显示正确答案，定时器
    stimer: '', //选完后倒计时下一题
    render: 0, //第几题
    truetype: '', //正确答案
    end: 0, //是否已答题
    option0: '未选择',
    option1: '未选择',
    option2: '未选择',
    option3: '未选择',
    option4:'未选择',
    myintegral: 0, //我的分数
    itintegral: 1, //别人的分数
    selected: 0, //为1说明人家答了，为0说明人家没答
    animationTiems: {}, //30秒旋转动画
    animationfractionl: {}, //左分数动画
    animationfractionr: {} //右分数动画
  },
  //30秒倒计时
  timers: function() {
    let _this = this;
    _this.setData({
      timer: setInterval(function() {
        if (_this.data.times >= 0) {
          _this.setData({
            timerout: setTimeout(function() {
              _this.data.times--
            }, 3000),
            times: _this.data.times,
            end: 0
          })
        } else if (_this.data.times <= 0) {
          console.log(_this.data.times)
          _this.setData({
            indexs: 5,
            truetype: 'primary' //时间到显示正确答案
          })
          console.log('时间到了还尼玛不选')
          clearTimeout(_this.data.timer);
          _this.optiontap()
        }
      }, 1000)
    })
  },
  //点击事件我擦
  optiontap: function(event) {
    var _this = this;
    if (!_this.data.end) {
      _this.setData({
        end: 1
      })
      console.log(this.data.render < 5 ? '第' + (this.data.render + 1) + '题' : '答题结束')
      //把答案id传进去
      if (_this.data.indexs == '') {
        _this.setData({
          indexs: event.currentTarget.id,
          selected: _this.data.selected++,
          truetype: event.currentTarget.dataset.type ? '' : 'primary',
          myintegral: event.currentTarget.dataset.type ? _this.data.myintegral + 100 + (_this.data.times > 25 ? 80 : _this.data.times > 20 ? 50 : _this.data.times > 10 ? 30 : -10) : _this.data.myintegral
        })
        if (event.currentTarget.dataset.type){
          //选对音乐
          innerAudioContext.src = 'https://img95.699pic.com/audio/550/507/5aebfe4fa2120_all.mp3'
          innerAudioContext.play();
          innerAudioContext.onPlay(() => {
            console.log('开始播放')
          })
        }else{
          //选错音乐
          innerAudioContext.src = 'https://img95.699pic.com/audio/548/482/5aebfe383e247_all.mp3'
          innerAudioContext.play();
          innerAudioContext.onPlay(() => {
            console.log('开始播放')
          })
        }
        console.log(event.currentTarget.dataset.type ? "真聪明选对了！" : "傻逼，不是这个")
        console.log(_this.data.selected ? "他选对没" : "等会人家还没选呢！")
        //保存选项
        switch (_this.data.render) {
          case (0):
            _this.setData({
              option0:event.currentTarget.id
            })
          case 1:
            this.setData({
              option1:event.currentTarget.id
            })
          case 2:
            this.setData({
              option2: event.currentTarget.id
            })
          case 3:
            this.setData({
              option3: event.currentTarget.id
            })
          case 4:
            this.setData({
              option4: event.currentTarget.id
            })
          default:
            null
        }
      }

      //第几道题了
      if (_this.data.render < 5) {
        stimer: this.data.stimer = setTimeout(function() {
          _this.setData({
            render: ++_this.data.render,
            indexs: '',
            times: 30,
            truetype: '',
          })
          _this.touch(1, 0)
          _this.timers()
          if (_this.data.render === 5) {
            _this.r_fraction()
            _this.l_fraction()
          }
        }, 2000)
        clearTimeout(this.data.timerout);
        clearTimeout(this.data.timer);
        _this.touch(2, 360)
      }
    }
    
    console.log(this.data.option0, this.data.option1, this.data.option2, this.data.option3, this.data.option4,)
  },

  //答完题后倒计时旋转动画
  touch: function(res, str) {
    let animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });
    this.animation = animation
    animation.scale(res, res).rotate(str).step()
    this.setData({
      animationTiems: animation.export()
    })
  },
  //我的小分数走开
  l_fraction: function() {
    let animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });
    this.animation = animation
    animation.left('-220rpx').step()
    this.setData({
      animationfractionl: animation.export()
    })
  },
  //别人小分数走开
  r_fraction: function() {
    let animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });
    this.animation = animation
    animation.right('-220rpx').step()
    this.setData({
      animationfractionr: animation.export()
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取题库
    this.setData({
      battlesList:battlesData.battlesList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //初始化开始倒计时
    this.timers()
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
      clearTimeout(this.data.timer);
      console.log(1)
    },

    /**
     * 生命周期函数--监听页面卸载
     */
  onUnload: function () {
    clearTimeout(this.data.timer);
      console.log(2)
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
      return {
        title: '有胆来战',
        path: '/pages/home/home'
      }
    }
})