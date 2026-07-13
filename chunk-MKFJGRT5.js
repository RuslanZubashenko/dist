import{b as D}from"./chunk-J6UQKZHN.js";import{a as O}from"./chunk-SUYGLXIB.js";import{I as b,J as E,K as H,M as B,Ra as z,Ta as V,U as I,fa as k,ga as M,ja as L,o as w}from"./chunk-DTT7BQ44.js";import{$a as x,Ac as C,Nb as S,Ob as A,Pb as T,Qb as a,Rb as n,Sb as i,Tb as s,bc as f,db as c,fa as v,gc as h,jc as m,la as g,ma as u,sb as y,tc as _,yb as l,yc as e}from"./chunk-44WESX7J.js";import"./chunk-IM5V7DCU.js";function $(t,r){if(t&1){let o=f();e(0,`
                `),n(1,"button",19),h("click",function(){g(o),m();let p=_(24);return u(p.toggleItem())}),e(2,`
                  Accordion item #0
                `),i(),e(3,`
              `)}if(t&2){m();let o=_(24);c(),a("collapsed",!o.visible)}}function F(t,r){if(t&1&&(e(0,`
                `),s(1,"div",20),e(2,`
              `)),t&2){let o=m();c(),a("innerHTML",o.getAccordionBodyText("first"),x)("gradient",!0)}}function j(t,r){if(t&1){let o=f();e(0,`
                `),n(1,"button",21),h("click",function(){g(o),m();let p=_(32);return u(p.toggleItem())}),e(2,`
                  Accordion item #1
                `),i(),e(3,`
              `)}if(t&2){m();let o=_(32);c(),a("collapsed",!o.visible)}}function P(t,r){t&1&&(e(0,`
                `),n(1,"div",22),e(2,`
                  `),n(3,"strong"),e(4,`This is the
                    `),n(5,"mark"),e(6,"#second"),i(),e(7,`
                    item accordion body.`),i(),e(8,` It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting
                  that just about any HTML can go within the `),n(9,"code"),e(10,".accordion-body"),i(),e(11,`,
                  though the transition does limit overflow.
                `),i(),e(12,`
              `))}function Y(t,r){if(t&1){let o=f();e(0,`
                `),n(1,"button",21),h("click",function(){g(o),m();let p=_(40);return u(p.toggleItem())}),e(2,`
                  Accordion item #2
                `),i(),e(3,`
              `)}if(t&2){m();let o=_(40);c(),a("collapsed",!o.visible)}}function R(t,r){if(t&1&&(e(0,`
                `),n(1,"div",22),e(2,`
                  `),s(3,"span",23),e(4,`
                `),i(),e(5,`
              `)),t&2){let o=m();c(3),a("innerHTML",o.getAccordionBodyText("third"),x)}}function q(t,r){t&1&&e(0,`
                Accordion item #0
              `)}function G(t,r){if(t&1&&(e(0,`
                `),s(1,"span",23),e(2,`
              `)),t&2){let o=m();c(),a("innerHTML",o.getAccordionBodyText("first"),x)}}function J(t,r){t&1&&e(0,`
                Accordion item #1
              `)}function K(t,r){if(t&1&&(e(0,`
                `),s(1,"span",23),e(2,`
              `)),t&2){let o=m();c(),a("innerHTML",o.getAccordionBodyText("second"),x)}}function N(t,r){t&1&&e(0,`
                Accordion item #2
              `)}function Q(t,r){if(t&1&&(e(0,`
                `),s(1,"span",23),e(2,`
              `)),t&2){let o=m();c(),a("innerHTML",o.getAccordionBodyText("third"),x)}}function U(t,r){if(t&1&&e(0),t&2){let o=m().$index;C(`
                  Custom Accordion item #`,o,`
                `)}}function W(t,r){if(t&1&&(e(0,`
                  `),n(1,"small")(2,"i"),e(3),i()(),e(4,`
                  `),s(5,"span",23),e(6,`
                `)),t&2){let o=m().$index,d=m();c(3),C("",o,"."),c(2),a("innerHTML",d.getAccordionBodyText(o),x)}}function X(t,r){if(t&1&&(e(0,`
              `),n(1,"c-accordion-item",9),e(2,`
                `),l(3,U,1,1,"ng-template",15),e(4,`
                `),l(5,W,7,2,"ng-template",16),e(6,`
              `),i(),e(7,`
            `)),t&2){let o=r.$index;c(),a("visible",o===1)}}var ce=(()=>{class t{constructor(){this.sanitizer=v(w),this.items=[1,2,3,4]}getAccordionBodyText(o){let d=`
      <strong>This is the <mark>#${o}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;return this.sanitizer.bypassSecurityTrustHtml(d)}static{this.\u0275fac=function(d){return new(d||t)}}static{this.\u0275cmp=y({type:t,selectors:[["app-accordions"]],decls:126,vars:5,consts:[["item0","cAccordionItem"],["item1","cAccordionItem"],["item2","cAccordionItem"],["xs","12"],["href","components/accordion","title","Accordion"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","components/accordion"],[1,"shadow","rounded-2",3,"alwaysOpen"],[3,"visible"],["cTemplateId","accordionHeaderTemplate"],["cTemplateId","accordionBodyTemplate"],["href","components/accordion#flush"],[3,"flush"],["visible",""],["cTemplateId","accordionHeader"],["cTemplateId","accordionBody"],["href","components/accordion#always-open"],["alwaysOpen","",1,"shadow","accordion-custom","rounded-2"],["cAccordionButton","","cBgColor","info",3,"click","collapsed"],["cBgColor","info",1,"accordion-body",3,"innerHTML","gradient"],["cAccordionButton","",3,"click","collapsed"],[1,"accordion-body"],[3,"innerHTML"]],template:function(d,p){d&1&&(n(0,"c-row"),e(1,`
  `),n(2,"c-col",3),e(3,`
    `),s(4,"app-docs-components",4),e(5,`
    `),n(6,"c-card",5),e(7,`
      `),n(8,"c-card-header"),e(9,`
        `),n(10,"strong"),e(11,"Angular Accordion"),i(),e(12,`
      `),i(),e(13,`
      `),n(14,"c-card-body"),e(15,`
        `),n(16,"p",6),e(17,`
          Click the accordions below to expand/collapse the accordion content.
        `),i(),e(18,`
        `),n(19,"app-docs-example",7),e(20,`
          `),n(21,"c-accordion",8),e(22,`
            `),n(23,"c-accordion-item",9,0),e(25,`
              `),l(26,$,4,1,"ng-template",10),e(27,`
              `),l(28,F,3,2,"ng-template",11),e(29,`
            `),i(),e(30,`
            `),n(31,"c-accordion-item",9,1),e(33,`
              `),l(34,j,4,1,"ng-template",10),e(35,`
              `),l(36,P,13,0,"ng-template",11),e(37,`
            `),i(),e(38,`
            `),n(39,"c-accordion-item",9,2),e(41,`
              `),l(42,Y,4,1,"ng-template",10),e(43,`
              `),l(44,R,6,1,"ng-template",11),e(45,`
            `),i(),e(46,`
          `),i(),e(47,`
        `),i(),e(48,`
      `),i(),e(49,`
    `),i(),e(50,`
    `),n(51,"c-card",5),e(52,`
      `),n(53,"c-card-header"),e(54,`
        `),n(55,"strong"),e(56,"Angular Accordion"),i(),e(57,` flush
      `),i(),e(58,`
      `),n(59,"c-card-body"),e(60,`
        `),n(61,"p",6),e(62,`
          Add `),n(63,"code"),e(64,"flush"),i(),e(65," to remove the default "),n(66,"code"),e(67,"background-color"),i(),e(68,`, some
          borders, and some rounded corners to render accordions edge-to-edge with their parent
          container.
        `),i(),e(69,`
        `),n(70,"app-docs-example",12),e(71,`
          `),n(72,"c-accordion",13),e(73,`
            `),n(74,"c-accordion-item",14),e(75,`
              `),l(76,q,1,0,"ng-template",15),e(77,`
              `),l(78,G,3,1,"ng-template",16),e(79,`
            `),i(),e(80,`
            `),n(81,"c-accordion-item"),e(82,`
              `),l(83,J,1,0,"ng-template",15),e(84,`
              `),l(85,K,3,1,"ng-template",16),e(86,`
            `),i(),e(87,`
            `),n(88,"c-accordion-item"),e(89,`
              `),l(90,N,1,0,"ng-template",15),e(91,`
              `),l(92,Q,3,1,"ng-template",16),e(93,`
            `),i(),e(94,`
          `),i(),e(95,`
        `),i(),e(96,`
      `),i(),e(97,`
    `),i(),e(98,`
    `),n(99,"c-card",5),e(100,`
      `),n(101,"c-card-header"),e(102,`
        `),n(103,"strong"),e(104,"Angular Accordion"),i(),e(105,` alwaysOpen
      `),i(),e(106,`
      `),n(107,"c-card-body"),e(108,`
        `),n(109,"p",6),e(110,`
          Add `),n(111,"code"),e(112,"alwaysOpen"),i(),e(113,` property to make accordion items stay open when another
          item is opened.
        `),i(),e(114,`
        `),n(115,"app-docs-example",17),e(116,`
          `),n(117,"c-accordion",18),e(118,`
            `),A(119,X,8,1,null,null,S),i(),e(121,`
        `),i(),e(122,`
      `),i(),e(123,`
    `),i(),e(124,`
  `),i(),e(125,`
`),i()),d&2&&(c(21),a("alwaysOpen",!1),c(2),a("visible",!1),c(8),a("visible",!1),c(8),a("visible",!1),c(33),a("flush",!0),c(47),T(p.items))},dependencies:[V,z,k,L,M,D,H,B,b,E,I,O],styles:[`[_nghost-%COMP%]     .accordion-custom .accordion-button{background-color:var(--cui-dark);color:var(--cui-white)}[_nghost-%COMP%]     .accordion-custom .accordion-button:after{--cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}`]})}}return t})();export{ce as AccordionsComponent};
