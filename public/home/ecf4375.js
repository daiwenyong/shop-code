(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{450:function(t,e,n){var content=n(524);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(3).default)("b154d35e",content,!0,{sourceMap:!1})},522:function(t,e,n){t.exports=n.p+"img/add.5311452.png"},523:function(t,e,n){"use strict";var o=n(450);n.n(o).a},524:function(t,e,n){(e=n(2)(!1)).push([t.i,".address-wrapper .address-content li[data-v-3e670b06]{position:relative;float:left;width:250px;min-height:200px;margin-top:30px;margin-right:30px;padding:22px 27px;border:1px solid #eaeaea}.address-wrapper .address-content li .moren[data-v-3e670b06]{position:absolute;right:0;top:0;width:56px;height:23px;line-height:23px;text-align:center;color:#fff;background:#e93323}.address-wrapper .address-content li .name[data-v-3e670b06]{color:#282828;font-size:16px}.address-wrapper .address-content li .phone[data-v-3e670b06]{margin-top:14px;margin-bottom:4px;font-size:12px}.address-wrapper .address-content li .text[data-v-3e670b06]{color:#999;font-size:14px;height:75px}.address-wrapper .address-content li .edit-box[data-v-3e670b06]{opacity:0;position:absolute;right:14px;bottom:12px;color:#e93323}.address-wrapper .address-content li .edit-box span[data-v-3e670b06]{margin-left:5px;cursor:pointer}.address-wrapper .address-content li.addbox .box[data-v-3e670b06]{position:absolute;left:0;top:50%;margin-top:-25px;text-align:center;width:100%;color:#c8c8c8;font-size:14px}.address-wrapper .address-content li.addbox .box img[data-v-3e670b06]{display:inline-block;width:27px;height:27px}.address-wrapper .address-content li:hover .edit-box[data-v-3e670b06]{opacity:1;transition:all .6s ease}.input-item[data-v-3e670b06]{margin-bottom:20px}.text-wrapper[data-v-3e670b06]{position:relative;height:40px;line-height:40px;border:1px solid #dcdfe6;padding:0 15px;box-sizing:border-box;border-radius:4px;color:#cfcfcf}.text-wrapper .select-wrapper[data-v-3e670b06]{z-index:10;position:absolute;left:0;top:45px;width:100%;padding:0 15px;background:#fff;border:1px solid #e93323;border-radius:4px;line-height:2}.text-wrapper .select-wrapper .title-box[data-v-3e670b06]{height:40px;line-height:40px;border-bottom:1px solid #efefef;color:#e93323;font-size:14px}.text-wrapper .select-wrapper .title-box span[data-v-3e670b06]{margin-right:8px;color:#666}.text-wrapper .select-wrapper .label-txt[data-v-3e670b06]{margin:8px 0 18px;color:#666;font-size:14px}.text-wrapper .select-wrapper .label-txt span[data-v-3e670b06]{margin-right:10px;cursor:pointer}.text-wrapper .select-wrapper .label-txt span.on[data-v-3e670b06]{color:#e93323}",""]),t.exports=e},581:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("img",{attrs:{src:n(522),alt:""}}),this._v(" "),e("p",[this._v("添加新地址")])])}],r=(n(223),n(6),n(147)),c=n.n(r),d=(n(221),n(107)),l=n.n(d),h=(n(21),{name:"addressList",auth:"guest",data:function(){return{list:[],page:1,limit:20,isShowSelect:!1,dialogVisible:!1,editId:0,formData:{name:"",phone:"",con:"",checked:!1},cityData:{pid:0,step:1,list:[],con:"",province:{},city:{},district:{}}}},fetch:function(t){var e=t.store;e.commit("isHeader",!0),e.commit("isFooter",!0)},head:function(){return{title:"地址管理-"+this.$store.state.titleCon}},created:function(){},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.$axios.get("address/list").then((function(e){t.list=e.data}))},addAddress:function(){this.editId=0,this.dialogVisible=!0},handleClose:function(){this.formReset(),this.dialogVisible=!1,this.isShowSelect=!1},bindAdd:function(){this.isShowSelect=!this.isShowSelect,3!=this.cityData.step&&(this.cityData.city={},this.cityData.district={},this.cityData.province={},this.getCityList())},getCityList:function(){var t=this;this.$axios.get("pc/get_city/".concat(this.cityData.pid)).then((function(e){t.cityData.list=e.data}))},bindCity:function(t){3==this.cityData.step?(this.cityData.district=t,this.cityData.pid=t.city_id,this.isShowSelect=!1):(1==this.cityData.step&&(this.cityData.province=t),2==this.cityData.step&&(this.cityData.city=t),this.cityData.pid=t.city_id,this.cityData.step++,this.getCityList())},bindSubmit:function(){var t=this;return this.formData.name?this.formData.phone&&/^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.formData.phone)?this.cityData.province.name?this.formData.con?void this.$axios.post("address/edit",{address:{province:this.cityData.province.name,city:this.cityData.city.name,district:this.cityData.district.name,city_id:this.cityData.city.city_id},is_default:this.formData.checked?1:0,real_name:this.formData.name,phone:this.formData.phone,detail:this.formData.con,id:this.editId}).then((function(e){return t.dialogVisible=!1,t.getList(),t.formReset(),l.a.success("添加成功")})).catch((function(t){return l.a.error(t)})):l.a.error("请填写详细地址"):l.a.error("请选择省市区"):l.a.error("请填写正确的手机号码"):l.a.error("请填写姓名")},bindDefault:function(t){var e=this;this.$axios.post("address/default/set",{id:t.id}).then((function(t){return e.getList(),l.a.success("设置成功")}))},bingDelete:function(t,e){var n=this;c.a.confirm("确定删除该地址吗","提示").then((function(e){n.$axios.post("/address/del",{id:t.id}).then((function(data){return n.getList(),l.a.success("删除成功")}))}))},edit:function(t){this.dialogVisible=!0,this.formData.name=t.real_name,this.formData.phone=t.phone,this.formData.con=t.detail,this.formData.checked=!!t.is_default,this.cityData.province.name=t.province,this.cityData.city.name=t.city,this.cityData.district.name=t.district,this.editId=t.id,this.cityData.city.city_id=t.city_id},formReset:function(){this.formData.name="",this.formData.phone="",this.formData.con="",this.formData.checked=!1,this.cityData.province={},this.cityData.city={},this.cityData.district={},this.cityData.step=1,this.cityData.pid=0}}}),v=(n(523),n(13)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"address-wrapper"},[n("div",{staticClass:"user-com-title"},[t._v("\n    地址管理\n  ")]),t._v(" "),n("div",{staticClass:"address-content"},[n("ul",{staticClass:"clearfix"},[t._l(t.list,(function(e,o){return n("li",{attrs:{index:o}},[n("div",{staticClass:"name line1"},[t._v(t._s(e.real_name))]),t._v(" "),n("div",{staticClass:"phone"},[t._v(t._s(e.phone))]),t._v(" "),n("div",{staticClass:"text line4"},[t._v(t._s(e.province)+t._s(e.city)+t._s(e.district)+t._s(e.detail))]),t._v(" "),n("div",{staticClass:"edit-box"},[1!=e.is_default?n("span",{on:{click:function(n){return t.bindDefault(e)}}},[t._v("设为默认地址")]):t._e(),t._v(" "),n("span",{on:{click:function(n){return t.edit(e)}}},[t._v("修改")]),t._v(" "),n("span",{on:{click:function(n){return t.bingDelete(e,o)}}},[t._v("删除")])]),t._v(" "),1==e.is_default?n("div",{staticClass:"moren"},[t._v("默认")]):t._e()])})),t._v(" "),n("li",{staticClass:"addbox",on:{click:t.addAddress}},[t._m(0)])],2)]),t._v(" "),n("el-dialog",{attrs:{title:"添加收货地址",visible:t.dialogVisible,width:"700px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticClass:"form-box"},[n("div",{staticClass:"input-item",staticStyle:{width:"48%",display:"inline-block"}},[n("el-input",{attrs:{maxlength:"25",placeholder:"姓名"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),n("div",{staticClass:"input-item",staticStyle:{width:"48%",display:"inline-block","margin-left":"3%"}},[n("el-input",{attrs:{placeholder:"手机号"},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1),t._v(" "),n("div",{staticClass:"input-item text-wrapper"},[t.cityData.province.name?t._e():n("p",{on:{click:t.bindAdd}},[t._v("请选择省/市/区/街道")]),t._v(" "),t.cityData.province.name?n("p",{staticStyle:{color:"#333"},on:{click:t.bindAdd}},[t.cityData.province.name?n("span",[t._v(t._s(t.cityData.province.name)+"/")]):t._e(),t._v(" "),t.cityData.city.name?n("span",[t._v(t._s(t.cityData.city.name)+"/")]):t._e(),t._v(" "),n("span",[t._v(t._s(t.cityData.district.name))])]):t._e(),t._v(" "),t.isShowSelect?n("div",{staticClass:"select-wrapper"},[t.cityData.province.city_id?t._e():n("div",{staticClass:"title-box"},[t._v("选择省/自治区")]),t._v(" "),2==t.cityData.step?n("div",{staticClass:"title-box"},[n("span",[t._v(t._s(t.cityData.province.name))]),t._v("选择区县\n            ")]):t._e(),t._v(" "),3==t.cityData.step?n("div",{staticClass:"title-box"},[n("span",[t._v(t._s(t.cityData.province.name))]),t._v(" "),n("span",[t._v(t._s(t.cityData.city.name))]),t._v("请选择配送区域\n            ")]):t._e(),t._v(" "),n("div",{staticClass:"label-txt"},t._l(t.cityData.list,(function(e,o){return n("span",{key:o,class:{on:t.cityData.pid==e.city_id},on:{click:function(n){return t.bindCity(e)}}},[t._v(t._s(e.name))])})),0)]):t._e()]),t._v(" "),n("div",{staticClass:"input-item"},[n("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"详细地址"},model:{value:t.formData.con,callback:function(e){t.$set(t.formData,"con",e)},expression:"formData.con"}})],1),t._v(" "),n("div",{staticClass:"input-item"},[n("el-checkbox",{model:{value:t.formData.checked,callback:function(e){t.$set(t.formData,"checked",e)},expression:"formData.checked"}},[t._v("设为默认")])],1)]),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.bindSubmit}},[t._v("确 定")])],1)])],1)}),o,!1,null,"3e670b06",null);e.default=component.exports}}]);