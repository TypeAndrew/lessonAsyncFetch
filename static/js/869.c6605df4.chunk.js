"use strict";(self.webpackChunkgoit_59_fs=self.webpackChunkgoit_59_fs||[]).push([[869],{854:function(t,e,s){s.d(e,{a:function(){return a}});var n=s(184),a=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"modal-backdrop fade show"}),(0,n.jsx)("div",{className:"modal fade show d-flex align-items-center justify-content-center",style:{display:"block",height:"100vh"},children:(0,n.jsx)("div",{className:"spinner-border text-light",children:(0,n.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})]})}},9869:function(t,e,s){s.r(e);var n=s(9439),a=s(2791),i=s(3263),l=s(7689),r=s(1087),o=s(9085),c=s(854),d=s(184);e.default=function(){var t,e,s,m=(0,l.UO)().postId,u=(0,l.TH)();console.log(u);var f=(0,a.useState)(null),h=(0,n.Z)(f,2),g=h[0],p=h[1],v=(0,a.useState)(!0),x=(0,n.Z)(v,2),j=x[0],b=x[1];return(0,a.useEffect)((function(){b(!0),i.Z.get("https://goit-fs.netlify.app/api/posts/"+m).then((function(t){var e=t.data;return p(e)})).catch((function(){o.Am.error("Something went wrong!")})).finally((function(){return b(!1)}))}),[m]),j?(0,d.jsx)(c.a,{}):g&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.rU,{to:null!==(t=null===(e=u.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/posts",className:"mb-4",children:"Back"}),(0,d.jsx)("img",{src:g.image,alt:g.title,className:"img-fluid mb-4",style:{maxHeight:"600px",width:"100%",objectFit:"cover"}}),(0,d.jsx)("h1",{className:"mb-5",children:g.title}),(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:g.content.replace(/\n/g,"<br/>")}}),(0,d.jsx)(r.rU,{to:"comments",className:"btn btn-primary my-4",state:{from:null===(s=u.state)||void 0===s?void 0:s.from},children:"Vew post comments"}),(0,d.jsx)(l.j3,{})]})}}}]);
//# sourceMappingURL=869.c6605df4.chunk.js.map