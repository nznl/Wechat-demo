const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:true,
    interval:3000,
    duration:1500,
    autoplay:true,
    indicator:'red',
    name:'员工',
    banners: ['https://cdn.it120.cc/apifactory/2017/09/15/73560c511f554eb4afd1dcade9d8ef67.png_m','https://cdn.it120.cc/apifactory/2017/09/15/5acdd8f65ec85b413ee642dda795d835.png_m',
    'https://cdn.it120.cc/apifactory/2017/09/15/145c582252a7a20f21ad9a025ae8c9be.png_m'],
    swiperCurrent: 0,
    nav:[{
      src:'../img/figure-coupons.png',
      text:'会员卡'
    },
      {
        src: '../img/figure-pricelist.png',
        text: '优惠券'
      },
      {
        src: '../img/figure-coupons.png',
        text: '会员卡'
      },
      {
        src: '../img/figure-pricelist.png',
        text: '优惠券'
      },],
      btnText:[{
        msg1:'美发',
        msg2:'美甲'
      },
        {
          msg1: '美发',
          msg2: '美甲'
        }],
      designer:[{
        src:'https://cdn.it120.cc/apifactory/2017/09/15/73560c511f554eb4afd1dcade9d8ef67.png_m',
        name:'吴彦祖',
        office:'首席造型师'
      },
      {
        src:'https://cdn.it120.cc/apifactory/2017/09/15/5acdd8f65ec85b413ee642dda795d835.png_m',
        name:'周星星',
        office:'创意总监'
      }
      ]
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //   let that = this;
  //   wx.request({
  //     url: 'http://image.baidu.com/channel/listjson?pn=0&rn=30&tag1=明星&tag2=全部&ie=utf8',
  //     data:{
  //     key:'mallName'
  //     },
  //     header:{
  //       'content-type':'application/JSON',
  //     },
  //     success:function(res){
  //       that.setData({
  //         banners:res.data.data
  //       })
  //       console.log(res.data.data)
  //     }
  //   })
  // },
  // let that = this;
  //   wx.getUserInfo({
  //     success: function (res) {
  //       that.setData({
  //         name:res.rawData.nickName
  //       })
  //     }
  //   })
  },
})