(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),l=n(8),s=n(7),i=n(1),u=n(2),d=n(3),m=n(4),h=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).onSubmit=function(t){t.preventDefault();var e=t.target.list.value.trim();if(""==e)return 0;a.props.addTodo(e),t.target.list.value=""},a}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"todoform"},o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",name:"list"}),o.a.createElement("button",null,"Add")))}}]),n}(a.Component),p=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(i.a)(this,n),e.call(this,t)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return o.a.createElement("ol",{style:{listStyleType:"none"}},this.props.todolist.map((function(e){return o.a.createElement("div",{key:e.id,className:"list"},o.a.createElement("li",{className:"clearfix"},o.a.createElement("input",{type:"checkbox",onChange:function(n){return t.props.onChecked(e.id)},defaultChecked:e.completed}),o.a.createElement("span",{className:e.completed?"strike":{}},e.text),"completed"===t.props.current?o.a.createElement("button",{className:"btn-delete",onClick:function(n){return t.props.deleteTodo(e.id)}},o.a.createElement("i",{className:"fas fa-trash-alt"})):""," "),o.a.createElement("hr",null))}))," ",this.props.todolist?o.a.createElement("button",{className:"btndelete",onClick:this.props.deleteAll},"Delete"):"")}}]),n}(o.a.Component),f=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("input",{type:"text",className:"search",placeholder:"Search",onChange:this.props.searchTodo}))}}]),n}(o.a.Component),b=(n(14),n(15),function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).addTodo=function(t){var e={id:Date.now(),text:t,completed:!1};a.setState({todolist:[].concat(Object(s.a)(a.state.todolist),[e])}),console.log(a.state.todolist)},a.onChecked=function(t){var e=a.state.todolist.map((function(e){return e.id==t?Object(l.a)({},e,{completed:!e.completed}):e}));a.setState({todolist:e})},a.changeCurrent=function(t){a.setState({current:t})},a.completedTodo=function(){return a.state.todolist.filter((function(t){if(1==t.completed)return t}))},a.activeTodo=function(){return a.state.todolist.filter((function(t){if(0==t.completed)return t}))},a.deleteTodo=function(t){var e=a.state.todolist.filter((function(e){if(e.id!=t)return e}));a.setState({todolist:e})},a.searchTodo=function(t){console.log(t.target.value),a.setState({searchText:t.target.value});var e=a.state.todolist.filter((function(e){if(e.text.includes(t.target.value))return e}));a.setState({searchList:e})},a.deleteAll=function(t){console.log(t),console.log("hello"),a.setState({todolist:[]})},a.state={todolist:[],current:"all",searchList:[],searchText:""},a}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(){var t=JSON.stringify(this.state.todolist);localStorage.setItem("list",t)}},{key:"componentDidMount",value:function(){var t=[];try{(t=JSON.parse(localStorage.getItem("list")))||(t=[])}catch(e){t=[]}this.setState({todolist:t})}},{key:"render",value:function(){var t=this,e=[];switch(this.state.current){case"completed":e=this.completedTodo();break;case"active":e=this.activeTodo();break;default:e=this.state.todolist}this.state.searchText&&(e=this.state.searchList);var n={todolist:e,onChecked:this.onChecked};return o.a.createElement("div",{className:"main"},o.a.createElement("h1",null,"TODO APP"),o.a.createElement(f,{searchTodo:this.searchTodo}),o.a.createElement("button",{className:"btn",onClick:function(e){return t.changeCurrent("all")}},"All"),o.a.createElement("button",{className:"btn",onClick:function(e){return t.changeCurrent("active")}},"Active"),o.a.createElement("button",{className:"btn",onClick:function(e){return t.changeCurrent("completed")}},"Completed"),o.a.createElement(h,{addTodo:this.addTodo}),o.a.createElement(p,Object.assign({deleteTodo:this.deleteTodo,current:this.state.current,deleteAll:this.deleteAll},n)))}}]),n}(o.a.Component));n(16);c.a.render(o.a.createElement(b,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.ef2a4d04.chunk.js.map