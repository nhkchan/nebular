(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"4Ssn":function(n,l,e){"use strict";var t=e("CcnG");e("S+eJ"),e.d(l,"d",function(){return i}),e.d(l,"h",function(){return u}),e.d(l,"a",function(){return a}),e.d(l,"e",function(){return s}),e.d(l,"c",function(){return r}),e.d(l,"g",function(){return c}),e.d(l,"b",function(){return b}),e.d(l,"f",function(){return o});var i=t.vb({encapsulation:2,styles:[],data:{}});function u(n){return t.Rb(0,[t.Gb(null,0)],null,null)}var a=t.vb({encapsulation:2,styles:[],data:{}});function s(n){return t.Rb(0,[t.Gb(null,0)],null,null)}var r=t.vb({encapsulation:2,styles:[],data:{}});function c(n){return t.Rb(0,[t.Gb(null,0)],null,null)}var b=t.vb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"]],data:{}});function o(n){return t.Rb(0,[t.Gb(null,0),t.Gb(null,1),t.Gb(null,2),t.Gb(null,3)],null,null)}},FuSZ:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(n,l,e,t){this.sanitizer=n,this.iconLibrary=l,this.el=e,this.renderer=t,this.prevClasses=[],this.html=""}return Object.defineProperty(n.prototype,"primary",{get:function(){return"primary"===this.status},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"info",{get:function(){return"info"===this.status},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"success",{get:function(){return"success"===this.status},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"warning",{get:function(){return"warning"===this.status},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"danger",{get:function(){return"danger"===this.status},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"config",{get:function(){return this._config},set:function(n){n&&(this._config=n,"string"==typeof n?this.icon=n:(this.icon=n.icon,this.pack=n.pack,this.status=n.status,this.options=n.options))},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){this.iconDef=this.renderIcon(this.icon,this.pack,this.options)},n.prototype.ngOnChanges=function(){this.iconDef&&(this.iconDef=this.renderIcon(this.icon,this.pack,this.options))},n.prototype.renderIcon=function(n,l,e){var t=this.iconLibrary.getIcon(n,l),i=t.icon.getContent(e);return i&&(this.html=this.sanitizer.bypassSecurityTrustHtml(i)),this.assignClasses(t.icon.getClasses(e)),t},n.prototype.assignClasses=function(n){var l=this;this.prevClasses.forEach(function(n){l.renderer.removeClass(l.el.nativeElement,n)}),n.forEach(function(n){l.renderer.addClass(l.el.nativeElement,n)}),this.prevClasses=n},n}()},HtId:function(n,l,e){"use strict";var t=e("CcnG");e("FuSZ"),e("ZYjt"),e("NFr4"),e.d(l,"a",function(){return i}),e.d(l,"b",function(){return u});var i=t.vb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:inline-block}"]],data:{}});function u(n){return t.Rb(2,[],null,null)}},Lhf3:function(n,l,e){"use strict";var t=e("CcnG");e("b9/t"),e.d(l,"a",function(){return i}),e.d(l,"b",function(){return u});var i=t.vb({encapsulation:0,styles:[["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;text-align:center;text-decoration:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{text-decoration:none}.full-width[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]     nb-icon{vertical-align:top}[dir=ltr]   .icon-start[_nghost-%COMP%]:not(.icon-end)     nb-icon{margin-right:.75rem}[dir=rtl]   .icon-start[_nghost-%COMP%]:not(.icon-end)     nb-icon{margin-left:.75rem}[dir=ltr]   .icon-end[_nghost-%COMP%]:not(.icon-start)     nb-icon{margin-left:.75rem}[dir=rtl]   .icon-end[_nghost-%COMP%]:not(.icon-start)     nb-icon{margin-right:.75rem}.transitions[_nghost-%COMP%]{-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:background-color,border-color,color,-webkit-box-shadow;transition-property:background-color,border-color,box-shadow,color,-webkit-box-shadow;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}"]],data:{}});function u(n){return t.Rb(2,[t.Gb(null,0)],null,null)}},d1SV:function(n,l,e){"use strict";var t=e("CcnG");e("k3KB"),e.d(l,"a",function(){return i}),e.d(l,"b",function(){return u});var i=t.vb({encapsulation:0,styles:[["[_nghost-%COMP%]{position:absolute;text-align:center;white-space:nowrap;vertical-align:baseline}.position-top[_nghost-%COMP%]{top:0}.position-right[_nghost-%COMP%]{right:0}.position-bottom[_nghost-%COMP%]{bottom:0}.position-left[_nghost-%COMP%]{left:0}[dir=ltr]   .position-start[_nghost-%COMP%]{left:0}[dir=rtl]   .position-start[_nghost-%COMP%]{right:0}[dir=ltr]   .position-end[_nghost-%COMP%]{right:0}[dir=rtl]   .position-end[_nghost-%COMP%]{left:0}"]],data:{}});function u(n){return t.Rb(0,[(n()(),t.Pb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.component.text)})}},hTEy:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),i=function(){return function(){}}(),u=e("pMnS"),a=e("7s4d"),s=e("4Ssn"),r=e("S+eJ"),c=e("Lhf3"),b=e("1Ei1"),o=e("b9/t"),p=function(){function n(){this.loading=!1}return n.prototype.toggleLoadingAnimation=function(){var n=this;this.loading=!0,setTimeout(function(){return n.loading=!1},3e3)},n}(),d=t.vb({encapsulation:2,styles:[],data:{}});function g(n){return t.Rb(0,[(n()(),t.xb(0,0,null,null,19,"nb-card",[["accent","primary"]],[[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,s.f,s.b)),t.wb(1,49152,null,0,r.b,[],{accent:[0,"accent"]},null),(n()(),t.xb(2,0,null,1,17,"nb-card-body",[["class","example-items-rows"]],null,null,null,s.e,s.a)),t.wb(3,49152,null,0,r.a,[],null,null),(n()(),t.xb(4,16777216,null,0,3,"button",[["nbButton",""],["nbSpinnerMessage",""],["nbSpinnerSize","large"],["nbSpinnerStatus","success"],["status","success"]],[[2,"nb-spinner-container",null],[2,"appearance-filled",null],[2,"appearance-outline",null],[2,"appearance-ghost",null],[2,"appearance-hero",null],[2,"full-width",null],[1,"aria-disabled",0],[2,"btn-disabled",null],[1,"tabindex",0],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"shape-rectangle",null],[2,"shape-round",null],[2,"shape-semi-round",null],[2,"icon-start",null],[2,"icon-end",null],[2,"transitions",null]],[[null,"click"]],function(n,l,e){var i=!0,u=n.component;return"click"===l&&(i=!1!==t.Hb(n,6).onClick(e)&&i),"click"===l&&(i=!1!==u.toggleLoadingAnimation()&&i),i},c.b,c.a)),t.wb(5,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerMessage:[0,"spinnerMessage"],spinnerStatus:[1,"spinnerStatus"],spinnerSize:[2,"spinnerSize"],nbSpinner:[3,"nbSpinner"]},null),t.wb(6,4243456,null,0,o.a,[t.G,t.k,t.h],{status:[0,"status"]},null),(n()(),t.Pb(-1,0,[" Download "])),(n()(),t.xb(8,16777216,null,0,3,"button",[["nbButton",""],["nbSpinnerMessage",""],["nbSpinnerSize","large"],["nbSpinnerStatus","warning"],["status","warning"]],[[2,"nb-spinner-container",null],[2,"appearance-filled",null],[2,"appearance-outline",null],[2,"appearance-ghost",null],[2,"appearance-hero",null],[2,"full-width",null],[1,"aria-disabled",0],[2,"btn-disabled",null],[1,"tabindex",0],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"shape-rectangle",null],[2,"shape-round",null],[2,"shape-semi-round",null],[2,"icon-start",null],[2,"icon-end",null],[2,"transitions",null]],[[null,"click"]],function(n,l,e){var i=!0,u=n.component;return"click"===l&&(i=!1!==t.Hb(n,10).onClick(e)&&i),"click"===l&&(i=!1!==u.toggleLoadingAnimation()&&i),i},c.b,c.a)),t.wb(9,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerMessage:[0,"spinnerMessage"],spinnerStatus:[1,"spinnerStatus"],spinnerSize:[2,"spinnerSize"],nbSpinner:[3,"nbSpinner"]},null),t.wb(10,4243456,null,0,o.a,[t.G,t.k,t.h],{status:[0,"status"]},null),(n()(),t.Pb(-1,0,[" Download "])),(n()(),t.xb(12,16777216,null,0,3,"button",[["nbButton",""],["nbSpinnerMessage",""],["nbSpinnerSize","large"],["nbSpinnerStatus","danger"],["status","danger"]],[[2,"nb-spinner-container",null],[2,"appearance-filled",null],[2,"appearance-outline",null],[2,"appearance-ghost",null],[2,"appearance-hero",null],[2,"full-width",null],[1,"aria-disabled",0],[2,"btn-disabled",null],[1,"tabindex",0],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"shape-rectangle",null],[2,"shape-round",null],[2,"shape-semi-round",null],[2,"icon-start",null],[2,"icon-end",null],[2,"transitions",null]],[[null,"click"]],function(n,l,e){var i=!0,u=n.component;return"click"===l&&(i=!1!==t.Hb(n,14).onClick(e)&&i),"click"===l&&(i=!1!==u.toggleLoadingAnimation()&&i),i},c.b,c.a)),t.wb(13,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerMessage:[0,"spinnerMessage"],spinnerStatus:[1,"spinnerStatus"],spinnerSize:[2,"spinnerSize"],nbSpinner:[3,"nbSpinner"]},null),t.wb(14,4243456,null,0,o.a,[t.G,t.k,t.h],{status:[0,"status"]},null),(n()(),t.Pb(-1,0,[" Download "])),(n()(),t.xb(16,16777216,null,0,3,"button",[["nbButton",""],["nbSpinnerMessage",""],["nbSpinnerSize","large"],["nbSpinnerStatus","info"],["status","info"]],[[2,"nb-spinner-container",null],[2,"appearance-filled",null],[2,"appearance-outline",null],[2,"appearance-ghost",null],[2,"appearance-hero",null],[2,"full-width",null],[1,"aria-disabled",0],[2,"btn-disabled",null],[1,"tabindex",0],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"shape-rectangle",null],[2,"shape-round",null],[2,"shape-semi-round",null],[2,"icon-start",null],[2,"icon-end",null],[2,"transitions",null]],[[null,"click"]],function(n,l,e){var i=!0,u=n.component;return"click"===l&&(i=!1!==t.Hb(n,18).onClick(e)&&i),"click"===l&&(i=!1!==u.toggleLoadingAnimation()&&i),i},c.b,c.a)),t.wb(17,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerMessage:[0,"spinnerMessage"],spinnerStatus:[1,"spinnerStatus"],spinnerSize:[2,"spinnerSize"],nbSpinner:[3,"nbSpinner"]},null),t.wb(18,4243456,null,0,o.a,[t.G,t.k,t.h],{status:[0,"status"]},null),(n()(),t.Pb(-1,0,[" Download "]))],function(n,l){var e=l.component;n(l,1,0,"primary"),n(l,5,0,"","success","large",e.loading),n(l,6,0,"success"),n(l,9,0,"","warning","large",e.loading),n(l,10,0,"warning"),n(l,13,0,"","danger","large",e.loading),n(l,14,0,"danger"),n(l,17,0,"","info","large",e.loading),n(l,18,0,"info")},function(n,l){n(l,0,1,[t.Hb(l,1).tiny,t.Hb(l,1).small,t.Hb(l,1).medium,t.Hb(l,1).large,t.Hb(l,1).giant,t.Hb(l,1).primary,t.Hb(l,1).info,t.Hb(l,1).success,t.Hb(l,1).warning,t.Hb(l,1).danger,t.Hb(l,1).hasAccent,t.Hb(l,1).primaryAccent,t.Hb(l,1).infoAccent,t.Hb(l,1).successAccent,t.Hb(l,1).warningAccent,t.Hb(l,1).dangerAccent]),n(l,4,1,[t.Hb(l,5).isSpinnerExist,t.Hb(l,6).filled,t.Hb(l,6).outline,t.Hb(l,6).ghost,t.Hb(l,6).hero,t.Hb(l,6).fullWidth,t.Hb(l,6).disabled,t.Hb(l,6).disabled,t.Hb(l,6).tabbable,t.Hb(l,6).tiny,t.Hb(l,6).small,t.Hb(l,6).medium,t.Hb(l,6).large,t.Hb(l,6).giant,t.Hb(l,6).primary,t.Hb(l,6).info,t.Hb(l,6).success,t.Hb(l,6).warning,t.Hb(l,6).danger,t.Hb(l,6).rectangle,t.Hb(l,6).round,t.Hb(l,6).semiRound,t.Hb(l,6).iconLeft,t.Hb(l,6).iconRight,t.Hb(l,6).transitions]),n(l,8,1,[t.Hb(l,9).isSpinnerExist,t.Hb(l,10).filled,t.Hb(l,10).outline,t.Hb(l,10).ghost,t.Hb(l,10).hero,t.Hb(l,10).fullWidth,t.Hb(l,10).disabled,t.Hb(l,10).disabled,t.Hb(l,10).tabbable,t.Hb(l,10).tiny,t.Hb(l,10).small,t.Hb(l,10).medium,t.Hb(l,10).large,t.Hb(l,10).giant,t.Hb(l,10).primary,t.Hb(l,10).info,t.Hb(l,10).success,t.Hb(l,10).warning,t.Hb(l,10).danger,t.Hb(l,10).rectangle,t.Hb(l,10).round,t.Hb(l,10).semiRound,t.Hb(l,10).iconLeft,t.Hb(l,10).iconRight,t.Hb(l,10).transitions]),n(l,12,1,[t.Hb(l,13).isSpinnerExist,t.Hb(l,14).filled,t.Hb(l,14).outline,t.Hb(l,14).ghost,t.Hb(l,14).hero,t.Hb(l,14).fullWidth,t.Hb(l,14).disabled,t.Hb(l,14).disabled,t.Hb(l,14).tabbable,t.Hb(l,14).tiny,t.Hb(l,14).small,t.Hb(l,14).medium,t.Hb(l,14).large,t.Hb(l,14).giant,t.Hb(l,14).primary,t.Hb(l,14).info,t.Hb(l,14).success,t.Hb(l,14).warning,t.Hb(l,14).danger,t.Hb(l,14).rectangle,t.Hb(l,14).round,t.Hb(l,14).semiRound,t.Hb(l,14).iconLeft,t.Hb(l,14).iconRight,t.Hb(l,14).transitions]),n(l,16,1,[t.Hb(l,17).isSpinnerExist,t.Hb(l,18).filled,t.Hb(l,18).outline,t.Hb(l,18).ghost,t.Hb(l,18).hero,t.Hb(l,18).fullWidth,t.Hb(l,18).disabled,t.Hb(l,18).disabled,t.Hb(l,18).tabbable,t.Hb(l,18).tiny,t.Hb(l,18).small,t.Hb(l,18).medium,t.Hb(l,18).large,t.Hb(l,18).giant,t.Hb(l,18).primary,t.Hb(l,18).info,t.Hb(l,18).success,t.Hb(l,18).warning,t.Hb(l,18).danger,t.Hb(l,18).rectangle,t.Hb(l,18).round,t.Hb(l,18).semiRound,t.Hb(l,18).iconLeft,t.Hb(l,18).iconRight,t.Hb(l,18).transitions])})}function H(n){return t.Rb(0,[(n()(),t.xb(0,0,null,null,1,"nb-app-spinner-button",[],null,null,null,g,d)),t.wb(1,49152,null,0,p,[],null,null)],null,null)}var m=t.tb("nb-app-spinner-button",p,H,{},{},[]),f=function(){function n(){this.loading=!1}return n.prototype.toggleLoadingAnimation=function(){var n=this;this.loading=!0,setTimeout(function(){return n.loading=!1},3e3)},n}(),y=t.vb({encapsulation:2,styles:[],data:{}});function h(n){return t.Rb(0,[(n()(),t.xb(0,16777216,null,null,12,"nb-card",[["accent","danger"],["nbSpinnerMessage",""],["nbSpinnerSize","large"],["nbSpinnerStatus","danger"],["size","xsmall"]],[[2,"nb-spinner-container",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,s.f,s.b)),t.wb(1,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerMessage:[0,"spinnerMessage"],spinnerStatus:[1,"spinnerStatus"],spinnerSize:[2,"spinnerSize"],nbSpinner:[3,"nbSpinner"]},null),t.wb(2,49152,null,0,r.b,[],{size:[0,"size"],accent:[1,"accent"]},null),(n()(),t.xb(3,0,null,0,2,"nb-card-header",[],null,null,null,s.h,s.d)),t.wb(4,49152,null,0,r.d,[],null,null),(n()(),t.Pb(-1,0,["Spinners"])),(n()(),t.xb(6,0,null,1,6,"nb-card-body",[],null,null,null,s.e,s.a)),t.wb(7,49152,null,0,r.a,[],null,null),(n()(),t.xb(8,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Pb(-1,null,[" A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object. "])),(n()(),t.xb(10,0,null,0,2,"button",[["nbButton",""],["size","small"],["status","info"]],[[2,"appearance-filled",null],[2,"appearance-outline",null],[2,"appearance-ghost",null],[2,"appearance-hero",null],[2,"full-width",null],[1,"aria-disabled",0],[2,"btn-disabled",null],[1,"tabindex",0],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"shape-rectangle",null],[2,"shape-round",null],[2,"shape-semi-round",null],[2,"icon-start",null],[2,"icon-end",null],[2,"transitions",null]],[[null,"click"]],function(n,l,e){var i=!0,u=n.component;return"click"===l&&(i=!1!==t.Hb(n,11).onClick(e)&&i),"click"===l&&(i=!1!==u.toggleLoadingAnimation()&&i),i},c.b,c.a)),t.wb(11,4243456,null,0,o.a,[t.G,t.k,t.h],{size:[0,"size"],status:[1,"status"]},null),(n()(),t.Pb(-1,0,["Reload"]))],function(n,l){n(l,1,0,"","danger","large",l.component.loading),n(l,2,0,"xsmall","danger"),n(l,11,0,"small","info")},function(n,l){n(l,0,1,[t.Hb(l,1).isSpinnerExist,t.Hb(l,2).tiny,t.Hb(l,2).small,t.Hb(l,2).medium,t.Hb(l,2).large,t.Hb(l,2).giant,t.Hb(l,2).primary,t.Hb(l,2).info,t.Hb(l,2).success,t.Hb(l,2).warning,t.Hb(l,2).danger,t.Hb(l,2).hasAccent,t.Hb(l,2).primaryAccent,t.Hb(l,2).infoAccent,t.Hb(l,2).successAccent,t.Hb(l,2).warningAccent,t.Hb(l,2).dangerAccent]),n(l,10,1,[t.Hb(l,11).filled,t.Hb(l,11).outline,t.Hb(l,11).ghost,t.Hb(l,11).hero,t.Hb(l,11).fullWidth,t.Hb(l,11).disabled,t.Hb(l,11).disabled,t.Hb(l,11).tabbable,t.Hb(l,11).tiny,t.Hb(l,11).small,t.Hb(l,11).medium,t.Hb(l,11).large,t.Hb(l,11).giant,t.Hb(l,11).primary,t.Hb(l,11).info,t.Hb(l,11).success,t.Hb(l,11).warning,t.Hb(l,11).danger,t.Hb(l,11).rectangle,t.Hb(l,11).round,t.Hb(l,11).semiRound,t.Hb(l,11).iconLeft,t.Hb(l,11).iconRight,t.Hb(l,11).transitions])})}function S(n){return t.Rb(0,[(n()(),t.xb(0,0,null,null,1,"nb-app-spinner-card",[],null,null,null,h,y)),t.wb(1,49152,null,0,f,[],null,null)],null,null)}var w=t.tb("nb-app-spinner-card",f,S,{},{},[]),z=function(){return function(){}}(),x=t.vb({encapsulation:2,styles:[],data:{}});function A(n){return t.Rb(2,[(n()(),t.xb(0,16777216,null,null,5,"nb-card",[["nbSpinnerStatus","primary"]],[[2,"nb-spinner-container",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,s.f,s.b)),t.wb(1,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerStatus:[0,"spinnerStatus"],nbSpinner:[1,"nbSpinner"]},null),t.wb(2,49152,null,0,r.b,[],null,null),(n()(),t.xb(3,0,null,1,2,"nb-card-body",[],null,null,null,s.e,s.a)),t.wb(4,49152,null,0,r.a,[],null,null),(n()(),t.Pb(-1,0,[" Some card content. "])),(n()(),t.xb(6,16777216,null,null,5,"nb-card",[["nbSpinnerStatus","warning"]],[[2,"nb-spinner-container",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,s.f,s.b)),t.wb(7,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerStatus:[0,"spinnerStatus"],nbSpinner:[1,"nbSpinner"]},null),t.wb(8,49152,null,0,r.b,[],null,null),(n()(),t.xb(9,0,null,1,2,"nb-card-body",[],null,null,null,s.e,s.a)),t.wb(10,49152,null,0,r.a,[],null,null),(n()(),t.Pb(-1,0,[" Some card content. "])),(n()(),t.xb(12,16777216,null,null,5,"nb-card",[["nbSpinnerStatus","danger"]],[[2,"nb-spinner-container",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,s.f,s.b)),t.wb(13,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerStatus:[0,"spinnerStatus"],nbSpinner:[1,"nbSpinner"]},null),t.wb(14,49152,null,0,r.b,[],null,null),(n()(),t.xb(15,0,null,1,2,"nb-card-body",[],null,null,null,s.e,s.a)),t.wb(16,49152,null,0,r.a,[],null,null),(n()(),t.Pb(-1,0,[" Some card content. "])),(n()(),t.xb(18,16777216,null,null,5,"nb-card",[["nbSpinnerStatus","success"]],[[2,"nb-spinner-container",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,s.f,s.b)),t.wb(19,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerStatus:[0,"spinnerStatus"],nbSpinner:[1,"nbSpinner"]},null),t.wb(20,49152,null,0,r.b,[],null,null),(n()(),t.xb(21,0,null,1,2,"nb-card-body",[],null,null,null,s.e,s.a)),t.wb(22,49152,null,0,r.a,[],null,null),(n()(),t.Pb(-1,0,[" Some card content. "])),(n()(),t.xb(24,16777216,null,null,5,"nb-card",[["nbSpinnerStatus","info"]],[[2,"nb-spinner-container",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,s.f,s.b)),t.wb(25,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerStatus:[0,"spinnerStatus"],nbSpinner:[1,"nbSpinner"]},null),t.wb(26,49152,null,0,r.b,[],null,null),(n()(),t.xb(27,0,null,1,2,"nb-card-body",[],null,null,null,s.e,s.a)),t.wb(28,49152,null,0,r.a,[],null,null),(n()(),t.Pb(-1,0,[" Some card content. "]))],function(n,l){n(l,1,0,"primary",!0),n(l,7,0,"warning",!0),n(l,13,0,"danger",!0),n(l,19,0,"success",!0),n(l,25,0,"info",!0)},function(n,l){n(l,0,1,[t.Hb(l,1).isSpinnerExist,t.Hb(l,2).tiny,t.Hb(l,2).small,t.Hb(l,2).medium,t.Hb(l,2).large,t.Hb(l,2).giant,t.Hb(l,2).primary,t.Hb(l,2).info,t.Hb(l,2).success,t.Hb(l,2).warning,t.Hb(l,2).danger,t.Hb(l,2).hasAccent,t.Hb(l,2).primaryAccent,t.Hb(l,2).infoAccent,t.Hb(l,2).successAccent,t.Hb(l,2).warningAccent,t.Hb(l,2).dangerAccent]),n(l,6,1,[t.Hb(l,7).isSpinnerExist,t.Hb(l,8).tiny,t.Hb(l,8).small,t.Hb(l,8).medium,t.Hb(l,8).large,t.Hb(l,8).giant,t.Hb(l,8).primary,t.Hb(l,8).info,t.Hb(l,8).success,t.Hb(l,8).warning,t.Hb(l,8).danger,t.Hb(l,8).hasAccent,t.Hb(l,8).primaryAccent,t.Hb(l,8).infoAccent,t.Hb(l,8).successAccent,t.Hb(l,8).warningAccent,t.Hb(l,8).dangerAccent]),n(l,12,1,[t.Hb(l,13).isSpinnerExist,t.Hb(l,14).tiny,t.Hb(l,14).small,t.Hb(l,14).medium,t.Hb(l,14).large,t.Hb(l,14).giant,t.Hb(l,14).primary,t.Hb(l,14).info,t.Hb(l,14).success,t.Hb(l,14).warning,t.Hb(l,14).danger,t.Hb(l,14).hasAccent,t.Hb(l,14).primaryAccent,t.Hb(l,14).infoAccent,t.Hb(l,14).successAccent,t.Hb(l,14).warningAccent,t.Hb(l,14).dangerAccent]),n(l,18,1,[t.Hb(l,19).isSpinnerExist,t.Hb(l,20).tiny,t.Hb(l,20).small,t.Hb(l,20).medium,t.Hb(l,20).large,t.Hb(l,20).giant,t.Hb(l,20).primary,t.Hb(l,20).info,t.Hb(l,20).success,t.Hb(l,20).warning,t.Hb(l,20).danger,t.Hb(l,20).hasAccent,t.Hb(l,20).primaryAccent,t.Hb(l,20).infoAccent,t.Hb(l,20).successAccent,t.Hb(l,20).warningAccent,t.Hb(l,20).dangerAccent]),n(l,24,1,[t.Hb(l,25).isSpinnerExist,t.Hb(l,26).tiny,t.Hb(l,26).small,t.Hb(l,26).medium,t.Hb(l,26).large,t.Hb(l,26).giant,t.Hb(l,26).primary,t.Hb(l,26).info,t.Hb(l,26).success,t.Hb(l,26).warning,t.Hb(l,26).danger,t.Hb(l,26).hasAccent,t.Hb(l,26).primaryAccent,t.Hb(l,26).infoAccent,t.Hb(l,26).successAccent,t.Hb(l,26).warningAccent,t.Hb(l,26).dangerAccent])})}function k(n){return t.Rb(0,[(n()(),t.xb(0,0,null,null,1,"nb-spinner-colors",[],null,null,null,A,x)),t.wb(1,49152,null,0,z,[],null,null)],null,null)}var P=t.tb("nb-spinner-colors",z,k,{},{},[]),v=function(){return function(){}}(),O=t.vb({encapsulation:2,styles:[],data:{}});function C(n){return t.Rb(2,[(n()(),t.xb(0,16777216,null,null,5,"nb-card",[["nbSpinnerSize","tiny"],["nbSpinnerStatus","primary"]],[[2,"nb-spinner-container",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,s.f,s.b)),t.wb(1,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerStatus:[0,"spinnerStatus"],spinnerSize:[1,"spinnerSize"],nbSpinner:[2,"nbSpinner"]},null),t.wb(2,49152,null,0,r.b,[],null,null),(n()(),t.xb(3,0,null,1,2,"nb-card-body",[],null,null,null,s.e,s.a)),t.wb(4,49152,null,0,r.a,[],null,null),(n()(),t.Pb(-1,0,[" Some card content. "])),(n()(),t.xb(6,16777216,null,null,5,"nb-card",[["nbSpinnerSize","small"],["nbSpinnerStatus","primary"]],[[2,"nb-spinner-container",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,s.f,s.b)),t.wb(7,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerStatus:[0,"spinnerStatus"],spinnerSize:[1,"spinnerSize"],nbSpinner:[2,"nbSpinner"]},null),t.wb(8,49152,null,0,r.b,[],null,null),(n()(),t.xb(9,0,null,1,2,"nb-card-body",[],null,null,null,s.e,s.a)),t.wb(10,49152,null,0,r.a,[],null,null),(n()(),t.Pb(-1,0,[" Some card content. "])),(n()(),t.xb(12,16777216,null,null,5,"nb-card",[["nbSpinnerSize","medium"],["nbSpinnerStatus","primary"]],[[2,"nb-spinner-container",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,s.f,s.b)),t.wb(13,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerStatus:[0,"spinnerStatus"],spinnerSize:[1,"spinnerSize"],nbSpinner:[2,"nbSpinner"]},null),t.wb(14,49152,null,0,r.b,[],null,null),(n()(),t.xb(15,0,null,1,2,"nb-card-body",[],null,null,null,s.e,s.a)),t.wb(16,49152,null,0,r.a,[],null,null),(n()(),t.Pb(-1,0,[" Some card content. "])),(n()(),t.xb(18,16777216,null,null,5,"nb-card",[["nbSpinnerSize","large"],["nbSpinnerStatus","primary"]],[[2,"nb-spinner-container",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,s.f,s.b)),t.wb(19,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerStatus:[0,"spinnerStatus"],spinnerSize:[1,"spinnerSize"],nbSpinner:[2,"nbSpinner"]},null),t.wb(20,49152,null,0,r.b,[],null,null),(n()(),t.xb(21,0,null,1,2,"nb-card-body",[],null,null,null,s.e,s.a)),t.wb(22,49152,null,0,r.a,[],null,null),(n()(),t.Pb(-1,0,[" Some card content. "])),(n()(),t.xb(24,16777216,null,null,5,"nb-card",[["nbSpinnerSize","giant"],["nbSpinnerStatus","primary"]],[[2,"nb-spinner-container",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,s.f,s.b)),t.wb(25,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerStatus:[0,"spinnerStatus"],spinnerSize:[1,"spinnerSize"],nbSpinner:[2,"nbSpinner"]},null),t.wb(26,49152,null,0,r.b,[],null,null),(n()(),t.xb(27,0,null,1,2,"nb-card-body",[],null,null,null,s.e,s.a)),t.wb(28,49152,null,0,r.a,[],null,null),(n()(),t.Pb(-1,0,[" Some card content. "]))],function(n,l){n(l,1,0,"primary","tiny",!0),n(l,7,0,"primary","small",!0),n(l,13,0,"primary","medium",!0),n(l,19,0,"primary","large",!0),n(l,25,0,"primary","giant",!0)},function(n,l){n(l,0,1,[t.Hb(l,1).isSpinnerExist,t.Hb(l,2).tiny,t.Hb(l,2).small,t.Hb(l,2).medium,t.Hb(l,2).large,t.Hb(l,2).giant,t.Hb(l,2).primary,t.Hb(l,2).info,t.Hb(l,2).success,t.Hb(l,2).warning,t.Hb(l,2).danger,t.Hb(l,2).hasAccent,t.Hb(l,2).primaryAccent,t.Hb(l,2).infoAccent,t.Hb(l,2).successAccent,t.Hb(l,2).warningAccent,t.Hb(l,2).dangerAccent]),n(l,6,1,[t.Hb(l,7).isSpinnerExist,t.Hb(l,8).tiny,t.Hb(l,8).small,t.Hb(l,8).medium,t.Hb(l,8).large,t.Hb(l,8).giant,t.Hb(l,8).primary,t.Hb(l,8).info,t.Hb(l,8).success,t.Hb(l,8).warning,t.Hb(l,8).danger,t.Hb(l,8).hasAccent,t.Hb(l,8).primaryAccent,t.Hb(l,8).infoAccent,t.Hb(l,8).successAccent,t.Hb(l,8).warningAccent,t.Hb(l,8).dangerAccent]),n(l,12,1,[t.Hb(l,13).isSpinnerExist,t.Hb(l,14).tiny,t.Hb(l,14).small,t.Hb(l,14).medium,t.Hb(l,14).large,t.Hb(l,14).giant,t.Hb(l,14).primary,t.Hb(l,14).info,t.Hb(l,14).success,t.Hb(l,14).warning,t.Hb(l,14).danger,t.Hb(l,14).hasAccent,t.Hb(l,14).primaryAccent,t.Hb(l,14).infoAccent,t.Hb(l,14).successAccent,t.Hb(l,14).warningAccent,t.Hb(l,14).dangerAccent]),n(l,18,1,[t.Hb(l,19).isSpinnerExist,t.Hb(l,20).tiny,t.Hb(l,20).small,t.Hb(l,20).medium,t.Hb(l,20).large,t.Hb(l,20).giant,t.Hb(l,20).primary,t.Hb(l,20).info,t.Hb(l,20).success,t.Hb(l,20).warning,t.Hb(l,20).danger,t.Hb(l,20).hasAccent,t.Hb(l,20).primaryAccent,t.Hb(l,20).infoAccent,t.Hb(l,20).successAccent,t.Hb(l,20).warningAccent,t.Hb(l,20).dangerAccent]),n(l,24,1,[t.Hb(l,25).isSpinnerExist,t.Hb(l,26).tiny,t.Hb(l,26).small,t.Hb(l,26).medium,t.Hb(l,26).large,t.Hb(l,26).giant,t.Hb(l,26).primary,t.Hb(l,26).info,t.Hb(l,26).success,t.Hb(l,26).warning,t.Hb(l,26).danger,t.Hb(l,26).hasAccent,t.Hb(l,26).primaryAccent,t.Hb(l,26).infoAccent,t.Hb(l,26).successAccent,t.Hb(l,26).warningAccent,t.Hb(l,26).dangerAccent])})}function j(n){return t.Rb(0,[(n()(),t.xb(0,0,null,null,1,"nb-spinner-sizes",[],null,null,null,C,O)),t.wb(1,49152,null,0,v,[],null,null)],null,null)}var M=t.tb("nb-spinner-sizes",v,j,{},{},[]),T=e("cMFP"),G=e("T76v"),_=e("ZYCi"),R=function(){function n(){this.loading=!1}return n.prototype.toggleLoadingAnimation=function(){var n=this;this.loading=!0,setTimeout(function(){return n.loading=!1},2e4)},n}(),E=t.vb({encapsulation:0,styles:["[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n      padding: 1.25rem;\n    }"],data:{}});function F(n){return t.Rb(0,[(n()(),t.xb(0,0,null,null,16,"nb-card",[["size","xsmall"]],[[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,s.f,s.b)),t.wb(1,49152,null,0,r.b,[],{size:[0,"size"]},null),(n()(),t.xb(2,0,null,1,14,"nb-card-body",[],null,null,null,s.e,s.a)),t.wb(3,49152,null,0,r.a,[],null,null),(n()(),t.xb(4,0,null,0,12,"nb-tabset",[["fullWidth",""]],[[2,"full-width",null]],[[null,"changeTab"]],function(n,l,e){var t=!0;return"changeTab"===l&&(t=!1!==n.component.toggleLoadingAnimation()&&t),t},T.d,T.b)),t.wb(5,1097728,null,1,G.b,[_.a,t.h],{fullWidth:[0,"fullWidth"]},{changeTab:"changeTab"}),t.Nb(603979776,1,{tabs:1}),(n()(),t.xb(7,16777216,null,0,4,"nb-tab",[["nbSpinnerSize","giant"],["nbSpinnerStatus","success"],["tabTitle","Tab 1"]],[[2,"nb-spinner-container",null],[2,"disabled",null],[2,"content-active",null]],null,null,T.c,T.a)),t.wb(8,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerStatus:[0,"spinnerStatus"],spinnerSize:[1,"spinnerSize"],nbSpinner:[2,"nbSpinner"]},null),t.wb(9,49152,[[1,4]],0,G.a,[],{tabTitle:[0,"tabTitle"]},null),(n()(),t.xb(10,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Pb(-1,null,[" A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object. "])),(n()(),t.xb(12,16777216,null,0,4,"nb-tab",[["nbSpinnerSize","giant"],["nbSpinnerStatus","info"],["tabTitle","Tab 2"]],[[2,"nb-spinner-container",null],[2,"disabled",null],[2,"content-active",null]],null,null,T.c,T.a)),t.wb(13,81920,null,0,b.a,[t.T,t.j,t.G,t.k],{spinnerStatus:[0,"spinnerStatus"],spinnerSize:[1,"spinnerSize"],nbSpinner:[2,"nbSpinner"]},null),t.wb(14,49152,[[1,4]],0,G.a,[],{tabTitle:[0,"tabTitle"]},null),(n()(),t.xb(15,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Pb(-1,null,[" Nebular's primary goal is to assemble together and connect the most awesome features and libraries creating an efficient ecosystem to speed up and simplify the development. "]))],function(n,l){var e=l.component;n(l,1,0,"xsmall"),n(l,5,0,""),n(l,8,0,"success","giant",e.loading),n(l,9,0,"Tab 1"),n(l,13,0,"info","giant",e.loading),n(l,14,0,"Tab 2")},function(n,l){n(l,0,1,[t.Hb(l,1).tiny,t.Hb(l,1).small,t.Hb(l,1).medium,t.Hb(l,1).large,t.Hb(l,1).giant,t.Hb(l,1).primary,t.Hb(l,1).info,t.Hb(l,1).success,t.Hb(l,1).warning,t.Hb(l,1).danger,t.Hb(l,1).hasAccent,t.Hb(l,1).primaryAccent,t.Hb(l,1).infoAccent,t.Hb(l,1).successAccent,t.Hb(l,1).warningAccent,t.Hb(l,1).dangerAccent]),n(l,4,0,t.Hb(l,5).fullWidthValue),n(l,7,0,t.Hb(l,8).isSpinnerExist,t.Hb(l,9).disabled,t.Hb(l,9).activeValue),n(l,12,0,t.Hb(l,13).isSpinnerExist,t.Hb(l,14).disabled,t.Hb(l,14).activeValue)})}function L(n){return t.Rb(0,[(n()(),t.xb(0,0,null,null,1,"nb-app-spinner-tabs",[],null,null,null,F,E)),t.wb(1,49152,null,0,R,[],null,null)],null,null)}var I=t.tb("nb-app-spinner-tabs",R,L,{},{},[]),W=e("Ip0R"),B=e("gIcY"),D=e("i6JN"),N=e("YNTD"),J=e("IVq4"),V=e("NFr4"),Z=e("0AKQ"),K=e("sQZK"),Y=e("9bB3"),Q=e("4aFR"),q=function(){return function(){}}();e.d(l,"SpinnerModuleNgFactory",function(){return U});var U=t.ub(i,[],function(n){return t.Eb([t.Fb(512,t.j,t.gb,[[8,[u.a,a.a,m,w,P,M,I]],[3,t.j],t.z]),t.Fb(4608,W.p,W.o,[t.w,[2,W.H]]),t.Fb(4608,B.z,B.z,[]),t.Fb(1073742336,W.c,W.c,[]),t.Fb(1073742336,B.y,B.y,[]),t.Fb(1073742336,B.i,B.i,[]),t.Fb(1073742336,_.p,_.p,[[2,_.u],[2,_.l]]),t.Fb(1073742336,D.a,D.a,[]),t.Fb(1073742336,N.a,N.a,[]),t.Fb(1073742336,J.a,J.a,[V.a]),t.Fb(1073742336,Z.a,Z.a,[]),t.Fb(1073742336,K.a,K.a,[]),t.Fb(1073742336,Y.a,Y.a,[]),t.Fb(1073742336,Q.a,Q.a,[]),t.Fb(1073742336,q,q,[]),t.Fb(1073742336,i,i,[]),t.Fb(1024,_.j,function(){return[[{path:"spinner-button.component",component:p},{path:"spinner-card.component",component:f},{path:"spinner-colors.component",component:z},{path:"spinner-sizes.component",component:v},{path:"spinner-tabs.component",component:R}]]},[])])})},k3KB:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){this.text="",this._defaultPosition="top right",this._position=this._defaultPosition,this.status="primary"}return Object.defineProperty(n.prototype,"position",{get:function(){return this._position},set:function(n){this._position=n||this._defaultPosition},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"primary",{get:function(){return"primary"===this.status},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"success",{get:function(){return"success"===this.status},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"info",{get:function(){return"info"===this.status},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"warning",{get:function(){return"warning"===this.status},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"danger",{get:function(){return"danger"===this.status},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"top",{get:function(){return this.position.includes("top")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"right",{get:function(){return this.position.includes("right")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bottom",{get:function(){return this.position.includes("bottom")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"left",{get:function(){return this.position.includes("left")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"start",{get:function(){return this.position.includes("start")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"end",{get:function(){return this.position.includes("end")},enumerable:!0,configurable:!0}),n}()}}]);