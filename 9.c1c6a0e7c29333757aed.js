(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{P7eQ:function(t,n,e){"use strict";e.r(n),e.d(n,"MtxAppBarDemoModule",function(){return wt});var o=e("ofXK"),c=e("tyNb"),i=e("3Pt+"),a=e("fXoL"),b=e("b+W8"),r=e("scpl"),s=e("yPxO"),l=e("5vt4"),m=e("pOJ/"),p=e("a67P"),u=e("KrRq");const f=[[["mtx-sidesheet-left"]],"*",[["mtx-sidesheet-right"]]],d=["mtx-sidesheet-left","*","mtx-sidesheet-right"];let h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Fb({type:t,selectors:[["mtx-sidesheet-container"]],hostAttrs:[1,"mtx-sidesheet-container"],ngContentSelectors:d,decls:5,vars:0,consts:[[1,"mtx-sidesheet-scrim"],[1,"mtx-sidesheet-main"]],template:function(t,n){1&t&&(a.gc(f),a.Mb(0,"div",0),a.fc(1),a.Rb(2,"div",1),a.fc(3,1),a.Qb(),a.fc(4,2))},styles:[".mtx-sidesheet-container{display:flex;flex-direction:row}.mtx-sidesheet-main{display:flex;flex-direction:column;flex:1}"],encapsulation:2}),t})();var g=e("091E"),x=e("bTqV"),w=e("Qu3c"),Q=e("NFeN");let R=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Fb({type:t,selectors:[["mtx-mobile-header"]],hostAttrs:[1,"mtx-mobile-header","mtx-primary-700-secondary"],decls:3,vars:0,consts:[[1,"icon","icon-square"],[1,"icon","icon-circle"],[1,"icon","icon-triangle-down"]],template:function(t,n){1&t&&(a.Mb(0,"div",0),a.Mb(1,"div",1),a.Mb(2,"div",2))},styles:['[_nghost-%COMP%]{height:20px;padding:0 4px;justify-content:flex-end}.icon[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;align-items:center}.icon[_ngcontent-%COMP%]{height:16px;width:16px;justify-content:center}.icon-circle[_ngcontent-%COMP%]:after, .icon-square[_ngcontent-%COMP%]:after{content:"";height:8px;width:8px;background-color:currentColor}.icon-circle[_ngcontent-%COMP%]:after{border-radius:50%}.icon-triangle-down[_ngcontent-%COMP%]:after{content:"";height:0;width:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:8px solid}']}),t})();const v=["*"];let y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Fb({type:t,selectors:[["mtx-sidesheet"],["mtx-sidesheet-right"],["mtx-sidesheet-left"]],hostAttrs:[1,"mtx-sidesheet"],ngContentSelectors:v,decls:1,vars:0,template:function(t,n){1&t&&(a.gc(),a.fc(0))},styles:[""],encapsulation:2}),t})();const z=function(){return["mtx-drawer-left","mtx-drawer"]},k=["*"];let C=(()=>{class t{constructor(t){this.hostRef=t,this.mode="side",this.opened=!1}get selector(){return this.hostRef.nativeElement.tagName.toLowerCase()}ngOnInit(){}open(){this.opened||this.toggle()}close(){this.opened&&this.toggle()}toggle(){this.opened=!this.opened}onDrawerClick(t){t.stopPropagation()}}return t.\u0275fac=function(n){return new(n||t)(a.Lb(a.l))},t.\u0275cmp=a.Fb({type:t,selectors:[["mtx-drawer"],["mtx-drawer-left"],["mtx-drawer-right"]],hostAttrs:[1,"mtx-drawer-backdrop"],hostVars:6,hostBindings:function(t,n){1&t&&a.Yb("click",function(){return n.close()}),2&t&&a.Db("mtx-drawer-overlay","overlay"==n.mode)("mtx-drawer-side","side"==n.mode)("mtx-drawer-open",n.opened)},inputs:{mode:"mode"},ngContentSelectors:k,decls:2,vars:5,consts:[[1,"mtx-drawer",3,"click"]],template:function(t,n){1&t&&(a.gc(),a.Rb(0,"mtx-column",0),a.Yb("click",function(t){return n.onDrawerClick(t)}),a.fc(1),a.Qb()),2&t&&a.Db("mtx-drawer-left",a.ic(4,z).includes(n.selector))("mtx-drawer-right","mtx-drawer-right"==n.selector)},directives:[p.a],styles:[".mtx-drawer-backdrop{transition:all .25s cubic-bezier(.4,0,.2,1);visibility:hidden}.mtx-drawer-overlay,.mtx-drawer-side{position:absolute;width:100%;height:100%}.mtx-drawer-backdrop.mtx-drawer-open{visibility:visible;background-color:rgba(0,0,0,.6);z-index:999;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mtx-drawer{position:absolute;width:200px;height:100%;background-color:#f5f5f5;box-shadow:none;transition:all .25s cubic-bezier(.4,0,.2,1)}.mtx-drawer-left{left:-200px}.mtx-drawer-right{right:-200px}.mtx-drawer-open .mtx-drawer-left{left:0}.mtx-drawer-open .mtx-drawer-right{right:0}"],encapsulation:2}),t})();var I=e("STbY");function M(t,n){1&t&&a.Nb(0)}function O(t,n){1&t&&a.Nb(0)}function P(t,n){1&t&&a.Nb(0)}function S(t,n){if(1&t){const t=a.Sb();a.Rb(0,"mtx-toolbar",8),a.Rb(1,"button",9),a.Yb("click",function(){return a.oc(t),a.cc(),a.mc(13).close()}),a.Rb(2,"mat-icon"),a.yc(3,"close"),a.Qb(),a.Qb(),a.Qb(),a.Rb(4,"mtx-toolbar",10),a.Rb(5,"mtx-column",11),a.Rb(6,"mtx-row",12),a.yc(7,"Size"),a.Qb(),a.Rb(8,"mtx-row",13),a.yc(9),a.Qb(),a.Qb(),a.Rb(10,"button",14),a.Yb("click",function(){return a.oc(t),a.cc().flipSize()}),a.Rb(11,"mat-icon"),a.yc(12,"flip"),a.Qb(),a.Qb(),a.Qb(),a.Rb(13,"mtx-toolbar"),a.Rb(14,"mtx-column",11),a.Rb(15,"mtx-row",12),a.yc(16,"Navigation"),a.Qb(),a.Rb(17,"mtx-row",13),a.yc(18),a.Qb(),a.Qb(),a.Rb(19,"button",15),a.Yb("click",function(){return a.oc(t),a.cc().flipNavigation()}),a.Rb(20,"mat-icon"),a.yc(21,"flip"),a.Qb(),a.Qb(),a.Qb(),a.Rb(22,"mtx-toolbar"),a.Rb(23,"mtx-column",11),a.Rb(24,"mtx-row",16),a.yc(25,"Standard"),a.Qb(),a.Qb(),a.Rb(26,"button",17),a.Yb("click",function(){return a.oc(t),a.cc(),a.mc(13).close()}),a.Rb(27,"mat-icon"),a.yc(28,"chevron_right"),a.Qb(),a.Qb(),a.Qb(),a.Rb(29,"mtx-toolbar"),a.Rb(30,"mtx-column",11),a.Rb(31,"mtx-row",12),a.yc(32,"Buttons"),a.Qb(),a.Rb(33,"mtx-row",16),a.yc(34,"Standard"),a.Qb(),a.Qb(),a.Rb(35,"button",17),a.Yb("click",function(){return a.oc(t),a.cc(),a.mc(13).close()}),a.Rb(36,"mat-icon"),a.yc(37,"chevron_right"),a.Qb(),a.Qb(),a.Qb()}if(2&t){const t=a.cc();a.zb(9),a.zc(t.size[t.sizeIndex]),a.zb(9),a.zc(t.navigation[t.navigationIndex])}}function A(t,n){if(1&t&&(a.Mb(0,"mtx-app-bar",18),a.Rb(1,"mat-menu",null,19),a.yc(3,"..."),a.Qb()),2&t){const t=a.cc();a.hc("size",t.size[t.sizeIndex].toLowerCase())("nav",t.navigation[t.navigationIndex].toLowerCase())}}let F=(()=>{class t{constructor(){this.size=["Standard","Dense","Prominent"],this.sizeIndex=0,this.navigation=["Menu","Back","Close","None"],this.navigationIndex=0}ngOnInit(){}flipSize(){this.sizeIndex=(this.sizeIndex+1)%this.size.length}flipNavigation(){this.navigationIndex=(this.navigationIndex+1)%this.navigation.length}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Fb({type:t,selectors:[["app-bar-interactive"]],decls:19,vars:3,consts:[[1,"mtx-gray-200",2,"padding","0","overflow","hidden","height","280px"],["title","App Bar"],["mat-icon-button","","aria-label","Open Configuration Panel","matTooltip","Open Configuration Panel",2,"margin-right","-8px",3,"click"],[1,"mat-elevation-z4",2,"min-height","600px","width","320px","align-self","center","border-radius","0","padding","0","transform","scale(0.8) translateY(-75px)"],[4,"ngTemplateOutlet"],["drawer",""],["drawerContent",""],["demo",""],["title","Configuration"],["mat-icon-button","","aria-label","Close Configuration Panel","matTooltip","Close Configuration Panel","onclick","blur()",2,"margin-right","-12px",3,"click"],["icon","home"],[1,"mtx-toolbar-title"],[1,"mat-caption"],[1,"mat-body-strong"],["mat-icon-button","","aria-label","Flip Size","matTooltip","Flip Size",2,"margin-right","-12px",3,"click"],["mat-icon-button","","aria-label","Flip Navigation","matTooltip","Flip Navigation",2,"margin-right","-12px",3,"click"],[1,"mat-body"],["mat-icon-button","","aria-label","Close Configuration Panel","matTooltip","Close Configuration Panel",2,"margin-right","-8px",3,"click"],[1,"mtx-primary",2,"margin","0",3,"size","nav"],["menu",""]],template:function(t,n){if(1&t){const t=a.Sb();a.Rb(0,"mtx-stroked-card",0),a.Rb(1,"mtx-sidesheet-container"),a.Rb(2,"mtx-toolbar",1),a.Rb(3,"button",2),a.Yb("click",function(){return a.oc(t),a.mc(13).open()}),a.Rb(4,"mat-icon"),a.yc(5,"tune"),a.Qb(),a.Qb(),a.Qb(),a.Mb(6,"mtx-toolbar"),a.Rb(7,"mtx-flat-card",3),a.Mb(8,"mtx-mobile-header"),a.wc(9,M,1,0,"ng-container",4),a.Qb(),a.Rb(10,"mtx-sidesheet-right"),a.wc(11,O,1,0,"ng-container",4),a.Qb(),a.Qb(),a.Rb(12,"mtx-drawer-right",null,5),a.wc(14,P,1,0,"ng-container",4),a.Qb(),a.Qb(),a.wc(15,S,38,2,"ng-template",null,6,a.xc),a.wc(17,A,4,2,"ng-template",null,7,a.xc)}if(2&t){const t=a.mc(16),n=a.mc(18);a.zb(9),a.hc("ngTemplateOutlet",n),a.zb(2),a.hc("ngTemplateOutlet",t),a.zb(3),a.hc("ngTemplateOutlet",t)}},directives:[u.a,h,g.a,x.b,w.a,Q.a,R,o.o,y,C,p.a,s.a,I.a],styles:[""]}),t})();var T=e("kmnG"),N=e("d3UM"),Y=e("qFsG"),B=e("bSwM"),_=e("wZkO"),j=e("FKr1"),D=e("m6Y9");const E=["menu"];function J(t,n){1&t&&a.Nb(0)}function L(t,n){if(1&t&&(a.Rb(0,"mat-option",17),a.yc(1),a.Qb()),2&t){const t=n.$implicit;a.hc("value",t),a.zb(1),a.Ac(" ",t," ")}}function q(t,n){if(1&t&&(a.Rb(0,"mat-option",17),a.yc(1),a.Qb()),2&t){const t=n.$implicit;a.hc("value",t),a.zb(1),a.Ac(" ",t," ")}}function V(t,n){1&t&&a.Nb(0)}function K(t,n){1&t&&a.Nb(0)}const G=function(){return["standard","dense","prominent"]},U=function(){return["none","menu","back","close"]};function W(t,n){if(1&t){const t=a.Sb();a.Rb(0,"mtx-column"),a.Rb(1,"p"),a.Rb(2,"code"),a.yc(3,"<mtx-app-bar>"),a.Qb(),a.yc(4," displays information and actions relating to the current screen."),a.Qb(),a.Rb(5,"h3"),a.yc(6,"Interactive demo"),a.Qb(),a.Rb(7,"p"),a.yc(8,"This demo lets you preview the App Bar component, its variations, and configuration options. Each tab displays a different type of App Bar."),a.Qb(),a.Mb(9,"app-bar-interactive",6),a.Rb(10,"div",7),a.Rb(11,"mat-form-field",8),a.Rb(12,"mat-label"),a.yc(13,"Size"),a.Qb(),a.Rb(14,"mat-select",9),a.Yb("valueChange",function(n){return a.oc(t),a.cc().size=n}),a.wc(15,L,2,2,"mat-option",10),a.Qb(),a.Qb(),a.Rb(16,"mat-form-field",8),a.Rb(17,"mat-label"),a.yc(18,"Navigation"),a.Qb(),a.Rb(19,"mat-select",9),a.Yb("valueChange",function(n){return a.oc(t),a.cc().nav=n}),a.wc(20,q,2,2,"mat-option",10),a.Qb(),a.Qb(),a.Qb(),a.Rb(21,"mat-form-field",11),a.Rb(22,"mat-label"),a.yc(23,"Title"),a.Qb(),a.Mb(24,"input",12),a.Qb(),a.Rb(25,"div",7),a.Rb(26,"mat-checkbox",13),a.Yb("change",function(){a.oc(t);const n=a.cc();return n.overflow=!n.overflow}),a.yc(27,"Overflow Menu"),a.Qb(),a.Rb(28,"mat-checkbox",13),a.Yb("change",function(){a.oc(t);const n=a.cc();return n.icons=!n.icons}),a.yc(29,"Icons"),a.Qb(),a.Rb(30,"mat-checkbox",13),a.Yb("change",function(){a.oc(t);const n=a.cc();return n.buttons=!n.buttons}),a.yc(31,"Buttons"),a.Qb(),a.Qb(),a.Rb(32,"mat-tab-group"),a.Rb(33,"mat-tab",14),a.Rb(34,"div",15),a.wc(35,V,1,0,"ng-container",2),a.Qb(),a.Qb(),a.Rb(36,"mat-tab",16),a.Rb(37,"div",15),a.wc(38,K,1,0,"ng-container",2),a.Qb(),a.Qb(),a.Qb(),a.Qb()}if(2&t){const t=a.cc(),n=a.mc(11),e=a.mc(13);a.zb(14),a.hc("value",t.size),a.zb(1),a.hc("ngForOf",a.ic(10,G)),a.zb(4),a.hc("value",t.nav),a.zb(1),a.hc("ngForOf",a.ic(11,U)),a.zb(4),a.hc("formControl",t.title),a.zb(2),a.hc("checked",t.overflow),a.zb(2),a.hc("checked",t.icons),a.zb(2),a.hc("checked",t.buttons),a.zb(5),a.hc("ngTemplateOutlet",n),a.zb(3),a.hc("ngTemplateOutlet",e)}}function X(t,n){1&t&&(a.Rb(0,"mtx-app-bar-button"),a.Rb(1,"button",21),a.Rb(2,"mat-icon"),a.yc(3,"search"),a.Qb(),a.Qb(),a.Rb(4,"button",21),a.Rb(5,"mat-icon"),a.yc(6,"notifications"),a.Qb(),a.Qb(),a.Qb())}function Z(t,n){1&t&&(a.Rb(0,"mtx-app-bar-button"),a.Rb(1,"button",22),a.yc(2,"SAVE"),a.Qb(),a.Qb())}function $(t,n){if(1&t&&(a.Rb(0,"mtx-app-bar",18),a.Rb(1,"mtx-app-bar-title"),a.yc(2),a.Qb(),a.wc(3,X,7,0,"mtx-app-bar-button",19),a.wc(4,Z,3,0,"mtx-app-bar-button",19),a.Qb(),a.Rb(5,"mat-menu",null,20),a.yc(7,"..."),a.Qb()),2&t){const t=a.mc(6),n=a.cc();a.hc("size",n.size)("nav",n.nav)("overflow",n.overflow?t:void 0),a.zb(2),a.zc(n.title.value),a.zb(1),a.hc("ngIf",n.icons),a.zb(1),a.hc("ngIf",n.buttons)}}function H(t,n){if(1&t&&(a.Rb(0,"span"),a.yc(1),a.Qb()),2&t){const t=a.cc(2);a.zb(1),a.Ac(' size="',t.size,'"')}}function tt(t,n){if(1&t&&(a.Rb(0,"span"),a.yc(1),a.Qb()),2&t){const t=a.cc(2);a.zb(1),a.Ac(' nav="',t.nav,'"')}}function nt(t,n){1&t&&(a.Rb(0,"span"),a.yc(1,' overflow="menu"'),a.Qb())}function et(t,n){if(1&t&&(a.Rb(0,"span"),a.yc(1),a.Mb(2,"br"),a.Qb()),2&t){const t=a.cc(2);a.zb(1),a.Ac("\xa0\xa0<mtx-app-bar-title>",t.title.value,"</mtx-app-bar-title>")}}function ot(t,n){1&t&&(a.Rb(0,"span"),a.yc(1,"\xa0\xa0<mtx-app-bar-button>"),a.Mb(2,"br"),a.Qb())}function ct(t,n){1&t&&(a.Rb(0,"span"),a.yc(1,"\xa0\xa0\xa0\xa0<button mat-icon-button><mat-icon>search</mat-icon></button>"),a.Mb(2,"br"),a.Qb())}function it(t,n){1&t&&(a.Rb(0,"span"),a.yc(1,"\xa0\xa0\xa0\xa0<button mat-icon-button><mat-icon>notifications</mat-icon></button>"),a.Mb(2,"br"),a.Qb())}function at(t,n){1&t&&(a.Rb(0,"span"),a.yc(1,"\xa0\xa0\xa0\xa0<button mat-button>SAVE</button>"),a.Mb(2,"br"),a.Qb())}function bt(t,n){1&t&&(a.Rb(0,"span"),a.yc(1,"\xa0\xa0</mtx-app-bar-button>"),a.Mb(2,"br"),a.Qb())}function rt(t,n){1&t&&(a.Rb(0,"span"),a.Mb(1,"br"),a.Mb(2,"br"),a.yc(3,"<mat-menu #menu>...</mat-menu>"),a.Qb())}function st(t,n){if(1&t&&(a.Rb(0,"code"),a.Rb(1,"span"),a.yc(2,"<mtx-app-bar"),a.Qb(),a.wc(3,H,2,1,"span",19),a.wc(4,tt,2,1,"span",19),a.wc(5,nt,2,0,"span",19),a.Rb(6,"span"),a.yc(7,">"),a.Mb(8,"br"),a.Qb(),a.wc(9,et,3,1,"span",19),a.wc(10,ot,3,0,"span",19),a.wc(11,ct,3,0,"span",19),a.wc(12,it,3,0,"span",19),a.wc(13,at,3,0,"span",19),a.wc(14,bt,3,0,"span",19),a.Rb(15,"span"),a.yc(16,"</mtx-app-bar>"),a.Qb(),a.wc(17,rt,4,0,"span",19),a.Qb()),2&t){const t=a.cc();a.zb(3),a.hc("ngIf","standard"!=t.size),a.zb(1),a.hc("ngIf","none"!=t.nav),a.zb(1),a.hc("ngIf",t.overflow),a.zb(4),a.hc("ngIf",""!=t.title.value),a.zb(1),a.hc("ngIf",t.icons||t.buttons),a.zb(1),a.hc("ngIf",t.icons),a.zb(1),a.hc("ngIf",t.icons),a.zb(1),a.hc("ngIf",t.buttons),a.zb(1),a.hc("ngIf",t.icons||t.buttons),a.zb(3),a.hc("ngIf",t.overflow)}}function lt(t,n){1&t&&(a.Rb(0,"mtx-app-bar-button"),a.Rb(1,"button",21),a.Rb(2,"mat-icon"),a.yc(3,"search"),a.Qb(),a.Qb(),a.Rb(4,"button",21),a.Rb(5,"mat-icon"),a.yc(6,"notifications"),a.Qb(),a.Qb(),a.Qb())}function mt(t,n){1&t&&(a.Rb(0,"mtx-app-bar-button"),a.Rb(1,"button",22),a.yc(2,"SAVE"),a.Qb(),a.Qb())}function pt(t,n){if(1&t&&(a.Rb(0,"mtx-app-bar",18),a.Rb(1,"mtx-app-bar-title"),a.yc(2),a.Qb(),a.wc(3,lt,7,0,"mtx-app-bar-button",19),a.wc(4,mt,3,0,"mtx-app-bar-button",19),a.Qb(),a.Rb(5,"mat-menu",null,20),a.yc(7,"..."),a.Qb()),2&t){const t=a.mc(6),n=a.cc();a.hc("size",n.size)("nav",n.nav)("overflow",n.overflow?t:void 0),a.zb(2),a.zc(n.title.value),a.zb(1),a.hc("ngIf",n.icons),a.zb(1),a.hc("ngIf",n.buttons)}}const ut=[{path:"",component:(()=>{class t{constructor(){this.size="standard",this.nav="menu",this.title=new i.c("The Quick Brown Fox jumps over the fence"),this.overflow=!0,this.icons=!0,this.buttons=!1}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Fb({type:t,selectors:[["app-mtx-app-bar-demo"]],viewQuery:function(t,n){if(1&t&&a.Cc(E,!0),2&t){let t;a.lc(t=a.Zb())&&(n.menu=t.first)}},decls:16,vars:1,consts:[["page-title","App Bar | Material Extentions","description","Reusable UI component for mobile and desktop Angular web applications"],["nav","back",1,"mtx-primary"],[4,"ngTemplateOutlet"],["InteractiveDemo",""],["demo",""],["sourceCode",""],[2,"margin-bottom","24px"],[1,"row",2,"margin-bottom","16px","justify-content","space-between"],[2,"width","40%"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[2,"margin-bottom","16px"],["matInput","","type","text",3,"formControl"],[3,"checked","change"],["label","Demo"],[2,"padding","32px 0"],["label","Code"],[3,"value"],["color","primary",2,"margin","0",3,"size","nav","overflow"],[4,"ngIf"],["menu",""],["mat-icon-button",""],["mat-button",""]],template:function(t,n){if(1&t&&(a.Rb(0,"mtx-page",0),a.Rb(1,"mtx-page-header"),a.Rb(2,"mtx-app-bar",1),a.Rb(3,"mtx-app-bar-title"),a.yc(4,"App Bar"),a.Qb(),a.Qb(),a.Qb(),a.Rb(5,"mtx-page-content"),a.wc(6,J,1,0,"ng-container",2),a.Mb(7,"app-footer-section"),a.Qb(),a.Qb(),a.wc(8,W,39,12,"ng-template",null,3,a.xc),a.wc(10,$,8,6,"ng-template",null,4,a.xc),a.wc(12,st,18,10,"ng-template",null,5,a.xc),a.wc(14,pt,8,6,"ng-template",null,4,a.xc)),2&t){const t=a.mc(9);a.zb(6),a.hc("ngTemplateOutlet",t)}},directives:[b.a,r.a,s.a,l.a,o.o,m.a,p.a,F,T.b,T.e,N.a,o.j,Y.a,i.b,i.j,i.d,B.a,_.b,_.a,j.f,o.k,I.a,D.a,x.b,Q.a],styles:[""]}),t})()}];let ft=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(n){return new(n||t)},imports:[[c.c.forChild(ut)],c.c]}),t})();var dt=e("Lr/s"),ht=e("Wp6s"),gt=e("0HF5");let xt=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(n){return new(n||t)},imports:[[o.c,dt.e]]}),t})(),wt=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(n){return new(n||t)},imports:[[o.c,ft,gt.a,xt,dt.a,dt.h,dt.e,dt.c,dt.m,dt.k,dt.g,i.f,i.l,T.d,Y.b,N.b,B.b,I.b,_.c,Q.b,x.c,ht.b,w.b]]}),t})()}}]);