"use strict";function GetLiffId(){return"1654884078-0nYB68dJ"}function InitializeLineLiffSdk(){liff.init({liffId:GetLiffId()}).then(function(){return liff.isLoggedIn()?(console.log("login OK"),void KeepInitializeLineLiffSdk()):(alert("[Note] you're not login line now. It will turn to login page!"),Login(),!1)}).catch(function(e){alert(e.code),alert(e.message)})}function KeepInitializeLineLiffSdk(){console.log("keep");var o=liff.getOS(),i=liff.isInClient(),n=liff.isLoggedIn(),l=liff.getAccessToken(),t=liff.getDecodedIDToken(),e=liff.getContext(),s="",c="",f="",g="",d="";null!==e&&(s=e.type,e.viewType,c=e.userId,f=e.utouId,g=e.roomId,d=e.groupId);var r,a,u,I;liff.getProfile().then(function(e){r=e.userId,a=e.displayName,u=e.pictureUrl,I=e.statusMessage,console.log("profileUserId",r),console.log("profileDisplayName",a),console.log("profilePictureUrl",u),console.log("profileStatusMessage",I),console.log("os",o),console.log("isClient",i),console.log("isLoggedIn",n),console.log("userAccessToken",l),console.log("decodeedIdToken",t),console.log("contextType",s),console.log("contextUserId",c),console.log("contextUtouId",f),console.log("contextRoomId",g),console.log("contextGroupId",d)}).catch(function(e){alert(e.code),alert(e.message)})}function Login(){liff.login()}$(document).ready(function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(console.log("mobile"),InitializeLineLiffSdk()):($("#QRCode").show(),$("#mainBody").hide())});
//# sourceMappingURL=liff_inital_js_template_v3.js.map
