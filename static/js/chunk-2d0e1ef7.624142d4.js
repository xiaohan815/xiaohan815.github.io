(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1ef7"],{"7d0d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"execution"},[a("basic-container",[a("avue-crud",{ref:"crud",attrs:{page:e.page,data:e.tableData,permission:e.permissionList,"table-loading":e.tableLoading,option:e.tableOption},on:{"on-load":e.getList,"search-change":e.searchChange,"refresh-change":e.refreshChange,"size-change":e.sizeChange,"current-change":e.currentChange,"row-update":e.handleUpdate,"row-save":e.handleSave,"row-del":e.rowDel},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[a("template",{slot:"searchMenu"},[a("el-row",[a("el-col",{attrs:{span:7}},[a("el-button",{staticClass:"el-button el-button--primary el-button--mini",staticStyle:{float:"left","margin-left":"auto"},attrs:{size:"small"},on:{click:e.searchChange}},[a("i",{staticClass:"el-icon-search"}),e._v("\n                  搜索")])],1),e._v(" "),a("el-col",{attrs:{span:7}},[a("el-button",{staticClass:"el-button el-button--default el-button--mini",staticStyle:{float:"left"},attrs:{size:"small"},on:{click:e.handleEmpty}},[a("i",{staticClass:"el-icon-delete"}),e._v("清空")])],1)],1)],1)],2)],1)],1)},r=[],i=(a("3b2b"),a("ac6a"),a("6762"),a("2fdb"),a("5530")),s=a("b775");function l(e){return Object(s["default"])({url:"/material/protocolwarningthreshold/page",method:"get",params:e})}function o(e){return Object(s["default"])({url:"/material/protocolwarningthreshold",method:"post",data:e})}function c(e){return Object(s["default"])({url:"/material/protocolwarningthreshold/"+e,method:"get"})}function d(e){return Object(s["default"])({url:"/material/protocolwarningthreshold/"+e,method:"delete"})}function h(e){return Object(s["default"])({url:"/material/protocolwarningthreshold",method:"put",data:e})}var u={align:"center",index:!0,border:!0,column:[{cell:!0,prop:"marketCategory",size:"small",span:12,type:"select",label:"市场类型",rules:[{required:!0,message:"请选择市场类型"}],value:"",dicUrl:"/admin/dict/type/marketCategory",display:!0,disabled:!1,required:!0,dicMethod:"get",filterable:!0,search:!0,searchSpan:10},{cell:!0,prop:"protocolType",size:"small",span:12,type:"select",label:"业务类型",rules:[{required:!0,message:"请选择业务类型"}],dicUrl:"/admin/dict/type/protocol_type",display:!0,disabled:!1,dicMethod:"get",filterable:!0,search:!0,searchSpan:10},{cell:!0,prop:"thresholdValue",size:"small",span:12,type:"number",label:"阀值",rules:[{pattern:/^(\d{1,2}(\.[0-9]{1})?)$|^100$/,message:"请输入小于100的自然数"}],pattern:"^100$|^(\\d|[1-9]\\d)$",display:!0,disabled:!1,required:!0,maxlength:3,placeholder:"<=100的整数",maximum:100},{cell:!0,prop:"difference",size:"small",span:12,type:"number",label:"差距",rules:[{pattern:/^(\d{1,2}(\.[0-9]{1})?)$|^100$/,message:"请输入小于100的自然数"}],pattern:"^100$|^(\\d|[1-9]\\d)$",display:!0,disabled:!1,placeholder:"<=100的整数，各业务的差距",maxlength:3,maximum:100}],searchLabelWidth:180,searchGutter:"90",gutter:0,stripe:!0,menuBtn:!0,searchBtn:!1,emptyBtn:!1,emptySize:"medium",emptyText:"清空",menuAlign:"center",submitBtn:!0,indexLabel:"序号",labelWidth:130,submitSize:"medium",submitText:"提交",menuPostion:"center",searchMenuSpan:6,viewBtn:!0},p=a("59fb"),f=a("2f62"),m={name:"protocolwarningthreshold",data:function(){return{form:{},searchForm:{},tableData:[],page:{total:0,currentPage:1,pageSize:20},tableLoading:!1,tableOption:u}},computed:Object(i["a"])(Object(i["a"])({},Object(f["mapGetters"])(["permissions"])),{},{permissionList:function(){return{addBtn:this.vaildData(this.permissions.generator_protocolwarningthreshold_add,!1),delBtn:this.vaildData(this.permissions.generator_protocolwarningthreshold_del,!1),editBtn:this.vaildData(this.permissions.generator_protocolwarningthreshold_edit,!1)}}}),watch:{"form.protocolType":function(){this.differenceDisabled()}},methods:{getList:function(e,t){var a=this;this.tableLoading=!0,l(Object.assign({current:e.currentPage,size:e.pageSize},t,this.searchForm)).then((function(e){a.form=e.data,a.tableData=e.data.records,a.page.total=e.data.total,a.tableLoading=!1})).catch((function(){a.tableLoading=!1}))},beforeOpen:function(e,t){var a=this;["edit","view"].includes(t)&&c(this.form.id).then((function(e){a.form=e.data})),e()},rowDel:function(e,t){var a=this;this.$confirm("是否确认删除ID为"+e.thresholdId,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return d(e.thresholdId)})).then((function(e){a.$message.success("删除成功"),a.getList(a.page)}))},handleUpdate:function(e,t,a,n){var r=this;console.log(e.difference),console.log(e.thresholdValue);var i=this.validateDifference(e.difference),s=this.validateThresholdValue(e.thresholdValue);return s?(this.$message.warning(s),void n()):i?(this.$message.warning(i),void n()):void h(e).then((function(e){r.$message.success("修改成功"),a(),r.getList(r.page)})).catch((function(){n()}))},handleSave:function(e,t,a){var n=this;o(e).then((function(e){n.$message.success("添加成功"),t(),n.getList(n.page)})).catch((function(){a()}))},sizeChange:function(e){this.page.pageSize=e},currentChange:function(e){this.page.currentPage=e},searchChange:function(e,t){this.searchForm=e,this.getList(this.page,e),t()},refreshChange:function(){this.getList(this.page)},differenceDisabled:function(){var e=this;Object(p["i"])("differenceForbiddenList").then((function(t){var a=[];if(a=t.data,null!=a&&a.length>0){var n=[];a.forEach((function(e,t){n.push(e.value)}));var r=e.tableOption.column[3];-1!=n.indexOf(e.form.protocolType)?r.disabled=!0:r.disabled=!1}})).catch((function(e){console.log("finebiSso error====",e)}))},handleEmpty:function(){this.$refs.crud.searchReset()},validateDifference:function(e,t){var a="^100$|^(\\d|[1-9]\\d)$",n=new RegExp(a);return!n.test(e)&&"差距：请输入大于0 小于100的整数"},validateThresholdValue:function(e,t){var a="^100$|^(\\d|[1-9]\\d)$",n=new RegExp(a);return!n.test(e)&&"阀值：请输入大于0 小于100的整数"}}},g=m,b=a("2877"),v=Object(b["a"])(g,n,r,!1,null,null,null);t["default"]=v.exports}}]);