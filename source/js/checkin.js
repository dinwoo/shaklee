(function(){
  let timer;
  function getQRCode (){
    $.ajax({
      url: apiDomain+'/api/shaklee/checkin',
      type: 'POST',
      data:{
        'lineUserId':window.localStorage.getItem('profileUserId')
      },
      success: function (res) {
        console.log(res);
        if(res.success){
          $('#load').hide();
          timerHandler(res.sec)
          if(res.isCheckin) $('#received').show();
          $('#qrCode img').attr('src',res.qrcode);
        }
      },
      error: function (xhr) {
        console.log(xhr)
      }
    });
  }

  function timerHandler(time) {
    console.log(time)
    let min = time/60>10?Math.floor(time/60):'0'+Math.floor(time/60);
    let sec = time%60>10?time%60:'0'+time%60;
    $("#time").text(`${min}:${sec}`)
    if(time<=0){
      $('#reload').show();
      $('#time').hide();
      clearTimeout(timer);
    }else{
      timer = setTimeout(() => {
        timerHandler(--time)
      }, 1000);
    }
  }

  $(document).ready(()=>{
    $('#mainBody').show();
    $('#load').show();
    console.log(window.localStorage.getItem('profileUserId'));

    getQRCode();

    $('#reload').on('click',function(){
      $('#load').show();
      $('#reload').hide();
      $('#time').show();
      clearTimeout(timer);
      getQRCode();
    })
  })
})();