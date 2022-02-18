(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,n){e.exports=n(279)},146:function(e,t,n){},279:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),i=n(16),c=n.n(i),l=n(18),s=n(37),u=n(73),p=n(136),g=n.n(p),d=(n(146),n(20)),f=n(21),m=n(23),y=n(22),h=n(17),v=n(134),E=n.n(v),S=n(135),b=n.n(S),O="mediaSession"in navigator;O&&(navigator.mediaSession.setActionHandler("previoustrack",function(){if(a){var e=a.getState(),t=0===e.playState.songId?e.songs.length-1:e.playState.songId-1;a.dispatch(T(t))}}),navigator.mediaSession.setActionHandler("nexttrack",function(){if(a){var e=a.getState(),t=(e.playState.songId+1)%e.songs.length;a.dispatch(T(t))}}),navigator.mediaSession.setActionHandler("play",function(){a&&a.dispatch(I())}),navigator.mediaSession.setActionHandler("pause",function(){a&&a.dispatch(I())}));var k=function(e){a=e},P=function(e){O&&function(e){var t=a.getState();navigator.mediaSession.metadata=new window.MediaMetadata({title:t.songs[e].name,artist:"Unknown",album:"Unknown Albumn",artwork:[{src:"icons/mipmap-xhdpi/ic_launcher.png",sizes:"96x96",type:"image/png"},{src:"icons/mipmap-xxhdpi/ic_launcher.png",sizes:"144x144",type:"image/png"},{src:"icons/mipmap-xxxhdpi/ic_launcher.png",sizes:"192x192",type:"image/png"},{src:"icons/playstore/icon.png",sizes:"512x512",type:"image/png"}]})}(e)},w="PLAYLIST_PAGE",R="SETTINGS_PAGE",j="NOW_PLAYING_PAGE",A=function(e){return{type:"ADD_SONGS",songs:e}},T=function(e){return P(e),{type:"PLAY_SONG",id:e}},I=function(){return{type:"TOGGLE_PLAYING"}},x=n(43),N=n(106),C=n.n(N),D=n(107),L=n.n(D);function G(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(h.a)(e);if(t){var r=Object(h.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(y.a)(this,n)}}var M=function(e){Object(m.a)(n,e);var t=G(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).addSong=function(t){(0,e.props.addSongs)(t.currentTarget.files)},e}return Object(f.a)(n,[{key:"render",value:function(){return o.a.createElement(C.a,{color:"primary","aria-label":"Add",component:"label",htmlFor:"song-input",style:{position:"fixed",bottom:"110px",right:"25px",zIndex:3e3}},o.a.createElement("input",{style:{display:"none"},id:"song-input",onChange:this.addSong,type:"file",multiple:!0,accept:"audio/mp3"}),o.a.createElement(L.a,null))}}]),n}(r.Component),_=Object(l.b)(null,function(e){return{addSongs:function(t){return e(A(t))}}})(M),U=n(74),H=n(56),B=n(114),W=n.n(B),Y=n(71),z=n.n(Y),F=n(112),V=n.n(F),K=n(113),q=n.n(K),J=n(25),$=n.n(J),Q=n(42),X=n.n(Q),Z=n(108),ee=n.n(Z),te=n(62),ne=n.n(te),ae=n(110),re=n.n(ae),oe=n(60),ie=n.n(oe),ce=n(111),le=n.n(ce),se=n(61),ue=n.n(se),pe=n(109),ge=n.n(pe),de=function(e){var t=e.song,n=e.handleClick,a=e.handleIconClick,r=e.isPlaying;return o.a.createElement(X.a,{className:"song",onClick:n},o.a.createElement(ee.a,null,o.a.createElement(ie.a,null,r?o.a.createElement(ge.a,null):o.a.createElement(ue.a,null))),o.a.createElement(ne.a,{primary:t.name,secondary:null}),o.a.createElement(re.a,{onClick:a},o.a.createElement($.a,{"aria-label":"Delete"},o.a.createElement(le.a,null))))},fe=Object(H.a)(function(e){return{playState:e.playState}},{remove:function(e){return{type:"REMOVE_SONGS",id:e}},play:T})(function(e){var t=e.songs,n=e.remove,a=e.play,i=e.playState,c=Object(r.useState)(null),l=Object(U.a)(c,2),s=l[0],u=l[1],p=Object(r.useState)(-1),g=Object(U.a)(p,2),d=g[0],f=g[1],m=function(e){return function(t){var n=t.target;u(n),f(e)}},y=function(e){return function(){return a(e)}};return t.length?o.a.createElement("div",{style:{marginBottom:"100px"}},o.a.createElement(V.a,{id:"simple-menu",anchorEl:s,open:Boolean(s),onClose:function(){return u(null)}},o.a.createElement(q.a,{onClick:function(){return n(d)}},"Remove Song")),o.a.createElement(z.a,null,t.map(function(e,t){return[o.a.createElement(de,{key:"song-".concat(e.lastModifiedDate),handleClick:y(t),handleIconClick:m(t),song:e,isPlaying:t===i.songId}),o.a.createElement(W.a,{key:"divider-".concat(e.lastModifiedDate)})]}))):o.a.createElement("h4",{style:{fontWeight:300,textAlign:"center"}},"No Songs Present. Please Add Songs")}),me=n(115),ye=n.n(me),he=n(26),ve=n.n(he),Ee=n(116),Se=n.n(Ee),be=n(63),Oe=n.n(be),ke=function(e){var t=e.playState,n=e.playingSong,a=e.currentTime,r=e.togglePlaying,i=e.openNowPlaying;return o.a.createElement(ve.a,{className:"small-now-playing",onClick:function(e){!e.target.closest('[type="button"]')&&n&&i()}},o.a.createElement(ye.a,{variant:"determinate",value:a}),o.a.createElement("div",{className:"now-playing-container"},o.a.createElement(ie.a,null,o.a.createElement(ue.a,null)),o.a.createElement("div",{className:"song-name"},n?n.name:"[No song]"),o.a.createElement("button",{type:"button",onClick:r},t.playing?o.a.createElement(Se.a,null):o.a.createElement(Oe.a,null))))};ke.defaultProps={playingSong:null};var Pe=ke;function we(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(h.a)(e);if(t){var r=Object(h.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(y.a)(this,n)}}var Re=function(e){Object(m.a)(n,e);var t=we(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleDragOver=function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy"},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.songs,a=t.playState,r=t.openNowPlaying,i=t.openSnackbar,c=t.currentTime,l=t.addSongs,s=t.toggle;return o.a.createElement("div",{onDragOver:this.handleDragOver,onDrop:function(t){if(e.handleDragOver(t),window.File&&window.FileReader&&window.FileList&&window.Blob){var n=Object(x.a)(t.dataTransfer.files).filter(function(e){var t=e.name;return t&&t.endsWith(".mp3")});n.length>0&&l(n)}else i("The File APIs are not fully supported in this browser.");return!1}},o.a.createElement(fe,{songs:n}),o.a.createElement(_,null),o.a.createElement(Pe,{togglePlaying:s,playState:a,playingSong:n[a.songId],openNowPlaying:r,currentTime:c}))}}]),n}(r.Component),je=Object(l.b)(null,function(e){return{toggle:function(){return e(I())},openNowPlaying:function(){return e({type:j})},addSongs:function(t){return e(A(t))}}})(Re),Ae=n(121),Te=n.n(Ae),Ie=n(125),xe=n.n(Ie),Ne=n(124),Ce=n.n(Ne),De=n(122),Le=n.n(De),Ge=n(55),Me=n.n(Ge),_e=n(123),Ue=n.n(_e),He=n(118),Be=n.n(He),We=n(119),Ye=n.n(We),ze=n(117),Fe=n.n(ze),Ve=n(120),Ke=n.n(Ve);function qe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(h.a)(e);if(t){var r=Object(h.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(y.a)(this,n)}}var Je=[{option:"Home",page:"HOME_PAGE",icon:o.a.createElement(Fe.a,null)},{option:"NowPlaying",page:j,icon:o.a.createElement(Be.a,null)},{option:"Playlists",page:w,icon:o.a.createElement(Ye.a,null)},{option:"Settings",page:R,icon:o.a.createElement(Ke.a,null)}],$e=function(e){Object(m.a)(n,e);var t=qe(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={open:!1},e.openPage=function(t){return function(){var n=e.props,a=n.openPage,r=n.playState,o=n.openSnackbar;e.setState(function(e){return{open:!e.open}}),t!==w&&t!==R?(r||t!==j)&&t&&a(t):o()}},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this,t=this.state.open;return o.a.createElement("div",null,o.a.createElement(Te.a,null,o.a.createElement(Le.a,null,o.a.createElement($.a,{onClick:this.openPage(),color:"inherit","aria-label":"Menu"},o.a.createElement(Ue.a,null)),o.a.createElement(Me.a,{variant:"h6",color:"inherit"},"Music Player"))),o.a.createElement("div",{className:"header-padding",style:{height:"55px"}}),o.a.createElement(Ce.a,{anchor:"left",open:t,onClose:this.openPage(),onOpen:this.openPage()},o.a.createElement("div",{style:{paddingTop:"50px"}}),Je.map(function(t){return o.a.createElement(X.a,{key:t.option,button:!0,onClick:e.openPage(t.page)},o.a.createElement(xe.a,null,t.icon),o.a.createElement(ne.a,null,t.option))})))}}]),n}(r.Component),Qe=Object(l.b)(null,function(e){return{openPage:function(t){return e({type:t})}}})($e),Xe=n(133),Ze=n.n(Xe),et=n(126),tt=n.n(et),nt=n(129),at=n.n(nt),rt=n(130),ot=n.n(rt),it=n(131),ct=n.n(it),lt=n(132),st=n.n(lt),ut=n(128),pt=n.n(ut),gt=n(127),dt=n.n(gt);function ft(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(h.a)(e);if(t){var r=Object(h.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(y.a)(this,n)}}var mt=function(e){Object(m.a)(n,e);var t=ft(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).changeRepeat=function(){var t=e.props,n=t.repeatType;(0,t.changeRepeat)(2===n?0:n+1)},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.installEvent;setTimeout(function(){return"function"===typeof e&&e()},3e3)}},{key:"render",value:function(){var e=this.props,t=e.playState,n=e.song,a=e.playNext,r=e.playPrevious,i=e.currentTime,c=e.repeatType,l=e.togglePlaying,s=e.timeDrag,u=e.openSnackbar;return o.a.createElement(ve.a,{className:"play-control"},o.a.createElement("h3",{className:"song-title"},n.name),o.a.createElement(tt.a,{style:{height:"2px"},className:"song-progress",value:i,onChange:function(e,t){return s(t)},max:100,min:0,defaultValue:2}),o.a.createElement("div",{className:"now-playing-container"},o.a.createElement("div",{style:{width:"35%",textAlign:"center"},className:"side-icons"},o.a.createElement($.a,{onClick:this.changeRepeat},1===c?o.a.createElement(dt.a,null):o.a.createElement(pt.a,{style:2===c?{}:{opacity:.5}})),o.a.createElement($.a,{onClick:r},o.a.createElement(at.a,null))),o.a.createElement("div",{style:{width:"30%",textAlign:"center"},className:"play-pause-button"},o.a.createElement($.a,{onClick:l},t.playing?o.a.createElement(ot.a,null):o.a.createElement(Oe.a,null))),o.a.createElement("div",{style:{width:"35%",textAlign:"center"},className:"side-icons"},o.a.createElement($.a,{onClick:a},o.a.createElement(ct.a,null)),o.a.createElement(st.a,{className:"material-icons",style:{color:"rgba(0, 0, 0, 0.3)"},onClick:function(){return u("Shuffle doesn't work yet, You can make a PR \ud83d\ude0a")}}))))}}]),n}(r.Component);mt.defaultProps={installEvent:null};var yt=Object(l.b)(function(e){return{playState:e.playState,repeatType:e.common.repeat}},function(e){return{changeRepeat:function(t){return e(function(e){return{type:"REPEAT",id:e}}(t))},togglePlaying:function(){return e(I())}}})(mt),ht=function(e){var t=e.playNext,n=e.timeDrag,a=e.repeatType,r=e.currentTime,i=e.playingSong,c=e.openSnackbar,l=e.playPrevious,s=e.installEvent;return o.a.createElement("div",null,o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px"}},o.a.createElement(Ze.a,{style:{width:"300px",fontSize:"300px",color:"rgba(0,0,0,0.3)"}})),o.a.createElement(yt,{song:i,playNext:t,timeDrag:n,repeatType:a,installEvent:s,currentTime:r,openSnackbar:c,playPrevious:l}))};ht.defaultProps={installEvent:function(){}};var vt=ht,Et=["ARROWLEFT","ARROWRIGHT","SPACE"];function St(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(h.a)(e);if(t){var r=Object(h.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(y.a)(this,n)}}var bt=function(e){Object(m.a)(n,e);var t=St(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).playNext=function(){var e=a.props,t=e.songs,n=e.playState,r=e.playSong;URL.revokeObjectURL(t[n.songId]),r((n.songId+1)%t.length)},a.songEnded=function(){var e=a.props,t=e.songs,n=e.playState,r=e.repeatType,o=e.playSong;0===r?(URL.revokeObjectURL(t[n.songId]),n.songId<t.length-1&&o(n.songId+1)):1===r?o(n.songId):a.playNext()},a.playPrevious=function(){var e=a.props,t=e.songs,n=e.playState,r=e.playSong;URL.revokeObjectURL(t[n.songId]),r(0===n.songId?t.length-1:n.songId-1)},a.updateTime=function(){var e=100*a.audioPlayer.currentTime/a.audioPlayer.duration||0;a.setState({currentTime:e})},a.playSong=function(e){var t=a.props.songs;if(t[e]){var n=URL.createObjectURL(t[e]);a.audioPlayer.src=n,a.audioPlayer.play(),window.document.title=t[e].name.replace(".mp3","")}},a.timeDrag=function(e){a.audioPlayer.currentTime=a.audioPlayer.duration*(e/100)},a.handleActionClick=function(){window.open("https://github.com/ashinzekene/react-music-player","_blank")},a.handleRequestClose=function(){a.setState({snackBarOpen:!1,snackMsg:"",hideSnackAction:!1})},a.state={currentTime:0,snackBarOpen:!1,hasRejectedInstall:!1,snackMsg:"",hideSnackAction:!1,installEvent:null,addToHomeScreenUIVisible:!1},a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.songs,a=t.toggle;n[0]&&(this.audioPlayer.src=URL.createObjectURL(n[0])),this.releaseKeyboardEvents=function(e){var t=function(t){var n=t.code.toUpperCase();if(-1!==Et.indexOf(n)){var a=e.playNext,r=e.playPrevious,o=e.togglePlaying;switch(n){case"ARROWLEFT":r();break;case"ARROWRIGHT":a();break;case"SPACE":o()}}};return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}}({playNext:this.playNext,playPrevious:this.playPrevious,togglePlaying:a}),window.addEventListener("beforeinstallprompt",function(t){t.preventDefault(),e.setState({installEvent:t,addToHomeScreenUIVisible:!0})})}},{key:"componentWillReceiveProps",value:function(e){var t=this,n=this.props.playState,a=this.state,r=a.installEvent,o=a.hasRejectedInstall;e.playState!==n&&(e.playState.playing?-1===e.playState.songId?this.playSong(0):e.playState.songId===n.songId?(console.log("Should only resume"),this.audioPlayer.play()):this.playSong(e.playState.songId):this.audioPlayer.pause(),r&&!o&&(r.prompt(),r.userChoice.then(function(e){"accepted"===e.outcome?t.setState({snackBarOpen:!0,hideSnackAction:!0,hasRejectedInstall:!1,snackMsg:"\ud83e\udd17 Yay! You've installed the app"}):t.setState({snackBarOpen:!0,hideSnackAction:!0,hasRejectedInstall:!0,snackMsg:"\ud83d\ude25 Reload the page whenever you change your mind"}),t.snackBarOpen({installEvent:null})})))}},{key:"componentWillUnmount",value:function(){this.releaseKeyboardEvents()}},{key:"render",value:function(){var e=this,t=this.state,n=t.currentTime,a=t.snackBarOpen,r=t.snackMsg,i=t.installEvent,c=t.addToHomeScreenUIVisible,l=t.hideSnackAction,s=this.props,u=s.songs,p=s.playState,g=s.toggle,d=s.repeatType,f=s.page;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Qe,{playState:p,addToHomeScreenUIVisible:c,playingSong:u[p.songId],openSnackbar:function(){return e.setState({snackBarOpen:!0})}}),o.a.createElement("audio",{hidden:!0,controls:!0,onEnded:this.songEnded,onTimeUpdate:this.updateTime,ref:function(t){e.audioPlayer=t}},o.a.createElement("track",Object.assign({kind:"captions"},{}))),f===j?o.a.createElement(vt,{repeatType:d,playNext:this.playNext,timeDrag:this.timeDrag,installEvent:i,currentTime:n,playPrevious:this.playPrevious,playingSong:u[p.songId],openSnackbar:function(t){return e.setState({snackBarOpen:!0,snackMsg:t})}}):o.a.createElement(je,{songs:u,toggle:g,playState:p,currentTime:n,openSnackbar:function(t){return e.setState({snackBarOpen:!0,snackMsg:t})}}),o.a.createElement(E.a,{open:a,autoHideDuration:6e3,onClose:this.handleRequestClose,ContentProps:{"aria-describedby":"message-id"},message:o.a.createElement("span",{id:"message-id"},r||"Not Implemented yet \ud83d\ude0a"),action:!l&&o.a.createElement(b.a,{key:"undo",color:"secondary",size:"small",onClick:this.handleActionClick},"MAKE A PR")}))}}]),n}(r.Component),Ot=Object(l.b)(function(e){return{page:e.page,songs:e.songs,playState:e.playState,repeatType:e.common.repeat}},function(e){return{toggle:function(){return e(I())},playSong:function(t){return e(T(t))}}})(bt),kt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Pt(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var wt={playing:!1,songId:-1},Rt=n(75),jt={sidebarOpen:!1,repeat:0},At=Object(s.b)({songs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SONGS":return[].concat(Object(x.a)(e),Object(x.a)(t.songs));case"REMOVE_SONGS":return e.filter(function(e,n){return n!==t.id});default:return e}},common:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_SIDEBAR":return Object(Rt.a)({},e,{sidebarOpen:!e.sidebarOpen});case"REPEAT":return Object(Rt.a)({},e,{repeat:t.id});default:return e}},playState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAY_SONG":return{playing:!0,songId:t.id};case"TOGGLE_PLAYING":return Object.assign({},e,{playing:!e.playing});default:return e}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"HOME_PAGE";switch((arguments.length>1?arguments[1]:void 0).type){case"HOME_PAGE":return"HOME_PAGE";case w:return w;case j:return j;case R:return R;default:return e}}}),Tt=n(72),It=Object(u.createMuiTheme)({palette:{primary:g.a}});Tt.getItem("state").then(function(e){if(null!==e)return e}).then(function(e){var t;t=Object(s.c)(At,e),k(t),t.subscribe(function(){var e;e={songs:t.getState().songs},Tt.setItem("state",e)}),c.a.render(o.a.createElement(l.a,{store:t},o.a.createElement(u.MuiThemeProvider,{theme:It},o.a.createElement(Ot,null))),document.getElementById("root"))}),function(){if("serviceWorker"in navigator){if(new URL("/music",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/music","/service-worker.js");kt?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Pt(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):Pt(e)})}}()}},[[137,1,2]]]);
//# sourceMappingURL=main.2853e1fa.chunk.js.map