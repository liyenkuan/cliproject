(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0d63":function(e,t,c){"use strict";c("11ef")},"11ef":function(e,t,c){},f820:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o=Object(a["createStaticVNode"])('<div class="couponBanner d-flex flex-wrap "><div class="coupon_content  align-self-center pt-5"><p style="color:#47ABA7;font-size:32px;font-weight:900;width:100%;">歡迎領取優惠券</p><p style="color:#47ABA7;font-size:32px;font-weight:900;width:100%;">7/1~8/31全站優惠中</p><p style="color:#47ABA7;font-size:32px;font-weight:900;width:100%;">序號：</p><p style="color:#47ABA7;font-size:32px;font-weight:900;width:100%;">HKDUVUDO</p></div></div><div class="productworks_title"><span class="material-icons"> work_outline </span> 服務項目 <hr></div>',2),n={class:"d-flex justify-content-center w-100 flex-wrap productcardUl"},r={class:"card text-white w-100 "},i={class:"card-img-overlay card_body"},s=Object(a["createVNode"])("h5",{class:"card-title"},"歡迎預約服務",-1),l={"aria-label":"Page navigation example py-3"},d={class:"pagination justify-content-center"},p={key:0,class:"page-item"},u=Object(a["createVNode"])("span",{"aria-hidden":"true"},"«",-1),g={key:1,class:"page-item disabled"},b=Object(a["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous"},[Object(a["createVNode"])("span",{"aria-hidden":"true"},"«")],-1),j={key:2,class:"page-item"},O=Object(a["createVNode"])("span",{"aria-hidden":"true"},"»",-1),f={key:3,class:"page-item disabled"},k=Object(a["createVNode"])("a",{class:"page-link ",href:"#","aria-label":"Next"},[Object(a["createVNode"])("span",{"aria-hidden":"true"},"»")],-1);function h(e,t,c,h,v,w){var B=Object(a["resolveComponent"])("loading");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(B,{active:v.isLoading},null,8,["active"]),o,Object(a["createVNode"])("ul",n,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(v.products,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:" productcardLi ",key:t},[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("img",{src:e.imageUrl,class:"productcard-img",alt:"..."},null,8,["src"]),Object(a["createVNode"])("div",i,[s,Object(a["createVNode"])("input",{type:"button",value:"more",class:"card_btn","data-id":e.id,onClick:function(t){return w.toProductspage(e.id)}},null,8,["data-id","onClick"])])])])})),128))]),Object(a["createVNode"])("nav",l,[Object(a["createVNode"])("ul",d,[v.pages.has_pre?(Object(a["openBlock"])(),Object(a["createBlock"])("li",p,[Object(a["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return w.updatePage(v.pages.current_page-1)}),["prevent"]))},[u])])):(Object(a["openBlock"])(),Object(a["createBlock"])("li",g,[b])),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(v.pages.total_pages,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item",{active:e===v.pages.current_page}],key:t},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(a["withModifiers"])((function(t){return w.updatePage(e)}),["prevent"])},Object(a["toDisplayString"])(e),9,["onClick"])],2)})),128)),v.pages.has_next?(Object(a["openBlock"])(),Object(a["createBlock"])("li",j,[(Object(a["openBlock"])(),Object(a["createBlock"])("a",{class:"page-link",href:"#","aria-label":"Next",key:v.pages.current_page,onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return w.updatePage(v.pages.current_page+1)}),["prevent"]))},[O]))])):(Object(a["openBlock"])(),Object(a["createBlock"])("li",f,[k]))])])],64)}var v="https://vue3-course-api.hexschool.io/",w={data:function(){return{products:[],isLoading:!1,pages:[]}},methods:{getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,this.axios.get("".concat(v,"api/password/products?page=").concat(t)).then((function(t){e.isLoading=!1,t.data.success&&(e.products=t.data.products,e.pages=t.data.pagination)})).catch((function(e){console.log(e)}))},toProductspage:function(e){this.$router.push({name:"Descriptiont",query:{productsId:"".concat(e)}})},updatePage:function(e){this.getProducts(e)}},created:function(){this.getProducts()}};c("0d63");w.render=h;t["default"]=w}}]);
//# sourceMappingURL=about.f4c40897.js.map