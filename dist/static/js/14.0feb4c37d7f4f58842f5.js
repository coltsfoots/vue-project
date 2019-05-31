webpackJsonp([14],{"NTb/":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register-container"},[r("el-steps",{attrs:{active:e.active,"finish-status":"success","align-center":""}},[r("el-step",{attrs:{title:"选择类型"}}),e._v(" "),r("el-step",{attrs:{title:"填写信息"}}),e._v(" "),r("el-step",{attrs:{title:"提交审核"}})],1),e._v(" "),0===e.active?r("div",{staticClass:"choose-type"},[r("el-row",{attrs:{gutter:30}},e._l(e.type,function(t){return r("el-col",{key:t.title,class:{active:t.type===e.selectedType.type},attrs:{span:8},nativeOn:{click:function(r){return e.chooseType(t)}}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":t.icon}})],1),e._v(" "),r("p",[e._v(e._s(t.title))])])}),1)],1):e._e(),e._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:1===e.active,expression:"active === 1"}],attrs:{model:e.registerForm,rules:e.registerRules,"label-position":"right","label-width":"120px"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:"user"!==e.selectedType.type,expression:"selectedType.type !== 'user'"}]},[r("h2",[e._v("基本信息")]),e._v(" "),r("el-form-item",{attrs:{prop:"companyName",label:"商户名称"}},[r("el-input",{attrs:{placeholder:"请输入营业执照上的主体名称"},model:{value:e.registerForm.companyName,callback:function(t){e.$set(e.registerForm,"companyName",t)},expression:"registerForm.companyName"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"simpleName",label:"商户主体简称"}},[r("el-input",{attrs:{placeholder:"请输入商户主体简称"},model:{value:e.registerForm.simpleName,callback:function(t){e.$set(e.registerForm,"simpleName",t)},expression:"registerForm.simpleName"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"area",label:"所在区域"}},[r("el-input")],1)],1),e._v(" "),r("h2",[e._v("管理员信息")]),e._v(" "),r("el-form-item",{attrs:{prop:"adminName",label:"管理员姓名"}},[r("el-input",{attrs:{placeholder:"请输入管理员姓名"},model:{value:e.registerForm.adminName,callback:function(t){e.$set(e.registerForm,"adminName",t)},expression:"registerForm.adminName"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"telephone",label:"管理员手机号"}},[r("el-input",{attrs:{placeholder:"请输入管理员手机号"},model:{value:e.registerForm.telephone,callback:function(t){e.$set(e.registerForm,"telephone",t)},expression:"registerForm.telephone"}})],1)],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:2===e.active,expression:"active === 2"}],staticStyle:{"text-align":"center"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"right"}})],1)]),e._v(" "),r("div",{staticClass:"btn-group"},[r("el-button",{directives:[{name:"show",rawName:"v-show",value:e.active>0,expression:"active > 0"}],on:{click:e.prev}},[e._v("上一步")]),e._v(" "),r("el-button",{attrs:{disabled:!e.selectedType.type},on:{click:e.next}},[e._v(e._s(2===e.active?"我知道了":1===e.active?"提交审核":"下一步"))])],1)],1)},staticRenderFns:[]};var a=r("VU/8")({name:"Register",data:function(){return{active:0,type:[{title:"企业",icon:"company",type:"company"},{title:"个体工商户",icon:"unit",type:"unit"},{title:"个人",icon:"user",type:"user"}],selectedType:{},registerForm:{companyName:"",simpleName:"",area:"",adminName:"",telephone:""},registerRules:{companyName:[{required:!0,trigger:"blur",message:"商户名称不能为空"}],simpleName:[{required:!0,trigger:"blur",message:"商户简称不能为空"}],area:[{required:!0,trigger:"blur",message:"所在区域不能为空"}],adminName:[{required:!0,trigger:"blur",message:"管理员姓名不能为空"}],telephone:[{required:!0,trigger:"blur",message:"管理员手机号码不能为空"}]}}},methods:{prev:function(){this.active--},next:function(){this.active++>=2&&this.$router.push("/login")},chooseType:function(e){this.selectedType=e}}},s,!1,function(e){r("ei8u")},"data-v-208f3e73",null);t.default=a.exports},ei8u:function(e,t){}});
//# sourceMappingURL=14.0feb4c37d7f4f58842f5.js.map