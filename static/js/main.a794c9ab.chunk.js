(this["webpackJsonpcall-api"]=this["webpackJsonpcall-api"]||[]).push([[0],{39:function(t,e,n){t.exports=n(70)},44:function(t,e,n){},45:function(t,e,n){},50:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),u=(n(44),n(2)),l=n(3),i=n(5),s=n(4),m=(n(45),n(6)),p=n(12),d=[{label:"Trang ch\u1ee7",to:"/react_products_management/",activeOnlyWhenExect:!0},{label:"Danh s\xe1ch s\u1ea3n ph\u1ea9m",to:"/react_products_management/products",activeOnlyWhenExect:!1}],h=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).showMenu=function(t){var e=null;return t.length>0&&(e=t.map((function(t,e){return r.a.createElement(f,{key:e,label:t.label,to:t.to,activeOnlyWhenExect:t.activeOnlyWhenExect})}))),e},t}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"navbar navbar-default"},r.a.createElement("p",{className:"navbar-brand"},"CALL API"),r.a.createElement("ul",{className:"nav navbar-nav"},this.showMenu(d))))}}]),n}(a.Component),f=function(t){var e=t.label,n=t.to,a=t.activeOnlyWhenExect,c=void 0!==a&&a;return r.a.createElement(m.a,{path:n,exact:c,children:function(t){var a=t.match?"active":"";return r.a.createElement("li",{className:a},r.a.createElement(p.b,{to:n},e))}})},b=h,E=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Trang ch\u1ee7"))}}]),n}(a.Component),v=(n(50),function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"panel panel-primary mt-15"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},"Danh s\xe1ch s\u1ea3n ph\u1ea9m")),r.a.createElement("div",{className:"panel-body"},r.a.createElement("table",{className:"table table-condensed table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"STT"),r.a.createElement("th",null,"M\xe3"),r.a.createElement("th",null,"T\xean"),r.a.createElement("th",null,"Gi\xe1"),r.a.createElement("th",null,"Tr\u1ea1ng th\xe1i"),r.a.createElement("th",null,"H\xe0nh \u0111\u1ed9ng"))),r.a.createElement("tbody",null,this.props.children))))}}]),n}(a.Component)),O=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).onDelete=function(){confirm("B\u1ea1n c\xf3 mu\u1ed1n x\xf3a s\u1ea3n ph\u1ea9m n\xe0y kh\xf4ng?")&&t.props.onDelete(t.props.product.id)},t.getProduct=function(e){t.props.editProduct(t.props.product.id)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.product,n=t.index;return r.a.createElement("tr",null,r.a.createElement("td",null,n+1),r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.status?r.a.createElement("span",{className:"label label-success"},"C\xf2n h\xe0ng"):r.a.createElement("span",{className:"label label-warning"},"H\u1ebft h\xe0ng")),r.a.createElement("td",null,r.a.createElement(p.b,{to:"products/edit?id="+e.id,className:"btn btn-success"},"Ch\u1ec9nh s\u1eeda"),"\xa0 \xa0",r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.onDelete},"X\xf3a")))}}]),n}(a.Component),g=n(13),y=n(36),j=n.n(y),C="https://5f5b5697044570001674cc64.mockapi.io/api",T=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2?arguments[2]:void 0;return j()({method:e,url:C+"/"+t,data:n}).catch((function(t){console.log(t)}))},N=function(t){return{type:"FETCH_PRODUCTS",products:t}},P=function(t){return{type:"DELETE_PRODUCT",id:t}},_=function(t){return{type:"ADD_PRODUCT",product:t}},x=function(t){return{type:"EDIT_PRODUCT",product:t}},D=function(t){return function(e){return T("products/"+t,"GET",null).then((function(t){e(k(t.data))}))}},k=function(t){return{type:"GET_PRODUCT_EDITING",product:t}},w=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).onDelete=function(e){t.props.deleteProduct(e)},t.showProductItemList=function(e){var n=null;return e.length>0&&(n=e.map((function(e,n){return r.a.createElement(O,{key:n,product:e,index:n,onDelete:t.onDelete})}))),n},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchAllProduct()}},{key:"render",value:function(){var t=this.props.products;return r.a.createElement(v,null,this.showProductItemList(t))}}]),n}(a.Component),S=Object(g.b)((function(t){return{products:t.products}}),(function(t,e){return{fetchAllProduct:function(){t((function(t){return T("products","GET",null).then((function(e){t(N(e.data))}))}))},deleteProduct:function(e){t(function(t){return function(e){return T("products/"+t,"DELETE",null).then((function(n){200===n.status&&e(P(t))}))}}(e))}}}))(w),I=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},r.a.createElement(p.b,{to:"/react_products_management/products/add",className:"btn btn-info"},"Th\xeam s\u1ea3n ph\u1ea9m"),r.a.createElement(S,null))}}]),n}(a.Component),R=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Kh\xf4ng t\xecm th\u1ea5y trang"))}}]),n}(a.Component),U=n(37),A=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).onChangeValue=function(t){var e=t.target,n=e.name,r="checkbox"===e.type?e.checked:e.value;a.setState(Object(U.a)({},n,r))},a.onSubmit=function(t){t.preventDefault(),a.props.onSubmit({id:a.state.id,name:a.state.txtName,price:a.state.txtPrice,status:a.state.status})},a.state={id:"",txtName:"",txtPrice:0,status:!1},a}return Object(l.a)(n,[{key:"componentWillReceiveProps",value:function(t){var e=t.product;e&&this.setState({id:e.id,txtName:e.name,txtPrice:e.price,status:e.status})}},{key:"render",value:function(){var t=this.state,e=t.txtName,n=t.txtPrice,a=t.status;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("legend",null,"Th\xeam s\u1ea3n ph\u1ea9m"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"T\xean s\u1ea3n ph\u1ea9m"),r.a.createElement("input",{type:"text",className:"form-control",name:"txtName",value:e,onChange:this.onChangeValue})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Gi\xe1"),r.a.createElement("input",{type:"number",className:"form-control",name:"txtPrice",value:n,onChange:this.onChangeValue})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"status",checked:a,onChange:this.onChangeValue})," C\xf2n h\xe0ng")),""!==this.state.id?r.a.createElement("button",{className:"btn btn-primary"},"Ch\u1ec9nh s\u1eeda"):r.a.createElement("button",{className:"btn btn-primary"},"Th\xeam"),"\xa0\xa0",r.a.createElement(p.b,{to:"/react_products_management/products",className:"btn btn-danger"},"H\u1ee7y b\u1ecf"))))}}]),n}(a.Component),G=Object(g.b)((function(t){return{itemEditing:t.itemEditing}}),(function(t,e){return{getProduct:function(e){t(D(e))}}}))(A),L=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).onSubmit=function(e){var n=t.props.history;""!==e.id?t.props.editProduct(e):t.props.addProduct(e),n.goBack()},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){if(this.props.location){var t=new URLSearchParams(this.props.location.search).get("id");this.props.getProduct(t)}}},{key:"render",value:function(){var t=this.props.itemEditing;return t?r.a.createElement(G,{onSubmit:this.onSubmit,location:this.props.location,product:t}):r.a.createElement(G,{onSubmit:this.onSubmit,location:this.props.location})}}]),n}(a.Component),M=Object(g.b)((function(t){return{products:t.products,itemEditing:t.itemEditing}}),(function(t,e){return{addProduct:function(e){t(function(t){return function(e){return T("products","POST",{name:t.name,price:t.price,status:t.status}).then((function(t){e(_(t.data))}))}}(e))},editProduct:function(e){t(function(t){return function(e){return T("products/"+t.id,"PUT",{name:t.name,price:t.price,status:t.status}).then((function(n){e(x(t))}))}}(e))},getProduct:function(e){t(D(e))}}}))(L),W=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(M,{history:this.props.history,location:this.props.location})}}]),n}(a.Component),H=[{path:"/react_products_management/",exact:!0,main:function(){return r.a.createElement(E,null)}},{path:"/react_products_management/products",exact:!0,main:function(){return r.a.createElement(I,null)}},{path:"/react_products_management/products/add",exact:!1,main:function(t){var e=t.history;return r.a.createElement(W,{history:e})}},{path:"/react_products_management/products/edit",exact:!1,main:function(t){var e=t.location,n=t.history;return r.a.createElement(W,{history:n,location:e})}},{path:"",exact:!1,main:function(){return r.a.createElement(R,null)}}],V=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).showContentMenus=function(t){var e=null;return t.length>0&&(e=t.map((function(t,e){return r.a.createElement(m.a,{key:e,path:t.path,exact:t.exact,component:t.main})}))),e},t}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(m.c,null,this.showContentMenus(H))))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(14),X=n(17),F=n(25),J=n.n(F),K=[],$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0,n=-1;switch(e.type){case"FETCH_PRODUCTS":return t=e.products,Object(X.a)(t);case"DELETE_PRODUCT":return-1!==(n=J.a.findIndex(t,(function(t){return t.id===e.id})))&&t.splice(n,1),Object(X.a)(t);case"ADD_PRODUCT":return t.push(e.product),Object(X.a)(t);case"EDIT_PRODUCT":return n=J.a.findIndex(t,(function(t){return t.id===e.product.id})),console.log(n),-1!==n&&(t[n]=e.product),Object(X.a)(t);default:return t}},q={},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_PRODUCT_EDITING":return e.product;default:return t}},Q=Object(B.c)({products:$,itemEditing:z}),Y=n(38),Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.d,tt=Object(B.e)(Q,Z(Object(B.a)(Y.a)));o.a.render(r.a.createElement(g.a,{store:tt},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.a794c9ab.chunk.js.map