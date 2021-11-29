(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84cc821a"],{"12b2":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isLoading?a("Spinner"):a("form",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.name,expression:"restaurant.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter name",required:""},domProps:{value:e.restaurant.name},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"name",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"categoryId"}},[e._v("Category")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.categoryId,expression:"restaurant.categoryId"}],staticClass:"form-control",attrs:{id:"categoryId",name:"categoryId",required:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.restaurant,"categoryId",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[e._v(" --請選擇-- ")]),e._l(e.categories,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])}))],2)]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"tel"}},[e._v("Tel")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.tel,expression:"restaurant.tel"}],staticClass:"form-control",attrs:{id:"tel",type:"text",name:"tel",placeholder:"Enter telephone number"},domProps:{value:e.restaurant.tel},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"tel",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"address"}},[e._v("Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.address,expression:"restaurant.address"}],staticClass:"form-control",attrs:{id:"address",type:"text",placeholder:"Enter address",name:"address"},domProps:{value:e.restaurant.address},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"address",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"opening-hours"}},[e._v("Opening Hours")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.openingHours,expression:"restaurant.openingHours"}],staticClass:"form-control",attrs:{id:"opening-hours",type:"time",name:"opening_hours"},domProps:{value:e.restaurant.openingHours},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"openingHours",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[e._v("Description")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.description,expression:"restaurant.description"}],staticClass:"form-control",attrs:{id:"description",rows:"3",name:"description"},domProps:{value:e.restaurant.description},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"description",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[e._v("Image")]),e.restaurant.image?a("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.restaurant.image,width:"200",height:"200"}}):e._e(),a("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"處理中...":"送出")+" ")])])},n=[],s=a("1da1"),i=a("5530"),o=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("b0c0"),a("96cf"),a("be6c")),u=a("2fa3"),c=a("2375"),l={components:{Spinner:c["a"]},props:{initialRestaurant:{type:Object,default:function(){return{name:"",CategoryId:"",tel:"",address:"",description:"",image:"",openingHours:""}}},isProcessing:{type:Boolean,default:!1}},data:function(){return{restaurant:Object(i["a"])({},this.initialRestaurant),categories:[],isLoading:!0}},created:function(){this.fetchCategories(),this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),this.initialRestaurant)},methods:{fetchCategories:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].categories.get();case 3:if(a=t.sent,r=a.data,"success"===r.status){t.next=7;break}throw new Error(r.message);case 7:e.categories=r.categories,e.isLoading=!1,t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](0),e.isLoading=!1,console.log("error",t.t0),u["a"].fire({icon:"error",title:"無法取得餐廳類別，請稍後再試"});case 16:case"end":return t.stop()}}),t,null,[[0,11]])})))()},handleFileChange:function(e){var t=e.target.files;if(0===t.length)this.restaurant.image="";else{var a=window.URL.createObjectURL(t[0]);this.restaurant.image=a}},handleSubmit:function(e){if(this.restaurant.name)if(this.restaurant.CategoryId){var t=e.target,a=new FormData(t);this.$emit("after-submit",a)}else u["a"].fire({icon:"warning",title:"請選擇餐廳類別"});else u["a"].fire({icon:"warning",title:"請填寫餐廳名稱"})}}},d=l,m=a("2877"),p=Object(m["a"])(d,r,n,!1,null,null,null);t["a"]=p.exports},2743:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("AdminRestaurantForm",{attrs:{"is-processing":e.isProcessing},on:{"after-submit":e.handleAfterSubmit}})],1)},n=[],s=a("1da1"),i=(a("96cf"),a("12b2")),o=a("be6c"),u=a("2fa3"),c={components:{AdminRestaurantForm:i["a"]},data:function(){return{isProcessing:!1}},methods:{handleAfterSubmit:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,o["a"].restaurants.create({formData:e});case 4:if(r=a.sent,n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:t.$router.push({name:"admin-restaurants"}),a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](0),t.isProcessing=!1,u["a"].fire({icon:"error",title:"無法建立餐廳，請稍後再試"});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})))()}}},l=c,d=a("2877"),m=Object(d["a"])(l,r,n,!1,null,null,null);t["default"]=m.exports},be6c:function(e,t,a){"use strict";a("b0c0");var r=a("2fa3");t["a"]={categories:{get:function(){return r["b"].get("/admin/categories",{})},create:function(e){var t=e.name;return r["b"].post("/admin/categories",{name:t},{})},update:function(e){var t=e.categoryId,a=e.name;return r["b"].put("/admin/categories/".concat(t),{name:a},{})},delete:function(e){var t=e.categoryId;return r["b"].delete("/admin/categories/".concat(t),{})}},restaurants:{getDetail:function(e){var t=e.restaurantId;return r["b"].get("/admin/restaurants/".concat(t),{})},get:function(){return r["b"].get("/admin/restaurants",{})},create:function(e){var t=e.formData;return r["b"].post("/admin/restaurants",t,{})},delete:function(e){var t=e.restaurantId;return r["b"].delete("/admin/restaurants/".concat(t),{})},update:function(e){var t=e.restaurantId,a=e.formData;return r["b"].put("/admin/restaurants/".concat(t),a,{})}},users:{get:function(){return r["b"].get("/admin/users",{})},update:function(e){var t=e.userId,a=e.isAdmin;return r["b"].put("/admin/users/".concat(t),{isAdmin:a},{})}}}}}]);
//# sourceMappingURL=chunk-84cc821a.16da51a0.js.map