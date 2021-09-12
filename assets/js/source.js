/*! Wiki.js - wiki.js.org - Licensed under AGPL */
(this.webpackJsonp=this.webpackJsonp||[]).push([["source"],{"./client/components/admin/admin-dev-flags.vue":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:"","grid-list-lg":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"admin-header"},[s("img",{staticStyle:{width:"80px"},attrs:{src:"/_assets/svg/icon-console.svg",alt:"Developer Tools"}}),s("div",{staticClass:"admin-header-title"},[s("div",{staticClass:"headline primary--text"},[e._v("Developer Tools")]),s("div",{staticClass:"subtitle-1 grey--text"},[e._v("Flags")])]),s("v-spacer"),s("v-btn",{attrs:{color:"success",depressed:"",large:""},on:{click:e.save}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-check")]),s("span",[e._v(e._s(e.$t("common:actions.apply")))])],1)],1),s("v-card",{staticClass:"mt-3",class:e.$vuetify.theme.dark?"grey darken-3-d5":"white grey--text text--darken-3"},[s("v-alert",{attrs:{color:"red",value:!0,icon:"mdi-alert",dark:"",prominent:""}},[s("span",[e._v("Do NOT enable these flags unless you know what you're doing!")]),s("div",{staticClass:"caption"},[e._v("Doing so may result in data loss or broken installation!")])]),s("v-card-text",[s("v-switch",{staticClass:"mt-3",attrs:{color:"primary",hint:"Log detailed debug info on LDAP/AD login attempts.","persistent-hint":"",label:"LDAP Debug",inset:""},model:{value:e.flags.ldapdebug,callback:function(t){e.$set(e.flags,"ldapdebug",t)},expression:"flags.ldapdebug"}}),s("v-divider",{staticClass:"mt-3"}),s("v-switch",{staticClass:"mt-3",attrs:{color:"red",hint:"Log all queries made to the database to console.","persistent-hint":"",label:"SQL Query Logging",inset:""},model:{value:e.flags.sqllog,callback:function(t){e.$set(e.flags,"sqllog",t)},expression:"flags.sqllog"}})],1)],1)],1)],1)],1)};o._withStripped=!0;var i=s("./node_modules/lodash/set.js"),n=s.n(i),a=s("./node_modules/lodash/transform.js"),l=s.n(a),d=s("./client/graph/admin/dev/dev-query-flags.gql"),r=s.n(d),c=s("./client/graph/admin/dev/dev-mutation-save-flags.gql"),u=s.n(c),m={data:()=>({flags:{sqllog:!1}}),methods:{async save(){try{await this.$apollo.mutate({mutation:u.a,variables:{flags:l()(this.flags,(e,t,s)=>{e.push({key:s,value:t})},[])},watchLoading(e){this.$store.commit("loading"+(e?"Start":"Stop"),"admin-dev-flags-update")}}),this.$store.commit("showNotification",{style:"success",message:"Flags applied successfully.",icon:"check"})}catch(e){this.$store.commit("pushGraphError",e)}}},apollo:{flags:{query:r.a,fetchPolicy:"network-only",update:e=>l()(e.system.flags,(e,t)=>{n()(e,t.key,t.value)},{}),watchLoading(e){this.$store.commit("loading"+(e?"Start":"Stop"),"admin-dev-flags-refresh")}}}},v=s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),p=s("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),f=s.n(p),g=s("./node_modules/vuetify/lib/components/VAlert/VAlert.js"),_=s("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),b=s("./node_modules/vuetify/lib/components/VCard/VCard.js"),y=s("./node_modules/vuetify/lib/components/VCard/index.js"),h=s("./node_modules/vuetify/lib/components/VGrid/VContainer.js"),j=s("./node_modules/vuetify/lib/components/VDivider/VDivider.js"),k=s("./node_modules/vuetify/lib/components/VGrid/VFlex.js"),V=s("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),x=s("./node_modules/vuetify/lib/components/VGrid/VLayout.js"),C=s("./node_modules/vuetify/lib/components/VGrid/VSpacer.js"),S=s("./node_modules/vuetify/lib/components/VSwitch/VSwitch.js"),w=Object(v.a)(m,o,[],!1,null,null,null);f()(w,{VAlert:g.a,VBtn:_.a,VCard:b.a,VCardText:y.b,VContainer:h.a,VDivider:j.a,VFlex:k.a,VIcon:V.a,VLayout:x.a,VSpacer:C.a,VSwitch:S.a}),w.options.__file="client/components/admin/admin-dev-flags.vue";t.default=w.exports},"./client/components/editor/editor-redirect.vue":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"editor-redirect"},[s("div",{staticClass:"editor-redirect-main"},[s("div",{staticClass:"editor-redirect-editor"},[s("v-container",{staticClass:"px-2 pt-1",attrs:{fluid:""}},[s("v-row",{attrs:{dense:""}},[s("v-col",{attrs:{cols:"12",lg:"8","offset-lg":"2",xl:"6","offset-xl":"3"}},[s("v-card",{staticClass:"pt-2"},[s("v-card-text",[s("div",{staticClass:"pb-1"},[s("div",{staticClass:"subtitle-2 primary--text"},[e._v("When a user reaches this page")]),s("div",{staticClass:"caption grey--text text--darken-1"},[e._v("and matches one of these rules...")])]),s("v-timeline",{attrs:{dense:""}},[s("v-slide-x-reverse-transition",{attrs:{group:"","hide-on-leave":""}},[s("v-timeline-item",{key:"cond-add-new",attrs:{"hide-dot":""}},[s("v-btn",{attrs:{color:"primary"},on:{click:function(e){}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),s("span",[e._v("Add Conditional Rule")])],1)],1),s("v-timeline-item",{key:"cond-none",attrs:{small:"",color:"grey"}},[s("v-card",{staticClass:"grey lighten-5",attrs:{flat:""}},[s("v-card-text",[s("div",{staticClass:"body-2"},[s("strong",[e._v("No conditional rule")])]),s("em",[e._v("Add conditional rules to direct users to a different page based on their group.")])])],1)],1),s("v-timeline-item",{key:"cond-rule-1",attrs:{small:"",color:"primary"}},[s("v-card",{staticClass:"blue-grey lighten-5",attrs:{flat:""}},[s("v-card-text",[s("div",{staticClass:"d-flex align-center"},[s("div",{staticClass:"body-2"},[s("strong",[e._v("User is a member of any of these groups:")])]),s("v-select",{staticClass:"ml-3",attrs:{color:"primary",items:e.groups,"item-text":"name","item-value":"id",multiple:"",solo:"",flat:"","hide-details":"",dense:"",chips:"","small-chips":""}})],1),s("v-divider",{staticClass:"my-3"}),s("div",{staticClass:"d-flex align-center"},[s("div",{staticClass:"body-2 mr-3"},[e._v("then redirect to")]),s("v-btn-toggle",{staticClass:"mr-3",attrs:{mandatory:"",color:"primary",borderless:"",dense:""},model:{value:e.fallbackMode,callback:function(t){e.fallbackMode=t},expression:"fallbackMode"}},[s("v-btn",{staticClass:"text-none",attrs:{value:"page"}},[e._v("Page")]),s("v-btn",{staticClass:"text-none",attrs:{value:"url"}},[e._v("External URL")])],1),"page"===e.fallbackMode?s("v-btn",{staticClass:"mr-3",attrs:{color:"primary"}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-magnify")]),s("span",[e._v("Select Page...")])],1):e._e(),"url"===e.fallbackMode?s("v-text-field",{attrs:{label:"External URL",outlined:"",hint:"Required - Title of the API","hide-details":"",dense:"","single-line":""},model:{value:e.fallbackUrl,callback:function(t){e.fallbackUrl=t},expression:"fallbackUrl"}}):e._e()],1)],1)],1)],1)],1)],1),s("v-divider",{staticClass:"mb-5"}),s("div",{staticClass:"subtitle-2 primary--text"},[e._v("Otherwise, redirect to...")]),s("div",{staticClass:"caption grey--text text--darken-1 pb-2"},[e._v("This fallback rule is mandatory and used if none of the conditional rules above applies.")]),s("div",{staticClass:"d-flex align-center"},[s("v-btn-toggle",{staticClass:"mr-3",attrs:{mandatory:"",color:"primary",borderless:"",dense:""},model:{value:e.fallbackMode,callback:function(t){e.fallbackMode=t},expression:"fallbackMode"}},[s("v-btn",{staticClass:"text-none",attrs:{value:"page"}},[e._v("Page")]),s("v-btn",{staticClass:"text-none",attrs:{value:"url"}},[e._v("External URL")])],1),"page"===e.fallbackMode?s("v-btn",{staticClass:"mr-3",attrs:{color:"primary"}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-magnify")]),s("span",[e._v("Select Page...")])],1):e._e(),"url"===e.fallbackMode?s("v-text-field",{attrs:{label:"External URL",outlined:"",hint:"Required - Title of the API","hide-details":"",dense:"","single-line":""},model:{value:e.fallbackUrl,callback:function(t){e.fallbackUrl=t},expression:"fallbackUrl"}}):e._e()],1)],1)],1)],1)],1)],1)],1)]),s("v-system-bar",{staticClass:"editor-redirect-sysbar",attrs:{dark:"",status:"",color:"grey darken-3"}},[s("div",{staticClass:"caption editor-redirect-sysbar-locale"},[e._v(e._s(e.locale.toUpperCase()))]),s("div",{staticClass:"caption px-3"},[e._v("/"+e._s(e.path))]),e.$vuetify.breakpoint.mdAndUp?[s("v-spacer"),s("div",{staticClass:"caption"},[e._v("Redirect")]),s("v-spacer"),s("div",{staticClass:"caption"},[e._v("0 rules")])]:e._e()],2)],1)};o._withStripped=!0;var i=s("./node_modules/vuex-pathify/dist/vuex-pathify.js"),n={data:()=>({fallbackMode:"page",fallbackUrl:"https://"}),computed:{isMobile(){return this.$vuetify.breakpoint.smAndDown},locale:Object(i.get)("page/locale"),path:Object(i.get)("page/path"),mode:Object(i.get)("editor/mode"),activeModal:Object(i.sync)("editor/activeModal")},methods:{},mounted(){this.$store.set("editor/editorKey","redirect"),"create"===this.mode&&this.$store.set("editor/content","<h1>Title</h1>\n\n<p>Some text here</p>")},apollo:{groups:{query:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"groups"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"list"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:127,source:{body:"\n        {\n          groups {\n            list {\n              id\n              name\n            }\n          }\n        }\n      ",name:"GraphQL request",locationOffset:{line:1,column:1}}}},fetchPolicy:"network-only",update:e=>e.groups.list,watchLoading(e){this.$store.commit("loading"+(e?"Start":"Stop"),"editor-redirect-groups")}}}},a=(s("./client/components/editor/editor-redirect.vue?vue&type=style&index=0&lang=scss&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),l=s("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),d=s.n(l),r=s("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),c=s("./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js"),u=s("./node_modules/vuetify/lib/components/VCard/VCard.js"),m=s("./node_modules/vuetify/lib/components/VCard/index.js"),v=s("./node_modules/vuetify/lib/components/VGrid/VCol.js"),p=s("./node_modules/vuetify/lib/components/VGrid/VContainer.js"),f=s("./node_modules/vuetify/lib/components/VDivider/VDivider.js"),g=s("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),_=s("./node_modules/vuetify/lib/components/VGrid/VRow.js"),b=s("./node_modules/vuetify/lib/components/VSelect/VSelect.js"),y=s("./node_modules/vuetify/lib/components/transitions/index.js"),h=s("./node_modules/vuetify/lib/components/VGrid/VSpacer.js"),j=s("./node_modules/vuetify/lib/components/VSystemBar/VSystemBar.js"),k=s("./node_modules/vuetify/lib/components/VTextField/VTextField.js"),V=s("./node_modules/vuetify/lib/components/VTimeline/VTimeline.js"),x=s("./node_modules/vuetify/lib/components/VTimeline/VTimelineItem.js"),C=Object(a.a)(n,o,[],!1,null,null,null);d()(C,{VBtn:r.a,VBtnToggle:c.a,VCard:u.a,VCardText:m.b,VCol:v.a,VContainer:p.a,VDivider:f.a,VIcon:g.a,VRow:_.a,VSelect:b.a,VSlideXReverseTransition:y.e,VSpacer:h.a,VSystemBar:j.a,VTextField:k.a,VTimeline:V.a,VTimelineItem:x.a}),C.options.__file="client/components/editor/editor-redirect.vue";t.default=C.exports},"./client/components/editor/editor-redirect.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){"use strict";s("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-redirect.vue?vue&type=style&index=0&lang=scss&")},"./client/components/new-page.vue":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("div",{staticClass:"newpage"},[s("div",{staticClass:"newpage-content"},[s("img",{staticClass:"animated fadeIn",attrs:{src:"/_assets/svg/icon-delete-file.svg",alt:"Not Found"}}),s("div",{staticClass:"headline"},[e._v(e._s(e.$t("newpage.title")))]),s("div",{staticClass:"subtitle-1 mt-3"},[e._v(e._s(e.$t("newpage.subtitle")))]),s("v-btn",{staticClass:"mt-5",attrs:{href:"/e/"+e.locale+"/"+e.path,"x-large":""}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),s("span",[e._v(e._s(e.$t("newpage.create")))])],1),s("v-btn",{staticClass:"mt-5",attrs:{color:"purple lighten-3",href:"javascript:window.history.go(-1);",outlined:""}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-arrow-left")]),s("span",[e._v(e._s(e.$t("newpage.goback")))])],1)],1)])])};o._withStripped=!0;var i={props:{locale:{type:String,default:"en"},path:{type:String,default:"home"}},data:()=>({})},n=s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),a=s("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),l=s.n(a),d=s("./node_modules/vuetify/lib/components/VApp/VApp.js"),r=s("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),c=s("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),u=Object(n.a)(i,o,[],!1,null,null,null);l()(u,{VApp:d.a,VBtn:r.a,VIcon:c.a}),u.options.__file="client/components/new-page.vue";t.default=u.exports},"./client/components/source.vue":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",{staticClass:"source",attrs:{dark:e.$vuetify.theme.dark}},[s("nav-header"),s("v-content",[s("v-toolbar",{attrs:{color:"primary",dark:""}},[e.versionId>0?s("i18next",{staticClass:"subheading",attrs:{path:"common:page.viewingSourceVersion",tag:"div"}},[s("strong",{attrs:{place:"date",title:e.$options.filters.moment(e.versionDate,"LLL")}},[e._v(e._s(e._f("moment")(e.versionDate,"lll")))]),s("strong",{attrs:{place:"path"}},[e._v("/"+e._s(e.path))])]):s("i18next",{staticClass:"subheading",attrs:{path:"common:page.viewingSource",tag:"div"}},[s("strong",{attrs:{place:"path"}},[e._v("/"+e._s(e.path))])]),e.$vuetify.breakpoint.mdAndUp?[s("v-spacer"),s("div",{staticClass:"caption blue--text text--lighten-3"},[e._v(e._s(e.$t("common:page.id",{id:e.pageId})))]),e.versionId>0?s("div",{staticClass:"caption blue--text text--lighten-3 ml-4"},[e._v(e._s(e.$t("common:page.versionId",{id:e.versionId})))]):e._e(),e.versionId>0?s("v-btn",{staticClass:"ml-4",attrs:{depressed:"",color:"blue darken-1"},on:{click:e.goHistory}},[s("v-icon",[e._v("mdi-history")])],1):e._e(),s("v-btn",{staticClass:"ml-4",attrs:{depressed:"",color:"blue darken-1"},on:{click:e.goLive}},[e._v(e._s(e.$t("common:page.returnNormalView")))])]:e._e()],2),s("v-card",{attrs:{tile:""}},[s("v-card-text",[s("v-card",{staticClass:"grey radius-7",class:e.$vuetify.theme.dark?"darken-4":"lighten-4",attrs:{flat:""}},[s("v-card-text",[s("pre",[s("code",[e._t("default")],2)])])],1)],1)],1)],1),s("nav-footer"),s("notify"),s("search-results")],1)};o._withStripped=!0;var i=s("./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=script&lang=js&").a,n=(s("./client/components/source.vue?vue&type=style&index=0&lang=scss&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),a=s("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),l=s.n(a),d=s("./node_modules/vuetify/lib/components/VApp/VApp.js"),r=s("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),c=s("./node_modules/vuetify/lib/components/VCard/VCard.js"),u=s("./node_modules/vuetify/lib/components/VCard/index.js"),m=s("./node_modules/vuetify/lib/components/VContent/VContent.js"),v=s("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),p=s("./node_modules/vuetify/lib/components/VGrid/VSpacer.js"),f=s("./node_modules/vuetify/lib/components/VToolbar/VToolbar.js"),g=Object(n.a)(i,o,[],!1,null,null,null);l()(g,{VApp:d.a,VBtn:r.a,VCard:c.a,VCardText:u.b,VContent:m.a,VIcon:v.a,VSpacer:p.a,VToolbar:f.a}),g.options.__file="client/components/source.vue";t.default=g.exports},"./client/components/source.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){"use strict";s("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=style&index=0&lang=scss&")},"./client/components/unauthorized.vue":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("div",{staticClass:"unauthorized"},[s("div",{staticClass:"unauthorized-content"},[s("img",{staticClass:"animated fadeIn",attrs:{src:"/_assets/svg/icon-delete-shield.svg",alt:"Unauthorized"}}),s("div",{staticClass:"headline"},[e._v(e._s(e.$t("unauthorized.title")))]),s("div",{staticClass:"subtitle-1 mt-3"},[e._v(e._s(e.$t("unauthorized.action."+e.action)))]),s("v-btn",{staticClass:"mt-5",attrs:{href:"/login","x-large":""}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-login")]),s("span",[e._v(e._s(e.$t("unauthorized.login")))])],1),s("v-btn",{staticClass:"mt-5",attrs:{color:"red lighten-4",href:"javascript:window.history.go(-1);",outlined:""}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-arrow-left")]),s("span",[e._v(e._s(e.$t("unauthorized.goback")))])],1)],1)])])};o._withStripped=!0;var i={props:{action:{type:String,default:"view"}},data:()=>({})},n=s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),a=s("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),l=s.n(a),d=s("./node_modules/vuetify/lib/components/VApp/VApp.js"),r=s("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),c=s("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),u=Object(n.a)(i,o,[],!1,null,null,null);l()(u,{VApp:d.a,VBtn:r.a,VIcon:c.a}),u.options.__file="client/components/unauthorized.vue";t.default=u.exports},"./client/graph/admin/dev/dev-mutation-save-flags.gql":function(e,t){var s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"flags"}},type:{kind:"NonNullType",type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"SystemFlagInput"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"system"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateFlags"},arguments:[{kind:"Argument",name:{kind:"Name",value:"flags"},value:{kind:"Variable",name:{kind:"Name",value:"flags"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"responseResult"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"succeeded"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"errorCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:208}};s.loc.source={body:"mutation (\n  $flags: [SystemFlagInput]!\n) {\n  system {\n    updateFlags(\n      flags: $flags\n    ) {\n      responseResult {\n        succeeded\n        errorCode\n        slug\n        message\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};s.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,s){if("FragmentSpread"===t.kind)s.add(t.name.value);else if("VariableDefinition"===t.kind){var o=t.type;"NamedType"===o.kind&&s.add(o.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,s)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,s)})),t.definitions&&t.definitions.forEach((function(t){e(t,s)}))}(e,t),o[e.name.value]=t}})),e.exports=s,s.documentId="052a8e4029d6854633f789f8b009cac356347038739a73028b70173840a4800e"},"./client/graph/admin/dev/dev-query-flags.gql":function(e,t){var s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"system"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"flags"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:59}};s.loc.source={body:"{\n  system {\n    flags {\n      key\n      value\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};s.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,s){if("FragmentSpread"===t.kind)s.add(t.name.value);else if("VariableDefinition"===t.kind){var o=t.type;"NamedType"===o.kind&&s.add(o.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,s)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,s)})),t.definitions&&t.definitions.forEach((function(t){e(t,s)}))}(e,t),o[e.name.value]=t}})),e.exports=s,s.documentId="dd09a7f763d58fd4f9ef07351d7deb7b845daf59cf35ad3352eb501d51676687"},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";(function(e){t.a={props:{pageId:{type:Number,default:0},locale:{type:String,default:"en"},path:{type:String,default:"home"},versionId:{type:Number,default:0},versionDate:{type:String,default:""},effectivePermissions:{type:String,default:""}},data:()=>({}),created(){this.$store.commit("page/SET_ID",this.id),this.$store.commit("page/SET_LOCALE",this.locale),this.$store.commit("page/SET_PATH",this.path),this.$store.commit("page/SET_MODE","source"),this.effectivePermissions&&this.$store.set("page/effectivePermissions",JSON.parse(e.from(this.effectivePermissions,"base64").toString()))},methods:{goLive(){window.location.assign(`/${this.locale}/${this.path}`)},goHistory(){window.location.assign(`/h/${this.locale}/${this.path}`)}}}}).call(this,s("./node_modules/buffer/index.js").Buffer)},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-redirect.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){var o=s("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-redirect.vue?vue&type=style&index=0&lang=scss&");"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var n={insert:"head",singleton:!1};o(i,n);e.exports=i.locals||{}},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){var o=s("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=style&index=0&lang=scss&");"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var n={insert:"head",singleton:!1};o(i,n);e.exports=i.locals||{}},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-redirect.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){}}]);