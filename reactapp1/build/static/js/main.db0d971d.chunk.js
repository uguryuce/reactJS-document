(this.webpackJsonpreactapp2=this.webpackJsonpreactapp2||[]).push([[0],{39:function(e,a,t){e.exports=t(70)},44:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(34),l=t.n(c),s=(t(44),t(7)),o=t(5),i=t(9),m=t(8),u=t(10),d=t(14);function p(e){var a=e.title;return r.a.createElement("nav",{className:" navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(d.b,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(d.b,{to:"/add",className:"nav-link"},"Add User")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(d.b,{to:"/github",className:"nav-link"},"Project Files"))))}p.defaultProps={title:"Default App"};var b=p,h=t(3),v=t.n(h),E=t(17),f=t(37),y=t(38),g=t(20),k=t(13),N=t.n(k),j=r.a.createContext(),O=function(e,a){switch(a.type){case"DELETE_USER":return Object(g.a)({},e,{users:e.users.filter((function(e){return a.payload!==e.id}))});case"ADD_USER":return Object(g.a)({},e,{users:[].concat(Object(y.a)(e.users),[a.payload])});case"UPDATE_USER":return Object(g.a)({},e,{users:e.users.map((function(e){return e.id===a.payload.id?a.payload:e}))});default:return e}},x=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={users:[],dispatch:function(e){t.setState((function(a){return O(a,e)}))}},t.componentDidMount=function(){var e;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.awrap(N.a.get("http://localhost:3004/users"));case 2:e=a.sent,t.setState({users:e.data});case 4:case"end":return a.stop()}}))},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(j.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),w=j.Consumer,C=t(19),U=(t(1),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).onClickEvet=function(e){t.setState({isVisible:!t.state.isVisible})},t.onDeleteUser=function(e,a){var n;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t.props.id,a.next=3,v.a.awrap(N.a.delete("http://localhost:3004/users/".concat(n)));case 3:e({type:"DELETE_USER",payload:n});case 4:case"end":return a.stop()}}))},t.state={isVisible:!1},t.onClickEvet=t.onClickEvet.bind(Object(C.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"onClickEvet",value:function(e){console.log(this)}},{key:"onClickEvet2",value:function(e,a){console.log(e)}}]),Object(o.a)(a,[{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}},{key:"render",value:function(){var e=this,a=this.props,t=a.id,n=(a.name,a.department),c=a.salary,l=this.state.isVisible;return r.a.createElement(w,null,(function(a){var s=a.dispatch;return r.a.createElement("div",{className:"col-md-8 mb-4"},r.a.createElement("div",{className:"card",style:l?{backgroundColor:"#dd4c4f",color:"#fff"}:null},r.a.createElement("div",{className:"card-header d-flex justify-content-between"},r.a.createElement("h4",{className:"d-inline ",onClick:e.onClickEvet},e.props.name),r.a.createElement("i",{className:"fa fa-trash-alt",style:{cursor:"pointer"},onClick:e.onDeleteUser.bind(e,s)})),l?r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"Maa\u015f : ",c),r.a.createElement("p",{className:"card-text"},"Department : ",n),r.a.createElement(d.b,{to:"edit/".concat(t),className:"btn btn-dark btn-block"}," Update User")):null))}))}}]),a}(n.Component));U.defaultProps={name:"\u0130sim bilgisi yok",salary:"Maa\u015f bilgisi yok",department:"Departman bilgisi yok"};var S=U,D=f.a.div({visible:{opacity:1,applyAtStart:{display:"block"}},hidden:{opacity:0,applyAtEnd:{display:"none"}}}),F=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={visible:!1,name:"",department:"",salary:"",error:!1},t.changeVisiblity=function(e){t.setState({visible:!t.state.visible})},t.validateForm=function(){var e=t.state,a=e.name,n=e.salary,r=e.department;return""!==a&&""!==n&&""!==r},t.changeInput=function(e){t.setState(Object(E.a)({},e.target.name,e.target.value))},t.addUser=function(e,a){var n,r,c,l,s,o;return v.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(a.preventDefault(),n=t.state,r=n.name,c=n.department,l=n.salary,s={name:r,salary:l,department:c},t.validateForm()){i.next=6;break}return t.setState({error:!0}),i.abrupt("return");case 6:return i.next=8,v.a.awrap(N.a.post("http://localhost:3004/users",s));case 8:o=i.sent,e({type:"ADD_USER",payload:o.data}),t.props.history.push("/");case 11:case"end":return i.stop()}}))},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.visible,n=a.name,c=a.salary,l=a.department,s=a.error;return r.a.createElement(w,null,(function(a){var o=a.dispatch;return r.a.createElement("div",{className:"col-md-8 mb-4"},r.a.createElement("button",{onClick:e.changeVisiblity,className:"btn btn-dark btn-block bm-1"},t?"Hide Form":"Show Form"),r.a.createElement(D,{pose:t?"visible":"hidden"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,"Add User Form")),r.a.createElement("div",{className:"card-body"},s?r.a.createElement("div",{className:"alert alert-danger"},"Eksik giri\u015f yapt\u0131n\u0131z, l\xfctfen bilgilerinizi kontrol edin"):null,r.a.createElement("form",{onSubmit:e.addUser.bind(e,o)},r.a.createElement("div",{className:"from-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"id",placeholder:"Enter name",className:"form-control",value:n,onChange:e.changeInput})),r.a.createElement("div",{className:"from-group"},r.a.createElement("label",{htmlFor:"department"},"Department"),r.a.createElement("input",{type:"text",name:"department",id:"department",placeholder:"Enter department",className:"form-control",value:l,onChange:e.changeInput})),r.a.createElement("div",{className:"from-group"},r.a.createElement("label",{htmlFor:"salary"},"Salary"),r.a.createElement("input",{type:"text",name:"salary",id:"id",placeholder:"Enter salary",className:"form-control",value:c,onChange:e.changeInput})),r.a.createElement("button",{className:"btn btn-danger btn-block mt-3",type:"submit"},"Add"))))))}))}}]),a}(n.Component),A=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",department:"",salary:"",error:!1},t.changeInput=function(e){t.setState(Object(E.a)({},e.target.name,e.target.value))},t.componentDidMount=function(){var e,a,n,r,c,l;return v.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e=t.props.match.params.id,s.next=3,v.a.awrap(N.a.get("http://localhost:3004/users/".concat(e)));case 3:a=s.sent,n=a.data,r=n.name,c=n.salary,l=n.department,t.setState({name:r,salary:c,department:l});case 6:case"end":return s.stop()}}))},t.validateForm=function(){var e=t.state,a=e.name,n=e.salary,r=e.department;return""!==a&&""!==n&&""!==r},t.updateUser=function(e,a){var n,r,c,l,s,o,i;return v.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(a.preventDefault(),n=t.state,r=n.name,c=n.salary,l=n.department,s=t.props.match.params.id,o={name:r,salary:c,department:l},t.validateForm()){m.next=7;break}return t.setState({error:!0}),m.abrupt("return");case 7:return m.next=9,v.a.awrap(N.a.put("http://localhost:3004/users/".concat(s),o));case 9:i=m.sent,e({type:"UPDATE_USER",payload:i.data}),t.props.history.push("/");case 12:case"end":return m.stop()}}))},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.salary,c=a.department,l=a.error;return r.a.createElement(w,null,(function(a){var s=a.dispatch;return r.a.createElement("div",{className:"col-md-8 mb-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,"Update User Form")),r.a.createElement("div",{className:"card-body"},l?r.a.createElement("div",{className:"alert alert-danger"},"Eksik giri\u015f yapt\u0131n\u0131z, l\xfctfen bilgilerinizi kontrol edin"):null,r.a.createElement("form",{onSubmit:e.updateUser.bind(e,s)},r.a.createElement("div",{className:"from-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"id",placeholder:"Enter name",className:"form-control",value:t,onChange:e.changeInput})),r.a.createElement("div",{className:"from-group"},r.a.createElement("label",{htmlFor:"department"},"Department"),r.a.createElement("input",{type:"text",name:"department",id:"department",placeholder:"Enter department",className:"form-control",value:c,onChange:e.changeInput})),r.a.createElement("div",{className:"from-group"},r.a.createElement("label",{htmlFor:"salary"},"Salary"),r.a.createElement("input",{type:"text",name:"salary",id:"id",placeholder:"Enter salary",className:"form-control",value:n,onChange:e.changeInput})),r.a.createElement("button",{className:"btn btn-danger btn-block mt-3",type:"submit"},"Add")))))}))}}]),a}(n.Component),I=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(w,null,(function(e){var a=e.users;return r.a.createElement("div",null,a.map((function(e){return r.a.createElement(S,{key:e.id,id:e.id,name:e.name,salary:e.salary,department:e.department})})))}))}}]),a}(n.Component),P=(t(69),t(15));var _=function(){return r.a.createElement("div",null,"404 Not Found")};var R=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Project Files and Contribute to Project"),r.a.createElement("p",null,"you can download full project from ",r.a.createElement("a",{target:"_blank",href:"https://github.com/uguryuce"},"this"),"  github page"))},V=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(b,{title:"User App 2"}),r.a.createElement("hr",null),r.a.createElement(P.c,null,r.a.createElement(P.a,{exact:!0,path:"/",component:I}),r.a.createElement(P.a,{exact:!0,path:"/add",component:F}),r.a.createElement(P.a,{exact:!0,path:"/github",component:R}),r.a.createElement(P.a,{exact:!0,path:"/edit/:id",component:A}),r.a.createElement(P.a,{component:_}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.db0d971d.chunk.js.map