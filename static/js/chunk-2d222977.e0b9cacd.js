(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222977"],{ceed:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"execution"},[a("basic-container",[a("avue-crud",{ref:"crud",attrs:{page:e.page,data:e.tableData,permission:e.permissionList,"table-loading":e.tableLoading,option:e.tableOption},on:{"on-load":e.getList,"search-change":e.searchChange,"refresh-change":e.refreshChange,"size-change":e.sizeChange,"current-change":e.currentChange,"row-update":e.handleUpdate,"row-save":e.handleSave,"row-del":e.rowDel}})],1)],1)},n=[],r=a("5530"),i=a("b775");function o(e){return Object(i["default"])({url:"/pay/goods/page",method:"get",params:e})}function d(e){return Object(i["default"])({url:"/pay/goods",method:"post",data:e})}function c(e){return Object(i["default"])({url:"/pay/goods/"+e,method:"delete"})}function l(e){return Object(i["default"])({url:"/pay/goods",method:"put",data:e})}var p={border:!0,index:!0,indexLabel:"序号",stripe:!0,menuAlign:"center",viewBtn:!0,align:"center",searchMenuSpan:6,column:[{label:"ID",prop:"goodsOrderId",hide:!0,editDisabled:!0,addDisplay:!1},{label:"商品ID",prop:"goodsId"},{label:"商品名称",prop:"goodsName"},{label:"金额/元",prop:"amount"},{label:"用户ID",prop:"userId",hide:!0,editDisabled:!0,addDisplay:!1},{label:"订单状态",prop:"status",type:"select",search:!0,dicUrl:"/admin/dict/type/order_status"},{label:"支付订单号",prop:"payOrderId",overHidden:!0,search:!0},{label:"创建时间",prop:"createTime",type:"datetime",format:"yyyy-MM-dd HH:mm:ss",valueFormat:"yyyy-MM-dd HH:mm:ss",editDisplay:!1,overHidden:!0,addDisplay:!1}]},u=a("2f62"),g={name:"Paygoodsorder",data:function(){return{searchForm:{},tableData:[],page:{total:0,currentPage:1,pageSize:20},tableLoading:!1,tableOption:p}},computed:Object(r["a"])(Object(r["a"])({},Object(u["mapGetters"])(["permissions"])),{},{permissionList:function(){return{addBtn:this.vaildData(this.permissions.generator_paygoodsorder_add,!1),delBtn:this.vaildData(this.permissions.generator_paygoodsorder_del,!1),editBtn:this.vaildData(this.permissions.generator_paygoodsorder_edit,!1)}}}),methods:{getList:function(e,t){var a=this;this.tableLoading=!0,o(Object.assign({descs:"create_time",current:e.currentPage,size:e.pageSize},t,this.searchForm)).then((function(e){a.tableData=e.data.records,a.page.total=e.data.total,a.tableLoading=!1})).catch((function(){a.tableLoading=!1}))},rowDel:function(e,t){var a=this,s=this;this.$confirm("是否确认删除ID为"+e.goodsOrderId,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return c(e.goodsOrderId)})).then((function(e){s.tableData.splice(t,1),s.$message({showClose:!0,message:"删除成功",type:"success"}),a.getList(a.page)}))},handleUpdate:function(e,t,a,s){var n=this;l(e).then((function(s){n.tableData.splice(t,1,Object.assign({},e)),n.$message({showClose:!0,message:"修改成功",type:"success"}),a(),n.getList(n.page)})).catch((function(){s()}))},handleSave:function(e,t,a){var s=this;d(e).then((function(a){s.tableData.push(Object.assign({},e)),s.$message({showClose:!0,message:"添加成功",type:"success"}),t(),s.getList(s.page)})).catch((function(){a()}))},searchChange:function(e,t){this.searchForm=e,this.getList(this.page,e),t()},sizeChange:function(e){this.page.pageSize=e},currentChange:function(e){this.page.currentPage=e},refreshChange:function(){this.getList(this.page)}}},h=g,b=a("2877"),m=Object(b["a"])(h,s,n,!1,null,"3cb758c6",null);t["default"]=m.exports}}]);