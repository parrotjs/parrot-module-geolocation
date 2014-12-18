/**
 * parrot-module-geolocation - Using geolocation with guarantees to obtain a good approximation.
 * @version v0.12.18
 * @link    https://github.com/parrotjs/parrot-boilerplate
 * @author  Kiko Beats (https://github.com/Kikobeats)
 * @license MIT
 */
(function(){!function(){var n,t,r,u,e,o;return r=navigator.geolocation,t=function(n){var t,r;for(t in n)r=n[t],null==r&&delete n[t];return n},u=function(n){var t;return t=n.coords,t.timestamp=n.timestamp,t},n=function(n){return n=u(n),n=t(n)},o=function(t,u,e){return null==e&&(e={enableHighAccuracy:!1,timeout:600,maximumAge:0}),r.watchPosition(function(r){return t(n(r))},u,e)},e=function(t){return null==t&&(t={enableHighAccuracy:!0,maximumAge:0,timeout:600}),new Promise(function(u,e){return r.getCurrentPosition(function(t){return u(n(t))},function(n){return e(Error(n.message))},t)})},parrot.geolocation={position:function(n,t){return"function"==typeof arguments[0]&&(t=n,n=null),e(n).then(t,t)},watch:function(n,t,r){return o(n,t,r)},clear:function(n){return r.clearWatch(n)}}}()}).call(this);