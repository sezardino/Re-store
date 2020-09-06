(this["webpackJsonpre-store"]=this["webpackJsonpre-store"]||[]).push([[0],{27:function(e,t,n){e.exports=n(42)},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(15),l=n.n(c),i=n(12),u=n(11),s=o.a.createContext(),m=s.Provider,d=s.Consumer,E=n(17),f=n(13),p="FETCH_BOOKS_REQUEST",b="FETCH_BOOKS_SUCCESS",h="FETCH_BOOKS_FAILURE",O="ADD_BOOK_TO_CART",v="DECREASE_COUNT",g="REMOVE_BOOK_FROM_CART",k={cartItems:[],cartTotal:0},y=function(e,t,n){var a=e.shoppingCart.cartItems,r=e.bookList.books.find((function(e){return e.id===t})),o=a.findIndex((function(e){return e.id===t})),c=a[o],l=C(r,c,n);return{total:0,cartItems:_(a,l,o)}},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=t.id,r=void 0===a?e.id:a,o=t.title,c=void 0===o?e.title:o,l=t.count,i=void 0===l?0:l,u=t.total,s=void 0===u?0:u;return{id:r,title:c,total:s+n*e.price,count:i+1*n}},_=function(e,t,n){return 0===t.count?[].concat(Object(f.a)(e.slice(0,n)),Object(f.a)(e.slice(n+1))):n<0?[].concat(Object(f.a)(e),[t]):[].concat(Object(f.a)(e.slice(0,n)),[t],Object(f.a)(e.slice(n+1)))},j=function(e,t){if(void 0===e)return k;switch(t.type){case O:return y(e,t.payload,1);case v:return y(e,t.payload,-1);case g:console.log(t);var n=e.shoppingCart.cartItems.find((function(e){return e.id===t.payload}));return y(e,t.payload,-n.count);default:return e.shoppingCart}},N={books:[],loading:!0,error:null},S=function(e,t){if(void 0===e)return N;switch(t.type){case p:return{books:[],loading:!0,error:null};case b:return{books:t.payload,loading:!1,error:null};case h:return{books:[],loading:!1,error:t.payload};default:return e.bookList}},T=function(e,t){return{bookList:S(e,t),shoppingCart:j(e,t)}},B=Object(E.b)(T),I=n(9),R=n(10),D=function(){function e(){Object(I.a)(this,e),this.data=[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:32,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"},{id:2,title:"Release It!",author:"Michael T. Nygard",price:45,coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"}]}return Object(R.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise((function(t,n){setTimeout((function(){Math.random()>.8?n(new Error("Something goes wrong")):t(e.data)}),1e3)}))}}]),e}(),w=n(19),A=n(18),x=function(){return o.a.createElement("p",null,"Something goes wrong...")},F=function(e){Object(w.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(I.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(R.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?o.a.createElement(x,null):t}}]),n}(r.Component),K=n(2),L=(n(36),function(e){var t=e.numItems,n=e.total;return o.a.createElement("header",{className:"shop-header row"},o.a.createElement(u.b,{to:"/",className:"logo text-dark"},"ReStore"),o.a.createElement(u.b,{to:"/cart",className:"shopping-cart"},o.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),t," items ($",n,")"))}),H=function(e){return function(t){return o.a.createElement(d,null,(function(n){return o.a.createElement(e,Object.assign({},t,{bookstore:n}))}))}},M=n(7),U=(a={},Object(M.a)(a,p,(function(){return{type:p}})),Object(M.a)(a,b,(function(e){return{type:b,payload:e}})),Object(M.a)(a,h,(function(e){return{type:h,payload:e}})),Object(M.a)(a,O,(function(e){return{type:O,payload:e}})),Object(M.a)(a,v,(function(e){return{type:v,payload:e}})),Object(M.a)(a,g,(function(e){return{type:g,payload:e}})),a),P=(n(38),function(e){var t=e.book,n=e.onButtonClick,a=t.title,r=t.author,c=t.price,l=t.coverImage;return o.a.createElement("div",{className:"book-list-item"},o.a.createElement("div",{className:"book-cover"},o.a.createElement("img",{src:l,alt:"cover"})),o.a.createElement("div",{className:"book-details"},o.a.createElement("h3",{className:"book-title"},a),o.a.createElement("div",{className:"book-author"},r),o.a.createElement("div",{className:"book-price"},"$",c),o.a.createElement("button",{className:"btn btn-info add-to-cart",onClick:n},"Add to cart")))}),J=(n(39),function(){return o.a.createElement("div",{className:"loadingio-spinner-blocks-empg2hn5iyk"},o.a.createElement("div",{className:"ldio-q3wqs0nudf"},o.a.createElement("div",{style:{left:"66.15px",top:"66.15px",animationDelay:"0s"}}),o.a.createElement("div",{style:{left:"106.05000000000001px",top:"66.15px",animationDelay:"0.5681818181818182s"}}),o.a.createElement("div",{style:{left:"66.15px",top:"106.05000000000001px",animationDelay:"1.7045454545454546s"}}),o.a.createElement("div",{style:{left:"106.05000000000001px",top:"106.05000000000001px",animationDelay:"1.1363636363636365s"}})))}),$=(n(40),function(e){var t=e.books,n=e.onButtonClick;return o.a.createElement("ul",{className:"book-list"},t.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(P,{book:e,onButtonClick:function(){return n(e.id)}}))})))}),q=function(e){Object(w.a)(n,e);var t=Object(A.a)(n);function n(){return Object(I.a)(this,n),t.apply(this,arguments)}return Object(R.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchBooks)()}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.loading,a=e.error,r=e.toCartHandler;return n?o.a.createElement(J,null):a?o.a.createElement(x,null):o.a.createElement($,{books:t,onButtonClick:r})}}]),n}(r.Component),V=H(Object(i.b)((function(e){var t=e.bookList;return{books:t.books,loading:t.loading,error:t.error}}),(function(e,t){return{fetchBooks:function(){var n=t.bookstore;e(U.FETCH_BOOKS_REQUEST()),n.getBooks().then((function(t){return e(U.FETCH_BOOKS_SUCCESS(t))})).catch((function(t){return e(U.FETCH_BOOKS_FAILURE(t))}))},toCartHandler:function(t){return e(U.ADD_BOOK_TO_CART(t))}}}))(q)),z=(n(41),Object(i.b)((function(e){var t=e.shoppingCart;return{items:t.cartItems,total:t.orderTotal}}),(function(e){return{onIncrease:function(t){return e(U.ADD_BOOK_TO_CART(t))},onDecrease:function(t){return e(U.DECREASE_COUNT(t))},onDelete:function(t){return e(U.REMOVE_BOOK_FROM_CART(t))}}}))((function(e){var t=e.items,n=e.total,a=e.onDecrease,r=e.onDelete,c=e.onIncrease;return o.a.createElement("div",{className:"shopping-cart-table"},o.a.createElement("h2",null,"Your Order"),o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"Item"),o.a.createElement("th",null,"Count"),o.a.createElement("th",null,"Price"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,t.map((function(e,t){var n=e.id,l=e.title,i=e.total,u=e.count;return o.a.createElement("tr",{key:n},o.a.createElement("td",null,t+1),o.a.createElement("td",null,l),o.a.createElement("td",null,u),o.a.createElement("td",null,"$",i),o.a.createElement("td",null,o.a.createElement("button",{className:"btn btn-outline-danger btn-sm float-right",onClick:function(){return r(n)}},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("button",{className:"btn btn-outline-success btn-sm float-right",onClick:function(){return c(n)}},o.a.createElement("i",{className:"fa fa-plus-circle"})),o.a.createElement("button",{className:"btn btn-outline-warning btn-sm float-right",onClick:function(){return a(n)}},o.a.createElement("i",{className:"fa fa-minus-circle"}))))})))),o.a.createElement("div",{className:"total"},"Total: $",n))}))),Q=function(){return o.a.createElement("div",null,o.a.createElement(V,null),o.a.createElement(z,null))},X=function(){return o.a.createElement("div",null,"Cart Page")},Y=function(){return o.a.createElement("main",{role:"main",className:"container"},o.a.createElement(L,{numItems:3,total:100}),o.a.createElement(K.c,null,o.a.createElement(K.a,{path:"/",exact:!0,component:Q}),o.a.createElement(K.a,{path:"/cart",component:X})))},G=new D;l.a.render(o.a.createElement(i.a,{store:B},o.a.createElement(F,null,o.a.createElement(m,{value:G},o.a.createElement(u.a,null,o.a.createElement(Y,null))))),document.querySelector("#root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2ec3fc9f.chunk.js.map