!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=9)}([function(e,n){var t=window.innerHeight/75,i=1.5*t,r=window.innerHeight/8,o=r,a=(window.innerHeight-r-80-i/2)/13,c=18.5*a,u=(window.innerWidth-c)/2,s=2*a/3,l=a,h=c-80,d={x:window.innerWidth/2,y:window.innerHeight-r},f={x:window.innerWidth-u-o,y:window.innerHeight-r};e.exports={initialDegree:-45,numberSteps:6,numberColumns:18,numberRows:6,screenWidth:c,screenSidePadding:u,cannonWidth:i,cannonHeight:80,cannonLoadingRadius:s,cannonLoadingWidth:t,cannonCenter:d,queueCenter:f,blockSpeed:15,blockSize:a,blockOffset:l,flashingSpeed:5,numberOfFlashes:2,fallingAcceleration:1.2,initialUpwardsMomentum:5,horizontalSpeedMax:6,blockBuffer:-12,meterLevels:8,meterXPadding:40,meterYPadding:20,meterHeight:20,meterWidth:h,upAnimationSpeed:3,downAnimationSpeed:10}},function(e,n){e.exports={limeGreen:"#0DFD55",black:"#000000",pink:"#FF0099",yellow:"#F3F315",orange:"#FF6600",cyan:"#0FFFFF",red:"#FF0000",purple:"#6E0DD0",white:"#FFFFFF"}},function(e,n){var t=(window.innerWidth-25)/2,i=25*Math.floor(t/25),r=i-150,o=i+150;e.exports={blockSize:25,widthInBlocks:13,trueCenter:t,centerScreen:i,leftLimit:r,rightLimit:o}},function(e,n){var t=function(e){return document.getElementById(e)},i=function(e){e.style.display="none"},r=function(e){e.style.display="block"},o=function(e,n){t(e).innerHTML=n};e.exports={hideElement:i,showElement:r,hideElementById:function(e){i(t(e))},showElementById:function(e){r(t(e))},updateYourScore:function(e){o("yourScore",e)},updateComputerScore:function(e){o("compScore",e)}}},function(e,n){var t=window.innerWidth/10;e.exports={originalScore:3,numBricks:50,numRows:5,numColumns:10,padding:5,brickWidth:t,brickHeight:30,topPadding:50,flashTimes:2,pauseTime:1e3,normalSpeed:5}},function(e,n){e.exports={snakeWidth:10}},function(e,n){function t(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Array.prototype.removeIfTrue=function(e){var n=this;this.forEach(function(t){e(t)&&n.splice(n.indexOf(t,1))})},Array.prototype.removeElements=function(e){var n=this;e.forEach(function(e){n.splice(n.indexOf(e),1)})},e.exports={arrayFrom1ToN:function(e){return Array.from(Array(e).keys())},randomElement:function(e){return e[Math.floor(Math.random()*e.length)]},mininumElement:function(e,n){var t=e[0];return e.forEach(function(e){n(e)<n(t)&&(t=e)}),t},nonNullValues:function(e){return e.filter(function(e){return e})},uniqueValues:function(e){return t(new Set(e))}}},function(e,n){e.exports={monitorKeysPressed:function(e){window.addEventListener("keydown",function(n){e[n.keyCode]=!0}),window.addEventListener("keyup",function(n){delete e[n.keyCode]})},monitorKeysPressedInOrder:function(e){window.addEventListener("keydown",function(n){e.push(n.keyCode)})}}},function(e,n){e.exports={isSpace:function(e){return 32===e.keyCode}}},function(e,n,t){e.exports=t(10)},function(e,n,t){"use strict";t.r(n);var i=t(6),r=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},o=t(7),a=t(3),c=t(1),u=t(4);function s(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var l=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=n,this.y=t,this.x_speed=u.normalSpeed,this.y_speed=u.normalSpeed}return function(e,n,t){n&&s(e.prototype,n),t&&s(e,t)}(e,[{key:"render",value:function(){window.context.beginPath(),window.context.arc(this.x,this.y,5,2*Math.PI,!1),window.context.fillStyle=c.limeGreen,window.context.fill()}},{key:"restart",value:function(){this.y_speed=-u.normalSpeed,this.x_speed=Math.floor(5*Math.random()-2),this.x=window.innerWidth/2,this.y=window.innerHeight-70}},{key:"update",value:function(e,n){this.x+=this.x_speed,this.y+=this.y_speed;var t=this.x-e.height,i=this.y-e.height,r=this.x+e.height,o=this.y+e.height;if(this.y-5<0?(this.y=5,this.y_speed=-this.y_speed):this.y+5>window.innerHeight&&n(),(this.x<0||this.x>window.innerWidth)&&(this.x_speed=-this.x_speed,this.x<0?this.x=5:this.x=window.innerWidth-5),i<e.y+e.width&&o>e.y&&t<e.x+e.width&&r>e.x){var a=(this.x-e.x-e.width/2)/8;this.y_speed=-u.normalSpeed,this.x_speed+=a,this.y+=this.y_speed}}}]),e}();function h(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var d=function(){function e(n,t,i,r){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=n,this.y=t,this.width=i,this.height=r,this.x_speed=0,this.y_speed=0}return function(e,n,t){n&&h(e.prototype,n),t&&h(e,t)}(e,[{key:"render",value:function(){window.context.fillStyle=c.limeGreen,window.context.fillRect(this.x,this.y,this.width,this.height)}},{key:"move",value:function(e,n){this.x+=e,this.y+=n,this.x_speed=e,this.y_speed=n,this.x<0?this.x=0:this.x+this.width>window.innerWidth&&(this.x=window.innerWidth-this.width)}}]),e}();function f(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var y=100,w=10,p=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.paddle=new d(window.innerWidth/2,window.innerHeight-60,y,w)}return function(e,n,t){n&&f(e.prototype,n),t&&f(e,t)}(e,[{key:"render",value:function(){this.paddle.render()}},{key:"update",value:function(e){var n=this;Object.keys(e).forEach(function(e){var t=Number(e);37===t?n.paddle.move(-5,0):39===t?n.paddle.move(5,0):n.paddle.move(0,0)})}}]),e}();function v(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var m=function(){function e(n,t,i,r){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=n,this.y=t,this.width=i,this.height=r,this.x_speed=0,this.y_speed=0}return function(e,n,t){n&&v(e.prototype,n),t&&v(e,t)}(e,[{key:"render",value:function(){window.context.fillStyle=c.limeGreen,window.context.fillRect(this.x,this.y,this.width,this.height)}},{key:"update",value:function(e,n){var t=this.x,i=this.y,r=this.x+u.brickWidth,o=this.y+u.brickHeight,a=e.x-5,c=e.y-5,s=e.x+5,l=e.y+5;c-u.normalSpeed<o&&s>t&&a<r&&l+u.normalSpeed>i&&(e.y=c+u.normalSpeed,e.y_speed=-e.y_speed,n())}}]),e}(),b=function(){for(var e=[],n=0;n<u.numBricks;n+=1)e.push(new m(n%u.numColumns*u.brickWidth+u.padding/2,Math.floor(n/u.numColumns)*u.brickHeight+u.topPadding,u.brickWidth-u.padding,u.brickHeight-u.padding));return e};function g(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var x=4,k=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=n,this.y=t,this.x_speed=x,this.y_speed=1}return function(e,n,t){n&&g(e.prototype,n),t&&g(e,t)}(e,[{key:"render",value:function(){window.context.beginPath(),window.context.arc(this.x,this.y,5,2*Math.PI,!1),window.context.fillStyle=c.limeGreen,window.context.fill()}},{key:"update",value:function(e,n,t,i){this.x+=this.x_speed,this.y+=this.y_speed;var r=this.x-5,o=this.y-5,a=this.x+5,c=this.y+5;this.y-5<0?(this.y=5,this.y_speed=-this.y_speed):this.y+5>window.innerHeight&&(this.y=window.innerHeight-5,this.y_speed=-this.y_speed),(this.x<0||this.x>window.innerWidth)&&(this.x<0?t():i(),this.x_speed=x,this.y_speed=Math.floor(5*Math.random()-2),this.x=window.innerWidth/4,this.y=window.innerHeight/2),r>window.innerWidth/2?r<e.x+e.width&&a>e.x&&o<e.y+e.height&&c>e.y&&(this.x_speed=-x,this.y_speed+=e.y_speed/2,this.x+=this.x_speed):r<n.x+n.width&&a>n.x&&o<n.y+n.height&&c>n.y&&(this.x_speed=x,this.y_speed+=n.y_speed/2,this.x+=this.x_speed)}}]),e}();function S(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var E=function(){function e(n,t,i,r){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=n,this.y=t,this.width=i,this.height=r,this.x_speed=0,this.y_speed=0}return function(e,n,t){n&&S(e.prototype,n),t&&S(e,t)}(e,[{key:"render",value:function(){window.context.fillStyle=c.limeGreen,window.context.fillRect(this.x,this.y,this.width,this.height)}},{key:"move",value:function(e,n){this.x+=e,this.y+=n,this.x_speed=e,this.y_speed=n,this.y<0?(this.y=0,this.y_speed=0):this.y+this.height>window.innerHeight&&(this.y=window.innerHeight-this.height,this.y_speed=0)}}]),e}();function W(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var O=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.paddle=new E(10,175,10,50)}return function(e,n,t){n&&W(e.prototype,n),t&&W(e,t)}(e,[{key:"render",value:function(){this.paddle.render()}},{key:"update",value:function(e){var n=e.y,t=-(this.paddle.y+this.paddle.height/2-n);t<-4?t=-4:t>4&&(t=4),this.paddle.move(0,t),this.paddle.y<0?this.paddle.y=0:this.paddle.y+this.paddle.height>window.innerHeight&&(this.paddle.y=window.innerHeight-this.paddle.height)}}]),e}();function M(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var j=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.paddle=new E(window.innerWidth-20,175,10,50)}return function(e,n,t){n&&M(e.prototype,n),t&&M(e,t)}(e,[{key:"render",value:function(){this.paddle.x=window.innerWidth-20,this.paddle.render()}},{key:"update",value:function(e){var n=this;Object.keys(e).forEach(function(e){var t=Number(e);38===t?n.paddle.move(0,-4):40===t?n.paddle.move(0,4):n.paddle.move(0,0)})}}]),e}(),_=t(5);function P(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var C=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=n,this.y=t}return function(e,n,t){n&&P(e.prototype,n),t&&P(e,t)}(e,[{key:"render",value:function(){window.context.beginPath(),window.context.arc(this.x-_.snakeWidth/2,this.y-_.snakeWidth/2,_.snakeWidth/2,2*Math.PI,!1),window.context.fillStyle=c.limeGreen,window.context.fill()}}]),e}();function I(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var z=function(){function e(n,t,i){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=n,this.y=t,this.size=_.snakeWidth,this.duration=i}return function(e,n,t){n&&I(e.prototype,n),t&&I(e,t)}(e,[{key:"render",value:function(){window.context.fillStyle=c.limeGreen,window.context.fillRect(this.x,this.y,this.size,this.size)}}]),e}(),T=function(e){return Math.round(e/_.snakeWidth)*_.snakeWidth},F=function(){for(var e=Math.floor(Math.random()*window.innerWidth+1),n=T(e);n<=10;)e=Math.floor(Math.random()*window.innerHeight+1),n=T(e);return n},H=function(){for(var e=Math.floor(Math.random()*window.innerHeight+1),n=T(e);n<=10;)e=Math.floor(Math.random()*window.innerHeight+1),n=T(e);return n},B=t(8),A=function(e,n){var t=e.x-n.x,i=e.y-n.y;return Math.sqrt(t*t+i*i)},L=function(e){return e*Math.PI/180},D=t(0);function Y(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var R=function(){function e(n,t,i){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=n,this.y=t,this.degree=i}return function(e,n,t){n&&Y(e.prototype,n),t&&Y(e,t)}(e,[{key:"render",value:function(){var e=window.context;e.fillStyle=c.limeGreen,e.save(),e.translate(this.x,this.y),e.rotate(L(this.degree)),e.fillRect(-D.cannonWidth/2,-D.cannonWidth/2,D.cannonWidth,-D.cannonHeight),e.restore(),e.beginPath(),e.arc(this.x,this.y,D.cannonLoadingRadius,2*Math.PI,!1),e.strokeStyle=c.limeGreen,e.lineWidth=D.cannonLoadingWidth,e.stroke(),e.beginPath(),e.arc(this.x,this.y,D.cannonLoadingRadius-D.cannonLoadingWidth/2,2*Math.PI,!1),e.fillStyle=c.black,e.fill()}},{key:"update",value:function(e){this.degree=e}}]),e}(),X=function(e){var n=e||[c.pink,c.yellow,c.orange,c.cyan,c.red,c.purple,c.limeGreen];return Object(i.randomElement)(n)},G=function(e){return new Z(D.queueCenter.x,D.queueCenter.y,X(e))},N=function(e,n,t){return{x:n*D.blockSize/2+D.blockSize/2+D.screenSidePadding,y:e*D.blockSize+D.blockSize/2+D.blockOffset*(t+1)}},q=function(e,n){var t=[];return n>1&&t.push({row:e,column:n-2}),n>0&&(t.push({row:e+1,column:n-1}),e>0&&t.push({row:e-1,column:n-1})),n<2*D.numberColumns-2&&t.push({row:e,column:n+2}),n<2*D.numberColumns-1&&(t.push({row:e+1,column:n+1}),e>0&&t.push({row:e-1,column:n+1})),t},K=function(e,n){return e.row===n.row&&e.column===n.column},V=function(e,n){return n.find(function(n){return K(e,n)})},U=function(e,n){var t=[n],i=n.row,r=n.column,o=n.color;return function e(n,t,i,r){i.forEach(function(i){var o=t.find(function(e){return e.row===i.row&&e.column===i.column});if((null===o||void 0===o?void 0:o.color)===r&&!V(o,n)){n.push(o);var a=o.row,c=o.column,u=q(a,c).filter(function(e){return!V(e,n)});e(n,t,u,r)}})}(t,e,q(i,r),o),t},J=function(e){e.forEach(function(e){return e.markAsFixed(!1)});var n=[];return e.filter(function(e){return 0===e.row}).forEach(function(t){t.markAsFixed(!0),n.push(t),function e(n,t,r){var o=r.row,a=r.column;Object(i.nonNullValues)(q(o,a).map(function(e){var i=V(e,t);return i&&!V(i,n)?i:null})).forEach(function(i){i.markAsFixed(!0),n.push(i),e(n,t,i)})}(n,e,t)}),e.filter(function(e){return!e.fixedToBase})};function Q(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Z=function(){function e(n,t,i,r,o){var a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=n,this.y=t,this.row=r,this.column=o,this.color=i,this.isMoving=!1,this.movementDegree=0,this.isFlashing=!1,this.flashingCount=0,this.isFalling=!1,this.fallingSpeed=0,this.sideSpeed=0,this.isSkull=!1,this.fixedToBase=a}return function(e,n,t){n&&Q(e.prototype,n),t&&Q(e,t)}(e,[{key:"render",value:function(){var e=this,n=D.blockSize/2,t=window.context;t.beginPath(),t.moveTo(this.x+n*Math.cos(0),this.y+n*Math.sin(0));if(Object(i.arrayFrom1ToN)(6).forEach(function(i){t.lineTo(e.x+n*Math.cos(2*i*Math.PI/6),e.y+n*Math.sin(2*i*Math.PI/6))}),this.isSkull)t.fillStyle=c.white,t.fill(),window.context.drawImage(document.getElementById("skull"),this.x-D.blockSize/3,this.y-D.blockSize/3,2*D.blockSize/3,2*D.blockSize/3);else{if(this.isFlashing){var r=this.flashingCount>0&&parseInt(this.flashingCount/D.flashingSpeed)%2!=0;t.fillStyle=r?c.white:c.black}else t.fillStyle=this.color;t.fill()}}},{key:"setAsSkull",value:function(){this.isSkull=!0}},{key:"update",value:function(){if(this.isMoving){var e=L(this.movementDegree-90);this.x=D.blockSpeed*Math.cos(e)+this.x,this.y=D.blockSpeed*Math.sin(e)+this.y;var n=D.screenSidePadding+D.blockSize/2,t=window.innerWidth-D.screenSidePadding-D.blockSize/2;(this.x<n||this.x>t)&&(this.movementDegree=-this.movementDegree,this.x<n?this.x=n:this.x=t)}this.isFlashing&&(this.flashingCount-=1),this.isFalling&&(this.x+=this.sideSpeed,this.y+=this.fallingSpeed,this.fallingSpeed+=D.fallingAcceleration)}},{key:"enterIntoSlot",value:function(e,n){var t=e.row,i=e.column,r=N(t,i,n),o=r.x,a=r.y;this.x=o,this.y=a,this.row=t,this.column=i,this.stopMoving(),this.markAsFixed(!0)}},{key:"moveToPending",value:function(){this.startMoving(-90)}},{key:"startMoving",value:function(e){this.isMoving=!0,this.movementDegree=e}},{key:"stopMoving",value:function(){this.isMoving=!1}},{key:"startFlashing",value:function(){this.isFlashing=!0,this.markAsFixed(!1),this.flashingCount=2*D.numberOfFlashes*D.flashingSpeed}},{key:"startFalling",value:function(){this.isFalling=!0,this.markAsFixed(!1),this.fallingSpeed=-D.initialUpwardsMomentum,this.sideSpeed=function(e,n){return Math.random()*(n-e)+e}(-D.horizontalSpeedMax,D.horizontalSpeedMax)}},{key:"markAsFixed",value:function(e){this.fixedToBase=e}},{key:"isOffEdge",value:function(e){return this.y<D.blockSize/2+(e+1)*D.blockSize}},{key:"stepDown",value:function(){this.y+=D.blockSize}}]),e}();function $(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var ee=function(){function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=window.innerWidth/2,this.y=window.innerHeight/2,document.addEventListener("mousemove",function(e){n.x=e.pageX,n.y=e.pageY})}return function(e,n,t){n&&$(e.prototype,n),t&&$(e,t)}(e,[{key:"getMouseX",value:function(){return this.x}},{key:"getMouseY",value:function(){return this.y}}]),e}();function ne(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var te=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.level=0,this.displayWidth=0}return function(e,n,t){n&&ne(e.prototype,n),t&&ne(e,t)}(e,[{key:"incrementLevel",value:function(){this.level+=1}},{key:"decrementLevel",value:function(e){e<this.level?this.level-=e:this.level=0}},{key:"shouldMoveBoardDown",value:function(){return this.level>D.meterLevels}},{key:"reset",value:function(){this.level=0}},{key:"desiredDisplayWidth",value:function(){return this.level*(D.meterWidth/D.meterLevels)}},{key:"update",value:function(){var e=this.displayWidth<this.desiredDisplayWidth()-D.upAnimationSpeed,n=this.displayWidth>this.desiredDisplayWidth()+D.downAnimationSpeed;e?this.displayWidth+=D.upAnimationSpeed:n?this.displayWidth-=D.downAnimationSpeed:this.displayWidth=this.desiredDisplayWidth()}},{key:"render",value:function(){var e=D.meterXPadding+D.screenSidePadding,n=window.innerHeight-D.meterYPadding-D.meterHeight;window.context.fillStyle=c.red,window.context.fillRect(e,n,D.meterWidth,D.meterHeight),window.context.fillStyle=c.yellow,window.context.fillRect(e,n,this.displayWidth,D.meterHeight)}}]),e}(),ie=function(e,n){var t=function(e){return 180*e/Math.PI}(Math.atan2(n.getMouseY()-e.y,n.getMouseX()-e.x))+90;return t>180?-89:t>89?89:t},re=function(e,n,t){Object(a.hideElementById)("name"),Object(a.hideElementById)("subtext"),Object(a.hideElementById)("yourScore");var i=0;!function(e){var n,r=document.getElementById("game_over_text");r.innerHTML=e;var o=function(){Object(a.showElement)(r),setTimeout(n,1e3)};n=function(){Object(a.hideElement)(r),3===i?(Object(a.showElementById)("name"),Object(a.showElementById)("subtext"),Object(a.showElementById)("yourScore"),t()):(i+=1,setTimeout(o,1e3))},o(),r.style.top=window.innerHeight/2-60+"px",r.style.left=(window.innerWidth-r.clientWidth)/2+"px"}(e?"you won!!! <br><br>  your score: "+n:"whoops! you lost :(")},oe=t(2);function ae(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var ce=function(){function e(n,t,i){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=n,this.y=t,this.type=i}return function(e,n,t){n&&ae(e.prototype,n),t&&ae(e,t)}(e,[{key:"render",value:function(){switch(this.type){case 0:window.context.fillStyle=c.pink;break;case 1:window.context.fillStyle=c.yellow;break;case 2:window.context.fillStyle=c.limeGreen;break;case 3:window.context.fillStyle=c.orange;break;case 4:window.context.fillStyle=c.cyan;break;case 5:window.context.fillStyle=c.red;break;case 6:window.context.fillStyle=c.purple}window.context.fillRect(this.x,this.y,oe.blockSize-1,oe.blockSize-1)}}]),e}();function ue(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],i=!0,r=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(i=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(r)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var se=function(e,n){return e*oe.blockSize+n.centerX<oe.leftLimit},le=function(e,n){return e*oe.blockSize+n.centerX>oe.rightLimit},he=function(e,n,t,i){return t<e+oe.blockSize&&t+oe.blockSize>e&&i<n+oe.blockSize&&i+oe.blockSize>n},de=function(e,n){for(var t=0;t<e.coordinates.length;t+=1){var i=e.coordinates[t];if(i){var r=ue(i,2),o=r[0],a=r[1];o=o*oe.blockSize+e.centerX,a=a*oe.blockSize+e.centerY;for(var c=0;c<n.coordinates.length;c+=1){var u=ue(n.coordinates[c],2),s=u[0],l=u[1];if(s=s*oe.blockSize+n.centerX,l=l*oe.blockSize+n.centerY,he(o,a,s,l))return!0}}}return!1},fe=function(e,n){for(var t=0;t<n.coordinates.length;t+=1){var i=ue(n.coordinates[t],2),r=i[0];if(i[1]*oe.blockSize+n.centerY>window.innerHeight-75||se(r,n)||le(r,n))return!0}for(var o=0;o<e.length-1;o+=1)if(de(e[o],n))return!0;return!1};function ye(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],i=!0,r=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(i=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(r)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function we(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var pe=function(){function e(n){switch(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.centerX=oe.centerScreen,this.centerY=50,this.type=n,this.orientation=0,n){case 0:this.coordinates=[[-1,0],[0,0],[1,0],[1,1]];break;case 1:this.coordinates=[[-1,1],[-1,0],[0,0],[1,0]];break;case 2:this.coordinates=[[0,0],[0,1],[1,0],[1,1]];break;case 3:this.coordinates=[[-1,0],[0,0],[1,0],[2,0]];break;case 4:this.coordinates=[[-1,1],[0,1],[0,0],[1,0]];break;case 5:this.coordinates=[[-1,0],[0,0],[0,1],[1,1]];break;case 6:this.coordinates=[[-1,0],[0,0],[1,0],[0,1]]}}return function(e,n,t){n&&we(e.prototype,n),t&&we(e,t)}(e,[{key:"rotate",value:function(){var e=this;if(2!==this.type){var n=function(e){var n=[];return e.forEach(function(e){var t=ye(e,2),i=t[0],r=t[1];n.push([-r,i])}),n};this.coordinates=n(this.coordinates),this.orientation=(this.orientation+1)%4,this.type>=3&&this.type<=5&&this.orientation>1&&(this.coordinates=n(n(this.coordinates)),this.orientation=0),this.coordinates.forEach(function(n){var t=n[0];se(t,e)&&(e.centerX+=oe.blockSize),le(t,e)&&(e.centerX-=oe.blockSize)})}}},{key:"render",value:function(){var e=this;this.coordinates.forEach(function(n){if(n){var t=ye(n,2),i=t[0],r=t[1];new ce(e.centerX+i*oe.blockSize,e.centerY+r*oe.blockSize,e.type).render()}})}}]),e}();function ve(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],i=!0,r=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(i=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(r)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var me=!1,be=document.getElementById("pause"),ge=document.getElementById("play"),xe=function(){me?(me=!1,be.style.display="block",ge.style.display="none"):(me=!0,be.style.display="none",ge.style.display="block")};window.canvas=function(){var e=document.createElement("canvas");return e.width=window.innerWidth,e.height=window.innerHeight,e}(),window.context=window.canvas.getContext("2d"),document.getElementById("page1").appendChild(window.canvas);var ke=Object(i.randomElement)([function(e,n,t){var i,r=0,o=[],c=function(){var e=Math.floor(7*Math.random());o.push(new pe(e)),i=o[o.length-1]};c();var u=function(){i.centerY+=oe.blockSize,fe(o,i)&&(i.centerY-=oe.blockSize,function(){var e={};o.forEach(function(n){n.coordinates.forEach(function(t,i){if(t){var r=ve(t,2),o=r[0],a=r[1],c=n.centerX+o*oe.blockSize,u=n.centerY+a*oe.blockSize,s={x:c,coordinatesRef:n.coordinates,index:i};u in e?e[u].push(s):e[u]=[s]}})});var n=[];Object.keys(e).forEach(function(t){e[t].length>=oe.widthInBlocks&&(e[t].forEach(function(e){delete e.coordinatesRef[e.index]}),n.push(t))}),n.forEach(function(e){r+=10,o.forEach(function(n){n.coordinates.forEach(function(t,i){if(t){var r=ve(t,2),o=r[0],a=r[1];n.centerY+a*oe.blockSize<e&&(n.coordinates[i]=[o,a+1])}})})})}(),c(),fe(o,i)&&(o=[],r=0,c()))},s=function(e){i.centerX+=e?oe.blockSize:-oe.blockSize,fe(o,i)&&(i.centerX-=e?oe.blockSize:-oe.blockSize)},l=function(){Object(a.updateYourScore)(r),o.map(function(e){return e.render()})};setInterval(function(){t()||u(),n(),l()},400),window.addEventListener("keydown",function(e){if(!t()){i=o[o.length-1];var r=Number(e.keyCode);40===r?u():39===r?s(!0):38===r?i.rotate():37===r&&s(!1),n(),l()}})},function(e,n,t){var i=0,r=0,c=new j,u=new O,s=new k(window.innerWidth/4,window.innerHeight/2),l={};Object(o.monitorKeysPressed)(l);e(function o(){t()||(c.update(l),u.update(s),s.update(c.paddle,u.paddle,function(){r+=1},function(){i+=1})),n(),Object(a.updateYourScore)(r),Object(a.updateComputerScore)(i),c.render(),u.render(),s.render(),e(o)})},function(e,n,t,i){var r=u.originalScore,c=new p,s=new l(window.innerWidth/4,window.innerHeight/2),h=b(),d=function(){r=u.originalScore,s.restart(),h=b(),i()},f=function(e){!function(e,n,t){Object(a.hideElementById)("name"),Object(a.hideElementById)("subtext"),Object(a.hideElementById)("yourScore");var i=0;!function(e){t();var r,o=document.getElementById("game_over_text");o.innerHTML=e;var c=function(){Object(a.showElement)(o),setTimeout(r,u.pauseTime)};r=function(){Object(a.hideElement)(o),i===u.flashTimes?(Object(a.showElementById)("name"),Object(a.showElementById)("subtext"),Object(a.showElementById)("yourScore"),n()):(i+=1,setTimeout(c,u.pauseTime))},c(),o.style.top=window.innerHeight/2-60+"px",o.style.left=(window.innerWidth-o.clientWidth)/2+"px"}(e?"you won!!!":"whoops! you lost :(")}(e,d,i)},y={};Object(o.monitorKeysPressed)(y);e(function i(){t()||(c.update(y),h.forEach(function(e){e.update(s,function(){h.splice(h.indexOf(e),1),0===h.length&&f(!0)})}),s.update(c.paddle,function(){0==(r-=1)&&f(!1),s.restart()})),n(),Object(a.updateYourScore)(r),c.render(),s.render(),h.forEach(function(e){e.render()}),e(i)})},function(e,n,t){var i,r,c,u=new C(F(),H()),s=function(){c=1,(r=[])[0]=new z(F(),H(),5),i=0};s();var l=[];Object(o.monitorKeysPressedInOrder)(l);var h=function(){var e=r[0],n=new z(e.x,e.y,r.length);(function(e,n){switch(n){case 0:e.y+=_.snakeWidth;break;case 1:e.x+=_.snakeWidth;break;case 2:e.y-=_.snakeWidth;break;default:e.x-=_.snakeWidth}})(n,c=function(e,n){for(var t=n,i=e.length,r=0;r<i;r+=1){var o=Number(e[r]);40===o&&2!==t?t=0:39===o&&3!==t?t=1:38===o&&0!==t?t=2:37===o&&1!==t&&(t=3),delete e[r]}return t}(l,c)),r.unshift(n),function(e,n){var t=e[0];e.slice(1).forEach(function(e){t.x===e.x&&t.y===e.y&&n()})}(r,s),function(e,n,t){e.length>0&&e[0].x===n.x-_.snakeWidth&&e[0].y===n.y-_.snakeWidth&&(t(),n.x=F(),n.y=H())}(r,u,function(){i+=1,r.forEach(function(e){e.duration+=6})}),r.forEach(function(e){e.duration-=1}),function(e){e.forEach(function(e){e.y-_.snakeWidth<0?e.y=T(window.innerHeight+(e.y-_.snakeWidth)):e.y+_.snakeWidth>window.innerHeight?e.y=T(_.snakeWidth):e.x-_.snakeWidth<0?e.x=T(window.innerWidth+(e.x-_.snakeWidth)):e.x+_.snakeWidth>window.innerWidth&&(e.x=T(_.snakeWidth))})}(r),function(e){var n=e.length-1;e[n].duration<=0&&e.splice(n,1)}(r)};setInterval(function(){t()||h(),n(),Object(a.updateYourScore)(i),r.forEach(function(e){return e.render()}),u.render()},60)},function(e,n){Object(a.hideElementById)("pause-container"),window.canvas.style.cursor="none";var t,r,o,c,u,s,l,h,d,f,y,w=new ee,p=new R(D.cannonCenter.x,D.cannonCenter.y,D.initialDegree),v=new te,m=function(){v.reset(),t=Object(i.arrayFrom1ToN)(D.numberRows).flatMap(function(e){return Object(i.arrayFrom1ToN)(D.numberColumns).map(function(n){var t=e%2==0?2*n:2*n+1,i=N(e,t,0),r=i.x,o=i.y;return new Z(r,o,X(),e,t,!0)})}),r=D.initialDegree,o=0,c=!1,u=null,s=new Z(D.cannonCenter.x,D.cannonCenter.y,X()),l=null,h=G(),d=[],f=[],y=0};m();var b=function(){if(Object(a.updateYourScore)(o),r=ie(p,w),p.update(r),v.update(),d.concat(f).forEach(function(e){return e.update()}),d.removeIfTrue(function(e){return e.flashingCount<0}),u){u.update(t);var e=function(e,n){return e.find(function(e){return A(e,n)<=D.blockSize+D.blockBuffer})}(t,u);if(e||u.isOffEdge(y)){var n=function(e,n,t,r){var o;if(n){var a=n.row,c=n.column;o=q(a,c)}else o=Object(i.arrayFrom1ToN)(D.numberColumns).map(function(e){return{row:0,column:2*e}});var u=o.filter(function(n){return!V(n,e)});return Object(i.mininumElement)(u,function(e){return A(N(e.row,e.column,r),t)})}(t,e,u,y);u.enterIntoSlot(n,y),t.push(u);var b=U(t,u),g=0;b.length>2&&((d=b).forEach(function(e){return e.startFlashing()}),t.removeElements(d),(f=J(t)).forEach(function(e){return e.startFalling()}),t.removeElements(f),f.length>0&&(g=f.length),o+=function(e,n){return e*e+1+n*n*10}(b.length,f.length)),g>0?v.decrementLevel(g):v.incrementLevel(),u=null}}var x=t.filter(function(e){return e.row+y>=D.numberRows+D.numberSteps});!c&&x.length>0&&(c=!0,x.forEach(function(e){return e.setAsSkull()}),re(!1,o,m)),v.shouldMoveBoardDown()&&(v.reset(),y+=1,t.concat(d).forEach(function(e){return e.stepDown()})),c||0!==t.length||(c=!0,re(!0,o,m)),[s,h].forEach(function(e){return null===e||void 0===e?void 0:e.update()}),l&&(l.update(),l.x<=D.cannonCenter.x&&(l.x=D.cannonCenter.x,l.stopMoving(),s=l,l=null))},g=function(){if(!u){(u=s).startMoving(r),(l=h).moveToPending(),s=null;var e=function(e){return Object(i.uniqueValues)(e.map(function(e){return e.color}))}(t);h=G(e)}};document.body.addEventListener("keydown",function(e){Object(B.isSpace)(e)&&(e.preventDefault(),g())}),document.body.addEventListener("click",function(e){e.preventDefault(),g()}),e(function i(){b(),n(),p.render(),v.render(),t.concat(d).concat(f).concat(u,s,h,l).forEach(function(e){return null===e||void 0===e?void 0:e.render()}),e(i)})}]),Se=[r,function(){window.canvas.width=window.innerWidth,window.canvas.height=window.innerHeight;var e=document.getElementById("name"),n=document.getElementById("subtext"),t=document.getElementById("yourScore"),i=document.getElementById("compScore");e.style.top=window.innerHeight/2-60+"px",e.style.left=(window.innerWidth-e.clientWidth)/2+"px",n.style.top=window.innerHeight/2-20+"px",n.style.left=(window.innerWidth-n.clientWidth)/2+"px",t.style.top="20px",t.style.left=window.innerWidth-80+"px",i.style.top="20px",i.style.left="80px"},function(){return me},xe];ke.apply(void 0,Se),document.body.addEventListener("keydown",function(e){40===e.keyCode?e.preventDefault():32===e.keyCode&&(e.preventDefault(),xe())})}]);