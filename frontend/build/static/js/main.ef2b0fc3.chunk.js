(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(e,t,a){e.exports=a(78)},71:function(e,t,a){},72:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(36),l=a.n(o),c=a(20);var i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w3-container w3-center w3-blue",style:{padding:"2rem"}},r.a.createElement("h1",{className:"w3-jumbo"},"Tweet App"),r.a.createElement("button",{className:"w3-button w3-pink",style:{marginRight:"1rem"},onClick:function(){return window.location="/login"}},"Login"),r.a.createElement("button",{className:"w3-button w3-pink",onClick:function(){return window.location="/register"}},"Register")),r.a.createElement("div",{className:"w3-container w3-center w3-blue",style:{padding:"2rem",marginTop:"2rem"}},r.a.createElement("h2",null,"Hey!! Welcome to Twitter"),r.a.createElement("p",null,"To get started, first enter your loginid and password to get started")),r.a.createElement("div",{className:"w3-container w3-center w3-blue",style:{padding:"2rem",marginTop:"2rem"}},r.a.createElement("h2",null,"About Twiiter"),r.a.createElement("p",{className:"w3-center"},"Twitter is a free social networking site where users broadcast short posts known as tweets. These tweets can contain text, videos, photos or links. To access Twitter, users need an internet connection or smart phone to use the app or website, Twitter.com.")))},s=a(12),m=a.n(s),u=a(16),d=a(4),g=a(5),w=a(18),p=a(7),h=a(6),E=a(1),f=a.n(E),b="https://tweet-app.azurewebsites.net",y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).getVal=function(e){n.setState({userList:[]})},n.onChange=function(){var e=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""===t.target.value&&n.setState({Profile:[]}),console.log(t.target.value),e.next=4,f.a.get(b+"/tweets/user/search/"+t.target.value,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Access-Control-Allow-Headers":window.location.origin,"Cache-Control":"no-store, no-cache"}}).then((function(e){console.log("RESULT for searching parameter : ",e),n.setState({Profile:e.data.data})})).catch((function(e){(f.a.isCancel(e)||e)&&console.log("Data not found.")}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onSearch=function(e){n.props.loginInfo(e)},n.state={Profile:[]},n.getVal=n.getVal.bind(Object(w.a)(n)),n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("dropdownContext"),a=document.getElementById("searchBox");document.addEventListener("mousedown",(function(n){t.contains(n.target)||a.contains(n.target)?e.state.Profile.length>0&&(t.classList.remove("display-none"),t.classList.add("list-group")):t.classList.add("display-none")}))}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;this.props.loginInfo;return r.a.createElement("div",null,r.a.createElement("div",{className:"input-group mt-3"},r.a.createElement("input",{id:"searchBox",type:"text",className:"form-control",placeholder:"Find User",onClick:this.getVal,onChange:function(t){return e.onChange(t)}})),r.a.createElement("div",{id:"dropdownContext",className:this.state.Profile.length>0?"list-group":"display-none"},this.state.Profile.map((function(t){return r.a.createElement("div",null,r.a.createElement("a",{onClick:function(){return e.onSearch(t.loginid)},className:"list-group-item list-group-item-action"},t.loginid))}))))}}]),a}(n.Component);var v=function(e){var t=r.a.useState(localStorage.getItem("theme")||"light"),a=Object(c.a)(t,2),n=a[0],o=a[1];r.a.useEffect((function(){"dark"===n?document.body.classList.add("dark"):document.body.classList.remove("dark")}),[n]);var l=localStorage.getItem("token"),i={name:l?"Settings":"Login",link:l?"/settings":"/login"},s={name:l?"Logout":"Register",link:l?"/logout":"/register"};return r.a.createElement("div",{className:"w3-bar w3-black"},r.a.createElement("a",{className:"w3-bar-item w3-button",href:"/"},"Tweet-App"),r.a.createElement("div",{style:{float:"right"}},r.a.createElement("div",{className:"w3-bar-item"},r.a.createElement(y,{loginInfo:function(t){console.log("hamara bajaj",t),e.loginData(t)}})),r.a.createElement("button",{className:"w3-bar-item w3-btn",onClick:function(){"dark"===n?(localStorage.setItem("theme","light"),o("light")):(localStorage.setItem("theme","dark"),o("dark"))}}," ","dark"===n?"\u2600\ufe0f":"\ud83c\udf19"),r.a.createElement("a",{className:"w3-bar-item"},"@",localStorage.getItem("loginid")),r.a.createElement("a",{className:"w3-bar-item w3-button",href:i.link},i.name),r.a.createElement("a",{className:"w3-bar-item w3-button",href:s.link},s.name)))};var k=function(e){return r.a.createElement("div",{className:"w3-pale-red w3-text-red w3-border w3-border-red w3-round-large",style:{padding:"1rem",marginTop:"1rem"}},e.message)};function I(e,t){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(m.a.mark((function e(t,a){var n,r,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(b+"/login",{loginid:t,password:a});case 2:return n=e.sent,console.log(n),e.next=6,n;case 6:if(r=e.sent,!(o=r.data).error){e.next=12;break}return e.abrupt("return",o.error);case 12:return console.log(o),localStorage.setItem("token",o.token),localStorage.setItem("refreshToken",o.refreshToken),localStorage.setItem("loginid",o.loginid),localStorage.setItem("user_id",o.user_id),e.abrupt("return",!0);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(m.a.mark((function e(){var t,a,n,r,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.prev=1,e.next=4,f.a.post(b+"/api/checkiftokenexpire",{},{headers:{Authorization:"Bearer "+t}});case 4:return a=e.sent,console.log(a),e.next=8,a;case 8:return n=e.sent,r=n.data,e.abrupt("return",r.success);case 13:if(e.prev=13,e.t0=e.catch(1),console.log("catch of check() "),o=localStorage.getItem("refreshToken")){e.next=20;break}return localStorage.removeItem("token"),e.abrupt("return",!1);case 20:return f.a.post(b+"/api/refreshtoken",{},{headers:{Authorization:"Bearer ".concat(o)}}).then((function(e){localStorage.setItem("token",e.data.token)})),e.abrupt("return",!0);case 22:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}var A=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={err:""},e.login=function(t){t.preventDefault(),I(document.getElementById("loginid").value,document.getElementById("password").value).then((function(t){!0===t?window.location="/":e.setState({err:t})}))},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){S().then((function(e){e&&(window.location="/")}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"w3-card-4",style:{margin:"2rem"}},r.a.createElement("div",{className:"w3-container w3-blue w3-center w3-xlarge"},"LOGIN"),r.a.createElement("div",{className:"w3-container"},this.state.err.length>0&&r.a.createElement(k,{message:"Check your form and try again! (".concat(this.state.err,")")}),r.a.createElement("form",{onSubmit:this.login},r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"loginid"},"Email"),r.a.createElement("input",{type:"text",className:"w3-input w3-border",id:"loginid"})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"w3-input w3-border",id:"password"})),r.a.createElement("p",null,r.a.createElement("button",{type:"submit",className:"w3-button w3-blue"},"Login")))))}}]),a}(n.Component),T=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={err:""},e.register=function(t){t.preventDefault(),f.a.post(b+"/tweets/register",{email:document.getElementById("email").value,loginid:document.getElementById("login-id").value,password:document.getElementById("password").value,first_name:document.getElementById("first-name").value,last_name:document.getElementById("last-name").value,contact:document.getElementById("contact").value}).then((function(t){t.data.error?e.setState({err:t.data.error}):window.location="/login"}))},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){S().then((function(e){e&&(window.location="/")}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"w3-card-4",style:{margin:"2rem"}},r.a.createElement("div",{className:"w3-container w3-blue w3-center w3-xlarge"},"REGISTER"),r.a.createElement("div",{className:"w3-container"},this.state.err.length>0&&r.a.createElement(k,{message:"Check your form and try again! (".concat(this.state.err,")")}),r.a.createElement("form",{onSubmit:this.register},r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"first-name"},"First Name"),r.a.createElement("input",{type:"text",class:"w3-input w3-border",id:"first-name"})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"last-name"},"Last Name"),r.a.createElement("input",{type:"text",class:"w3-input w3-border",id:"last-name"})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",class:"w3-input w3-border",id:"email"})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"login-id"},"Login ID"),r.a.createElement("input",{type:"text",class:"w3-input w3-border",id:"login-id"})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",class:"w3-input w3-border",id:"password"})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"contact"},"Contact"),r.a.createElement("input",{type:"text",class:"w3-input w3-border",id:"contact"})),r.a.createElement("p",null,r.a.createElement("button",{type:"submit",class:"w3-button w3-blue"},"Register"),this.state.register&&r.a.createElement("p",null,"You're registered!")))))}}]),a}(n.Component),x=a(37),j=a(2),O=a(40),B=a(19),L={content:"<p>I have to edit this!</p>",titleErr:"",contentErr:"",formErr:""};function D(e,t){L.content=e}var P=function(e){return r.a.createElement("div",{className:"replyTweet-Modal w3-animate-opacity",id:"replyTweet"+e.replyItem},r.a.createElement("div",{className:"replyTweet-Modal-content replyTweet-Modal-card"},r.a.createElement("header",{className:"replyTweet-Modal-container replyTweet-Modal-blue"},r.a.createElement("span",{className:"w3-button w3-display-topright w3-hover-none w3-hover-text-white",onClick:function(){document.getElementById("replyTweet"+e.replyItem).style.display="none"}},"X"),r.a.createElement("h2",null,"Retweet")),r.a.createElement("form",{className:"replyTweet-Modal-container",onSubmit:function(){return function(e){if(0!==L.content.length){var t=new FormData;t.append("retweet",L.content),t.append("loginid",localStorage.getItem("loginid")),f.a.post(b+"/retweet/"+e,t,{headers:{"Content-Type":"Application/json",Authorization:"Bearer "+localStorage.getItem("token"),"Cache-Control":"no-store, no-cache"}}).then((function(e){e.data.success}))}else L.contentErr="Add some data to the content!"}(e.replyItem)}},L.formErr.length>0&&r.a.createElement(k,{message:L.formErr}),r.a.createElement("div",{className:"w3-section"},r.a.createElement("p",null,r.a.createElement(B.Editor,{initialValue:"<p>Reply Tweet</p>",init:{height:300,menubar:!1,statusbar:!1,toolbar_mode:"sliding",plugins:["advlist autolink lists link image imagetools media emoticons preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic underline strikethrough | image anchor media |                                         alignleft aligncenter alignright alignjustify |                                         outdent indent | bulllist numlist | fullscreen preview | emoticons help",contextmenu:"bold italic underline indent outdent help"},onEditorChange:D}),r.a.createElement("small",{className:"w3-text-gray"},L.contentErr)),r.a.createElement("p",null,r.a.createElement("button",{type:"submit",className:"w3-button w3-blue"},"Retweet"))))))};var U=function(e){return r.a.createElement("div",{className:"w3-card w3-border w3-border-gray w3-round-large",style:{marginTop:"2rem"}},r.a.createElement("header",{className:"w3-container w3-opacity w3-light-gray",style:{padding:"1rem"}},"@",e.author,r.a.createElement("span",{style:{float:"right"}})),r.a.createElement("div",{className:"w3-container",style:{padding:"2rem"}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}})),r.a.createElement("footer",{className:"w3-container w3-center w3-large"}))};var F=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"w3-card w3-border w3-border-gray w3-round-large",style:{marginTop:"2rem"}},r.a.createElement("header",{className:"w3-container w3-opacity w3-light-gray",style:{padding:"1rem"}},"@",e.author,r.a.createElement("span",{style:{float:"right"}},!e.already_liked&&r.a.createElement("button",{className:"w3-button",style:{marginRight:"2rem"},onClick:function(){return function(e,t,a){var n=new FormData;n.append("tweet_id",e),n.append("already-liked",a),n.append("user_id",localStorage.getItem("user_id")),f.a.post(b+"/tweets/"+t+"/like",n,{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e.data)}))}(e.id,e.author,e.already_liked)}},"Like"),e.already_liked&&r.a.createElement("button",{className:"w3-button",style:{marginRight:"2rem"}},"Liked"),r.a.createElement("button",{className:"w3-button",style:{marginRight:"2rem"},onClick:function(){document.getElementById("replyTweet"+e.id).style.display="block"}},"Retweet"))),r.a.createElement("div",{className:"w3-container",style:{padding:"2rem"}},r.a.createElement("h2",{className:"w3-xxlarge"},r.a.createElement("span",{className:"w3-opacity"},e.title),e.isOwner&&r.a.createElement("button",{className:"w3-right w3-button w3-red w3-large w3-hover-pale-red w3-round-large",onClick:function(){return t=e.id,void f.a.delete(b+"/tweets/"+localStorage.getItem("loginid")+"/delete/"+t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){console.log(e.data),window.location.reload()}));var t}},"Delete")),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}})),r.a.createElement("footer",{className:"w3-container w3-center w3-large"},e.retweet.map((function(e,t){return r.a.createElement(U,{content:e.retweet_text,author:e.loginid})})))),r.a.createElement(P,{replyItem:e.id}))},_=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={content:"<p>I have to edit this!</p>",titleErr:"",contentErr:"",formErr:""},e.handleEditorChange=function(t,a){e.setState({content:t})},e.submitForm=function(t){t.preventDefault(),0!==e.state.content.length?0!==document.getElementById("title").value.length?f.a.post(b+"/tweets/"+localStorage.getItem("user_id")+"/add",{title:document.getElementById("title").value,tweet:e.state.content},{headers:{"Content-Type":"Application/json",Authorization:"Bearer "+localStorage.getItem("token"),"Cache-Control":"no-store, no-cache"}}).then((function(t){t.data.success?window.location.reload():e.setState({formErr:t.data.error})})):e.setState({titleErr:"Add a title!"}):e.setState({contentErr:"Add some data to the content!"})},e}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"w3-modal w3-animate-opacity",id:"addTweet"},r.a.createElement("div",{className:"w3-modal-content w3-card"},r.a.createElement("header",{className:"w3-container w3-blue"},r.a.createElement("span",{className:"w3-button w3-display-topright w3-hover-none w3-hover-text-white",onClick:function(){document.getElementById("addTweet").style.display="none"}},"X"),r.a.createElement("h2",null,"Add tweet")),r.a.createElement("form",{className:"w3-container",onSubmit:this.submitForm},this.state.formErr.length>0&&r.a.createElement(k,{message:this.state.formErr}),r.a.createElement("div",{className:"w3-section"},r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",className:"w3-input w3-border w3-margin-bottom"}),r.a.createElement("small",{className:"w3-text-gray"},this.state.titleErr)),r.a.createElement("p",null,r.a.createElement(B.Editor,{initialValue:"<p>Create Tweet</p>",init:{height:300,menubar:!1,statusbar:!1,toolbar_mode:"sliding",plugins:["advlist autolink lists link image imagetools media emoticons preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic underline strikethrough | image anchor media |                                         alignleft aligncenter alignright alignjustify |                                         outdent indent | bulllist numlist | fullscreen preview | emoticons help",contextmenu:"bold italic underline indent outdent help"},onEditorChange:this.handleEditorChange}),r.a.createElement("small",{className:"w3-text-gray"},this.state.contentErr)),r.a.createElement("p",null,r.a.createElement("button",{type:"submit",className:"w3-button w3-blue"},"Post"))))))}}]),a}(r.a.Component),R=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).testFunction=function(e){n.setState({tweets:Object(O.a)(e),currentUser:{username:""}})},n.getLoginId=function(e){n.state.userTweetsVisible=!0,n.state.selectedUsername=e,clearInterval(n.state.allAPIInterval),clearInterval(n.state.usernameAPIInterval),f.a.get(b+"/tweets/"+e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Access-Control-Allow-Headers":window.location.origin,"Cache-Control":"no-store, no-cache"}}).then((function(e){console.log("RESULT:",e.data.data),n.setState({tweets:e.data.data}),n.setState({currentUser:{username:localStorage.getItem("loginid")}})})),n.state.userTweetsVisible&&n.callUsernameAPIListener(e)},n.state={tweets:[],currentUser:{username:""},userTweetsVisible:!1,allAPIInterval:{},usernameAPIInterval:{},selectedUsername:""},n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.userTweetsVisible=!1,this.state.selectedUsername="",clearInterval(this.state.usernameAPIInterval),clearInterval(this.state.allAPIInterval),f.a.get(b+"/tweets/all",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Access-Control-Allow-Headers":window.location.origin,"Cache-Control":"no-store, no-cache"}}).then((function(t){e.setState({tweets:t.data.tweets}),e.setState({currentUser:{username:localStorage.getItem("loginid")}})})),this.state.userTweetsVisible||this.callAllAPIListener()}},{key:"callAllAPIListener",value:function(){var e=this;this.state.allAPIInterval=setInterval((function(){f.a.get(b+"/tweets/all",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Access-Control-Allow-Headers":window.location.origin,"Cache-Control":"no-store, no-cache"}}).then((function(t){console.log("sourabh",t.data.tweets),e.setState({currentUser:{username:localStorage.getItem("loginid")}}),e.setState({tweets:t.data.tweets})}))}),5e3)}},{key:"callUsernameAPIListener",value:function(e){var t=this;this.state.usernameAPIInterval=setInterval((function(){f.a.get(b+"/tweets/"+e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Access-Control-Allow-Headers":window.location.origin,"Cache-Control":"no-store, no-cache"}}).then((function(e){t.setState({currentUser:{username:localStorage.getItem("loginid")}}),t.setState({tweets:e.data.data})}))}),5e3)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w3-bar-item"},r.a.createElement(v,{loginData:this.getLoginId})),r.a.createElement("div",{className:"w3-container w3-jumbo",style:{margin:"3rem",paddingLeft:"1rem"}},r.a.createElement("h1",null,"Tweets"),r.a.createElement("button",{className:"w3-button w3-blue w3-large",onClick:function(){document.getElementById("addTweet").style.display="block"}},"Add tweet")),r.a.createElement(_,null),""!==this.state.selectedUsername&&r.a.createElement("div",null,r.a.createElement("p",{className:"w3-xlarge w3-opacity"},"Showing Comments for ",this.state.selectedUsername),r.a.createElement("button",{className:"w3-button w3-blue w3-large",onClick:function(){e.componentDidMount()}},"Clear User Tweets")),r.a.createElement("div",{className:"w3-container"},this.state.tweets.length<1?r.a.createElement("p",{className:"w3-xlarge ",style:{marginLeft:"2rem"}},"No tweets! Create one"):this.state.tweets.map((function(t,a){return r.a.createElement(F,{id:t.id,title:t.title,content:t.tweet,author:t.loginid,isOwner:e.state.currentUser.username===t.loginid,already_liked:t.already_liked,key:a,retweet:t.retweet})}))))}}]),a}(r.a.Component),z=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"componentDidMount",value:function(){!function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token");f.a.post(b+"/api/logout/access",{},{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){e.data.error?console.error(e.data.error):localStorage.removeItem("token")}))}if(localStorage.getItem("refreshToken")){var t=localStorage.getItem("refreshToken");f.a.post(b+"/api/logout/refresh",{},{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){e.data.error?console.error(e.data.error):localStorage.removeItem("refreshToken")}))}localStorage.clear(),setTimeout((function(){return window.location="/"}),500)}()}},{key:"render",value:function(){return r.a.createElement("div",{className:"w3-container w3-xlarge"},r.a.createElement("p",null,"Please wait, logging you out..."))}}]),a}(r.a.Component),M=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={currentSetting:"main",err:""},e.changePassword=function(t){t.preventDefault();var a=new FormData;a.append("new-password",document.getElementById("npassword").value),f.a.put(b+"/tweets/"+localStorage.getItem("loginid")+"/forgot",a,{headers:{"Content-Type":"Application/json",Authorization:"Bearer "+localStorage.getItem("token"),"Cache-Control":"no-store, no-cache"}}).then((function(t){t.data.msg?(localStorage.clear(),window.location="/logout"):e.setState({formErr:t.data.error})}))},e.deleteAccount=function(e){e.preventDefault(),window.confirm("Are you sure you want to delete your account? THIS CANNOT BE UNDONE. ALL OF YOUR POSTS WILL BE DELETED")&&f.a.delete(b+"/deleteAccount",{headers:{"Content-Type":"Application/json",Authorization:"Bearer "+localStorage.getItem("token"),"Cache-Control":"no-store, no-cache"}}).then((function(e){e.data.error?alert("An error occurred: "+e.data.error):(alert("Your account has been deleted. We're sad to see you go :(. Now, anyone can sign up with your username. Logging you out..."),window.location="/logout")}))},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("token")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"w3-container",style:{margin:"3rem"}},r.a.createElement("div",{className:"w3-card w3-border w3-round-large"},r.a.createElement("header",{className:"w3-container w3-xlarge w3-blue",style:{padding:"0.5rem",paddingLeft:"3rem"}},"Settings"),r.a.createElement("div",{className:"w3-container"},this.state.err.length>0&&r.a.createElement(k,{message:this.state.err}),"main"===this.state.currentSetting&&r.a.createElement("div",{style:{margin:"1rem"}},r.a.createElement("h1",{className:"w3-xxlarge"},"Settings"),r.a.createElement("hr",{className:"w3-border-top w3-border-black"}),r.a.createElement("p",null,"Choose a setting from below:"),r.a.createElement("ul",{className:"w3-ul w3-border w3-hoverable"},r.a.createElement("li",{onClick:function(){return e.setState({currentSetting:"cpwd"})},style:{cursor:"pointer"},className:"w3-hover-light-gray"},"Change password"),r.a.createElement("li",{onClick:function(){return e.setState({currentSetting:"del"})},style:{cursor:"pointer"},className:"w3-text-red w3-hover-pale-red w3-hover-text-red"},"Delete account"))),"cpwd"===this.state.currentSetting&&r.a.createElement("div",{style:{margin:"1rem"}},r.a.createElement("h1",{className:"w3-xxlarge"},"Change password"),r.a.createElement("hr",{className:"w3-border-top w3-border-black"}),r.a.createElement("button",{className:"w3-button w3-blue",onClick:function(){return e.setState({currentSetting:"main"})}},"\xab Back"),r.a.createElement("form",{onSubmit:this.changePassword},r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"npassword"},"New password"),r.a.createElement("input",{type:"password",id:"npassword",className:"w3-input w3-border"})),r.a.createElement("p",null,r.a.createElement("button",{type:"submit",className:"w3-button w3-blue"},"Submit")))),"del"===this.state.currentSetting&&r.a.createElement("div",{style:{margin:"1rem"}},r.a.createElement("h1",{className:"w3-xxlarge w3-text-red"},"Delete account"),r.a.createElement("hr",{className:"w3-border-top w3-border-black"}),r.a.createElement("button",{className:"w3-button w3-blue",onClick:function(){return e.setState({currentSetting:"main"})}},"\xab Back"),r.a.createElement("p",null,r.a.createElement("button",{className:"w3-button w3-red w3-large",onClick:this.deleteAccount},"DELETE ACCOUNT"))))))}}]),a}(r.a.Component);var V=function(){return r.a.createElement("div",{className:"w3-container w3-center",style:{margin:"3rem"}},r.a.createElement("h1",{className:"w3-jumbo"},"404"),r.a.createElement("p",{className:"w3-xxlarge"},"The page you were searching for was not found. Double check your URL and try again"),r.a.createElement("button",{type:"button",className:"w3-button w3-blue",onClick:function(){return window.location="/"}},"\xab Back"))};a(71),a(72);var H=function(){var e=r.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1];return S().then((function(e){n(e)})),r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/",exact:!0},a?r.a.createElement(R,null):r.a.createElement(i,null)),r.a.createElement(j.a,{path:"/login",exact:!0,component:A}),r.a.createElement(j.a,{path:"/register",exact:!0,component:T}),r.a.createElement(j.a,{path:"/logout",exact:!0,component:z}),r.a.createElement(j.a,{path:"/settings",exact:!0,component:M}),r.a.createElement(j.a,{path:"/search",exact:!0,component:y}),r.a.createElement(j.a,{component:V}))))};l.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.ef2b0fc3.chunk.js.map