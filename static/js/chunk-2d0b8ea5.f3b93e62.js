(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8ea5"],{"315f":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"execution"},[t("basic-container",[t("avue-crud",{ref:"crud",attrs:{page:e.page,data:e.tableData,permission:e.permissionList,"table-loading":e.tableLoading,option:e.tableOption},on:{"on-load":e.getList,"search-change":e.searchChange,"refresh-change":e.refreshChange,"size-change":e.sizeChange,"current-change":e.currentChange,"row-update":e.handleUpdate,"row-save":e.handleSave,"row-del":e.rowDel}})],1)],1)},r=[],i=t("5530"),s=t("b775");function c(e){return Object(s["default"])({url:"/pay/paychannel/page",method:"get",params:e})}function l(e){return Object(s["default"])({url:"/pay/paychannel",method:"post",data:e})}function o(e){return Object(s["default"])({url:"/pay/paychannel/"+e,method:"delete"})}function d(e){return Object(s["default"])({url:"/pay/paychannel",method:"put",data:e})}var p={border:!0,index:!0,indexLabel:"序号",stripe:!0,menuAlign:"center",align:"center",viewBtn:!0,searchMenuSpan:6,column:[{label:"主键",prop:"id",hide:!0,editDisabled:!0,addDisplay:!1},{label:"appId",prop:"appId",rules:[{required:!0,message:"请输入应用标识",trigger:"blur"}]},{label:"支付类型",prop:"channelId",type:"select",dicUrl:"/admin/dict/type/channel_id",search:!0,rules:[{required:!0,message:"请选择支付类型",trigger:"blur"}]},{label:"渠道名称",prop:"channelName",rules:[{required:!0,message:"请输入渠道名称",trigger:"blur"}]},{label:"商户号",prop:"channelMchId",placeholder:"渠道商户号",rules:[{required:!0,message:"请输入商户编号",trigger:"blur"}]},{label:"渠道状态",prop:"state",type:"select",dicUrl:"/admin/dict/type/channel_status",search:!0},{label:"备注",prop:"remark"},{label:"配置参数",prop:"param",type:"textarea",placeholder:"扩展参数,json字符串",minRows:4,row:!0,span:24,overHidden:!0,rules:[{required:!0,message:"请输入支付参数",trigger:"blur"}]},{width:150,label:"创建时间",prop:"createTime",type:"datetime",format:"yyyy-MM-dd HH:mm",valueFormat:"yyyy-MM-dd HH:mm:ss",editDisplay:!1,addDisplay:!1}]},u=t("2f62"),h={name:"Paychannel",data:function(){return{searchForm:{},tableData:[],page:{total:0,currentPage:1,pageSize:20},tableLoading:!1,tableOption:p}},computed:Object(i["a"])(Object(i["a"])({},Object(u["mapGetters"])(["permissions"])),{},{permissionList:function(){return{addBtn:this.vaildData(this.permissions.pay_paychannel_add,!1),delBtn:this.vaildData(this.permissions.pay_paychannel_del,!1),editBtn:this.vaildData(this.permissions.pay_paychannel_edit,!1)}}}),methods:{getList:function(e,a){var t=this;this.tableLoading=!0,c(Object.assign({current:e.currentPage,size:e.pageSize},a,this.searchForm)).then((function(e){t.tableData=e.data.records,t.page.total=e.data.total,t.tableLoading=!1})).catch((function(){t.tableLoading=!1}))},rowDel:function(e,a){var t=this;this.$confirm("是否确认删除ID为"+e.id,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return o(e.id)})).then((function(e){t.$message.success("删除成功"),t.getList(t.page)}))},handleUpdate:function(e,a,t,n){var r=this;d(e).then((function(e){r.$message.success("修改成功"),t(),r.getList(r.page)})).catch((function(){n()}))},handleSave:function(e,a,t){var n=this;l(e).then((function(e){n.$message.success("添加成功"),a(),n.getList(n.page)})).catch((function(){t()}))},searchChange:function(e,a){this.searchForm=e,this.getList(this.page,e),a()},sizeChange:function(e){this.page.pageSize=e},currentChange:function(e){this.page.currentPage=e},refreshChange:function(){this.getList(this.page)}}},g=h,m=t("2877"),b=Object(m["a"])(g,n,r,!1,null,"7e880156",null);a["default"]=b.exports}}]);