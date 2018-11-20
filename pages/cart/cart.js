// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [{
        id: '001',
        name: '红心蜜柚',
        number: 10,
        money: 8,
        src: '../../image/s1.png',
        selected: true
      },
      {
        id: '002',
        name: '红心蜜柚',
        number: 8,
        money: 5,
        src: '../../image/s2.png',
        selected: true
      },
      {
        id: '003',
        name: '红心蜜柚',
        number: 1,
        money: 18,
        src: '../../image/s3.png',
        selected: true
      },
      {
        id: '004',
        name: '红心蜜柚',
        number: 5,
        money: 8,
        src: '../../image/s4.png',
        selected: true
      },
      {
        id: '005',
        name: '红心蜜柚',
        number: 5,
        money: 8,
        src: '../../image/s5.png',
        selected: true
      },
    ],
    selectAllStatus: true,
    totalPrice: 0
  },

  // 选择/不选择某个商品
  selectList(e){
    const index = e.currentTarget.dataset.index;
    let goods = this.data.goods;
    goods[index].selected = !goods[index].selected;
    this.setData({ goods});
    this.getTotalPrice();
  },
  
  // 全选/全不选
  selectAll(){
    const selectAllStatus = this.data.selectAllStatus;
    const goods = this.data.goods;
    for(let i =0; i<goods.length;i++){
      if (goods[i].selected == selectAllStatus){
        goods[i].selected = !selectAllStatus;
      }
    }
    this.setData({ selectAllStatus: !selectAllStatus, goods});
    this.getTotalPrice();
  },
  
  //删除商品
  handleGoogsDelete(e){
    const index = e.currentTarget.dataset.index;
    let goods = this.data.goods;
    goods.splice(index,1)
    this.setData({ goods });
    this.getTotalPrice();
  },

  // 商品数量增加
  handleGoogsNumberAdd(e) {
    const index = e.currentTarget.dataset.index;
    let goods = this.data.goods;
    goods[index].number++;
    this.setData({
      goods,
    })
    this.getTotalPrice();
  },

  // 商品数量减少
  handleGoogsNumberDecrease(e) {
    const index = e.currentTarget.dataset.index;
    let goods = this.data.goods;
    let number = goods[index].number;
    if (number === 0) {
      goods[index].number = 0;
    } else {
      goods[index].number--;
    }
    this.setData({
      goods,
    });
    this.getTotalPrice();
  },

  //计算总价
  getTotalPrice() {
    let goods = this.data.goods;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < goods.length; i++) {         // 循环列表得到每个数据
      if (goods[i].selected) {                     // 判断选中才会计算价格
        total += goods[i].number * goods[i].money;   // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      goods: goods,
      totalPrice: total,
    });
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
    this.getTotalPrice();
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