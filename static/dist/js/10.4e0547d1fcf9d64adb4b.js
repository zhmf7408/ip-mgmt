(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7td4":function(t,e,i){"use strict";i.r(e);var a=i("gY/t"),r=i("AIEA");for(var o in r)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("Y774");var n=i("y6gh"),s=Object(n.a)(r.default,a.a,a.b,!1,null,"3ce7ff2b",null);e.default=s.exports},AIEA:function(t,e,i){"use strict";i.r(e);var a=i("UqbR"),r=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e.default=r.a},UqbR:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l(i("cLjf")),r=l(i("bS4n")),o=l(i("hDQ3")),n=l(i("JnIg")),s=l(i("DcpZ"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={name:"c-m-d-b-manage",components:{commonTable:n.default,searchInput:s.default},data:function(){return{userDialog:{visible:!1,title:"新增用户"},periodSettingVisible:!1,modelVisible:!1,periodFormData:{},editPeriod:{last_time:"",value:"d",period:""},modelFormData:{model_id:"",priority:"",sync:!0,ip:"",bk_cloud_id:"",attribute_map:[{ipam_attr:"ip",cmdb_attr:"",is_cmdb_enum:!1,check_conflict:!0},{ipam_attr:"bk_cloud_id",cmdb_attr:"",is_cmdb_enum:!1,check_conflict:!0}]},searchValue:"",periodList:[{id:"d",name:"天"},{id:"h",name:"小时"}],cloudList:[],ipList:[],dataList:[],syncObject:{true:"是",false:"否"},CMDBList:[],attrList:[],columns:[{label:"模型名称",key:"name",align:"left",attr:{minWidth:"100px"}},{label:"模型ID",key:"model_id",align:"left",attr:{minWidth:"100px"}},{label:"同步优先级",key:"priority",align:"left",attr:{minWidth:"100px"}},{label:"云区域字段",key:"bk_cloud_id",align:"left",attr:{minWidth:"100px"}},{label:"IP字段",key:"ip",align:"left",attr:{minWidth:"100px"}},{label:"启动同步",key:"sync",align:"left",attr:{minWidth:"60px"},scopedSlots:{customRender:"sync"}},{label:"操作",key:"operation",attr:{minWidth:"170px"},scopedSlots:{customRender:"operation"}}],pagination:{current:1,count:1,limit:10},IPAMList:[],rules:{model_id:[{required:!0,message:"请选择模型",trigger:"change"}],ip:[{required:!0,message:"请选择指定IP字段",trigger:"change"}],priority:[{required:!0,message:"请输入同步优先级",trigger:"blur"}]},syncRules:{last_time:[{required:!0,message:"请选择同步时间",trigger:"change"}],period:[{required:!0,message:"请选择同步周期",trigger:"blur"}]},loading:!1,isConfirm:!1,mapVisible:!1,mapList:[],defaultList:[{ipam_attr:"ip",cmdb_attr:"bk_host_innerip",is_cmdb_enum:!1,check_conflict:!0},{ipam_attr:"bk_cloud_id",cmdb_attr:"bk_cloud_id",is_cmdb_enum:!1,check_conflict:!0},{ipam_attr:"dns",cmdb_attr:"dns_serv",is_cmdb_enum:!1,check_conflict:!1}],mapId:null}},watch:{periodSettingVisible:function(){this.periodSettingVisible||(this.periodFormData={})},modelVisible:function(){this.modelVisible||(this.modelFormData={model_id:"",priority:"",sync:!0,ip:"",bk_cloud_id:"",attribute_map:[{ipam_attr:"ip",cmdb_attr:"",is_cmdb_enum:!1,check_conflict:!0},{ipam_attr:"bk_cloud_id",cmdb_attr:"",is_cmdb_enum:!1,check_conflict:!0}]})},mapVisible:function(){this.mapVisible||(this.mapList=[])},searchValue:function(t){t||this.onSearch()}},created:function(){this.fetchData()},methods:{handlePageChange:function(t){this.pagination.current=t,this.fetchData()},limitChange:function(t){this.pagination.limit=t,this.fetchData()},fetchData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.default)(a.default.mark((function i(){var o;return a.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t.loading=!0,i.prev=1,i.next=4,t.$api.searchCMDB((0,r.default)({page:t.pagination.current,size:t.pagination.limit},e));case 4:(o=i.sent).result?(t.dataList=o.data.results,t.pagination.count=o.data.count):t._errorMessage(o.message);case 6:return i.prev=6,t.loading=!1,i.finish(6);case 9:case"end":return i.stop()}}),i,t,[[1,,6,9]])})))()},onSearch:function(t){this.fetchData({search:t})},toDelete:function(t){var e=this;return(0,o.default)(a.default.mark((function i(){var r;return a.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.$api.deleteCMDB({id:t.id});case 2:(r=i.sent).result?(e._successMessage("删除成功"),e.fetchData()):e._errorMessage(r.message);case 4:case"end":return i.stop()}}),i,e)})))()},periodSubmit:function(){var t=this;return(0,o.default)(a.default.mark((function e(){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$refs.validateForm.validate().then((function(e){e&&(t.isConfirm=!0,t.periodFormData.last_time=t.editPeriod.last_time,t.periodFormData.period=t.editPeriod.period+t.editPeriod.value,t.$api.setCMDBPeriod(t.periodFormData).then((function(e){e.result?(t._successMessage("设置同步周期成功"),t.fetchData(),t.periodSettingVisible=!1):t._errorMessage(e.message)})).finally((function(){t.isConfirm=!1})))}),(function(e){t.isConfirm=!1}));case 1:case"end":return e.stop()}}),e,t)})))()},modelSubmit:function(){var t=this;this.modelFormData.attribute_map[0].cmdb_attr=this.modelFormData.ip,this.modelFormData.attribute_map[1].cmdb_attr=this.modelFormData.bk_cloud_id,this.modelFormData.name=this.$refs.modeSelect.selectedName,this.isConfirm=!0,this.$refs.CMDBForm.validate().then((function(e){e&&t.$api.addCMDB(t.modelFormData).then((function(e){e.result?(t._successMessage("新增成功"),t.fetchData(),t.modelVisible=!1):t._errorMessage(e.message)})).finally((function(){t.isConfirm=!1}))}),(function(e){t.isConfirm=!1}))},toSync:function(t){var e=this;return(0,o.default)(a.default.mark((function i(){var r;return a.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.$api.makeSync({id:t.id});case 2:(r=i.sent).result?(e._successMessage("手动同步成功"),e.fetchData()):e._errorMessage(r.message);case 4:case"end":return i.stop()}}),i,e)})))()},changeClick:function(t){var e=this;return(0,o.default)(a.default.mark((function i(){var r;return a.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.$api.selectCMDBAttr({model:t});case 2:r=i.sent,e.ipList=r.data,e.cloudList=r.data,e.modelFormData.ip="",e.modelFormData.bk_cloud_id="",e.modelFormData.priority="";case 8:case"end":return i.stop()}}),i,e)})))()},onSearchCMDB:function(){var t=this;return(0,o.default)(a.default.mark((function e(){var i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.selectCMDB();case 2:(i=e.sent).result&&(t.CMDBList=i.data);case 4:case"end":return e.stop()}}),e,t)})))()},addModel:function(){this.modelVisible=!0,this.onSearchCMDB()},reduceMap:function(t){this.mapList.splice(t,1)},addMap:function(t){this.mapList.splice(t+1,0,{ipam_attr:"",cmdb_attr:"",is_cmdb_enum:!1,check_conflict:!1})},setPeriod:function(){var t=this;return(0,o.default)(a.default.mark((function e(){var i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.periodSettingVisible=!0,e.next=3,t.$api.searchCMDBPeriod();case 3:(i=e.sent).result?(t.periodFormData=i.data,t.editPeriod.last_time=t.periodFormData.last_time,t.editPeriod.period=parseInt(t.periodFormData.period),t.editPeriod.value=t.periodFormData.period.charAt(t.periodFormData.period.length-1)):t._errorMessage(i.message);case 5:case"end":return e.stop()}}),e,t)})))()},toMap:function(t){var e=this;return(0,o.default)(a.default.mark((function i(){var r;return a.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return e.mapId=t.id,e.mapVisible=!0,i.next=4,e.$api.getCMDBMap({id:t.id});case 4:(r=i.sent).result?(e.IPAMList=r.data.IPAM,e.attrList=r.data.CMDB,r.data.attribute_map!==[]?e.mapList=r.data.attribute_map:e.mapList=e.defaultList):e._errorMessage(r.message);case 6:case"end":return i.stop()}}),i,e)})))()},mapSubmit:function(){var t=this;this.$api.updateCMDBMap({id:this.mapId,attribute_map:this.mapList}).then((function(e){e.result?(t._successMessage("更新属性映射成功"),t.mapVisible=!1,t.onSearch()):t._errorMessage(e.message)}))},CMDBClick:function(t,e){var i=this.attrList.find((function(e){return e.bk_property_id===t}));e.is_cmdb_enum=i.is_cmdb_enum}}}},Y774:function(t,e,i){},"gY/t":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table—wrapper content"},[i("div",{staticClass:"header-table-operation"},[i("search-input",{attrs:{placeholder:"请输入模型名称"},on:{search:t.onSearch},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),t._v(" "),i("div",{staticClass:"operation-container"},[i("div",[i("bk-button",{attrs:{title:"同步周期"},on:{click:t.setPeriod}},[t._v("\n                    同步周期\n                ")]),t._v(" "),i("bk-button",{attrs:{title:"新增模型"},on:{click:t.addModel}},[t._v("\n                    新增模型\n                ")])],1)])],1),t._v(" "),i("div",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:t.loading,zIndex:10},expression:"{ isLoading: loading, zIndex: 10 }"}]},[i("common-table",{attrs:{data:t.dataList,columns:t.columns,"select-column":{visible:!1,fixed:!1},"order-column":{visible:!1,fixed:!1},pagination:t.pagination},on:{"page-change":t.handlePageChange,"page-limit-change":t.limitChange},scopedSlots:t._u([{key:"sync",fn:function(e){return[t._v("\n                "+t._s(t.syncObject[e.scope.sync])+"\n            ")]}},{key:"operation",fn:function(e){return[i("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(i){return t.toSync(e.scope)}}},[t._v("同步")]),t._v(" "),i("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(i){return t.toMap(e.scope)}}},[t._v("属性映射")]),t._v(" "),i("bk-popconfirm",{attrs:{trigger:"click",title:"确认删除该名单？",content:"删除操作无法撤回，请谨慎操作！"},on:{confirm:function(i){return t.toDelete(e.scope)}}},[i("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""}},[t._v("剔除")])],1)]}}])})],1),t._v(" "),i("bk-dialog",{attrs:{theme:"primary","mask-close":!1,"header-position":"left",title:"同步周期设置"},model:{value:t.periodSettingVisible,callback:function(e){t.periodSettingVisible=e},expression:"periodSettingVisible"}},[i("bk-form",{ref:"validateForm",attrs:{"label-width":80,model:t.editPeriod,rules:t.syncRules}},[i("bk-form-item",{attrs:{label:"同步时间",required:!0,property:"last_time","error-display-type":"normal"}},[i("bk-date-picker",{attrs:{placeholder:"选择日期时间",type:"datetime"},model:{value:t.editPeriod.last_time,callback:function(e){t.$set(t.editPeriod,"last_time",e)},expression:"editPeriod.last_time"}})],1),t._v(" "),i("bk-form-item",{staticStyle:{float:"left",width:"180px"},attrs:{label:"同步周期",required:!0,property:"period","error-display-type":"normal"}},[i("bk-input",{model:{value:t.editPeriod.period,callback:function(e){t.$set(t.editPeriod,"period",e)},expression:"editPeriod.period"}})],1),t._v(" "),i("bk-form-item",{staticClass:"sync-period",staticStyle:{float:"left",width:"150px"},attrs:{label:"",property:"value"}},[i("div",{staticStyle:{float:"left"}},[i("bk-select",{staticStyle:{width:"150px","margin-left":"10px"},attrs:{clearable:!1,disabled:!1,"ext-cls":"select-custom","ext-popover-cls":"select-popover-custom"},model:{value:t.editPeriod.value,callback:function(e){t.$set(t.editPeriod,"value",e)},expression:"editPeriod.value"}},t._l(t.periodList,(function(t){return i("bk-option",{key:t.id,attrs:{id:t.id,name:t.name}})})),1)],1)])],1),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("bk-button",{attrs:{theme:"primary",title:"确定",loading:t.isConfirm},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.periodSubmit.apply(null,arguments)}}},[t._v("确定")]),t._v(" "),i("bk-button",{attrs:{theme:"default",title:"取消"},on:{click:function(e){t.periodSettingVisible=!1}}},[t._v("\n                取消\n            ")])],1)],1),t._v(" "),i("bk-dialog",{attrs:{theme:"primary","mask-close":!1,"header-position":"left",title:"新增模型"},model:{value:t.modelVisible,callback:function(e){t.modelVisible=e},expression:"modelVisible"}},[i("bk-form",{ref:"CMDBForm",attrs:{"label-width":130,model:t.modelFormData,rules:t.rules}},[i("bk-form-item",{attrs:{label:"选择模型",required:!0,property:"model_id","error-display-type":"normal"}},[i("bk-select",{ref:"modeSelect",staticStyle:{width:"222px"},attrs:{disabled:!1,"ext-cls":"select-custom","ext-popover-cls":"select-popover-custom",searchable:""},on:{change:t.changeClick},model:{value:t.modelFormData.model_id,callback:function(e){t.$set(t.modelFormData,"model_id",e)},expression:"modelFormData.model_id"}},t._l(t.CMDBList,(function(t){return i("bk-option",{key:t.model_id,attrs:{id:t.model_id,name:t.name}})})),1)],1),t._v(" "),i("bk-form-item",{attrs:{label:"指定IP字段",required:!0,property:"ip","error-display-type":"normal"}},[i("bk-select",{staticStyle:{width:"222px"},attrs:{disabled:!1,"ext-cls":"select-custom","ext-popover-cls":"select-popover-custom"},model:{value:t.modelFormData.ip,callback:function(e){t.$set(t.modelFormData,"ip",e)},expression:"modelFormData.ip"}},t._l(t.ipList,(function(t){return i("bk-option",{key:t.bk_property_id,attrs:{id:t.bk_property_id,name:t.bk_property_name}})})),1)],1),t._v(" "),i("bk-form-item",{attrs:{label:"指定云区域字段",property:"bk_cloud_id"}},[i("bk-select",{staticStyle:{width:"222px"},attrs:{disabled:!1,"ext-cls":"select-custom","ext-popover-cls":"select-popover-custom"},model:{value:t.modelFormData.bk_cloud_id,callback:function(e){t.$set(t.modelFormData,"bk_cloud_id",e)},expression:"modelFormData.bk_cloud_id"}},t._l(t.cloudList,(function(t){return i("bk-option",{key:t.bk_property_id,attrs:{id:t.bk_property_id,name:t.bk_property_name}})})),1)],1),t._v(" "),i("bk-form-item",{attrs:{label:"同步优先级",required:!0,property:"priority","error-display-type":"normal"}},[i("bk-input",{attrs:{placeholder:"仅支持数字，且优先级唯一"},model:{value:t.modelFormData.priority,callback:function(e){t.$set(t.modelFormData,"priority",e)},expression:"modelFormData.priority"}})],1),t._v(" "),i("bk-form-item",{attrs:{label:"启动同步",required:!0,property:"sync","error-display-type":"normal"}},[i("bk-switcher",{model:{value:t.modelFormData.sync,callback:function(e){t.$set(t.modelFormData,"sync",e)},expression:"modelFormData.sync"}})],1)],1),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("bk-button",{attrs:{theme:"primary",title:"确定",loading:t.isConfirm},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.modelSubmit.apply(null,arguments)}}},[t._v("确定")]),t._v(" "),i("bk-button",{attrs:{theme:"default",title:"取消"},on:{click:function(e){t.modelVisible=!1}}},[t._v("\n                取消\n            ")])],1)],1),t._v(" "),i("bk-dialog",{attrs:{theme:"primary","mask-close":!1,"header-position":"left",title:"属性映射"},model:{value:t.mapVisible,callback:function(e){t.mapVisible=e},expression:"mapVisible"}},[i("table",{staticStyle:{"text-align":"center"}},[i("tr",[i("td"),t._v(" "),i("td",{attrs:{width:"100px"}},[t._v("IPAM属性")]),t._v(" "),i("td"),t._v(" "),i("td",[t._v("CMDB属性")]),t._v(" "),i("td",[t._v("同步冲突检测")])]),t._v(" "),t._l(t.mapList,(function(e,a){return i("tr",{key:a},[i("td",{staticStyle:{"text-align":"right"}},[0!==a?i("bk-icon",{attrs:{type:"minus-circle"},on:{click:function(e){return t.reduceMap(a)}}}):t._e(),t._v(" "),i("bk-icon",{attrs:{type:"plus-circle"},on:{click:function(e){return t.addMap(a)}}})],1),t._v(" "),i("td",[i("bk-select",{staticStyle:{width:"100px"},attrs:{disabled:!1,"ext-cls":"select-custom","ext-popover-cls":"select-popover-custom",searchable:""},model:{value:e.ipam_attr,callback:function(i){t.$set(e,"ipam_attr",i)},expression:"item.ipam_attr"}},t._l(t.IPAMList,(function(t){return i("bk-option",{key:t.bk_property_id,attrs:{id:t.bk_property_id,name:t.bk_property_id}})})),1)],1),t._v(" "),i("td",[i("bk-icon",{attrs:{type:"arrows-left"}})],1),t._v(" "),i("td",[i("bk-select",{staticStyle:{width:"100px"},attrs:{disabled:!1,"ext-cls":"select-custom","ext-popover-cls":"select-popover-custom",searchable:""},on:{change:function(i){return t.CMDBClick(i,e)}},model:{value:e.cmdb_attr,callback:function(i){t.$set(e,"cmdb_attr",i)},expression:"item.cmdb_attr"}},t._l(t.attrList,(function(t){return i("bk-option",{key:t.bk_property_id,attrs:{id:t.bk_property_id,name:t.bk_property_name}})})),1)],1),t._v(" "),i("td",[i("bk-checkbox",{model:{value:e.check_conflict,callback:function(i){t.$set(e,"check_conflict",i)},expression:"item.check_conflict"}})],1)])}))],2),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("bk-button",{attrs:{theme:"primary",title:"保存",loading:t.isConfirm},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.mapSubmit.apply(null,arguments)}}},[t._v("保存")]),t._v(" "),i("bk-button",{attrs:{theme:"default",title:"取消"},on:{click:function(e){t.mapVisible=!1}}},[t._v("\n                取消\n            ")])],1)])],1)},r=[]}}]);
//# sourceMappingURL=10.4e0547d1fcf9d64adb4b.js.map