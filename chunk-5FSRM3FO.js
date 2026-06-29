import{a as j}from"./chunk-U32VTXKE.js";import"./chunk-FTKBCS7M.js";import{a as $}from"./chunk-CXCWHZBZ.js";import{a as H,b as _,f as k,i as A,n as N,o as U}from"./chunk-KLRSYDTI.js";import{A as E,B as D,O as M,P as w,Q as F,T as I,U as T,c as S,d as R}from"./chunk-EXLW5BLB.js";import{a as c}from"./chunk-DDD5RFSZ.js";import"./chunk-OE2Y7S3I.js";import"./chunk-U363NYTV.js";import{D as u,F as v,G as C,Kb as b,Lb as t,Mb as n,Sc as y,T as f,Za as a,_b as h,da as V,f as d,gb as m,lb as g,pa as x,pc as e,rc as p}from"./chunk-7VP5X5OC.js";import"./chunk-HZ6M6AS2.js";var L=class s{constructor(l,i,o){this.httpClient=l;this.updateVentValue$=new d;this.ventTopic1="vent/ventState";this.ventUrl1=`${$.apiUrl}vent-control`;this.destroyRef=V(x);this.ventValue=0,this.ventValueRpm=0,i.doSubscribe(this.ventTopic1,0).pipe(c(this.destroyRef)).subscribe(r=>{console.log(r),this.ventValue=+r.pwr,this.ventValueRpm=+r.rpm,o.markForCheck()}),this.destroyRef.onDestroy(()=>{console.log("VentilationControlComponent destroying...")}),this.updateVentValue$.pipe(c(this.destroyRef),v(300),f(this.setVentValue.bind(this))).subscribe(r=>console.log(r))}setVentValue(l){let i=new S;return i.append("Content-Type","application/json"),i.append("Access-Control-Allow-Origin","*"),this.httpClient.post(this.ventUrl1,{sliderValue:l},{headers:i,responseType:"text"}).pipe(C(1),u(o=>(console.log(o),o)))}static{this.\u0275fac=function(i){return new(i||s)(m(R),m(j),m(y))}}static{this.\u0275cmp=g({type:s,selectors:[["app-ventilation-control"]],decls:40,vars:5,consts:[["xs","6"],[1,"align-self-center"],["cLabel",""],["sm","10"],["cLabel","","for","ventValue"],["cFormControl","","id","ventValue","type","range",3,"ngModelChange","ngModel","min","max"]],template:function(i,o){i&1&&(t(0,"c-row"),e(1,`
    `),t(2,"c-row"),e(3,`
        `),t(4,"c-col",0),e(5,`
            `),t(6,"c-card"),e(7,`
                `),t(8,"c-card-body"),e(9,`
                    `),t(10,"c-row"),e(11,`
                        `),t(12,"c-input-group"),e(13,`
                            `),t(14,"c-col",1),e(15,`
                                `),t(16,"label",2)(17,"strong"),e(18,"Vent 1"),n()(),e(19,`
                            `),n(),e(20,`
                            `),t(21,"c-col",3),e(22,`
                                `),t(23,"label",2)(24,"strong"),e(25),n()(),e(26,`
                                `),t(27,"label",4)(28,"strong"),e(29),n()(),e(30,`
                                `),t(31,"input",5),h("ngModelChange",function(P){return o.updateVentValue$.next(P)}),n(),e(32,`
                            `),n(),e(33,`
                        `),n(),e(34,`
                    `),n(),e(35,`
                `),n(),e(36,`
            `),n(),e(37,`
        `),n(),e(38,`
    `),n(),e(39,`
`),n()),i&2&&(a(25),p("",o.ventValueRpm," RPM"),a(4),p("",o.ventValue,"%"),a(2),b("ngModel",o.ventValue)("min",0)("max",100))},dependencies:[F,I,T,w,M,U,H,A,_,N,k,E,D],encapsulation:2})}};export{L as VentilationControlComponent};
