(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{JLuJ:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),e=function(){return function(){}}(),t=u("pMnS"),i=u("I0/6"),r=u("XEDD"),s=u("Z3wr"),a=u("ZZ/e"),c=u("oBZk"),b=u("Ip0R"),p=u("0CBe"),d=u("mrSG"),f=u("tFeF"),h=function(){function l(l){this.modalCtrl=l,this.slideOpts={slidesPerView:3.3,freeMode:!0},this.peliculas=[]}return l.prototype.ngOnInit=function(){},l.prototype.verDetalle=function(l){return d.b(this,void 0,void 0,function(){return d.e(this,function(n){switch(n.label){case 0:return[4,this.modalCtrl.create({component:f.a,componentProps:{id:l}})];case 1:return n.sent().present(),[2]}})})},l}(),m=o.mb({encapsulation:0,styles:[[""]],data:{}});function v(l){return o.Fb(0,[(l()(),o.ob(0,0,null,null,5,"ion-slide",[],null,null,null,c.Y,c.v)),o.nb(1,49152,null,0,a.mb,[o.h,o.k],null,null),(l()(),o.ob(2,0,null,0,3,"ion-card",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.verDetalle(l.context.$implicit.id)&&o),o},c.J,c.d)),o.nb(3,49152,null,0,a.j,[o.h,o.k],null,null),(l()(),o.ob(4,0,null,0,1,"img",[["class","poster"]],[[8,"src",4]],null,null,null,null)),o.zb(5,1)],null,function(l,n){var u=o.Eb(n,4,0,l(n,5,0,o.xb(n.parent,0),n.context.$implicit.poster_path));l(n,4,0,u)})}function g(l){return o.Fb(0,[o.yb(0,p.a,[]),(l()(),o.ob(1,0,null,null,3,"ion-slides",[],null,null,null,c.Z,c.w)),o.nb(2,49152,null,0,a.nb,[o.h,o.k],{options:[0,"options"]},null),(l()(),o.fb(16777216,null,0,1,null,v)),o.nb(4,278528,null,0,b.h,[o.N,o.K,o.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.slideOpts),l(n,4,0,u.peliculas)},null)}var k=function(){function l(){}return l.prototype.transform=function(l){return l.reduce(function(l,n,u,o){return u%2==0&&l.push(o.slice(u,u+2)),l},[])},l}(),w=function(){function l(l){this.modalCtrl=l,this.peliculas=[],this.popularesAdicionales=!1,this.addPopular=new o.m,this.slideOpts={slidesPerView:3.3,freeMode:!0,spaceBetween:-10}}return l.prototype.ngOnInit=function(){},l.prototype.traerOtrasPopulares=function(){console.log("Button more popular pressed ... "),this.addPopular.emit(!0)},l.prototype.verDetalle=function(l){return d.b(this,void 0,void 0,function(){return d.e(this,function(n){switch(n.label){case 0:return[4,this.modalCtrl.create({component:f.a,componentProps:{id:l}})];case 1:return n.sent().present(),[2]}})})},l}(),x=o.mb({encapsulation:0,styles:[[".slide-mas[_ngcontent-%COMP%]{height:300px}.btn-mas[_ngcontent-%COMP%]{position:relative;top:13%}"]],data:{}});function P(l){return o.Fb(0,[(l()(),o.ob(0,0,null,null,5,"ion-col",[["size","12"]],null,null,null,c.L,c.i)),o.nb(1,49152,null,0,a.q,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.ob(2,0,null,0,3,"ion-card",[["mode","md"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.verDetalle(l.context.$implicit.id)&&o),o},c.J,c.d)),o.nb(3,49152,null,0,a.j,[o.h,o.k],{mode:[0,"mode"]},null),(l()(),o.ob(4,0,null,0,1,"img",[["class","poster"]],[[8,"src",4]],null,null,null,null)),o.zb(5,1)],function(l,n){l(n,1,0,"12"),l(n,3,0,"md")},function(l,n){var u=o.Eb(n,4,0,l(n,5,0,o.xb(n.parent.parent,1),n.context.$implicit.poster_path));l(n,4,0,u)})}function F(l){return o.Fb(0,[(l()(),o.ob(0,0,null,null,5,"ion-slide",[],null,null,null,c.Y,c.v)),o.nb(1,49152,null,0,a.mb,[o.h,o.k],null,null),(l()(),o.ob(2,0,null,0,3,"ion-row",[],null,null,null,c.W,c.t)),o.nb(3,49152,null,0,a.fb,[o.h,o.k],null,null),(l()(),o.fb(16777216,null,0,1,null,P)),o.nb(5,278528,null,0,b.h,[o.N,o.K,o.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.context.$implicit)},null)}function O(l){return o.Fb(0,[o.yb(0,k,[]),o.yb(0,p.a,[]),(l()(),o.ob(2,0,null,null,10,"ion-slides",[],null,null,null,c.Z,c.w)),o.nb(3,49152,null,0,a.nb,[o.h,o.k],{options:[0,"options"]},null),(l()(),o.fb(16777216,null,0,2,null,F)),o.nb(5,278528,null,0,b.h,[o.N,o.K,o.s],{ngForOf:[0,"ngForOf"]},null),o.zb(6,1),(l()(),o.ob(7,0,null,0,5,"ion-slide",[["class","slide-mas"]],null,null,null,c.Y,c.v)),o.nb(8,49152,null,0,a.mb,[o.h,o.k],null,null),(l()(),o.ob(9,0,null,0,3,"ion-button",[["class","btn-mas"],["expand","full"],["size","large"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.traerOtrasPopulares()&&o),o},c.E,c.b)),o.nb(10,49152,null,0,a.h,[o.h,o.k],{expand:[0,"expand"],size:[1,"size"]},null),(l()(),o.ob(11,0,null,0,1,"ion-icon",[["name","add"],["slot","icon-only"]],null,null,null,c.Q,c.n)),o.nb(12,49152,null,0,a.z,[o.h,o.k],{name:[0,"name"]},null)],function(l,n){var u=n.component;l(n,3,0,u.slideOpts);var e=o.Eb(n,5,0,l(n,6,0,o.xb(n,0),u.peliculas));l(n,5,0,e),l(n,10,0,"full","large"),l(n,12,0,"add")},null)}var y=u("sUQ5"),C=function(){function l(l){this.moviesService=l,this.peliculasRecientes=[],this.populares=[],this.popularesAdicionales=!1}return l.prototype.ngOnInit=function(){var l=this;console.log("Searching recent movies .... "),this.moviesService.getFeature().subscribe(function(n){l.peliculasRecientes=n.results}),console.log("Searching popular movies .... "),this.getPopulares()},l.prototype.buscarMasPopulares=function(){console.log("Searching more popular movies .... "),this.getPopulares()},l.prototype.getPopulares=function(){var l=this;this.moviesService.getPopulares().subscribe(function(n){var u=l.populares.concat(n.results);l.populares=u})},l}(),M=o.mb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}"]],data:{}});function I(l){return o.Fb(0,[(l()(),o.ob(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["New Movies"]))],null,null)}function z(l){return o.Fb(0,[(l()(),o.ob(0,0,null,null,1,"app-slideshow-backdrop",[],null,null,null,r.b,r.a)),o.nb(1,114688,null,0,s.a,[a.Cb],{peliculas:[0,"peliculas"]},null)],function(l,n){l(n,1,0,n.component.peliculasRecientes)},null)}function D(l){return o.Fb(0,[(l()(),o.ob(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["Loading recent movies ..."]))],null,null)}function j(l){return o.Fb(0,[(l()(),o.ob(0,0,null,null,6,"ion-header",[],null,null,null,c.P,c.m)),o.nb(1,49152,null,0,a.y,[o.h,o.k],null,null),(l()(),o.ob(2,0,null,0,4,"ion-toolbar",[],null,null,null,c.fb,c.C)),o.nb(3,49152,null,0,a.yb,[o.h,o.k],null,null),(l()(),o.ob(4,0,null,0,2,"ion-label",[],null,null,null,c.S,c.p)),o.nb(5,49152,null,0,a.K,[o.h,o.k],null,null),(l()(),o.Db(-1,0,["H\xe9ctor Ag\xfcero's Movie App - heagueron@gmail.com"])),(l()(),o.ob(7,0,null,null,33,"ion-content",[],null,null,null,c.M,c.j)),o.nb(8,49152,null,0,a.r,[o.h,o.k],null,null),(l()(),o.ob(9,0,null,0,7,"ion-grid",[["fixed",""]],null,null,null,c.O,c.l)),o.nb(10,49152,null,0,a.x,[o.h,o.k],{fixed:[0,"fixed"]},null),(l()(),o.ob(11,0,null,0,5,"ion-row",[],null,null,null,c.W,c.t)),o.nb(12,49152,null,0,a.fb,[o.h,o.k],null,null),(l()(),o.ob(13,0,null,0,3,"ion-col",[],null,null,null,c.L,c.i)),o.nb(14,49152,null,0,a.q,[o.h,o.k],null,null),(l()(),o.fb(16777216,null,0,1,null,I)),o.nb(16,16384,null,0,b.i,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.fb(16777216,null,0,1,null,z)),o.nb(18,16384,null,0,b.i,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.fb(16777216,null,0,1,null,D)),o.nb(20,16384,null,0,b.i,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.ob(21,0,null,0,7,"ion-grid",[["fixed",""]],null,null,null,c.O,c.l)),o.nb(22,49152,null,0,a.x,[o.h,o.k],{fixed:[0,"fixed"]},null),(l()(),o.ob(23,0,null,0,5,"ion-row",[],null,null,null,c.W,c.t)),o.nb(24,49152,null,0,a.fb,[o.h,o.k],null,null),(l()(),o.ob(25,0,null,0,3,"ion-col",[],null,null,null,c.L,c.i)),o.nb(26,49152,null,0,a.q,[o.h,o.k],null,null),(l()(),o.ob(27,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["Now showing"])),(l()(),o.ob(29,0,null,0,1,"app-slideshow-poster",[],null,null,null,g,m)),o.nb(30,114688,null,0,h,[a.Cb],{peliculas:[0,"peliculas"]},null),(l()(),o.ob(31,0,null,0,7,"ion-grid",[["fixed",""]],null,null,null,c.O,c.l)),o.nb(32,49152,null,0,a.x,[o.h,o.k],{fixed:[0,"fixed"]},null),(l()(),o.ob(33,0,null,0,5,"ion-row",[],null,null,null,c.W,c.t)),o.nb(34,49152,null,0,a.fb,[o.h,o.k],null,null),(l()(),o.ob(35,0,null,0,3,"ion-col",[],null,null,null,c.L,c.i)),o.nb(36,49152,null,0,a.q,[o.h,o.k],null,null),(l()(),o.ob(37,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["Popular"])),(l()(),o.ob(39,0,null,0,1,"app-slideshow-pares",[],null,[[null,"addPopular"]],function(l,n,u){var o=!0;return"addPopular"===n&&(o=!1!==l.component.buscarMasPopulares()&&o),o},O,x)),o.nb(40,114688,null,0,w,[a.Cb],{peliculas:[0,"peliculas"],popularesAdicionales:[1,"popularesAdicionales"]},{addPopular:"addPopular"})],function(l,n){var u=n.component;l(n,10,0,""),l(n,16,0,u.peliculasRecientes.length>0),l(n,18,0,u.peliculasRecientes.length>0),l(n,20,0,0===u.peliculasRecientes.length),l(n,22,0,""),l(n,30,0,u.peliculasRecientes),l(n,32,0,""),l(n,40,0,u.populares,u.popularesAdicionales)},null)}function A(l){return o.Fb(0,[(l()(),o.ob(0,0,null,null,1,"app-tab1",[],null,null,null,j,M)),o.nb(1,114688,null,0,C,[y.a],null,null)],function(l,n){l(n,1,0)},null)}var N=o.kb("app-tab1",C,A,{},{},[]),S=u("gIcY"),R=u("ZYCi"),Z=u("iTUp"),K=u("j1ZV");u.d(n,"Tab1PageModuleNgFactory",function(){return q});var q=o.lb(e,[],function(l){return o.ub([o.vb(512,o.j,o.ab,[[8,[t.a,i.a,N]],[3,o.j],o.x]),o.vb(4608,b.k,b.j,[o.u,[2,b.s]]),o.vb(4608,a.a,a.a,[o.z,o.g]),o.vb(4608,a.Cb,a.Cb,[a.a,o.j,o.q,b.c]),o.vb(4608,a.Fb,a.Fb,[a.a,o.j,o.q,b.c]),o.vb(4608,S.d,S.d,[]),o.vb(1073742336,b.b,b.b,[]),o.vb(1073742336,a.Ab,a.Ab,[]),o.vb(1073742336,S.c,S.c,[]),o.vb(1073742336,S.a,S.a,[]),o.vb(1073742336,R.n,R.n,[[2,R.t],[2,R.m]]),o.vb(1073742336,Z.a,Z.a,[]),o.vb(1073742336,K.a,K.a,[]),o.vb(1073742336,e,e,[]),o.vb(1024,R.k,function(){return[[{path:"",component:C}]]},[])])})}}]);