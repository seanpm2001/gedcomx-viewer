(this["webpackJsonpace-bbox"]=this["webpackJsonpace-bbox"]||[]).push([[0],{67:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(9),c=n.n(r),s=(n(67),n(16)),o=n(132),l=(n(68),n.p+"static/media/test_image.1815956c.jpg"),d=n(129),u=n(134),j=n(136),b=n(135),h=n(54),x=n.n(h),f=n(6),g=Object(d.a)((function(e){return{app:{height:"100vh",display:"flex",flexDirection:"row"},imageViewer:{flex:1,display:"flex",flexDirection:"column"},imageBar:{display:"flex",flexDirection:"row",padding:e.spacing(.5),alignItems:"center","& *":{margin:e.spacing(.2)}},editor:{borderLeft:"1px solid #ccc",display:"flex",flexDirection:"column",justifyContent:"center",width:250,padding:e.spacing(.5),"& *":{margin:e.spacing(.2)}},pad:{height:50},coords:{display:"flex",flexDirection:"row",margin:0,paddingLeft:e.spacing(5),backgroundColor:"#eee",paddingTop:e.spacing(10),paddingBottom:e.spacing(10)},pixelSwitch:{display:"flex",flexDirection:"row",margin:0,backgroundColor:"#eee",justifyContent:"center",alignItems:"center","& span":{margin:0}},labels:{display:"flex",flexDirection:"column",justifyContent:"flexEnd",textAlign:"right",fontWeight:700},values:{display:"flex",flexDirection:"column"},root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),p=function(e){return!isNaN(e)&&null!==e&&void 0!==e},v=function(e){return"".concat(1===e?"1.0":e).padEnd(16,"0").substr(0,16)},m={id:"overlay",x:.4,y:.57,width:.25,height:.25,movable:!0,resizable:!0,selectable:!0,type:"name"},O=function(){var e=g(),t=Object(i.useState)({x1:m.x,y1:m.y,x2:m.x+m.width,y2:m.y+m.height}),n=Object(s.a)(t,2),a=n[0],r=n[1],c=Object(i.useState)(!0),d=Object(s.a)(c,2),h=d[0],O=d[1],y=Object(i.useState)(!0),w=Object(s.a)(y,2),S=w[0],C=w[1],k=Object(i.useState)(),R=Object(s.a)(k,2),E=R[0],I=R[1],L=Object(i.useState)(),N=Object(s.a)(L,2),D=N[0],F=N[1],B=Object(i.useState)(!1),P=Object(s.a)(B,2),M=P[0],T=P[1],A=Object(i.useState)({width:1,height:1}),U=Object(s.a)(A,2),_=U[0],z=U[1],G=Object(i.useRef)(),J=Object(i.useRef)(),K=Object(i.useRef)(),V=Object(i.useRef)(),W=Object(i.useRef)(),q=Object(i.useRef)(),H=Object(i.useRef)(),Q=function(){if(a&&_){var e=a.x1,t=a.y1,n=a.x2,i=a.y2;return M?{x1:Math.round(e*_.width),y1:Math.round(t*_.height),x2:Math.round(n*_.width),y2:Math.round(i*_.height)}:{x1:v(e),y1:v(t),x2:v(n),y2:v(i)}}return null},X=function(e){if(e.detail.overlays[m.id]){var t=e.detail.overlays[m.id],n=t.x,i=t.y,a=t.width,c=t.height;Object.assign(m,e.detail.overlays[m.id]),r({x1:n,y1:i,x2:n+a,y2:i+c})}},Y=function(e){if(e.detail){var t=e.detail,n=t.width,i=t.height;z({width:n,height:i})}};Object(i.useEffect)((function(){document.title="Ace-Bbox";var e=null;G.current&&(e=G.current,G.current.overlays.addAndSelect(m),e.addEventListener("fs-single-image-viewer:overlay-change",X),e.addEventListener("fs-single-image-viewer:image-load",Y));var t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());n.source&&(I(n.source),K.current&&(K.current.value=n.source));var i=window.sessionStorage.getItem("session");return i&&(F(i),J.current&&(J.current.value=i)),function(){e.removeEventListener("fs-single-image-viewer:overlay-change",X),e.removeEventListener("fs-single-image-viewer:image-load",Y)}}),[]);var Z=function(){if(K.current&&J.current){var e=K.current.value;I(e);var t=J.current.value;t&&t!==D&&(F(t),window.sessionStorage.setItem("session",t));var n=new URLSearchParams(window.location.search);n.set("source",e);var i="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname,"?").concat(n.toString());window.history.pushState({path:i},"",i)}},$=function(){if(V.current&&V.current.value){var e=V.current.value.split(",").map(parseFloat),t=Object(s.a)(e,4),n=t[0],i=t[1],a=t[2],c=t[3];p(n)&&p(i)&&p(a)&&p(c)&&a>n&&c>i&&(M&&(n/=_.width,i/=_.height,a/=_.width,c/=_.height),Object.assign(m,{x:n,y:i,width:a-n,height:c-i}),G.current.overlays.update(m),r({x1:n,y1:i,x2:a,y2:c}),V.current.value=null,O(!0),V.current.blur())}},ee=E?"https://www.familysearch.org/dz/v1/dgs:".concat(E,"/image.xml?ctx=&session=").concat(D):l,te=Q();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.a,{}),Object(f.jsxs)("div",{className:e.app,children:[Object(f.jsxs)("div",{className:e.imageViewer,children:[Object(f.jsxs)("div",{className:e.imageBar,children:[Object(f.jsx)(b.a,{id:"sessionField",label:"Session ID",variant:"outlined",style:{width:385},inputRef:J}),Object(f.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){window.open("https://www.familysearch.org/platform/","_blank","noopener,noreferrer")},children:"Get Session Id"}),Object(f.jsx)(b.a,{id:"outlined-basic",label:"Image Number",variant:"outlined",onKeyPress:function(e){"Enter"===e.key&&(Z(),K.current.blur())},onChange:function(e){var t=!0;if(K.current&&K.current.value){var n=K.current.value.split("_"),i=Object(s.a)(n,2),a=i[0],r=i[1];p(a)&&p(r)&&(t=!1)}t!==S&&C(t)},inputRef:K}),Object(f.jsx)(u.a,{variant:"contained",color:"primary",onClick:Z,ref:q,disabled:S,children:"Load Image"})]}),Object(f.jsx)("fs-single-image-viewer",{ref:G,src:ee})]}),Object(f.jsxs)("div",{className:e.editor,children:[Object(f.jsx)(b.a,{id:"outlined-basic",label:"x1, y1, x2, y2",variant:"outlined",multiline:!0,rows:4,onChange:function(e){var t=!0;if(V.current&&V.current.value){var n=V.current.value.split(",").map(parseFloat),i=Object(s.a)(n,4),a=i[0],r=i[1],c=i[2],o=i[3];p(a)&&p(r)&&p(c)&&p(o)&&c>a&&o>r&&(t=!1)}t!==h&&O(t)},onKeyPress:function(e){"Enter"===e.key&&$()},inputRef:V}),Object(f.jsx)(u.a,{variant:"contained",color:"primary",onClick:$,disabled:h,ref:W,children:"Set Box"}),Object(f.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){V.current.value=null},disabled:h,ref:H,children:"Clear Coordinates"}),Object(f.jsxs)("div",{className:e.coords,children:[Object(f.jsxs)("div",{className:e.labels,children:[Object(f.jsx)("label",{children:"x1:"}),Object(f.jsx)("label",{children:"y1:"}),Object(f.jsx)("label",{children:"x2:"}),Object(f.jsx)("label",{children:"y2:"})]}),Object(f.jsxs)("div",{className:e.values,children:[Object(f.jsx)("span",{children:te.x1}),Object(f.jsx)("span",{children:te.y1}),Object(f.jsx)("span",{children:te.x2}),Object(f.jsx)("span",{children:te.y2})]})]}),Object(f.jsxs)("div",{className:e.pixelSwitch,children:[Object(f.jsx)("p",{children:"Use pixels"}),Object(f.jsx)(j.a,{color:"secondary",onChange:function(e){T(e.target.checked)}})]}),Object(f.jsx)(u.a,{startIcon:Object(f.jsx)(x.a,{}),variant:"outlined",color:"primary",onClick:function(){var e=Q();if(e){var t=e.x1,n=e.y1,i=e.x2,a=e.y2;navigator.clipboard.writeText("".concat(t,", ").concat(n,", ").concat(i,", ").concat(a))}},children:"Copy To Clipboard"})]})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))},w=n(55),S=n(56),C={persons:{},facts:{}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C;return e},R=Object(S.a)(k);c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(w.a,{store:R,children:Object(f.jsx)(O,{})})}),document.getElementById("root")),y()}},[[94,1,2]]]);
//# sourceMappingURL=main.0ed977f0.chunk.js.map