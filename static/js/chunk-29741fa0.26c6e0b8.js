(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29741fa0"],{"2a00":function(e,t,a){},"574b":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-serialNumber"},[e.configure.isShowTools?a("el-form",{attrs:{inline:!0}},[a("el-row",{staticStyle:{"padding-bottom":"5px"}},[a("el-col",{staticStyle:{"vertical-align":"middle","line-height":"28px","text-align":"left"},attrs:{span:12}},[a("span",{staticStyle:{"font-size":"large","font-weight":"bolder"}},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.configure.tableTitle,expression:"configure.tableTitle"}],staticClass:"el-icon-s-grid"}),e._v(e._s(e.configure.tableTitle)+" \n        ")])]),e._v(" "),a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:12}},[a("el-button-group",[e._t("diyButton"),e._v(" "),e.configure.isRefresh?a("el-button",{attrs:{type:"success",icon:"el-icon-refresh",plain:""},on:{click:function(t){return e.getDataList()}}},[e._v("刷新\n          ")]):e._e(),e._v(" "),e.configure.isAddShow&&!e.configure.isEdit?a("el-button",{attrs:{type:"primary",icon:"el-icon-news",plain:""},on:{click:function(t){return e.addOrUpdateHandle(null)}}},[e._v("新建\n          ")]):e._e(),e._v(" "),e.configure.isEdit?a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus",plain:""},on:{click:function(t){return e.addLine()}}},[e._v("新增行\n          ")]):e._e(),e._v(" "),e.configure.isEdit?a("el-button",{attrs:{type:"primary",icon:"el-icon-remove",plain:""},on:{click:function(t){return e.delLine()}}},[e._v("删除行\n          ")]):e._e(),e._v(" "),e.configure.isDelShow&&e.configure.isDelHeaderShow?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0,icon:"el-icon-delete",plain:""},on:{click:function(t){return e.handleDelete()}}},[e._v("批量删除\n          ")]):e._e(),e._v(" "),e.configure.isUploadShow?a("el-button",{attrs:{type:"info",icon:"el-icon-upload",plain:""},on:{click:function(t){e.uploadCenterDialogVisible=!0}}},[e._v("导入\n          ")]):e._e(),e._v(" "),e.configure.isDownload?a("el-dropdown",{attrs:{trigger:"click","hide-on-click":e.exportTypeAction}},[a("el-button",{attrs:{type:"warning",icon:"el-icon-download",plain:""}},[e._v("导出")]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{divided:""}},[a("el-select",{attrs:{clearable:""},on:{change:e.exportDataSelectCli},model:{value:e.queryParams.exportType,callback:function(t){e.$set(e.queryParams,"exportType",t)},expression:"queryParams.exportType"}},[a("el-option",{attrs:{label:"导出选中行",value:"page"}}),e._v(" "),a("el-option",{attrs:{label:"导出当前页",value:"page"}}),e._v(" "),a("el-option",{attrs:{label:"导出全部",value:"page"}})],1)],1),e._v(" "),a("el-dropdown-item",{attrs:{divided:""}},[e._v("Excel")]),e._v(" "),a("el-dropdown-item",{attrs:{divided:""}},[e._v("CSV")])],1)],1):e._e()],2)],1)],1)],1):e._e(),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],attrs:{data:e.dataList,stripe:"",border:"","highlight-current-row":"","header-row-style":{"font-weight":"bolder"},"row-key":e.configure.rowKey||"id","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","min-width":"5%",align:"center"}}),e._v(" "),e._l(e.tableHeader,(function(t,i){return a("el-table-column",{key:i,staticStyle:{margin:"0",padding:"4px 0 30px 0"},attrs:{prop:t.prop,label:t.label,"min-width":t.minWidth,fixed:t.fixed,align:t.align||"center","show-overflow-tooltip":t.showOverflowTooltip||!0},scopedSlots:e._u([{key:"default",fn:function(o){return[e.configure.isEdit?a("span",[t.type?"select"===t.type?a("el-select",{staticStyle:{width:"90%"},attrs:{clearable:"",filterable:""},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[th.prop]"}},e._l(e.queryDictCode(t.dictCode),(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):"amount"===t.type?a("el-input-number",{staticStyle:{width:"100%"},attrs:{precision:t.decimals||0},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[th.prop]"}}):"date"===t.type?a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:t.formatDateType||"date","range-separator":t.rangeSeparator||"至","start-placeholder":t.startPlaceholder||"开始日期","end-placeholder":t.endPlaceholder||"结束日期"},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[th.prop]"}}):a("el-input",{staticStyle:{width:"80%"},attrs:{size:"mini",placeholder:t.placeholder},model:{value:t.prop,callback:function(a){e.$set(t,"prop",a)},expression:"th.prop"}}):a("el-input",{staticStyle:{width:"80%"},attrs:{size:"mini",placeholder:t.placeholder},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[th.prop]"}})],1):a("span",[0===i&&t.formatter?a("el-link",{attrs:{icon:"el-icon-edit",type:"success"},domProps:{innerHTML:e._s(t.formatter(o.row,t,o.row[t.prop]))},on:{click:function(t){return e.addOrUpdateHandle(o.row)}}}):0!==i||t.notLink?0===i&&t.notLink?a("span",[e._v(e._s(o.row[t.prop]))]):t.formatter?a("span",{domProps:{innerHTML:e._s(t.formatter(o.row,t,o.row[t.prop]))}}):"select"===t.type?a("span",[e._v(e._s(e.getDictByName(t.dictCode,o.row[t.prop])))]):"date"===t.type?a("span",[e._v(e._s(e._f("formatDate")(o.row[t.prop],t.formatDate)))]):"amount"===t.type&&t.toUpper?a("span",[e._v(e._s(e._f("transToChinese")(o.row[t.prop])))]):"amount"===t.type?a("span",[e._v(e._s(e._f("formatAmount")(o.row[t.prop],t.decimals,t.decPoint,t.thousandsSep)))]):a("span",[e._v(e._s(o.row[t.prop]))]):a("el-link",{attrs:{icon:t.firstCellIcon||"el-icon-edit",type:"success"},on:{click:function(t){return e.addOrUpdateHandle(o.row)}}},[e._v("\n            "+e._s(o.row[t.prop])+"\n          ")])],1)]}}],null,!0)},[a("template",{slot:"header"},[a("label",[e._v(e._s(t.label))]),e._v(" "),(t.sortable,a("span",{staticClass:"caret-wrapper",on:{click:function(a){return a.stopPropagation(),e.sortChange(t)}}},[a("i",{staticClass:"sort-caret ascending",style:{"border-bottom-color":"asc"===t.order?"#409eff":"#c0c4cc"}}),e._v(" "),a("i",{staticClass:"sort-caret descending",style:{"border-top-color":"desc"===t.order?"#409eff":"#c0c4cc"}})])),e._v(" "),e.configure.isFilter&&!t.type?a("el-input",{attrs:{size:"mini",placeholder:t.placeholder},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getDataList(t)}},model:{value:e.queryRowBean[t.prop],callback:function(a){e.$set(e.queryRowBean,t.prop,a)},expression:"queryRowBean[th.prop]"}}):e.configure.isFilter&&"select"===t.type?a("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",filterable:"",onchange:e.getDataList},model:{value:e.queryRowBean[t.prop],callback:function(a){e.$set(e.queryRowBean,t.prop,a)},expression:"queryRowBean[th.prop]"}},e._l(e.queryDictCode(t.dictCode),(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e.configure.isFilter&&"date"===t.type?a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:t.formatDateType||"date","range-separator":t.rangeSeparator||"至",onchange:e.getDataList,"start-placeholder":t.startPlaceholder||"开始日期","end-placeholder":t.endPlaceholder||"结束日期"},model:{value:e.queryRowBean[t.prop],callback:function(a){e.$set(e.queryRowBean,t.prop,a)},expression:"queryRowBean[th.prop]"}}):a("el-input",{attrs:{size:"mini",placeholder:t.placeholder},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getDataList(t)}},model:{value:e.queryRowBean[t.prop],callback:function(a){e.$set(e.queryRowBean,t.prop,a)},expression:"queryRowBean[th.prop]"}})],1)],2)})),e._v(" "),e.tableOption.isShow||e.configure.isEdit?a("el-table-column",{attrs:{fixed:"right",label:e.tableOption.label||"操作","min-width":e.tableOption.minWidth||"15%",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[!e.configure.isEdit&&e.configure.isDelShow&&e.configure.isDelRowShow?a("el-button",{staticStyle:{padding:"4px","margin-left":"2px"},attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(a){return e.handleDelete(t.row[e.tableOption.delPriKey||"id"],t.row)}}}):e._e(),e._v(" "),e.configure.isEdit?a("el-button",{staticStyle:{padding:"4px","margin-left":"2px"},attrs:{type:"danger",icon:"el-icon-delete",circle:"",title:"删除行"},on:{click:function(a){return e.delLine(t.row[e.configure.rowKey])}}}):e._e(),e._v(" "),e.configure.isEdit?a("el-button",{staticStyle:{padding:"4px","margin-left":"2px"},attrs:{type:"primary",icon:"el-icon-share",circle:"",title:"增加子行"},on:{click:function(a){return e.addTreeData(t.row,t.row.parentId)}}}):e._e(),e._v(" "),e._l(e.tableOption.buttons,(function(i){return a("el-button",{key:i.type,staticStyle:{padding:"4px","margin-left":"2px"},attrs:{type:i.type,icon:i.icon,circle:""},on:{click:function(a){return e.dynHandleAction(i.method,t.row)}}})}))]}}],null,!1,1567434305)}):e._e()],2),e._v(" "),e.configure.isShowPage?a("el-pagination",{attrs:{"current-page":e.pageInfo.pageIndex,"page-sizes":e.pageInfo.pageSizes,"page-size":e.pageInfo.pageSize,total:e.pageInfo.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}):e._e(),e._v(" "),a("el-dialog",{attrs:{title:"上传",visible:e.uploadCenterDialogVisible,width:"30%"},on:{"update:visible":function(t){e.uploadCenterDialogVisible=t}}},[a("span",[e._v("请先下载模板:"),a("a",{attrs:{href:"#"}},[e._v("模板数据.xlsx")])]),e._v(" "),a("el-upload",{attrs:{drag:"",action:"https://jsonplaceholder.typicode.com/posts/",multiple:"",accept:".xls,.xlsx,.csv"}},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传xls/xlsx/csv，且不超过5Mb")])]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.uploadCenterDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleUpload}},[e._v("确 定")])],1)],1)],1)},o=[],n=(a("28a5"),a("ac6a"),a("b775")),r={isShowPage:!0,isDelShow:!0,isAddShow:!0,isDelHeaderShow:!0,isDelRowShow:!0,isRefresh:!0,isDownload:!0,isFilter:!0,tableTitle:"",isShowTools:!0,isUploadShow:!1,isEdit:!1,rowKey:"id"},l={isDelShow:!0,isShow:!0,delPriKey:"id"},s={name:"WlpTable",props:{configure:{type:Object,default:function(){return r}},tableHeader:{type:Array,required:!0,default:function(){return[]}},tableOption:{type:Object,default:function(){return l}},callbackQueryParams:{type:Function,default:function(){return{}}},callbackAddOrUpdate:{type:Function,default:function(){return{}}},callbackDel:{type:Function,default:function(){return{}}},callbackUpload:{type:Function,default:function(){return{}}}},data:function(){return{dataList:[],pageInfo:{pageIndex:1,pageSize:10,totalPage:0,pageSizes:[10,20,50,100]},queryParams:{sidx:"updatedDate",order:"desc",exportType:null},queryRowBean:{},uploadCenterDialogVisible:!1,dataListLoading:!1,dataListSelections:[],exportTypeAction:!0,addLineCount:9e5}},computed:{getDictByName:function(){var e=this;return function(t,a){return e.$globalUtils.getLocalDictByDictCodeAndItemCode(e,t,a)}}},created:function(){this.getDataList()},mounted:function(){var e=this;this.setConfigureInfo(),this.initQueryRow(this.tableHeader,this.dataList),this.tableHeader.forEach((function(t){t.order="none","select"===t.type&&e.$globalUtils.getDictByThis(e,t.dictCode)}))},methods:{exportDataSelectCli:function(){this.exportTypeAction=!1},queryDictCode:function(e){return this.$globalUtils.getDictAttributesList(this,e)},sortChange:function(e){var t="none"===e.order?"asc":"asc"===e.order?"desc":(e.order,"none");this.tableHeader.forEach((function(e){e.order="none"})),e.order=t,this.queryParams.sidx=e.prop,this.queryParams.order=t,this.getDataList()},setConfigureInfo:function(e){this.configure.pageInfo&&(this.pageInfo.pageSizes=this.configure.pageInfo.pageSizes),this.mergeDefaultValue(this.configure,r),this.mergeDefaultValue(this.tableOption,l)},mergeDefaultValue:function(e,t){if(e)for(var a in t)e.hasOwnProperty(a)||(e[a]=t[a])},getTypeByProps:function(e){var t={};return this.tableHeader.forEach((function(a){a.prop===e&&(t=a)})),t},initQueryRow:function(e,t){this.queryRowBean=this.commonHeaderToObj(e)},commonHeaderToObj:function(e){var t={};return e.forEach((function(e){t[e.prop]=null})),t},getDataList:function(){var e=this;this.dataListLoading=!0,this.callbackQueryParams&&Object.assign(this.queryParams,this.callbackQueryParams(this.queryParams)),this.queryParams.current=this.pageInfo.pageIndex,this.queryParams.size=this.pageInfo.pageSize,Object.assign(this.queryParams,this.queryRowBean),this.queryParams.sidx=this.$globalUtils.humpChange(this.queryParams.sidx),Object(n["default"])({url:this.configure.url,method:"get",params:this.queryParams}).then((function(t){t&&0===t.code?(e.dataList=t.data.records||t.data,e.pageInfo.totalPage=t.data.total):(e.dataList=[],e.pageInfo.totalPage=0),e.dataListLoading=!1})).catch((function(){e.dataListLoading=!1}))},dynHandleAction:function(e,t){this.$emit(e,t.id,t)},addOrUpdateHandle:function(e){this.callbackAddOrUpdate?this.callbackAddOrUpdate(e):this.$router.push({name:this.configure.addRoute,params:e})},addLine:function(){var e=this.commonHeaderToObj(this.tableHeader);e.id=this.addLineCount++,e.isNew=!0,e.parentId=0,this.dataList.push(e)},addTreeData:function(e,t){var a=this.commonHeaderToObj(this.tableHeader);a.id=this.addLineCount++,a.isNew=!0,a.parentId=e.id,a.children=[],a.parentIdStr=e.parentIdStr.concat(",").concat(e.id),this.$globalUtils.forFun1(this.dataList,e.parentIdStr.split(","),a)},delLine:function(e){var t=this;this.dataList=this.dataList.filter((function(a){return!t.dataListSelections.some((function(t){return a.id===t.id||e===a.id}))}))},handleUpload:function(){this.uploadCenterDialogVisible=!1,this.callbackUpload&&this.callbackUpload()},handleDelete:function(e,t){var a=this,i=e?[e]:this.dataListSelections.map((function(e){return e.id}));this.$confirm("确认选择删除数据?","确认信息",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(n["default"])({url:a.configure.delUrl,method:"post",data:i}).then((function(i){a.callbackDel?a.callbackDel(e,t):i&&0===i.code?a.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){a.getDataList()}}):a.$message.error(i.msg)}))})).catch((function(){}))},sizeChangeHandle:function(e){this.pageInfo.pageSize=e,this.pageInfo.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageInfo.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e}}},c=s,d=c,p=(a("5aa0"),a("2877")),u=Object(p["a"])(d,i,o,!1,null,null,null);t["a"]=u.exports},"5aa0":function(e,t,a){"use strict";var i=a("2a00"),o=a.n(i);o.a},d839:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("wlp-table",{attrs:{configure:e.configure,"table-header":e.tableHeader,"table-option":e.tableOption,"callback-add-or-update":e.addOrUpdate}}),e._v(" "),a("el-drawer",{attrs:{title:"我是标题",visible:e.drawer},on:{"update:visible":function(t){e.drawer=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"字典编码",prop:"dicCode"}},[a("el-input",{attrs:{placeholder:"字典编码"},model:{value:e.dataForm.dicCode,callback:function(t){e.$set(e.dataForm,"dicCode",t)},expression:"dataForm.dicCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"字典名称",prop:"dicName"}},[a("el-input",{attrs:{placeholder:"字典名称"},model:{value:e.dataForm.dicName,callback:function(t){e.$set(e.dataForm,"dicName",t)},expression:"dataForm.dicName"}})],1)],1)],1)],1)},o=[],n=a("574b"),r={name:"SysDict",components:{wlpTable:n["a"]},data:function(){return{tableHeader:[{prop:"dicCode",label:"字典编码",minWidth:"20%"},{prop:"dicName",label:"字典名称",minWidth:"20%"},{prop:"dicComments",label:"字典描述",minWidth:"25%"},{prop:"dicFlag",label:"是否启用",minWidth:"25%",type:"select",dictCode:"PUBLIC_Y_N"}],configure:{url:"/admin/sys/dict/dictPage",delUrl:"/admin/sys/dict/delete",addRoute:"sys-sys-dict-add-or-update"},tableOption:{delPriKey:"dicCode"},drawer:!1,dataForm:{dicCode:"",dicName:""}}},methods:{addOrUpdate:function(e){return this.drawer=!0,Object.assign(this.dataForm,e),null}}},l=r,s=a("2877"),c=Object(s["a"])(l,i,o,!1,null,"04e57645",null);t["default"]=c.exports}}]);