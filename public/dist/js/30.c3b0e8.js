(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{46:function(e,t,r){"use strict";r.r(t);var s=r(0),a=r.n(s),o=r(4),i=r.n(o),n=r(2);function l(e,t,r,s,a,o,i){try{var n=e[o](i),l=n.value}catch(e){return void r(e)}n.done?t(l):Promise.resolve(l).then(s,a)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={name:"RegisterPage",layout:"wide",middleware:"guest",metaInfo:function(){return{title:"Sign Up"}},data:function(){return{studentRole:!1,lecturerRole:!1,hidePassword:!0,passwordType:"password",form:new i.a({role:"Student",first_name:"",last_name:"",email:"",password:""}),mustVerifyEmail:!1}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({role:function(){return"Student"===this.form.role?{img:{top:"/images/register-top-student.png",midLeft:"/images/register-mid-left-student.png",midRight:"/images/login-mid-right-student.png"},class:{midImage:""},text:"Expand Your Careers."}:{img:{top:"/images/login-top-lecturer.png",midLeft:"/images/login-mid-left-1-lecturer.png",midRight:"/images/login-mid-right-lecturer.png"},class:{midImage:"row-reverse"},text:"Project for Everyone"}}},Object(n.b)({snackbar:"notification/snackbar"})),methods:{register:function(){var e,t=this;return(e=a.a.mark((function e(){var r,s,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.post("/api/register");case 2:if(r=e.sent,!(s=r.data).status){e.next=10;break}t.mustVerifyEmail=!0,t.snackbar.open(s.status),t.$router.push({name:"verification.check",params:{email:t.form.email}}),e.next=18;break;case 10:return e.next=12,t.form.post("/api/login");case 12:return o=e.sent,i=o.data.token,t.$store.dispatch("auth/saveToken",{token:i}),e.next=17,t.$store.dispatch("auth/updateUser",{user:s});case 17:t.$router.push({name:"index"});case 18:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(s,a){var o=e.apply(t,r);function i(e){l(o,s,a,i,n,"next",e)}function n(e){l(o,s,a,i,n,"throw",e)}i(void 0)}))})()},chooseStudent:function(){this.studentRole=!0,this.lecturerRole=!1,this.form.role="Student"},chooseLecturer:function(){this.lecturerRole=!0,this.studentRole=!1,this.form.role="Lecturer"},togglePassword:function(){this.hidePassword=!this.hidePassword,this.passwordType=this.hidePassword?"password":"text"}}},u=r(1),p=Object(u.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register-page--container",class:{"lecturer-bg":e.lecturerRole}},[e.$matchMedia.xl?r("div",{staticClass:"desktop-login__left--container"},[r("div",[r("img",{staticClass:"desktop-register__left--img desktop-register__left-top--img",attrs:{src:e.role.img.top,alt:""}})]),e._v(" "),r("div",{staticClass:"flex-row space-between mt-1_5",class:e.role.class.midImage},[r("div",{staticClass:"flex-column space-between h100"},[r("img",{staticClass:"desktop-register__left--img desktop-register__left-mid-small--img",attrs:{src:e.role.img.midLeft,alt:""}})]),e._v(" "),r("img",{staticClass:"desktop-register__left--img desktop-register__left-mid-big--img ",attrs:{src:e.role.img.midRight,alt:""}})]),e._v(" "),r("div",[r("h2",{staticClass:"desktop-login__left--h2 mt-1_5"},[e._v("\n        "+e._s(e.role.text)+"\n      ")])])]):r("div",{staticClass:"login-page--logo"},[r("router-link",{attrs:{to:{name:"index"}}},[r("img",{attrs:{src:"/images/logo.svg",alt:""}})])],1),e._v(" "),r("div",{staticClass:"resgiter-form--container"},[r("div",{staticClass:"login-role--container"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.role,expression:"form.role"}],staticClass:"login-radio",attrs:{id:"login-student",type:"radio",value:"Student",name:"role"},domProps:{checked:e._q(e.form.role,"Student")},on:{change:function(t){return e.$set(e.form,"role","Student")}}}),e._v(" "),r("label",{staticClass:"login-radio--label",attrs:{for:"login-student"},on:{click:e.chooseStudent}},[e._v("Freelancer")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.role,expression:"form.role"}],staticClass:"login-radio",attrs:{id:"login-lecturer",type:"radio",value:"Lecturer",name:"role"},domProps:{checked:e._q(e.form.role,"Lecturer")},on:{change:function(t){return e.$set(e.form,"role","Lecturer")}}}),e._v(" "),r("label",{staticClass:"login-radio--label",attrs:{for:"login-lecturer"},on:{click:e.chooseLecturer}},[e._v("Recruiter")])])]),e._v(" "),e.$matchMedia.xl?r("div",{staticClass:"separator mt-1_5 mb-2"},[e._v("\n      Sign Up\n    ")]):r("div",{staticClass:"role--choose-effect",class:{"role--student":e.studentRole,"role--lecturer":e.lecturerRole}}),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.register.apply(null,arguments)},keydown:function(t){return e.form.onKeydown(t)}}},[r("div",{staticClass:"form__input--group"},[r("div",{staticClass:"form-group__container"},[r("h4",{staticClass:"form-group__input-name"},[e._v("\n            First Name\n          ")]),e._v(" "),r("div",{},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.first_name,expression:"form.first_name"}],staticClass:"form-group__input-text",class:{"is-invalid":e.form.errors.has("first_name")},attrs:{type:"text",name:"first_name",placeholder:"e.g., John",required:""},domProps:{value:e.form.first_name},on:{input:function(t){t.target.composing||e.$set(e.form,"first_name",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"first_name"}})],1)]),e._v(" "),r("div",{staticClass:"form-group__container"},[r("h4",{staticClass:"form-group__input-name"},[e._v("\n            Last Name\n          ")]),e._v(" "),r("div",{},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.last_name,expression:"form.last_name"}],staticClass:"form-group__input-text",class:{"is-invalid":e.form.errors.has("last_name")},attrs:{type:"text",name:"last_name",placeholder:"e.g., Doe",required:""},domProps:{value:e.form.last_name},on:{input:function(t){t.target.composing||e.$set(e.form,"last_name",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"last_name"}})],1)])]),e._v(" "),r("div",{staticClass:"form-group__container"},[r("h4",{staticClass:"form-group__input-name"},[e._v("\n          Email\n        ")]),e._v(" "),r("div",{},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-group__input-text",class:{"is-invalid":e.form.errors.has("email")},attrs:{type:"email",name:"email",placeholder:"e.g., johndoe@example.ac.id",autocomplete:"username",required:""},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"email"}})],1)]),e._v(" "),r("div",{staticClass:"form-group__container"},[r("h4",{staticClass:"form-group__input-name"},[e._v("\n          Password\n        ")]),e._v(" "),r("div",{},[r("div",{staticClass:"login-input--container"},[r("div",{staticClass:"right-tag__group"},["checkbox"===e.passwordType?r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"right-tag__input right-tag__input--form",class:{"is-invalid":e.form.errors.has("password")},attrs:{name:"password",placeholder:"e.g., th!51sjh0nD03N0tj@n3D03",autocomplete:"current-password",required:"",type:"checkbox"},domProps:{checked:Array.isArray(e.form.password)?e._i(e.form.password,null)>-1:e.form.password},on:{change:function(t){var r=e.form.password,s=t.target,a=!!s.checked;if(Array.isArray(r)){var o=e._i(r,null);s.checked?o<0&&e.$set(e.form,"password",r.concat([null])):o>-1&&e.$set(e.form,"password",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.form,"password",a)}}}):"radio"===e.passwordType?r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"right-tag__input right-tag__input--form",class:{"is-invalid":e.form.errors.has("password")},attrs:{name:"password",placeholder:"e.g., th!51sjh0nD03N0tj@n3D03",autocomplete:"current-password",required:"",type:"radio"},domProps:{checked:e._q(e.form.password,null)},on:{change:function(t){return e.$set(e.form,"password",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"right-tag__input right-tag__input--form",class:{"is-invalid":e.form.errors.has("password")},attrs:{name:"password",placeholder:"e.g., th!51sjh0nD03N0tj@n3D03",autocomplete:"current-password",required:"",type:e.passwordType},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.hidePassword,expression:"hidePassword"}],staticClass:"pointer right-tag",on:{click:e.togglePassword}},[r("span",{staticClass:"iconify password__hide-icon",attrs:{"data-icon":"carbon:view-off-filled",width:"20",height:"20"}})]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.hidePassword,expression:"!hidePassword"}],staticClass:"pointer right-tag",on:{click:e.togglePassword}},[r("span",{staticClass:"iconify password__hide-icon ",attrs:{"data-icon":"carbon:view-filled",width:"20",height:"20"}})])]),e._v(" "),r("has-error",{attrs:{form:e.form,field:"password"}})],1),e._v(" "),r("p",{staticClass:"form-group__input-info"},[e._v("\n            Min. 8 characters with mix of letters, numbers & symbols\n          ")]),e._v(" "),r("has-error",{attrs:{form:e.form,field:"password"}})],1)]),e._v(" "),r("div",{},[r("v-button",{staticClass:"login-submit--button",class:{"is-lecturer":e.lecturerRole},attrs:{loading:e.form.busy}},[e._v("\n          Sign Up\n        ")])],1)]),e._v(" "),r("div",{staticClass:"register-extra"},[r("p",[e._v("\n        Already had an account?\n        "),r("router-link",{staticClass:"login-link",attrs:{to:{name:"login"}}},[r("b",[e._v("Sign In")])])],1)])])])}),[],!1,null,null,null);t.default=p.exports}}]);