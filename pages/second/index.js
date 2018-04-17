Page({
  onLoad: function (options) {


  },
  openMap: function () {
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy;
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          success: function (res) {
            console.log(res)
          }
        })
      }
    })

  }

})  