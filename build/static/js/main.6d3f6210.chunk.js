(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(t,e,a){t.exports=a(48)},34:function(t,e,a){},35:function(t,e,a){},36:function(t,e,a){},37:function(t,e,a){},38:function(t,e,a){},48:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(15),i=a.n(s),o=(a(34),a(8)),c=a(9),l=a(12),u=a(10),m=a(13),p=(a(35),function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className},r.a.createElement("span",null,this.props.title),r.a.createElement("span",null,this.props.date),r.a.createElement("span",{className:this.props.statusClassName,onClick:this.props.statusClick},this.props.status))}}]),e}(n.Component)),d=(a(36),function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("button",{type:this.props.type,className:this.props.className,onClick:this.props.onClick},this.props.title)}}]),e}(n.Component)),h=(a(37),function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("input",{type:this.props.type,placeholder:this.props.placeholder})}}]),e}(r.a.Component)),f=(a(38),function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={tasks:[]},a.componentDidMount=function(){a.listTasks()},a.listTasks=function(){var t=localStorage.getItem("tasks");null===t?localStorage.setItem("tasks",JSON.stringify([])):a.setState({tasks:JSON.parse(t)})},a.checkDate=function(t){var e=new Date,a=String(e.getDay()),n=String(e.getMonth()+1),r=String(e.getFullYear()),s="\n      ".concat(r,"-").concat(n.padStart(2,0),"-").concat(a.padStart(2,"0"),"\n    ");return Date.parse(t)>Date.parse(s)},a.addTask=function(t){t.preventDefault();var e=t.target.firstElementChild.nextElementSibling.value,n=e.split("-").reverse().join("/");if(!a.checkDate(e))return alert("Adicione uma data que seja superior ou igual a data atual");var r=t.target.firstElementChild.value;if(""===r)return alert("N\xe3o \xe9 poss\xedvel adicionar uma tarefa sem conte\xfado");var s=localStorage.getItem("tasks"),i=JSON.parse(s);i.push({content:r,status:"Fazendo",date:n}),t.target.firstElementChild.value="",t.target.firstElementChild.focus(),localStorage.setItem("tasks",JSON.stringify(i)),a.setState({tasks:i})},a.removeTasks=function(){localStorage.setItem("tasks",JSON.stringify([])),a.setState({tasks:[]})},a.updateTask=function(t){var e=localStorage.getItem("tasks"),n=JSON.parse(e);"Fazendo"===n[t].status?n[t].status="Feito":n[t].status="Fazendo",localStorage.setItem("tasks",JSON.stringify(n)),a.setState({tasks:n})},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.addTask},r.a.createElement(h,{type:"text",placeholder:"Digite a tarefa"}),r.a.createElement(h,{type:"date"}),r.a.createElement(d,{type:"submit",className:"add",title:"Adicionar Tarefa"})),r.a.createElement(d,{type:"button",className:"removeAll",title:"Remover todas as tarefas",onClick:this.removeTasks}),this.state.tasks.map(function(e,a){return r.a.createElement(p,{key:a,className:"tarefa",title:e.content,status:e.status,date:e.date,statusClick:function(){t.updateTask(a)},statusClassName:e.status})}))}}]),e}(n.Component)),g=a(77),v=a(71),k=a(72),E=a(70),b=a(75),O=a(74),y=a(76),S=a(49),j=a(73);function N(t){var e=t.children,a=t.window,n=Object(b.a)({target:a?a():void 0});return r.a.createElement(O.a,{appear:!1,direction:"down",in:!n},e)}var w=Object(S.a)({avatar:{margin:10},bigAvatar:{margin:10,width:60,height:60}});function C(t){var e=w();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null),r.a.createElement(N,t,r.a.createElement(g.a,null,r.a.createElement(v.a,null,r.a.createElement(y.a,null),r.a.createElement(k.a,{style:{margin:"0 auto"},variant:"h6"},"To Do List - Digital House"),r.a.createElement(j.a,{alt:"Avatar picture",src:"https://thispersondoesnotexist.com/image",className:e.avatar})))),r.a.createElement(v.a,null))}var D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.6d3f6210.chunk.js.map