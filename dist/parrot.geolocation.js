/**
 * parrot-module-geolocation - Using geolocation with guarantees to obtain a good approximation.
 * @version v0.12.19
 * @link    https://github.com/parrotjs/parrot-boilerplate
 * @author  Kiko Beats (https://github.com/Kikobeats)
 * @license MIT
 */
(function(){!function(){var n,t,r,u,e,o;return r=navigator.geolocation,t=function(n){var t,r;for(t in n)r=n[t],null==r&&delete n[t];return n},u=function(n){var t;return t=n.coords,t.timestamp=n.timestamp,t},n=function(n){return n=u(n),n=t(n)},o=function(t,u,e){return null==t&&(t={enableHighAccuracy:!1,timeout:600,maximumAge:0}),r.watchPosition(function(t){return u(n(t))},e,t)},e=function(t){return null==t&&(t={enableHighAccuracy:!0,maximumAge:0,timeout:600}),new Promise(function(u,e){return r.getCurrentPosition(function(t){return u(n(t))},function(n){return e(Error(n.message))},t)})},parrot.geolocation={clear:function(n){return r.clearWatch(n)},position:function(n,t){return"function"==typeof arguments[0]&&(t=n,n=null),e(n).then(function(n){return t(n,null)},function(n){return t(null,n)})},watch:function(n,t,r){return o(n,t,r)}}}()}).call(this);