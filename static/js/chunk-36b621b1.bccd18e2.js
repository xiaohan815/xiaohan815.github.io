(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36b621b1"],{"14af":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("basic-container",[n("div",{staticClass:"app-container calendar-list-container"},[n("avue-crud",{ref:"crud",attrs:{option:e.tableOption,data:e.list,page:e.page,"table-loading":e.listLoading,"before-open":e.handleOpenBefore},on:{"on-load":e.getList,"search-change":e.searchChange,"refresh-change":e.refreshChange,"size-change":e.sizeChange,"current-change":e.currentChange,"row-update":e.update,"row-save":e.create},scopedSlots:e._u([{key:"dsScopeForm",fn:function(t){return[1==e.form.dsType?n("div",[n("el-tree",{ref:"scopeTree",staticClass:"filter-tree",attrs:{data:e.dsScopeData,"check-strictly":!0,props:e.defaultProps,"default-checked-keys":e.checkedDsScope,"node-key":"id","highlight-current":"","show-checkbox":""}})],1):e._e()]}},{key:"menu",fn:function(t){return[e.roleManager_btn_edit?n("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-edit"},on:{click:function(n){return e.handleUpdate(t.row,t.index)}}},[e._v("编辑\n        ")]):e._e(),e._v(" "),e.roleManager_btn_del?n("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.row,t.index)}}},[e._v("删除\n        ")]):e._e(),e._v(" "),e.roleManager_btn_perm?n("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-plus"},on:{click:function(n){return e.handlePermission(t.row,t.index)}}},[e._v("权限\n        ")]):e._e()]}}]),model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[n("template",{slot:"menuLeft"},[e.roleManager_btn_add?n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("添加\n        ")]):e._e()],1)],2),e._v(" "),n("el-dialog",{attrs:{visible:e.dialogPermissionVisible,"close-on-click-modal":!1,title:"分配权限"},on:{"update:visible":function(t){e.dialogPermissionVisible=t}}},[n("div",{staticClass:"dialog-main-tree"},[n("el-tree",{ref:"menuTree",staticClass:"filter-tree",attrs:{data:e.treeData,"default-checked-keys":e.checkedKeys,"check-strictly":!1,props:e.defaultProps,"filter-node-method":e.filterNode,"node-key":"id","highlight-current":"","show-checkbox":"","default-expand-all":""}})],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.updatePermession(e.roleId)}}},[e._v("更 新\n        ")]),e._v(" "),n("el-button",{attrs:{type:"default",size:"small"},on:{click:function(t){return e.cancal()}}},[e._v("取消")])],1)])],1)])},i=[];n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}))},"686b":function(e,t,n){"use strict";n.r(t);var r=n("f2c0"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},"69ba":function(e,t,n){"use strict";var r=n("8abb"),i=n.n(r);i.a},"6a9d":function(e,t,n){"use strict";n.r(t),n.d(t,"fetchTree",(function(){return i})),n.d(t,"addObj",(function(){return a})),n.d(t,"getObj",(function(){return o})),n.d(t,"delObj",(function(){return s})),n.d(t,"putObj",(function(){return d}));var r=n("b775");function i(e){return Object(r["default"])({url:"/admin/dept/tree",method:"get",params:e})}function a(e){return Object(r["default"])({url:"/admin/dept/",method:"post",data:e})}function o(e){return Object(r["default"])({url:"/admin/dept/"+e,method:"get",header:{from:"Y"}})}function s(e){return Object(r["default"])({url:"/admin/dept/"+e,method:"delete"})}function d(e){return Object(r["default"])({url:"/admin/dept/",method:"put",data:e})}},"8abb":function(e,t,n){},"8d55":function(e,t,n){"use strict";n.r(t),n.d(t,"roleList",(function(){return i})),n.d(t,"fetchList",(function(){return a})),n.d(t,"deptRoleList",(function(){return o})),n.d(t,"getObj",(function(){return s})),n.d(t,"addObj",(function(){return d})),n.d(t,"putObj",(function(){return l})),n.d(t,"delObj",(function(){return c})),n.d(t,"permissionUpd",(function(){return u})),n.d(t,"fetchRoleTree",(function(){return f}));var r=n("b775");function i(){return Object(r["default"])({url:"/admin/role/roleList",method:"get"})}function a(e){return Object(r["default"])({url:"/admin/role/page",method:"get",params:e})}function o(){return Object(r["default"])({url:"/admin/role/list",method:"get"})}function s(e){return Object(r["default"])({url:"/admin/role/"+e,method:"get"})}function d(e){return Object(r["default"])({url:"/admin/role",method:"post",data:e})}function l(e){return Object(r["default"])({url:"/admin/role",method:"put",data:e})}function c(e){return Object(r["default"])({url:"/admin/role/"+e,method:"delete"})}function u(e,t){return Object(r["default"])({url:"/admin/role/menu",method:"put",data:{roleId:e,menuIds:t}})}function f(e){return Object(r["default"])({url:"/admin/menu/tree/"+e,method:"get"})}},a4bd:function(e,t,n){"use strict";n.r(t),n.d(t,"tableOption",(function(){return i}));var r=n("b48b"),i={border:!0,index:!0,indexLabel:"序号",stripe:!0,menuAlign:"center",searchMenuSpan:6,editBtn:!1,delBtn:!1,align:"center",addBtn:!1,viewBtn:!0,column:[{label:"角色名称",prop:"roleName",span:24,rules:[{required:!0,message:"角色名称不能为空",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}]},{width:120,label:"角色标识",prop:"roleCode",span:24,editDisabled:!0,rules:[{required:!0,message:"角色标识不能为空",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"},{validator:r["a"].validatorKey,trigger:"blur"}]},{width:150,label:"角色描述",prop:"roleDesc",overHidden:!0,type:"textarea",span:24,row:!0,minRows:2,rules:[{max:128,message:"长度在 128 个字符内",trigger:"blur"}]},{width:180,label:"数据权限",prop:"dsType",type:"select",span:24,rules:[{required:!0,message:"请选择数据权限类型",trigger:"blur"}],dicData:[{label:"全部",value:0},{label:"自定义",value:1},{label:"本级及子级",value:2},{label:"本级",value:3},{label:"本人",value:4}]},{label:"",prop:"dsScope",formslot:!0,showClomnu:!1,hide:!0},{label:"创建时间",prop:"createTime",type:"datetime",format:"yyyy-MM-dd HH:mm",valueFormat:"yyyy-MM-dd HH:mm:ss",editDisplay:!1,addDisplay:!1,span:24}]}},a5f6:function(e,t,n){"use strict";n.r(t);var r=n("14af"),i=n("686b");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("69ba");var o=n("2877"),s=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,"5b42626a",null);t["default"]=s.exports},b48b:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={validatorNameCn:function(e,t,n){var r=/^[\u4E00-\u9FA5A-Za-z0-9_]+$/;t&&!r.test(t)?n(new Error("请输入中文、英文、数字包括下划线")):n()},validatorKey:function(e,t,n){var r=/^[A-Z_]+$/;t&&!r.test(t)?n(new Error("请输入大写英文、下划线")):n()},checkSpace:function(e,t,n){var r=/[^\s]+$/;r.test(t)?n():n(new Error("请输入非空格信息"))}}},f2c0:function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("28a5");var i=r(n("ded3")),a=n("8d55"),o=n("a4bd"),s=n("6a9d"),d=n("ef70"),l=n("2f62"),c={name:"TableRole",data:function(){return{searchForm:{},tableOption:o.tableOption,dsScopeData:[],treeData:[],checkedKeys:[],checkedDsScope:[],defaultProps:{label:"name",value:"id"},page:{total:0,currentPage:1,pageSize:20},menuIds:"",list:[],listLoading:!0,form:{},roleId:void 0,roleCode:void 0,rolesOptions:void 0,dialogPermissionVisible:!1,roleManager_btn_add:!1,roleManager_btn_edit:!1,roleManager_btn_del:!1,roleManager_btn_perm:!1}},created:function(){this.roleManager_btn_add=this.permissions["sys_role_add"],this.roleManager_btn_edit=this.permissions["sys_role_edit"],this.roleManager_btn_del=this.permissions["sys_role_del"],this.roleManager_btn_perm=this.permissions["sys_role_perm"]},computed:(0,i.default)({},(0,l.mapGetters)(["elements","permissions"])),methods:{getList:function(e,t){var n=this;this.listLoading=!0,(0,a.fetchList)(Object.assign({current:e.currentPage,size:e.pageSize},t,this.searchForm)).then((function(e){n.list=e.data.records,n.page.total=e.data.total,n.listLoading=!1})).catch((function(){n.listLoading=!1}))},refreshChange:function(){this.getList(this.page)},searchChange:function(e,t){this.searchForm=e,this.getList(this.page,e),t()},sizeChange:function(e){this.page.pageSize=e},currentChange:function(e){this.page.currentPage=e},handleCreate:function(){this.$refs.crud.rowAdd()},handleOpenBefore:function(e){var t=this;(0,s.fetchTree)().then((function(e){t.dsScopeData=e.data,t.form.dsScope?t.checkedDsScope=t.form.dsScope.split(","):t.checkedDsScope=[]})),e()},handleUpdate:function(e,t){this.$refs.crud.rowEdit(e,t)},cancal:function(){this.dialogPermissionVisible=!1},handlePermission:function(e){var t=this;(0,a.fetchRoleTree)(e.roleId).then((function(e){return t.checkedKeys=e.data,(0,d.fetchMenuTree)()})).then((function(n){t.treeData=n.data,t.checkedKeys=t.resolveAllEunuchNodeId(t.treeData,t.checkedKeys,[]),t.dialogPermissionVisible=!0,t.roleId=e.roleId,t.roleCode=e.roleCode}))},resolveAllEunuchNodeId:function(e,t,n){for(var r=this,i=function(i){var a=e[i];a.children&&0!==a.children.length?r.resolveAllEunuchNodeId(a.children,t,n):n.push(t.filter((function(e){return e===a.id})))},a=0;a<e.length;a++)i(a);return n},filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},getNodeData:function(e,t){t()},handleDelete:function(e,t){var n=this;this.$confirm('是否确认删除名称为"'+e.roleName+'""的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return(0,a.delObj)(e.roleId)})).then((function(){n.getList(n.page),n.$notify.success("删除成功")}))},create:function(e,t,n){var r=this;1===this.form.dsType&&(this.form.dsScope=this.$refs.scopeTree.getCheckedKeys().join(",")),(0,a.addObj)(this.form).then((function(){r.getList(r.page),t(),r.$notify.success("创建成功")})).catch((function(){n()}))},update:function(e,t,n,r){var i=this;1===this.form.dsType&&(this.form.dsScope=this.$refs.scopeTree.getCheckedKeys().join(",")),(0,a.putObj)(this.form).then((function(){i.getList(i.page),n(),i.$notify.success("修改成功")})).catch((function(){r()}))},updatePermession:function(e){var t=this;this.menuIds="",this.menuIds=this.$refs.menuTree.getCheckedKeys().join(",").concat(",").concat(this.$refs.menuTree.getHalfCheckedKeys().join(",")),(0,a.permissionUpd)(e,this.menuIds).then((function(){t.dialogPermissionVisible=!1,t.$store.dispatch("GetMenu",{type:!1}),t.$notify.success("修改成功")}))}}};t.default=c}}]);