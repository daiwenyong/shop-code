(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{444:function(e,t,r){e.exports=r.p+"img/refund.0933e35.png"},445:function(e,t,r){var content=r(507);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(3).default)("6efbd25b",content,!0,{sourceMap:!1})},506:function(e,t,r){"use strict";var n=r(445);r.n(n).a},507:function(e,t,r){(t=r(2)(!1)).push([e.i,".header[data-v-2393e43a]{height:60px;line-height:60px;color:#999}.header .home[data-v-2393e43a]{color:#282828}.refund[data-v-2393e43a]{padding:40px 20px 46px;background:#fff}.refund .el-icon-plus[data-v-2393e43a]{margin-top:20px}.refund .table[data-v-2393e43a]{width:100%;border:1px solid #efefef;border-collapse:collapse}.refund .table thead[data-v-2393e43a]{background:#efefef}.refund .table thead td[data-v-2393e43a]{height:40px;font-size:14px;text-align:center;color:#282828}.refund .table tbody .td[data-v-2393e43a]{width:219px;border:1px solid #efefef;font-size:14px;text-align:center;color:#282828}.refund .table tbody .td[data-v-2393e43a]:first-child{width:auto;padding:20px 50px;text-align:left}.refund .table tbody .td:first-child span[data-v-2393e43a]{margin-left:10px;font-size:12px;color:#b1b1b1}.refund .table img[data-v-2393e43a]{float:left;width:70px;height:70px}.refund .table img+div[data-v-2393e43a]{margin-left:90px}.refund .table .name[data-v-2393e43a]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;margin-bottom:13px;overflow:hidden}.refund .el-form[data-v-2393e43a]{margin-top:20px}.refund .el-form .cont[data-v-2393e43a]{padding-right:25px;padding-left:25px;border:1px solid #efefef}.refund .el-form .cont .el-form-item[data-v-2393e43a]{padding-top:25px;padding-bottom:25px;margin-bottom:0}.refund .el-form .cont .el-form-item~.el-form-item[data-v-2393e43a]{border-top:1px solid #efefef}.refund .el-form>.el-form-item[data-v-2393e43a]{margin-top:25px;margin-bottom:0;text-align:right}.refund .el-form .el-textarea[data-v-2393e43a]{width:820px}.refund .el-form[data-v-2393e43a] .el-textarea__inner{border:none;background:#f7f7f7}.refund .el-form[data-v-2393e43a] .el-upload--picture-card{width:70px;height:70px;border-style:solid;line-height:68px}.refund .el-form[data-v-2393e43a] .el-upload-list--picture-card .el-upload-list__item{width:70px;height:70px}.refund-box[data-v-2393e43a]{display:flex;flex-direction:column;align-items:center}.refund-box .title[data-v-2393e43a]{color:#e93323;font-size:20px;margin-top:20px}.refund-box span[data-v-2393e43a]{margin:10px 0 40px;color:#939393;font-size:14px}.refund-box button[data-v-2393e43a]{width:150px}.img-box-wrapper[data-v-2393e43a]{display:flex;flex-wrap:wrap}.img-box-wrapper .img-item[data-v-2393e43a]{position:relative;width:70px;height:70px;margin-right:20px;margin-bottom:12px;border:1px solid #c0ccda;border-radius:6px}.img-box-wrapper .img-item img[data-v-2393e43a]{width:100%;height:100%;border-radius:6px}.img-box-wrapper .img-item .icon[data-v-2393e43a]{position:absolute;right:-10px;top:-8px;font-size:20px;cursor:pointer;color:#e93323}",""]),e.exports=t},576:function(e,t,r){"use strict";r.r(t);r(80),r(221),r(6);var n=r(107),o=r.n(n),d=(r(26),r(222),r(25),r(10),r(49),r(27)),l=(r(38),r(4)),c=r(62),f={auth:"guest",data:function(){return{form:{region:"",desc:""},upLoadUrl:c.a.apiBaseURL+"/upload/image",pics:[],refundArray:[],refund_type:"1",returnGoodsData:[{label:"仅退款",value:"1"},{label:"退货并退款",value:"2"}],orderData:{},myHeaders:{},isDialog:!1,one_price:0,refund_num:0}},asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function t(){var r,n,o,l,data,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,n=e.query,t.next=3,Promise.all([r.$axios.get("/order/refund_detail/".concat(n.orderId).concat(n.cart_id?"/".concat(n.cart_id):"")),r.$axios.get("/order/refund/reason")]);case 3:return o=t.sent,l=Object(d.a)(o,2),data=l[0],c=l[1],data.data.cartInfo.map((function(e){e.refund_cart_num=e.cart_num})),t.abrupt("return",{one_price:1e4*(data.data.cartInfo[0].truePrice+Number(data.data.cartInfo[0].one_postage_price)),refund_num:data.data.total_num,orderData:data.data,refundArray:c.data});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(e){var t=e.store;t.commit("isHeader",!0),t.commit("isFooter",!0)},head:function(){return{title:"申请退款-"+this.$store.state.titleCon}},created:function(){var e=this.$cookies.get("auth.strategy");this.myHeaders={Authorization:this.$cookies.get("auth._token.".concat(e))}},methods:{handleClose:function(){this.isDialog=!1},subBtn:function(){return this.isDialog=!1,this.$router.replace({path:"/user/orderList",query:{page_type:1}})},onSubmit:function(){var e=this;if(""===this.form.region)return o.a.error("请选择退款原因");var t=[];this.orderData.cartInfo.map((function(i){t.push({cart_id:i.id,cart_num:i.refund_cart_num})})),console.log(t),this.$axios.post("/order/refund/apply/".concat(this.orderData.id),{text:this.form.region||"",refund_reason_wap_explain:this.form.desc,refund_reason_wap_img:this.pics.join(","),uni:this.orderData.order_id,refund_type:this.refund_type,cart_ids:t}).then((function(t){e.isDialog=!0})).catch((function(e){return o.a.error(e)}))},handleExceed:function(){this.$message.warning("最多上传3张图片")},handleSuccess:function(e){200===e.status?this.pics.push(e.data.url):400===e.status&&this.$message.error(e.msg)},beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;return t||this.$message.error("上传图片只能是 JPG、PNG 格式!"),t},handleRemove:function(e,t){var r=this;this.pics=[],t.forEach((function(e){r.pics.push(e.response.data.url)}))},inputNumber:function(e,t){var r=this,n=e+"";n.indexOf(".")>-1&&(n=n.split(".")[0]),n>this.orderData.total_num?this.$nextTick((function(){t.refund_cart_num=r.orderData.total_num})):this.$nextTick((function(){t.refund_cart_num=n}))}}},m=(r(506),r(13)),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("div",{staticClass:"refund wrapper_1200"},[n("table",{staticClass:"table"},[e._m(1),e._v(" "),n("tbody",e._l(e.orderData.cartInfo,(function(t,r){return n("tr",{key:r},[n("td",{staticClass:"td"},[n("table",[n("tr",[n("td",[n("img",{attrs:{src:t.productInfo.image}}),e._v(" "),n("div",[n("div",{staticClass:"name"},[e._v("\n                      "+e._s(t.productInfo.store_name)),t.productInfo.attrInfo?[e._v("\n                        "+e._s(t.productInfo.attrInfo.suk))]:e._e()],2),e._v(" "),t.productInfo.attrInfo?n("div",[e._v("\n                      ￥"+e._s(t.productInfo.attrInfo.price)),n("span",[e._v("x"+e._s(t.cart_num))])]):n("div",[e._v("\n                      ￥"+e._s(t.productInfo.price)),n("span",[e._v("x"+e._s(t.cart_num))])])])])])])]),e._v(" "),n("td",{staticClass:"td"},[1==e.orderData.total_num&&1==e.orderData.cartInfo.length?n("div",{staticClass:"num"},[e._v("\n              "+e._s(t.cart_num)+"\n            ")]):n("el-input-number",{attrs:{min:1,max:t.surplus_refund_num,label:"描述文字"},model:{value:t.refund_cart_num,callback:function(r){e.$set(t,"refund_cart_num",r)},expression:"item.refund_cart_num"}})],1)])})),0)]),e._v(" "),n("client-only",[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[n("div",{staticClass:"cont"},[e.orderData._status&&1!==e.orderData._status._type&&"fictitious"!==e.orderData.delivery_type?n("el-form-item",{attrs:{label:"退款类型"}},[n("el-radio-group",{model:{value:e.refund_type,callback:function(t){e.refund_type=t},expression:"refund_type"}},e._l(e.returnGoodsData,(function(t,r){return n("el-radio",{key:r,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1):e._e(),e._v(" "),n("el-form-item",{attrs:{label:"退款原因"}},[n("el-select",{attrs:{placeholder:"请选择退款原因"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},e._l(e.refundArray,(function(e,t){return n("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"备注说明"}},[n("el-input",{attrs:{type:"textarea",placeholder:"填写备注信息，100字以内",autosize:{minRows:4},maxlength:"100"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"上传凭证"}},[n("div",{staticClass:"img-box-wrapper"},[n("el-upload",{attrs:{"list-type":"picture-card",action:e.upLoadUrl,headers:e.myHeaders,limit:3,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"before-upload":e.beforeUpload}},[n("i",{staticClass:"el-icon-plus"})])],1),e._v(" "),n("p",{staticStyle:{color:"#999"}},[e._v("最多上传3张图片")])])],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("申请退款")])],1)],1)],1)],1),e._v(" "),n("client-only",[n("el-dialog",{attrs:{modal:!0,visible:e.isDialog,width:"370px","show-close":!1},on:{"update:visible":function(t){e.isDialog=t}}},[n("div",{staticClass:"refund-box"},[n("img",{attrs:{src:r(444),alt:""}}),e._v(" "),n("p",{staticClass:"title"},[e._v("退款申请提交成功")]),e._v(" "),n("span",[e._v("我们会继续为您提供更优质的商品及服务")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.subBtn}},[e._v("确认")])],1)])],1)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header wrapper_1200"},[t("span",{staticClass:"home"},[this._v("首页 > 订单详情 > ")]),this._v("申请退款\n  ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("td",[this._v("商品信息")]),this._v(" "),t("td",[this._v("退货件数")])])])}],!1,null,"2393e43a",null);t.default=component.exports}}]);