Page({
  openToast () {
    this.setData({
      toastVisible: true
    })
  },
  handleToastClose () {
    this.setData({
      toastVisible: false
    })
  },
  openPopup () {
    this.setData({
      popupVisible: true
    })
  },
  handlePopupClose () {
    this.setData({
      popupVisible: false
    })
  },
})
