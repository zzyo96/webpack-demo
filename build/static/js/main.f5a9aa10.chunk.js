(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){},24:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(7),s=n.n(i),c=(n(14),n(1)),l=n(2),r=n(4),u=n(3),d=n(5),h=(n(16),n(18),n(20),n(22),function(t){function e(){return Object(c.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("input",{type:"text",value:this.props.content,className:"TodoInput",onChange:this.changeTitle.bind(this),onKeyPress:this.submit.bind(this)})}},{key:"submit",value:function(t){"Enter"===t.key&&console.log("\u7528\u6237\u6309\u56de\u8f66\u4e86")}},{key:"changeTitle",value:function(t){this.props.onChange(t)}}]),e}(o.Component)),p=(n(24),function(t){function e(){return Object(c.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"TodoItem"},a.a.createElement("input",{type:"checkbox",checked:"completed"===this.props.todo.status,onChange:this.toggle.bind(this)}),a.a.createElement("span",{className:"title"},this.props.todo.title),a.a.createElement("button",{onClick:this.delete.bind(this)},"\u5220\u9664"))}},{key:"toggle",value:function(t){this.props.onToggle(t,this.props.todo)}},{key:"delete",value:function(t){this.props.onDelete(t,this.props.todo)}}]),e}(o.Component)),m=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(r.a)(this,Object(u.a)(e).call(this,t))).state={newTodo:"test",todoList:[{id:1,title:"\u7b2c\u4e00\u4e2a\u5f85\u529e"},{id:2,title:"\u7b2c\u4e8c\u4e2a\u5f85\u529e"}]},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.state.todoList.filter(function(t){return!t.deleted}).map(function(e,n){return a.a.createElement("li",null,a.a.createElement(p,{todo:e,onToggle:t.toggle.bind(t),onDelete:t.delete.bind(t)}))});return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"\u6211\u7684\u5f85\u529e"),a.a.createElement("div",{className:"inputWrapper"},a.a.createElement(h,{content:this.state.newTodo,onChange:this.changeTitle.bind(this),onSubmit:this.addTodo.bind(this)})),a.a.createElement("ol",{className:"todoList"},e))}},{key:"toggle",value:function(t,e){e.status="completed"===e.status?"":"completed",this.setState(this.state)}},{key:"changeTitle",value:function(t){this.setState({newTodo:t.target.value,todoList:this.state.todoList})}},{key:"addTodo",value:function(){console.log("\u6211\u5f97\u6dfb\u52a0\u4e00\u4e2a todo \u4e86")}},{key:"delete",value:function(t,e){e.deleted=!0,this.setState(this.state)}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(26)}},[[8,2,1]]]);
//# sourceMappingURL=main.f5a9aa10.chunk.js.map