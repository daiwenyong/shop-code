(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{407:function(t,e,n){var content=n(409);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(3).default)("3adb692e",content,!0,{sourceMap:!1})},408:function(t,e,n){"use strict";var o=n(407);n.n(o).a},409:function(t,e,n){(e=n(2)(!1)).push([t.i,".time[data-v-07fe60a7]{display:flex;justify-content:center}",""]),t.exports=e},410:function(t,e,n){"use strict";n(222);var o={name:"countDown",props:{justifyLeft:{type:String,default:""},tipText:{type:String,default:"倒计时"},dayText:{type:String,default:"天"},hourText:{type:String,default:"时"},minuteText:{type:String,default:"分"},secondText:{type:String,default:"秒"},datatime:{type:Number,default:0},isDay:{type:Boolean,default:!0}},data:function(){return{day:"00",hour:"00",minute:"00",second:"00"}},created:function(){this.show_time()},mounted:function(){},methods:{show_time:function(){var t=this;function e(){var e=t.datatime-Date.parse(new Date)/1e3,n=0,o=0,l=0,d=0;e>0?(n=!0===t.isDay?Math.floor(e/86400):0,o=Math.floor(e/3600)-24*n,l=Math.floor(e/60)-24*n*60-60*o,d=Math.floor(e)-24*n*60*60-60*o*60-60*l,o<=9&&(o="0"+o),l<=9&&(l="0"+l),d<=9&&(d="0"+d),t.day=n,t.hour=o,t.minute=l,t.second=d):(t.day="00",t.hour="00",t.minute="00",t.second="00")}e(),setInterval(e,1e3)}}},l=(n(408),n(13)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"time acea-row row-middle",style:t.justifyLeft},[t.tipText?n("span",{staticClass:"red"},[t._v(t._s(t.tipText))]):t._e(),t._v(" "),!0===t.isDay?n("span",{staticClass:"styleAll"},[t._v(t._s(t.day))]):t._e(),t._v(" "),t.dayText?n("span",{staticClass:"timeTxt red"},[t._v(t._s(t.dayText))]):t._e(),t._v(" "),n("span",{staticClass:"styleAll"},[t._v(t._s(t.hour))]),t._v(" "),t.hourText?n("span",{staticClass:"timeTxt red"},[t._v(t._s(t.hourText))]):t._e(),t._v(" "),n("span",{staticClass:"styleAll"},[t._v(t._s(t.minute))]),t._v(" "),t.minuteText?n("span",{staticClass:"timeTxt red"},[t._v(t._s(t.minuteText))]):t._e(),t._v(" "),n("span",{staticClass:"styleAll"},[t._v(t._s(t.second))]),t._v(" "),t.secondText?n("span",{staticClass:"timeTxt red"},[t._v(t._s(t.secondText))]):t._e()])}),[],!1,null,"07fe60a7",null);e.a=component.exports},411:function(t,e,n){t.exports=n.p+"img/noGoods.348185d.png"},429:function(t,e,n){t.exports=n.p+"img/seckill-back.77251ba.png"},430:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAABQCAYAAAAUXiUwAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEqADAAQAAAABAAAAUAAAAACbUptGAAADPklEQVRYCa2Yy2oUQRSG55JsxpkwARVFCAYEUXEh2agbQV2IuBNxpYITn8THmNGtPoAbF75BCBiNCgZjwLswl57LYq5+Z7CaSU/XdFefbmi60l3n7++c+qu6JplGo/G73W4fzyiPXDabrQ4GgydKnUwGotOc+1qh3Orq6ldE9prN5k2NWE6CSa82Ho83NUJ+bL1e9yaTScm/4diYEkmMUJGengoLnIPqgyOI390nKpVKH7nb8Dzvqv/UoeELSYx4ajQa6T0lYnhqSNHz0nY5DhFJICLVVqulp2LkNqDacqGx9kVom/OStUPIg7nUpA/p1Si83lMILUPUD3mx9VYoETQDIl4g9tAaGXgQKiR9ZPQ49aMnYkyZTzj9rLSjDiuRBKbmdFJbgaoVRSPPo4g8qF5j0ntRYguFJFjSS7PoB6S4togqkshQQaa3QqfTOQHRTzVRsVj8BdEWYndsYrFS+x+czkQWMebeHz4Sx8KoXIimnyz2CfrlBWOuQ/VFTVQul2WzsY/g9aCYU2oSnMvlquwT9J4SMWzQYdockbY5nIkkUOYf6empsMAFqN4bGrkmImKfsEssi6d3xYglEpJg0quxT9B7SsTw1IiiT2ESE4kQVniK2LToKiH8dDufz2+LaOKDUbvIuWMElkzD9UqxpdA117i5/kF3J6oRrr6P8iuouuYNiYQY8goj9syIJLqS0hrnQTDYudikU0FERyMU0Hzr9XqngkRONWK3ewuBd4VC4btKCCfri8xIrZCWdYsTOzW8sylLRzAl57+h2WVlPG8LjEVEkS8j4LEyWn+GxRJKpciSCovXxJaSuR9JhMhjOj83AbZrpJBMUFZB3ZRw+Z27kGg4HFbwTiyaqNkvM33dVpfZ+1YinHyXjm/4l0dzNsDWtgql4p1ut3uSKfHD9vaw+6FE/X4/dpGNqK3Y8s26ZjrFuc4RUeQbBO5R5LkFfpHgnFAqRWY6FCiy/9FbRBB8doiItJyLbASDxRYnPzIPXa4+ETQbBA4p8lsXAdPXF6LI6SzuLGB9ir1s3uB6nRIh8oDAlywZ8q+MRIdJTZys+2bxqTkD0edEGDNBS2y609mmQPOXnwJHZ8QTNf8BpJOGdaIoJxsAAAAASUVORK5CYII="},431:function(t,e,n){t.exports=n.p+"img/seckill-slide-back.aeaa797.png"},432:function(t,e,n){t.exports=n.p+"img/seckill-slide-clock.043d4c6.png"},435:function(t,e,n){var content=n(487);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(3).default)("55c2f65e",content,!0,{sourceMap:!1})},485:function(t,e,n){t.exports=n.p+"img/seckill-title.930c04c.png"},486:function(t,e,n){"use strict";var o=n(435);n.n(o).a},487:function(t,e,n){var o=n(2),l=n(61),d=n(429),r=n(430),c=n(431),f=n(432);e=o(!1);var x=l(d),m=l(r),v=l(c),h=l(f);e.push([t.i,".seckill[data-v-74f0d111]{min-height:330px;background:url("+x+') top/100% no-repeat}.seckill .title-section[data-v-74f0d111]{padding-top:40px;padding-bottom:40px;text-align:center}.seckill .title-section img[data-v-74f0d111]{display:inline-block;width:200px;height:48px;vertical-align:middle}.seckill .goods-section[data-v-74f0d111]{width:1200px;margin:20px auto}.seckill .goods-section ul[data-v-74f0d111]{margin-bottom:-16px;margin-left:-16px}.seckill .goods-section ul[data-v-74f0d111]:after{content:"";display:block;height:0;clear:both;visibility:hidden}.seckill .goods-section ul li[data-v-74f0d111]{float:left;width:288px;margin-bottom:16px;margin-left:16px;background:#fff}.seckill .goods-section ul a[data-v-74f0d111]{display:block;padding:24px}.seckill .goods-section ul .image[data-v-74f0d111]{width:240px;height:240px;overflow:hidden}.seckill .goods-section ul .image img[data-v-74f0d111]{display:block;width:100%;height:100%;transition:1s}.seckill .goods-section ul .text[data-v-74f0d111]{margin-top:18px}.seckill .goods-section ul .text .name[data-v-74f0d111]{height:40px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-size:14px;line-height:20px;color:#282828}.seckill .goods-section ul .text .group[data-v-74f0d111]{display:flex;align-items:center;margin-top:12px}.seckill .goods-section ul .text .info[data-v-74f0d111]{flex:1}.seckill .goods-section ul .text .price[data-v-74f0d111]{display:inline-block;font-weight:700;font-size:14px;color:#e93323}.seckill .goods-section ul .text .price span[data-v-74f0d111]{font-size:22px}.seckill .goods-section ul .text del[data-v-74f0d111]{font-size:12px;color:#969696}.seckill .goods-section ul .text .progress[data-v-74f0d111]{margin-top:4px}.seckill .goods-section ul .text .progress .txt[data-v-74f0d111]{display:inline-block;width:57px;vertical-align:middle;font-size:12px;color:#969696}.seckill .goods-section ul .text .progress .bar[data-v-74f0d111]{display:inline-block;width:80px;height:8px;border-radius:4px;background:#e2e2e2;overflow:hidden;vertical-align:middle;font-size:0}.seckill .goods-section ul .text .progress .bar span[data-v-74f0d111]{display:inline-block;width:50%;height:100%;background:#e93323}.seckill .goods-section ul .text button[data-v-74f0d111]{width:70px;height:38px;border:none;border-radius:4px;background:#e93323;font-size:14px;color:#fff}.seckill .swiper-container[data-v-74f0d111]{width:1200px;background:#fff}.seckill .swiper-container .swiper-slide[data-v-74f0d111]{width:253px;height:80px;padding-right:18px;margin-right:-18px;background:url('+m+") 100% 0/18px 80px no-repeat;font-size:14px;color:#282828;cursor:pointer}.seckill .swiper-container .swiper-slide[data-v-74f0d111]:last-child{margin-right:0}.seckill .swiper-container .swiper-slide.row-column div[data-v-74f0d111]:first-child{width:auto;height:auto;margin-right:0;margin-bottom:4px;background:none;font-weight:700;font-size:18px;line-height:normal;text-align:inherit}.seckill .swiper-container .swiper-slide.off[data-v-74f0d111]{color:#969696}.seckill .swiper-container .swiper-slide.on[data-v-74f0d111]{background:url("+v+") 50%/100% 100% no-repeat;color:#fff}.seckill .swiper-container .swiper-slide>div[data-v-74f0d111]:first-child{width:76px;height:60px;margin-right:16px;background:url("+h+") 50%/60px 60px no-repeat;font-weight:700;font-size:24px;line-height:60px;text-align:center}.seckill .swiper-container .swiper-slide .time[data-v-74f0d111]{margin-top:8px;margin-right:-3px;margin-left:-3px;font-weight:700;font-size:17px}.seckill .swiper-container .swiper-slide[data-v-74f0d111] .styleAll{width:25px;height:25px;margin-right:3px;margin-left:3px;background-color:#222;line-height:25px;text-align:center;color:#fff}.seckill .nothing[data-v-74f0d111]{padding-top:250px;padding-bottom:150px;font-size:16px;text-align:center;color:#969696}.seckill .nothing img[data-v-74f0d111]{margin:0 auto}",""]),t.exports=e},568:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-section"},[e("img",{attrs:{src:n(485)}})])}],l={auth:!1,components:{countDown:n(410).a},data:function(){return{swiperOption:{slidesPerView:"auto"},page:1,limit:16,goodsList:[],finished:!1,currentTimeId:"",currentStopTime:"",currentTimeState:"",currentTimeStatus:"",seckillTime:[]}},fetch:function(t){var e=t.store;e.commit("isHeader",!0),e.commit("isFooter",!0)},head:function(){return{title:"秒杀列表-"+this.$store.state.titleCon}},mounted:function(){var t=this;this.$nextTick((function(){t.$axios.get("/seckill/index").then((function(e){e.data.seckillTime.length&&(t.currentTimeId=e.data.seckillTime[e.data.seckillTimeIndex].id,t.currentStopTime=e.data.seckillTime[e.data.seckillTimeIndex].stop,t.currentTimeState=e.data.seckillTime[e.data.seckillTimeIndex].state,t.currentTimeStatus=e.data.seckillTime[e.data.seckillTimeIndex].status,t.seckillTime=e.data.seckillTime,t.navSwiper.slideTo(e.data.seckillTimeIndex-1),t.getGoodsList())})),t.navSwiper&&t.navSwiper.on("click",(function(){t.navSwiper.clickedIndex>2&&t.navSwiper.slideNext(),t.currentTimeId=t.seckillTime[t.navSwiper.clickedIndex].id,t.currentStopTime=t.seckillTime[t.navSwiper.clickedIndex].stop,t.currentTimeState=t.seckillTime[t.navSwiper.clickedIndex].state,t.currentTimeStatus=t.seckillTime[t.navSwiper.clickedIndex].status,t.goodsList=[],t.page=1,t.finished=!1,t.getGoodsList()}))}))},methods:{getGoodsList:function(){var t=this;this.$axios.get("/seckill/list/".concat(this.currentTimeId),{params:{page:this.page,limit:this.limit}}).then((function(e){var data=e.data;t.goodsList=t.goodsList.concat(data),t.finished=data.length<t.page.limit,t.page++})).catch((function(e){t.$message.error(e)}))}}},d=(n(486),n(13)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"seckill"},[t._m(0),t._v(" "),o("div",{directives:[{name:"swiper",rawName:"v-swiper:navSwiper",value:t.swiperOption,expression:"swiperOption",arg:"navSwiper"}]},[o("div",{staticClass:"swiper-wrapper"},t._l(t.seckillTime,(function(e){return o("div",{key:e.id,staticClass:"acea-row row-center-wrapper swiper-slide",class:{"row-column":1!==e.status,on:t.currentTimeId==e.id}},[o("div",[t._v(t._s(e.time))]),t._v(" "),1===e.status?o("div",[t._v("\n          距结束\n          "),e.stop?o("countDown",{attrs:{"is-day":!1,"tip-text":" ","day-text":" ","hour-text":" : ","minute-text":" : ","second-text":" ",datatime:e.stop}}):t._e()],1):o("div",[t._v(t._s(e.state))])])})),0),t._v(" "),o("div",{staticClass:"swiper-pagination"})]),t._v(" "),o("div",{staticClass:"goods-section"},[t.goodsList.length?o("ul",t._l(t.goodsList,(function(e){return o("li",{key:e.id},[o("nuxt-link",{attrs:{to:{path:"/goods_seckill_detail",query:{id:e.id,productId:e.product_id,time:t.currentStopTime,status:t.currentTimeStatus}}}},[o("div",{staticClass:"image"},[o("img",{attrs:{src:e.image}})]),t._v(" "),o("div",{staticClass:"text"},[o("div",{staticClass:"name"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"group"},[o("div",{staticClass:"info"},[o("div",[o("div",{staticClass:"price"},[t._v("\n                    ￥"),o("span",[t._v(t._s(e.price))])]),t._v(" "),o("del",[t._v("￥"+t._s(e.ot_price))])]),t._v(" "),o("div",{staticClass:"progress"},[o("div",{staticClass:"txt"},[t._v("已抢"+t._s(e.percent)+"%")]),t._v(" "),o("div",{staticClass:"bar"},[o("span",{style:{width:e.percent+"%"}})])])]),t._v(" "),o("button",[t._v(t._s(t.currentTimeState))])])])])],1)})),0):t.seckillTime.length?o("div",{staticClass:"nothing"},[o("img",{attrs:{src:n(411)}}),t._v("\n      暂无秒杀商品，去看点别的吧\n    ")]):t._e()]),t._v(" "),t.seckillTime.length?t._e():o("div",{staticClass:"nothing"},[o("img",{attrs:{src:n(411)}}),t._v("\n    暂无秒杀商品，去看点别的吧\n  ")])])}),o,!1,null,"74f0d111",null);e.default=component.exports}}]);