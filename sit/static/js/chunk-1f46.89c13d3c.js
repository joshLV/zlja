(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1f46"],{"5HBy":function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s});var a=i("t3Un");function n(t){return a.a.get("admin/systemParameter/itemIndex?parameter_id="+t)}function s(t){return a.a.post("admin/systemParameter/itemSave",t)}},F9CD:function(t,e,i){"use strict";var a=i("Lu/d");i.n(a).a},"Lu/d":function(t,e,i){},mnfN:function(t,e,i){"use strict";i.r(e);var a=i("5HBy"),n={name:"parameterAdd",data:function(){return{postForm:{status:"draft"},form:{value:"",description:""},id:null,isLoading:!1,rules:{value:[{require:!0,message:"请输入参数值",trigger:"blur"}],description:[{require:!0,message:"请输入描述内容",trigger:"blur"}]}}},created:function(){this.id=this.$route.params.id},methods:{handleEmpty:function(){this.form={value:"",description:""}},add:function(){var t=this;this.isLoading=!0,this.$refs.form.validate(function(e){if(e){t.isLoading=!t.isLoading;var i={parameter_id:t.id,value:t.form.value,description:t.form.description};Object(a.b)(i).then(function(e){_g.toastMsg("success","提交成功"),setTimeout(function(){t.isLoading=!1,t.goback()},1500)})}})}}},s=(i("F9CD"),i("KHd+")),r=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("sticky",{attrs:{className:"sub-navbar "+t.postForm.status,stickyTop:84}},[i("div",{ref:"appMainFixed",staticClass:"app-main-btm-fixed"},[i("h1",{staticClass:"page-title-box"},[t._v("\n        系统参数-参数项"),i("em"),i("span",[t._v("/添加列表项")])]),t._v(" "),i("div",[i("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-close"},on:{click:function(e){t.handleEmpty()}}},[t._v("清空表单")]),t._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"mini",loading:t.isLoading},on:{click:t.add}},[t._v("保存")])],1)])]),t._v(" "),i("div",{staticClass:"app_main_content"},[i("div",{staticClass:"block-box"},[t._m(0),t._v(" "),i("div",{staticClass:"block-content-box"},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"130px","label-position":"top"}},[i("el-row",{attrs:{gutter:30}},[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"参数值",prop:"value"}},[i("el-input",{attrs:{placeholder:"请输入参数值"},model:{value:t.form.value,callback:function(e){t.$set(t.form,"value","string"==typeof e?e.trim():e)},expression:"form.value"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:18}},[i("el-form-item",{attrs:{label:"描述",prop:"description"}},[i("el-input",{attrs:{placeholder:"请输入描述"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description","string"==typeof e?e.trim():e)},expression:"form.description"}})],1)],1)],1)],1)],1)])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"block-header-box"},[e("i"),this._v("\n          基本信息\n        ")])}],!1,null,"2d0933e5",null);r.options.__file="add.vue";e.default=r.exports}}]);