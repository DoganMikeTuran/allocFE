"use strict";var precacheConfig=[["/index.html","1055a1daeff79241fce886fe06c3dee3"],["/static/css/main.4767f25d.css","cdb2c44314f155aa7dc97b286740f9a1"],["/static/media/adminIcon.a9722907.png","a9722907a8d589d382e5138e48edc2b7"],["/static/media/balmain.7d6e8a02.jpg","7d6e8a02913c378c3d59fa9208910bfe"],["/static/media/bg13.c9b95f45.jpg","c9b95f45e9b2f28c5b23ee95792b55d3"],["/static/media/bg14.6cdd0e88.jpg","6cdd0e889a988dcdeeea445ac8ad13ea"],["/static/media/bg15.1d547621.jpg","1d5476213e47699664a1641b17ba69e6"],["/static/media/bg16.150b1c9b.jpg","150b1c9bce62ec7a525a2e4d3ae34837"],["/static/media/emilyz.9fcf69e5.jpg","9fcf69e5359987c9b1545aae1c2c5faa"],["/static/media/eva.089c4f4e.jpg","089c4f4e55f158a69d0364c6b6339f37"],["/static/media/image_placeholder.ebe9884b.jpg","ebe9884b2152a08a525fcd5054019532"],["/static/media/james.f8039822.jpg","f803982222c87392f69787c2a3899de6"],["/static/media/logo-white.eec7c7f6.svg","eec7c7f60134e712ef7174c96ca7ee5a"],["/static/media/mike.aab414f7.jpg","aab414f7b69d0d4ad897e75e735f240a"],["/static/media/nucleo-outline.22a0bffe.ttf","22a0bffe789c286a9d78eb52670996a7"],["/static/media/nucleo-outline.24e2d6b4.woff","24e2d6b43b1b0f84fdfaa06a4032f154"],["/static/media/nucleo-outline.53a1bed7.eot","53a1bed7a3ec86d010fe100873828a89"],["/static/media/nucleo-outline.8ebec31f.woff2","8ebec31f5ce59f908db84d86aed5947f"],["/static/media/placeholder.f771455e.jpg","f771455e07d39b0841a3f0d4a2143c5d"],["/static/media/prada.d9f663d6.jpg","d9f663d65c11bd0719aa01a3403d0062"],["/static/media/ryan.f217f346.jpg","f217f346c88e5fb2720ca7c28827ff72"],["/static/media/saint-laurent.4fa6245a.jpg","4fa6245a9148ab4874183ab99fa818d4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});