(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d79d"],{UajC:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n}),a.d(e,"c",function(){return o});var l=a("t3Un");function i(){return l.a.get("admin/report/getViewList")}function n(t){return l.a.post("admin/report/setView",t)}function o(t){return l.a.get("test/dataList?view_name="+t)}},"Xoi+":function(t,e,a){"use strict";a.r(e);var l=a("w2ba"),i=a("UajC"),n={data:function(){return{postForm:{status:"draft"},isLoading:!1,tableOptions:[],tableFieldData:[],allTableOptions:{title:"",view_name:"",data:[]},form:{title:"",view_name:""},rules:{title:[{required:!0,message:"请输入视图标题",trigger:"blur"}],view_name:[{required:!0,message:"请输入视图名称",trigger:"blur"}]}}},created:function(){var t=this;Object(l.d)().then(function(e){"error"!==e&&(t.tableOptions=e.data.list)})},methods:{handleChangeTable:function(t,e){e.fieldData=[],_(t).forEach(function(t){e.fieldData.push({name:t.field_name,id:t.id})})},addTable:function(){this.allTableOptions.data.push({view_tables:"",table_alias:"",view_condition:null,is_main:"",import_field:"",import_sort:"",fieldData:[],conditionFlag:!1})},handleTransfer:function(t){"0"==t.is_main?t.conditionFlag=!0:t.conditionFlag=!1},handleTableName:function(t){var e=this;Object(l.c)(t.view_tables).then(function(t){"error"!==t&&(e.tableFieldData=t.data.list)})},handleEmpty:function(){},submitForm:function(){var t=this;this.$refs.allTableOptions.validate(function(e){e&&(t.isLoading=!t.isLoading,Object(i.b)(t.allTableOptions).then(function(e){"error"!==e&&(_g.toastMsg("success","添加成功"),setTimeout(function(){t.addRefresh("viewList")},1500)),t.isLoading=!t.isLoading}))})}}},o=a("KHd+"),s=Object(o.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("sticky",{attrs:{className:"sub-navbar "+t.postForm.status,stickyTop:84}},[a("div",{ref:"appMainFixed",staticClass:"app-main-btm-fixed"},[a("h1",{staticClass:"page-title-box"},[t._v("\n        视图管理"),a("em"),a("span",[t._v("/添加")])]),t._v(" "),a("div",[a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-close"},on:{click:function(e){t.handleEmpty()}}},[t._v("清空表单")]),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:t.addTable}},[t._v("添加表")]),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"mini",loading:t.isLoading},on:{click:t.submitForm}},[t._v("保存")])],1)])]),t._v(" "),a("div",{staticClass:"app_main_content"},[a("el-form",{ref:"allTableOptions",attrs:{model:t.allTableOptions,"label-width":"100px",rules:t.rules,"label-position":"top"}},[a("div",{staticClass:"block-box"},[a("h1",{staticClass:"block-header-box"},[a("i"),t._v("\n          基本信息\n        ")]),t._v(" "),a("div",{staticClass:"block-content-box"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"视图标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入视图标题"},model:{value:t.allTableOptions.title,callback:function(e){t.$set(t.allTableOptions,"title",e)},expression:"allTableOptions.title"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"视图名称",prop:"view_name"}},[a("el-input",{attrs:{placeholder:"请输入视图名称"},model:{value:t.allTableOptions.view_name,callback:function(e){t.$set(t.allTableOptions,"view_name",e)},expression:"allTableOptions.view_name"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}})],1)],1)]),t._v(" "),t._l(t.allTableOptions.data,function(e){return a("div",{staticClass:"block-box"},[a("h1",{staticClass:"block-header-box"},[a("i"),t._v("\n          表信息\n        ")]),t._v(" "),a("div",{staticClass:"block-content-box"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"表名称"}},[a("el-select",{staticStyle:{width:"100%"},on:{change:function(a){t.handleTableName(e)}},model:{value:e.view_tables,callback:function(a){t.$set(e,"view_tables","string"==typeof a?a.trim():a)},expression:"item.view_tables"}},t._l(t.tableOptions,function(t){return a("el-option",{key:t.table_name,attrs:{label:t.name,value:t.table_name}})}))],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"表别名"}},[a("el-input",{attrs:{placeholder:"请输入表格别名"},model:{value:e.table_alias,callback:function(a){t.$set(e,"table_alias",a)},expression:"item.table_alias"}})],1)],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"30px"},attrs:{gutter:30}},[a("el-col",{attrs:{span:12}},[a("el-table",{attrs:{data:t.tableFieldData,height:"250",border:""},on:{"selection-change":function(a){return t.handleChangeTable(a,e)}}},[a("el-table-column",{attrs:{type:"selection",fixed:"left",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"表名称",prop:"name"}}),t._v(" "),a("el-table-column",{attrs:{label:"字段名称",prop:"field_name"}})],1)],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"12px"},attrs:{gutter:30}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"是否为主表",prop:"is_main"}},[a("el-radio-group",{on:{change:function(a){t.handleTransfer(e)}},model:{value:e.is_main,callback:function(a){t.$set(e,"is_main",a)},expression:"item.is_main"}},[a("el-radio",{attrs:{label:"1"}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:"0"}},[t._v("否")])],1)],1)],1),t._v(" "),e.conditionFlag?a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{placeholder:"请输入连接条件"},model:{value:e.view_condition,callback:function(a){t.$set(e,"view_condition",a)},expression:"item.view_condition"}})],1):t._e()],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"30px"},attrs:{gutter:30}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"导入关联",prop:"import_field"}},[a("el-input",{attrs:{placeholder:"请输入导入关联"},model:{value:e.import_field,callback:function(a){t.$set(e,"import_field",a)},expression:"item.import_field"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"导入顺序",prop:"import_sort"}},[a("el-input",{attrs:{placeholder:"请输入导入顺序"},model:{value:e.import_sort,callback:function(a){t.$set(e,"import_sort",a)},expression:"item.import_sort"}})],1)],1)],1)],1)])})],2)],1)],1)},[],!1,null,null,null);s.options.__file="add.vue";e.default=s.exports}}]);