(function(){
  let timer;
  let number;

  function searchPrize() {
    $('#load').show();
    number = $('#numberInput').val();
    $.ajax({
      url: apiDomain+'/api/shaklee/query/bingo',
      type: 'POST',
      data:{
        'number':number
      },
      success: function (res) {
        console.log(res);
        if(res.success){
          $('#load').hide();
          $('.search-insert').hide();
          $('.search-result').show();
          $('.prize img').attr('src',`./images/prize0${res.id}.png`);
          $('.number').text(number)
        }
      },
      error: function (xhr) {
        console.log(xhr)
      }
    });
  }

  $(document).ready(()=>{
    $('#load').show();
    setTimeout(() => {
      $('#load').hide();
    }, 1000);
    $('#search').on('click',searchPrize)
    $('#back').on('click',()=>{
      $('#numberInput').val('');
      $('.search-insert').show();
      $('.search-result').hide();
    })

  })
})();