"use strict";var ArrLiffQueryString,EncodeQuertstring,DecodeQueryString,ArrQuertString;function GetLiffId(){return"1654884078-0nYB68dJ"}function DecondeUtf8(i){i=decodeURIComponent(i);return i}function GetArrQueryString(e){var t,e=e,n=[];if(-1!==e.indexOf("?")){var f=e.split("?")[1].split("&");for(i=0;i<f.length;i++)t=f[i].split("="),n.push(t[0]),n[t[0]]=t[1]}return n}function GetInLiffAppQuertString(){var e,t=location.search,n=[];if(-1!==t.indexOf("?")){var f=t.split("?")[1].split("&");for(i=0;i<f.length;i++)e=f[i].split("="),n.push(e[0]),n[e[0]]=e[1]}return n}function InitializeLineLiffSdk(i){liff.init({liffId:GetLiffId()}).then(function(){return liff.isLoggedIn()?void liff.getFriendship().then(function(i){i.friendFlag||KeepInitializeLineLiffSdk()}).catch(function(i){alert(i.code),alert(i.message)}):(alert("[Note] you're not login line now. It will turn to login page!"),Login(),!1)}).catch(function(i){alert(i.code),alert(i.message)})}function KeepInitializeLineLiffSdk(){liff.getOS(),liff.isInClient(),liff.isLoggedIn(),liff.getAccessToken(),liff.getDecodedIDToken();var i=liff.getContext();null!==i&&(i.type,i.viewType,i.userId,i.utouId,i.roomId,i.groupId);liff.getProfile().then(function(i){i.userId,i.displayName,i.pictureUrl,i.statusMessage}).catch(function(i){alert(i.code),alert(i.message)})}function Login(){liff.login()}$(document).ready(function(){InitializeLineLiffSdk()});
//# sourceMappingURL=liff_inital_js_template_v3.js.map
