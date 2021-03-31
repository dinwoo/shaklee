(function(){

  $(document).ready(()=>{
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      //mobile:只顯示網頁，讓人用掃的才能開啟
      console.log('mobile');
    } else {
      //pc:顯示qrcode
      $('#QRCode').show();
      $('#mainBody').hide();
    }
  })
})();
