(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),i=n.n(c),o=(n(83),n(32)),u=n(26),s=n(126),l=n(140),d=n(25),m=n(19),p=n(128),E=n(129),O=n(47),v=Object(s.a)((function(e){return Object(l.a)({questionBox:{padding:e.spacing(8)},answer:{padding:e.spacing(8)},option:{textAlign:"center"}})}));var f=function(e){var t=e.onAnswer,n=e.currentQuestion,a=e.activity,c=e.round,i=e.waitForNextRound,o=e.moveToNextRound,u=v(),s=c?"".concat(a.name," / ").concat(c.title):a.name;return i?r.a.createElement(p.a,{container:!0,spacing:8,className:u.questionBox},r.a.createElement(p.a,{item:!0,className:u.option,xs:12},r.a.createElement(E.a,{onClick:o},"Next Round"))):r.a.createElement(p.a,{container:!0,spacing:8,className:u.questionBox},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(O.a,{variant:"h6"},s.toUpperCase())),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(O.a,{variant:"h5"},"Question ",n.order,".")),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(O.a,{variant:"h5",className:"question"},n.content,".")),r.a.createElement(p.a,{item:!0,xs:6,className:u.option},r.a.createElement(E.a,{onClick:t},"Correct")),r.a.createElement(p.a,{item:!0,xs:6,className:u.option},r.a.createElement(E.a,{onClick:t},"InCorrect")))},b=n(23),h="".concat("QUESTIONS.GET_ALL","_SUCCESS");"".concat("QUESTIONS.QUESTIONS.COUNT","_SUCCESS");function g(e){return e.type===h}var S="".concat("ACTIVITIES.GET_ALL","_SUCCESS");"".concat("ACTIVITIES.QUESTIONS.COUNT","_SUCCESS");function y(e){return e.type===S}var j=n(131),I=n(138),N=n(130),T=n(132),C=Object(s.a)((function(e){return{center:{textAlign:"center"}}})),_=function(e){var t=e.question,n=C();return r.a.createElement(I.a,{button:!0,key:t.id,divider:!0,className:n.center},r.a.createElement(N.a,{primary:"Q".concat(t.id)}),r.a.createElement(N.a,{primary:t.isCorrect?"correct":"false"}))},q=Object(s.a)((function(e){return{root:{width:"100%",maxWidth:360,margin:"auto"},center:{textAlign:"center"}}}));var w=function(e){var t=e.activity,n=e.questions,a=q();return r.a.createElement(j.a,{component:"nav",className:a.root,"aria-label":"result-list"},r.a.createElement(I.a,{className:a.center},r.a.createElement(N.a,null,r.a.createElement(O.a,{variant:"h5"},t.name))),r.a.createElement(I.a,{className:a.center},r.a.createElement(N.a,null,r.a.createElement(O.a,{variant:"h5"},"Results"))),r.a.createElement(T.a,{light:!0}),Object.keys(n).map((function(e){var t=n[e];return r.a.createElement(_,{question:t})})))},U=n(69),L=n.n(U),x=Object(s.a)((function(e){return{homeIcon:{marginLeft:"45%"}}})),A=function(e){var t=e.onClick,n=x();return r.a.createElement(E.a,{onClick:t,className:n.homeIcon,component:u.b,to:"/"},r.a.createElement(L.a,null))};var R=Object(b.b)((function(e){return{questions:e.questionsOnly.byOrder,questionIds:e.questionsOnly.allOrders,activities:e.activities.byId}}),(function(e){return{dispatch:e}}))((function(e){var t=e.match,n=e.questions,c=e.dispatch,i=e.questionIds,o=e.activities,u=Object(a.useState)(null),s=Object(m.a)(u,2),l=s[0],d=s[1],E=Object(a.useState)(1),v=Object(m.a)(E,2),b=v[0],h=v[1],g=t.params.id,S=o[g];return Object(a.useEffect)((function(){c({payload:{client:"api",request:{url:"/activities"}},type:"ACTIVITIES.GET_ALL"})}),[c,g]),Object(a.useEffect)((function(){c({payload:{client:"api",request:{url:"/activities/".concat(g,"/questions")}},type:"QUESTIONS.GET_ALL"})}),[c,g]),Object(a.useEffect)((function(){i&&i.length>0&&d(n[b])}),[i,b,n]),null===l?r.a.createElement(p.a,{container:!0},r.a.createElement(O.a,{variant:"h4"},"Loading...")):b>i.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{questions:n,activity:S}),r.a.createElement(A,null)):r.a.createElement(p.a,{container:!0},r.a.createElement(p.a,{item:!0},r.a.createElement(f,{currentQuestion:l,activity:S,onAnswer:function(){b<=i.length&&(h(b+1),d(n[b+1]))},round:null})))})),k=n(135),Q=n(133),D=Object(s.a)((function(e){return Object(l.a)({header:Object(o.a)({marginBottom:e.spacing(5),marginTop:e.spacing(5),marginLeft:e.spacing(10)},e.breakpoints.up("md"),{marginLeft:e.spacing(23)}),bodyText:Object(o.a)({marginLeft:e.spacing(9)},e.breakpoints.up("md"),{marginLeft:e.spacing(23)}),questionBox:Object(o.a)({},e.breakpoints.up("md"),{padding:e.spacing(8),maxWidth:345}),question:{border:1},answer:{padding:e.spacing(8)}})}));var G=Object(b.b)((function(e){return{activities:e.activities.byId}}),(function(e){return{dispatch:e}}))((function(e){var t=e.activities,n=e.dispatch,c=D();return Object(a.useEffect)((function(){n({payload:{client:"api",request:{url:"/activities"}},type:"ACTIVITIES.GET_ALL"})}),[n]),r.a.createElement(j.a,{component:"nav",className:c.root,"aria-label":"result-list"},r.a.createElement(I.a,{className:c.header},r.a.createElement(O.a,{variant:"h4"}," Quiz ")),r.a.createElement(T.a,{light:!0}),Object(k.a)((function(e){return r.a.createElement(I.a,{button:!0,divider:!0,variant:"contained",color:"primary",component:u.b,to:(t=e.id,{1:"/activities/".concat(t,"/questions"),2:"/activities/".concat(t,"/rounds")})[e.id]},r.a.createElement(N.a,{className:c.bodyText,primary:e.name}));var t}),Object(Q.a)(t)))})),B="".concat("ROUNDS.GET_ALL","_SUCCESS"),W="".concat("ROUNDS.QUESTIONS.COUNT","_SUCCESS"),P="".concat("ROUNDS.GET_QUESTION_ALL","_SUCCESS");function V(e){return e.type===B}function J(e){return e.type===P}function z(e){return e.type===W}var F=n(70),X=n(71),M=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.sessionStorage;Object(F.a)(this,e),this.storage=t}return Object(X.a)(e,[{key:"addItem",value:function(e,t){var n,a=this.storage.getItem(e);a?(n=JSON.parse(a)).push(t):n=[t],this.storage.setItem(e,JSON.stringify(n))}},{key:"getItem",value:function(e){var t=this.storage.getItem(e);return t?JSON.parse(t):[]}},{key:"resetItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.storage.setItem(e,JSON.stringify(t))}}]),e}(),K=n(139),H=new M,$=Object(s.a)((function(e){return{root:{width:"100%",maxWidth:360,margin:"auto"},center:{textAlign:"center"}}}));var Y=function(e){var t=e.activity,n=e.cacheName,a=e.rounds,c=$(),i=Object(K.a)((function(e){return e.roundId}),H.getItem(n));return r.a.createElement(j.a,{component:"nav",className:c.root,"aria-label":"result-list"},r.a.createElement(I.a,{className:c.center},r.a.createElement(N.a,null,r.a.createElement(O.a,{variant:"h5"},t.name))),r.a.createElement(I.a,{className:c.center},r.a.createElement(N.a,null,r.a.createElement(O.a,{variant:"h5"},"Results"))),r.a.createElement(T.a,{light:!0}),Object.keys(i).map((function(e){var t=i[e];return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{className:c.center,key:e},r.a.createElement(N.a,null,r.a.createElement(O.a,{variant:"h6"},a[e].title))),Object(k.a)((function(e){return r.a.createElement(_,{question:e})}),t))})))},Z=new M;Z.resetItem("processedQuestions",[]);var ee=[{component:G,path:"/"},{component:R,path:"/activities/:id/questions"},{component:Object(b.b)((function(e){return{questions:e.withRounds.byOrder,questionIds:e.withRounds.allOrders,questionCount:e.withRounds.count,activities:e.activities.byId,rounds:e.withRounds.roundByOrder,roundIds:e.withRounds.roundOrders}}),(function(e){return{dispatch:e}}))((function(e){var t=e.match,n=e.questions,c=e.dispatch,i=e.questionIds,o=e.activities,u=e.rounds,s=e.roundIds,l=e.questionCount,d=Object(a.useState)(null),E=Object(m.a)(d,2),v=E[0],b=E[1],h=Object(a.useState)(1),g=Object(m.a)(h,2),S=g[0],y=g[1],j=Object(a.useState)(null),I=Object(m.a)(j,2),N=I[0],T=I[1],C=Object(a.useState)(1),_=Object(m.a)(C,2),q=_[0],w=_[1],U=Object(a.useState)(!1),L=Object(m.a)(U,2),x=L[0],R=L[1],k=Object(a.useState)(!1),Q=Object(m.a)(k,2),D=Q[0],G=Q[1],B=t.params.id,W=o[B];return Object(a.useEffect)((function(){c({payload:{client:"api",request:{url:"/activities"}},type:"ACTIVITIES.GET_ALL"}),c({payload:{client:"api",request:{url:"/activities/".concat(B,"/rounds")}},type:"ROUNDS.GET_ALL"}),c(function(e){return{payload:{client:"api",request:{url:"/activities/".concat(e,"/questions/count")}},type:"ROUNDS.QUESTIONS.COUNT"}}(B))}),[c,B]),Object(a.useEffect)((function(){s&&s.length>0&&b(u[S])}),[s,u,S]),Object(a.useEffect)((function(){var e;c((e=S,{payload:{client:"api",request:{url:"/activities/".concat(B,"/rounds/").concat(e,"/questions")}},type:"ROUNDS.GET_QUESTION_ALL"})),w(1)}),[c,B,S]),Object(a.useEffect)((function(){i&&i.length>0&&T(n[q])}),[i,q,n]),null===N?r.a.createElement(p.a,{container:!0},r.a.createElement(O.a,{variant:"h4"},"Loading...")):D?r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{activity:W,cacheName:"processedQuestions",rounds:u}),r.a.createElement(A,{onClick:function(){return Z.resetItem("processedQuestions",[])}})):r.a.createElement(p.a,{container:!0},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(f,{currentQuestion:N,activity:W,onAnswer:function(){if(Z.addItem("processedQuestions",N),S<=s.length)if(q<i.length){var e=q+1;w(e),T(n[e])}else S<s.length&&R(!0);Z.getItem("processedQuestions").length===l&&G(!0)},round:v,waitForNextRound:x,moveToNextRound:function(){R(!1);var e=S+1;y(e),b(u[e])}})))})),path:"/activities/:id/rounds"}].map((function(e,t){return r.a.createElement(d.a,{key:t,exact:!0,path:e.path,component:e.component})})),te=function(){return r.a.createElement(d.c,null,ee)},ne=n(137),ae={api:{url:Object({NODE_ENV:"production",PUBLIC_URL:"/quiz-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL||"http://localhost:3009"},basename:"/quiz-app"},re=Object(s.a)((function(e){return Object(l.a)({contentGrid:{flexGrow:1,padding:e.spacing(3)},root:{display:"flex"},content:Object(o.a)({},e.breakpoints.up("md"),{userSelect:"none",overflowX:"hidden",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:"30%"})})})),ce=function(){var e=re();return r.a.createElement(u.a,{basename:ae.basename},r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.contentGrid},r.a.createElement(ne.a,{className:e.content},r.a.createElement(te,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=n(10),oe=n(72),ue=n(73),se=n.n(ue),le=n(74),de={api:{client:se.a.create({baseURL:"".concat(ae.api.url,"/api"),responseType:"json"})}},me=Object(le.multiClientMiddleware)(de),pe=n(136),Ee=function(e){return!!Object(pe.a)(["meta","previousAction","onSuccess"],e)},Oe=function(e){return e.type&&e.type.indexOf("_SUCCESS")>-1},ve=n(134),fe={byId:{}},be=Object(ie.c)({byId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe.byId,t=arguments.length>1?arguments[1]:void 0;if(y(t))return he(t.payload.data);return e}}),he=Object(ve.a)((function(e){return e.id}));var ge={allOrders:[],byOrder:{},count:null},Se=Object(ie.c)({allOrders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge.allOrders,t=arguments.length>1?arguments[1]:void 0;if(g(t))return je(t.payload.data);return e},byOrder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge.byOrder,t=arguments.length>1?arguments[1]:void 0;if(g(t))return ye(t.payload.data);return e},count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge.count;arguments.length>1&&arguments[1];return e}}),ye=Object(ve.a)((function(e){return e.order})),je=Object(k.a)((function(e){return e.order}));var Ie={allOrders:[],byOrder:{},count:null,roundByOrder:{},roundOrders:[]},Ne=Object(ie.c)({allOrders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie.allOrders,t=arguments.length>1?arguments[1]:void 0;if(J(t))return Ce(t.payload.data);return e},byOrder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie.byOrder,t=arguments.length>1?arguments[1]:void 0;if(J(t))return Te(t.payload.data);return e},count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie.count,t=arguments.length>1?arguments[1]:void 0;if(z(t))return t.payload.data.count;return e},roundByOrder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie.roundByOrder,t=arguments.length>1?arguments[1]:void 0;if(V(t))return Te(t.payload.data);return e},roundOrders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie.roundOrders,t=arguments.length>1?arguments[1]:void 0;if(V(t))return Ce(t.payload.data);return e}}),Te=Object(ve.a)((function(e){return e.order})),Ce=Object(k.a)((function(e){return e.order}));var _e=Object(ie.c)({activities:be,questionsOnly:Se,withRounds:Ne}),qe="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0}):ie.d,we=Object(ie.e)(_e,qe(Object(ie.a)(me,(function(e){return function(t){return function(n){Oe(n)&&Ee(n)&&e.dispatch(n.meta.previousAction.onSuccess(n.payload.data)),t(n)}}}),oe.a)));i.a.render(r.a.createElement(b.a,{store:we},r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,n){e.exports=n(108)},83:function(e,t,n){}},[[78,1,2]]]);
//# sourceMappingURL=main.c59bdb9a.chunk.js.map