webpackJsonp([1],{"12hm":function(t,e){},"5OHe":function(t,e){},"6wk6":function(t,e){},"7cGx":function(t,e){},DsUn:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("VCXJ"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"component-fade",mode:"out-in"}},[e("router-view")],1)],1)},staticRenderFns:[]};var s=n("Z0/y")({name:"App"},i,!1,function(t){n("O1RX")},null,null).exports,a=n("zO6J"),c=n("4YfN"),m=n.n(c),r=n("9rMa"),l={CHECK_MEMO:"CHECK_MEMO",STAR_MEMO:"STAR_MEMO",ADD_MEMO:"ADD_MEMO",MODIFY_MEMO:"MODIFY_MEMO",DELETE_MEMO:"DELETE_MEMO",DROP_MEMO:"DROP_MEMO",SYNC_MEMO:"SYNC_MEMO",SWITCH_DISPLAY:"SWITCH_DISPLAY",SWITCH_BY_TIME:"SWITCH_BY_TIME"},u={CHECK_MEMO:"CHECK_MEMO",STAR_MEMO:"STAR_MEMO",ADD_MEMO:"ADD_MEMO",MODIFY_MEMO:"MODIFY_MEMO",DELETE_MEMO:"DELETE_MEMO",DROP_MEMO:"DROP_MEMO",SYNC_MEMO:"SYNC_MEMO"},d=n("wSez"),f=n.n(d),p={name:"Header",data:function(){var t=this;return{isMenuVisible:!1,menu:[{name:"新建笔记",method:function(){t.$router.push({path:"new"})}},{name:"删除全部笔记",method:function(){d.MessageBox.confirm("确定执行此操作?","提示").then(function(){console.log("确认删除所有笔记"),t.drop_memo().then(function(){Object(d.Toast)({message:"操作成功"})}).catch(function(t){Object(d.Toast)({message:"操作失败，请重试"}),console.log(t)})},function(){console.log("取消")})}},{name:"切换显示模式",method:function(){t.switch_display()}},{name:"按时间排序⇩⇧",method:function(){t.switch_by_time()}}]}},computed:{appTitle:{get:function(){return"VUEMEMO"}},currentComponentName:function(){return this.$route.name}},methods:m()({},Object(r.c)({switch_display:l.SWITCH_DISPLAY,switch_by_time:l.SWITCH_BY_TIME}),Object(r.b)({drop_memo:u.DROP_MEMO,sync_memo:u.SYNC_MEMO}),{handleSync:function(t){this.sync_memo()},handleShowActionSheet:function(t){this.isMenuVisible=!0},handleGoHome:function(){this.$router.push({path:"/"})},handleBack:function(){this.$router.go(-1)},handleCreate:function(){this.$router.push({path:"/new"})}}),mounted:function(){window.document.title=this.appTitle}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-header",{staticClass:"header",attrs:{title:t.appTitle},on:{click:t.handleGoHome}},["Index"!==t.currentComponentName?n("mt-button",{attrs:{slot:"left"},on:{click:t.handleBack},slot:"left"},[n("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1):t._e(),t._v(" "),"Index"===t.currentComponentName?n("mt-button",{attrs:{slot:"right"},on:{click:t.handleShowActionSheet},slot:"right"},[n("font-awesome-icon",{attrs:{icon:["fas","bars"]}})],1):t._e()],1),t._v(" "),n("mt-actionsheet",{attrs:{actions:t.menu},model:{value:t.isMenuVisible,callback:function(e){t.isMenuVisible=e},expression:"isMenuVisible"}})],1)},staticRenderFns:[]};var _=n("Z0/y")(p,h,!1,function(t){n("DsUn")},"data-v-5583f30a",null).exports,M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-tabbar",{attrs:{fixed:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"全部"},nativeOn:{click:function(e){t.handleShow("all")}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","list-alt"]}}),t._v(" "),n("div",{staticClass:"tabbar-tag"},[t._v("全部")])],1),t._v(" "),n("mt-tab-item",{attrs:{id:"已完成"},nativeOn:{click:function(e){t.handleShow("completed")}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","check-circle"]}}),t._v(" "),n("div",{staticClass:"tabbar-tag"},[t._v("已完成")])],1),t._v(" "),n("mt-tab-item",{attrs:{id:"未完成"},nativeOn:{click:function(e){t.handleShow("incomplete")}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","circle"]}}),t._v(" "),n("div",{staticClass:"tabbar-tag"},[t._v("未完成")])],1),t._v(" "),n("mt-tab-item",{attrs:{id:"类别"},nativeOn:{click:function(e){t.handleShowPopup(e)}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","bookmark"]}}),t._v(" "),n("div",{staticClass:"tabbar-tag"},[t._v("类别")])],1),t._v(" "),n("mt-tab-item",{attrs:{id:"收藏"},nativeOn:{click:function(e){t.handleShow("star")}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","star"]}}),t._v(" "),n("div",{staticClass:"tabbar-tag"},[t._v("收藏")])],1),t._v(" "),n("mt-tab-item",{attrs:{id:"创建"},nativeOn:{click:function(e){t.handleCreate(e)}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","edit"]}}),t._v(" "),n("div",{staticClass:"tabbar-tag"},[t._v("创建")])],1)],1),t._v(" "),n("mt-popup",{staticClass:"container",attrs:{"popup-transition":"popup-fade",closeOnClickModal:!0,position:"middle"},model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[n("div",{staticClass:"main"},t._l(this.$store.state.type,function(e,o){return n("mt-cell",{key:o,attrs:{title:e},nativeOn:{click:function(n){t.handleShow(e)}}})}))])],1)},staticRenderFns:[]};var y=n("Z0/y")({name:"Tabbar",data:function(){return{selected:"全部",popupVisible:!1}},methods:{handleShow:function(t){this.$emit("handleShow",t),this.popupVisible=!1},handleCreate:function(){this.$router.push({path:"/new"})},handleShowPopup:function(){this.popupVisible=!this.popupVisible}}},M,!1,function(t){n("kbh0")},"data-v-0537138a",null).exports,v={name:"MemoItem",props:["memosData"],computed:m()({},Object(r.d)({displayType:"displayType",memoType:"type"})),methods:m()({},Object(r.b)({check_memo:u.CHECK_MEMO}),{handleClick:function(t){this.$router.push({path:"/"+t})},handleComplete:function(t){this.check_memo(t.uid).then(function(){Object(d.Toast)({message:"标记"+(t.completed?"完成":"待完成")})}).catch(function(t){Object(d.Toast)({message:"标记失败，请重试"}),console.log(t)})}})},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.memosData,function(e){return n("div",{key:e.uid,staticClass:"memos"},[n("span",{on:{click:function(n){t.handleComplete(e)}}},[n("transition",{attrs:{name:"scale-fade",mode:"out-in"}},[!0===e.completed?n("font-awesome-icon",{key:"checked",staticClass:"check",attrs:{icon:["far","check-circle"]}}):t._e(),t._v(" "),!1===e.completed?n("font-awesome-icon",{key:"notChecked",staticClass:"not-check",attrs:{icon:["far","circle"]}}):t._e()],1)],1),t._v(" "),n("h3",{staticClass:"title",on:{click:function(n){t.handleClick(e.uid)}}},[t._v("\n      "+t._s(e.title.length>50?e.title.substr(0,50)+"...":e.title.substr(0,50))+"\n    ")]),t._v(" "),n("transition",{attrs:{name:"slide-right",mode:"out-in"}},[t.displayType?n("div",[n("div",{staticClass:"tag"},[n("span",{staticClass:"tag-message"},[n("font-awesome-icon",{staticStyle:{color:"black",opacity:"0.4"},attrs:{icon:["fas","calendar-alt"]}}),t._v(" "),n("span",[t._v(t._s(new Date(e.timestamp).toLocaleTimeString()))])],1),t._v(" "),n("span",{staticClass:"tag-message"},[n("font-awesome-icon",{staticStyle:{color:"red",opacity:"0.4"},attrs:{icon:["fas","bookmark"]}}),t._v(" "),n("span",[t._v(t._s(t.memoType[e.categoryId]))])],1),t._v(" "),n("span",{staticClass:"tag-message"},[e.star?n("font-awesome-icon",{staticStyle:{color:"gold",opacity:"0.4"},attrs:{icon:["fas","star"]}}):t._e()],1)]),t._v(" "),n("p",{on:{click:function(n){t.handleClick(e.uid)}}},[t._v("\n          "+t._s(e.content.length>100?e.content.substr(0,100)+"...":e.content.substr(0,100))+"\n        ")])]):t._e()])],1)}))},staticRenderFns:[]};var b=n("Z0/y")(v,O,!1,function(t){n("12hm")},"data-v-04c623df",null).exports,g=n("3cXf"),E=n.n(g),I=function(){return Date.now().toString(10).substr(6,7)+Math.random().toString(35).substr(2,7)},T=function(t,e,n){for(var o=0;o<t.length-1;o++)for(var i=o+1;i<t.length;i++)if("asc"===n?t[i][e]>t[o][e]:t[i][e]<t[o][e]){var s=t[i];t[i]=t[o],t[o]=s}return t},w={getItem:function(t){return JSON.parse(window.localStorage.getItem(t))},setItem:function(t,e){window.localStorage.setItem(t,E()(e))}},C={name:"Index",components:{Header:_,MemoItem:b,Tabbar:y},data:function(){return{showType:"all"}},computed:m()({},Object(r.d)({msg:"msg",memos:"memos",sortByTimeType:"sortByTimeType"}),{allMemo:{get:function(){return this.sortByTimeType?this.ascByTimeMemo:this.descByTimeMemo}},completedMemo:{get:function(){return this.sortByTimeType?this.ascByTimeMemo.filter(function(t){return!0===t.completed}):this.descByTimeMemo.filter(function(t){return!0===t.completed})}},incompleteMemo:{get:function(){return this.sortByTimeType?this.ascByTimeMemo.filter(function(t){return!1===t.completed}):this.descByTimeMemo.filter(function(t){return!1===t.completed})}},starMemo:{get:function(){return this.sortByTimeType?this.ascByTimeMemo.filter(function(t){return!0===t.star}):this.descByTimeMemo.filter(function(t){return!0===t.star})}},work:{get:function(){return this.sortByTimeType?this.ascByTimeMemo.filter(function(t){return 0===t.categoryId}):this.descByTimeMemo.filter(function(t){return 0===t.categoryId})}},study:{get:function(){return this.sortByTimeType?this.ascByTimeMemo.filter(function(t){return 1===t.categoryId}):this.descByTimeMemo.filter(function(t){return 1===t.categoryId})}},life:{get:function(){return this.sortByTimeType?this.ascByTimeMemo.filter(function(t){return 2===t.categoryId}):this.descByTimeMemo.filter(function(t){return 2===t.categoryId})}},ascByTimeMemo:{get:function(){var t=T(this.memos,"timestamp","asc");return t=t.map(function(t){return t})}},descByTimeMemo:{get:function(){var t=T(this.memos,"timestamp","desc");return t=t.map(function(t){return t})}}}),methods:m()({},Object(r.b)({sync_memo:u.SYNC_MEMO}),Object(r.c)({add_memo:l.ADD_MEMO}),{handleShow:function(t){this.showType=t}}),beforeMount:function(){JSON.parse(window.localStorage.memos).length&&this.sync_memo()}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("div",{attrs:{id:"memos"}},["all"===this.showType?n("MemoItem",{attrs:{memosData:this.allMemo}}):t._e(),t._v(" "),"completed"===this.showType?n("MemoItem",{attrs:{memosData:this.completedMemo}}):t._e(),t._v(" "),"incomplete"===this.showType?n("MemoItem",{attrs:{memosData:this.incompleteMemo}}):t._e(),t._v(" "),"star"===this.showType?n("MemoItem",{attrs:{memosData:this.starMemo}}):t._e(),t._v(" "),"工作"===this.showType?n("MemoItem",{attrs:{memosData:this.work}}):t._e(),t._v(" "),"学习"===this.showType?n("MemoItem",{attrs:{memosData:this.study}}):t._e(),t._v(" "),"生活"===this.showType?n("MemoItem",{attrs:{memosData:this.life}}):t._e()],1),t._v(" "),n("Tabbar",{on:{handleShow:t.handleShow}})],1)},staticRenderFns:[]},D=n("Z0/y")(C,S,!1,null,null,null).exports,k={name:"NewMemo",components:{Header:_},data:function(){return{memo_category_id:"",memo_title:"",memo_content:"",titleInputer:null,contentInputer:null}},computed:m()({},Object(r.d)({type:"type"})),methods:m()({},Object(r.b)({add_memo:u.ADD_MEMO}),{handleSubmitBtn:function(t){if(0===this.memo_title.length||0===this.memo_content.length)return Object(d.Toast)({message:"标题或内容不能为空",position:"middle"}),!1;this.add_memo({uid:I(),categoryId:this.$store.state.type.indexOf(this.memo_category_id),title:this.memo_title,content:this.memo_content,completed:!1,timestamp:Date.now()}).then(function(){Object(d.Toast)({message:"发布成功"})}).catch(function(t){Object(d.Toast)({message:"发布失败，请重试"}),console.log(t)}),this.$router.push({path:"/"})},handleCancelBtn:function(){this.$router.push({path:"/"})}}),mounted:function(){var t=this;this.memo_category_id=this.type[0],this.titleInputer=document.querySelector("input.mint-field-core"),this.contentInputer=document.querySelector("textarea.mint-field-core"),this.titleInputer.onfocus=function(e){setTimeout(function(){t.titleInputer.scrollIntoView(!0),t.titleInputer.scrollIntoViewIfNeeded()},300)},this.contentInputer.onfocus=function(e){setTimeout(function(){t.contentInputer.scrollIntoView(!0),t.contentInputer.scrollIntoViewIfNeeded()},300)},window.ontouchstart=function(){t.titleInputer.blur(),t.contentInputer.blur()}}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("mt-radio",{attrs:{title:"笔记类型",options:this.$store.state.type},model:{value:t.memo_category_id,callback:function(e){t.memo_category_id=e},expression:"memo_category_id"}}),t._v(" "),n("mt-field",{attrs:{label:"标题",placeholder:"请输入标题"},model:{value:t.memo_title,callback:function(e){t.memo_title=e},expression:"memo_title"}}),t._v(" "),n("mt-field",{attrs:{label:"内容",placeholder:"文本内容",type:"textarea",rows:"12"},model:{value:t.memo_content,callback:function(e){t.memo_content=e},expression:"memo_content"}}),t._v(" "),n("div",{staticClass:"button-group"},[n("mt-button",{staticClass:"new-memo",attrs:{plain:"",size:"large",type:"primary"},nativeOn:{click:function(e){t.handleSubmitBtn(e)}}},[t._v("确认提交")])],1)],1)},staticRenderFns:[]};var $=n("Z0/y")(k,B,!1,function(t){n("PqIs")},null,null).exports,x={name:"ShowMemo",components:{Header:_},computed:m()({},Object(r.d)({memos:"memos"}),{memoItem:function(){var t=this.$route.params.id;return this.memos.find(function(e,n){return e.uid===t})}}),methods:m()({},Object(r.b)({delete_memo:"DELETE_MEMO",star_memo:"STAR_MEMO"}),{handleStar:function(){var t=this,e=this.$route.params.id;this.star_memo(e).then(function(){Object(d.Toast)({message:t.memoItem.star?"收藏成功":"取消收藏"})}).catch(function(t){Object(d.Toast)({message:"收藏失败，请重试"}),console.log(t)})},handleModify:function(){var t=this.$route.params.id;this.$router.push({path:"/modify/"+t})},handleDelete:function(){var t=this,e=this.$route.params.id;d.MessageBox.confirm("确定删除此笔记？","提示").then(function(){console.log("确认删除笔记"),t.delete_memo(e).then(function(){Object(d.Toast)({message:"已删除"})}).catch(function(t){Object(d.Toast)({message:"删除失败，请重试"})}),t.$router.push({path:"/"})},function(){console.log("取消")})}})},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("div",{staticClass:"container"},[n("h3",{staticClass:"title"},[t._v(t._s(t.memoItem.title))]),t._v(" "),n("p",{staticClass:"timestamp"},[t._v(t._s(new Date(t.memoItem.timestamp).toLocaleTimeString()))]),t._v(" "),n("p",{staticClass:"content"},[t._v(t._s(t.memoItem.content))])]),t._v(" "),n("div",{staticClass:"button-group"},[n("mt-button",{attrs:{type:"primary",plain:"",size:"large"},nativeOn:{click:function(e){t.handleModify(e)}}},[t._v("修改")]),t._v(" "),n("mt-button",{staticClass:"new-memo",attrs:{plain:"",size:"large",type:"default"},nativeOn:{click:function(e){t.handleStar(e)}}},[t._v(t._s(t.memoItem.star?"取消收藏":"收藏"))]),t._v(" "),n("mt-button",{attrs:{type:"danger",plain:"",size:"large"},nativeOn:{click:function(e){t.handleDelete(e)}}},[t._v("删除")])],1)],1)},staticRenderFns:[]};var R=n("Z0/y")(x,H,!1,function(t){n("7cGx")},"data-v-955e2418",null).exports,V={name:"ModifyMemo",components:{Header:_},data:function(){return{memo_category_id:"",memo_title:"",memo_content:"",memo_star:!1,titleInputer:null,contentInputer:null}},methods:m()({},Object(r.b)({modify_memo:u.MODIFY_MEMO}),{handleSubmitBtn:function(){var t=this.$route.params.id;this.modify_memo({uid:t,categoryId:this.$store.state.type.indexOf(this.memo_category_id),title:this.memo_title,content:this.memo_content,star:this.memo_star,timestamp:Date.now()}).then(function(){Object(d.Toast)({message:"修改成功"})}).catch(function(t){Object(d.Toast)({message:"修改失败，请重试"})}),this.$router.go(-1)}}),mounted:function(){var t=this,e=this.$route.params.id;this.$store.state.memos.forEach(function(n){if(n.uid===e){var o=[t.$store.state.type[n.categoryId],n.title,n.content,n.star];t.memo_category_id=o[0],t.memo_title=o[1],t.memo_content=o[2],t.memo_star=o[3]}}),this.titleInputer=document.querySelector("input.mint-field-core"),this.contentInputer=document.querySelector("textarea.mint-field-core"),this.titleInputer.onfocus=function(e){setTimeout(function(){t.titleInputer.scrollIntoView(!0),t.titleInputer.scrollIntoViewIfNeeded()},300)},this.contentInputer.onfocus=function(e){setTimeout(function(){t.contentInputer.scrollIntoView(!0),t.contentInputer.scrollIntoViewIfNeeded()},300)},window.ontouchstart=function(){t.titleInputer.blur(),t.contentInputer.blur()}}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",[n("div",[n("Header"),t._v(" "),n("div",{staticClass:"content"},[n("mt-field",{attrs:{label:"标题",placeholder:"请输入标题"},model:{value:t.memo_title,callback:function(e){t.memo_title=e},expression:"memo_title"}}),t._v(" "),n("mt-field",{attrs:{label:"内容",placeholder:"文本内容",type:"textarea",rows:"20"},model:{value:t.memo_content,callback:function(e){t.memo_content=e},expression:"memo_content"}}),t._v(" "),n("mt-radio",{attrs:{title:"笔记类型",options:this.$store.state.type},model:{value:t.memo_category_id,callback:function(e){t.memo_category_id=e},expression:"memo_category_id"}})],1),t._v(" "),n("div",{staticClass:"button-group"},[n("mt-button",{staticClass:"new-memo",attrs:{plain:"",size:"large",type:"primary"},nativeOn:{click:function(e){t.handleSubmitBtn(e)}}},[t._v("确认提交")])],1)],1)])},staticRenderFns:[]};var A=n("Z0/y")(V,j,!1,function(t){n("6wk6")},"data-v-7fd4c38a",null).exports;o.default.use(a.a);var Y,N,P=new a.a({routes:[{path:"/",name:"Index",component:D},{path:"/new",name:"NewMemo",component:$},{path:"/modify/:id",name:"ModifyMemo",component:A},{path:"/:id",name:"ShowMemo",component:R}]}),F=n("a3Yh"),L=n.n(F),K=n("rVsN"),W=n.n(K);o.default.use(r.a);var Z=new r.a.Store({strict:!1,state:{type:["工作","学习","生活"],displayType:!0,sortByTimeType:!0,memos:[{uid:"4053377u49mkbs",categoryId:0,title:"谢谢关注 VUEMEMO DEMO",content:"项目只用于测试，此项目托管于 GITHUB （http://github.com/oliyg/vuememo），欢迎 star，基于 Vue.js 的简单记事本 SPA ，Mint-UI、Vue、VueRouter、Vuex，使用localStorage作为数据本地持久化，并支持使用Markdown格式笔记，主要功能有增查改删笔记、按条件过滤和排序笔记、并支持文字和图片等形式的笔记",completed:!0,star:!0,timestamp:1518021987038},{uid:"4053377u49mkby",categoryId:0,title:"原创时政微视频丨习近平寄语冰雪运动",content:"中国代表团将参加5个大项、12个分项、55个小项的比赛。这是中国参赛人数最多、参加项目最多的一届冬奥会。事实上，从申办冬奥开始，习近平总书记就一直对这一赛事格外关注，他曾在短短7个多月内5次对2022年北京冬奥会作出指示。央视新闻新媒体推出原创微视频《习近平寄语冰雪运动》，从索契到北京，梳理总书记对冰雪运动的深入理解及关注。",completed:!0,star:!0,timestamp:1518021887038},{uid:"4053002oy0tdtd",categoryId:1,title:"春运前10天铁路旅客近9000万人次 节前高峰来临",content:"中新网客户端北京2月11日电 2018年春运今天进入第11天。今天是农历腊月二十六，春节的脚步越来越近，节前客流高峰也已经来临。根据铁路部门的数据，春运开启以来，全国铁路发送旅客规模近9000万人次。针对客流高峰，各地多措并举，保障民众的平安回家路。",completed:!1,star:!1,timestamp:1518021187038},{uid:"40875526chmnan",categoryId:2,title:"歼-20开始列装我空军作战部队 歼-20列装作战部队有何重要意义？",content:"央视网消息：9日，中国空军发布重磅消息，中国自主研制的新一代隐身战斗机歼-20开始列装空军作战部队，向全面形成作战能力迈出重要一步，引发广泛关注，这其中的关键是列装的是“作战部队”。而去年9月28日，国防部新闻发言人吴谦的当时的说法是“歼-20飞机已经列装部队，试验试飞工作正在按计划顺利推进”，关键词是“试验试飞”。两相对比，可以明显看出歼-20装备部队的进程大大地推进了。",completed:!1,star:!1,timestamp:1518020887038}]},actions:(Y={},L()(Y,u.CHECK_MEMO,function(t,e){var n=t.commit;return new W.a(function(t,o){n(l.CHECK_MEMO,e),t()})}),L()(Y,u.STAR_MEMO,function(t,e){var n=t.commit;return new W.a(function(t,o){n(l.STAR_MEMO,e),t()})}),L()(Y,u.ADD_MEMO,function(t,e){var n=t.commit;return new W.a(function(t,o){n(l.ADD_MEMO,e),t()})}),L()(Y,u.MODIFY_MEMO,function(t,e){var n=t.commit;return new W.a(function(t,o){n(l.MODIFY_MEMO,e),t()})}),L()(Y,u.DELETE_MEMO,function(t,e){var n=t.commit;return new W.a(function(t,o){n(l.DELETE_MEMO,e),t()})}),L()(Y,u.DROP_MEMO,function(t){var e=t.commit;return new W.a(function(t,n){e(l.DROP_MEMO),t()})}),L()(Y,u.SYNC_MEMO,function(t){var e=t.commit;return new W.a(function(t,n){e(l.SYNC_MEMO),t()})}),Y),mutations:(N={},L()(N,l.ADD_MEMO,function(t,e){t.memos.unshift(e);var n=w.getItem("memos");n.unshift(e),w.setItem("memos",n)}),L()(N,l.MODIFY_MEMO,function(t,e){var n=e.uid;t.memos.forEach(function(t,o){n===t.uid&&(t.categoryId=e.categoryId,t.title=e.title,t.content=e.content,t.timestamp=e.timestamp)}),w.setItem("memos",t.memos)}),L()(N,l.DROP_MEMO,function(t){t.memos.splice(0,t.memos.length),w.setItem("memos",[])}),L()(N,l.CHECK_MEMO,function(t,e){t.memos.forEach(function(t,n){e===t.uid&&(t.completed=!t.completed)}),w.setItem("memos",t.memos)}),L()(N,l.STAR_MEMO,function(t,e){t.memos.forEach(function(t,n){e===t.uid&&(t.star=!t.star)}),w.setItem("memos",t.memos)}),L()(N,l.DELETE_MEMO,function(t,e){t.memos.forEach(function(n,o){e===n.uid&&t.memos.splice(o,1)}),w.setItem("memos",t.memos)}),L()(N,l.SYNC_MEMO,function(t){w.getItem("memos").length&&(t.memos=w.getItem("memos"))}),L()(N,l.SWITCH_DISPLAY,function(t){this.state.displayType=!this.state.displayType}),L()(N,l.SWITCH_BY_TIME,function(t){this.state.sortByTimeType=!this.state.sortByTimeType}),N)}),z=(n("5OHe"),n("IlLv")),q=n("VbEn"),J=n.n(q),U=n("jMfg"),G=n("k1fR");n("/JRm");z.default.library.add(U.a),z.default.library.add(G.a),o.default.config.productionTip=!0,o.default.use(f.a),o.default.component("font-awesome-icon",J.a),new o.default({el:"#app",router:P,store:Z,components:{App:s},template:"<App/>"})},O1RX:function(t,e){},PqIs:function(t,e){},kbh0:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1d889c24abb5beec31b4.js.map