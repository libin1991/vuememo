webpackJsonp([1],{"2gdY":function(t,e){},"2hBW":function(t,e){},"5OHe":function(t,e){},K7o0:function(t,e){},KswF:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"component-fade",mode:"out-in"}},[e("router-view")],1)],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},a,!1,function(t){n("sL5X")},null,null).exports,s=n("/ocq"),c=n("Dd8w"),r=n.n(c),m=n("9rMa"),l={ADD_MEMO:"ADD_MEMO",MODIFY_MEMO:"MODIFY_MEMO",DELETE_MEMO:"DELETE_MEMO",CHECK_MEMO:"CHECK_MEMO",DROP_MEMO:"DROP_MEMO",SWITCH_DISPLAY:"SWITCH_DISPLAY",SWITCH_BY_TIME:"SWITCH_BY_TIME"},u=n("wSez"),d=n.n(u),p={CHECK_MEMO:"CHECK_MEMO",ADD_MEMO:"ADD_MEMO",MODIFY_MEMO:"MODIFY_MEMO",DELETE_MEMO:"DELETE_MEMO",DROP_MEMO:"DROP_MEMO"},f={name:"Header",data:function(){var t=this;return{strTitle:"VUEMEMO",isSheetVisible:!1,currentRouteName:this.$route.name,arrActions:[{name:"新建笔记",method:function(){t.$router.push({path:"new"})}},{name:"删除全部笔记",method:function(){u.MessageBox.confirm("确定执行此操作?","提示").then(function(){console.log("确认删除所有笔记"),t.drop_memo().then(function(){Object(u.Toast)({message:"操作成功"})}).catch(function(t){Object(u.Toast)({message:"操作失败，请重试"}),console.log(t)})},function(){console.log("取消")})}},{name:"切换显示模式",method:function(){t.switch_display()}},{name:"按时间排序⇩⇧",method:function(){t.switch_by_time()}}]}},methods:r()({},Object(m.c)({switch_display:l.SWITCH_DISPLAY,switch_by_time:l.SWITCH_BY_TIME}),Object(m.b)({drop_memo:p.DROP_MEMO}),{handleShowActionSheet:function(t){this.isSheetVisible=!0},handleBack:function(){this.$router.go(-1)},handleCreate:function(){this.$router.push({path:"/new"})}})},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-header",{staticClass:"header",attrs:{title:t.strTitle}},["Index"!==t.currentRouteName?n("mt-button",{attrs:{slot:"left"},on:{click:t.handleBack},slot:"left"},[n("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1):"Index"===t.currentRouteName?n("mt-button",{attrs:{slot:"right"},on:{click:t.handleShowActionSheet},slot:"right"},[n("font-awesome-icon",{attrs:{icon:["fas","bars"]}})],1):t._e()],1),t._v(" "),n("mt-actionsheet",{attrs:{actions:t.arrActions},model:{value:t.isSheetVisible,callback:function(e){t.isSheetVisible=e},expression:"isSheetVisible"}})],1)},staticRenderFns:[]};var _=n("VU/8")(f,h,!1,function(t){n("pv6u")},"data-v-3a3fdce0",null).exports,v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-tabbar",{attrs:{fixed:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"全部"},nativeOn:{click:function(e){t.handleShow("all")}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","list-alt"]}})],1),t._v(" "),n("mt-tab-item",{attrs:{id:"已完成"},nativeOn:{click:function(e){t.handleShow("completed")}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","check-circle"]}})],1),t._v(" "),n("mt-tab-item",{attrs:{id:"未完成"},nativeOn:{click:function(e){t.handleShow("incomplete")}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","circle"]}})],1),t._v(" "),n("mt-tab-item",{attrs:{id:"类别"},nativeOn:{click:function(e){t.handleShowPopup(e)}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","bookmark"]}})],1),t._v(" "),n("mt-tab-item",{attrs:{id:"收藏"},nativeOn:{click:function(e){t.handleShow("star")}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","star"]}})],1),t._v(" "),n("mt-tab-item",{attrs:{id:"创建"},nativeOn:{click:function(e){t.handleCreate(e)}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","edit"]}})],1)],1),t._v(" "),n("mt-popup",{staticClass:"container",attrs:{"popup-transition":"popup-fade",closeOnClickModal:!0,position:"middle"},model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[n("div",{staticClass:"main"},t._l(this.$store.state.type,function(e,o){return n("mt-cell",{key:o,attrs:{title:e},nativeOn:{click:function(n){t.handleShow(e)}}})}))])],1)},staticRenderFns:[]};var M=n("VU/8")({name:"Tabbar",data:function(){return{selected:"全部",popupVisible:!1}},methods:{handleShow:function(t){this.$emit("handleShow",t),this.popupVisible=!1},handleCreate:function(){this.$router.push({path:"/new"})},handleShowPopup:function(){this.popupVisible=!this.popupVisible}}},v,!1,function(t){n("2hBW")},"data-v-47115500",null).exports,y={name:"MemoItem",props:["memosData"],computed:r()({},Object(m.d)({displayType:"displayType",memoType:"type"})),methods:r()({},Object(m.b)({check_memo:p.CHECK_MEMO}),{handleClick:function(t){this.$router.push({path:"/"+t})},handleComplete:function(t){this.check_memo(t.uid).then(function(){Object(u.Toast)({message:"标记"+(t.completed?"完成":"待完成")})}).catch(function(t){Object(u.Toast)({message:"标记失败，请重试"}),console.log(t)})}})},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.memosData,function(e){return n("div",{key:e.uid,staticClass:"memos"},[n("span",{on:{click:function(n){t.handleComplete(e)}}},[n("transition",{attrs:{name:"scale-fade",mode:"out-in"}},[!0===e.completed?n("font-awesome-icon",{key:"checked",staticClass:"check",attrs:{icon:["far","check-circle"]}}):t._e(),t._v(" "),!1===e.completed?n("font-awesome-icon",{key:"notChecked",staticClass:"not-check",attrs:{icon:["far","circle"]}}):t._e()],1)],1),t._v(" "),n("h3",{staticClass:"title",on:{click:function(n){t.handleClick(e.uid)}}},[t._v("\n      "+t._s(e.title.length>50?e.title.substr(0,50)+"...":e.title.substr(0,50))+"\n    ")]),t._v(" "),n("transition",{attrs:{name:"slide-right",mode:"out-in"}},[t.displayType?n("div",[n("div",{staticClass:"tag"},[n("span",{staticClass:"tag-message"},[n("font-awesome-icon",{staticStyle:{color:"black",opacity:"0.4"},attrs:{icon:["fas","calendar-alt"]}}),t._v(" "),n("span",[t._v(t._s(new Date(e.timestamp).toLocaleTimeString()))])],1),t._v(" "),n("span",{staticClass:"tag-message"},[n("font-awesome-icon",{staticStyle:{color:"red",opacity:"0.4"},attrs:{icon:["fas","bookmark"]}}),t._v(" "),n("span",[t._v(t._s(t.memoType[e.categoryId]))])],1),t._v(" "),n("span",{staticClass:"tag-message"},[e.star?n("font-awesome-icon",{staticStyle:{color:"gold",opacity:"0.4"},attrs:{icon:["fas","star"]}}):t._e()],1)]),t._v(" "),n("p",{on:{click:function(n){t.handleClick(e.uid)}}},[t._v("\n          "+t._s(e.content.length>100?e.content.substr(0,100)+"...":e.content.substr(0,100))+"\n        ")])]):t._e()])],1)}))},staticRenderFns:[]};var O=function(){return Date.now().toString(10).substr(6,7)+Math.random().toString(35).substr(2,7)},g=function(t,e,n){for(var o=0;o<t.length-1;o++)for(var a=o+1;a<t.length;a++)if("asc"===n?t[a][e]>t[o][e]:t[a][e]<t[o][e]){var i=t[a];t[a]=t[o],t[o]=i}return t},E={name:"Index",components:{Header:_,MemoItem:n("VU/8")(y,b,!1,function(t){n("2gdY")},"data-v-04c623df",null).exports,Tabbar:M},data:function(){return{currentData:this.$store.state.memos}},computed:r()({},Object(m.d)({msg:"msg",memos:"memos",sortByTimeType:"sortByTimeType"}),{allMemo:{get:function(){return this.memos}},completedMemo:{get:function(){return this.memos.filter(function(t){return!0===t.completed})}},incompleteMemo:{get:function(){return this.memos.filter(function(t){return!1===t.completed})}},starMemo:{get:function(){return this.memos.filter(function(t){return!0===t.star})}},work:{get:function(){return this.memos.filter(function(t){return 0===t.categoryId})}},study:{get:function(){return this.memos.filter(function(t){return 1===t.categoryId})}},life:{get:function(){return this.memos.filter(function(t){return 2===t.categoryId})}},ascByTimeMemo:{get:function(){var t=g(this.currentData,"timestamp","asc");return t=t.map(function(t){return t})}},descByTimeMemo:{get:function(){var t=g(this.currentData,"timestamp","desc");return t=t.map(function(t){return t})}}}),methods:r()({},Object(m.c)({add_memo:l.ADD_MEMO}),{handleShow:function(t){switch(t){case"all":this.currentData=this.allMemo;break;case"completed":this.currentData=this.completedMemo;break;case"incomplete":this.currentData=this.incompleteMemo;break;case"star":this.currentData=this.starMemo;break;case"工作":this.currentData=this.work;break;case"学习":this.currentData=this.study;break;case"生活":this.currentData=this.life}}})},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("div",{attrs:{id:"memos"}},[t.sortByTimeType?n("MemoItem",{attrs:{memosData:t.ascByTimeMemo}}):t._e(),t._v(" "),t.sortByTimeType?t._e():n("MemoItem",{attrs:{memosData:t.descByTimeMemo}})],1),t._v(" "),n("Tabbar",{on:{handleShow:t.handleShow}})],1)},staticRenderFns:[]},w=n("VU/8")(E,D,!1,null,null,null).exports,C={name:"NewMemo",data:function(){return{memo_category_id:"",memo_title:"",memo_content:""}},mounted:function(){this.memo_category_id=this.type[0]},computed:r()({},Object(m.d)({type:"type"})),methods:r()({},Object(m.b)({add_memo:p.ADD_MEMO}),{handleSubmitBtn:function(t){if(0===this.memo_title.length||0===this.memo_content.length)return Object(u.Toast)({message:"标题或内容不能为空",position:"middle"}),!1;this.add_memo({uid:O(),categoryId:this.$store.state.type.indexOf(this.memo_category_id),title:this.memo_title,content:this.memo_content,completed:!1,timestamp:Date.now()}).then(function(){Object(u.Toast)({message:"发布成功"})}).catch(function(t){Object(u.Toast)({message:"发布失败，请重试"}),console.log(t)}),this.$router.push({path:"/"})},handleCancelBtn:function(){this.$router.push({path:"/"})}}),components:{Header:_}},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("mt-radio",{attrs:{title:"笔记类型",options:this.$store.state.type},model:{value:t.memo_category_id,callback:function(e){t.memo_category_id=e},expression:"memo_category_id"}}),t._v(" "),n("mt-field",{attrs:{label:"标题",placeholder:"请输入标题"},model:{value:t.memo_title,callback:function(e){t.memo_title=e},expression:"memo_title"}}),t._v(" "),n("mt-field",{attrs:{label:"内容",placeholder:"文本内容",type:"textarea",rows:"12"},model:{value:t.memo_content,callback:function(e){t.memo_content=e},expression:"memo_content"}}),t._v(" "),n("div",{staticClass:"button-group"},[n("mt-button",{staticClass:"new-memo",attrs:{plain:"",size:"large",type:"primary"},nativeOn:{click:function(e){t.handleSubmitBtn(e)}}},[t._v("确认提交")]),t._v(" "),n("mt-button",{staticClass:"new-memo",attrs:{plain:"",size:"large",type:"danger"},nativeOn:{click:function(e){t.handleCancelBtn(e)}}},[t._v("取消")])],1)],1)},staticRenderFns:[]};var k=n("VU/8")(C,T,!1,function(t){n("KswF")},null,null).exports,S={name:"ShowMemo",components:{Header:_},data:function(){return{title:"loading...",timestamp:"loading...",content:"loading..."}},computed:r()({},Object(m.d)({memos:"memos"})),methods:r()({},Object(m.b)({delete_memo:"DELETE_MEMO"}),{handleModify:function(){var t=this.$route.params.id;this.$router.push({path:"/modify/"+t})},handleDelete:function(){var t=this,e=this.$route.params.id;u.MessageBox.confirm("确定删除此笔记？","提示").then(function(){console.log("确认删除笔记"),t.delete_memo(e).then(function(){Object(u.Toast)({message:"已删除"})}).catch(function(t){Object(u.Toast)({message:"删除失败，请重试"})}),t.$router.push({path:"/"})},function(){console.log("取消")})}}),mounted:function(){var t=this,e=this.$route.params.id;this.memos.forEach(function(n,o){var a=[];if(e===n.uid){var i=[(a=t.memos[o]).title,a.content,a.timestamp];t.title=i[0],t.content=i[1],t.timestamp=i[2]}})}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("div",{staticClass:"container"},[n("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"timestamp"},[t._v(t._s(new Date(t.timestamp).toLocaleTimeString()))]),t._v(" "),n("p",{staticClass:"content"},[t._v(t._s(t.content))])]),t._v(" "),n("div",{staticClass:"button-group"},[n("mt-button",{attrs:{type:"primary",plain:"",size:"large"},nativeOn:{click:function(e){t.handleModify(e)}}},[t._v("修改")]),t._v(" "),n("mt-button",{attrs:{type:"danger",plain:"",size:"large"},nativeOn:{click:function(e){t.handleDelete(e)}}},[t._v("删除")])],1)],1)},staticRenderFns:[]};var $=n("VU/8")(S,I,!1,function(t){n("K7o0")},"data-v-4164a92a",null).exports,B={name:"ModifyMemo",components:{Header:_},data:function(){return{memo_category_id:"",memo_title:"",memo_content:""}},methods:r()({},Object(m.b)({modify_memo:p.MODIFY_MEMO}),{handleSubmitBtn:function(){var t=this.$route.params.id;this.modify_memo({uid:t,categoryId:this.$store.state.type.indexOf(this.memo_category_id),title:this.memo_title,content:this.memo_content,timestamp:Date.now()}).then(function(){Object(u.Toast)({message:"修改成功"})}).catch(function(t){Object(u.Toast)({message:"修改失败，请重试"})}),this.$router.go(-1)},handleCancelBtn:function(){this.$router.go(-1)}}),mounted:function(){var t=this,e=this.$route.params.id;this.$store.state.memos.forEach(function(n){if(n.uid===e){var o=[t.$store.state.type[n.categoryId],n.title,n.content];t.memo_category_id=o[0],t.memo_title=o[1],t.memo_content=o[2]}})}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",[n("div",[n("Header"),t._v(" "),n("mt-radio",{attrs:{title:"笔记类型",options:this.$store.state.type},model:{value:t.memo_category_id,callback:function(e){t.memo_category_id=e},expression:"memo_category_id"}}),t._v(" "),n("mt-field",{attrs:{label:"标题",placeholder:"请输入标题"},model:{value:t.memo_title,callback:function(e){t.memo_title=e},expression:"memo_title"}}),t._v(" "),n("mt-field",{attrs:{label:"内容",placeholder:"文本内容",type:"textarea",rows:"12"},model:{value:t.memo_content,callback:function(e){t.memo_content=e},expression:"memo_content"}}),t._v(" "),n("div",{staticClass:"button-group"},[n("mt-button",{staticClass:"new-memo",attrs:{plain:"",size:"large",type:"primary"},nativeOn:{click:function(e){t.handleSubmitBtn(e)}}},[t._v("确认提交")]),t._v(" "),n("mt-button",{staticClass:"new-memo",attrs:{plain:"",size:"large",type:"danger"},nativeOn:{click:function(e){t.handleCancelBtn(e)}}},[t._v("取消")])],1)],1)])},staticRenderFns:[]};var x=n("VU/8")(B,H,!1,function(t){n("ZD+C")},null,null).exports;o.default.use(s.a);var j,V,R=new s.a({routes:[{path:"/",name:"Index",component:w},{path:"/new",name:"NewMemo",component:k},{path:"/modify/:id",name:"ModifyMemo",component:x},{path:"/:id",name:"ShowMemo",component:$}]}),A=n("bOdI"),F=n.n(A),Y=n("//Fk"),L=n.n(Y);o.default.use(m.a);var P=new m.a.Store({strict:!1,state:{type:["工作","学习","生活"],displayType:!0,sortByTimeType:!0,memos:[{uid:"4053377u49mkby",categoryId:0,title:"原创时政微视频丨习近平寄语冰雪运动",content:"中国代表团将参加5个大项、12个分项、55个小项的比赛。这是中国参赛人数最多、参加项目最多的一届冬奥会。事实上，从申办冬奥开始，习近平总书记就一直对这一赛事格外关注，他曾在短短7个多月内5次对2022年北京冬奥会作出指示。央视新闻新媒体推出原创微视频《习近平寄语冰雪运动》，从索契到北京，梳理总书记对冰雪运动的深入理解及关注。",completed:!0,star:!0,timestamp:1518021887038},{uid:"4053002oy0tdtd",categoryId:1,title:"春运前10天铁路旅客近9000万人次 节前高峰来临",content:"中新网客户端北京2月11日电 2018年春运今天进入第11天。今天是农历腊月二十六，春节的脚步越来越近，节前客流高峰也已经来临。根据铁路部门的数据，春运开启以来，全国铁路发送旅客规模近9000万人次。针对客流高峰，各地多措并举，保障民众的平安回家路。",completed:!1,star:!1,timestamp:1518021187038},{uid:"40875526chmnan",categoryId:2,title:"歼-20开始列装我空军作战部队 歼-20列装作战部队有何重要意义？",content:"央视网消息：9日，中国空军发布重磅消息，中国自主研制的新一代隐身战斗机歼-20开始列装空军作战部队，向全面形成作战能力迈出重要一步，引发广泛关注，这其中的关键是列装的是“作战部队”。而去年9月28日，国防部新闻发言人吴谦的当时的说法是“歼-20飞机已经列装部队，试验试飞工作正在按计划顺利推进”，关键词是“试验试飞”。两相对比，可以明显看出歼-20装备部队的进程大大地推进了。",completed:!1,star:!1,timestamp:1518020887038}]},actions:(j={},F()(j,p.CHECK_MEMO,function(t,e){var n=t.commit;return new L.a(function(t,o){n(l.CHECK_MEMO,e),t()})}),F()(j,p.ADD_MEMO,function(t,e){var n=t.commit;return new L.a(function(t,o){n(l.ADD_MEMO,e),t()})}),F()(j,p.MODIFY_MEMO,function(t,e){var n=t.commit;return new L.a(function(t,o){n(l.MODIFY_MEMO,e),t()})}),F()(j,p.DELETE_MEMO,function(t,e){var n=t.commit;return new L.a(function(t,o){n(l.DELETE_MEMO,e),t()})}),F()(j,p.DROP_MEMO,function(t){var e=t.commit;return new L.a(function(t,n){e(l.DROP_MEMO),t()})}),j),mutations:(V={},F()(V,l.ADD_MEMO,function(t,e){t.memos.unshift(e)}),F()(V,l.MODIFY_MEMO,function(t,e){var n=e.uid;t.memos.forEach(function(t,o){n===t.uid&&(t.categoryId=e.categoryId,t.title=e.title,t.content=e.content,t.timestamp=e.timestamp)})}),F()(V,l.DROP_MEMO,function(t){t.memos.splice(0,t.memos.length)}),F()(V,l.CHECK_MEMO,function(t,e){t.memos.forEach(function(t,n){e===t.uid&&(t.completed=!t.completed)})}),F()(V,l.DELETE_MEMO,function(t,e){t.memos.forEach(function(n,o){e===n.uid&&t.memos.splice(o,1)})}),F()(V,l.SWITCH_DISPLAY,function(t){this.state.displayType=!this.state.displayType}),F()(V,l.SWITCH_BY_TIME,function(t){this.state.sortByTimeType=!this.state.sortByTimeType}),V)}),K=(n("5OHe"),n("IlLv")),W=n("VbEn"),U=n.n(W),z=n("jMfg"),N=n("k1fR");n("/JRm");K.default.library.add(z.a),K.default.library.add(N.a),o.default.config.productionTip=!0,o.default.use(d.a),o.default.component("font-awesome-icon",U.a),new o.default({el:"#app",router:R,store:P,components:{App:i},template:"<App/>"})},"ZD+C":function(t,e){},pv6u:function(t,e){},sL5X:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.377574aa68e9283bde2f.js.map