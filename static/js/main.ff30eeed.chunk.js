(this.webpackJsonpuntitled1=this.webpackJsonpuntitled1||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/calvin.2ecddf2e.jfif"},17:function(e,t,a){e.exports=a.p+"static/media/steph.0ff43bb7.jfif"},20:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),s=a.n(r),l=a(2),i=a(3),o=a(4),u=a(5),m=a(19),d=a(16),f=a.n(d),p=a(17),h=a.n(p),v=function(e){return c.a.createElement("div",{className:"comment"},c.a.createElement("a",{className:"avatar",alt:"avatar"},c.a.createElement("img",{src:"calvin"==e.name?f.a:h.a})),c.a.createElement("div",{className:"content"},c.a.createElement("span",{style:{textTransform:"capitalize"},className:"author"},e.name),c.a.createElement("div",{className:"metadata"},c.a.createElement("span",{className:"date"},e.time)),c.a.createElement("div",{className:"text"},e.content)))},b=a(18),E=a.n(b).a.create({baseURL:"https://chatbox-f3e7e.firebaseio.com/"}),g=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={data:null},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.get("/message.json").then((function(t){var a=Object.entries(t.data).map((function(e){var t=Object(m.a)(e,2);t[0];return t[1]}));console.log(t),e.setState({data:a})})).catch((function(e){return console.warn("Unable to load messages!")}))}},{key:"renderList",value:function(){return this.state.data?this.state.data.map((function(e,t){return c.a.createElement(v,{key:t,name:e.name,content:e.content,time:e.time})})):c.a.createElement("p",null,"No Message found")}},{key:"render",value:function(){return c.a.createElement("div",{className:"ui comments"},c.a.createElement("h3",{className:"ui dividing header"},"Messages:"),this.renderList())}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).INITIAL_STATE={name:"steph",content:"",response:""},e.state=e.INITIAL_STATE,e.handleSubmit=function(t){var a=new Date,n=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate(),c=a.getHours()%12===0?12:a.getHours()%12,r="".concat(c,":").concat(a.getMinutes().length<10?"0"+a.getMinutes():a.getMinutes()," ").concat(a.getHours()>11?"PM":"AM"),s={name:e.state.name,time:r+" on "+n,content:e.state.content};t.preventDefault(),E.post("/message.json",s).then((function(t){200===t.status&&e.setState({content:"",response:"Submitted"})})).catch((function(e){return console.log(e)})),window.location.reload()},e.nameChange=function(t){e.setState({name:t.target.value})},e.contentUpdate=function(t){e.setState({content:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("form",{className:"ui form",onSubmit:this.handleSubmit},c.a.createElement("div",{className:"two fields"},c.a.createElement("div",{className:"three wide field"},c.a.createElement("label",null,"User"),c.a.createElement("select",{onChange:this.nameChange,value:this.state.name,className:"ui fluid dropdown",id:"user",name:"user"},c.a.createElement("option",{value:"steph"},"Steph"),c.a.createElement("option",{value:"calvin"},"Calvin"))),c.a.createElement("div",{className:"eleven wide field"},c.a.createElement("label",null,"Text"),c.a.createElement("input",{onChange:this.contentUpdate,value:this.state.content,type:"text"}))),c.a.createElement("input",{type:"submit",className:"ui primary button"}))}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"ui container"},c.a.createElement("h2",null,"Chat for Calvin and Steph"),c.a.createElement(g,null),c.a.createElement(N,null))}}]),a}(n.Component);s.a.render(c.a.createElement(j,null),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.ff30eeed.chunk.js.map