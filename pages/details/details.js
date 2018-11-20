// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 0,
    totalNum: 0,
    show: false,
    tabIndex: 1,
  },
  // 商品数量增加
  handleGoogsNumberAdd() {
    let number = this.data.number;
    number = number + 1;
    this.setData({
      number: number,
    })
  },

  // 商品数量减少
  handleGoogsNumberDecrease() {
    let number = this.data.number;
    if (number === 0) {
      number = 0;
    } else {
      number--;
    }
    this.setData({
      number: number,
    })
  },

  handleAddCart() {
    const self = this;
    const totalNum = this.data.totalNum;
    const number = this.data.number;

    this.setData({
      show: true,
    })
    setTimeout(function () {
      self.setData({
        show: false
      })
      setTimeout(function () {
        self.setData({
          totalNum: number + totalNum
        })
      }, 200)
    }, 300)
  },

  // 点击tabbar
  handleTabClick(e){
    const tabIndex = e.currentTarget.dataset.index;
    this.setData({
      tabIndex
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