import{a as he}from"./chunk-4S43XMFK.js";import"./chunk-CXCWHZBZ.js";import{a as pe,b as de,c as ue,g as fe,j as ge,k as _e,l as xe,m as Ce,n as be,o as ye}from"./chunk-KLRSYDTI.js";import{A as ee,B as te,D as ne,M as ie,O as oe,P as re,Q as ae,R as le,S as ce,T as me,U as se,s as X,t as Y,u as Z}from"./chunk-EXLW5BLB.js";import"./chunk-DDD5RFSZ.js";import{j as W}from"./chunk-OE2Y7S3I.js";import"./chunk-U363NYTV.js";import{A as M,Bc as U,Cc as q,Eb as h,Fb as v,Gb as T,Gc as z,Ib as k,Jb as D,Kb as p,Lb as r,Mb as a,Nb as S,Sc as Q,T as I,Tb as G,U as j,W as N,Wb as V,Za as m,_b as g,ac as s,f as C,g as R,gb as b,ja as u,ka as f,kc as $,la as A,lb as J,ma as L,nb as P,pc as e,qb as K,qc as O,rb as y,va as H,xc as B}from"./chunk-7VP5X5OC.js";import{a as E}from"./chunk-HZ6M6AS2.js";var w=class o{constructor(){this.destroy$=new C}addSubscription(c){return c.pipe(j(this.destroy$))}ngOnDestroy(){this.destroy$.next(),console.log(this.constructor.name," destroyed")}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275dir=P({type:o})}};var Fe=(o,c,t)=>({$implicit:o,group:c,index:t}),Ee=(o,c)=>({$implicit:o,group:c});function Ne(o,c){o&1&&G(0)}function Te(o,c){if(o&1&&(e(0,`
                `),r(1,"c-col",2),e(2,`
                    `),y(3,Ne,1,0,"ng-container",9),e(4,`
                `),a(),e(5,`
                `)),o&2){let t=c.$implicit,n=c.$index;s();let i=$(25),l=s();m(3),p("ngTemplateOutlet",i)("ngTemplateOutletContext",q(2,Fe,t,l.configForm,n))}}function ke(o,c){o&1&&G(0)}function De(o,c){if(o&1&&(e(0,`
                            `),y(1,ke,1,0,"ng-container",9),e(2,`
                            `)),o&2){let t=c.$implicit,n=s(2),i=n.$implicit,l=n.group;s();let _=$(25);m(),p("ngTemplateOutlet",_)("ngTemplateOutletContext",U(2,Ee,t,l.get(i.key)))}}function Ge(o,c){if(o&1){let t=V();e(0,`
                    `),r(1,"c-card",11),e(2,`
                        `),r(3,"c-card-header")(4,"c-container"),e(5,`
                                `),r(6,"c-row",12),e(7,`
                                    `),r(8,"c-col"),e(9,`
                                        `),r(10,"strong"),e(11),a(),e(12,`
                                    `),a(),e(13,`
                                    `),r(14,"c-col",13),e(15,`
                                        `),r(16,"button",14),g("click",function(){u(t);let i=s().index,l=s(2);return f(l.toggleCollapse(l.rowNumber(i)))}),e(17,`
                                            `),A(),S(18,"svg",15),e(19,`
                                        `),a(),e(20,`
                                    `),a(),e(21,`
                                `),a()(),e(22,`
                        `),a(),e(23,`
                        `),L(),r(24,"c-card-body",16),e(25,`
                            `),r(26,"c-row",1),e(27,`
                                `),S(28,"label",17),e(29,`
                                `),r(30,"c-col",18),e(31,`
                                    `),r(32,"c-input-group"),e(33,`
                                        `),r(34,"input",19),g("change",function(i){u(t);let l=s().$implicit,_=s(2);return f(_.additionalSettings[l.key]=i.target.value)}),a(),e(35,`
                                        `),r(36,"button",20),g("click",function(){u(t);let i=s().$implicit,l=s(2);return f(l.addSetting(i.key))}),e(37,`
                                            Add
                                        `),a(),e(38,`
                                    `),a(),e(39,`
                                `),a(),e(40,`
                            `),a(),e(41,`

                            `),k(42,De,3,5,null,null,T),a(),e(44,`
                    `),a(),e(45,`
                    `)}if(o&2){let t=s(),n=t.$implicit,i=t.index,l=s(2);m(),p("formGroupName",n.key),m(10),O(n.label),m(7),p("name",l.visible()[l.rowNumber(i)]?"cilChevronBottom":"cilChevronRight"),m(6),p("visible",l.visible()[l.rowNumber(i)]),m(4),p("sm",4),m(6),p("id",B("new-setting-",n.key))("placeholder",B("New setting for ",n.label)),m(8),D(n.fields)}}function Ve(o,c){if(o&1&&(e(0,`
                    `),r(1,"c-row",1),e(2,`
                        `),r(3,"label",17),e(4),a(),e(5,`
                        `),r(6,"c-col",18),e(7,`
                            `),S(8,"input",21),e(9,`
                        `),a(),e(10,`
                    `),a(),e(11,`
                    `)),o&2){let t=s().$implicit;m(3),p("sm",4),m(),O(t.label),m(4),p("formControlName",t.key)("type",t.type)}}function $e(o,c){if(o&1&&(e(0,`
                `),r(1,"div",10),e(2,`
                    `),e(3,`
                    `),h(4,Ge,46,9),h(5,Ve,12,4),a(),e(6,`
            `)),o&2){let t=c.$implicit,n=c.group;m(),p("formGroup",n),m(3),v(t.type==="group"?4:-1),m(),v(t.type!=="group"?5:-1)}}function Oe(o,c){if(o&1){let t=V();e(0,`
    `),r(1,"c-row",1),e(2,`
        `),r(3,"c-col",2),e(4,`
            `),r(5,"c-input-group"),e(6,`
                `),r(7,"input",3),g("change",function(i){u(t);let l=s();return f(l.additionalSettings[l.addNewGroupConst]=i.target.value)}),a(),e(8,`
                `),r(9,"button",4),g("click",function(){u(t);let i=s();return f(i.addNewGroup())}),e(10,`Add Group
                `),a(),e(11,`
            `),a(),e(12,`
        `),a(),e(13,`
    `),a(),e(14,`
    `),r(15,"c-row",1),e(16,`
        `),r(17,"form",5),g("submit",function(i){u(t);let l=s();return f(l.onSubmit(i))}),e(18,`
            `),r(19,"c-row",1),e(20,`
                `),k(21,Te,6,6,null,null,T),a(),e(23,`

            `),y(24,$e,7,3,"ng-template",null,0,z),e(26,`

            `),e(27,`
            `),r(28,"div",6),e(29,`
                `),r(30,"button",7),g("click",function(i){u(t);let l=s();return f(l.reboot(i))}),e(31,"Reboot"),a(),e(32,`
                `),r(33,"button",8),e(34,"Save"),a(),e(35,`
            `),a(),e(36,`
        `),a(),e(37,`
    `),a(),e(38,`
    `)}if(o&2){let t=s();m(17),p("formGroup",t.configForm),m(4),D(t.configScheme),m(12),p("disabled",!t.configChanged())}}var ve=class o extends w{constructor(t,n,i){super();this.configSrv=t;this.fb=n;this.cd=i;this.visible=H({});this.configModel=new R(void 0);this.loaded=!1;this.additionalSettings={};this.addNewGroupConst="https://cdn.jsdelivr.net/gh/RuslanZubashenko/dist@ui-app/0.0.1.1/AddNewGroupConst";this.reload$=new C;this.addSubscription(this.reload$).pipe(I(()=>t.get())).subscribe(l=>{this.configModel.next(l),this.loaded=!0,i.detectChanges()}),this.addSubscription(this.configModel).pipe(M(l=>!!l),N(()=>this.configForm=void 0),N(()=>this.cd.detectChanges())).subscribe(l=>{this.configScheme=[];let _=0;for(let d in l){let F=l[d];this.configScheme.push({key:d.split(".")[0],label:d,configKey:d,type:"group",fields:Object.keys(F).map(x=>{let Se=this.resolveType(F[x]);return{key:x,label:x,type:Se,value:F[x]}})})}this.visible.update(d=>(d[this.rowNumber(_)]===void 0&&(d[this.rowNumber(_)]=!0),_++,d)),this.configForm=this.createForm(this.configScheme),i.detectChanges()}),this.reload$.next()}resolveType(t){switch(!0){case((""+t).length>0&&!Number.isNaN(+t)):return"number";case["true","false"].includes(t):return"bool";default:return"text"}}createForm(t){let n=this.fb.group({});return t.forEach(i=>{i.type==="group"?n.addControl(i.key,this.createForm(i.fields)):n.addControl(i.key,this.fb.control(i.value))}),n}async onSubmit(t){t.preventDefault();let n={};for(let i of this.configScheme)this.configForm?.get(i.key)?.dirty&&(n[i.configKey]=this.configForm?.get(i.key)?.value);await this.configSrv.save(n).then(()=>this.reload$.next())}async reboot(t){t.preventDefault(),await this.configSrv.reboot()}configChanged(){return JSON.stringify(this.configModel.value)!==JSON.stringify(this.configForm?.value)}addSetting(t){let n=this.additionalSettings[t];if(n){delete this.additionalSettings[t];let i=E({},this.configForm.value);i[t][n]||(i[t][n]=""),this.configModel.next(i)}}addNewGroup(){let t=this.additionalSettings[this.addNewGroupConst];if(t){delete this.additionalSettings[this.addNewGroupConst];let n=E({},this.configForm.value);n[t]||(n[t]={}),this.configModel.next(n)}}rowNumber(t){return Math.trunc(t/2)}toggleCollapse(t){this.visible.update(n=>(n[t]=!n[t],n))}static{this.\u0275fac=function(n){return new(n||o)(b(he),b(Ce),b(Q))}}static{this.\u0275cmp=J({type:o,selectors:[["app-configurations"]],features:[K],decls:3,vars:1,consts:[["fieldTemplate",""],[1,"mb-3"],["xs","6"],["cFormControl","","placeholder","Add new group",3,"change"],["cButton","","color","primary","type","button","variant","outline",3,"click"],["cForm","",3,"submit","formGroup"],[1,"gap-2"],["cButton","","color","warning",3,"click"],["cButton","","color","success","type","submit",3,"disabled"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"formGroup"],[1,"mb-4",3,"formGroupName"],[1,"justify-content-between"],["sm","1"],["cButton","","color","primary",3,"click"],["cIcon","",3,"name"],["cCollapse","",3,"visible"],["cCol","","cLabel","col",3,"sm"],["sm","8"],["cFormControl","",3,"change","id","placeholder"],["cButton","","color","warning","type","button","variant","outline",3,"click"],["cFormControl","",3,"formControlName","type"]],template:function(n,i){n&1&&(r(0,"c-row"),e(1,`

    `),h(2,Oe,39,2),a()),n&2&&(m(2),v(i.configForm?2:-1))},dependencies:[W,le,se,me,ee,ne,te,ye,fe,pe,de,ue,xe,_e,ge,be,ie,re,oe,Z,ae,ce,Y,X],encapsulation:2,changeDetection:0})}};export{ve as ConfigurationsComponent};
