var apiDomain = 'https://xxx.xxx'
var isAjaxMocked = true;

var profileUserId = "";
var profileDisplayName = "";
var profilePictureUrl = "";
var profileStatusMessage = "";

if (isAjaxMocked) {
  $.mockjax({
      url:apiDomain+ '/api/shaklee/checkenable',
      status: 200,
      responseTime: 750,         
      responseText: {
        "success":true,
        "errorCode":200,
        "message":""
      }
  });
  $.mockjax({
      url:apiDomain+ '/api/shaklee/checkin',
      status: 200,
      responseTime: 750,         
      responseText: {
        "isCheckin" : true, // 
        "qrcode": "http://s05.calm9.com/qrcode/2021-04/LD7IU6UQBF.png",
        "sec":90, // 顯示 => 01:30
        "success":true,
        "errorCode":200,
        "message":""
      }
  });
  $.mockjax({
      url:apiDomain+ '/api/shaklee/query/bingo',
      status: 200,
      responseTime: 750,         
      responseText: {
        "id":1,
        "success":true,
        "errorCode":200,
        "message":""
      }
  });
}
