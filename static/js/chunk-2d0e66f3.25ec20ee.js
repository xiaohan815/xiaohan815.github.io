(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e66f3"],{9974:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"execution"},[t("basic-container",[t("avue-crud",{attrs:{data:e.data,option:e.option}})],1)],1)},o=[],l=t("b775"),i={data:function(){return{obj:{},data:[],option:{menu:!1,page:!1,addBtn:!1,align:"center",menuAlign:"center",column:[{label:"模块名称",prop:"model"},{label:"唯一标示",prop:"uniqueKey"},{label:"模块地址",prop:"ipAddress"},{label:"管道名称",prop:"channelName"}]}}},created:function(){var e=this;Object(l["default"])({url:"/tx/admin/onlines",method:"get"}).then((function(n){e.data=n.data}))}},u=i,c=t("2877"),r=Object(c["a"])(u,a,o,!1,null,null,null);n["default"]=r.exports}}]);