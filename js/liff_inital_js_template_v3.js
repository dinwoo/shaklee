"use strict";var ArrLiffQueryString,EncodeQuertstring,DecodeQueryString,ArrQuertString;function GetLiffId(){return"1654884078-0nYB68dJ"}function DecondeUtf8(e){e=decodeURIComponent(e);return console.log(e),e}function GetArrQueryString(e){var o,e=e,n=[];if(-1!==e.indexOf("?"))for(var i=e.split("?")[1].split("&"),t=0;t<i.length;t++)o=i[t].split("="),n.push(o[0]),n[o[0]]=o[1];return console.log(n),n}function GetInLiffAppQuertString(){var e,o=location.search,n=[];if(-1!==o.indexOf("?"))for(var i=o.split("?")[1].split("&"),t=0;t<i.length;t++)e=i[t].split("="),n.push(e[0]),n[e[0]]=e[1];return console.log(n),n}function InitializeLineLiffSdk(e){liff.init({liffId:GetLiffId()}).then(function(){return liff.isLoggedIn()?(console.log("login OK"),void KeepInitializeLineLiffSdk()):(alert("[Note] you're not login line now. It will turn to login page!"),Login(),!1)}).catch(function(e){alert(e.code),alert(e.message)})}function KeepInitializeLineLiffSdk(){console.log("keep");var o=liff.getOS(),n=liff.isInClient(),i=liff.isLoggedIn(),t=liff.getAccessToken(),l=liff.getDecodedIDToken(),e=liff.getContext(),r="",f="",s="",c="",g="";null!==e&&(r=e.type,e.viewType,f=e.userId,s=e.utouId,c=e.roomId,g=e.groupId);var d,u,a,p;liff.getProfile().then(function(e){d=e.userId,u=e.displayName,a=e.pictureUrl,p=e.statusMessage,console.log("profileUserId",d),console.log("profileDisplayName",u),console.log("profilePictureUrl",a),console.log("profileStatusMessage",p),console.log("os",o),console.log("isClient",n),console.log("isLoggedIn",i),console.log("userAccessToken",t),console.log("decodeedIdToken",l),console.log("contextType",r),console.log("contextUserId",f),console.log("contextUtouId",s),console.log("contextRoomId",c),console.log("contextGroupId",g)}).catch(function(e){alert(e.code),alert(e.message)})}function Login(){liff.login()}$(document).ready(function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(console.log("mobile"),ArrLiffQueryString=GetInLiffAppQuertString(),console.log(ArrLiffQueryString.debug),"1"==ArrLiffQueryString.debug?(console.log("直接開始"),$("#mainBody").show()):console.log("打API判斷活動是否開始")):($("#QRCode").show(),$("#mainBody").hide())});
//# sourceMappingURL=liff_inital_js_template_v3.js.map
