(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,4],{258:function(t,e,r){"use strict";r.r(e);var n={props:{url:{type:String,default:""}},methods:{copyUrl:function(){navigator.clipboard.writeText(this.url),this.$toast.show({type:"success",title:"Copied!",message:"Image URL copied to clipboard!",timeout:5})}}},o=r(50),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-row items-center justify-center my-2 p-2 bg-purple-800 rounded-md cursor-pointer w-80",on:{click:t.copyUrl}},[r("img",{staticClass:"w-12 h-12 bounded-md object-contain",attrs:{src:t.url}}),t._v(" "),r("p",{staticClass:"ml-2",attrs:{href:t.url}},[t._v(t._s(t.url))])])}),[],!1,null,null,null);e.default=component.exports},259:function(t,e,r){"use strict";r.r(e);var n=r(50),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[e("circle",{attrs:{cx:"50",cy:"50",fill:"none",stroke:"#ffffff","stroke-width":"8",r:"35","stroke-dasharray":"164.93361431346415 56.97787143782138"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"0.7042253521126761s",values:"0 50 50;360 50 50",keyTimes:"0;1"}})],1)])}),[],!1,null,null,null);e.default=component.exports},261:function(t,e,r){"use strict";var n=r(6),o=r(77).find,c=r(132),l="find",d=!0;l in[]&&Array(1).find((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},262:function(t,e,r){"use strict";var n=r(6),o=r(263);n({target:"String",proto:!0,forced:r(264)("link")},{link:function(t){return o(this,"a","href",t)}})},263:function(t,e,r){var n=r(3),o=r(22),c=r(12),l=/"/g,d=n("".replace);t.exports=function(t,e,r,n){var f=c(o(t)),m="<"+e;return""!==r&&(m+=" "+r+'="'+d(c(n),l,"&quot;")+'"'),m+">"+f+"</"+e+">"}},264:function(t,e,r){var n=r(5);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},265:function(t,e,r){"use strict";r.r(e);var n=r(10),o=r(126);var c=r(134),l=r(98);function d(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||Object(c.a)(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r(59),r(261),r(11),r(133),r(262);var f=r(75),m=r.n(f),v={data:function(){return{uploading:!1,showDropzone:!1,selectorInput:null,cancelTokenSource:null,imagesUploaded:[]}},mounted:function(){var t=this;document.onpaste=function(e){var r=d((e.clipboardData||e.originalEvent.clipboardData).items).find((function(i){return"file"===i.kind&&i.type.startsWith("image/")}));if(r){var n=r.getAsFile();t.upload(n)}};var e=null;window.addEventListener("dragover",(function(t){t.preventDefault()})),window.addEventListener("dragenter",(function(r){e=r.target,t.showDropzone=!0})),window.addEventListener("dragleave",(function(r){r.preventDefault(),r.target!==e&&r.target!==document||(t.showDropzone=!1)})),window.addEventListener("drop",this.onDrop),this.selectorInput=document.createElement("input"),this.selectorInput.type="file",this.selectorInput.accept="image/*",this.selectorInput.onchange=function(e){var r=d(e.target.files);console.log(r);var n=r.find((function(i){return i.type.startsWith("image/")}));n&&t.upload(n)},window.addEventListener("keyup",(function(e){"Escape"===e.key&&(t.cancelTokenSource.cancel("userCancel"),t.uploading=!1)}))},methods:{upload:function(data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.uploading=!0,(r=new FormData).append("image",data),"lost"!==t.$store.state.data.selectedUploader){e.next=8;break}return e.next=7,t.uploadImgur(r);case 7:n=e.sent;case 8:if(!0!==n){e.next=10;break}return e.abrupt("return",t.uploading=!1);case 10:if(n){e.next=13;break}return t.uploading=!1,e.abrupt("return",t.$toast.show({type:"danger",title:"Error",message:"Failed to upload image. Check console for details.",timeout:5}));case 13:navigator.clipboard.writeText(n),t.$toast.show({type:"success",title:"Success!",message:"Image URL copied to clipboard!",timeout:5}),t.imagesUploaded.push(n),t.uploading=!1;case 17:case"end":return e.stop()}}),e)})))()},uploadImgur:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.cancelTokenSource=m.a.CancelToken.source(),r.next=3,m()({method:"POST",url:"https://api.imgur.com/3/image",headers:{Authorization:"Client-ID 63ed31625cb60f9","Content-Type":"multipart/form-data"},cancelToken:e.cancelTokenSource.token,data:t}).catch((function(t){return"userCancel"===(null==t?void 0:t.message)||null}));case 3:if(n=r.sent){r.next=8;break}return r.abrupt("return",null);case 8:if(!0!==n){r.next=12;break}return r.abrupt("return",!0);case 12:return r.abrupt("return",n.data.data.link);case 13:case"end":return r.stop()}}),r)})))()},onDrop:function(t){console.log("a"),t.preventDefault(),t.stopPropagation(),this.showDropzone=!1;var e=d(t.dataTransfer.files).find((function(i){return i.type.startsWith("image/")}));e&&this.upload(e)}}},h=r(50),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",{staticClass:"text-center mt-4"},[t._v("paste, drag or "),r("button",{staticClass:"cursor-pointer",on:{click:function(e){return t.selectorInput.click()}}},[t._v("browse")]),t._v(" image")]),t._v(" "),r("div",{staticClass:"flex flex-col items-center mt-2"},t._l(t.imagesUploaded,(function(t){return r("ImageLog",{key:t,attrs:{url:t}})})),1),t._v(" "),r("transition",{attrs:{name:"fade"}},[t.uploading?r("div",{staticClass:"absolute top-0 left-0 w-full h-full z-10 backdrop-filter backdrop-blur-sm flex items-center justify-center flex-col"},[r("Loading",{staticClass:"w-12 text-white"}),t._v(" "),r("h2",{staticClass:"text-lg font-bold"},[t._v("Uploading")]),t._v(" "),r("p",[t._v("press "),r("span",{staticClass:"text-purple-500"},[t._v("esc")]),t._v(" to cancel")])],1):t.showDropzone?r("div",{staticClass:"absolute top-0 left-0 w-full h-full z-10 backdrop-filter backdrop-blur-sm flex items-center justify-center flex-col"},[r("h2",{staticClass:"text-lg font-bold"},[t._v("Drop Images Here")])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ImageLog:r(258).default,Loading:r(259).default})}}]);