"use strict";var ArrLiffQueryString,EncodeQuertstring,DecodeQueryString,ArrQuertString;function checkStart(){$.ajax({url:apiDomain+"/api/shaklee/checkenable",type:"GET",success:function(e){console.log(e),$("#load").hide(),e.success?$("#mainBody").show():($("#mainBody").hide(),$("#wait").show())},error:function(e){console.log(e)}})}function GetLiffId(){return"1654884078-0nYB68dJ"}function DecondeUtf8(e){e=decodeURIComponent(e);return console.log(e),e}function GetArrQueryString(e){var o,e=e,i=[];if(-1!==e.indexOf("?"))for(var n=e.split("?")[1].split("&"),l=0;l<n.length;l++)o=n[l].split("="),i.push(o[0]),i[o[0]]=o[1];return console.log(i),i}function GetInLiffAppQuertString(){var e,o=location.search,i=[];if(-1!==o.indexOf("?"))for(var n=o.split("?")[1].split("&"),l=0;l<n.length;l++)e=n[l].split("="),i.push(e[0]),i[e[0]]=e[1];return console.log(i),i}function InitializeLineLiffSdk(e){liff.init({liffId:GetLiffId()}).then(function(){return liff.isLoggedIn()?(console.log("login OK"),void KeepInitializeLineLiffSdk()):(alert("[Note] you're not login line now. It will turn to login page!"),Login(),!1)}).catch(function(e){alert(e.code),alert(e.message)})}function KeepInitializeLineLiffSdk(){console.log("keep");var o=liff.getOS(),i=liff.isInClient(),n=liff.isLoggedIn(),l=liff.getAccessToken(),t=liff.getDecodedIDToken(),e=liff.getContext(),r="",s="",c="",f="",g="";null!==e&&(r=e.type,e.viewType,s=e.userId,c=e.utouId,f=e.roomId,g=e.groupId),liff.getProfile().then(function(e){profileUserId=e.userId,window.localStorage.setItem("profileUserId",profileUserId),profileDisplayName=e.displayName,profilePictureUrl=e.pictureUrl,profileStatusMessage=e.statusMessage,console.log("profileUserId",profileUserId),console.log("profileDisplayName",profileDisplayName),console.log("profilePictureUrl",profilePictureUrl),console.log("profileStatusMessage",profileStatusMessage),console.log("os",o),console.log("isClient",i),console.log("isLoggedIn",n),console.log("userAccessToken",l),console.log("decodeedIdToken",t),console.log("contextType",r),console.log("contextUserId",s),console.log("contextUtouId",c),console.log("contextRoomId",f),console.log("contextGroupId",g)}).catch(function(e){alert(e.code),alert(e.message)})}function Login(){liff.login()}$(document).ready(function(){$("#load").show(),$(".btn").on("click",function(){$("#load").show()}),setTimeout(function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(console.log("mobile"),InitializeLineLiffSdk(),ArrLiffQueryString=GetInLiffAppQuertString(),console.log(ArrLiffQueryString.debug),"1"==ArrLiffQueryString.debug?(console.log("直接開始"),$("#load").hide(),$("#mainBody").show()):(console.log("打API判斷活動是否開始"),checkStart())):($("#load").hide(),$("#QRCode").show(),$("#mainBody").hide())},500)});
//# sourceMappingURL=liff_inital_js_template_v3.js.map
