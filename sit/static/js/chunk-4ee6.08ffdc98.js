(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4ee6"],{"8T0q":function(e,t,n){"use strict";n.d(t,"r",function(){return i}),n.d(t,"a",function(){return r}),n.d(t,"f",function(){return o}),n.d(t,"g",function(){return s}),n.d(t,"h",function(){return u}),n.d(t,"b",function(){return c}),n.d(t,"d",function(){return l}),n.d(t,"e",function(){return d}),n.d(t,"c",function(){return p}),n.d(t,"i",function(){return f}),n.d(t,"j",function(){return h}),n.d(t,"k",function(){return m}),n.d(t,"l",function(){return g}),n.d(t,"q",function(){return _}),n.d(t,"m",function(){return y}),n.d(t,"n",function(){return b}),n.d(t,"o",function(){return v}),n.d(t,"p",function(){return w});var a=n("t3Un");function i(e){return a.a.get("insurance/company",e)}function r(e){return a.a.post("insurance/company",e)}function o(e){return a.a.delete("insurance/company/"+e)}function s(e){return a.a.get("insurance/company/"+e)}function u(e,t){return a.a.put("insurance/company/",e,t)}function c(e){return a.a.post("insurance/companyRate",e)}function l(e){return a.a.get("insurance/companyRate/"+e)}function d(e,t){return a.a.put("insurance/companyRate/",e,t)}function p(e){return a.a.delete("insurance/companyRate/"+e)}function f(e){return a.a.post("insurance/ask",e)}function h(e){return a.a.delete("insurance/ask/"+e)}function m(e){return a.a.get("insurance/ask/"+e)}function g(e,t){return a.a.put("insurance/ask/",e,t)}function _(e){return a.a.get("insurance/ask/logIndex",e)}function y(e){return a.a.post("insurance/ask/logSave",e)}function b(e){return a.a.delete("insurance/ask/logDelete/?id="+e,"")}function v(e){return a.a.get("insurance/ask/logRead/?id="+e)}function w(e,t){return a.a.put("insurance/ask/logUpdate/",e,t)}},"o+EH":function(e,t,n){"use strict";n.r(t);var a=n("pCtG"),i=n("8T0q"),r={name:"insuranceList",mixins:[a.a],data:function(){return{tableData:[],loading:!0,tableHeight:null,update:!1,multipleSelection:[],rule:null,searchForm:{keywords:"",type:1,queryCheck:0}}},created:function(){var e=this;console.log("进来了ssss"),bus.$on("insuranceList",function(t){e.update=!e.update}),this.rule={deletesShow:this.deletesShow,enablesShow:this.enablesShow}},activated:function(){console.log("缓存了sss")},deactivated:function(){console.log("缓存被清楚了")},methods:{init:function(){this.update=!this.update},handleSearch:function(){this.searchForm.queryCheck=1,this.update=!this.update},handleRateSee:function(e){this.$router.push({name:"companyRate",query:{companyId:e.row.id,companyName:e.row.company_name,pageClick:_g.editRefresh("companyRate")}})},handleEdit:function(e){this.$router.push({name:"insuranceEdit",params:{id:e.row.id},query:{pageClick:_g.editRefresh("insuranceEdit")}})},handlePaging:function(e){var t=this;console.log(e),this.loading=!0,setTimeout(function(){t.tableData=e.map(function(e){return e.isDeleteLoading=!1,e}),t.loading=!t.loading},300),console.log(this.tableData)},handleDelete:function(e){var t=this;this.tableData[e.$index].isDeleteLoading=!0,this.$confirm("确定删除该保险公司?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.f)(e.row.id).then(function(e){"error"!==e&&(_g.toastMsg("success","删除成功"),setTimeout(function(){t.update=!t.update}))})}).catch(function(){t.tableData[e.$index].isDeleteLoading=!1})},selectItem:function(e){this.multipleSelection=e}},computed:{indexShow:function(){return _g.getHasRule("insurance-company-index")},addShow:function(){return _g.getHasRule("insurance-company-save")},readShow:function(){return _g.getHasRule("insurance-company-read")},deletesShow:function(){return _g.getHasRule("insurance-company-deletes")},enablesShow:function(){return _g.getHasRule("insurance-company-enables")},deleteShow:function(){return _g.getHasRule("insurance-company-delete")}},watch:{$route:function(e,t){e.name===t.name&&(this.update=!this.update)}}},o=n("KHd+"),s=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"mainContainer",staticClass:"app_main_container"},[e.indexShow?n("div",{staticClass:"page_table_box"},[n("div",{ref:"topAdd",staticClass:"filter-container"},[n("el-row",{attrs:{type:"flex",align:"middle",justify:"space-between"}},[n("div",[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入保险公司名"},model:{value:e.searchForm.keywords,callback:function(t){e.$set(e.searchForm,"keywords",t)},expression:"searchForm.keywords"}}),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"warning",size:"small"},on:{click:e.handleSearch}},[e._v("查询")]),e._v(" "),n("router-link",{staticClass:"filter-item",attrs:{to:"add"}},[e.addShow?n("el-button",{staticClass:"add_btn",attrs:{type:"primary",size:"small",icon:"el-icon-plus"}},[e._v("添加保险公司")]):e._e()],1)],1),e._v(" "),n("div",[n("el-button",{attrs:{type:"success",size:"small"}},[e._v("车险公司管理")]),e._v(" "),n("el-button",{attrs:{type:"warning",size:"small"}},[e._v("非车险公司管理")])],1)])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","max-height":e.tableHeight,"element-loading-text":"数据加载中"},on:{"selection-change":e.selectItem}},[n("el-table-column",{attrs:{type:"selection",fixed:"left",width:"50"}}),e._v(" "),n("el-table-column",{attrs:{label:"名称",prop:"company_name"}}),e._v(" "),n("el-table-column",{attrs:{label:"简介",prop:"company_abstract"}}),e._v(" "),n("el-table-column",{attrs:{label:"状态",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:1===t.row.status?"":"warning"}},[e._v("\n            "+e._s(e._f("status")(t.row.status))+"\n          ")])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"电话",prop:"company_phone"}}),e._v(" "),n("el-table-column",{attrs:{label:"网址",prop:"company_url"}}),e._v(" "),n("el-table-column",{attrs:{label:"排序",prop:"sort"}}),e._v(" "),n("el-table-column",{attrs:{label:"添加时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",[e._v("\n            "+e._s(e._f("timestampToTime")(t.row.add_time))+"\n          ")])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("operates",[n("operate",{attrs:{label:"查看费率等级",svgIcon:"",icon:"operate-see"},on:{change:function(n){e.handleRateSee(t)}}}),e._v(" "),e.readShow?n("operate",{attrs:{label:"编辑",svgIcon:"",icon:"operate-edit"},on:{change:function(n){e.handleEdit(t)}}}):e._e(),e._v(" "),e.deleteShow?n("operate",{attrs:{label:"删除",svgIcon:"",icon:"operate-delete"},on:{change:function(n){e.handleDelete(t)}}}):e._e()],1)]}}])})],1),e._v(" "),n("div",{ref:"btmGroup",staticStyle:{height:"70px"}},[n("el-row",{staticClass:"pos_rel",staticStyle:{height:"70px"},attrs:{type:"flex",align:"middle",justify:"space-between"}},[n("btn-group",{attrs:{selectedData:e.multipleSelection,type:"insurance/company"},on:{change:e.refresh}}),e._v(" "),n("paging",{attrs:{type:"insurance/company",rule:e.rule,updateType:"company",pagingdata:e.searchForm,update:e.update},on:{loadingChange:function(t){e.loading=!0},companyPaging:e.handlePaging}})],1)],1)],1):e._e()])},[],!1,null,null,null);s.options.__file="list.vue";t.default=s.exports},pCtG:function(e,t,n){"use strict";var a=n("7Qib");t.a={mounted:function(){var e=this;this.valHandle(),this.__resizeMainHanlder=Object(a.a)(function(){e.valHandle(0,0)},100),window.addEventListener("resize",this.__resizeMainHanlder)},methods:{valHandle:function(e,t){var n=this.$refs.mainContainer.offsetHeight-40-((this.$refs.topAdd?this.$refs.topAdd.offsetHeight:0)+(this.$refs.btmGroup?this.$refs.btmGroup.offsetHeight:20));this.tableHeight=n}},beforeDestroy:function(){window.removeEventListener("resize",this.__resizeMainHanlder)}}}}]);