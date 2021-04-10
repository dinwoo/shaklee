var ArrLiffQueryString;
var EncodeQuertstring;
var DecodeQueryString;
var ArrQuertString;

function checkStart(){
  $.ajax({
    url: apiDomain+'/api/shaklee/checkenable',
    type: 'GET',
    success: function (res) {
      console.log(res);
      if(res.success){
        $('#mainBody').show();
      }else{
        $('#mainBody').hide();
        $('#wait').show();
      }
    },
    error: function (xhr) {
      console.log(xhr)
    }
  });
}
$(document).ready(function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //mobile:只顯示網頁，讓人用掃的才能開啟
    console.log('mobile');
    //LIFF初始化是這段
    // InitializeLineLiffSdk();
  
    //這邊是解LIFF導轉之後特有的解QueryString
    ArrLiffQueryString = GetInLiffAppQuertString();
    // EncodeQuertstring = ArrLiffQueryString["liff.state"];
    // DecodeQueryString = DecondeUtf8(EncodeQuertstring);
    // ArrQuertString = GetArrQueryString(DecodeQueryString);
    console.log(ArrLiffQueryString['debug']);
    if(ArrLiffQueryString['debug']=='1'){
      // 直接開始
      console.log('直接開始')
      // $('#mainBody').show();

    }else{
      // 打API判斷活動是否開始
      console.log('打API判斷活動是否開始')
      checkStart();
    }

  } else {
    //pc:顯示qrcode
    $('#QRCode').show();
    $('#mainBody').hide();
  }
});

function GetLiffId() {
  //這段會依照每個帳戶不同更改
  return "1654884078-0nYB68dJ";
}

function DecondeUtf8(decodestring) {
  var decodeString = decodeURIComponent(decodestring);
  console.log(decodeString);
  return decodeString;
}

function GetArrQueryString(queryString) {
  var strUrl = queryString;
  var getPara, ParaVal;
  var aryPara = [];

  if (strUrl.indexOf("?") !== -1) {
    var getSearch = strUrl.split("?");
    getPara = getSearch[1].split("&");
    for (let j = 0; j < getPara.length; j++) {
      ParaVal = getPara[j].split("=");
      aryPara.push(ParaVal[0]);
      aryPara[ParaVal[0]] = ParaVal[1];
    }
  }
  console.log(aryPara);
  return aryPara;
}

function GetInLiffAppQuertString() {
  var strUrl = location.search;
  var getPara, ParaVal;
  var aryPara = [];

  if (strUrl.indexOf("?") !== -1) {
    var getSearch = strUrl.split("?");
    getPara = getSearch[1].split("&");
    for (let i = 0; i < getPara.length; i++) {
      ParaVal = getPara[i].split("=");
      aryPara.push(ParaVal[0]);
      aryPara[ParaVal[0]] = ParaVal[1];
    }
  }
  console.log(aryPara);
  return aryPara;
}

//liff.init()初始化
function InitializeLineLiffSdk(liffId) {
  liff
    .init({
      liffId: GetLiffId(),
    })
    .then(() => {
      if (!liff.isLoggedIn()) {
        alert("[Note] you're not login line now. It will turn to login page!");
        Login();
        return false;
      }
      console.log('login OK')
      KeepInitializeLineLiffSdk();

    })
    .catch((err) => {
      alert(err.code);
      alert(err.message);
    });
}

function KeepInitializeLineLiffSdk() {
  console.log('keep')
      // start to use LIFF's api
  var os = liff.getOS();

  //true: Running in LINE browser
  //false: Running in external browser
  var isClient = liff.isInClient();

  //true: The user is logged in
  //false: The user is not logged in
  var isLoggedIn = liff.isLoggedIn();
  var userAccessToken = liff.getAccessToken();
  var decodeedIdToken = liff.getDecodedIDToken();
  var context = liff.getContext();

  var contextType = "";
  var contextViewType = "";
  var contextUserId = "";
  var contextUtouId = "";
  var contextRoomId = "";
  var contextGroupId = "";
  if (context !== null) {
    contextType = context.type;
    contextViewType = context.viewType;
    contextUserId = context.userId;
    contextUtouId = context.utouId;
    contextRoomId = context.roomId;
    contextGroupId = context.groupId;
  }

  liff
    .getProfile()
    .then((profile) => {
      profileUserId = profile.userId;
      profileDisplayName = profile.displayName;
      profilePictureUrl = profile.pictureUrl;
      profileStatusMessage = profile.statusMessage;

      //getProfile取得的資訊
      // $("#profileUserId").text(profileUserId);
      // $("#profileDisplayName").text(profileDisplayName);
      // $("#profilePictureUrl").text(profilePictureUrl);
      // $("#profileStatusMessage").text(profileStatusMessage);

      //前面取得的資訊
      // $("#os").text(os);
      // $("#isClient").text(isClient);
      // $("#isLoggedIn").text(isLoggedIn);
      // $("#userAccessToken").text(userAccessToken);
      // $("#decodeedIdToken").text(decodeedIdToken);
      // $("#contextType").text(contextType);
      // $("#contextViewType").text(contextViewType);
      // $("#contextUserId").text(contextUserId);
      // $("#contextUtouId").text(contextUtouId);
      // $("#contextRoomId").text(contextRoomId);
      // $("#contextGroupId").text(contextGroupId);

      //getProfile取得的資訊
      console.log("profileUserId", profileUserId);
      console.log("profileDisplayName", profileDisplayName);
      console.log("profilePictureUrl", profilePictureUrl);
      console.log("profileStatusMessage", profileStatusMessage);

      //前面取得的資訊
      console.log("os", os);
      console.log("isClient", isClient);
      console.log("isLoggedIn", isLoggedIn);
      console.log("userAccessToken", userAccessToken);
      console.log("decodeedIdToken", decodeedIdToken);
      console.log("contextType", contextType);
      console.log("contextUserId", contextUserId);
      console.log("contextUtouId", contextUtouId);
      console.log("contextRoomId", contextRoomId);
      console.log("contextGroupId", contextGroupId);
    })
    .catch((err) => {
      alert(err.code);
      alert(err.message);
    });
}

function Login() {
  //liff.login({
  //    redirectUri: 'https://www.google.com/'
  //});

  liff.login();
}
