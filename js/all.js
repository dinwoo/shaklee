"use strict";!function(){var c;function t(){setTimeout(function(){$("#load").hide(),function t(o){var e=10<o/60?Math.floor(o/60):"0"+Math.floor(o/60);var n=10<o%60?o%60:"0"+o%60;$("#time").text("".concat(e,":").concat(n));o<=0?($("#time").text("重新載入"),clearTimeout(c)):c=setTimeout(function(){t(o--)},1e3)}(60)},1e3)}$(document).ready(function(){$("#load").show(),t()})}();
//# sourceMappingURL=all.js.map
