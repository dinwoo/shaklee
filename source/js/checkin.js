(function(){
  let timer;
  function getQRCode (){
    setTimeout(() => {
      $('#load').hide();
      timerHandler(60)
    }, 1000);
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
    $('#load').show();
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