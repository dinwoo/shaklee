var ArrLiffQueryString;
var EncodeQuertstring;
var DecodeQueryString;
var ArrQuertString;
$(document).ready(function () {
  //LIFF初始化是這段
  InitializeLineLiffSdk();

  //這邊是解LIFF導轉之後特有的解QueryString
  ArrLiffQueryString = GetInLiffAppQuertString();
  EncodeQuertstring = ArrLiffQueryString["liff.state"];
  DecodeQueryString = DecondeUtf8(EncodeQuertstring);
  ArrQuertString = GetArrQueryString(DecodeQueryString);
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
    for (i = 0; i < getPara.length; i++) {
      ParaVal = getPara[i].split("=");
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
    for (i = 0; i < getPara.length; i++) {
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

      // 2021-03-16
      liff
        .getFriendship()
        .then((data) => {
          if (data.friendFlag) {
            console.log("getFriendship true");
            console.log("getFriendship.data", data);
            console.log("getFriendship.data.friendFlag", data.friendFlag);
            //$.alert({
            //    title: '是否已經加入官方LINE@帳號',
            //    animation: 'zoom',
            //    closeAnimation: 'scale',
            //    content: "您已經加入官方LINE@帳號，是否繼續？",
            //    buttons: {
            //        OK: function () {
            //            KeepInitializeLineLiffSdk();
            //        },
            //        NO: function () {
            //            alert("881");
            //        }
            //    }
            //});
          } else {
            console.log("getFriendship false");
            console.log("getFriendship.data", data);
            //$.alert({
            //    title: '是否已經加入官方LINE@帳號',
            //    animation: 'zoom',
            //    closeAnimation: 'scale',
            //    content: "您目前還沒有加入官方LINE@帳號，是否繼續？",
            //    buttons: {
            //        OK: function () {
            //            KeepInitializeLineLiffSdk();
            //        },
            //        NO: function () {
            //            alert("881");
            //        }
            //    }
            //});

            KeepInitializeLineLiffSdk();
          }
        })
        .catch((err) => {
          alert(err.code);
          alert(err.message);
        });
    })
    .catch((err) => {
      alert(err.code);
      alert(err.message);
    });
}

function KeepInitializeLineLiffSdk() {
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

  var profileUserId = "";
  var profileDisplayName = "";
  var profilePictureUrl = "";
  var profileStatusMessage = "";
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
