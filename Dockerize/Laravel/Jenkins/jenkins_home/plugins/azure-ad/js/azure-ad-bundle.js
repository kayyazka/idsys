/*! For license information please see azure-ad-bundle.js.LICENSE.txt */
(()=>{"use strict";var e={7404:(e,t,i)=>{i.d(t,{zi:()=>b});var o=i(1635),s=i(1039),n=i(174),r=i(5960),a=i(6028),l=i(1840),d=i(4882),c=i(5861),h=i(8753),u=i(1323),p=i(3120),g=i(9931);const f=":not([disabled])",v="[disabled]";class m extends n.${appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}(0,o.Cg)([s.CF],m.prototype,"appearance",void 0);const b=m.compose({baseName:"button",baseClass:n.$,template:(e,t)=>r.q`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${(0,a.K)("control")}
    >
        ${(0,d.LT)(e,t)}
        <span class="content" part="content">
            <slot ${(0,l.e)("defaultSlottedContent")}></slot>
        </span>
        ${(0,d.aO)(e,t)}
    </button>
`,styles:(e,t)=>c.A`
    :host(${f}) .control {
      cursor: pointer;
    }

    :host(${v}) .control {
      cursor: ${h.Z};
    }

    @media (forced-colors: none) {
      :host(${v}) .control {
        opacity: ${g.qB4};
      }
    }

    ${(0,u.wQ)(e,t,f,v)}
  `.withBehaviors((0,p.f)("neutral",(0,u._9)(e,t,f,v)),(0,p.f)("accent",(0,u.Vw)(e,t,f,v)),(0,p.f)("lightweight",(0,u.ZI)(e,t,f,v)),(0,p.f)("outline",(0,u.LA)(e,t,f,v)),(0,p.f)("stealth",(0,u.ss)(e,t,f,v))),shadowOptions:{delegatesFocus:!0}})},2615:(e,t,i)=>{i.d(t,{z1:()=>w});var o=i(1635),s=i(4637);class n extends s.g{}var r=i(2972),a=i(5960),l=i(4885),d=i(1039),c=i(7022),h=i(9931),u=i(8098),p=i(8517),g=i(5861),f=i(7707),v=i(1731),m=i(882),b=i(8172);class y extends n{cardFillColorChanged(e,t){if(t){const e=(0,c.Hs)(t);null!==e&&(this.neutralPaletteSource=t,h.pfK.setValueFor(this,u.q.create(e.r,e.g,e.b)))}}neutralPaletteSourceChanged(e,t){if(t){const e=(0,c.Hs)(t),i=u.q.create(e.r,e.g,e.b);h.roJ.setValueFor(this,p.p.create(i))}}handleChange(e,t){this.cardFillColor||h.pfK.setValueFor(this,(t=>h.M3E.getValueFor(t).evaluate(t,h.pfK.getValueFor(e)).rest))}connectedCallback(){super.connectedCallback();const e=(0,r.Z)(this);if(e){const t=l.cP.getNotifier(e);t.subscribe(this,"fillColor"),t.subscribe(this,"neutralPalette"),this.handleChange(e,"fillColor")}}}(0,o.Cg)([(0,d.CF)({attribute:"card-fill-color",mode:"fromView"})],y.prototype,"cardFillColor",void 0),(0,o.Cg)([(0,d.CF)({attribute:"neutral-palette-source",mode:"fromView"})],y.prototype,"neutralPaletteSource",void 0);const w=y.compose({baseName:"card",baseClass:n,template:(e,t)=>a.q`
    <slot></slot>
`,styles:(e,t)=>g.A`
    ${(0,f.V)("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${h.pfK};
      color: ${h.lHw};
      border: calc(${h.XAH} * 1px) solid ${h.ppm};
      border-radius: calc(${h.JUW} * 1px);
      box-shadow: ${b.eq};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors((0,v.mr)(g.A`
        :host {
          background: ${m.A.Canvas};
          color: ${m.A.CanvasText};
        }
      `))})},1389:(e,t,i)=>{i.d(t,{c:()=>$});var o=i(1880),s=i(1039),n=i(4885),r=i(5230),a=i(9871),l=i(4637);class d extends l.g{}class c extends((0,a.dx)(d)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class h extends c{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{this.readOnly||e.key!==r.gG||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}(0,o.Cg)([(0,s.CF)({attribute:"readonly",mode:"boolean"})],h.prototype,"readOnly",void 0),(0,o.Cg)([n.sH],h.prototype,"defaultSlottedNodes",void 0),(0,o.Cg)([n.sH],h.prototype,"indeterminate",void 0);var u=i(5960),p=i(1840),g=i(5861),f=i(7707),v=i(1445),m=i(8753),b=i(1731),y=i(882),w=i(6538),x=i(9931),k=i(4416),C=i(1151);const $=h.compose({baseName:"checkbox",template:(e,t)=>u.q`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${(0,p.e)("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>g.A`
    ${(0,f.V)("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${w.D} / 2 + ${x.vR1}) * 1px);
      height: calc((${w.D} / 2 + ${x.vR1}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${x.PbG} * 1px);
      border: calc(${x.XAH} * 1px) solid ${x.nF5};
      background: ${x.ymW};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${k.Ah}
      color: ${x.lHw};
      ${""} padding-inline-start: calc(${x.vR1} * 2px + 2px);
      margin-inline-end: calc(${x.vR1} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${x.lHw};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${x.l_5};
    }

    :host(:not(.disabled):hover) .control {
      background: ${x.IpM};
      border-color: ${x.vA6};
    }

    :host(:not(.disabled):active) .control {
      background: ${x.MPS};
      border-color: ${x.p4W};
    }

    :host(:${v.N}) .control {
      background: ${x.wsB};
      ${C.v}
    }

    :host(.checked) .control {
      background: ${x.IRh};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${x.OS0};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${x.amQ};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${m.Z};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${x.qB4};
    }
  `.withBehaviors((0,b.mr)(g.A`
        .control {
          border-color: ${y.A.FieldText};
          background: ${y.A.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${y.A.Highlight};
          background: ${y.A.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${y.A.FieldText};
        }
        :host(:${v.N}) .control {
          forced-color-adjust: none;
          outline-color: ${y.A.FieldText};
          background: ${y.A.Field};
          border-color: ${y.A.Highlight};
        }
        :host(.checked) .control {
          background: ${y.A.Highlight};
          border-color: ${y.A.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${y.A.HighlightText};
          border-color: ${y.A.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${y.A.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${y.A.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${y.A.GrayText};
          background: ${y.A.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${y.A.GrayText};
        }
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',indeterminateIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>\n    </svg>\n  '})},8517:(e,t,i)=>{i.d(t,{p:()=>f});var o,s=i(7820),n=i(6884),r=i(778),a=i(7122),l=i(4338);function d(e,t,i){return isNaN(e)||e<=0?t:e>=1?i:new a.M((0,s.Cc)(e,t.r,i.r),(0,s.Cc)(e,t.g,i.g),(0,s.Cc)(e,t.b,i.b),(0,s.Cc)(e,t.a,i.a))}!function(e){e[e.RGB=0]="RGB",e[e.HSL=1]="HSL",e[e.HSV=2]="HSV",e[e.XYZ=3]="XYZ",e[e.LAB=4]="LAB",e[e.LCH=5]="LCH"}(o||(o={}));var c=i(8098);function h(e,t,i=0,o=e.length-1){if(o===i)return e[i];const s=Math.floor((o-i)/2)+i;return t(e[s])?h(e,t,i,s):h(e,t,s+1,o)}var u=i(4184),p=i(1472);const g={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1},f=Object.freeze({create:function(e,t,i){return"number"==typeof e?f.from(c.q.create(e,t,i)):f.from(e)},from:function(e,t){return(0,c.m)(e)?v.from(e,t):v.from(c.q.create(e.r,e.g,e.b),t)}});class v{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,i,o){void 0===i&&(i=this.closestIndexOf(e));let s=this.swatches;const n=this.lastIndex;let r=i;return void 0===o&&(o=(0,u.F)(e)),-1===o&&(s=this.reversedSwatches,r=n-r),h(s,(i=>(0,p.v)(e,i)>=t),r,n)}get(e){return this.swatches[e]||this.swatches[(0,s.qE)(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(-1!==t)return this.closestIndexCache.set(e.relativeLuminance,t),t;const i=this.swatches.reduce(((t,i)=>Math.abs(i.relativeLuminance-e.relativeLuminance)<Math.abs(t.relativeLuminance-e.relativeLuminance)?i:t));return t=this.swatches.indexOf(i),this.closestIndexCache.set(e.relativeLuminance,t),t}static saturationBump(e,t){const i=(0,n.SU)(e).s,o=(0,n.SU)(t);if(o.s<i){const e=new r.D(o.h,i,o.l);return(0,n.QX)(e)}return t}static ramp(e){const t=e/100;return t>.5?(t-.5)/.5:2*t}static createHighResolutionPalette(e){const t=[],i=(0,n.mi)(a.M.fromObject(e).roundToPrecision(4)),o=(0,n.eK)(new l.h(0,i.a,i.b)).clamp().roundToPrecision(4),s=(0,n.eK)(new l.h(50,i.a,i.b)).clamp().roundToPrecision(4),r=(0,n.eK)(new l.h(100,i.a,i.b)).clamp().roundToPrecision(4),h=new a.M(0,0,0),u=new a.M(1,1,1),p=r.equalValue(u)?0:14,g=o.equalValue(h)?0:14;for(let e=100+p;e>=0-g;e-=.5){let i;i=e<0?d(e/g+1,h,o):e<=50?d(v.ramp(e),o,s):e<=100?d(v.ramp(e),s,r):d((e-100)/p,r,u),i=v.saturationBump(s,i).roundToPrecision(4),t.push(c.q.from(i))}return new v(e,t)}static adjustEnd(e,t,i,o){const n=-1===o?t.swatches:t.reversedSwatches,r=e=>{const i=t.closestIndexOf(e);return 1===o?t.lastIndex-i:i};1===o&&i.reverse();const a=e(i[i.length-2]);if((0,s.l)((0,p.v)(i[i.length-1],i[i.length-2]),2)<a){i.pop();const e=r(t.colorContrast(n[t.lastIndex],a,void 0,o))-r(i[i.length-2]);let s=1;for(let o=i.length-e-1;o<i.length;o++){const e=r(i[o]),a=o===i.length-1?t.lastIndex:e+s;i[o]=n[a],s++}}1===o&&i.reverse()}static createColorPaletteByContrast(e,t){const i=v.createHighResolutionPalette(e),o=e=>{const i=t.stepContrast+t.stepContrast*(1-e.relativeLuminance)*t.stepContrastRamp;return(0,s.l)(i,2)},n=[];let r=t.preserveSource?e:i.swatches[0];n.push(r);do{const e=o(r);r=i.colorContrast(r,e,void 0,1),n.push(r)}while(r.relativeLuminance>0);if(t.preserveSource){r=e;do{const e=o(r);r=i.colorContrast(r,e,void 0,-1),n.unshift(r)}while(r.relativeLuminance<1)}return this.adjustEnd(o,i,n,-1),t.preserveSource&&this.adjustEnd(o,i,n,1),n}static from(e,t){const i=void 0===t?g:Object.assign(Object.assign({},g),t);return new v(e,Object.freeze(v.createColorPaletteByContrast(e,i)))}}},8098:(e,t,i)=>{i.d(t,{m:()=>a,q:()=>r});var o=i(7122),s=i(6884),n=i(1472);const r=Object.freeze({create:(e,t,i)=>new l(e,t,i),from:e=>new l(e.r,e.g,e.b)});function a(e){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const i in t)if(typeof t[i]!=typeof e[i])return!1;return!0}class l extends o.M{constructor(e,t,i){super(e,t,i,1),this.toColorString=this.toStringHexRGB,this.contrast=n.v.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=(0,s.Z8)(this)}static fromObject(e){return new l(e.r,e.g,e.b)}}},7225:(e,t,i)=>{i.d(t,{Z:()=>n,y:()=>o});var o,s=i(8098);function n(e){return s.q.create(e,e,e)}!function(e){e[e.LightMode=.98]="LightMode",e[e.DarkMode=.15]="DarkMode"}(o||(o={}))},4184:(e,t,i)=>{i.d(t,{F:()=>s});var o=i(916);function s(e){return(0,o.H)(e)?-1:1}},916:(e,t,i)=>{i.d(t,{H:()=>s});const o=(-.1+Math.sqrt(.21))/2;function s(e){return e.relativeLuminance<=o}},1472:(e,t,i)=>{function o(e,t){const i=e.relativeLuminance>t.relativeLuminance?e:t,o=e.relativeLuminance>t.relativeLuminance?t:e;return(i.relativeLuminance+.05)/(o.relativeLuminance+.05)}i.d(t,{v:()=>o})},9931:(e,t,i)=>{i.d(t,{fdT:()=>mt,amQ:()=>Pt,KJd:()=>Lt,OS0:()=>Ft,IRh:()=>Dt,QL0:()=>qt,iLG:()=>Bt,YLI:()=>Nt,W_m:()=>zt,uB0:()=>Wt,cDQ:()=>Gt,eNp:()=>Zt,enQ:()=>jt,Sss:()=>O,li_:()=>me,OCo:()=>N,PbG:()=>M,Brd:()=>R,vR1:()=>E,oWd:()=>P,qB4:()=>L,pfK:()=>It,fFd:()=>Qi,WNM:()=>Wi,vdx:()=>z,J_F:()=>Mt,BgV:()=>Ht,XKp:()=>Et,l_5:()=>Rt,JUW:()=>H,eQf:()=>ft,X4G:()=>Jt,XtK:()=>Xt,MPS:()=>ri,wsB:()=>ai,IpM:()=>ni,ymW:()=>si,F_x:()=>ii,jMl:()=>ti,VYG:()=>Yt,leE:()=>ei,M3E:()=>li,F7s:()=>Kt,DKg:()=>pi,Vtk:()=>gi,Rgz:()=>ui,jIq:()=>ci,v8G:()=>hi,wOW:()=>bi,UBo:()=>yi,oO8:()=>mi,EE_:()=>fi,WlO:()=>vi,LIX:()=>$i,cRz:()=>_i,g8A:()=>Si,LnO:()=>Ci,lHw:()=>ki,Tkp:()=>xt,roJ:()=>vt,MYG:()=>Di,FZQ:()=>Oi,H7x:()=>Li,Fly:()=>Pi,hb6:()=>Ei,mbK:()=>Ti,WvW:()=>Vi,o_b:()=>Hi,ppm:()=>Ni,I21:()=>Ai,p4W:()=>ji,vA6:()=>Ui,nF5:()=>Bi,XAH:()=>V,Kgr:()=>U,$AV:()=>Z,Z69:()=>j,kSN:()=>W,dUM:()=>Q,FrF:()=>G,tDF:()=>K,wxg:()=>J,e9J:()=>X,YVy:()=>Y,BZ8:()=>te,vrI:()=>ee,TFp:()=>ie,Knw:()=>se,Oc7:()=>oe,aVA:()=>ne,PPT:()=>ae,bcZ:()=>re,FrW:()=>le,onW:()=>ce,weJ:()=>de,_UC:()=>he,x3P:()=>pe,Z67:()=>ue,X7g:()=>ge,Ygb:()=>ve,uwi:()=>fe});var o=i(6243),s=i(1157),n=i(8517),r=i(7022),a=i(8098);const l=a.q.create(1,1,1),d=a.q.create(0,0,0),c=a.q.create(.5,.5,.5),h=(0,r.Hs)("#0078D4"),u=a.q.create(h.r,h.g,h.b);function p(e,t,i,o,s){const n=e=>e.contrast(l)>=s?l:d,r=n(e),a=n(t);return{rest:r,hover:a,active:r.relativeLuminance===a.relativeLuminance?r:n(i),focus:n(o)}}var g,f=i(7122),v=i(6884);!function(e){e[e.Burn=0]="Burn",e[e.Color=1]="Color",e[e.Darken=2]="Darken",e[e.Dodge=3]="Dodge",e[e.Lighten=4]="Lighten",e[e.Multiply=5]="Multiply",e[e.Overlay=6]="Overlay",e[e.Screen=7]="Screen"}(g||(g={}));var m=i(4184),b=i(1472);class y{constructor(e,t,i,o){this.toColorString=()=>this.cssGradient,this.contrast=b.v.bind(null,this),this.createCSS=this.toColorString,this.color=new f.M(e,t,i),this.cssGradient=o,this.relativeLuminance=(0,v.Z8)(this.color),this.r=e,this.g=t,this.b=i}static fromObject(e,t){return new y(e.r,e.g,e.b,t)}}const w=new f.M(0,0,0),x=new f.M(1,1,1);function k(e,t,i,o,s,n,l,d,c=10,h=!1){const u=e.closestIndexOf(t);function p(i){if(h){const o=e.closestIndexOf(t),s=e.get(o),n=i.relativeLuminance<t.relativeLuminance?w:x,l=(0,v.Ep)((0,r.Hs)(i.toColorString()),(0,r.Hs)(s.toColorString()),n).roundToPrecision(2),d=function(e,t){if(t.a>=1)return t;if(t.a<=0)return new f.M(e.r,e.g,e.b,1);const i=t.a*t.r+(1-t.a)*e.r,o=t.a*t.g+(1-t.a)*e.g,s=t.a*t.b+(1-t.a)*e.b;return new f.M(i,o,s,1)}((0,r.Hs)(t.toColorString()),l);return a.q.from(d)}return i}void 0===d&&(d=(0,m.F)(t));const g=u+d*i,b=g+d*(o-i),k=g+d*(s-i),C=g+d*(n-i),$=-1===d?0:100-c,S=-1===d?c:100;function _(t,i){const o=e.get(t);if(i){const i=e.get(t+d*l),s=-1===d?i:o,n=-1===d?o:i,r=`linear-gradient(${p(s).toColorString()} ${$}%, ${p(n).toColorString()} ${S}%)`;return y.fromObject(s,r)}return p(o)}return{rest:_(g,!0),hover:_(b,!0),active:_(k,!1),focus:_(C,!0)}}var C=i(916);function $(e,t,i,o,s,n,r,a){null==a&&(a=(0,m.F)(t));const l=e.closestIndexOf(e.colorContrast(t,i));return{rest:e.get(l+a*o),hover:e.get(l+a*s),active:e.get(l+a*n),focus:e.get(l+a*r)}}function S(e,t,i,o,s,n,r){const a=e.closestIndexOf(t);return null==r&&(r=(0,m.F)(t)),{rest:e.get(a+r*i),hover:e.get(a+r*o),active:e.get(a+r*s),focus:e.get(a+r*n)}}function _(e,t,i,o,s,n,r=void 0,a,l,d,c,h=void 0){return(0,C.H)(t)?S(e,t,a,l,d,c,h):S(e,t,i,o,s,n,r)}var I=i(7225);function A(e,t){return e.closestIndexOf((0,I.Z)(t))}function T(e,t,i){return e.get(A(e,t)+-1*i)}const{create:D}=o.G;function F(e){return o.G.create({name:e,cssCustomPropertyName:null})}const P=D("direction").withDefault(s.O.ltr),L=D("disabled-opacity").withDefault(.3),O=D("base-height-multiplier").withDefault(8),R=(D("base-horizontal-spacing-multiplier").withDefault(3),D("density").withDefault(0)),E=D("design-unit").withDefault(4),M=D("control-corner-radius").withDefault(4),H=D("layer-corner-radius").withDefault(8),V=D("stroke-width").withDefault(1),z=D("focus-stroke-width").withDefault(2),N=D("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),q=D("font-weight").withDefault(400);function B(e){return t=>{const i=e.getValueFor(t),o=q.getValueFor(t);if(i.endsWith("px")){const e=Number.parseFloat(i.replace("px",""));if(e<=12)return`"wght" ${o}, "opsz" 8`;if(e>24)return`"wght" ${o}, "opsz" 36`}return`"wght" ${o}, "opsz" 10.5`}}const U=D("type-ramp-base-font-size").withDefault("14px"),j=D("type-ramp-base-line-height").withDefault("20px"),Z=D("type-ramp-base-font-variations").withDefault(B(U)),W=D("type-ramp-minus-1-font-size").withDefault("12px"),G=D("type-ramp-minus-1-line-height").withDefault("16px"),Q=D("type-ramp-minus-1-font-variations").withDefault(B(W)),K=D("type-ramp-minus-2-font-size").withDefault("10px"),X=D("type-ramp-minus-2-line-height").withDefault("14px"),J=D("type-ramp-minus-2-font-variations").withDefault(B(K)),Y=D("type-ramp-plus-1-font-size").withDefault("16px"),ee=D("type-ramp-plus-1-line-height").withDefault("22px"),te=D("type-ramp-plus-1-font-variations").withDefault(B(Y)),ie=D("type-ramp-plus-2-font-size").withDefault("20px"),oe=D("type-ramp-plus-2-line-height").withDefault("26px"),se=D("type-ramp-plus-2-font-variations").withDefault(B(ie)),ne=D("type-ramp-plus-3-font-size").withDefault("24px"),re=D("type-ramp-plus-3-line-height").withDefault("32px"),ae=D("type-ramp-plus-3-font-variations").withDefault(B(ne)),le=D("type-ramp-plus-4-font-size").withDefault("28px"),de=D("type-ramp-plus-4-line-height").withDefault("36px"),ce=D("type-ramp-plus-4-font-variations").withDefault(B(le)),he=D("type-ramp-plus-5-font-size").withDefault("32px"),ue=D("type-ramp-plus-5-line-height").withDefault("40px"),pe=D("type-ramp-plus-5-font-variations").withDefault(B(he)),ge=D("type-ramp-plus-6-font-size").withDefault("40px"),fe=D("type-ramp-plus-6-line-height").withDefault("52px"),ve=D("type-ramp-plus-6-font-variations").withDefault(B(ge)),me=D("base-layer-luminance").withDefault(I.y.LightMode),be=F("accent-fill-rest-delta").withDefault(0),ye=F("accent-fill-hover-delta").withDefault(-2),we=F("accent-fill-active-delta").withDefault(-5),xe=F("accent-fill-focus-delta").withDefault(0),ke=F("accent-foreground-rest-delta").withDefault(0),Ce=F("accent-foreground-hover-delta").withDefault(3),$e=F("accent-foreground-active-delta").withDefault(-8),Se=F("accent-foreground-focus-delta").withDefault(0),_e=F("neutral-fill-rest-delta").withDefault(-1),Ie=F("neutral-fill-hover-delta").withDefault(1),Ae=F("neutral-fill-active-delta").withDefault(0),Te=F("neutral-fill-focus-delta").withDefault(0),De=F("neutral-fill-input-rest-delta").withDefault(-1),Fe=F("neutral-fill-input-hover-delta").withDefault(1),Pe=F("neutral-fill-input-active-delta").withDefault(0),Le=F("neutral-fill-input-focus-delta").withDefault(-2),Oe=F("neutral-fill-input-alt-rest-delta").withDefault(2),Re=F("neutral-fill-input-alt-hover-delta").withDefault(4),Ee=F("neutral-fill-input-alt-active-delta").withDefault(6),Me=F("neutral-fill-input-alt-focus-delta").withDefault(2),He=F("neutral-fill-layer-rest-delta").withDefault(-2),Ve=F("neutral-fill-layer-hover-delta").withDefault(-3),ze=F("neutral-fill-layer-active-delta").withDefault(-3),Ne=F("neutral-fill-layer-alt-rest-delta").withDefault(-1),qe=F("neutral-fill-secondary-rest-delta").withDefault(3),Be=F("neutral-fill-secondary-hover-delta").withDefault(2),Ue=F("neutral-fill-secondary-active-delta").withDefault(1),je=F("neutral-fill-secondary-focus-delta").withDefault(3),Ze=F("neutral-fill-stealth-rest-delta").withDefault(0),We=F("neutral-fill-stealth-hover-delta").withDefault(3),Ge=F("neutral-fill-stealth-active-delta").withDefault(2),Qe=F("neutral-fill-stealth-focus-delta").withDefault(0),Ke=F("neutral-fill-strong-rest-delta").withDefault(0),Xe=F("neutral-fill-strong-hover-delta").withDefault(8),Je=F("neutral-fill-strong-active-delta").withDefault(-5),Ye=F("neutral-fill-strong-focus-delta").withDefault(0),et=F("neutral-stroke-rest-delta").withDefault(8),tt=F("neutral-stroke-hover-delta").withDefault(12),it=F("neutral-stroke-active-delta").withDefault(6),ot=F("neutral-stroke-focus-delta").withDefault(8),st=F("neutral-stroke-control-rest-delta").withDefault(3),nt=F("neutral-stroke-control-hover-delta").withDefault(5),rt=F("neutral-stroke-control-active-delta").withDefault(5),at=F("neutral-stroke-control-focus-delta").withDefault(5),lt=F("neutral-stroke-divider-rest-delta").withDefault(4),dt=F("neutral-stroke-layer-rest-delta").withDefault(3),ct=F("neutral-stroke-layer-hover-delta").withDefault(3),ht=F("neutral-stroke-layer-active-delta").withDefault(3),ut=F("neutral-stroke-strong-hover-delta").withDefault(0),pt=F("neutral-stroke-strong-active-delta").withDefault(0),gt=F("neutral-stroke-strong-focus-delta").withDefault(0),ft=D("neutral-base-color").withDefault(c),vt=F("neutral-palette").withDefault((e=>n.p.from(ft.getValueFor(e)))),mt=D("accent-base-color").withDefault(u),bt=F("accent-palette").withDefault((e=>n.p.from(mt.getValueFor(e)))),yt=F("neutral-layer-card-container-recipe").withDefault({evaluate:e=>T(vt.getValueFor(e),me.getValueFor(e),He.getValueFor(e))}),wt=(D("neutral-layer-card-container").withDefault((e=>yt.getValueFor(e).evaluate(e))),F("neutral-layer-floating-recipe").withDefault({evaluate:e=>function(e,t,i){return e.get(A(e,t)+i)}(vt.getValueFor(e),me.getValueFor(e),He.getValueFor(e))})),xt=D("neutral-layer-floating").withDefault((e=>wt.getValueFor(e).evaluate(e))),kt=F("neutral-layer-1-recipe").withDefault({evaluate:e=>function(e,t){return e.get(A(e,t))}(vt.getValueFor(e),me.getValueFor(e))}),Ct=D("neutral-layer-1").withDefault((e=>kt.getValueFor(e).evaluate(e))),$t=F("neutral-layer-2-recipe").withDefault({evaluate:e=>T(vt.getValueFor(e),me.getValueFor(e),He.getValueFor(e))}),St=(D("neutral-layer-2").withDefault((e=>$t.getValueFor(e).evaluate(e))),F("neutral-layer-3-recipe").withDefault({evaluate:e=>function(e,t,i){return e.get(A(e,t)+-1*i*2)}(vt.getValueFor(e),me.getValueFor(e),He.getValueFor(e))})),_t=(D("neutral-layer-3").withDefault((e=>St.getValueFor(e).evaluate(e))),F("neutral-layer-4-recipe").withDefault({evaluate:e=>function(e,t,i){return e.get(A(e,t)+-1*i*3)}(vt.getValueFor(e),me.getValueFor(e),He.getValueFor(e))})),It=(D("neutral-layer-4").withDefault((e=>_t.getValueFor(e).evaluate(e))),D("fill-color").withDefault((e=>Ct.getValueFor(e))));var At;!function(e){e[e.normal=4.5]="normal",e[e.large=3]="large"}(At||(At={}));const Tt=F("accent-fill-recipe").withDefault({evaluate:(e,t)=>function(e,t,i,o,s,n,r,a,l,d,c,h,u,p){return(0,C.H)(t)?$(e,t,8,d,c,h,u,void 0):$(e,t,5,o,s,n,r,void 0)}(bt.getValueFor(e),t||It.getValueFor(e),0,be.getValueFor(e),ye.getValueFor(e),we.getValueFor(e),xe.getValueFor(e),0,0,be.getValueFor(e),ye.getValueFor(e),we.getValueFor(e),xe.getValueFor(e))}),Dt=D("accent-fill-rest").withDefault((e=>Tt.getValueFor(e).evaluate(e).rest)),Ft=D("accent-fill-hover").withDefault((e=>Tt.getValueFor(e).evaluate(e).hover)),Pt=D("accent-fill-active").withDefault((e=>Tt.getValueFor(e).evaluate(e).active)),Lt=D("accent-fill-focus").withDefault((e=>Tt.getValueFor(e).evaluate(e).focus)),Ot=F("foreground-on-accent-recipe").withDefault({evaluate:e=>p(Dt.getValueFor(e),Ft.getValueFor(e),Pt.getValueFor(e),Lt.getValueFor(e),At.normal)}),Rt=D("foreground-on-accent-rest").withDefault((e=>Ot.getValueFor(e).evaluate(e).rest)),Et=D("foreground-on-accent-hover").withDefault((e=>Ot.getValueFor(e).evaluate(e).hover)),Mt=D("foreground-on-accent-active").withDefault((e=>Ot.getValueFor(e).evaluate(e).active)),Ht=D("foreground-on-accent-focus").withDefault((e=>Ot.getValueFor(e).evaluate(e).focus)),Vt=F("accent-foreground-recipe").withDefault({evaluate:(e,t)=>$(bt.getValueFor(e),t||It.getValueFor(e),9.5,ke.getValueFor(e),Ce.getValueFor(e),$e.getValueFor(e),Se.getValueFor(e))}),zt=D("accent-foreground-rest").withDefault((e=>Vt.getValueFor(e).evaluate(e).rest)),Nt=D("accent-foreground-hover").withDefault((e=>Vt.getValueFor(e).evaluate(e).hover)),qt=D("accent-foreground-active").withDefault((e=>Vt.getValueFor(e).evaluate(e).active)),Bt=D("accent-foreground-focus").withDefault((e=>Vt.getValueFor(e).evaluate(e).focus)),Ut=F("accent-stroke-control-recipe").withDefault({evaluate:(e,t)=>k(vt.getValueFor(e),t||It.getValueFor(e),-3,-3,-3,-3,10,1,void 0,!0)}),jt=D("accent-stroke-control-rest").withDefault((e=>Ut.getValueFor(e).evaluate(e,Dt.getValueFor(e)).rest)),Zt=D("accent-stroke-control-hover").withDefault((e=>Ut.getValueFor(e).evaluate(e,Ft.getValueFor(e)).hover)),Wt=D("accent-stroke-control-active").withDefault((e=>Ut.getValueFor(e).evaluate(e,Pt.getValueFor(e)).active)),Gt=D("accent-stroke-control-focus").withDefault((e=>Ut.getValueFor(e).evaluate(e,Lt.getValueFor(e)).focus)),Qt=F("neutral-fill-recipe").withDefault({evaluate:(e,t)=>_(vt.getValueFor(e),t||It.getValueFor(e),_e.getValueFor(e),Ie.getValueFor(e),Ae.getValueFor(e),Te.getValueFor(e),void 0,2,3,1,2,void 0)}),Kt=D("neutral-fill-rest").withDefault((e=>Qt.getValueFor(e).evaluate(e).rest)),Xt=D("neutral-fill-hover").withDefault((e=>Qt.getValueFor(e).evaluate(e).hover)),Jt=D("neutral-fill-active").withDefault((e=>Qt.getValueFor(e).evaluate(e).active)),Yt=(D("neutral-fill-focus").withDefault((e=>Qt.getValueFor(e).evaluate(e).focus)),F("neutral-fill-input-recipe").withDefault({evaluate:(e,t)=>_(vt.getValueFor(e),t||It.getValueFor(e),De.getValueFor(e),Fe.getValueFor(e),Pe.getValueFor(e),Le.getValueFor(e),void 0,2,3,1,0,void 0)})),ei=D("neutral-fill-input-rest").withDefault((e=>Yt.getValueFor(e).evaluate(e).rest)),ti=D("neutral-fill-input-hover").withDefault((e=>Yt.getValueFor(e).evaluate(e).hover)),ii=(D("neutral-fill-input-active").withDefault((e=>Yt.getValueFor(e).evaluate(e).active)),D("neutral-fill-input-focus").withDefault((e=>Yt.getValueFor(e).evaluate(e).focus))),oi=F("neutral-fill-input-alt-recipe").withDefault({evaluate:(e,t)=>_(vt.getValueFor(e),t||It.getValueFor(e),Oe.getValueFor(e),Re.getValueFor(e),Ee.getValueFor(e),Me.getValueFor(e),1,Oe.getValueFor(e),Oe.getValueFor(e)-Re.getValueFor(e),Oe.getValueFor(e)-Ee.getValueFor(e),Me.getValueFor(e),1)}),si=D("neutral-fill-input-alt-rest").withDefault((e=>oi.getValueFor(e).evaluate(e).rest)),ni=D("neutral-fill-input-alt-hover").withDefault((e=>oi.getValueFor(e).evaluate(e).hover)),ri=D("neutral-fill-input-alt-active").withDefault((e=>oi.getValueFor(e).evaluate(e).active)),ai=D("neutral-fill-input-alt-focus").withDefault((e=>oi.getValueFor(e).evaluate(e).focus)),li=F("neutral-fill-layer-recipe").withDefault({evaluate:(e,t)=>S(vt.getValueFor(e),t||It.getValueFor(e),He.getValueFor(e),Ve.getValueFor(e),ze.getValueFor(e),He.getValueFor(e),1)}),di=(D("neutral-fill-layer-rest").withDefault((e=>li.getValueFor(e).evaluate(e).rest)),D("neutral-fill-layer-hover").withDefault((e=>li.getValueFor(e).evaluate(e).hover)),D("neutral-fill-layer-active").withDefault((e=>li.getValueFor(e).evaluate(e).active)),F("neutral-fill-layer-alt-recipe").withDefault({evaluate:(e,t)=>S(vt.getValueFor(e),t||It.getValueFor(e),Ne.getValueFor(e),Ne.getValueFor(e),Ne.getValueFor(e),Ne.getValueFor(e))})),ci=(D("neutral-fill-layer-alt-rest").withDefault((e=>di.getValueFor(e).evaluate(e).rest)),F("neutral-fill-secondary-recipe").withDefault({evaluate:(e,t)=>S(vt.getValueFor(e),t||It.getValueFor(e),qe.getValueFor(e),Be.getValueFor(e),Ue.getValueFor(e),je.getValueFor(e))})),hi=D("neutral-fill-secondary-rest").withDefault((e=>ci.getValueFor(e).evaluate(e).rest)),ui=D("neutral-fill-secondary-hover").withDefault((e=>ci.getValueFor(e).evaluate(e).hover)),pi=D("neutral-fill-secondary-active").withDefault((e=>ci.getValueFor(e).evaluate(e).active)),gi=D("neutral-fill-secondary-focus").withDefault((e=>ci.getValueFor(e).evaluate(e).focus)),fi=F("neutral-fill-stealth-recipe").withDefault({evaluate:(e,t)=>S(vt.getValueFor(e),t||It.getValueFor(e),Ze.getValueFor(e),We.getValueFor(e),Ge.getValueFor(e),Qe.getValueFor(e))}),vi=D("neutral-fill-stealth-rest").withDefault((e=>fi.getValueFor(e).evaluate(e).rest)),mi=D("neutral-fill-stealth-hover").withDefault((e=>fi.getValueFor(e).evaluate(e).hover)),bi=D("neutral-fill-stealth-active").withDefault((e=>fi.getValueFor(e).evaluate(e).active)),yi=D("neutral-fill-stealth-focus").withDefault((e=>fi.getValueFor(e).evaluate(e).focus)),wi=F("neutral-fill-strong-recipe").withDefault({evaluate:(e,t)=>$(vt.getValueFor(e),t||It.getValueFor(e),4.5,Ke.getValueFor(e),Xe.getValueFor(e),Je.getValueFor(e),Ye.getValueFor(e))}),xi=(D("neutral-fill-strong-rest").withDefault((e=>wi.getValueFor(e).evaluate(e).rest)),D("neutral-fill-strong-hover").withDefault((e=>wi.getValueFor(e).evaluate(e).hover)),D("neutral-fill-strong-active").withDefault((e=>wi.getValueFor(e).evaluate(e).active)),D("neutral-fill-strong-focus").withDefault((e=>wi.getValueFor(e).evaluate(e).focus)),F("neutral-foreground-recipe").withDefault({evaluate:(e,t)=>$(vt.getValueFor(e),t||It.getValueFor(e),16,0,-19,-30,0)})),ki=D("neutral-foreground-rest").withDefault((e=>xi.getValueFor(e).evaluate(e).rest)),Ci=D("neutral-foreground-hover").withDefault((e=>xi.getValueFor(e).evaluate(e).hover)),$i=D("neutral-foreground-active").withDefault((e=>xi.getValueFor(e).evaluate(e).active)),Si=(D("neutral-foreground-focus").withDefault((e=>xi.getValueFor(e).evaluate(e).focus)),F("neutral-foreground-hint-recipe").withDefault({evaluate:(e,t)=>function(e,t,i){return e.colorContrast(t,4.5)}(vt.getValueFor(e),t||It.getValueFor(e))})),_i=D("neutral-foreground-hint").withDefault((e=>Si.getValueFor(e).evaluate(e))),Ii=F("neutral-stroke-recipe").withDefault({evaluate:(e,t)=>S(vt.getValueFor(e),t||It.getValueFor(e),et.getValueFor(e),tt.getValueFor(e),it.getValueFor(e),ot.getValueFor(e))}),Ai=D("neutral-stroke-rest").withDefault((e=>Ii.getValueFor(e).evaluate(e).rest)),Ti=D("neutral-stroke-hover").withDefault((e=>Ii.getValueFor(e).evaluate(e).hover)),Di=D("neutral-stroke-active").withDefault((e=>Ii.getValueFor(e).evaluate(e).active)),Fi=(D("neutral-stroke-focus").withDefault((e=>Ii.getValueFor(e).evaluate(e).focus)),F("neutral-stroke-control-recipe").withDefault({evaluate:(e,t)=>k(vt.getValueFor(e),t||It.getValueFor(e),st.getValueFor(e),nt.getValueFor(e),rt.getValueFor(e),at.getValueFor(e),5)})),Pi=D("neutral-stroke-control-rest").withDefault((e=>Fi.getValueFor(e).evaluate(e).rest)),Li=D("neutral-stroke-control-hover").withDefault((e=>Fi.getValueFor(e).evaluate(e).hover)),Oi=D("neutral-stroke-control-active").withDefault((e=>Fi.getValueFor(e).evaluate(e).active)),Ri=(D("neutral-stroke-control-focus").withDefault((e=>Fi.getValueFor(e).evaluate(e).focus)),F("neutral-stroke-divider-recipe").withDefault({evaluate:(e,t)=>function(e,t,i){return e.get(e.closestIndexOf(t)+(0,m.F)(t)*i)}(vt.getValueFor(e),t||It.getValueFor(e),lt.getValueFor(e))})),Ei=D("neutral-stroke-divider-rest").withDefault((e=>Ri.getValueFor(e).evaluate(e))),Mi=F("neutral-stroke-input-recipe").withDefault({evaluate:(e,t)=>function(e,t,i,o,s,n,r,a){const l=e.closestIndexOf(t),d=(0,m.F)(t),c=l+d*i,h=c+d*(o-i),u=c+d*(s-i),p=c+d*(n-i),g=`calc(100% - ${a})`;function f(t,i){const o=e.get(t);if(i){const i=e.get(t+20*d),s=`linear-gradient(${o.toColorString()} ${g}, ${i.toColorString()} ${g}, ${i.toColorString()})`;return y.fromObject(o,s)}return o}return{rest:f(c,!0),hover:f(h,!0),active:f(u,!1),focus:f(p,!0)}}(vt.getValueFor(e),t||It.getValueFor(e),st.getValueFor(e),nt.getValueFor(e),rt.getValueFor(e),at.getValueFor(e),0,V.getValueFor(e)+"px")}),Hi=D("neutral-stroke-input-rest").withDefault((e=>Mi.getValueFor(e).evaluate(e).rest)),Vi=D("neutral-stroke-input-hover").withDefault((e=>Mi.getValueFor(e).evaluate(e).hover)),zi=(D("neutral-stroke-input-active").withDefault((e=>Mi.getValueFor(e).evaluate(e).active)),D("neutral-stroke-input-focus").withDefault((e=>Mi.getValueFor(e).evaluate(e).focus)),F("neutral-stroke-layer-recipe").withDefault({evaluate:(e,t)=>S(vt.getValueFor(e),t||It.getValueFor(e),dt.getValueFor(e),ct.getValueFor(e),ht.getValueFor(e),dt.getValueFor(e))})),Ni=D("neutral-stroke-layer-rest").withDefault((e=>zi.getValueFor(e).evaluate(e).rest)),qi=(D("neutral-stroke-layer-hover").withDefault((e=>zi.getValueFor(e).evaluate(e).hover)),D("neutral-stroke-layer-active").withDefault((e=>zi.getValueFor(e).evaluate(e).active)),F("neutral-stroke-strong-recipe").withDefault({evaluate:(e,t)=>$(vt.getValueFor(e),t||It.getValueFor(e),5.5,0,ut.getValueFor(e),pt.getValueFor(e),gt.getValueFor(e))})),Bi=D("neutral-stroke-strong-rest").withDefault((e=>qi.getValueFor(e).evaluate(e).rest)),Ui=D("neutral-stroke-strong-hover").withDefault((e=>qi.getValueFor(e).evaluate(e).hover)),ji=D("neutral-stroke-strong-active").withDefault((e=>qi.getValueFor(e).evaluate(e).active)),Zi=(D("neutral-stroke-strong-focus").withDefault((e=>qi.getValueFor(e).evaluate(e).focus)),F("focus-stroke-outer-recipe").withDefault({evaluate:e=>{return vt.getValueFor(e),t=It.getValueFor(e),(0,C.H)(t)?l:d;var t}})),Wi=D("focus-stroke-outer").withDefault((e=>Zi.getValueFor(e).evaluate(e))),Gi=F("focus-stroke-inner-recipe").withDefault({evaluate:e=>{return bt.getValueFor(e),t=It.getValueFor(e),Wi.getValueFor(e),(0,C.H)(t)?d:l;var t}}),Qi=D("focus-stroke-inner").withDefault((e=>Gi.getValueFor(e).evaluate(e))),Ki=F("foreground-on-accent-large-recipe").withDefault({evaluate:e=>p(Dt.getValueFor(e),Ft.getValueFor(e),Pt.getValueFor(e),Lt.getValueFor(e),At.large)}),Xi=(D("foreground-on-accent-rest-large").withDefault((e=>Ki.getValueFor(e).evaluate(e).rest)),D("foreground-on-accent-hover-large").withDefault((e=>Ki.getValueFor(e).evaluate(e,Ft.getValueFor(e)).hover)),D("foreground-on-accent-active-large").withDefault((e=>Ki.getValueFor(e).evaluate(e,Pt.getValueFor(e)).active)),D("foreground-on-accent-focus-large").withDefault((e=>Ki.getValueFor(e).evaluate(e,Lt.getValueFor(e)).focus)),D("neutral-fill-inverse-rest-delta").withDefault(0)),Ji=D("neutral-fill-inverse-hover-delta").withDefault(-3),Yi=D("neutral-fill-inverse-active-delta").withDefault(7),eo=D("neutral-fill-inverse-focus-delta").withDefault(0),to=F("neutral-fill-inverse-recipe").withDefault({evaluate:(e,t)=>function(e,t,i,o,s,n){const r=(0,m.F)(t),a=e.closestIndexOf(e.colorContrast(t,14)),l=a+r*Math.abs(i-o);let d,c;return(1===r?i<o:r*i>r*o)?(d=a,c=l):(d=l,c=a),{rest:e.get(d),hover:e.get(c),active:e.get(d+r*s),focus:e.get(d+r*n)}}(vt.getValueFor(e),t||It.getValueFor(e),Xi.getValueFor(e),Ji.getValueFor(e),Yi.getValueFor(e),eo.getValueFor(e))});D("neutral-fill-inverse-rest").withDefault((e=>to.getValueFor(e).evaluate(e).rest)),D("neutral-fill-inverse-hover").withDefault((e=>to.getValueFor(e).evaluate(e).hover)),D("neutral-fill-inverse-active").withDefault((e=>to.getValueFor(e).evaluate(e).active)),D("neutral-fill-inverse-focus").withDefault((e=>to.getValueFor(e).evaluate(e).focus))},4791:(e,t,i)=>{i.d(t,{m9:()=>p});var o=i(9725),s=i(5960),n=i(5330),r=i(5861),a=i(882),l=i(7707),d=i(1731),c=i(6538),h=i(9931);class u extends o.z{}const p=u.compose({baseName:"progress-ring",template:(e,t)=>s.q`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${(0,n.z)((e=>"number"==typeof e.value),s.q`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>44*e.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,s.q`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>r.A`
    ${(0,l.V)("flex")} :host {
      align-items: center;
      height: calc(${c.D} * 1px);
      width: calc(${c.D} * 1px);
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke-width: 2px;
    }

    .determinate {
      stroke: ${h.IRh};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${h.IRh};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    :host(.paused) .indeterminate-indicator-1 {
      animation: none;
      stroke: ${h.cRz};
    }

    :host(.paused) .determinate {
      stroke: ${h.cRz};
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `.withBehaviors((0,d.mr)(r.A`
        .background {
          stroke: ${a.A.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${a.A.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${a.A.GrayText};
        }
      `)),indeterminateIndicator:'\n    <svg class="progress" part="progress" viewBox="0 0 16 16">\n        <circle\n            class="background"\n            part="background"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n        <circle\n            class="indeterminate-indicator-1"\n            part="indeterminate-indicator-1"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n    </svg>\n  '})},7580:(e,t,i)=>{i.d(t,{_0:()=>g});var o=i(1880),s=i(1039),n=i(4637);class r extends n.g{constructor(){super(...arguments),this.shape="rect"}}(0,o.Cg)([s.CF],r.prototype,"fill",void 0),(0,o.Cg)([s.CF],r.prototype,"shape",void 0),(0,o.Cg)([s.CF],r.prototype,"pattern",void 0),(0,o.Cg)([(0,s.CF)({mode:"boolean"})],r.prototype,"shimmer",void 0);var a=i(5960),l=i(5330),d=i(5861),c=i(7707),h=i(1731),u=i(882),p=i(9931);const g=r.compose({baseName:"skeleton",template:(e,t)=>a.q`
    <template
        class="${e=>"circle"===e.shape?"circle":"rect"}"
        pattern="${e=>e.pattern}"
        ?shimmer="${e=>e.shimmer}"
    >
        ${(0,l.z)((e=>!0===e.shimmer),a.q`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${e=>e.pattern}" role="presentation">
            <img class="pattern" src="${e=>e.pattern}" />
        </object>
        <slot></slot>
    </template>
`,styles:(e,t)=>d.A`
    ${(0,c.V)("block")} :host {
      --skeleton-fill-default: ${p.v8G};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${p.Rgz} 51%,
        var(--skeleton-fill, var(--skeleton-fill-default)) 100%
      );
      --skeleton-animation-timing-default: ease-in-out;
    }

    :host(.rect) {
      border-radius: calc(${p.PbG} * 1px);
    }

    :host(.circle) {
      border-radius: 100%;
      overflow: hidden;
    }

    object {
      position: absolute;
      width: 100%;
      height: auto;
      z-index: 2;
    }

    object img {
      width: 100%;
      height: auto;
    }

    ${(0,c.V)("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${p.v8G});
      animation: shimmer 2s infinite;
      animation-timing-function: var(--skeleton-animation-timing, var(--skeleton-timing-default));
      animation-direction: normal;
      z-index: 1;
    }

    ::slotted(svg) {
      z-index: 2;
    }

    ::slotted(.pattern) {
      width: 100%;
      height: 100%;
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `.withBehaviors((0,h.mr)(d.A`
        :host{
          background-color: ${u.A.CanvasText};
        }
      `))})},8172:(e,t,i)=>{i.d(t,{Cw:()=>f,H0:()=>p,eq:()=>d,tf:()=>h});var o=i(6243);const s=o.G.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(e,t,i)=>{let o=.12,s=.14;return t>16&&(o=.2,s=.24),`0 0 2px rgba(0, 0, 0, ${o}), 0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${s})`}}),n=o.G.create("elevation-shadow-card-rest-size").withDefault(4),r=o.G.create("elevation-shadow-card-hover-size").withDefault(8),a=o.G.create("elevation-shadow-card-active-size").withDefault(0),l=o.G.create("elevation-shadow-card-focus-size").withDefault(8),d=o.G.create("elevation-shadow-card-rest").withDefault((e=>s.getValueFor(e).evaluate(e,n.getValueFor(e)))),c=(o.G.create("elevation-shadow-card-hover").withDefault((e=>s.getValueFor(e).evaluate(e,r.getValueFor(e)))),o.G.create("elevation-shadow-card-active").withDefault((e=>s.getValueFor(e).evaluate(e,a.getValueFor(e)))),o.G.create("elevation-shadow-card-focus").withDefault((e=>s.getValueFor(e).evaluate(e,l.getValueFor(e)))),o.G.create("elevation-shadow-tooltip-size").withDefault(16)),h=o.G.create("elevation-shadow-tooltip").withDefault((e=>s.getValueFor(e).evaluate(e,c.getValueFor(e)))),u=o.G.create("elevation-shadow-flyout-size").withDefault(32),p=o.G.create("elevation-shadow-flyout").withDefault((e=>s.getValueFor(e).evaluate(e,u.getValueFor(e)))),g=o.G.create("elevation-shadow-dialog-size").withDefault(128),f=o.G.create("elevation-shadow-dialog").withDefault((e=>s.getValueFor(e).evaluate(e,g.getValueFor(e))))},1151:(e,t,i)=>{i.d(t,{W:()=>n,v:()=>r});var o=i(5861),s=i(9931);const n=o.L`
  outline: calc(${s.vdx} * 1px) solid ${s.WNM};
  outline-offset: calc(${s.vdx} * -1px);
`,r=o.L`
  outline: calc(${s.vdx} * 1px) solid ${s.WNM};
  outline-offset: calc(${s.XAH} * 1px);
`},1323:(e,t,i)=>{i.d(t,{LA:()=>v,Vw:()=>g,ZI:()=>f,_9:()=>p,ss:()=>m,wQ:()=>u});var o=i(5861),s=i(882),n=i(7707),r=i(1445),a=i(1731),l=i(6538),d=i(9931),c=i(4416),h=i(1151);const u=(e,t,i,s="[disabled]")=>o.A`
    ${(0,n.V)("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${c.Ah}
      height: calc(${l.D} * 1px);
      min-width: calc(${l.D} * 1px);
      color: ${d.lHw};
      border-radius: calc(${d.PbG} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${d.XAH} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${d.vR1} * 2 * ${d.Brd})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${r.N} {
      ${h.W}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `,p=(e,t,i,n="[disabled]")=>o.A`
    .control {
      background: padding-box linear-gradient(${d.F7s}, ${d.F7s}),
        border-box ${d.Fly};
    }

    :host(${i}:hover) .control {
      background: padding-box linear-gradient(${d.XtK}, ${d.XtK}),
        border-box ${d.H7x};
    }

    :host(${i}:active) .control {
      background: padding-box linear-gradient(${d.X4G}, ${d.X4G}),
        border-box ${d.FZQ};
    }

    :host(${n}) .control {
      background: padding-box linear-gradient(${d.F7s}, ${d.F7s}),
        border-box ${d.I21};
    }
  `.withBehaviors((0,a.mr)(o.A`
        .control {
          background: ${s.A.ButtonFace};
          border-color: ${s.A.ButtonText};
          color: ${s.A.ButtonText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          forced-color-adjust: none;
          background: ${s.A.HighlightText};
          border-color: ${s.A.Highlight};
          color: ${s.A.Highlight};
        }

        :host(${n}) .control {
          background: transparent;
          border-color: ${s.A.GrayText};
          color: ${s.A.GrayText};
        }

        .control:${r.N} {
          outline-color: ${s.A.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${s.A.LinkText};
          color: ${s.A.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${s.A.CanvasText};
          color: ${s.A.CanvasText};
        }
    `)),g=(e,t,i,n="[disabled]")=>o.A`
    .control {
      background: padding-box linear-gradient(${d.IRh}, ${d.IRh}),
        border-box ${d.enQ};
      color: ${d.l_5};
    }

    :host(${i}:hover) .control {
      background: padding-box linear-gradient(${d.OS0}, ${d.OS0}),
        border-box ${d.eNp};
      color: ${d.XKp};
    }

    :host(${i}:active) .control {
      background: padding-box linear-gradient(${d.amQ}, ${d.amQ}),
        border-box ${d.uB0};
      color: ${d.J_F};
    }

    :host(${n}) .control {
      background: ${d.IRh};
    }

    .control:${r.N} {
      box-shadow: 0 0 0 calc(${d.vdx} * 1px) ${d.fFd} inset !important;
    }
  `.withBehaviors((0,a.mr)(o.A`
        .control {
          forced-color-adjust: none;
          background: ${s.A.Highlight};
          color: ${s.A.HighlightText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: ${s.A.HighlightText};
          border-color: ${s.A.Highlight};
          color: ${s.A.Highlight};
        }

        :host(${n}) .control {
          background: transparent;
          border-color: ${s.A.GrayText};
          color: ${s.A.GrayText};
        }

        .control:${r.N} {
          outline-color: ${s.A.CanvasText};
          box-shadow: 0 0 0 calc(${d.vdx} * 1px) ${s.A.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${s.A.LinkText};
          color: ${s.A.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${s.A.ButtonFace};
          border-color: ${s.A.LinkText};
          color: ${s.A.LinkText};
        }
      `)),f=(e,t,i,n="[disabled]")=>o.A`
    :host {
      color: ${d.W_m};
    }

    .control {
      background: ${d.WlO};
    }

    :host(${i}:hover) .control {
      background: ${d.oO8};
      color: ${d.YLI};
    }

    :host(${i}:active) .control {
      background: ${d.wOW};
      color: ${d.QL0};
    }

    :host(${n}) .control {
      background: ${d.WlO};
    }
  `.withBehaviors((0,a.mr)(o.A`
        :host {
          color: ${s.A.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: transparent;
          border-color: ${s.A.ButtonText};
          color: ${s.A.ButtonText};
        }

        :host(${n}) .control {
          background: transparent;
          color: ${s.A.GrayText};
        }

        .control:${r.N} {
          outline-color: ${s.A.CanvasText};
        }

        :host([href]) .control {
          color: ${s.A.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${s.A.LinkText};
          color: ${s.A.LinkText};
        }
      `)),v=(e,t,i,n="[disabled]")=>o.A`
    .control {
      background: transparent !important;
      border-color: ${d.I21};
    }

    :host(${i}:hover) .control {
      border-color: ${d.mbK};
    }

    :host(${i}:active) .control {
      border-color: ${d.MYG};
    }

    :host(${n}) .control {
      background: transparent !important;
      border-color: ${d.I21};
    }
  `.withBehaviors((0,a.mr)(o.A`
        .control {
          border-color: ${s.A.ButtonText};
          color: ${s.A.ButtonText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: ${s.A.HighlightText};
          border-color: ${s.A.Highlight};
          color: ${s.A.Highlight};
        }

        :host(${n}) .control {
          border-color: ${s.A.GrayText};
          color: ${s.A.GrayText};
        }

        .control:${r.N} {
          outline-color: ${s.A.CanvasText};
        }

        :host([href]) .control {
          border-color: ${s.A.LinkText};
          color: ${s.A.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${s.A.CanvasText};
          color: ${s.A.CanvasText};
        }
      `)),m=(e,t,i,n="[disabled]")=>o.A`
    .control {
      background: ${d.WlO};
    }

    :host(${i}:hover) .control {
      background: ${d.oO8};
    }

    :host(${i}:active) .control {
      background: ${d.wOW};
    }

    :host(${n}) .control {
      background: ${d.WlO};
    }
  `.withBehaviors((0,a.mr)(o.A`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${s.A.ButtonText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: transparent;
          border-color: ${s.A.ButtonText};
          color: ${s.A.ButtonText};
        }

        :host(${n}) .control {
          background: transparent;
          color: ${s.A.GrayText};
        }
        
        .control:${r.N} {
          outline-color: ${s.A.CanvasText};
        }

        :host([href]) .control {
          color: ${s.A.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${s.A.LinkText};
          color: ${s.A.LinkText};
        }
      `))},6523:(e,t,i)=>{i.d(t,{Tv:()=>m,aB:()=>f,dM:()=>b,lb:()=>y,y$:()=>v});var o=i(5861),s=i(6243),n=i(8753),r=i(882),a=i(9931),l=i(4416),d=i(6538),c=i(1151);const h=s.G.create("input-placeholder-rest").withDefault((e=>{const t=a.VYG.getValueFor(e);return a.g8A.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),u=s.G.create("input-placeholder-hover").withDefault((e=>{const t=a.VYG.getValueFor(e);return a.g8A.getValueFor(e).evaluate(e,t.evaluate(e).hover)})),p=s.G.create("input-filled-placeholder-rest").withDefault((e=>{const t=a.jIq.getValueFor(e);return a.g8A.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),g=s.G.create("input-filled-placeholder-hover").withDefault((e=>{const t=a.jIq.getValueFor(e);return a.g8A.getValueFor(e).evaluate(e,t.evaluate(e).hover)})),f=(e,t,i)=>o.A`
  :host {
    ${l.Ah}
    color: ${a.lHw};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${i} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${a.XAH} * 1px) solid transparent;
    border-radius: calc(${a.PbG} * 1px);
    height: calc(${d.D} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
    outline: none;
  }

  .label {
    display: block;
    color: ${a.lHw};
    cursor: pointer;
    ${l.Ah}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${i},
  :host([readonly]) ${i},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${n.Z};
  }

  :host([disabled]) {
    opacity: ${a.qB4};
  }
`,v=(e,t,i)=>o.A`
  @media (forced-colors: none) {
    :host(:not([disabled]):active)::after {
      left: 50%;
      width: 40%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(:not([disabled]):focus-within)::after {
      left: 0;
      width: 100%;
      transform: none;
    }

    :host(:not([disabled]):active)::after,
    :host(:not([disabled]):focus-within:not(:active))::after {
      content: '';
      position: absolute;
      height: calc(${a.vdx} * 1px);
      bottom: 0;
      border-bottom: calc(${a.vdx} * 1px) solid ${a.IRh};
      border-bottom-left-radius: calc(${a.PbG} * 1px);
      border-bottom-right-radius: calc(${a.PbG} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,m=(e,t,i,s=":not([disabled]):not(:focus-within)")=>o.A`
  ${i} {
    background: padding-box linear-gradient(${a.leE}, ${a.leE}),
      border-box ${a.o_b};
  }

  :host(${s}:hover) ${i} {
    background: padding-box linear-gradient(${a.jMl}, ${a.jMl}),
      border-box ${a.WvW};
  }

  :host(:not([disabled]):focus-within) ${i} {
    background: padding-box linear-gradient(${a.F_x}, ${a.F_x}),
      border-box ${a.o_b};
  }
  
  :host([disabled]) ${i} {
    background: padding-box linear-gradient(${a.leE}, ${a.leE}),
      border-box ${a.I21};
  }

  .control::placeholder {
    color: ${h};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${u};
  }
`,b=(e,t,i,s=":not([disabled]):not(:focus-within)")=>o.A`
  ${i} {
    background: ${a.v8G};
  }

  :host(${s}:hover) ${i} {
    background: ${a.Rgz};
  }

  :host(:not([disabled]):focus-within) ${i} {
    background: ${a.Vtk};
  }

  :host([disabled]) ${i} {
    background: ${a.v8G};
  }

  .control::placeholder {
    color: ${p};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${g};
  }
`,y=(e,t,i,s=":not([disabled]):not(:focus-within)")=>o.A`
  :host {
    color: ${r.A.ButtonText};
  }

  ${i} {
    background: ${r.A.ButtonFace};
    border-color: ${r.A.ButtonText};
  }

  :host(${s}:hover) ${i},
  :host(:not([disabled]):focus-within) ${i} {
    border-color: ${r.A.Highlight};
  }

  :host([disabled]) ${i} {
    opacity: 1;
    background: ${r.A.ButtonFace};
    border-color: ${r.A.GrayText};
  }

  .control::placeholder,
  :host(${s}:hover) .control::placeholder {
    color: ${r.A.CanvasText};
  }

  :host(:not([disabled]):focus) ${i} {
    ${c.W}
    outline-color: ${r.A.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${r.A.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${r.A.GrayText};
  }
`},4416:(e,t,i)=>{i.d(t,{Ah:()=>n});var o=i(5861),s=i(9931);const n=o.L`
  font-family: ${s.OCo};
  font-size: ${s.Kgr};
  line-height: ${s.Z69};
  font-weight: initial;
  font-variation-settings: ${s.$AV};
`;o.L`
  font-family: ${s.OCo};
  font-size: ${s.kSN};
  line-height: ${s.FrF};
  font-weight: initial;
  font-variation-settings: ${s.dUM};
`,o.L`
  font-family: ${s.OCo};
  font-size: ${s.tDF};
  line-height: ${s.e9J};
  font-weight: initial;
  font-variation-settings: ${s.wxg};
`,o.L`
  font-family: ${s.OCo};
  font-size: ${s.YVy};
  line-height: ${s.vrI};
  font-weight: initial;
  font-variation-settings: ${s.BZ8};
`,o.L`
  font-family: ${s.OCo};
  font-size: ${s.TFp};
  line-height: ${s.Oc7};
  font-weight: initial;
  font-variation-settings: ${s.Knw};
`,o.L`
  font-family: ${s.OCo};
  font-size: ${s.aVA};
  line-height: ${s.bcZ};
  font-weight: initial;
  font-variation-settings: ${s.PPT};
`,o.L`
  font-family: ${s.OCo};
  font-size: ${s.FrW};
  line-height: ${s.weJ};
  font-weight: initial;
  font-variation-settings: ${s.onW};
`,o.L`
  font-family: ${s.OCo};
  font-size: ${s._UC};
  line-height: ${s.Z67};
  font-weight: initial;
  font-variation-settings: ${s.x3P};
`,o.L`
  font-family: ${s.OCo};
  font-size: ${s.X7g};
  line-height: ${s.uwi};
  font-weight: initial;
  font-variation-settings: ${s.Ygb};
`},6538:(e,t,i)=>{i.d(t,{D:()=>n});var o=i(5861),s=i(9931);const n=o.L`(${s.Sss} + ${s.Brd}) * ${s.vR1}`},9860:(e,t,i)=>{i.d(t,{oR:()=>T});var o=i(1635),s=i(1039),n=i(1880),r=i(4331),a=i(4885),l=i(7057),d=i(4882),c=i(9210),h=i(9871),u=i(4637);class p extends u.g{}class g extends((0,h.rf)(p)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class f extends g{constructor(){super(...arguments),this.type="text"}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&r.dv.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}(0,n.Cg)([(0,s.CF)({attribute:"readonly",mode:"boolean"})],f.prototype,"readOnly",void 0),(0,n.Cg)([(0,s.CF)({mode:"boolean"})],f.prototype,"autofocus",void 0),(0,n.Cg)([s.CF],f.prototype,"placeholder",void 0),(0,n.Cg)([s.CF],f.prototype,"type",void 0),(0,n.Cg)([s.CF],f.prototype,"list",void 0),(0,n.Cg)([(0,s.CF)({converter:s.R$})],f.prototype,"maxlength",void 0),(0,n.Cg)([(0,s.CF)({converter:s.R$})],f.prototype,"minlength",void 0),(0,n.Cg)([s.CF],f.prototype,"pattern",void 0),(0,n.Cg)([(0,s.CF)({converter:s.R$})],f.prototype,"size",void 0),(0,n.Cg)([(0,s.CF)({mode:"boolean"})],f.prototype,"spellcheck",void 0),(0,n.Cg)([a.sH],f.prototype,"defaultSlottedNodes",void 0);class v{}(0,c.X)(v,l.z),(0,c.X)(f,d.qw,v);var m=i(5960),b=i(1840),y=i(6028),w=i(6773),x=i(5861),k=i(7707),C=i(1731),$=i(6523),S=i(3120),_=i(9931);const I=".root";class A extends f{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}(0,o.Cg)([s.CF],A.prototype,"appearance",void 0);const T=A.compose({baseName:"text-field",baseClass:f,template:(e,t)=>m.q`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${(0,b.e)({property:"defaultSlottedNodes",filter:w.g})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${(0,d.LT)(e,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${(0,y.K)("control")}
            />
            ${(0,d.aO)(e,t)}
        </div>
    </template>
`,styles:(e,t)=>x.A`
    ${(0,k.V)("inline-block")}

    ${(0,$.aB)(e,t,I)}

    ${(0,$.y$)(e,t,I)}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${_.vR1} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors((0,S.f)("outline",(0,$.Tv)(e,t,I)),(0,S.f)("filled",(0,$.dM)(e,t,I)),(0,C.mr)((0,$.lb)(e,t,I))),shadowOptions:{delegatesFocus:!0}})},3120:(e,t,i)=>{i.d(t,{f:()=>n});var o=i(4885);class s{constructor(e,t,i){this.propertyName=e,this.value=t,this.styles=i}bind(e){o.cP.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){o.cP.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function n(e,t){return new s("appearance",e,t)}},1880:(e,t,i)=>{function o(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}i.d(t,{Cg:()=>o})},7323:(e,t,i)=>{i.d(t,{e:()=>s});const o=["none","hover","click"],s=(e,t="none")=>(e=>"string"==typeof e&&o.includes(e))(e)?e:t},2886:(e,t,i)=>{i.d(t,{R:()=>ue,x:()=>ce});var o=i(5045),s=i(5292),n=i(5468),r=i(6172),a=i(3204),l=i(7573),d=i(3511),c=i(9313),h=i(7723),u=i(1309),p=i(283);const g=[l.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{font-size:var(--default-font-size)}:host .title{font-size:14px;font-weight:600;padding:20px 0 12px;line-height:19px}:host .file-list-wrapper{background-color:var(--file-list-background-color,var(--neutral-layer-floating));border:var(--file-list-border,none);position:relative;display:flex;flex-direction:column;border-radius:8px}:host .file-list-wrapper .title{font-size:14px;font-weight:600;margin:0 20px -15px}:host .file-list-wrapper .file-list{display:flex;padding:var(--file-list-padding,0);margin:var(--file-list-margin,0);flex-direction:column;list-style:none}:host .file-list-wrapper .file-list .file-item{cursor:pointer;border-radius:var(--file-border-radius)}:host .file-list-wrapper .file-list .file-item:focus,:host .file-list-wrapper .file-list .file-item:focus-within{--file-background-color:var(--file-background-color-focus, var(--neutral-layer-2))}:host .file-list-wrapper .file-list .file-item.selected{--file-background-color:var(--file-background-color-active, var(--neutral-layer-3))}:host .file-list-wrapper .file-list .file-item .mgt-file-item{--file-padding:10px 20px 10px 20px;--file-padding-inline-start:24px;--file-border-radius:2px;--file-background-color:var(--file-item-background-color, var(--neutral-layer-1))}:host .file-list-wrapper .progress-ring{margin:4px auto;width:var(--progress-ring-size,24px);height:var(--progress-ring-size,24px)}:host .file-list-wrapper .show-more{text-align:center;font-size:var(--show-more-button-font-size, 12px);padding:var(--show-more-button-padding,0);border-radius:0 0 var(--show-more-button-border-bottom-right-radius,var(--file-list-border-radius,8px)) var(--show-more-button-border-bottom-left-radius,var(--file-list-border-radius,8px));background-color:var(--show-more-button-background-color,var(--neutral-stroke-divider-rest))}:host .file-list-wrapper .show-more:hover{background-color:var(--show-more-button-background-color-hover,var(--neutral-fill-input-alt-active))}:host .file-list-wrapper .show-more-text{font-size:var(--show-more-button-font-size, 12px)}:host .file-list-wrapper .shared_insight_file{display:flex;align-items:center;padding:11px 20px}:host .file-list-wrapper .shared_insight_file:hover{background-color:var(--file-item-background-color,var(--neutral-layer-1));cursor:pointer}:host .file-list-wrapper .shared_insight_file:last-child{margin-bottom:unset}:host .file-list-wrapper .shared_insight_file .shared_insight_file__icon{width:28px;min-width:28px;height:28px;margin-inline-end:12px;display:flex;align-items:center;justify-content:center}:host .file-list-wrapper .shared_insight_file .shared_insight_file__icon img{height:28px;width:28px}:host .file-list-wrapper .shared_insight_file .shared_insight_file__details{min-width:0;margin-inline-end:40px}:host .file-list-wrapper .shared_insight_file .shared_insight_file__details .shared_insight_file__name{font-size:var(--file-line1-font-size, var(--size-font-size, 12px));color:var(--file-line1-color,var(--neutral-foreground-rest))}:host .file-list-wrapper .shared_insight_file .shared_insight_file__details .shared_insight_file__last-modified{font-size:var(--file-line3-font-size, var(--size-font-size, 12px));color:var(--file-line3-color,var(--secondary-text-color))}:host .file-list-wrapper .shared_insight_file .shared_insight_file__details>div{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
`],f={showMoreSubtitle:"Show more items",filesSectionTitle:"Files",sharedTextSubtitle:"Shared"};var v=i(8263),m=i(9725),b=i(5960),y=i(5330),w=i(5861),x=i(882),k=i(7707),C=i(1731),$=i(9931);class S extends m.z{}const _=S.compose({baseName:"progress",template:(e,t)=>b.q`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${(0,y.z)((e=>"number"==typeof e.value),b.q`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${e=>e.percentComplete}%"
                    ></div>
                </div>
            `,b.q`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${t.indeterminateIndicator1||""}
                        ${t.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,styles:(e,t)=>w.A`
    ${(0,k.V)("flex")} :host {
      align-items: center;
      height: calc((${$.XAH} * 3) * 1px);
    }

    .progress {
      background-color: ${$.nF5};
      border-radius: calc(${$.vR1} * 1px);
      width: 100%;
      height: calc(${$.XAH} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${$.IRh};
      border-radius: calc(${$.vR1} * 1px);
      height: calc((${$.XAH} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${$.XAH} * 3) * 1px);
      border-radius: calc(${$.vR1} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${$.IRh};
      border-radius: calc(${$.vR1} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${$.IRh};
      border-radius: calc(${$.vR1} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${$.cRz};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${$.cRz};
    }

    @keyframes indeterminate-1 {
      0% {
        opacity: 1;
        transform: translateX(-100%);
      }
      70% {
        opacity: 1;
        transform: translateX(300%);
      }
      70.01% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateX(300%);
      }
    }

    @keyframes indeterminate-2 {
      0% {
        opacity: 0;
        transform: translateX(-150%);
      }
      29.99% {
        opacity: 0;
      }
      30% {
        opacity: 1;
        transform: translateX(-150%);
      }
      100% {
        transform: translateX(166.66%);
        opacity: 1;
      }
    }
  `.withBehaviors((0,C.mr)(w.A`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${x.A.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${x.A.GrayText};
        }
      `)),indeterminateIndicator1:'\n    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n  ',indeterminateIndicator2:'\n    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>\n  '});var I=i(7404),A=i(1389),T=i(1880),D=i(4331),F=i(4885),P=i(1039),L=i(5230),O=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"].join(","),R="undefined"==typeof Element,E=R?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,M=!R&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},H=function(e){return"INPUT"===e.tagName},V=function(e){var t=e.getBoundingClientRect(),i=t.width,o=t.height;return 0===i&&0===o},z=function(e,t){return!(function(e){return function(e){return H(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,i=e.form||M(e),o=function(e){return i.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var s=function(e,t){for(var i=0;i<e.length;i++)if(e[i].checked&&e[i].form===t)return e[i]}(t,e.form);return!s||s===e}(e)}(t)||function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex}(t)<0||!function(e,t){return!(t.disabled||function(e){return H(e)&&"hidden"===e.type}(t)||function(e,t){var i=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var s=E.call(e,"details>summary:first-of-type")?e.parentElement:e;if(E.call(s,"details:not([open]) *"))return!0;var n=M(e).host,r=(null==n?void 0:n.ownerDocument.contains(n))||e.ownerDocument.contains(e);if(i&&"full"!==i){if("non-zero-area"===i)return V(e)}else{if("function"==typeof o){for(var a=e;e;){var l=e.parentElement,d=M(e);if(l&&!l.shadowRoot&&!0===o(l))return V(e);e=e.assignedSlot?e.assignedSlot:l||d===e.ownerDocument?l:d.host}e=a}if(r)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var i=0;i<t.children.length;i++){var o=t.children.item(i);if("LEGEND"===o.tagName)return!!E.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))}(e,t))},N=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==E.call(e,O)&&z(t,e)},q=i(4637);class B extends q.g{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&!this.hidden)switch(e.key){case L.F9:this.dismiss(),e.preventDefault();break;case L.J9:this.handleTabKeyDown(e)}},this.handleDocumentFocus=e=>{!e.defaultPrevented&&this.shouldForceFocus(e.target)&&(this.focusFirstElement(),e.preventDefault())},this.handleTabKeyDown=e=>{if(!this.trapFocus||this.hidden)return;const t=this.getTabQueueBounds();return 0!==t.length?1===t.length?(t[0].focus(),void e.preventDefault()):void(e.shiftKey&&e.target===t[0]?(t[t.length-1].focus(),e.preventDefault()):e.shiftKey||e.target!==t[t.length-1]||(t[0].focus(),e.preventDefault())):void 0},this.getTabQueueBounds=()=>B.reduceTabbableItems([],this),this.focusFirstElement=()=>{const e=this.getTabQueueBounds();e.length>0?e[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=e=>this.isTrappingFocus&&!this.contains(e),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=e=>{const t=void 0===e?this.shouldTrapFocus():e;t&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),D.dv.queueUpdate((()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()}))):!t&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=F.cP.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(e,t){"hidden"===t&&this.updateTrapFocus()}static reduceTabbableItems(e,t){return"-1"===t.getAttribute("tabindex")?e:N(t)||B.isFocusableFastElement(t)&&B.hasTabbableShadow(t)?(e.push(t),e):t.childElementCount?e.concat(Array.from(t.children).reduce(B.reduceTabbableItems,[])):e}static isFocusableFastElement(e){var t,i;return!!(null===(i=null===(t=e.$fastController)||void 0===t?void 0:t.definition.shadowOptions)||void 0===i?void 0:i.delegatesFocus)}static hasTabbableShadow(e){var t,i;return Array.from(null!==(i=null===(t=e.shadowRoot)||void 0===t?void 0:t.querySelectorAll("*"))&&void 0!==i?i:[]).some((e=>N(e)))}}(0,T.Cg)([(0,P.CF)({mode:"boolean"})],B.prototype,"modal",void 0),(0,T.Cg)([(0,P.CF)({mode:"boolean"})],B.prototype,"hidden",void 0),(0,T.Cg)([(0,P.CF)({attribute:"trap-focus",mode:"boolean"})],B.prototype,"trapFocus",void 0),(0,T.Cg)([(0,P.CF)({attribute:"aria-describedby"})],B.prototype,"ariaDescribedby",void 0),(0,T.Cg)([(0,P.CF)({attribute:"aria-labelledby"})],B.prototype,"ariaLabelledby",void 0),(0,T.Cg)([(0,P.CF)({attribute:"aria-label"})],B.prototype,"ariaLabel",void 0);var U=i(6028),j=i(8172);const Z=B.compose({baseName:"dialog",template:(e,t)=>b.q`
    <div class="positioning-region" part="positioning-region">
        ${(0,y.z)((e=>e.modal),b.q`
                <div
                    class="overlay"
                    part="overlay"
                    role="presentation"
                    @click="${e=>e.dismiss()}"
                ></div>
            `)}
        <div
            role="dialog"
            tabindex="-1"
            class="control"
            part="control"
            aria-modal="${e=>e.modal}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-label="${e=>e.ariaLabel}"
            ${(0,U.K)("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`,styles:(e,t)=>w.A`
  :host([hidden]) {
    display: none;
  }

  :host {
    --dialog-height: 480px;
    --dialog-width: 640px;
    display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    touch-action: none;
  }

  .positioning-region {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .control {
    box-shadow: ${j.Cw};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${$.JUW} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${$.pfK};
    z-index: 1;
    border: calc(${$.XAH} * 1px) solid transparent;
  }
`});var W=i(5304),G=i(6572),Q=i(6389),K=i(7822);const X=[l.AH`
:host .file-upload-area-button{width:auto;display:flex;align-items:end;justify-content:end;margin-inline-end:36px;margin-top:30px}:host .focus,:host :focus{outline:0}:host fluent-button .upload-icon path{fill:var(--file-upload-button-text-color,var(--foreground-on-accent-rest))}:host fluent-button.file-upload-button::part(control){border:var(--file-upload-button-border,none);background:var(--file-upload-button-background-color,var(--accent-fill-rest))}:host fluent-button.file-upload-button::part(control):hover{background:var(--file-upload-button-background-color-hover,var(--accent-fill-hover))}:host fluent-button.file-upload-button .upload-text{color:var(--file-upload-button-text-color,var(--foreground-on-accent-rest));font-weight:400;line-height:20px}:host input{display:none}:host fluent-progress.file-upload-bar{width:180px;margin-top:10px}:host fluent-dialog::part(overlay){opacity:.5}:host fluent-dialog::part(control){--dialog-width:$file-upload-dialog-width;--dialog-height:$file-upload-dialog-height;padding:var(--file-upload-dialog-padding,24px);border:var(--file-upload-dialog-border,1px solid var(--neutral-fill-rest))}:host fluent-dialog .file-upload-dialog-ok{background:var(--file-upload-dialog-keep-both-button-background-color,var(--accent-fill-rest));border:var(--file-upload-dialog-keep-both-button-border,none);color:var(--file-upload-dialog-keep-both-button-text-color,var(--foreground-on-accent-rest))}:host fluent-dialog .file-upload-dialog-ok:hover{background:var(--file-upload-dialog-keep-both-button-background-color-hover,var(--accent-fill-hover))}:host fluent-dialog .file-upload-dialog-cancel{background:var(--file-upload-dialog-replace-button-background-color,var(--accent-fill-rest));border:var(--file-upload-dialog-replace-button-border,1px solid var(--neutral-foreground-rest));color:var(--file-upload-dialog-replace-button-text-color,var(--neutral-foreground-rest))}:host fluent-dialog .file-upload-dialog-cancel:hover{background:var(--file-upload-dialog-replace-button-background-color-hover,var(--accent-fill-hover))}:host fluent-checkbox{margin-top:12px}:host fluent-checkbox .file-upload-dialog-check{color:var(--file-upload-dialog-text-color,--foreground-on-accent-rest)}:host .file-upload-table{display:flex}:host .file-upload-table.upload{display:flex}:host .file-upload-table .file-upload-cell{padding:1px 0 1px 1px;display:table-cell;vertical-align:middle;position:relative}:host .file-upload-table .file-upload-cell.percent-indicator{padding-inline-start:10px}:host .file-upload-table .file-upload-cell .description{opacity:.5;position:relative}:host .file-upload-table .file-upload-cell .file-upload-filename{max-width:250px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .file-upload-table .file-upload-cell .file-upload-status{position:absolute;left:28px}:host .file-upload-table .file-upload-cell .file-upload-cancel{cursor:pointer;margin-inline-start:20px}:host .file-upload-table .file-upload-cell .file-upload-name{width:auto}:host .file-upload-table .file-upload-cell .cancel-icon{fill:var(--file-upload-dialog-text-color,var(--neutral-foreground-rest))}:host .mgt-file-item{--file-background-color:transparent;--file-padding:0 12px;--file-padding-inline-start:24px}:host .file-upload-template{clear:both}:host .file-upload-template .file-upload-folder-tab{padding-inline-start:20px}:host .file-upload-dialog{display:none}:host .file-upload-dialog .file-upload-dialog-content{background-color:var(--file-upload-dialog-background-color,var(--accent-fill-rest));color:var(--file-upload-dialog-text-color,var(--neutral-foreground-rest))}:host .file-upload-dialog .file-upload-dialog-content-text{margin-bottom:36px}:host .file-upload-dialog .file-upload-dialog-title{margin-top:0}:host .file-upload-dialog .file-upload-dialog-editor{display:flex;align-items:end;justify-content:end;gap:5px}:host .file-upload-dialog .file-upload-dialog-close{float:right;cursor:pointer}:host .file-upload-dialog .file-upload-dialog-close svg{fill:var(--file-upload-dialog-text-color,var(--neutral-foreground-rest));padding-right:5px}:host .file-upload-dialog.visible{display:block}:host fluent-checkbox.file-upload-dialog-check.hide{display:none}:host .file-upload-dialog-success{cursor:pointer;opacity:.5}:host #file-upload-border{display:none}:host #file-upload-border.visible{border:var(--file-upload-border-drag,1px dashed #0078d4);background-color:var(--file-upload-background-color-drag,rgba(0,120,212,.1));position:absolute;inset:0;z-index:1;display:inline-block}[dir=rtl] :host .file-upload-status{left:0;right:28px}@media (forced-colors:active){:host fluent-button .upload-icon path{fill:highlighttext}:host fluent-button.file-upload-button::part(control){border-width:1px;border-style:solid;border-color:buttontext;background:highlight}:host fluent-button.file-upload-button::part(control):hover{background:highlighttext;border-color:highlight}:host fluent-button.file-upload-button .upload-text{color:highlighttext}:host fluent-button:hover .upload-icon path{fill:highlight}:host fluent-button:hover.file-upload-button::part(control){border-color:highlight;background:highlighttext}:host fluent-button:hover.file-upload-button .upload-text{color:highlight}}
`],J={failUploadFile:"File upload failed",successUploadFile:"File upload succeeded",cancelUploadFile:"File cancel.",buttonUploadFile:"Upload Files",maximumFilesTitle:"Maximum files",maximumFiles:"Sorry, the maximum number of files you can upload at once is {MaxNumber}. Do you want to upload the first {MaxNumber} files or reselect?",maximumFileSizeTitle:"Maximum files size",maximumFileSize:'Sorry, the maximum file size to upload is {FileSize}. The file "{FileName}" has ',fileTypeTitle:"File type",fileType:'Sorry, the format of following file "{FileName}" cannot be uploaded.',checkAgain:"Don't show again",checkApplyAll:"Apply to all",buttonOk:"OK",buttonCancel:"Cancel",buttonUpload:"Upload",buttonKeep:"Keep both",buttonReplace:"Replace",buttonReselect:"Reselect",fileReplaceTitle:"Replace file",fileReplace:'Do you want to replace the file "{FileName}" or keep both files?',uploadButtonLabel:"File upload button"};var Y=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},ee=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},te=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const ie=e=>e.isDirectory,oe=e=>"getAsEntry"in e&&"function"==typeof e.getAsEntry;class se extends W.D{static get styles(){return X}get strings(){return J}static get requiredScopes(){return[...new Set(["files.readwrite","files.readwrite.all","sites.readwrite.all"])]}get _dropEffect(){return"copy"}constructor(){super(),this._dragCounter=0,this._maxChunkSize=4194304,this._dialogTitle="",this._dialogContent="",this._dialogPrimaryButton="",this._dialogSecondaryButton="",this._dialogCheckBox="",this._applyAll=!1,this._applyAllConflictBehavior=null,this._maximumFileSize=!1,this._excludedFileType=!1,this.onFileUploadChange=e=>{const t=e.target;!e||t.files.length<1||this.readUploadedFiles(t.files,(()=>t.value=null))},this.onFileUploadClick=()=>{this.renderRoot.querySelector("#file-upload-input").click()},this.handleonDragOver=e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer.items&&e.dataTransfer.items.length>0&&(e.dataTransfer.dropEffect=e.dataTransfer.dropEffect=this._dropEffect)},this.handleonDragEnter=e=>{e.preventDefault(),e.stopPropagation(),this._dragCounter++,e.dataTransfer.items&&e.dataTransfer.items.length>0&&(e.dataTransfer.dropEffect=this._dropEffect,this.renderRoot.querySelector("#file-upload-border").classList.add("visible"))},this.handleonDragLeave=e=>{e.preventDefault(),e.stopPropagation(),this._dragCounter--,0===this._dragCounter&&this.renderRoot.querySelector("#file-upload-border").classList.remove("visible")},this.handleonDrop=e=>{var t;e.preventDefault(),e.stopPropagation();this.renderRoot.querySelector("#file-upload-border").classList.remove("visible"),(null===(t=e.dataTransfer)||void 0===t?void 0:t.items)&&this.readUploadedFiles(e.dataTransfer.items,(()=>{e.dataTransfer.clearData()})),this._dragCounter=0},this.filesToUpload=[],this.addEventListener("__uploadfailed",this.focusOnUpload),this.addEventListener("__uploadsuccess",this.focusOnUpload)}focusOnUpload(){const e=this.renderRoot.querySelector('mgt-file[part="upload"]');e&&(e.setAttribute("tabindex","0"),e.classList.add("upload"),e.focus())}render(){if(null!==this.parentElement){const e=this.parentElement;e.addEventListener("dragenter",this.handleonDragEnter),e.addEventListener("dragleave",this.handleonDragLeave),e.addEventListener("dragover",this.handleonDragOver),e.addEventListener("drop",this.handleonDrop)}return l.qy`
        <div id="file-upload-dialog" class="file-upload-dialog">
          <!-- Modal content -->
          <fluent-dialog modal="true" class="file-upload-dialog-content">
            <span
              class="file-upload-dialog-close"
              id="file-upload-dialog-close">
                ${(0,u.r)(u.A.Cancel)}
            </span>
            <div class="file-upload-dialog-content-text">
              <h2 class="file-upload-dialog-title">${this._dialogTitle}</h2>
              <div>${this._dialogContent}</div>
                <fluent-checkbox
                  id="file-upload-dialog-check"
                  class="file-upload-dialog-check">
                    ${this._dialogCheckBox}
                </fluent-checkbox>
            </div>
            <div class="file-upload-dialog-editor">
              <fluent-button
                appearance="accent"
                class="file-upload-dialog-ok">
                ${this._dialogPrimaryButton}
              </fluent-button>
              <fluent-button
                appearance="outline"
                class="file-upload-dialog-cancel">
                ${this._dialogSecondaryButton}
              </fluent-button>
            </div>
          </fluent-dialog>
        </div>
        <div id="file-upload-border"></div>
        <div class="file-upload-area-button">
          <input
            id="file-upload-input"
            title="${this.strings.uploadButtonLabel}"
            tabindex="-1"
            aria-label="file upload input"
            type="file"
            multiple
            @change="${this.onFileUploadChange}"
          />
          <fluent-button
            appearance="accent"
            class="file-upload-button"
            @click=${this.onFileUploadClick}
            label=${this.strings.uploadButtonLabel}>
              <span slot="start">${(0,u.r)(u.A.Upload)}</span>
              <span class="upload-text">${this.strings.buttonUploadFile}</span>
          </fluent-button>
        </div>
        <div class="file-upload-template">
          ${this.renderFolderTemplate(this.filesToUpload)}
        </div>
       `}renderFolderTemplate(e){const t=[];if(e.length>0){const i=e.map((e=>-1===t.indexOf(e.fullPath.substring(0,e.fullPath.lastIndexOf("/")))?e.fullPath.endsWith("/")?l.qy`${this.renderFileTemplate(e,"")}`:(t.push(e.fullPath.substring(0,e.fullPath.lastIndexOf("/"))),r.Q`
            <div class='file-upload-table'>
              <div class='file-upload-cell'>
                <mgt-file
                  .fileDetails=${{name:e.fullPath.substring(1,e.fullPath.lastIndexOf("/")),folder:"Folder"}}
                  view="oneline"
                  class="mgt-file-item">
                </mgt-file>
              </div>
            </div>
            ${this.renderFileTemplate(e,"file-upload-folder-tab")}`):l.qy`${this.renderFileTemplate(e,"file-upload-folder-tab")}`));return l.qy`${i}`}return l.qy``}renderFileTemplate(e,t){const i=(0,G.H)({"file-upload-table":!0,upload:e.completed}),o=t+("lastModifiedDateTime"===e.fieldUploadResponse?" file-upload-dialog-success":""),s="description"===e.fieldUploadResponse,n=(0,G.H)({description:s}),a=e.completed?l.qy``:this.renderFileUploadTemplate(e),d=s?J.failUploadFile:J.successUploadFile;return r.Q`
        <div class="${i}">
          <div class="${o}">
            <div class='file-upload-cell'>
              <div class="${n}">
                <div class="file-upload-status">
                  ${e.iconStatus}
                </div>
                <mgt-file
                  .fileDetails=${e.driveItem}
                  .view=${e.view}
                  .line2Property=${e.fieldUploadResponse}
                  aria-label="${e.driveItem.name} ${d}"
                  part="upload"
                  class="mgt-file-item">
                </mgt-file>
              </div>
            </div>
              ${a}
            </div>
          </div>
        </div>`}renderFileUploadTemplate(e){const t=(0,G.H)({"file-upload-table":!0,upload:e.completed});return l.qy`
    <div class='file-upload-cell'>
      <div class='file-upload-table file-upload-name'>
        <div class='file-upload-cell'>
          <div
            title="${e.file.name}"
            class='file-upload-filename'>
            ${e.file.name}
          </div>
        </div>
      </div>
      <div class='file-upload-table'>
        <div class='file-upload-cell'>
          <div class="${t}">
            <fluent-progress class="file-upload-bar" value="${e.percent}"></fluent-progress>
            <div class='file-upload-cell percent-indicator'>
              <span>${e.percent}%</span>
              <span
                class="file-upload-cancel"
                @click=${()=>this.deleteFileUploadSession(e)}>
                ${(0,u.r)(u.A.Cancel)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    `}deleteFileUploadSession(e){return te(this,void 0,void 0,(function*(){try{void 0!==e.uploadUrl?(yield(0,h.mQ)(this.fileUploadList.graph,e.uploadUrl),e.uploadUrl=void 0,e.completed=!0,this.setUploadFail(e,J.cancelUploadFile)):(e.uploadUrl=void 0,e.completed=!0,this.setUploadFail(e,J.cancelUploadFile))}catch(t){e.uploadUrl=void 0,e.completed=!0,this.setUploadFail(e,J.cancelUploadFile)}}))}readUploadedFiles(e,t){return te(this,void 0,void 0,(function*(){const i=yield this.getFilesFromUploadArea(e);yield this.getSelectedFiles(i),t()}))}getSelectedFiles(e){return te(this,void 0,void 0,(function*(){let t=[];const i=[];this._applyAll=!1,this._applyAllConflictBehavior=null,this._maximumFileSize=!1,this._excludedFileType=!1,this.filesToUpload.forEach((e=>{e.completed?i.push(e):t.push(e)}));for(const i of e){const e=""===i.fullPath?"/"+i.name:i.fullPath;if(0===t.filter((t=>t.fullPath===e)).length){let s=!0;if(void 0!==this.fileUploadList.maxFileSize&&s&&i.size>1024*this.fileUploadList.maxFileSize&&(s=!1,!1===this._maximumFileSize)){const t=yield this.getFileUploadStatus(i,e,"MaxFileSize",this.fileUploadList);null!==t&&1===t[0]&&(this._maximumFileSize=!0)}if(void 0!==this.fileUploadList.excludedFileExtensions&&this.fileUploadList.excludedFileExtensions.length>0&&s&&this.fileUploadList.excludedFileExtensions.filter((e=>i.name.toLowerCase().indexOf(e.toLowerCase())>-1)).length>0&&(s=!1,!1===this._excludedFileType)){const t=yield this.getFileUploadStatus(i,e,"ExcludedFileType",this.fileUploadList);null!==t&&1===t[0]&&(this._excludedFileType=!0)}if(s){const s=yield this.getFileUploadStatus(i,e,"Upload",this.fileUploadList);let n=!1;null!==s&&(-1===s[0]?n=!0:(this._applyAll=Boolean(s[0]),this._applyAllConflictBehavior=s[1]?1:0)),t.push({file:i,driveItem:{name:i.name},fullPath:e,conflictBehavior:(o=s,(null==o?void 0:o.length)>1?"replace"===o[1]?"replace":"rename":null),iconStatus:null,percent:1,view:"image",completed:n,maxSize:this._maxChunkSize,minSize:0})}}}var o;t=t.sort(((e,t)=>e.fullPath.substring(0,e.fullPath.lastIndexOf("/")).localeCompare(t.fullPath.substring(0,t.fullPath.lastIndexOf("/"))))),t.forEach((e=>{if(0!==i.filter((t=>t.fullPath===e.fullPath)).length){const t=i.findIndex((t=>t.fullPath===e.fullPath));i.splice(t,1)}})),t.push(...i),this.filesToUpload=t;const s=this.filesToUpload.map((e=>this.sendFileItemGraph(e)));yield Promise.all(s)}))}getFileUploadStatus(e,t,i,o){const s=Object.create(null,{requestStateUpdate:{get:()=>super.requestStateUpdate}});return te(this,void 0,void 0,(function*(){const n=this.renderRoot.querySelector("#file-upload-dialog");switch(i){case"Upload":return null!==(yield(0,h.Pq)(this.fileUploadList.graph,`${this.getGrapQuery(t)}?$select=id`))?!0===this._applyAll?[this._applyAll,this._applyAllConflictBehavior]:(n.classList.add("visible"),this._dialogTitle=J.fileReplaceTitle,this._dialogContent=J.fileReplace.replace("{FileName}",e.name),this._dialogCheckBox=J.checkApplyAll,this._dialogPrimaryButton=J.buttonReplace,this._dialogSecondaryButton=J.buttonKeep,yield s.requestStateUpdate.call(this,!0),new Promise((e=>{const t=this.renderRoot.querySelector(".file-upload-dialog-close"),i=this.renderRoot.querySelector(".file-upload-dialog-ok"),o=this.renderRoot.querySelector(".file-upload-dialog-cancel"),s=this.renderRoot.querySelector("#file-upload-dialog-check");s.checked=!1,s.classList.remove("hide");const r=()=>{n.classList.remove("visible"),e([s.checked?1:0,"replace"])},a=()=>{n.classList.remove("visible"),e([s.checked?1:0,"rename"])},l=()=>{n.classList.remove("visible"),e([-1])};i.removeEventListener("click",r),o.removeEventListener("click",a),t.removeEventListener("click",l),i.addEventListener("click",r),o.addEventListener("click",a),t.addEventListener("click",l)}))):null;case"ExcludedFileType":return n.classList.add("visible"),this._dialogTitle=J.fileTypeTitle,this._dialogContent=J.fileType.replace("{FileName}",e.name)+" ("+o.excludedFileExtensions.join(",")+")",this._dialogCheckBox=J.checkAgain,this._dialogPrimaryButton=J.buttonOk,this._dialogSecondaryButton=J.buttonCancel,yield s.requestStateUpdate.call(this,!0),new Promise((e=>{const t=this.renderRoot.querySelector(".file-upload-dialog-ok"),i=this.renderRoot.querySelector(".file-upload-dialog-cancel"),o=this.renderRoot.querySelector(".file-upload-dialog-close"),s=this.renderRoot.querySelector("#file-upload-dialog-check");s.checked=!1,s.classList.remove("hide");const r=()=>{n.classList.remove("visible"),e([s.checked?1:0])},a=()=>{n.classList.remove("visible"),e([0])};t.removeEventListener("click",r),i.removeEventListener("click",a),o.removeEventListener("click",a),t.addEventListener("click",r),i.addEventListener("click",a),o.addEventListener("click",a)}));case"MaxFileSize":return n.classList.add("visible"),this._dialogTitle=J.maximumFileSizeTitle,this._dialogContent=J.maximumFileSize.replace("{FileSize}",(0,K.z3)(1024*o.maxFileSize)).replace("{FileName}",e.name)+(0,K.z3)(e.size)+".",this._dialogCheckBox=J.checkAgain,this._dialogPrimaryButton=J.buttonOk,this._dialogSecondaryButton=J.buttonCancel,yield s.requestStateUpdate.call(this,!0),new Promise((e=>{const t=this.renderRoot.querySelector(".file-upload-dialog-ok"),i=this.renderRoot.querySelector(".file-upload-dialog-cancel"),o=this.renderRoot.querySelector(".file-upload-dialog-close"),s=this.renderRoot.querySelector("#file-upload-dialog-check");s.checked=!1,s.classList.remove("hide");const r=()=>{n.classList.remove("visible"),e([s.checked?1:0])},a=()=>{n.classList.remove("visible"),e([0])};t.removeEventListener("click",r),i.removeEventListener("click",a),o.removeEventListener("click",a),t.addEventListener("click",r),i.addEventListener("click",a),o.addEventListener("click",a)}))}}))}getGrapQuery(e){let t="";return this.fileUploadList.itemPath&&this.fileUploadList.itemPath.length>0&&(t=this.fileUploadList.itemPath.startsWith("/")?this.fileUploadList.itemPath:"/"+this.fileUploadList.itemPath),this.fileUploadList.userId&&this.fileUploadList.itemId?`/users/${this.fileUploadList.userId}/drive/items/${this.fileUploadList.itemId}:${e}`:this.fileUploadList.userId&&this.fileUploadList.itemPath?`/users/${this.fileUploadList.userId}/drive/root:${t}${e}`:this.fileUploadList.groupId&&this.fileUploadList.itemId?`/groups/${this.fileUploadList.groupId}/drive/items/${this.fileUploadList.itemId}:${e}`:this.fileUploadList.groupId&&this.fileUploadList.itemPath?`/groups/${this.fileUploadList.groupId}/drive/root:${t}${e}`:this.fileUploadList.driveId&&this.fileUploadList.itemId?`/drives/${this.fileUploadList.driveId}/items/${this.fileUploadList.itemId}:${e}`:this.fileUploadList.driveId&&this.fileUploadList.itemPath?`/drives/${this.fileUploadList.driveId}/root:${t}${e}`:this.fileUploadList.siteId&&this.fileUploadList.itemId?`/sites/${this.fileUploadList.siteId}/drive/items/${this.fileUploadList.itemId}:${e}`:this.fileUploadList.siteId&&this.fileUploadList.itemPath?`/sites/${this.fileUploadList.siteId}/drive/root:${t}${e}`:this.fileUploadList.itemId?`/me/drive/items/${this.fileUploadList.itemId}:${e}`:this.fileUploadList.itemPath?`/me/drive/root:${t}${e}`:`/me/drive/root:${e}`}sendFileItemGraph(e){return te(this,void 0,void 0,(function*(){const t=this.fileUploadList.graph;let i="";if(e.file.size<this._maxChunkSize)try{e.completed||(null!==e.conflictBehavior&&"replace"!==e.conflictBehavior||(i=`${this.getGrapQuery(e.fullPath)}:/content`),"rename"===e.conflictBehavior&&(i=`${this.getGrapQuery(e.fullPath)}:/content?@microsoft.graph.conflictBehavior=rename`),e.driveItem=yield(0,h.sy)(t,i,e.file),null!==e.driveItem?this.setUploadSuccess(e):(e.driveItem={name:e.file.name},this.setUploadFail(e,J.failUploadFile)))}catch(t){this.setUploadFail(e,J.failUploadFile)}else if(!e.completed&&void 0===e.uploadUrl){const i=yield(0,h.Ay)(t,`${this.getGrapQuery(e.fullPath)}:/createUploadSession`,e.conflictBehavior);try{if(null!==i){e.uploadUrl=i.uploadUrl;const o=yield this.sendSessionUrlGraph(t,e);null!==o?(e.driveItem=o,this.setUploadSuccess(e)):this.setUploadFail(e,J.failUploadFile)}else this.setUploadFail(e,J.failUploadFile)}catch(e){}}}))}sendSessionUrlGraph(e,t){const i=Object.create(null,{requestStateUpdate:{get:()=>super.requestStateUpdate}});return te(this,void 0,void 0,(function*(){for(;t.file.size>t.minSize;){void 0===t.mimeStreamString&&(t.mimeStreamString=yield this.readFileContent(t.file));const o=new Blob([t.mimeStreamString.slice(t.minSize,t.maxSize)]);if(t.percent=Math.round(t.maxSize/t.file.size*100),yield i.requestStateUpdate.call(this,!0),void 0===t.uploadUrl)return null;{const i=yield(0,h.mj)(e,t.uploadUrl,""+(t.maxSize-t.minSize),`bytes ${t.minSize}-${t.maxSize-1}/${t.file.size}`,o);if(null===i)return null;if((0,h.gt)(i))t.minSize=parseInt(i.nextExpectedRanges[0].split("-")[0],10),t.maxSize=t.minSize+this._maxChunkSize,t.maxSize>t.file.size&&(t.maxSize=t.file.size);else if(void 0!==i.id)return i}}}))}setUploadSuccess(e){e.percent=100,super.requestStateUpdate(!0),setTimeout((()=>{e.iconStatus=(0,u.r)(u.A.Success),e.view="twolines",e.fieldUploadResponse="lastModifiedDateTime",e.completed=!0,super.requestStateUpdate(!0),(0,h.$V)(),this.fireCustomEvent("__uploadsuccess")}),500)}setUploadFail(e,t){setTimeout((()=>{e.iconStatus=(0,u.r)(u.A.Fail),e.view="twolines",e.driveItem.description=t,e.fieldUploadResponse="description",e.completed=!0,super.requestStateUpdate(!0),this.fireCustomEvent("__uploadfailed")}),500)}readFileContent(e){return new Promise(((t,i)=>{const o=new FileReader;o.onloadend=()=>{t(o.result)},o.onerror=e=>{i(e)},o.readAsArrayBuffer(e)}))}getFilesFromUploadArea(e){return te(this,void 0,void 0,(function*(){const t=[];let i;const o=[];for(const n of e)if("getAsFile"in(s=n)&&"function"==typeof s.getAsFile||"webkitGetAsEntry"in s&&"function"==typeof s.webkitGetAsEntry)if(oe(n))if(i=n.getAsEntry(),ie(i))t.push(i);else{const e=n.getAsFile();e&&(this.writeFilePath(e,""),o.push(e))}else if(n.webkitGetAsEntry)if(i=n.webkitGetAsEntry(),ie(i))t.push(i);else{const e=n.getAsFile();e&&(this.writeFilePath(e,""),o.push(e))}else{const e=n.getAsFile();e&&(this.writeFilePath(e,""),o.push(e))}else this.writeFilePath(n,""),o.push(n);var s;if(t.length>0){const e=yield this.getFolderFiles(t);o.push(...e)}return o}))}getFolderFiles(e){return new Promise((t=>{let i=0;const o=[];e.forEach((e=>{s(e,"")}));const s=(e,s)=>{ie(e)?n(e.createReader()):(e=>e.isFile)(e)&&(i++,e.file((e=>{i--,this.writeFilePath(e,s),o.push(e),0===i&&t(o)})))},n=e=>{i++,e.readEntries((e=>{i--;for(const t of e)s(t,t.fullPath);0===i&&t(o)}))}}))}writeFilePath(e,t){e.fullPath=t}}Y([(0,d.MZ)({type:Object}),ee("design:type",Array)],se.prototype,"filesToUpload",void 0),Y([(0,d.MZ)({type:Object}),ee("design:type",Object)],se.prototype,"fileUploadList",void 0);var ne=i(4791),re=i(2207),ae=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},le=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},de=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const ce=()=>{(0,Q.E)(ne.m9),(0,v.R)(),(0,Q.E)(_,I.zi,A.c,Z),(0,v.R)(),(0,o.N)("file-upload",se),(0,o.N)("file-list",ue)},he=e=>"lastShared"in e;class ue extends s.N{static get styles(){return g}get strings(){return f}get displayName(){return this.strings.filesSectionTitle}get cardTitle(){return this.strings.filesSectionTitle}renderIcon(){return(0,u.r)(u.A.Files)}static get requiredScopes(){return[...new Set([...v.l.requiredScopes])]}constructor(e){super(),this._isCompact=!1,this.fileQueries=null,this.files=null,this.itemView="threelines",this.fileExtensions=[],this.pageSize=10,this.disableOpenOnClick=!1,this.hideMoreFilesButton=!1,this.enableFileUpload=!1,this.maxUploadFile=10,this.excludedFileExtensions=[],this._preloadedFiles=[],this._focusedItemIndex=-1,this.renderLoading=()=>this.files?this.renderContent():this.renderTemplate("loading",null)||l.qy``,this.renderContent=()=>this.files&&0!==this.files.length?(this._personCardFiles&&(this.files=this._personCardFiles),this._isCompact?this.renderCompactView():this.renderFullView()):this.renderNoData(),this.onFocusFirstItem=()=>this._focusedItemIndex=0,this.onFileListKeyDown=e=>{const t=this.renderRoot.querySelector(".file-list");let i;if(null==t?void 0:t.children.length){if("ArrowUp"!==e.code&&"ArrowDown"!==e.code||("ArrowUp"===e.code&&(-1===this._focusedItemIndex&&(this._focusedItemIndex=t.children.length),this._focusedItemIndex=(this._focusedItemIndex-1+t.children.length)%t.children.length),"ArrowDown"===e.code&&(this._focusedItemIndex=(this._focusedItemIndex+1)%t.children.length),i=t.children[this._focusedItemIndex],this.updateItemBackgroundColor(t,i,"focused")),"Enter"===e.code||"Space"===e.code){i=t.children[this._focusedItemIndex];const o=i.children[0];e.preventDefault(),this.fireCustomEvent("itemClick",o.fileDetails),this.handleFileClick(o.fileDetails),this.updateItemBackgroundColor(t,i,"selected")}"Tab"===e.code&&(i=t.children[this._focusedItemIndex])}},this.handleFileClick=(e,t)=>{var i;t&&he(e)&&(null===(i=e.resourceReference)||void 0===i?void 0:i.webUrl)&&!this.disableOpenOnClick?(t.preventDefault(),window.open(e.resourceReference.webUrl,"_blank","noreferrer")):he(e)||!(null==e?void 0:e.webUrl)||this.disableOpenOnClick||window.open(e.webUrl,"_blank","noreferrer")},this._personCardFiles=e}clearState(){super.clearState(),this.files=null,this._personCardFiles=null}asCompactView(){return this._isCompact=!0,this}asFullView(){return this._isCompact=!1,this}args(){return[this.providerState,this.fileListQuery,this.fileQueries,this.siteId,this.driveId,this.groupId,this.itemId,this.itemPath,this.userId,this.insightType,this.fileExtensions,this.pageSize,this.maxFileSize]}renderCompactView(){const e=this.files.slice(0,3);return this.renderFiles(e)}renderFullView(){return this.renderTemplate("default",{files:this.files})||this.renderFiles(this.files)}renderNoData(){return this.renderTemplate("no-data",null)||(!0===this.enableFileUpload&&void 0!==n.b.globalProvider?l.qy`
            <div class="file-list-wrapper" dir=${this.direction}>
              ${this.renderFileUpload()}
            </div>`:l.qy``)}renderFiles(e){return l.qy`
      <div id="file-list-wrapper" class="file-list-wrapper" dir=${this.direction}>
        ${this.enableFileUpload?this.renderFileUpload():null}
        <ul
          id="file-list"
          class="file-list"
        >
          <li
            tabindex="0"
            class="file-item"
            @keydown="${this.onFileListKeyDown}"
            @focus="${this.onFocusFirstItem}"
            @click=${t=>this.handleItemSelect(e[0],t)}>
            ${this.renderFile(e[0])}
          </li>
          ${(0,c.u)(e.slice(1),(e=>e.id),(e=>l.qy`
              <li
                class="file-item"
                @keydown="${this.onFileListKeyDown}"
                @click=${t=>this.handleItemSelect(e,t)}>
                ${this.renderFile(e)}
              </li>
            `))}
        </ul>
        ${this.hideMoreFilesButton||!this.pageIterator||!this.pageIterator.hasNext&&!this._preloadedFiles.length||this._isCompact?null:this.renderMoreFileButton()}
      </div>
    `}renderFile(e){const t=this.itemView;return he(e)?this.renderSharedInsightFile(e):this.renderTemplate("file",{file:e},e.id)||r.Q`
        <mgt-file class="mgt-file-item" .fileDetails=${e} .view=${t}></mgt-file>
      `}renderSharedInsightFile(e){const t=e.lastShared?l.qy`
          <div class="shared_insight_file__last-modified">
            ${this.strings.sharedTextSubtitle} ${(0,K.h3)(new Date(e.lastShared.sharedDateTime))}
          </div>
        `:null;return l.qy`
      <div class="shared_insight_file" @click=${t=>this.handleFileClick(e,t)} tabindex="0">
        <div class="shared_insight_file__icon">
          <img alt="${e.resourceVisualization.title}" src=${(0,re.G)(e.resourceVisualization.type,48,"svg")} />
        </div>
        <div class="shared_insight_file__details">
          <div class="shared_insight_file__name">${e.resourceVisualization.title}</div>
          ${t}
        </div>
      </div>
    `}renderMoreFileButton(){return this._isLoadingMore?l.qy`
        <fluent-progress-ring role="progressbar" viewBox="0 0 8 8" class="progress-ring"></fluent-progress-ring>
      `:l.qy`
        <fluent-button
          appearance="stealth"
          id="show-more"
          class="show-more"
          @click=${()=>this.renderNextPage()}
        >
          <span class="show-more-text">${this.strings.showMoreSubtitle}</span>
        </fluent-button>`}renderFileUpload(){const e={graph:n.b.globalProvider.graph.forComponent(this),driveId:this.driveId,excludedFileExtensions:this.excludedFileExtensions,groupId:this.groupId,itemId:this.itemId,itemPath:this.itemPath,userId:this.userId,siteId:this.siteId,maxFileSize:this.maxFileSize,maxUploadFile:this.maxUploadFile};return r.Q`
        <mgt-file-upload .fileUploadList=${e} ></mgt-file-upload>
      `}loadState(){var e,t;return de(this,void 0,void 0,(function*(){const i=n.b.globalProvider;if(!i||i.state===a.HJ.Loading)return;if(i.state===a.HJ.SignedOut)return void(this.files=null);const o=i.graph.forComponent(this);let s,r;const l=!(this.driveId||this.siteId||this.groupId||this.userId);if((this.driveId&&!this.itemId&&!this.itemPath||this.groupId&&!this.itemId&&!this.itemPath||this.siteId&&!this.itemId&&!this.itemPath||this.userId&&!this.insightType&&!this.itemId&&!this.itemPath)&&(this.files=null),!this.files){let i;if(this.fileListQuery?r=yield(0,h.D)(o,this.fileListQuery,this.pageSize):this.fileQueries?s=yield(0,h.bJ)(o,this.fileQueries):l?this.itemId?r=yield(0,h.Y1)(o,this.itemId,this.pageSize):this.itemPath?r=yield(0,h.o4)(o,this.itemPath,this.pageSize):this.insightType?s=yield(0,h.jI)(o,this.insightType):r=yield(0,h.Ad)(o,this.pageSize):this.driveId?this.itemId?r=yield(0,h.Kx)(o,this.driveId,this.itemId,this.pageSize):this.itemPath&&(r=yield(0,h.WU)(o,this.driveId,this.itemPath,this.pageSize)):this.groupId?this.itemId?r=yield(0,h.$4)(o,this.groupId,this.itemId,this.pageSize):this.itemPath&&(r=yield(0,h.NO)(o,this.groupId,this.itemPath,this.pageSize)):this.siteId?this.itemId?r=yield(0,h.Z)(o,this.siteId,this.itemId,this.pageSize):this.itemPath&&(r=yield(0,h.Rh)(o,this.siteId,this.itemPath,this.pageSize)):this.userId&&(this.itemId?r=yield(0,h.Zm)(o,this.userId,this.itemId,this.pageSize):this.itemPath?r=yield(0,h.n)(o,this.userId,this.itemPath,this.pageSize):this.insightType&&(s=yield(0,h.S0)(o,this.userId,this.insightType))),r&&(this.pageIterator=r,this._preloadedFiles=[...this.pageIterator.value],s=this._preloadedFiles.length>=this.pageSize?this._preloadedFiles.splice(0,this.pageSize):this._preloadedFiles.splice(0,this._preloadedFiles.length)),(null===(e=this.fileExtensions)||void 0===e?void 0:e.length)>0){if(null===(t=this.pageIterator)||void 0===t?void 0:t.value){for(;this.pageIterator.hasNext;)yield(0,h.oL)(this.pageIterator);s=this.pageIterator.value,this._preloadedFiles=[]}i=s.filter((e=>{for(const t of this.fileExtensions)if(t===this.getFileExtension(e.name))return e}))}(null==i?void 0:i.length)>=0?(this.files=i,this.pageSize&&(s=this.files.splice(0,this.pageSize),this.files=s)):this.files=s}}))}handleItemSelect(e,t){if(this.handleFileClick(e),this.fireCustomEvent("itemClick",e),t){const e=this.renderRoot.querySelector(".file-list"),i=Array.from(e.children),o=t.target.closest("li"),s=i.indexOf(o);this._focusedItemIndex=s;const n=e.children[this._focusedItemIndex];this.updateItemBackgroundColor(e,n,"selected")}}renderNextPage(){return de(this,void 0,void 0,(function*(){if(this._preloadedFiles.length>0)this.files=[...this.files,...this._preloadedFiles.splice(0,Math.min(this.pageSize,this._preloadedFiles.length))];else if(this.pageIterator.hasNext){this._isLoadingMore=!0;const e=this.renderRoot.querySelector("#file-list-wrapper");(null==e?void 0:e.animate)&&e.animate([{height:"auto",transformOrigin:"top left"},{height:"auto",transformOrigin:"top left"}],{duration:1e3,easing:"ease-in-out",fill:"both"}),yield(0,h.oL)(this.pageIterator),this._isLoadingMore=!1,this.files=this.pageIterator.value}this.requestUpdate()}))}getFileExtension(e){return/(?:\.([^.]+))?$/.exec(e)[1]||""}updateItemBackgroundColor(e,t,i){for(const t of e.children)t.classList.remove(i),t.removeAttribute("tabindex");t&&(t.classList.add(i),t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}),t.setAttribute("tabindex","0"),t.focus());for(const t of e.children)t.classList.remove("selected")}reload(e=!1){e&&(0,h.$V)(),this._task.run()}}ae([(0,d.wk)(),le("design:type",Object)],ue.prototype,"_isCompact",void 0),ae([(0,d.wk)(),le("design:type",Array)],ue.prototype,"_personCardFiles",void 0),ae([(0,d.MZ)({attribute:"file-list-query"}),le("design:type",String)],ue.prototype,"fileListQuery",void 0),ae([(0,d.MZ)({attribute:"file-queries",converter:(e,t)=>e?e.split(",").map((e=>e.trim())):null}),le("design:type",Array)],ue.prototype,"fileQueries",void 0),ae([(0,d.MZ)({type:Object}),le("design:type",Array)],ue.prototype,"files",void 0),ae([(0,d.MZ)({attribute:"site-id"}),le("design:type",String)],ue.prototype,"siteId",void 0),ae([(0,d.MZ)({attribute:"drive-id"}),le("design:type",String)],ue.prototype,"driveId",void 0),ae([(0,d.MZ)({attribute:"group-id"}),le("design:type",String)],ue.prototype,"groupId",void 0),ae([(0,d.MZ)({attribute:"item-id"}),le("design:type",String)],ue.prototype,"itemId",void 0),ae([(0,d.MZ)({attribute:"item-path"}),le("design:type",String)],ue.prototype,"itemPath",void 0),ae([(0,d.MZ)({attribute:"user-id"}),le("design:type",String)],ue.prototype,"userId",void 0),ae([(0,d.MZ)({attribute:"insight-type"}),le("design:type",String)],ue.prototype,"insightType",void 0),ae([(0,d.MZ)({attribute:"item-view",converter:e=>(0,p.E)(e,"threelines")}),le("design:type",String)],ue.prototype,"itemView",void 0),ae([(0,d.MZ)({attribute:"file-extensions",converter:(e,t)=>e.split(",").map((e=>e.trim()))}),le("design:type",Array)],ue.prototype,"fileExtensions",void 0),ae([(0,d.MZ)({attribute:"page-size",type:Number}),le("design:type",Object)],ue.prototype,"pageSize",void 0),ae([(0,d.MZ)({attribute:"disable-open-on-click",type:Boolean}),le("design:type",Object)],ue.prototype,"disableOpenOnClick",void 0),ae([(0,d.MZ)({attribute:"hide-more-files-button",type:Boolean}),le("design:type",Object)],ue.prototype,"hideMoreFilesButton",void 0),ae([(0,d.MZ)({attribute:"max-file-size",type:Number}),le("design:type",Number)],ue.prototype,"maxFileSize",void 0),ae([(0,d.MZ)({attribute:"enable-file-upload",type:Boolean}),le("design:type",Object)],ue.prototype,"enableFileUpload",void 0),ae([(0,d.MZ)({attribute:"max-upload-file",type:Number}),le("design:type",Object)],ue.prototype,"maxUploadFile",void 0),ae([(0,d.MZ)({attribute:"excluded-file-extensions",converter:(e,t)=>e.split(",").map((e=>e.trim()))}),le("design:type",Array)],ue.prototype,"excludedFileExtensions",void 0),ae([(0,d.wk)(),le("design:type",Boolean)],ue.prototype,"_isLoadingMore",void 0)},8263:(e,t,i)=>{i.d(t,{l:()=>y,R:()=>b});var o=i(7573),s=i(3511);const n=[o.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{font-size:var(--default-font-size);font-weight:var(--default-font-weight,400);border:var(--file-border,1px solid transparent);border-radius:var(--file-border-radius,4px);background-color:var(--file-background-color)}:host .item{display:flex;flex-flow:row nowrap;align-items:center;background-color:var(--file-background-color);padding:var(--file-padding,0);margin:var(--file-margin,0)}:host .item:hover{background-color:var(--file-background-color-hover,var(--neutral-fill-hover));border-radius:var(--file-border-radius,4px);cursor:pointer;--secondary-text-color:var(--secondary-text-hover-color)}:host .item:focus,:host .item:focus-visible{background-color:var(--file-background-color-focus,var(--neutral-fill-hover));border-radius:var(--file-border-radius,4px)}:host .item__file-type-icon{height:var(--file-type-icon-height,28px);display:flex;align-items:center;justify-content:center}:host .item__file-type-icon img{height:var(--file-type-icon-height,28px)}:host .item__details{padding-inline-start:var(--file-padding-inline-start,14px)}:host .item__details .line1{font-size:var(--default-font-size);font-weight:var(--file-line1-font-weight,var(--default-font-weight,400));text-transform:var(--file-line1-text-transform,initial);line-height:20px;color:var(--file-line1-color,var(--neutral-foreground-rest))}:host .item__details .line2{color:var(--file-line2-color,var(--secondary-text-color));font-size:var(--file-line2-font-size, var(--last-modified-font-size, 12px));font-weight:var(--file-line2-font-weight,var(--default-font-weight,400));text-transform:var(--file-line2-text-transform,initial);line-height:16px}:host .item__details .line3{color:var(--file-line3-color,var(--secondary-text-color));font-size:var(--file-line3-font-size, var(--size-font-size, 12px));font-weight:var(--file-line3-font-weight,var(--default-font-weight,400));text-transform:var(--file-line3-text-transform,initial);line-height:16px}[dir=rtl] .item{direction:rtl}[dir=rtl] .item__details{direction:rtl}
`];var r=i(5292),a=i(5468),l=i(3204),d=i(7723),c=i(7822),h=i(283),u=i(2207),p=i(1309);const g={modifiedSubtitle:"Modified",sizeSubtitle:"Size"};var f=i(5045),v=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};const b=()=>(0,f.N)("file",y);class y extends r.N{static get styles(){return n}get strings(){return g}static get requiredScopes(){return[...new Set(["files.read","files.read.all","sites.read.all"])]}args(){return[this.providerState,this.fileQuery,this.siteId,this.itemId,this.driveId,this.itemPath,this.listId,this.groupId,this.userId,this.insightType,this.insightId,this.fileDetails,this.fileIcon]}constructor(){super(),this.renderContent=()=>{if(!this.driveItem)return this.renderNoData();const e=this.driveItem;let t;if(t=this.renderTemplate("default",{file:e}),!t){const i=this.renderDetails(e),s=this.renderFileTypeIcon();t=o.qy`
        <div class="item">
          ${s} ${i}
        </div>`}return t},this.line1Property="name",this.line2Property="lastModifiedDateTime",this.line3Property="size",this.view="threelines"}renderNoData(){return this.renderTemplate("no-data",null)||o.qy``}renderFileTypeIcon(){if(!this.fileIcon&&!this.driveItem.name)return o.qy``;let e,t="";if(this.fileIcon)e=this.fileIcon;else{const i=/(?:\.([^.]+))?$/;t=void 0===this.driveItem.package&&void 0===this.driveItem.folder?i.exec(this.driveItem.name)[1]?i.exec(this.driveItem.name)[1].toLowerCase():this.driveItem.size?"null":"folder":void 0!==this.driveItem.package&&"oneNote"===this.driveItem.package.type?"onetoc":"folder",e=(0,u.A)(t,48,"svg")}return o.qy`
      <div class="item__file-type-icon">
        ${e?o.qy`
              <img src=${e} alt="${t.toUpperCase()} File icon" />
            `:o.qy`
              ${(0,p.r)(p.A.File)}
            `}
      </div>
    `}renderDetails(e){if(!e||"image"===this.view)return o.qy``;const t=[];if(this.view>"image"){const i=this.getTextFromProperty(e,this.line1Property);i&&t.push(o.qy`
          <div class="line1" aria-label="${i}">${i}</div>
        `)}if(this.view>"oneline"){const i=this.getTextFromProperty(e,this.line2Property);i&&t.push(o.qy`
          <div class="line2" aria-label="${i}">${i}</div>
        `)}if(this.view>"twolines"){const i=this.getTextFromProperty(e,this.line3Property);i&&t.push(o.qy`
          <div class="line3" aria-label="${i}">${i}</div>
        `)}return o.qy`
      <div class="item__details">
        ${t}
      </div>
    `}loadState(){return e=this,t=void 0,o=function*(){if(this.fileDetails)return void(this.driveItem=this.fileDetails);const e=a.b.globalProvider;if(!e||e.state===l.HJ.Loading)return;if(e.state===l.HJ.SignedOut)return void(this.driveItem=null);const t=e.graph.forComponent(this);let i;const o=!(this.driveId||this.siteId||this.groupId||this.listId||this.userId);this.driveId&&!this.itemId&&!this.itemPath||this.siteId&&!this.itemId&&!this.itemPath||this.groupId&&!this.itemId&&!this.itemPath||this.listId&&!this.siteId&&!this.itemId||this.insightType&&!this.insightId||this.userId&&!this.itemId&&!this.itemPath&&!this.insightType&&!this.insightId?i=null:this.fileQuery?i=yield(0,d.zn)(t,this.fileQuery):this.itemId&&o?i=yield(0,d.KE)(t,this.itemId):this.itemPath&&o?i=yield(0,d.OB)(t,this.itemPath):this.userId?this.itemId?i=yield(0,d.Nd)(t,this.userId,this.itemId):this.itemPath?i=yield(0,d.bn)(t,this.userId,this.itemPath):this.insightType&&this.insightId&&(i=yield(0,d.wH)(t,this.userId,this.insightType,this.insightId)):this.driveId?this.itemId?i=yield(0,d.Mu)(t,this.driveId,this.itemId):this.itemPath&&(i=yield(0,d.WW)(t,this.driveId,this.itemPath)):this.siteId&&!this.listId?this.itemId?i=yield(0,d.LI)(t,this.siteId,this.itemId):this.itemPath&&(i=yield(0,d.dM)(t,this.siteId,this.itemPath)):this.listId?i=yield(0,d.Sp)(t,this.siteId,this.listId,this.itemId):this.groupId?this.itemId?i=yield(0,d.XD)(t,this.groupId,this.itemId):this.itemPath&&(i=yield(0,d.d$)(t,this.groupId,this.itemPath)):this.insightType&&!this.userId&&(i=yield(0,d.Pk)(t,this.insightType,this.insightId)),this.driveItem=i},new((i=void 0)||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}));var e,t,i,o}getTextFromProperty(e,t){if(!t||0===t.length)return null;const i=t.trim().split(",");let o,s=0;for(;!o&&s<i.length;){const t=i[s].trim();switch(t){case"size":{let t="0";e.size&&(t=(0,c.z3)(e.size)),o=`${this.strings.sizeSubtitle}: ${t}`;break}case"lastModifiedDateTime":{let t,i;if(e.lastModifiedDateTime){const o=new Date(e.lastModifiedDateTime);t=(0,c.h3)(o),i=`${this.strings.modifiedSubtitle} ${t}`}else i="";o=i;break}default:o=e[t]}s++}return o}}v([(0,s.MZ)({attribute:"file-query"}),m("design:type",String)],y.prototype,"fileQuery",void 0),v([(0,s.MZ)({attribute:"site-id"}),m("design:type",String)],y.prototype,"siteId",void 0),v([(0,s.MZ)({attribute:"drive-id"}),m("design:type",String)],y.prototype,"driveId",void 0),v([(0,s.MZ)({attribute:"group-id"}),m("design:type",String)],y.prototype,"groupId",void 0),v([(0,s.MZ)({attribute:"list-id"}),m("design:type",String)],y.prototype,"listId",void 0),v([(0,s.MZ)({attribute:"user-id"}),m("design:type",String)],y.prototype,"userId",void 0),v([(0,s.MZ)({attribute:"item-id"}),m("design:type",String)],y.prototype,"itemId",void 0),v([(0,s.MZ)({attribute:"item-path"}),m("design:type",String)],y.prototype,"itemPath",void 0),v([(0,s.MZ)({attribute:"insight-type"}),m("design:type",String)],y.prototype,"insightType",void 0),v([(0,s.MZ)({attribute:"insight-id"}),m("design:type",String)],y.prototype,"insightId",void 0),v([(0,s.MZ)({type:Object}),m("design:type",Object)],y.prototype,"fileDetails",void 0),v([(0,s.MZ)({attribute:"file-icon"}),m("design:type",String)],y.prototype,"fileIcon",void 0),v([(0,s.MZ)({type:Object}),m("design:type",Object)],y.prototype,"driveItem",void 0),v([(0,s.MZ)({attribute:"line1-property"}),m("design:type",String)],y.prototype,"line1Property",void 0),v([(0,s.MZ)({attribute:"line2-property"}),m("design:type",String)],y.prototype,"line2Property",void 0),v([(0,s.MZ)({attribute:"line3-property"}),m("design:type",String)],y.prototype,"line3Property",void 0),v([(0,s.MZ)({attribute:"view",converter:e=>(0,h.E)(e,"threelines")}),m("design:type",String)],y.prototype,"view",void 0)},8099:(e,t,i)=>{i.r(t),i.d(t,{MgtPersonCard:()=>Me,registerMgtPersonCardComponent:()=>Ee});var o=i(7573),s=i(3511),n=i(6572),r=i(5292);class a{static get microsoftTeamsLib(){return this._microsoftTeamsLib||window.microsoftTeams}static set microsoftTeamsLib(e){this._microsoftTeamsLib=e}static get isAvailable(){return!(!this.microsoftTeamsLib||(window.parent!==window.self||!window.nativeInterface)&&"embedded-page-container"!==window.name&&"extension-tab-frame"!==window.name)}static executeDeepLink(e,t){const i=this.microsoftTeamsLib;i.initialize(),i.executeDeepLink(e,t)}}var l=i(6172),d=i(5468),c=i(3204),h=i(4425),u=i(3765),p=i(4747),g=i(2157),f=i(1309),v=i(9239),m=i(2783);class b{}b.sections={files:!0,mailMessages:!0,organization:{showWorksWith:!0},profile:!0},b.useContactApis=!0,b.isSendMessageVisible=!0;var y=i(4545),w=i(7723),x=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const k="businessPhones,companyName,department,displayName,givenName,jobTitle,mail,mobilePhone,officeLocation,preferredLanguage,surname,userPrincipalName,id,accountEnabled",C=["People.Read.All"],$=["Mail.ReadBasic","Mail.Read","Mail.ReadWrite"],S=["User.Read.All","User.ReadWrite.All"],_=["Chat.Create","Chat.ReadWrite"],I=["ChatMessage.Send","Chat.ReadWrite"];var A=i(9754);const T=[o.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{box-shadow:var(--person-card-box-shadow,var(--elevation-shadow-card-rest));width:var(--mgt-flyout-set-width,375px);overflow:hidden;user-select:none;border-radius:8px;background-color:var(--person-card-background-color,var(--neutral-layer-floating));--file-list-background-color:transparent;--file-list-box-shadow:none;--file-item-background-color:transparent}:host .small{max-height:100vh;overflow:hidden auto}:host .nav{height:0;position:relative;z-index:100}:host .nav__back{padding-top:18px;padding-inline-start:12px;height:32px;width:32px}:host .nav__back svg{fill:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .nav__back:hover{cursor:pointer}:host .nav__back:hover svg{fill:var(--person-card-nav-back-arrow-hover-color,var(--neutral-foreground-rest))}:host .close-card-container{position:relative;z-index:100}:host .close-card-container .close-button{position:absolute;right:10px;margin-top:9px;z-index:1;border:1px solid transparent}:host .close-card-container .close-button svg path{fill:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .close-card-container .close-button:hover svg path{fill:var(--person-card-close-button-hover-color,var(--neutral-foreground-rest))}:host .person-details-container{display:flex;flex-direction:column;padding-inline-start:22px;padding-block:36px;border-bottom:1px solid var(--person-card-border-color,var(--neutral-stroke-rest))}:host .person-details-container .person-image{--person-avatar-top-spacing:var(--person-card-avatar-top-spacing, 15px);--person-details-left-spacing:var(--person-card-details-left-spacing, 15px);--person-details-bottom-spacing:var(--person-card-details-bottom-spacing, 0);--person-background-color:var(--person-card-background-color, var(--neutral-layer-floating));--person-line1-font-size:var(--person-card-line1-font-size, 20px);--person-line1-font-weight:var(--person-card-line1-font-weight, 600);--person-line1-text-line-height:var(--person-card-line1-line-height, 28px);--person-line1-text-color:var(--person-card-line1-text-color, var(--neutral-foreground-rest));--person-line2-font-size:var(--person-card-line2-font-size, 14px);--person-line2-font-weight:var(--person-card-line2-font-weight, 400);--person-line2-text-line-height:var(--person-card-line2-line-height, 20px);--person-line2-text-color:var(--person-card-line2-text-color, var(--neutral-foreground-hint));--person-line3-font-size:var(--person-card-line3-font-size, 14px);--person-line3-font-weight:var(--person-card-line3-font-weight, 400);--person-line3-text-line-height:var(--person-card-line3-line-height, 19px);--person-line3-text-color:var(--person-card-line3-text-color, var(--neutral-foreground-hint));--person-avatar-size:var(--person-card-avatar-size, 75px);--person-presence-wrapper-bottom:-15px}:host .person-details-container .base-icons{display:flex;align-items:center;margin-inline-start:var(--person-card-base-icons-left-spacing,calc(var(--person-card-avatar-size,75px) + var(--person-card-details-left-spacing,15px) - 8px));z-index:1}:host .person-details-container .base-icons .icon{display:flex;align-items:center;font-size:13px;white-space:nowrap}:host .person-details-container .base-icons .icon:not(:last-child){margin-inline-end:28px}:host .person-details-container .base-icons .icon svg .filled{display:none}:host .person-details-container .base-icons .icon svg .regular{display:block}:host .person-details-container .base-icons .icon svg path{fill:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .person-details-container .base-icons .icon:active svg .filled,:host .person-details-container .base-icons .icon:hover svg .filled{display:block}:host .person-details-container .base-icons .icon:active svg .regular,:host .person-details-container .base-icons .icon:hover svg .regular{display:none}:host .person-details-container .base-icons .icon:active svg path,:host .person-details-container .base-icons .icon:hover svg path{fill:var(--person-card-icon-hover-color,var(--accent-foreground-hover))}:host .expanded-details-container{display:flex;flex-direction:column;position:relative}:host .expanded-details-container .expanded-details-button{display:flex;justify-content:center;height:32px}:host .expanded-details-container .expanded-details-button svg path{stroke:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .expanded-details-container .expanded-details-button:hover{cursor:pointer;background-color:var(--person-card-expanded-background-color-hover,var(--neutral-fill-hover))}:host .expanded-details-container .sections .section{padding:20px 0;display:flex;flex-direction:column;position:relative}:host .expanded-details-container .sections .section:not(:last-child)::after{position:absolute;content:"";width:90%;transform:translateX(-50%);border-bottom:1px solid var(--person-card-border-color,var(--neutral-stroke-rest));left:50%;bottom:0}:host .expanded-details-container .sections .section__header{display:flex;flex-direction:row;padding:0 20px}:host .expanded-details-container .sections .section__title{flex-grow:1;color:var(--person-card-line1-text-color,var(--neutral-foreground-rest));font-size:14px;font-weight:600;line-height:19px}:host .expanded-details-container .sections .section__show-more{font-size:12px;font-weight:600;align-self:center;vertical-align:top;--base-height-multiplier:6}:host .expanded-details-container .sections .section__show-more:hover{background-color:var(--person-card-fluent-background-color-hover,var(--neutral-fill-hover))}:host .expanded-details-container .sections .section__content{margin-top:14px}:host .expanded-details-container .sections .section .additional-details{padding:0 20px}:host .expanded-details-container .divider{z-index:100;position:relative;width:375px;margin:0;border-style:none;border-bottom:1px solid var(--person-card-border-color,var(--neutral-stroke-rest))}:host .expanded-details-container .section-nav{height:35px}:host .expanded-details-container .section-nav fluent-tabs{grid-template-columns:minmax(1px,0.1fr)}:host .expanded-details-container .section-nav fluent-tabs.horizontal::part(activeIndicator){width:10px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel{max-height:360px;min-height:360px;overflow:hidden auto;padding:0;scrollbar-width:thin}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel .inserted{padding:20px 0;max-width:var(--mgt-flyout-set-width,375px);min-width:var(--mgt-flyout-set-width,360px);--file-list-box-shadow:none;--file-list-padding:0}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel .inserted .title{font-size:14px;font-weight:600;color:var(--title-color-subtitle,var(--neutral-foreground-rest,#1a1a1a));margin:0 20px 20px;line-height:19px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel .overview-panel{max-width:var(--mgt-flyout-set-width,375px)}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar{height:4em;width:4px;border-radius:11px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar-button{height:1px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar-track{border-radius:10px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar-thumb{background:grey;border-radius:10px;height:4px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab{padding-bottom:1px!important;border:1px solid transparent!important}:host .expanded-details-container .section-nav fluent-tabs fluent-tab:focus-visible{border:1px solid #2b2b2b!important}:host .expanded-details-container .section-nav fluent-tabs fluent-tab.section-nav__icon{cursor:pointer;box-sizing:border-box;width:53px;height:36px;display:flex;align-items:center;justify-content:center}:host .expanded-details-container .section-nav fluent-tabs fluent-tab.section-nav__icon svg{fill:var(--person-card-fluent-background-color,transparent)}:host .expanded-details-container .section-nav fluent-tabs fluent-tab.section-nav__icon:hover{background:var(--person-card-fluent-background-color-hover,var(--neutral-fill-hover));border-radius:4px;z-index:0;position:relative}:host .expanded-details-container .section-host{min-height:360px;overflow:hidden auto}:host .expanded-details-container .section-host::-webkit-scrollbar{height:4em;width:4px;border-radius:11px}:host .expanded-details-container .section-host::-webkit-scrollbar-button{background:#fff}:host .expanded-details-container .section-host::-webkit-scrollbar-track{background:#fff;border-radius:10px}:host .expanded-details-container .section-host::-webkit-scrollbar-track-piece{background:#fff}:host .expanded-details-container .section-host::-webkit-scrollbar-thumb{background:grey;border-radius:10px;height:4px}:host .expanded-details-container .section-host.small{overflow-y:hidden}:host .loading{margin:40px 20px;display:flex;justify-content:center;height:360px}:host .message-section{border-bottom:1px solid var(--person-card-chat-input-border-color,var(--neutral-foreground-hint));display:flex}:host .message-section fluent-text-field{margin:10px 10px 10px 16px;--neutral-fill-input-rest:$person-card-background-color;--neutral-fill-input-hover:$person-card-chat-input-hover-color;--neutral-fill-input-focus:$person-card-chat-input-focus-color;width:300px;margin-inline-start:16px;border-radius:4px;border:1px solid var(--person-card-chat-input-border-color,var(--neutral-foreground-hint))}:host .message-section .send-message-icon{max-width:15px;margin-top:10px}:host .message-section svg{height:17px;width:16px;fill:var(--person-card-chat-input-border-color,var(--neutral-foreground-hint))}:host .message-section svg:hover{filter:brightness(.5)}:host .message-section svg:disabled{filter:none}:host .person-root.large,:host .person-root.threelines{--person-avatar-size-3-lines:75px}:host fluent-button.close-button.lightweight::part(control),:host fluent-button.expanded-details-button::part(control),:host fluent-button.section__show-more.lightweight::part(control){background:var(--person-card-fluent-background-color,transparent)}:host fluent-button.icon::part(control),:host fluent-button.nav__back::part(control){border:none;padding:0;background:0 0}:host fluent-button.icon::part(control) :hover,:host fluent-button.nav__back::part(control) :hover{background:0 0}[dir=rtl] .base-icons{right:91px}[dir=rtl] .nav__back{width:20px!important;transform:scaleX(-1);filter:fliph;filter:"FlipH"}[dir=rtl] .close-card-container .close-button{right:auto;left:10px}[dir=rtl] .message-section svg{transform:scale(-1,1)}@media (forced-colors:active) and (prefers-color-scheme:dark){.root{border:1px solid #fff;border-radius:inherit}.root svg,.root svg>path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.expanded-details-container>svg,.expanded-details-container>svg>path,svg,svg>path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){.root{border:1px solid #000;border-radius:inherit}.root svg,.root svg>path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.expanded-details-container>svg,.expanded-details-container>svg>path,svg,svg>path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}
`];var D=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},F=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class P extends r.N{get isCompact(){return this._isCompact}constructor(){super(),this.personDetails=null,this.renderLoading=()=>l.Q`
      <div class="loading">
        <mgt-spinner></mgt-spinner>
      </div>
    `,this._isCompact=!1}asCompactView(){return this._isCompact=!0,this}asFullView(){return this._isCompact=!1,this}clearState(){this._isCompact=!1,this.personDetails=null}render(){return this.isCompact?this.renderCompactView():this.renderFullView()}renderNoData(){return o.qy`
      <div class="no-data">No data</div>
    `}navigateCard(e){var t;let i=this.parentNode;for(;i;){i=i.parentNode;const e=i;if((null===(t=null==e?void 0:e.host)||void 0===t?void 0:t.tagName)===`${h.U.prefix}-PERSON-CARD`.toUpperCase()){i=e.host;break}}i.navigate(e)}}D([(0,s.MZ)({attribute:"person-details",type:Object}),F("design:type",Object)],P.prototype,"personDetails",void 0),D([(0,s.wk)(),F("design:type",Boolean)],P.prototype,"_isCompact",void 0);const L=[o.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none}:host .root .part{display:grid;grid-template-columns:auto 1fr auto}:host .root .part .part__icon{display:flex;min-width:20px;width:20px;height:20px;align-items:center;justify-content:center;margin-left:20px;margin-top:10px;line-height:20px}:host .root .part .part__icon svg{fill:var(--contact-copy-icon-color,var(--neutral-foreground-hint))}:host .root .part .part__details{margin:10px 14px;overflow:hidden}:host .root .part .part__details .part__title{font-size:12px;color:var(--contact-title-color,var(--neutral-foreground-hint));line-height:16px}:host .root .part .part__details .part__value{grid-column:2;color:var(--contact-value-color,var(--neutral-foreground-rest));font-size:14px;font-weight:400;line-height:19px}:host .root .part .part__details .part__value .part__link{color:var(--contact-link-color,var(--accent-foreground-rest));font-size:14px;cursor:pointer;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%;display:inline-block}:host .root .part .part__details .part__value .part__link:hover{color:var(--contact-link-hover-color,var(--accent-foreground-hover))}:host .root .part .part__copy{width:32px;height:100%;background-color:var(--contact-background-color,transparent);visibility:hidden;display:flex;align-items:center;justify-content:flex-start}:host .root .part .part__copy svg{fill:var(--contact-copy-icon-color,var(--neutral-foreground-hint));cursor:pointer}:host .root .part:hover .part__copy{visibility:visible}:host .root.compact{padding:0}:host .root.compact .part{height:30px;align-items:center}:host .root.compact .part__details{margin:0}:host .root.compact .part__title{display:none}:host .root.compact .part__icon{margin-top:0;margin-right:6px;margin-bottom:2px}[dir=rtl] .part__link.phone{text-align:right;direction:ltr}[dir=rtl] .part__icon{margin:10px 20px 0 0!important}[dir=rtl].compact .part__icon{margin-left:6px!important;margin-top:0!important}@media (forced-colors:active) and (prefers-color-scheme:dark){.root svg{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.root svg path,.root svg rect{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){.root svg{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.root svg path,.root svg rect{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}
`],O={contactSectionTitle:"Contact",emailTitle:"Email",chatTitle:"Teams",businessPhoneTitle:"Business Phone",cellPhoneTitle:"Mobile Phone",departmentTitle:"Department",personTitle:"Title",officeLocationTitle:"Office Location",copyToClipboardButton:"Copy to clipboard"};var R=i(5045);class E extends P{static get styles(){return L}get strings(){return O}get hasData(){return!!this._contactParts&&!!Object.values(this._contactParts).filter((e=>!!e.value)).length}constructor(e){var t;super(),this._contactParts={email:{icon:(0,f.r)(f.A.Email),onClick:()=>this.sendEmail((0,u.iu)(this._person)),showCompact:!0,title:this.strings.emailTitle},chat:{icon:(0,f.r)(f.A.Chat),onClick:()=>{var e;return this.sendChat(null===(e=this._person)||void 0===e?void 0:e.userPrincipalName)},showCompact:!1,title:this.strings.chatTitle},businessPhone:{icon:(0,f.r)(f.A.Phone),onClick:()=>{var e,t;return this.sendCall((null===(t=null===(e=this._person)||void 0===e?void 0:e.businessPhones)||void 0===t?void 0:t.length)>0?this._person.businessPhones[0]:null)},showCompact:!0,title:this.strings.businessPhoneTitle},cellPhone:{icon:(0,f.r)(f.A.CellPhone),onClick:()=>{var e;return this.sendCall(null===(e=this._person)||void 0===e?void 0:e.mobilePhone)},showCompact:!0,title:this.strings.cellPhoneTitle},department:{icon:(0,f.r)(f.A.Department),showCompact:!1,title:this.strings.departmentTitle},title:{icon:(0,f.r)(f.A.Person),showCompact:!1,title:this.strings.personTitle},officeLocation:{icon:(0,f.r)(f.A.OfficeLocation),showCompact:!0,title:this.strings.officeLocationTitle}},this.sendCall=e=>{this.sendLink("tel:",e)},this._person=e,this._contactParts.email.value=(0,u.iu)(this._person),this._contactParts.chat.value=this._person.userPrincipalName,this._contactParts.cellPhone.value=this._person.mobilePhone,this._contactParts.department.value=this._person.department,this._contactParts.title.value=this._person.jobTitle,this._contactParts.officeLocation.value=this._person.officeLocation,(null===(t=this._person.businessPhones)||void 0===t?void 0:t.length)&&(this._contactParts.businessPhone.value=this._person.businessPhones[0])}get displayName(){return this.strings.contactSectionTitle}get cardTitle(){return this.strings.contactSectionTitle}renderIcon(){return(0,f.r)(f.A.Contact)}clearState(){super.clearState();for(const e of Object.keys(this._contactParts))this._contactParts[e].value=null}renderCompactView(){if(!this.hasData)return null;const e=Object.values(this._contactParts).filter((e=>!!e.value));let t=Object.values(e).filter((e=>!!e.value&&e.showCompact));(null==t?void 0:t.length)||(t=Object.values(e).slice(0,2));const i=o.qy`
      ${t.map((e=>this.renderContactPart(e)))}
    `;return o.qy`
      <div class="root compact" dir=${this.direction}>
        ${i}
      </div>
    `}renderFullView(){let e;if(this.hasData){const t=Object.values(this._contactParts).filter((e=>!!e.value));e=o.qy`
        ${t.map((e=>this.renderContactPart(e)))}
      `}return o.qy`
      <div class="root" dir=${this.direction}>
        ${e}
      </div>
    `}renderContactPart(e){let t=!1;"Mobile Phone"!==e.title&&"Business Phone"!==e.title||(t=!0);const i={part__link:!0,phone:t},s=e.onClick?o.qy`
          <span class=${(0,n.H)(i)} @click=${t=>e.onClick(t)}>${e.value}</span>
        `:o.qy`
          ${e.value}
        `;return o.qy`
      <div class="part" role="button" @click=${t=>this.handlePartClick(t,e.value)} tabindex="0">
        <div class="part__icon" aria-label=${e.title} title=${e.title}>${e.icon}</div>
        <div class="part__details">
          <div class="part__title">${e.title}</div>
          <div class="part__value" title=${e.title}>${s}</div>
        </div>
        <div
          class="part__copy"
          aria-label=${this.strings.copyToClipboardButton}
          title=${this.strings.copyToClipboardButton}
        >
          ${(0,f.r)(f.A.Copy)}
        </div>
      </div>
    `}handlePartClick(e,t){t&&navigator.clipboard.writeText(t)}sendLink(e,t){t?window.open(`${e}${t}`,"_blank","noreferrer"):console.error(`🦒: Target resource for ${e} link was not provided: resource: ${t}`)}sendChat(e){if(!e)return void console.error("🦒: Can't send chat when upn is not provided");const t=`https://teams.microsoft.com/l/chat/0/0?users=${e}`,i=()=>window.open(t,"_blank","noreferrer");a.isAvailable?a.executeDeepLink(t,(e=>{e||i()})):i()}sendEmail(e){this.sendLink("mailto:",e)}}var M=i(2886),H=i(7822);const V=[o.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none}:host .root.compact{padding:0}:host .root .message{padding:8px 20px;display:flex;align-items:center;justify-content:space-between}:host .root .message:hover{background-color:var(--message-hover-color,var(--neutral-fill-hover));cursor:pointer}:host .root .message:last-child{margin-bottom:unset}:host .root .message .message__detail{min-width:0;line-height:normal}:host .root .message .message__detail .message__subject{color:var(--message-subject-color,var(--neutral-foreground-color));font-size:var(--message-subject-font-size, 14px);font-weight:var(--message-subject-font-weight,600);line-height:var(--message-subject-line-height, 20px)}:host .root .message .message__detail .message__from{font-size:var(--message-from-font-size, 12px);color:var(--message-from-color,var(--neutral-foreground-color));line-height:var(--message-from-line-height, 16px);font-weight:var(--message-from-font-weight,400)}:host .root .message .message__detail .message__message{font-size:var(--message-from-font-size, 12px);color:var(--message-color,var(--neutral-foreground-hint));line-height:var(--message-from-line-height, 16px);font-weight:var(--message-from-font-weight,400)}:host .root .message .message__detail>div{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host .root .message .message__date{margin-top:8px;font-size:12px;color:var(--message-date-color,var(--neutral-foreground-hint));margin-left:10px;white-space:nowrap}
`],z={emailsSectionTitle:"Emails"};class N extends P{static get styles(){return V}get strings(){return z}constructor(e){super(),this._messages=e}get displayName(){return this.strings.emailsSectionTitle}get cardTitle(){return this.strings.emailsSectionTitle}clearState(){super.clearState(),this._messages=[]}renderIcon(){return(0,f.r)(f.A.Messages)}renderCompactView(){var e;let t;if(null===(e=this._messages)||void 0===e?void 0:e.length){const e=this._messages?this._messages.slice(0,3).map((e=>this.renderMessage(e))):[];t=o.qy`
         ${e}
       `}else t=this.renderNoData();return o.qy`
       <div class="root compact">
         ${t}
       </div>
     `}renderFullView(){var e;let t;return t=(null===(e=this._messages)||void 0===e?void 0:e.length)?o.qy`
         ${this._messages.slice(0,5).map((e=>this.renderMessage(e)))}
       `:this.renderNoData(),o.qy`
       <div class="root">
         ${t}
       </div>
     `}renderMessage(e){return o.qy`
       <div class="message" @click=${()=>this.handleMessageClick(e)}>
         <div class="message__detail">
           <div class="message__subject">${e.subject}</div>
           <div class="message__from">${e.from.emailAddress.name}</div>
           <div class="message__message">${e.bodyPreview}</div>
         </div>
         <div class="message__date">${(0,H.h3)(new Date(e.receivedDateTime))}</div>
       </div>
     `}handleMessageClick(e){window.open(e.webLink,"_blank","noreferrer")}}!function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);n>3&&r&&Object.defineProperty(t,i,r)}([(0,s.wk)(),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Array)],N.prototype,"_messages",void 0);const q=[o.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none}:host .root.compact{padding:0}:host .root.compact .coworker .coworker__person-image{height:40px;width:40px;border-radius:40px;--person-avatar-size:40px;margin-right:12px}:host .root.compact .coworker .coworker__name{font-size:14px}:host .root.compact .coworker .coworker__title{font-size:12px}:host .root .subtitle{color:var(--organization-sub-title-color,var(--neutral-foreground-hint));font-size:14px;margin:0 20px 8px}:host .root .divider{display:flex;background:var(--organization-coworker-border-color,var(--neutral-stroke-rest));height:1px;margin:26px 20px 18px}:host .root .org-member{height:74px;box-sizing:border-box;border-radius:2px;padding:12px;display:flex;align-items:center;margin-inline:20px}:host .root .org-member.org-member--target{background-color:var(--organization-active-org-member-target-background-color,var(--neutral-fill-active));border:1px solid var(--organization-active-org-member-border-color,var(--accent-foreground-rest))}:host .root .org-member:not(.org-member--target){border:1px solid var(--organization-coworker-border-color,var(--neutral-stroke-rest))}:host .root .org-member:not(.org-member--target):hover{cursor:pointer;background-color:var(--organization-hover-color,var(--neutral-fill-hover))}:host .root .org-member .org-member__person{flex-grow:1}:host .root .org-member .org-member__person .org-member__person-image{--person-avatar-size:var(--organization-member-person-avatar-size, 40px)}:host .root .org-member .org-member__details{flex-grow:1}:host .root .org-member .org-member__details .org-member__name{font-size:16px;color:var(--organization-title-color,var(--neutral-foreground-rest));font-weight:600}:host .root .org-member .org-member__details .org-member__department,:host .root .org-member .org-member__details .org-member__title{font-weight:14px;color:var(--organization-sub-title-color,var(--neutral-foreground-hint))}:host .root .org-member__separator:not(:last-child){border:1px solid var(--organization-coworker-border-color,var(--neutral-stroke-rest));box-sizing:border-box;width:0;margin:0 50%;height:14px}:host .root .coworker{display:flex;align-items:center;padding:10px 20px}:host .root .coworker:hover{cursor:pointer;background-color:var(--organization-coworker-hover-color,var(--neutral-fill-hover))}:host .root .coworker .coworker__person{height:46px;border-radius:46px;margin-right:8px}:host .root .coworker .coworker__person .coworker__person-image{--person-avatar-size:var(--organization-coworker-person-avatar-size, 40px)}:host .root .direct-report__compact{padding:12px 20px}:host .root .direct-report__compact .direct-report{margin-right:4px;cursor:pointer}:host .root .direct-report-list{border:1px solid var(--organization-coworker-border-color,var(--neutral-stroke-rest));margin-inline:20px}:host .root .direct-report-list .org-member--direct-report{border:none;cursor:pointer;margin-inline:0}:host .root .direct-report-list .org-member--direct-report .direct-report__person-image{--person-avatar-size:var(--organization-direct-report-person-avatar-size, 38px)}[dir=rtl] .org-member .org-member__more{transform:scaleX(-1);filter:fliph;filter:"FlipH"}@media (forced-colors:active) and (prefers-color-scheme:dark){:host svg,:host svg>path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host svg,:host svg>path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}
`],B={reportsToSectionTitle:"Reports to",directReportsSectionTitle:"Direct reports",organizationSectionTitle:"Organization",youWorkWithSubSectionTitle:"You work with",userWorksWithSubSectionTitle:"works with"};var U=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},j=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class Z extends P{static get styles(){return q}get strings(){return B}constructor(e,t){super(),this._state=e,this._me=t}clearState(){super.clearState(),this._state=void 0,this._me=void 0}get displayName(){const{person:e,directReports:t}=this._state;return!e.manager&&(null==t?void 0:t.length)?`${this.strings.directReportsSectionTitle} (${t.length})`:this.strings.reportsToSectionTitle}get cardTitle(){return this.strings.organizationSectionTitle}renderIcon(){return(0,f.r)(f.A.Organization)}renderCompactView(){var e;let t;if(!(null===(e=this._state)||void 0===e?void 0:e.person))return null;const{person:i,directReports:s}=this._state;return i?(i.manager?t=this.renderCoworker(i.manager):(null==s?void 0:s.length)&&(t=this.renderCompactDirectReports()),o.qy`
        <div class="root compact">
          ${t}
        </div>
      `):null}renderFullView(){var e;let t;if(!(null===(e=this._state)||void 0===e?void 0:e.person))return null;const{person:i,directReports:s,people:n}=this._state;if(!(i||s||n))return null;{const e=this.renderManagers(),i=this.renderCurrentUser(),s=this.renderDirectReports(),n=this.renderCoworkers();t=o.qy`
          ${e} ${i} ${s} ${n}
        `}return o.qy`
       <div class="root" dir=${this.direction}>
         ${t}
       </div>
     `}renderManager(e){return l.Q`
      <div
        class="org-member"
        @keydown=${t=>{"Enter"!==t.code&&" "!==t.code||this.navigateCard(e)}}
        @click=${()=>this.navigateCard(e)}
      >
        <div class="org-member__person">
          <mgt-person
            class="org-member__person-image"
            .personDetails=${e}
            .fetchImage=${!0}
            view="twolines"
            .showPresence=${!0}
          ></mgt-person>
        </div>
        <div tabindex="0" class="org-member__more">
          ${(0,f.r)(f.A.ExpandRight)}
        </div>
      </div>
      <div class="org-member__separator"></div>
     `}renderManagers(){const{person:e}=this._state;if(!(null==e?void 0:e.manager))return null;const t=[];let i=e;for(;i.manager;)t.push(i.manager),i=i.manager;return t.length?t.reverse().map((e=>this.renderManager(e))):null}renderDirectReports(){const{directReports:e}=this._state;return(null==e?void 0:e.length)?o.qy`
      <div class="org-member__separator"></div>
      <div class="direct-report-list">
        ${e.map((e=>l.Q`
            <div
              class="org-member org-member--direct-report"
              @keydown=${t=>{"Enter"!==t.code&&" "!==t.code||this.navigateCard(e)}}
              @click=${()=>this.navigateCard(e)}
            >
              <div class="org-member__person">
                <mgt-person
                  class="org-member__person-image"
                  .personDetails=${e}
                  .fetchImage=${!0}
                  .showPresence=${!0}
                  view="twolines"
                ></mgt-person>
              </div>
              <div tabindex="0" class="org-member__more">
                ${(0,f.r)(f.A.ExpandRight)}
              </div>
            </div>
          `))}
      </div>
     `:null}renderCompactDirectReports(){const{directReports:e}=this._state;return o.qy`
      <div class="direct-report__compact">
        ${e.slice(0,6).map((e=>l.Q`
            <div
              class="direct-report"
              @keydown=${t=>{"Enter"!==t.code&&" "!==t.code||this.navigateCard(e)}}
              @click=${()=>this.navigateCard(e)}
            >
              <mgt-person
                class="direct-report__person-image"
                .personDetails=${e}
                .fetchImage=${!0}
                .showPresence=${!0}
                view="twolines"
              ></mgt-person>
            </div>
          `))}
      </div>
    `}renderCurrentUser(){const{person:e}=this._state;return l.Q`
       <div class="org-member org-member--target">
         <div class="org-member__person">
           <mgt-person
              class="org-member__person-image"
             .personDetails=${e}
             .fetchImage=${!0}
             .showPresence=${!0}
             view="twolines"
           ></mgt-person>
         </div>
       </div>
     `}renderCoworker(e){return l.Q`
      <div
        class="coworker"
        @keydown=${t=>{"Enter"!==t.code&&" "!==t.code||this.navigateCard(e)}}
        @click=${()=>this.navigateCard(e)}
      >
        <div class="coworker__person">
          <mgt-person
            class="coworker__person-image"
            .personDetails=${e}
            .fetchImage=${!0}
            .showPresence=${!0}
            view="twolines"
          ></mgt-person>
        </div>
      </div>
    `}renderCoworkers(){const{people:e}=this._state;if(!(null==e?void 0:e.length))return null;const t=this._me.id===this._state.person.id?this.strings.youWorkWithSubSectionTitle:`${this._state.person.givenName} ${this.strings.userWorksWithSubSectionTitle}`;return o.qy`
       <div class="divider"></div>
       <div class="subtitle" tabindex="0">${t}</div>
       <div>
         ${e.slice(0,6).map((e=>this.renderCoworker(e)))}
       </div>
     `}}U([(0,s.wk)(),j("design:type",Object)],Z.prototype,"_state",void 0),U([(0,s.wk)(),j("design:type",Object)],Z.prototype,"_me",void 0);const W=[o.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none;background-color:var(--profile-background-color,--neutral-layer-1)}:host .root{padding:20px 0}:host .root.compact{padding:0}:host .root .title{font-size:14px;font-weight:600;color:var(--profile-title-color,var(--neutral-foreground-rest));margin:0 20px 12px}:host .root section{margin-bottom:24px;padding:0 20px}:host .root section:last-child{margin:0}:host .root section .section__title{font-size:14px;color:var(--profile-section-title-color,var(--neutral-foreground-hint))}:host .root section .section__content{display:flex;flex-direction:column;margin-top:10px}:host .root .token-list{display:flex;flex-flow:row wrap;margin-top:-10px}:host .root .token-list .token-list__item{text-overflow:ellipsis;white-space:nowrap;display:inline-block;overflow:hidden;font-size:14px;align-items:center;background:var(--profile-token-item-background-color,var(--neutral-fill-secondary-rest));border-radius:2px;max-height:28px;padding:4px 8px;margin-right:10px;margin-top:10px;color:var(--profile-token-item-color,var(--neutral-foreground-rest))}:host .root .token-list .token-list__item:last-child{margin-right:initial}:host .root .token-list .token-list__item.overflow{display:none}:host .root .token-list .token-list__item.token-list__item--show-overflow{cursor:pointer;user-select:unset;background:0 0;color:var(--profile-token-overflow-color,var(--accent-foreground-rest))}:host .root .data-list__item{margin-bottom:20px}:host .root .data-list__item:last-child{margin-bottom:initial}:host .root .data-list__item .data-list__item__header{display:flex;justify-content:space-between;align-items:center}:host .root .data-list__item .data-list__item__content{font-size:12px;line-height:16px;color:var(--profile-section-title-color,var(--neutral-foreground-hint));margin-top:4px}:host .root .data-list__item .data-list__item__title{font-size:14px;line-height:16px;color:var(--profile-title-color,var(--neutral-foreground-rest))}:host .root .data-list__item .data-list__item__date-range{color:var(--profile-section-title-color,var(--neutral-foreground-hint));font-size:10px;line-height:12px}:host .root .language__proficiency{opacity:.77}:host .root .work-position .work-position__company{color:#023b8f}:host .root .work-position .work-position__location{font-size:10px;color:var(--profile-section-title-color,var(--neutral-foreground-hint));line-height:16px}:host .root .educational-activity .educational-activity__degree{font-size:12px;line-height:14px;color:var(--profile-section-title-color,var(--neutral-foreground-hint))}:host .root .birthday{display:flex;align-items:center;margin-top:-6px}:host .root .birthday .birthday__icon{margin-right:8px}:host .root .birthday .birthday__date{font-size:12px;color:var(--profile-title-color,var(--neutral-foreground-rest))}[dir=rtl] .token-list__item{margin-right:0!important}
`],G={SkillsAndExperienceSectionTitle:"Skills & Experience",AboutCompactSectionTitle:"About",SkillsSubSectionTitle:"Skills",LanguagesSubSectionTitle:"Languages",WorkExperienceSubSectionTitle:"Work Experience",EducationSubSectionTitle:"Education",professionalInterestsSubSectionTitle:"Professional Interests",personalInterestsSubSectionTitle:"Personal Interests",birthdaySubSectionTitle:"Birthday",currentYearSubtitle:"Current",socialMediaSubSectionTitle:"Social Media"};var Q=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class K extends P{static get styles(){return W}get strings(){return G}get displayName(){return this.strings.SkillsAndExperienceSectionTitle}get cardTitle(){return this.strings.AboutCompactSectionTitle}get hasData(){var e,t;if(!this.profile)return!1;const{languages:i,skills:o,positions:s,educationalActivities:n}=this.profile;return[this._birthdayAnniversary,null===(e=this._personalInterests)||void 0===e?void 0:e.length,null===(t=this._professionalInterests)||void 0===t?void 0:t.length,null==i?void 0:i.length,null==o?void 0:o.length,null==s?void 0:s.length,null==n?void 0:n.length].filter((e=>!!e)).length>0}get profile(){return this._profile}set profile(e){e!==this._profile&&(this._profile=e,this._birthdayAnniversary=(null==e?void 0:e.anniversaries)?e.anniversaries.find(this.isBirthdayAnniversary):null,this._personalInterests=(null==e?void 0:e.interests)?e.interests.filter(this.isPersonalInterest):null,this._professionalInterests=(null==e?void 0:e.interests)?e.interests.filter(this.isProfessionalInterest):null)}constructor(e){super(),this.isPersonalInterest=e=>{var t;return null===(t=e.categories)||void 0===t?void 0:t.includes("personal")},this.isProfessionalInterest=e=>{var t;return null===(t=e.categories)||void 0===t?void 0:t.includes("professional")},this.isBirthdayAnniversary=e=>"birthday"===e.type,this.profile=e}renderIcon(){return(0,f.r)(f.A.Profile)}clearState(){super.clearState(),this.profile=null}renderCompactView(){return o.qy`
       <div class="root compact" dir=${this.direction}>
         ${this.renderSubSections().slice(0,2)}
       </div>
     `}renderFullView(){return this.initPostRenderOperations(),o.qy`
       <div class="root" dir=${this.direction}>
         ${this.renderSubSections()}
       </div>
     `}renderSubSections(){return[this.renderSkills(),this.renderBirthday(),this.renderLanguages(),this.renderWorkExperience(),this.renderEducation(),this.renderProfessionalInterests(),this.renderPersonalInterests()].filter((e=>!!e))}renderLanguages(){var e;const{languages:t}=this._profile;if(!(null==t?void 0:t.length))return null;const i=[];for(const s of t){let t=null;(null===(e=s.proficiency)||void 0===e?void 0:e.length)&&(t=o.qy`
           <span class="language__proficiency" tabindex="0">
             &nbsp;(${s.proficiency})
           </span>
         `),i.push(o.qy`
         <div class="token-list__item language">
           <span class="language__title" tabindex="0">${s.displayName}</span>
           ${t}
         </div>
       `)}const s=i.length?this.strings.LanguagesSubSectionTitle:"";return o.qy`
       <section>
         <div class="section__title" tabindex="0">${s}</div>
         <div class="section__content">
           <div class="token-list">
             ${i}
           </div>
         </div>
       </section>
     `}renderSkills(){const{skills:e}=this._profile;if(!(null==e?void 0:e.length))return null;const t=[];for(const i of e)t.push(o.qy`
         <div class="token-list__item skill" tabindex="0">
           ${i.displayName}
         </div>
       `);const i=t.length?this.strings.SkillsSubSectionTitle:"";return o.qy`
       <section>
         <div class="section__title" tabindex="0">${i}</div>
         <div class="section__content">
           <div class="token-list">
             ${t}
           </div>
         </div>
       </section>
     `}renderWorkExperience(){var e,t,i,s,n;const{positions:r}=this._profile;if(!(null==r?void 0:r.length))return null;const a=[];for(const r of this._profile.positions)(r.detail.description||""!==r.detail.jobTitle)&&a.push(o.qy`
           <div class="data-list__item work-position">
             <div class="data-list__item__header">
               <div class="data-list__item__title" tabindex="0">${null===(e=r.detail)||void 0===e?void 0:e.jobTitle}</div>
               <div class="data-list__item__date-range" tabindex="0">
                 ${this.getDisplayDateRange(r.detail)}
               </div>
             </div>
             <div class="data-list__item__content">
               <div class="work-position__company" tabindex="0">
                 ${null===(i=null===(t=null==r?void 0:r.detail)||void 0===t?void 0:t.company)||void 0===i?void 0:i.displayName}
               </div>
               <div class="work-position__location" tabindex="0">
                 ${this.displayLocation(null===(n=null===(s=null==r?void 0:r.detail)||void 0===s?void 0:s.company)||void 0===n?void 0:n.address)}
               </div>
             </div>
           </div>
         `);const l=a.length?this.strings.WorkExperienceSubSectionTitle:"";return o.qy`
       <section>
         <div class="section__title" tabindex="0">${l}</div>
         <div class="section__content">
           <div class="data-list">
             ${a}
           </div>
         </div>
       </section>
     `}renderEducation(){const{educationalActivities:e}=this._profile;if(!(null==e?void 0:e.length))return null;const t=[];for(const i of e)t.push(o.qy`
         <div class="data-list__item educational-activity">
           <div class="data-list__item__header">
             <div class="data-list__item__title" tabindex="0">${i.institution.displayName}</div>
             <div class="data-list__item__date-range" tabindex="0">
               ${this.getDisplayDateRange(i)}
             </div>
           </div>
           ${i.program.displayName?o.qy`<div class="data-list__item__content">
                  <div class="educational-activity__degree" tabindex="0">
                  ${i.program.displayName}
                </div>`:o.s6}
         </div>
       `);const i=t.length?this.strings.EducationSubSectionTitle:"";return o.qy`
       <section>
         <div class="section__title" tabindex="0">${i}</div>
         <div class="section__content">
           <div class="data-list">
             ${t}
           </div>
         </div>
       </section>
     `}renderProfessionalInterests(){var e;if(!(null===(e=this._professionalInterests)||void 0===e?void 0:e.length))return null;const t=[];for(const e of this._professionalInterests)t.push(o.qy`
         <div class="token-list__item interest interest--professional" tabindex="0">
           ${e.displayName}
         </div>
       `);const i=t.length?this.strings.professionalInterestsSubSectionTitle:"";return o.qy`
       <section>
         <div class="section__title" tabindex="0">${i}</div>
         <div class="section__content">
           <div class="token-list">
             ${t}
           </div>
         </div>
       </section>
     `}renderPersonalInterests(){var e;if(!(null===(e=this._personalInterests)||void 0===e?void 0:e.length))return null;const t=[];for(const e of this._personalInterests)t.push(o.qy`
         <div class="token-list__item interest interest--personal" tabindex="0">
           ${e.displayName}
         </div>
       `);const i=t.length?this.strings.personalInterestsSubSectionTitle:"";return o.qy`
       <section>
         <div class="section__title" tabindex="0">${i}</div>
         <div class="section__content">
           <div class="token-list">
             ${t}
           </div>
         </div>
       </section>
     `}renderBirthday(){var e;return(null===(e=this._birthdayAnniversary)||void 0===e?void 0:e.date)?o.qy`
       <section>
         <div class="section__title" tabindex="0">Birthday</div>
         <div class="section__content">
           <div class="birthday">
             <div class="birthday__icon">
               ${(0,f.r)(f.A.Birthday)}
             </div>
             <div class="birthday__date" tabindex="0">
               ${this.getDisplayDate(new Date(this._birthdayAnniversary.date))}
             </div>
           </div>
         </div>
       </section>
     `:null}getDisplayDate(e){return e.toLocaleString("default",{day:"numeric",month:"long"})}getDisplayDateRange(e){if(!e.startMonthYear)return o.s6;const t=new Date(e.startMonthYear).getFullYear();return 0===t||1===t?o.s6:`${t} — ${e.endMonthYear?new Date(e.endMonthYear).getFullYear():this.strings.currentYearSubtitle}`}displayLocation(e){return(null==e?void 0:e.city)?e.state?`${e.city}, ${e.state}`:e.city:o.s6}initPostRenderOperations(){setTimeout((()=>{try{this.shadowRoot.querySelectorAll("section").forEach((e=>{this.handleTokenOverflow(e)}))}catch(e){}}),0)}handleTokenOverflow(e){const t=e.querySelectorAll(".token-list");if(null==t?void 0:t.length)for(const e of Array.from(t)){const t=e.querySelectorAll(".token-list__item");if(!(null==t?void 0:t.length))continue;let i=null,o=t[0].getBoundingClientRect();const s=e.getBoundingClientRect(),n=2*o.height+s.top;for(let e=0;e<t.length-1;e++)if(o=t[e].getBoundingClientRect(),o.top>n){i=Array.from(t).slice(e,t.length);break}if(i){i.forEach((e=>e.classList.add("overflow")));const t=document.createElement("div");t.classList.add("token-list__item"),t.classList.add("token-list__item--show-overflow"),t.tabIndex=0,t.innerText=`+ ${i.length} more`;const o=()=>{t.remove(),i.forEach((e=>e.classList.remove("overflow")))};t.addEventListener("click",(()=>{o()})),t.addEventListener("keydown",(e=>{"Enter"===e.code&&o()})),e.appendChild(t)}}}}!function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);n>3&&r&&Object.defineProperty(t,i,r)}([(0,s.MZ)({attribute:!1}),Q("design:type",Object),Q("design:paramtypes",[Object])],K.prototype,"profile",null);const X={showMoreSectionButton:"Show more",endOfCard:"End of the card",quickMessage:"Send a quick message",expandDetailsLabel:"Expand details",sendMessageLabel:"Send message",emailButtonLabel:"Email",callButtonLabel:"Call",chatButtonLabel:"Chat",closeCardLabel:"Close card",videoButtonLabel:"Video",goBackLabel:"Go Back"};var J=i(5791),Y=i(2615),ee=i(1880),te=i(1039),ie=i(4885),oe=i(5230),se=i(180),ne=i(5096),re=i(4882),ae=i(9210),le=i(4637);const de="horizontal";class ce extends le.g{constructor(){super(...arguments),this.orientation=de,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",i=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((o,s)=>{if("tab"===o.slot){const e=this.activeTabIndex===s&&this.isFocusableElement(o);this.activeindicator&&this.isFocusableElement(o)&&(this.showActiveIndicator=!0);const t=this.tabIds[s],i=this.tabpanelIds[s];o.setAttribute("id",t),o.setAttribute("aria-selected",e?"true":"false"),o.setAttribute("aria-controls",i),o.addEventListener("click",this.handleTabClick),o.addEventListener("keydown",this.handleTabKeyDown),o.setAttribute("tabindex",e?"0":"-1"),e&&(this.activetab=o,this.activeid=t)}o.style[e]="",o.style[t]="",o.style[i]=`${s+1}`,this.isHorizontal()?o.classList.remove("vertical"):o.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((e,t)=>{const i=this.tabIds[t],o=this.tabpanelIds[t];e.setAttribute("id",o),e.setAttribute("aria-labelledby",i),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case oe.kT:e.preventDefault(),this.adjustBackward(e);break;case oe.bb:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case oe.I5:e.preventDefault(),this.adjustBackward(e);break;case oe.HX:e.preventDefault(),this.adjustForward(e)}switch(e.key){case oe.Tg:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case oe.FM:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let i=0;for(i=this.activetab?t.indexOf(this.activetab)+1:1,i===t.length&&(i=0);i<t.length&&t.length>1;){if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}if(this.activetab&&i===t.indexOf(this.activetab))break;i+1>=t.length?i=0:i+=1}},this.adjustBackward=e=>{const t=this.tabs;let i=0;for(i=this.activetab?t.indexOf(this.activetab)-1:0,i=i<0?t.length-1:i;i>=0&&t.length>1;){if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}i-1<0?i=t.length-1:i-=1}},this.moveToTabByIndex=(e,t)=>{const i=e[t];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`tab-${(0,se.NF)()}`}))}getTabPanelIds(){return this.tabpanels.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`panel-${(0,se.NF)()}`}))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===de}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",o=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const s=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const n=s-o;this.activeIndicatorRef.style.transform=`${t}(${n}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){const t=this.tabs.filter((e=>this.isFocusableElement(e))),i=t.indexOf(this.activetab),o=(0,ne.AB)(0,t.length-1,i+e),s=this.tabs.indexOf(t[o]);s>-1&&this.moveToTabByIndex(this.tabs,s)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}(0,ee.Cg)([te.CF],ce.prototype,"orientation",void 0),(0,ee.Cg)([te.CF],ce.prototype,"activeid",void 0),(0,ee.Cg)([ie.sH],ce.prototype,"tabs",void 0),(0,ee.Cg)([ie.sH],ce.prototype,"tabpanels",void 0),(0,ee.Cg)([(0,te.CF)({mode:"boolean"})],ce.prototype,"activeindicator",void 0),(0,ee.Cg)([ie.sH],ce.prototype,"activeIndicatorRef",void 0),(0,ee.Cg)([ie.sH],ce.prototype,"showActiveIndicator",void 0),(0,ae.X)(ce,re.qw);var he=i(5960),ue=i(1840),pe=i(5330),ge=i(6028),fe=i(5861),ve=i(882),me=i(7707),be=i(1731),ye=i(9931),we=i(6538),xe=i(4416);const ke=ce.compose({baseName:"tabs",template:(e,t)=>he.q`
    <template class="${e=>e.orientation}">
        ${(0,re.LT)(e,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${(0,ue.e)("tabs")}></slot>

            ${(0,pe.z)((e=>e.showActiveIndicator),he.q`
                    <div
                        ${(0,ge.K)("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${(0,re.aO)(e,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${(0,ue.e)("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,t)=>fe.A`
      ${(0,me.V)("grid")} :host {
        box-sizing: border-box;
        ${xe.Ah}
        color: ${ye.lHw};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${we.D} * 1px); auto;
        grid-template-columns: auto;
        position: relative;
        width: max-content;
        align-self: end;
      }

      .start,
      .end {
        align-self: center;
      }

      .activeIndicator {
        grid-row: 2;
        grid-column: 1;
        width: 20px;
        height: 3px;
        border-radius: calc(${ye.PbG} * 1px);
        justify-self: center;
        background: ${ye.IRh};
      }

      .activeIndicatorTransition {
        transition: transform 0.2s ease-in-out;
      }

      .tabpanel {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
      }

      :host(.vertical) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
      }

      :host(.vertical) .tablist {
        grid-row-start: 2;
        grid-row-end: 2;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
        position: relative;
        width: max-content;
        justify-self: end;
        align-self: flex-start;
        width: 100%;
      }

      :host(.vertical) .tabpanel {
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      :host(.vertical) .end {
        grid-row: 3;
      }

      :host(.vertical) .activeIndicator {
        grid-column: 1;
        grid-row: 1;
        width: 3px;
        height: 20px;
        margin-inline-start: calc(${ye.vdx} * 1px);
        border-radius: calc(${ye.PbG} * 1px);
        align-self: center;
        background: ${ye.IRh};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors((0,be.mr)(fe.A`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${ve.A.Highlight};
        }
      `))});class Ce extends le.g{}(0,ee.Cg)([(0,te.CF)({mode:"boolean"})],Ce.prototype,"disabled",void 0);var $e=i(1445),Se=i(1151);const _e=Ce.compose({baseName:"tab",template:(e,t)=>he.q`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:(e,t)=>fe.A`
      ${(0,me.V)("inline-flex")} :host {
        box-sizing: border-box;
        ${xe.Ah}
        height: calc((${we.D} + (${ye.vR1} * 2)) * 1px);
        padding: 0 calc((6 + (${ye.vR1} * 2 * ${ye.Brd})) * 1px);
        color: ${ye.lHw};
        border-radius: calc(${ye.PbG} * 1px);
        border: calc(${ye.XAH} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1 / 3;
        cursor: pointer;
      }

      :host([aria-selected='true']) {
        z-index: 2;
      }

      :host(:hover),
      :host(:active) {
        color: ${ye.lHw};
      }

      :host(:${$e.N}) {
        ${Se.W}
      }

      :host(.vertical) {
        justify-content: start;
        grid-column: 1 / 3;
      }

      :host(.vertical[aria-selected='true']) {
        z-index: 2;
      }

      :host(.vertical:hover),
      :host(.vertical:active) {
        color: ${ye.lHw};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors((0,be.mr)(fe.A`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${ve.A.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${ve.A.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${ve.A.Highlight};
            fill: currentcolor;
          }
          :host(:${$e.N}) {
            background: transparent;
            outline-color: ${ve.A.ButtonText};
          }
        `))});class Ie extends le.g{}const Ae=Ie.compose({baseName:"tab-panel",template:(e,t)=>he.q`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,t)=>fe.A`
  ${(0,me.V)("block")} :host {
    box-sizing: border-box;
    ${xe.Ah}
    padding: 0 calc((6 + (${ye.vR1} * 2 * ${ye.Brd})) * 1px);
  }
`});var Te=i(7404),De=i(9860),Fe=i(6389),Pe=i(8472),Le=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},Oe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},Re=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const Ee=()=>{(0,Fe.E)(Y.z1,ke,_e,Ae,Te.zi,De.oR),(0,R.N)("person-card",Me),(0,Pe.i)(),(0,R.N)("contact",E),(0,A.sN)(),(0,R.N)("organization",Z),(0,R.N)("messages",N),(0,M.x)(),(0,R.N)("profile",K),customElements.get((0,R.F)("person"))||(0,A.sN)()};class Me extends r.N{static get styles(){return T}get strings(){return X}static get requiredScopes(){return(()=>{const e=[];return b.sections.files&&e.push("Sites.Read.All"),b.sections.mailMessages&&(e.push("Mail.Read"),e.push("Mail.ReadBasic")),b.sections.organization&&(e.push("User.Read.All"),b.sections.organization.showWorksWith&&e.push("People.Read.All")),b.sections.profile&&e.push("User.Read.All"),b.useContactApis&&e.push("Contacts.Read"),e.indexOf("User.Read.All")<0&&(e.push("User.ReadBasic.All"),e.push("User.Read")),e.indexOf("People.Read.All")<0&&e.push("People.Read"),b.isSendMessageVisible&&e.push("Chat.ReadWrite"),[...new Set(e)]})()}get personDetails(){return this._personDetails}set personDetails(e){this._personDetails!==e&&(this._personDetails=e,this.personImage=this.getImage())}get personQuery(){return this._personQuery}set personQuery(e){this._personQuery!==e&&(this._personQuery=e,this.personDetails=null,this._cardState=null)}get userId(){return this._userId}set userId(e){e!==this._userId&&(this._userId=e,this.personDetails=null,this._cardState=null)}get internalPersonDetails(){var e;return(null===(e=this._cardState)||void 0===e?void 0:e.person)||this.personDetails}constructor(){super(),this.isSendingMessage=!1,this.goBack=()=>{var e;if(!(null===(e=this._history)||void 0===e?void 0:e.length))return;const t=this._history.pop();this._currentSection=null;const i=this.renderRoot.querySelector("fluent-tab");i&&i.click(),this._cardState=t.state,this._personDetails=t.state.person,this.personImage=t.personImage,this.loadSections()},this.renderContent=()=>{var e;if(!this.internalPersonDetails)return this.renderNoData();const t=this.internalPersonDetails,i=this.getImage();if(this.hasTemplate("default"))return this.renderTemplate("default",{person:this.internalPersonDetails,personImage:i});let s;s=this.strings.closeCardLabel;const r=this.isExpanded?o.qy`
           <div class="close-card-container">
             <fluent-button 
              appearance="lightweight" 
              class="close-button" 
              aria-label=${s}
              @click=${this.closeCard} >
               ${(0,f.r)(f.A.Close)}
             </fluent-button>
           </div>
         `:null;s=this.strings.goBackLabel;const a=(null===(e=this._history)||void 0===e?void 0:e.length)?o.qy`
            <div class="nav">
              <fluent-button 
                appearance="lightweight"
                class="nav__back" 
                aria-label=${s} 
                @keydown=${this.handleGoBack}
                @click=${this.goBack}>${(0,f.r)(f.A.Back)}
               </fluent-button>
            </div>
          `:null;let l=this.renderTemplate("person-details",{person:this.internalPersonDetails,personImage:i});if(!l){const e=this.renderPerson(),i=this.renderContactIcons(t);l=o.qy`
         ${e} ${i}
       `}const d=this.isExpanded?this.renderExpandedDetails():this.renderExpandedDetailsButton();this._windowHeight=window.innerHeight&&document.documentElement.clientHeight?Math.min(window.innerHeight,document.documentElement.clientHeight):window.innerHeight||document.documentElement.clientHeight,this._windowHeight<250&&(this._smallView=!0);const c=this.lockTabNavigation?o.qy`<div @keydown=${this.handleEndOfCard} aria-label=${this.strings.endOfCard} tabindex="0" id="end-of-container"></div>`:o.qy``;return o.qy`
      <div class="root" dir=${this.direction}>
        <div class=${(0,n.H)({small:this._smallView})}>
          ${a}
          ${r}
          <div class="person-details-container">${l}</div>
          <div class="expanded-details-container">${d}</div>
          ${c}
        </div>
      </div>
     `},this.handleEndOfCard=e=>{if(e&&"Tab"===e.code){const e=this.renderRoot.querySelector("#end-of-container");if(e){e.blur();const t=this.renderRoot.querySelector("mgt-person");t&&t.focus()}}},this.closeCard=()=>{this.updateCurrentSection(null),this.isExpanded=!1},this.sendQuickMessage=()=>Re(this,void 0,void 0,(function*(){const e=this._chatInput.trim();if(!(null==e?void 0:e.length))return;const t=this.personDetails,i=this._me.userPrincipalName;this.isSendingMessage=!0;const o=yield((e,t,i)=>x(void 0,void 0,void 0,(function*(){const o={chatType:"oneOnOne",members:[{"@odata.type":"#microsoft.graph.aadUserConversationMember",roles:["owner"],"user@odata.bind":`https://graph.microsoft.com/v1.0/users('${i}')`},{"@odata.type":"#microsoft.graph.aadUserConversationMember",roles:["owner"],"user@odata.bind":`https://graph.microsoft.com/v1.0/users('${t}')`}]};return yield e.api("/chats").header("Cache-Control","no-store").middlewareOptions((0,m.F)(_)).post(o)})))(this._graph,t.userPrincipalName,i),s={body:{content:e}};yield((e,t,i)=>x(void 0,void 0,void 0,(function*(){return yield e.api(`/chats/${t}/messages`).header("Cache-Control","no-store").middlewareOptions((0,m.F)(I)).post(i)})))(this._graph,o.id,s),this.isSendingMessage=!1,this.clearInputData()})),this.emailUser=()=>{const e=this.internalPersonDetails;if(e){const t=(0,u.iu)(e);t&&window.open("mailto:"+t,"_blank","noreferrer")}},this.callUser=()=>{var e,t;const i=this.personDetails,o=this.personDetails;if(null===(e=null==i?void 0:i.businessPhones)||void 0===e?void 0:e.length){const e=i.businessPhones[0];e&&window.open("tel:"+e,"_blank","noreferrer")}else if(null===(t=null==o?void 0:o.phones)||void 0===t?void 0:t.length){const e=this.getPersonBusinessPhones(o)[0];e&&window.open("tel:"+e,"_blank","noreferrer")}},this.chatUser=(e=null)=>{const t=this.personDetails;if(null==t?void 0:t.userPrincipalName){let i=`https://teams.microsoft.com/l/chat/0/0?users=${t.userPrincipalName}`;(null==e?void 0:e.length)&&(i+=`&message=${e}`);const o=()=>window.open(i,"_blank","noreferrer");a.isAvailable?a.executeDeepLink(i,(e=>{e||o()})):o()}},this.videoCallUser=()=>{const e=this.personDetails;if(null==e?void 0:e.userPrincipalName){const t=`https://teams.microsoft.com/l/call/0/0?users=${e.userPrincipalName}&withVideo=true`,i=()=>window.open(t,"_blank");a.isAvailable?a.executeDeepLink(t,(e=>{e||i()})):i()}},this.showExpandedDetails=()=>{const e=this.renderRoot.querySelector(".root");(null==e?void 0:e.animate)&&e.animate([{height:"auto",transformOrigin:"top left"},{height:"auto",transformOrigin:"top left"}],{duration:1e3,easing:"ease-in-out",fill:"both"}),this.isExpanded=!0,this.fireCustomEvent("expanded",null,!0)},this.sendQuickMessageOnEnter=e=>{"Enter"===e.code&&this.sendQuickMessage()},this.handleGoBack=e=>{"Enter"===e.code&&this.goBack()},this._chatInput="",this._currentSection=null,this._history=[],this.sections=[],this._graph=null}navigate(e){this._history.push({personDetails:this.personDetails,personImage:this.getImage(),state:this._cardState}),this.personDetails=e,this._cardState=null,this.personImage=null,this._currentSection=null,this.sections=[],this._chatInput=""}clearHistory(){var e;if(this._currentSection=null,!(null===(e=this._history)||void 0===e?void 0:e.length))return;const t=this._history[0];this._history=[],this._cardState=t.state,this._personDetails=t.personDetails,this.personImage=t.personImage,this.loadSections()}args(){return[this.providerState,this.personDetails,this.personQuery,this.personImage,this.userId]}renderNoData(){return this.renderTemplate("no-data",null)||o.qy``}renderPerson(){return l.Q`
      <mgt-person
        class="person-image"
        .personDetails=${this.internalPersonDetails}
        .personImage=${this.getImage()}
        .personPresence=${this.personPresence}
        .showPresence=${this.showPresence}
        view="threelines"
      ></mgt-person>
    `}renderPersonSubtitle(e){if(e=e||this.internalPersonDetails,(0,J.QY)(e)&&e.department)return o.qy`
       <div class="department">${e.department}</div>
     `}renderContactIcons(e){const t=e=e||this.internalPersonDetails;let i,s,n,r,a;return(0,u.iu)(e)&&(i=`${this.strings.emailButtonLabel} ${e.displayName}`,s=o.qy`
        <fluent-button class="icon"
          aria-label=${i}
          @click=${this.emailUser}>
          ${(0,f.r)(f.A.SmallEmail)}
        </fluent-button>
      `),(null==t?void 0:t.userPrincipalName)&&(i=`${this.strings.chatButtonLabel} ${e.displayName}`,n=o.qy`
        <fluent-button class="icon"
          aria-label=${i}
          @click=${this.chatUser}>
          ${(0,f.r)(f.A.SmallChat)}
        </fluent-button>
       `),(null==t?void 0:t.userPrincipalName)&&(i=`${this.strings.videoButtonLabel} ${e.displayName}`,r=o.qy`
        <fluent-button class="icon"
          aria-label=${i}
          @click=${this.videoCallUser}>
          ${(0,f.r)(f.A.Video)}
        </fluent-button>
      `),this.hasPhone&&(i=`${this.strings.callButtonLabel} ${t.displayName}`,a=o.qy`
         <fluent-button class="icon"
          aria-label=${i}
          @click=${this.callUser}>
          ${(0,f.r)(f.A.Call)}
        </fluent-button>
       `),o.qy`
       <div class="base-icons">
         ${s} ${n} ${r} ${a}
       </div>
     `}renderExpandedDetailsButton(){return o.qy`
      <fluent-button
        aria-label=${this.strings.expandDetailsLabel}
        class="expanded-details-button"
        @click=${this.showExpandedDetails}
      >
        ${(0,f.r)(f.A.ExpandDown)}
      </fluent-button>
     `}renderExpandedDetails(){if(!this._cardState&&this._isStateLoading)return l.Q`
         <div class="loading">
           <mgt-spinner></mgt-spinner>
         </div>
       `;d.b.globalProvider.state===c.HJ.SignedOut&&this.loadSections();const e=this.renderSectionNavigation();return o.qy`
      <div class="section-nav">
        ${e}
      </div>
      <hr class="divider"/>
      <div
        class="section-host ${this._smallView?"small":""} ${this._smallView?"small":""}"
        @wheel=${e=>this.handleSectionScroll(e)}
        tabindex=0
      ></div>
    `}renderSectionNavigation(){if(!this.sections||this.sections.length<2&&!this.hasTemplate("additional-details"))return;const e=this._currentSection?this.sections.indexOf(this._currentSection):-1,t=this.sections.map(((t,i)=>{const s=t.tagName.toLowerCase(),r=(0,n.H)({active:i===e,"section-nav__icon":!0});return o.qy`
        <fluent-tab
          id="${s}-Tab"
          class=${r}
          slot="tab"
          @keyup="${()=>this.updateCurrentSection(t)}"
          @click=${()=>this.updateCurrentSection(t)}
        >
          ${t.renderIcon()}
        </fluent-tab>
      `})),i=this.sections.map((e=>o.qy`
        <fluent-tab-panel slot="tabpanel">
          <div class="inserted">
            <div class="title">${e.cardTitle}</div>
            ${this._currentSection?e.asFullView():null}
          </div>
        </fluent-tab-panel>
      `)),s=(0,n.H)({active:-1===e,"section-nav__icon":!0,overviewTab:!0});return o.qy`
      <fluent-tabs
        orientation="horizontal"
        activeindicator
        @wheel=${e=>this.handleSectionScroll(e)}
      >
        <fluent-tab
          class="${s}"
          slot="tab"
          @keyup="${()=>this.updateCurrentSection(null)}"
          @click=${()=>this.updateCurrentSection(null)}
        >
          <div>${(0,f.r)(f.A.Overview)}</div>
        </fluent-tab>
        ${t}
        <fluent-tab-panel slot="tabpanel" >
          <div class="overview-panel">${this._currentSection?null:this.renderOverviewSection()}</div>
        </fluent-tab-panel>
        ${i}
      </fluent-tabs>
    `}renderOverviewSection(){const e=this.sections.map((e=>o.qy`
        <div class="section">
          <div class="section__header">
            <div class="section__title" tabindex=0>${e.displayName}</div>
              <fluent-button
                appearance="lightweight"
                class="section__show-more"
                @click=${()=>this.updateCurrentSection(e)}
              >
                ${this.strings.showMoreSectionButton}
              </fluent-button>
          </div>
          <div class="section__content">${e.asCompactView()}</div>
        </div>
      `)),t=this.renderTemplate("additional-details",{person:this.internalPersonDetails,personImage:this.getImage(),state:this._cardState});return t&&e.splice(1,0,o.qy`
           <div class="section">
             <div class="additional-details">${t}</div>
           </div>
         `),o.qy`
       <div class="sections">
          ${this.renderMessagingSection()}
          ${e}
       </div>
     `}renderCurrentSection(){var e;if((null===(e=this.sections)||void 0===e?void 0:e.length)||this.hasTemplate("additional-details"))return 1!==this.sections.length||this.hasTemplate("additional-details")?this._currentSection?o.qy`
       ${this._currentSection.asFullView()}
     `:this.renderOverviewSection():o.qy`
         ${this.sections[0].asFullView()}
       `}renderMessagingSection(){const e=this.personDetails,t=this._me.userPrincipalName,i=this._chatInput;return(null==e?void 0:e.userPrincipalName)===t?void 0:b.isSendMessageVisible?o.qy`
      <div class="message-section">
        <fluent-text-field
          autocomplete="off"
          appearance="outline"
          placeholder="${this.strings.quickMessage}"
          .value=${i}
          @input=${e=>{this._chatInput=e.target.value,this.requestUpdate()}}
          @keydown="${e=>this.sendQuickMessageOnEnter(e)}">
        </fluent-text-field>
        <fluent-button class="send-message-icon"
          aria-label=${this.strings.sendMessageLabel}
          @click=${this.sendQuickMessage}
          ?disabled=${this.isSendingMessage}>
          ${this.isSendingMessage?(0,f.r)(f.A.Confirmation):(0,f.r)(f.A.Send)}
        </fluent-button>
      </div>
      `:o.s6}loadState(){var e,t;return Re(this,void 0,void 0,(function*(){if(this._cardState)return;if(!this.personDetails&&this.inheritDetails){let e=this.parentElement;for(;e&&e.tagName!==`${h.U.prefix}-PERSON`.toUpperCase();)e=e.parentElement;const t=e.personDetails||e.personDetailsInternal;e&&t&&(this.personDetails=t,this.personImage=e.personImage)}const i=d.b.globalProvider;if(!i||i.state!==c.HJ.SignedIn)return;const o=i.graph.forComponent(this);if(this._graph=o,this._isStateLoading=!0,this._me||(this._me=yield d.b.me()),this.personDetails){const e=this.personDetails;let t;if((0,J.QY)(e)&&(t=e.userPrincipalName||e.id),t&&!(0,u.iu)(e)){const e=yield(0,g._)(o,t);this.personDetails=e,this.personImage=this.getImage()}}else if(this.userId||"me"===this.personQuery){const e=yield(0,g._)(o,this.userId);this.personDetails=e,this.personImage=this.getImage()}else if(this.personQuery){const e=yield(0,u.lq)(o,this.personQuery,1);(null==e?void 0:e.length)&&(this.personDetails=e[0],yield(0,p.f8)(o,this.personDetails,b.useContactApis).then((e=>{e&&(this.personDetails.personImage=e,this.personImage=e)})))}const s={activity:"Offline",availability:"Offline",id:null};if(!this.personPresence&&this.showPresence)try{(null===(e=this.personDetails)||void 0===e?void 0:e.id)?this.personPresence=yield(0,v.R)(o,this.personDetails.id):this.personPresence=s}catch(e){this.personPresence=s}(null===(t=this.personDetails)||void 0===t?void 0:t.id)&&(this._cardState=yield((e,t,i)=>x(void 0,void 0,void 0,(function*(){var o;const s=t.id,n=(0,u.iu)(t),r="classification"in t||"personType"in t&&("PersonalContact"===t.personType.subclass||"Group"===t.personType.class),a=e.createBatch();let l;r||b.sections.organization&&(((e,t)=>{const i=`manager($levels=max;$select=${k})`;e.get("person",`users/${t}?$expand=${i}&$select=${k}&$count=true`,y.vW,{ConsistencyLevel:"eventual"}),e.get("directReports",`users/${t}/directReports?$select=${k}`)})(a,s),b.sections.organization.showWorksWith&&((e,t)=>{e.get("people",`users/${t}/people?$filter=personType/class eq 'Person'`,C)})(a,s)),b.sections.mailMessages&&n&&((e,t)=>{e.get("messages",`me/messages?$search="from:${t}"`,$)})(a,n),b.sections.files&&((e,t)=>{let i;i=t?`me/insights/shared?$filter=lastshared/sharedby/address eq '${t}'`:"me/insights/used",e.get("files",i,w.yv)})(a,i?null:n);const d={};try{l=yield a.executeAll()}catch(e){}if(l)for(const[e,t]of l)d[e]=(null===(o=t.content)||void 0===o?void 0:o.value)||t.content;if(!r&&b.sections.profile)try{const t=yield((e,t)=>x(void 0,void 0,void 0,(function*(){return yield e.api(`/users/${t}/profile`).version("beta").middlewareOptions((0,m.F)(S)).get()})))(e,s);t&&(d.profile=t)}catch(e){}return d.directReports&&d.directReports.length>0&&(d.directReports=d.directReports.filter((e=>e.accountEnabled))),d})))(o,this.personDetails,this._me===this.personDetails.id)),this.loadSections(),this._isStateLoading=!1}))}get hasPhone(){var e,t;const i=this.personDetails,o=this.personDetails;return Boolean(null===(e=null==i?void 0:i.businessPhones)||void 0===e?void 0:e.length)||Boolean(null===(t=null==o?void 0:o.phones)||void 0===t?void 0:t.length)}loadSections(){if(this.sections=[],!this.internalPersonDetails)return;const e=new E(this.internalPersonDetails);if(e.hasData&&this.sections.push(e),!this._cardState)return;const{person:t,directReports:i,messages:o,files:s,profile:n}=this._cardState;if(b.sections.organization&&((null==t?void 0:t.manager)||(null==i?void 0:i.length))&&this.sections.push(new Z(this._cardState,this._me)),b.sections.mailMessages&&(null==o?void 0:o.length)&&this.sections.push(new N(o)),b.sections.files&&(null==s?void 0:s.length)&&this.sections.push(new M.R(s)),b.sections.profile&&n){const e=new K(n);e.hasData&&this.sections.push(e)}}getImage(){if(this.personImage)return this.personImage;const e=this.personDetails;return(null==e?void 0:e.personImage)?e.personImage:null}clearInputData(){this._chatInput="",this.requestUpdate()}getPersonBusinessPhones(e){const t=e.phones,i=[];for(const e of t)"business"===e.type&&i.push(e.number);return i}updateCurrentSection(e){if(e){const t=e.tagName.toLowerCase();this.renderRoot.querySelector(`#${t}-Tab`).click()}const t=this.renderRoot.querySelectorAll("fluent-tab-panel");for(const e of t)e.scrollTop=0;this._currentSection=e,this.requestUpdate()}handleSectionScroll(e){const t=this.renderRoot.querySelectorAll("fluent-tab-panel");for(const i of t)i&&(e.deltaY<0&&0===i.scrollTop||e.deltaY>0&&i.clientHeight+i.scrollTop>=i.scrollHeight-1||e.stopPropagation())}}Le([(0,s.MZ)({attribute:"person-details",type:Object}),Oe("design:type",Object),Oe("design:paramtypes",[Object])],Me.prototype,"personDetails",null),Le([(0,s.MZ)({attribute:"person-query"}),Oe("design:type",String),Oe("design:paramtypes",[String])],Me.prototype,"personQuery",null),Le([(0,s.MZ)({attribute:"lock-tab-navigation",type:Boolean}),Oe("design:type",Boolean)],Me.prototype,"lockTabNavigation",void 0),Le([(0,s.MZ)({attribute:"user-id"}),Oe("design:type",String),Oe("design:paramtypes",[String])],Me.prototype,"userId",null),Le([(0,s.MZ)({attribute:"person-image",type:String}),Oe("design:type",String)],Me.prototype,"personImage",void 0),Le([(0,s.MZ)({attribute:"fetch-image",type:Boolean}),Oe("design:type",Boolean)],Me.prototype,"fetchImage",void 0),Le([(0,s.MZ)({attribute:"is-expanded",type:Boolean}),Oe("design:type",Boolean)],Me.prototype,"isExpanded",void 0),Le([(0,s.MZ)({attribute:"inherit-details",type:Boolean}),Oe("design:type",Boolean)],Me.prototype,"inheritDetails",void 0),Le([(0,s.MZ)({attribute:"show-presence",type:Boolean}),Oe("design:type",Boolean)],Me.prototype,"showPresence",void 0),Le([(0,s.MZ)({attribute:"person-presence",type:Object}),Oe("design:type",Object)],Me.prototype,"personPresence",void 0),Le([(0,s.wk)(),Oe("design:type",Object)],Me.prototype,"isSendingMessage",void 0),Le([(0,s.wk)(),Oe("design:type",Object)],Me.prototype,"_cardState",void 0),Le([(0,s.wk)(),Oe("design:type",Boolean)],Me.prototype,"_isStateLoading",void 0),Le([(0,s.wk)(),Oe("design:type",Object)],Me.prototype,"_currentSection",void 0)},9754:(e,t,i)=>{i.d(t,{O$:()=>O,ge:()=>P,sN:()=>L});var o=i(7580),s=i(5045),n=i(5292),r=i(4425),a=i(6172),l=i(5468),d=i(3204),c=i(7573),h=i(3511),u=i(6572),p=i(1550),g=i(5791),f=i(3765),v=i(4747),m=i(9239),b=i(4545),y=i(2157),w=i(283),x=i(6389),k=i(1309),C=i(7822),$=i(8932),S=i(7323);const _=[c.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{font-size:var(--default-font-size)}:host .flyout [slot=anchor]{display:flex;cursor:pointer}:host .flyout [slot=anchor].vertical{flex-direction:column;justify-content:center;align-items:center;margin-inline-start:0}:host .person-root{display:flex;flex-direction:row;align-items:center;background-color:var(--person-background-color,transparent);border-radius:var(--person-border-radius,4px)}:host .person-root.small .avatar-wrapper{min-width:var(--person-avatar-size,24px);width:var(--person-avatar-size,24px);height:var(--person-avatar-size,24px)}:host .person-root.small .contact-icon,:host .person-root.small .initials{font-size:calc(var(--person-avatar-size, 24px) * .4)}:host .person-root.small .presence-wrapper svg{width:calc(var(--person-avatar-size,24px) * .28);height:calc(var(--person-avatar-size,24px) * .28)}:host .person-root.noline .avatar-wrapper,:host .person-root.oneline .avatar-wrapper{min-width:var(--person-avatar-size,24px);width:var(--person-avatar-size,24px);height:var(--person-avatar-size,24px)}:host .person-root.noline .avatar-wrapper .contact-icon,:host .person-root.noline .avatar-wrapper .initials,:host .person-root.oneline .avatar-wrapper .contact-icon,:host .person-root.oneline .avatar-wrapper .initials{font-size:calc(var(--person-avatar-size, 24px) * .4)}:host .person-root.noline .avatar-wrapper .presence-wrapper svg,:host .person-root.oneline .avatar-wrapper .presence-wrapper svg{width:calc(var(--person-avatar-size,24px) * .28);height:calc(var(--person-avatar-size,24px) * .28)}:host .person-root.noline .presence-basic,:host .person-root.oneline .presence-basic{border-width:1px;position:relative;bottom:calc(var(--person-avatar-size,24px) * .12 - 4px)}:host .person-root.twolines .avatar-wrapper{min-width:var(--person-avatar-size,40px);width:var(--person-avatar-size,40px);height:var(--person-avatar-size,40px)}:host .person-root.twolines .avatar-wrapper .contact-icon,:host .person-root.twolines .avatar-wrapper .initials{font-size:calc(var(--person-avatar-size, 40px) * .4)}:host .person-root.twolines .avatar-wrapper .presence-wrapper svg{width:calc(var(--person-avatar-size,40px) * .28);height:calc(var(--person-avatar-size,40px) * .28)}:host .person-root.large .avatar-wrapper,:host .person-root.threelines .avatar-wrapper{min-width:var(--person-avatar-size,56px);width:var(--person-avatar-size,56px);height:var(--person-avatar-size,56px)}:host .person-root.large .avatar-wrapper .contact-icon,:host .person-root.large .avatar-wrapper .initials,:host .person-root.threelines .avatar-wrapper .contact-icon,:host .person-root.threelines .avatar-wrapper .initials{font-size:calc(var(--person-avatar-size, 56px) * .4)}:host .person-root.large .avatar-wrapper .presence-wrapper svg,:host .person-root.threelines .avatar-wrapper .presence-wrapper svg{width:calc(var(--person-avatar-size,56px) * .28);height:calc(var(--person-avatar-size,56px) * .28)}:host .person-root.fourlines .avatar-wrapper,:host .person-root.vertical .avatar-wrapper{min-width:var(--person-avatar-size,72px);width:var(--person-avatar-size,72px);height:var(--person-avatar-size,72px)}:host .person-root.fourlines .avatar-wrapper .contact-icon,:host .person-root.fourlines .avatar-wrapper .initials,:host .person-root.vertical .avatar-wrapper .contact-icon,:host .person-root.vertical .avatar-wrapper .initials{font-size:calc(var(--person-avatar-size, 72px) * .4)}:host .person-root.fourlines .avatar-wrapper .presence-wrapper svg,:host .person-root.vertical .avatar-wrapper .presence-wrapper svg{width:calc(var(--person-avatar-size,72px) * .28);height:calc(var(--person-avatar-size,72px) * .28)}:host .person-root.vertical{flex-direction:column;justify-content:center;align-items:center}:host .person-root .avatar-wrapper{min-width:var(--person-avatar-size,24px);width:var(--person-avatar-size,24px);height:var(--person-avatar-size,24px);position:relative;box-sizing:border-box}:host .person-root .avatar-wrapper .contact-icon,:host .person-root .avatar-wrapper .initials,:host .person-root .avatar-wrapper .shimmer,:host .person-root .avatar-wrapper img{height:100%;width:100%;border:var(--person-avatar-border,none);border-radius:var(--person-avatar-border-radius,50%);margin-block-start:var(--person-avatar-top-spacing,0);object-fit:cover;object-position:center top}:host .person-root .avatar-wrapper .contact-icon,:host .person-root .avatar-wrapper .initials,:host .person-root .avatar-wrapper .shimmer{display:flex;justify-content:center;align-items:center;font-size:calc(var(--person-avatar-size, 24px) * .4);font-weight:400;background:var(--person-initials-background-color,var(--neutral-fill-secondary-rest));color:var(--person-initials-text-color,var(--neutral-fill-strong-hover))}:host .person-root .avatar-wrapper .presence-wrapper{bottom:var(--person-presence-wrapper-bottom,0);right:0;position:absolute;border-radius:50%;background-color:var(--neutral-layer-1);border:1px solid var(--neutral-layer-1)}:host .person-root .avatar-wrapper .presence-wrapper svg{display:flex;width:calc(var(--person-avatar-size,24px) * .28);height:calc(var(--person-avatar-size,24px) * .28)}:host .person-root .details-wrapper{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;min-width:var(--person-details-wrapper-width,168px);margin-inline-start:var(--person-details-left-spacing,12px);margin-block-end:var(--person-details-bottom-spacing,0)}:host .person-root .details-wrapper .shimmer.text{width:200px;height:16px;margin:2px 0}:host .person-root .details-wrapper.vertical{display:inline-flex;flex-direction:column;justify-content:center;align-items:center;margin-inline-start:0}:host .person-root .details-wrapper .line1{font-size:var(--person-line1-font-size, ms-font-size-14);font-weight:var(--person-line1-font-weight,600);color:var(--person-line1-text-color,var(--neutral-foreground-rest));text-transform:var(--person-line1-text-transform,inherit);line-height:var(--person-line1-text-line-height, 20px)}:host .person-root .details-wrapper .line2{font-size:var(--person-line2-font-size, var(--email-font-size, ms-font-size-12));font-weight:var(--person-line2-font-weight,400);color:var(--person-line2-text-color,var(--secondary-text-color));text-transform:var(--person-line2-text-transform,inherit);line-height:var(--person-line2-text-line-height, 16px)}:host .person-root .details-wrapper .line3{font-size:var(--person-line3-font-size, var(--email-font-size, ms-font-size-12));font-weight:var(--person-line3-font-weight,400);color:var(--person-line3-text-color,var(--secondary-text-color));text-transform:var(--person-line3-text-transform,inherit);line-height:var(--person-line3-text-line-height, 16px)}:host .person-root .details-wrapper .line4{font-size:var(--person-line4-font-size, var(--email-font-size, ms-font-size-12));font-weight:var(--person-line4-font-weight,400);color:var(--person-line4-text-color,var(--secondary-text-color));text-transform:var(--person-line4-text-transform,inherit);line-height:var(--person-line4-text-line-height, 16px)}@media (forced-colors:active) and (prefers-color-scheme:dark){:host svg,:host svg>path{fill:rgb(255,255,255);fill-rule:nonzero;clip-rule:nonzero}}[dir=rtl] .presence-wrapper{right:unset!important;left:0}
`],I=["photo","initials"],A=Object.assign(Object.assign({},{Available:"Available",Away:"Away",BeRightBack:"Be right back",Busy:"Busy",DoNotDisturb:"Do not disturb",InACall:"In a call",InAConferenceCall:"In a conference call",Inactive:"Inactive",InAMeeting:"In a meeting",Offline:"Offline",OffWork:"Off work",OutOfOffice:"Out of office",PresenceUnknown:"Presence unknown",Presenting:"Presenting",UrgentInterruptionsOnly:"Urgent interruptions only"}),{photoFor:"Photo for",emailAddress:"Email address"});var T=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},D=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},F=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const P=["businessPhones","displayName","givenName","jobTitle","department","mail","mobilePhone","officeLocation","preferredLanguage","surname","userPrincipalName","id","userType"],L=()=>{(0,x.E)(o._0),(0,s.N)("person",O),(0,$.r)()};class O extends n.N{static get styles(){return _}get strings(){return A}get personQuery(){return this._personQuery}set personQuery(e){e!==this._personQuery&&(this._personQuery=e,this._personDetails=null,this.personDetailsInternal=null)}get fallbackDetails(){return this._fallbackDetails}set fallbackDetails(e){e!==this._fallbackDetails&&(this._fallbackDetails=e,this.personDetailsInternal)}get userId(){return this._userId}set userId(e){e!==this._userId&&(this._userId=e,this.personDetailsInternal=null,this._personDetails=null)}get usage(){return this._usage}set usage(e){e!==this._usage&&(this._usage=e)}get personDetailsInternal(){return this._personDetailsInternal}set personDetailsInternal(e){this._personDetailsInternal!==e&&(this._personDetailsInternal=e,this._fetchedImage=null,this._fetchedPresence=null)}get personDetails(){return this._personDetails}set personDetails(e){this._personDetails!==e&&(this._personDetails=e,this._fetchedImage=null,this._fetchedPresence=null)}get personImage(){return this._personImage||this._fetchedImage}set personImage(e){e!==this._personImage&&(this._isInvalidImageSrc=!e,this._personImage=e)}get personPresence(){return this._personPresence||this._fetchedPresence}set personPresence(e){e!==this._personPresence&&(this._personPresence=e)}static get requiredScopes(){const e=["user.readbasic.all","user.read","people.read","presence.read.all","presence.read"];return O.config.useContactApis&&e.push("contacts.read"),e}get flyout(){return this.renderRoot.querySelector(".flyout")}constructor(){super(),this.avatarType="photo",this.personCardInteraction="none",this.view="image",this._hasLoadedPersonCard=!1,this._mouseLeaveTimeout=-1,this._mouseEnterTimeout=-1,this.renderContent=()=>{const e=this.personDetails||this.personDetailsInternal||this.fallbackDetails,t=this.getImage(),i=this.personPresence||this._fetchedPresence;if(!e&&!t)return this.renderNoData();!(null==e?void 0:e.personImage)&&t&&(e.personImage=t);let o=this.renderTemplate("default",{person:e,personImage:t,personPresence:i});if(!o){const s=this.renderDetails(e,i),n=this.renderAvatar(e,t,i);o=c.qy`
        ${n}
        ${s}
      `}"none"!==this.personCardInteraction&&(o=this.renderFlyout(o,e,t,i));const s=(0,u.H)({"person-root":!0,small:!this.isThreeLines()&&!this.isFourLines()&&!this.isLargeAvatar(),large:"auto"!==this.avatarSize&&this.isLargeAvatar(),noline:this.isNoLine(),oneline:this.isOneLine(),twolines:this.isTwoLines(),threelines:this.isThreeLines(),fourlines:this.isFourLines(),vertical:this.isVertical()});return c.qy`
      <div
        class="${s}"
        dir=${this.direction}
        @click=${this.handleMouseClick}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
        @keydown=${this.handleKeyDown}
        tabindex="${(0,p.J)("none"!==this.personCardInteraction?"0":void 0)}"
      >
        ${o}
      </div>
    `},this.renderLoading=()=>{const e=(0,u.H)({"person-root":!0,small:!this.isThreeLines()&&!this.isFourLines()&&!this.isLargeAvatar(),large:"auto"!==this.avatarSize&&this.isLargeAvatar(),noline:this.isNoLine(),oneline:this.isOneLine(),twolines:this.isTwoLines(),threelines:this.isThreeLines(),fourlines:this.isFourLines(),vertical:this.isVertical()}),t=(0,u.H)({"details-wrapper":!0,vertical:this.isVertical()});return this.renderTemplate("loading",null)||c.qy`
        <div class="${e}">
          <div class="avatar-wrapper">
            <fluent-skeleton shimmer class="shimmer" shape="circle"></fluent-skeleton>
          </div>
          <div class=${t}>
            ${this.renderLoadingLines()}
          </div>
        </div>`},this.renderLoadingLines=()=>{const e=[];return this.isNoLine()||(this.isOneLine()&&e.push(this.renderLoadingLine(1)),this.isTwoLines()&&(e.push(this.renderLoadingLine(1)),e.push(this.renderLoadingLine(2))),this.isThreeLines()&&(e.push(this.renderLoadingLine(1)),e.push(this.renderLoadingLine(2)),e.push(this.renderLoadingLine(3))),this.isFourLines()&&(e.push(this.renderLoadingLine(1)),e.push(this.renderLoadingLine(2)),e.push(this.renderLoadingLine(3)),e.push(this.renderLoadingLine(4)))),e},this.renderLoadingLine=e=>{const t=`line${e}`;return c.qy`
      <div class=${t}>
        <fluent-skeleton shimmer class="shimmer text" shape="rect"></fluent-skeleton>
      </div>
    `},this.handleMouseClick=e=>{const t=e.target;"click"===this.personCardInteraction&&t.tagName!==`${r.U.prefix}-PERSON-CARD`.toUpperCase()&&this.showPersonCard()},this.handleKeyDown=e=>{const t=this.renderRoot.querySelector(".person-root");if(e){if("Enter"===e.key){this.showPersonCard();const e=this.flyout;(null==e?void 0:e.isOpen)&&(this._keyBoardFocus=(0,C.sg)((()=>{const t=e.querySelector(".mgt-person-card");t.setAttribute("tabindex","0"),t.focus()}),500),this._keyBoardFocus()),t.blur()}"none"!==this.personCardInteraction&&"Escape"===e.key&&t&&(this.hidePersonCard(),t.focus())}},this.handleMouseEnter=()=>{clearTimeout(this._mouseEnterTimeout),clearTimeout(this._mouseLeaveTimeout),"hover"===this.personCardInteraction&&(this._mouseEnterTimeout=window.setTimeout(this.showPersonCard,500))},this.handleMouseLeave=()=>{clearTimeout(this._mouseEnterTimeout),clearTimeout(this._mouseLeaveTimeout),this._mouseLeaveTimeout=window.setTimeout(this.hidePersonCard,500)},this.hidePersonCard=()=>{const e=this.flyout;e&&e.close();const t=this.querySelector(".mgt-person-card")||this.renderRoot.querySelector(".mgt-person-card");t&&(t.isExpanded=!1,t.clearHistory())},this.loadPersonCardResources=()=>F(this,void 0,void 0,(function*(){if("none"!==this.personCardInteraction&&!this._hasLoadedPersonCard){const{registerMgtPersonCardComponent:e}=yield Promise.resolve().then(i.bind(i,8099));customElements.get((0,s.F)("person-card"))||e(),this._hasLoadedPersonCard=!0}})),this.showPersonCard=()=>{this._personCardShouldRender||(this._personCardShouldRender=!0,this.loadPersonCardResources());const e=this.flyout;e&&e.open()},this.personCardInteraction="none",this.line1Property="displayName",this.line2Property="jobTitle",this.line3Property="department",this.line4Property="email",this.view="image",this.avatarSize="auto",this.disableImageFetch=!1,this._isInvalidImageSrc=!1,this.avatarType="photo",this.verticalLayout=!1}clearState(){this._personImage="",this._personDetailsInternal=null,this._fetchedImage=null,this._fetchedPresence=null}renderNoData(){const e=this.renderTemplate("no-data",null);if(e)return e;const t={"avatar-icon":!0,vertical:this.isVertical(),small:!this.isLargeAvatar(),noline:this.isNoLine(),oneline:this.isOneLine(),twolines:this.isTwoLines(),threelines:this.isThreeLines(),fourlines:this.isFourLines()};return c.qy`
       <i class=${(0,u.H)(t)}></i>
     `}renderPersonIcon(){return(0,k.r)(k.A.Person)}renderImage(e,t){var i;const o=`${this.strings.photoFor} ${e.displayName}`,s=t&&!this._isInvalidImageSrc&&"photo"===this.avatarType,n="photo"===this.avatarType&&"image"===this.view,r=null!==(i=(null==e?void 0:e.displayName)||`${this.strings.emailAddress} ${(0,f.iu)(e)}`)&&void 0!==i?i:void 0,a=c.qy`<img
      title="${(0,p.J)(n?r:void 0)}"
      alt=${o}
      src=${t}
      @error=${()=>this._isInvalidImageSrc=!0} />`,l=e?this.getInitials(e):"",d=null==l?void 0:l.length,h=(0,u.H)({initials:d&&!s,"contact-icon":!d}),g=c.qy`<i>${this.renderPersonIcon()}</i>`,v=c.qy`
      <span 
        title="${(0,p.J)("image"===this.view?r:void 0)}"
        role="${(0,p.J)("image"===this.view?void 0:"presentation")}"
        class="${h}"
      >
        ${d?l:g}
      </span>
`;return s?this.fireCustomEvent("person-image-rendered"):this.fireCustomEvent("person-icon-rendered"),s?a:v}renderPresence(e){var t;if(!this.showPresence||!e)return c.qy``;let i;const{activity:o,availability:s}=e;switch(s){case"Available":case"AvailableIdle":i="OutOfOffice"===o?(0,k.r)(k.A.PresenceOofAvailable):(0,k.r)(k.A.PresenceAvailable);break;case"Busy":case"BusyIdle":switch(o){case"OutOfOffice":case"OnACall":i=(0,k.r)(k.A.PresenceOofBusy);break;default:i=(0,k.r)(k.A.PresenceBusy)}break;case"DoNotDisturb":i="OutOfOffice"===o?(0,k.r)(k.A.PresenceOofDnd):(0,k.r)(k.A.PresenceDnd);break;case"Away":i="OutOfOffice"===o?(0,k.r)(k.A.PresenceOofAway):(0,k.r)(k.A.PresenceAway);break;case"BeRightBack":i=(0,k.r)(k.A.PresenceAway);break;case"Offline":switch(o){case"Offline":i=(0,k.r)(k.A.PresenceOffline);break;case"OutOfOffice":case"OffWork":i=(0,k.r)(k.A.PresenceOofAway);break;default:i=(0,k.r)(k.A.PresenceStatusUnknown)}break;default:i=(0,k.r)(k.A.PresenceStatusUnknown)}const n=(0,u.H)({"presence-wrapper":!0,noline:this.isNoLine(),oneline:this.isOneLine()}),r=null!==(t=this.strings[o])&&void 0!==t?t:c.s6;return c.qy`
      <span
        class="${n}"
        title="${r}"
        aria-label="${r}"
        role="img">
          ${i}
      </span>
    `}renderAvatar(e,t,i){const o=this.renderImage(e,t),s=this.renderPresence(i);return c.qy`
      <div class="avatar-wrapper">
        ${o}
        ${s}
      </div>
    `}handleLine1Clicked(){this.fireCustomEvent("line1clicked",this.personDetailsInternal)}handleLine2Clicked(){this.fireCustomEvent("line2clicked",this.personDetailsInternal)}handleLine3Clicked(){this.fireCustomEvent("line3clicked",this.personDetailsInternal)}handleLine4Clicked(){this.fireCustomEvent("line4clicked",this.personDetailsInternal)}renderDetails(e,t){if(!e||"image"===this.view)return c.qy``;const i=e;t&&(i.presenceActivity=null==t?void 0:t.activity,i.presenceAvailability=null==t?void 0:t.availability);const o=[],s=this.getTextFromProperty(i,this.line1Property);if(this.hasTemplate("line1")){const e=this.renderTemplate("line1",{person:i});o.push(c.qy`
           <div class="line1" part="detail-line" @click=${()=>this.handleLine1Clicked()} role="presentation" aria-label="${s}">${e}</div>
         `)}else s&&o.push(c.qy`
             <div class="line1" part="detail-line" @click=${()=>this.handleLine1Clicked()} role="presentation" aria-label="${s}">${s}</div>
           `);if("oneline"!==this.view){const e=this.getTextFromProperty(i,this.line2Property);if(this.hasTemplate("line2")){const t=this.renderTemplate("line2",{person:i});o.push(c.qy`
           <div class="line2" part="detail-line" @click=${()=>this.handleLine2Clicked()} role="presentation" aria-label="${e}">${t}</div>
         `)}else e&&o.push(c.qy`
             <div class="line2" part="detail-line" @click=${()=>this.handleLine2Clicked()} role="presentation" aria-label="${e}">${e}</div>
           `)}if("threelines"===this.view||"fourlines"===this.view){const e=this.getTextFromProperty(i,this.line3Property);if(this.hasTemplate("line3")){const t=this.renderTemplate("line3",{person:i});o.push(c.qy`
           <div class="line3" part="detail-line" @click=${()=>this.handleLine3Clicked()} role="presentation" aria-label="${e}">${t}</div>
         `)}else e&&o.push(c.qy`
             <div class="line3" part="detail-line" @click=${()=>this.handleLine3Clicked()} role="presentation" aria-label="${e}">${e}</div>
           `)}if("fourlines"===this.view){const e=this.getTextFromProperty(i,this.line4Property);if(this.hasTemplate("line4")){const t=this.renderTemplate("line4",{person:i});o.push(c.qy`
          <div class="line4" part="detail-line" @click=${()=>this.handleLine4Clicked()} role="presentation" aria-label="${e}">${t}</div>
        `)}else e&&o.push(c.qy`
            <div class="line4" part="detail-line" @click=${()=>this.handleLine4Clicked()} role="presentation" aria-label="${e}">${e}</div>
          `)}const n=(0,u.H)({"details-wrapper":!0,vertical:this.isVertical()});return c.qy`
      <div class="${n}">
        ${o}
      </div>
    `}renderFlyout(e,t,i,o){const s=this._personCardShouldRender&&this._hasLoadedPersonCard?c.qy`
           <div slot="flyout" data-testid="flyout-slot">
             ${this.renderFlyoutContent(t,i,o)}
           </div>`:c.qy``,n=(0,u.H)({small:!this.isThreeLines()&&!this.isFourLines()&&!this.isLargeAvatar(),large:"auto"!==this.avatarSize&&this.isLargeAvatar(),noline:this.isNoLine(),oneline:this.isOneLine(),twolines:this.isTwoLines(),threelines:this.isThreeLines(),fourlines:this.isFourLines(),vertical:this.isVertical()});return a.Q`
      <mgt-flyout light-dismiss class="flyout" .avoidHidingAnchor=${!1}>
        <div slot="anchor" class="${n}">${e}</div>
        ${s}
      </mgt-flyout>`}renderFlyoutContent(e,t,i){return this.fireCustomEvent("flyout-content-rendered"),this.renderTemplate("person-card",{person:e,personImage:t})||a.Q`
        <mgt-person-card
          class="mgt-person-card"
          lock-tab-navigation
          .personDetails=${e}
          .personImage=${t}
          .personPresence=${i}
          .showPresence=${this.showPresence}>
        </mgt-person-card>`}args(){return[this.providerState,this.verticalLayout,this.view,this.fallbackDetails,this.line1Property,this.line2Property,this.line3Property,this.line4Property,this.fetchImage,this.avatarType,this.userId,this.personQuery,this.disableImageFetch,this.showPresence,this.personPresence,this.personDetails]}loadState(){return F(this,void 0,void 0,(function*(){const e=l.b.globalProvider;if(!e||e.state===d.HJ.Loading)return;if(e&&e.state===d.HJ.SignedOut)return void(this.personDetailsInternal=null);const t=e.graph.forComponent(this);(this.verticalLayout&&"fourlines"!==this.view||this.fallbackDetails)&&(this.line2Property="email");let i=[...P,this.line1Property,this.line2Property,this.line3Property,this.line4Property];i=i.filter((e=>"email"!==e));let o=this.personDetailsInternal||this.personDetails;if(o){if(!o.personImage&&this.fetchImage&&"photo"===this.avatarType&&!this.personImage&&!this._fetchedImage){let e;e="groupTypes"in o?yield(0,v.t5)(t,o):yield(0,v.f8)(t,o,O.config.useContactApis),e&&(o.personImage=e,this._fetchedImage=e)}}else if(this.userId||"me"===this.personQuery){let e;e="photo"!==this.avatarType||this.disableImageFetch?"me"===this.personQuery?yield(0,b.jp)(t,i):yield(0,b.wz)(t,this.userId,i):yield(0,y._)(t,this.userId,i),this.personDetailsInternal=e,this.personDetails=e,this._fetchedImage=this.getImage()}else if(this.personQuery){let e=yield(0,f.lq)(t,this.personQuery,1);if(e&&0!==e.length||(e=(yield(0,b.Ei)(t,this.personQuery,1))||[]),(null==e?void 0:e.length)&&(this.personDetailsInternal=e[0],this.personDetails=e[0],"photo"===this.avatarType&&!this.disableImageFetch)){const i=yield(0,v.f8)(t,e[0],O.config.useContactApis);i&&(this.personDetailsInternal.personImage=i,this.personDetails.personImage=i,this._fetchedImage=i)}}o=this.personDetailsInternal||this.personDetails||this.fallbackDetails;const s={activity:"Offline",availability:"Offline",id:null};if(this.showPresence&&!this.personPresence&&!this._fetchedPresence)try{if(o){const e="me"!==this.personQuery?null==o?void 0:o.id:null;this._fetchedPresence=yield(0,m.R)(t,e)}else this._fetchedPresence=s}catch(e){this._fetchedPresence=s}}))}getInitials(e){var t,i,o,s,n,r;if(e||(e=this.personDetailsInternal),(0,g.Ts)(e))return e.initials;let a="";if((0,g.QY)(e)&&(a+=null!==(o=null===(i=null===(t=e.givenName)||void 0===t?void 0:t[0])||void 0===i?void 0:i.toUpperCase())&&void 0!==o?o:"",a+=null!==(r=null===(n=null===(s=e.surname)||void 0===s?void 0:s[0])||void 0===n?void 0:n.toUpperCase())&&void 0!==r?r:""),!a&&e.displayName){const t=e.displayName.split(/\s+/);for(let e=0;e<2&&e<t.length;e++)t[e][0]&&this.isLetter(t[e][0])&&(a+=t[e][0].toUpperCase())}return a}getImage(){if(this.personImage)return this.personImage;if(this._fetchedImage)return this._fetchedImage;const e=this.personDetailsInternal||this.personDetails;return(null==e?void 0:e.personImage)?e.personImage:null}isLetter(e){try{return e.match(new RegExp("\\p{L}","u"))}catch(t){return e.toLowerCase()!==e.toUpperCase()}}getTextFromProperty(e,t){if(!t||0===t.length)return null;const i=t.trim().split(",");let o,s=0;for(;!o&&s<i.length;){const t=i[s].trim();switch(t){case"mail":case"email":o=(0,f.iu)(e);break;default:o=e[t]}s++}return o}isLargeAvatar(){return"large"===this.avatarSize||"auto"===this.avatarSize&&"image"!==this.view&&"oneline"!==this.view}isNoLine(){return"image"===this.view}isOneLine(){return"oneline"===this.view}isTwoLines(){return"twolines"===this.view}isThreeLines(){return"threelines"===this.view}isFourLines(){return"fourlines"===this.view}isVertical(){return this.verticalLayout}}O.config={useContactApis:!0},T([(0,h.MZ)({attribute:"person-query"}),D("design:type",String),D("design:paramtypes",[String])],O.prototype,"personQuery",null),T([(0,h.MZ)({attribute:"fallback-details",type:Object}),D("design:type",Object),D("design:paramtypes",[Object])],O.prototype,"fallbackDetails",null),T([(0,h.MZ)({attribute:"user-id"}),D("design:type",String),D("design:paramtypes",[String])],O.prototype,"userId",null),T([(0,h.MZ)({attribute:"usage"}),D("design:type",String),D("design:paramtypes",[String])],O.prototype,"usage",null),T([(0,h.MZ)({attribute:"show-presence",type:Boolean}),D("design:type",Boolean)],O.prototype,"showPresence",void 0),T([(0,h.MZ)({attribute:"avatar-size",type:String}),D("design:type",String)],O.prototype,"avatarSize",void 0),T([(0,h.wk)(),D("design:type",Object),D("design:paramtypes",[Object])],O.prototype,"personDetailsInternal",null),T([(0,h.MZ)({attribute:"person-details",type:Object}),D("design:type",Object),D("design:paramtypes",[Object])],O.prototype,"personDetails",null),T([(0,h.MZ)({attribute:"person-image",type:String}),D("design:type",String),D("design:paramtypes",[String])],O.prototype,"personImage",null),T([(0,h.MZ)({attribute:"fetch-image",type:Boolean}),D("design:type",Boolean)],O.prototype,"fetchImage",void 0),T([(0,h.MZ)({attribute:"disable-image-fetch",type:Boolean}),D("design:type",Boolean)],O.prototype,"disableImageFetch",void 0),T([(0,h.MZ)({attribute:"vertical-layout",type:Boolean}),D("design:type",Boolean)],O.prototype,"verticalLayout",void 0),T([(0,h.MZ)({attribute:"avatar-type",converter:e=>((e,t="photo")=>(e=>"string"==typeof e&&I.includes(e))(e)?e:t)(e,"photo")}),D("design:type",String)],O.prototype,"avatarType",void 0),T([(0,h.MZ)({attribute:"person-presence",type:Object}),D("design:type",Object),D("design:paramtypes",[Object])],O.prototype,"personPresence",null),T([(0,h.MZ)({attribute:"person-card",converter:e=>(0,S.e)(e)}),D("design:type",String)],O.prototype,"personCardInteraction",void 0),T([(0,h.MZ)({attribute:"line1-property"}),D("design:type",String)],O.prototype,"line1Property",void 0),T([(0,h.MZ)({attribute:"line2-property"}),D("design:type",String)],O.prototype,"line2Property",void 0),T([(0,h.MZ)({attribute:"line3-property"}),D("design:type",String)],O.prototype,"line3Property",void 0),T([(0,h.MZ)({attribute:"line4-property"}),D("design:type",String)],O.prototype,"line4Property",void 0),T([(0,h.MZ)({converter:e=>(0,w.E)(e,"image")}),D("design:type",String)],O.prototype,"view",void 0),T([(0,h.wk)(),D("design:type",String)],O.prototype,"_fetchedImage",void 0),T([(0,h.wk)(),D("design:type",Object)],O.prototype,"_fetchedPresence",void 0),T([(0,h.wk)(),D("design:type",Boolean)],O.prototype,"_isInvalidImageSrc",void 0),T([(0,h.wk)(),D("design:type",Boolean)],O.prototype,"_personCardShouldRender",void 0),T([(0,h.wk)(),D("design:type",Object)],O.prototype,"_hasLoadedPersonCard",void 0)},8932:(e,t,i)=>{i.d(t,{r:()=>u});var o=i(7573),s=i(3511),n=i(6572);const r=()=>void 0!==window.getWindowSegments,a=[o.AH`
.root .scout-top{position:fixed;top:0;left:0}.root .scout-bottom{position:fixed;bottom:0;right:0}.root .flyout{display:none;position:fixed;z-index:9999999;opacity:0;box-shadow:var(--mgt-flyout-box-shadow,var(--elevation-shadow-card-rest));border-radius:8px}.root .flyout.small{overflow:hidden auto}.root.visible .flyout{display:inline-block;animation-name:fade-in;animation-duration:.3s;animation-timing-function:cubic-bezier(0.1,0.9,0.2,1);animation-fill-mode:both;transition:top .3s ease,bottom .3s ease,left .3s ease}.root.visible .flyout.small{overflow:hidden auto}@keyframes fade-in{from{opacity:0;margin-top:-10px;margin-bottom:-10px}to{opacity:1;margin-top:0;margin-bottom:0}}
`];var l=i(5045),d=i(1739),c=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};const u=()=>(0,l.N)("flyout",p);class p extends d.S{static get styles(){return a}get isOpen(){return this._isOpen}set isOpen(e){const t=this._isOpen;t!==e&&(this._isOpen=e,window.requestAnimationFrame((()=>{this.setupWindowEvents(this.isOpen);const e=this._flyout;!this.isOpen&&e&&(e.style.width=null,e.style.setProperty("--mgt-flyout-set-width",null),e.style.setProperty("--mgt-flyout-set-height",null),e.style.maxHeight=null,e.style.top=null,e.style.left=null,e.style.bottom=null)})),this.requestUpdate("isOpen",t),this.dispatchEvent(new Event(e?"opened":"closed")))}get _edgePadding(){return 24}get _flyout(){return this.renderRoot.querySelector(".flyout")}get _anchor(){return this.renderRoot.querySelector(".anchor")}get _topScout(){return this.renderRoot.querySelector(".scout-top")}get _bottomScout(){return this.renderRoot.querySelector(".scout-bottom")}constructor(){super(),this._renderedOnce=!1,this._isOpen=!1,this._smallView=!1,this.handleWindowEvent=e=>{const t=this._flyout;if(t)if(e.composedPath){const i=e.composedPath();if(i.includes(t)||"pointerdown"===e.type&&i.includes(this))return}else{let i=e.target;for(;i;)if(i=i.parentElement,i===t||"pointerdown"===e.type&&i===this)return}this.close()},this.handleResize=()=>{this.close()},this.handleKeyUp=e=>{"Escape"===e.key&&this.close()},this.handleFlyoutWheel=e=>{e.preventDefault()},this.avoidHidingAnchor=!0,this.addEventListener("expanded",(()=>{window.requestAnimationFrame((()=>{this.updateFlyout()}))}))}open(){this.isOpen=!0}close(){this.isOpen=!1}disconnectedCallback(){this.setupWindowEvents(!1),super.disconnectedCallback()}updated(e){super.updated(e),window.requestAnimationFrame((()=>{this.updateFlyout()}))}render(){const e={root:!0,visible:this.isOpen},t=this.renderAnchor();let i=null;if(this._windowHeight=window.innerHeight&&document.documentElement.clientHeight?Math.min(window.innerHeight,document.documentElement.clientHeight):window.innerHeight||document.documentElement.clientHeight,this._windowHeight<250&&(this._smallView=!0),this.isOpen||this._renderedOnce){this._renderedOnce=!0;const e=(0,n.H)({flyout:!0,small:this._smallView});i=o.qy`
        <div class=${e} @wheel=${this.handleFlyoutWheel}>
          ${this.renderFlyout()}
        </div>
      `}return o.qy`
      <div class=${(0,n.H)(e)}>
        <div class="anchor">
          ${t}
        </div>
        <div class="scout-top"></div>
        <div class="scout-bottom"></div>
        ${i}
      </div>
    `}renderAnchor(){return o.qy`
      <slot name="anchor"></slot>
    `}renderFlyout(){return o.qy`
      <slot name="flyout"></slot>
    `}updateFlyout(e=!0){if(!this.isOpen)return;const t=this._anchor,i=this._flyout;if(i&&t){const o=window.innerWidth&&document.documentElement.clientWidth?Math.min(window.innerWidth,document.documentElement.clientWidth):window.innerWidth||document.documentElement.clientWidth;this._windowHeight=window.innerHeight&&document.documentElement.clientHeight?Math.min(window.innerHeight,document.documentElement.clientHeight):window.innerHeight||document.documentElement.clientHeight;let s,n,a,l=0,d=0;const c=i.getBoundingClientRect(),h=t.getBoundingClientRect(),u=this._topScout.getBoundingClientRect(),p=this._bottomScout.getBoundingClientRect(),g={height:this._windowHeight,left:0,top:0,width:o};if(r()){const e=(r()?window:null).getWindowSegments();let t;const i=h.left+h.width/2,o=h.top+h.height/2;for(const s of e)if(i>=s.left&&o>=s.top){t=s;break}t&&(g.left=t.left,g.top=t.top,g.width=t.width,g.height=t.height)}c.width+2*this._edgePadding>g.width?c.width>g.width?(a=g.width,l=0):l=(g.width-c.width)/2:l=h.left+c.width+this._edgePadding>g.width?h.left-(h.left+c.width+this._edgePadding-g.width):h.left<this._edgePadding?this._edgePadding:h.left;const f=g.height-(h.top+h.height),v=h.top;this.avoidHidingAnchor?f<=c.height?v<c.height?v>f?(s=g.height-h.top,n=v):(d=h.bottom,n=f):(s=g.height-h.top,n=v):(d=h.bottom,n=f):c.height+2*this._edgePadding>g.height?c.height>=g.height?(n=g.height,d=0):d=(g.height-c.height)/2:d=h.top+h.height+c.height+this._edgePadding>g.height?g.height-c.height-this._edgePadding:Math.max(h.top+h.height,this._edgePadding),0===u.top&&0===u.left||(l-=u.left,void 0!==s?s+=p.top-this._windowHeight:d-=u.top),"rtl"===this.direction?l>100&&this.offsetLeft>100&&(i.style.left=g.width-l+c.left-c.width-30+"px"):i.style.left=`${l+g.left}px`,void 0!==s?(i.style.top="unset",i.style.bottom=`${s}px`):(i.style.bottom="unset",i.style.top=`${d+g.top}px`),a&&(i.style.width=`${a}px`,i.style.setProperty("--mgt-flyout-set-width",`${a}px`),window.requestAnimationFrame((()=>this.updateFlyout()))),n&&!e?(i.style.maxHeight=`${n}px`,i.style.setProperty("--mgt-flyout-set-height",`${n}px`)):(i.style.maxHeight=null,i.style.setProperty("--mgt-flyout-set-height","unset")),e&&window.requestAnimationFrame((()=>this.updateFlyout(!1)))}}setupWindowEvents(e){e&&this.isLightDismiss?(window.addEventListener("wheel",this.handleWindowEvent),window.addEventListener("pointerdown",this.handleWindowEvent),window.addEventListener("resize",this.handleResize),window.addEventListener("keyup",this.handleKeyUp)):(window.removeEventListener("wheel",this.handleWindowEvent),window.removeEventListener("pointerdown",this.handleWindowEvent),window.removeEventListener("resize",this.handleResize),window.removeEventListener("keyup",this.handleKeyUp))}}c([(0,s.MZ)({attribute:"light-dismiss",type:Boolean}),h("design:type",Boolean)],p.prototype,"isLightDismiss",void 0),c([(0,s.MZ)({attribute:null,type:Boolean}),h("design:type",Boolean)],p.prototype,"avoidHidingAnchor",void 0),c([(0,s.MZ)({attribute:"isOpen",type:Boolean}),h("design:type",Boolean),h("design:paramtypes",[Boolean])],p.prototype,"isOpen",null)},8472:(e,t,i)=>{i.d(t,{i:()=>a});var o=i(7573),s=i(1739);const n=[o.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}
`];var r=i(5045);const a=()=>(0,r.N)("spinner",l);class l extends s.S{static get styles(){return n}render(){return o.qy`<fluent-progress-ring title="spinner"></fluent-progress-ring>`}}},3558:(e,t,i)=>{i.d(t,{j:()=>o});const o={presence:{name:"presence",stores:{presence:"presence"},version:2},users:{name:"users",stores:{users:"users",usersQuery:"usersQuery",userFilters:"userFilters"},version:3},photos:{name:"photos",stores:{contacts:"contacts",users:"users",groups:"groups",teams:"teams"},version:2},people:{name:"people",stores:{contacts:"contacts",groupPeople:"groupPeople",peopleQuery:"peopleQuery"},version:3},groups:{name:"groups",stores:{groups:"groups",groupsQuery:"groupsQuery"},version:5},get:{name:"responses",stores:{responses:"responses"},version:2},search:{name:"search",stores:{responses:"responses"},version:2},files:{name:"files",stores:{driveFiles:"driveFiles",groupFiles:"groupFiles",siteFiles:"siteFiles",userFiles:"userFiles",insightFiles:"insightFiles",fileQueries:"fileQueries"},version:2},fileLists:{name:"file-lists",stores:{fileLists:"fileLists",insightfileLists:"insightfileLists"},version:2}}},5791:(e,t,i)=>{i.d(t,{QY:()=>o,Ts:()=>s});const o=e=>"personType"in e||"userType"in e,s=e=>"initials"in e},7723:(e,t,i)=>{i.d(t,{$4:()=>E,$V:()=>h,Ad:()=>L,Ay:()=>ie,D:()=>U,KE:()=>C,Kx:()=>O,LI:()=>S,Mu:()=>y,NO:()=>M,Nd:()=>A,OB:()=>$,Pk:()=>D,Pq:()=>te,Rh:()=>N,S0:()=>Z,Sp:()=>I,W1:()=>ee,WU:()=>R,WW:()=>w,XD:()=>x,Y1:()=>H,Z:()=>z,Zm:()=>q,bJ:()=>W,bn:()=>T,d$:()=>k,dM:()=>_,gt:()=>c,jI:()=>j,mQ:()=>ne,mj:()=>oe,n:()=>B,o4:()=>V,oL:()=>Y,sy:()=>se,wH:()=>F,yv:()=>v,zn:()=>b});var o=i(5232),s=i(2783),n=i(4980),r=i(3558),a=i(5076),l=i(7822),d=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const c=e=>Array.isArray(e.nextExpectedRanges),h=()=>d(void 0,void 0,void 0,(function*(){const e=o._.getCache(r.j.fileLists,r.j.fileLists.stores.fileLists);yield e.clearStore()})),u=()=>o._.config.files.invalidationPeriod||o._.config.defaultInvalidationPeriod,p=()=>o._.config.files.isEnabled&&o._.config.isEnabled,g=()=>o._.config.fileLists.isEnabled&&o._.config.isEnabled,f=["Files.Read","Files.ReadWrite","Files.Read.All","Files.ReadWrite.All","Group.Read.All","Group.ReadWrite.All","Sites.Read.All","Sites.ReadWrite.All"],v=["Sites.Read.All","Sites.ReadWrite.All"],m=["Files.ReadWrite","Files.ReadWrite.All","Sites.ReadWrite.All"],b=(e,t,i=r.j.files.stores.fileQueries,n=f)=>d(void 0,void 0,void 0,(function*(){const a=o._.getCache(r.j.files,i),l=yield X(a,t);if(l)return l;let d;try{d=yield e.api(t).middlewareOptions((0,s.F)(n)).get(),p()&&(yield a.putValue(t,{file:JSON.stringify(d)}))}catch(e){}return d||null})),y=(e,t,i)=>d(void 0,void 0,void 0,(function*(){return b(e,`/drives/${t}/items/${i}`,r.j.files.stores.driveFiles)})),w=(e,t,i)=>d(void 0,void 0,void 0,(function*(){return b(e,`/drives/${t}/root:/${i}`,r.j.files.stores.driveFiles)})),x=(e,t,i)=>d(void 0,void 0,void 0,(function*(){return b(e,`/groups/${t}/drive/items/${i}`,r.j.files.stores.groupFiles)})),k=(e,t,i)=>d(void 0,void 0,void 0,(function*(){return b(e,`/groups/${t}/drive/root:/${i}`,r.j.files.stores.groupFiles)})),C=(e,t)=>d(void 0,void 0,void 0,(function*(){return b(e,`/me/drive/items/${t}`,r.j.files.stores.userFiles)})),$=(e,t)=>d(void 0,void 0,void 0,(function*(){return b(e,`/me/drive/root:/${t}`,r.j.files.stores.userFiles)})),S=(e,t,i)=>d(void 0,void 0,void 0,(function*(){return b(e,`/sites/${t}/drive/items/${i}`,r.j.files.stores.siteFiles)})),_=(e,t,i)=>d(void 0,void 0,void 0,(function*(){return b(e,`/sites/${t}/drive/root:/${i}`,r.j.files.stores.siteFiles)})),I=(e,t,i,o)=>d(void 0,void 0,void 0,(function*(){return b(e,`/sites/${t}/lists/${i}/items/${o}/driveItem`,r.j.files.stores.siteFiles)})),A=(e,t,i)=>d(void 0,void 0,void 0,(function*(){return b(e,`/users/${t}/drive/items/${i}`,r.j.files.stores.userFiles)})),T=(e,t,i)=>d(void 0,void 0,void 0,(function*(){return b(e,`/users/${t}/drive/root:/${i}`,r.j.files.stores.userFiles)})),D=(e,t,i)=>d(void 0,void 0,void 0,(function*(){return b(e,`/me/insights/${t}/${i}/resource`,r.j.files.stores.insightFiles,v)})),F=(e,t,i,o)=>d(void 0,void 0,void 0,(function*(){return b(e,`/users/${t}/insights/${i}/${o}/resource`,r.j.files.stores.insightFiles,v)})),P=(e,t,i,n)=>d(void 0,void 0,void 0,(function*(){let a;const l=o._.getCache(r.j.fileLists,i),d=yield J(l,i,`${t}:${n}`);if(d)return a=K(e,d.files,d.nextLink),a;let c;try{if(c=e.api(t).middlewareOptions((0,s.F)(f)),n&&c.top(n),a=yield Q(e,c),g()){const e=a.nextLink;yield l.putValue(t,{files:a.value.map((e=>JSON.stringify(e))),nextLink:e})}}catch(e){}return a||null})),L=(e,t)=>d(void 0,void 0,void 0,(function*(){const i=r.j.fileLists.stores.fileLists;return P(e,"/me/drive/root/children",i,t)})),O=(e,t,i,o)=>d(void 0,void 0,void 0,(function*(){const s=`/drives/${t}/items/${i}/children`,n=r.j.fileLists.stores.fileLists;return P(e,s,n,o)})),R=(e,t,i,o)=>d(void 0,void 0,void 0,(function*(){const s=`/drives/${t}/root:/${i}:/children`,n=r.j.fileLists.stores.fileLists;return P(e,s,n,o)})),E=(e,t,i,o)=>d(void 0,void 0,void 0,(function*(){const s=`/groups/${t}/drive/items/${i}/children`,n=r.j.fileLists.stores.fileLists;return P(e,s,n,o)})),M=(e,t,i,o)=>d(void 0,void 0,void 0,(function*(){const s=`/groups/${t}/drive/root:/${i}:/children`,n=r.j.fileLists.stores.fileLists;return P(e,s,n,o)})),H=(e,t,i)=>d(void 0,void 0,void 0,(function*(){const o=`/me/drive/items/${t}/children`,s=r.j.fileLists.stores.fileLists;return P(e,o,s,i)})),V=(e,t,i)=>d(void 0,void 0,void 0,(function*(){const o=`/me/drive/root:/${t}:/children`,s=r.j.fileLists.stores.fileLists;return P(e,o,s,i)})),z=(e,t,i,o)=>d(void 0,void 0,void 0,(function*(){const s=`/sites/${t}/drive/items/${i}/children`,n=r.j.fileLists.stores.fileLists;return P(e,s,n,o)})),N=(e,t,i,o)=>d(void 0,void 0,void 0,(function*(){const s=`/sites/${t}/drive/root:/${i}:/children`,n=r.j.fileLists.stores.fileLists;return P(e,s,n,o)})),q=(e,t,i,o)=>d(void 0,void 0,void 0,(function*(){const s=`/users/${t}/drive/items/${i}/children`,n=r.j.fileLists.stores.fileLists;return P(e,s,n,o)})),B=(e,t,i,o)=>d(void 0,void 0,void 0,(function*(){const s=`/users/${t}/drive/root:/${i}:/children`,n=r.j.fileLists.stores.fileLists;return P(e,s,n,o)})),U=(e,t,i)=>d(void 0,void 0,void 0,(function*(){const o=r.j.fileLists.stores.fileLists;return P(e,t,o,i)})),j=(e,t)=>d(void 0,void 0,void 0,(function*(){const i=`/me/insights/${t}`,n=r.j.fileLists.stores.insightfileLists,a=o._.getCache(r.j.fileLists,n),l=yield J(a,n,i);if(l)return l.files.map((e=>JSON.parse(e)));let d;try{d=yield e.api(i).filter("resourceReference/type eq 'microsoft.graph.driveItem'").middlewareOptions((0,s.F)(v)).get()}catch(e){}const c=yield G(e,d,v);return g()&&(yield a.putValue(i,{files:c.map((e=>JSON.stringify(e)))})),c||null})),Z=(e,t,i)=>d(void 0,void 0,void 0,(function*(){let n,a;"shared"===i?(n="/me/insights/shared",a=`((lastshared/sharedby/id eq '${t}') and (resourceReference/type eq 'microsoft.graph.driveItem'))`):(n=`/users/${t}/insights/${i}`,a="resourceReference/type eq 'microsoft.graph.driveItem'");const l=`${n}?$filter=${a}`,d=r.j.fileLists.stores.insightfileLists,c=o._.getCache(r.j.fileLists,d),h=yield J(c,d,l);if(h)return h.files.map((e=>JSON.parse(e)));let u;try{u=yield e.api(n).filter(a).middlewareOptions((0,s.F)(v)).get()}catch(e){}const p=yield G(e,u,v);return g()&&(yield c.putValue(n,{files:p.map((e=>JSON.stringify(e)))})),p||null})),W=(e,t)=>d(void 0,void 0,void 0,(function*(){if(!t||0===t.length)return[];const i=e.createBatch(),s=[];let n,a;p()&&(n=o._.getCache(r.j.files,r.j.files.stores.fileQueries));for(const e of t)p()&&(a=yield n.getValue(e)),p()&&a&&u()>Date.now()-a.timeCached?s.push(JSON.parse(a.file)):""!==e&&i.get(e,e,f);try{const e=yield i.executeAll();for(const i of t){const t=e.get(i);(null==t?void 0:t.content)&&(s.push(t.content),p()&&(yield n.putValue(i,{file:JSON.stringify(t.content)})))}return s}catch(i){try{return Promise.all(t.filter((e=>e&&""!==e)).map((t=>d(void 0,void 0,void 0,(function*(){const i=yield b(e,t);if(i)return p()&&(yield n.putValue(t,{file:JSON.stringify(i)})),i})))))}catch(e){return[]}}})),G=(e,t,i)=>d(void 0,void 0,void 0,(function*(){if(!t)return[];const o=t.value,n=e.createBatch(),r=[];for(const e of o){const t=e.resourceReference.id;""!==t&&n.get(t,t,i)}try{const e=yield n.executeAll();for(const t of o){const i=e.get(t.resourceReference.id);(null==i?void 0:i.content)&&r.push(i.content)}return r}catch(t){try{return Promise.all(o.filter((e=>Boolean(e.resourceReference.id))).map((t=>d(void 0,void 0,void 0,(function*(){return yield e.api(t.resourceReference.id).middlewareOptions((0,s.F)(i)).get()})))))}catch(e){return[]}}})),Q=(e,t)=>d(void 0,void 0,void 0,(function*(){return n.E.create(e,t)})),K=(e,t,i)=>n.E.createFromValue(e,t.map((e=>JSON.parse(e))),i),X=(e,t)=>d(void 0,void 0,void 0,(function*(){if(p()){const i=yield e.getValue(t);if(i&&u()>Date.now()-i.timeCached)return JSON.parse(i.file)}return null})),J=(e,t,i)=>d(void 0,void 0,void 0,(function*(){if(e||(e=o._.getCache(r.j.fileLists,t)),g()){const t=yield e.getValue(i);if(t&&(o._.config.fileLists.invalidationPeriod||o._.config.defaultInvalidationPeriod)>Date.now()-t.timeCached)return t}return null})),Y=e=>d(void 0,void 0,void 0,(function*(){const t=e.nextLink;if(e.hasNext&&(yield e.next()),g()){const i=o._.getCache(r.j.fileLists,r.j.fileLists.stores.fileLists),s=/(graph.microsoft.com\/(v1.0|beta))(.*?)(?=\?)/gi.exec(t)[3];yield i.putValue(s,{files:e.value.map((e=>JSON.stringify(e))),nextLink:t})}})),ee=(e,t,i)=>d(void 0,void 0,void 0,(function*(){try{const o=yield e.api(t).responseType(a.yl.RAW).middlewareOptions((0,s.F)(i)).get();if(404===o.status)return{eTag:null,thumbnail:null};if(!o.ok)return null;return{eTag:o.headers.get("eTag"),thumbnail:yield(0,l.Sk)(yield o.blob())}}catch(e){return null}})),te=(e,t)=>d(void 0,void 0,void 0,(function*(){try{return(yield e.api(t).middlewareOptions((0,s.F)(f)).get())||null}catch(e){}return null})),ie=(e,t,i)=>d(void 0,void 0,void 0,(function*(){try{const o={item:{"@microsoft.graph.conflictBehavior":i||"rename"}};let n;try{n=yield e.api(t).middlewareOptions((0,s.F)(m)).post(JSON.stringify(o))}catch(e){}return n||null}catch(e){return null}})),oe=(e,t,i,o,n)=>d(void 0,void 0,void 0,(function*(){try{const r={"Content-Length":i,"Content-Range":o};let a;try{a=yield e.client.api(t).middlewareOptions((0,s.F)(m)).headers(r).put(n)}catch(e){}return a||null}catch(e){return null}})),se=(e,t,i)=>d(void 0,void 0,void 0,(function*(){try{let o;try{o=yield e.client.api(t).middlewareOptions((0,s.F)(m)).put(i)}catch(e){}return o||null}catch(e){return null}})),ne=(e,t)=>d(void 0,void 0,void 0,(function*(){try{yield e.client.api(t).middlewareOptions((0,s.F)(m)).delete()}catch(e){return null}}))},3765:(e,t,i)=>{i.d(t,{K3:()=>y,cB:()=>m,iu:()=>b,lq:()=>v,ox:()=>w,we:()=>h,ys:()=>d});var o=i(5232),s=i(2783),n=i(7822),r=i(3558),a=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const l=["any","person","group"],d=(e,t="any")=>(e=>"string"==typeof e&&l.includes(e))(e)?e:t,c=["any","user","contact"],h=(e,t="any")=>(e=>"string"==typeof e&&c.includes(e))(e)?e:t,u=()=>o._.config.people.invalidationPeriod||o._.config.defaultInvalidationPeriod,p=()=>o._.config.people.isEnabled&&o._.config.isEnabled,g=["People.Read","People.Read.All"],f=["Contacts.Read","Contacts.ReadWrite"],v=(e,t,i=10,n="any",l="")=>a(void 0,void 0,void 0,(function*(){const a=`${t}:${i}:${n}`;let d;if(p()){const e=r.j.people,t=r.j.people.stores.peopleQuery;d=o._.getCache(e,t);const i=p()?yield d.getValue(a):null;if(i&&u()>Date.now()-i.timeCached)return i.results.map((e=>JSON.parse(e)))}let c,h="personType/class eq 'Person'";"any"!==n&&(h+="user"===n?"and personType/subclass eq 'OrganizationUser'":"and (personType/subclass eq 'ImplicitContact' or personType/subclass eq 'PersonalContact')"),""!==l&&(h+=` and  ${l}`);try{let o=e.api("/me/people").search('"'+t+'"').top(i).filter(h).middlewareOptions((0,s.F)(g));if("contact"!==n&&(o=o.header("X-PeopleQuery-QuerySources","Mailbox,Directory")),c=yield o.get(),p()&&c){const e={maxResults:i,results:null};e.results=c.value.map((e=>JSON.stringify(e))),yield d.putValue(a,e)}}catch(e){}return null==c?void 0:c.value})),m=(e,t="any",i="",n=10)=>a(void 0,void 0,void 0,(function*(){let a;const l=`${i||`*:${t}`}:${n}`;if(p()){a=o._.getCache(r.j.people,r.j.people.stores.peopleQuery);const e=yield a.getValue(l);if(e&&u()>Date.now()-e.timeCached)return e.results.map((e=>JSON.parse(e)))}let d,c="personType/class eq 'Person'";"any"!==t&&(c+="user"===t?"and personType/subclass eq 'OrganizationUser'":"and (personType/subclass eq 'ImplicitContact' or personType/subclass eq 'PersonalContact')"),i&&(c+=` and ${i}`);try{let i=e.api("/me/people").middlewareOptions((0,s.F)(g)).top(n).filter(c);"contact"!==t&&(i=i.header("X-PeopleQuery-QuerySources","Mailbox,Directory")),d=yield i.get(),p()&&d&&(yield a.putValue(l,{maxResults:10,results:d.value.map((e=>JSON.stringify(e)))}))}catch(e){}return d?d.value:null})),b=e=>{var t,i;const o=e,s=e,r=e;return s.mail?(0,n.aX)(s.mail):(null===(t=o.scoredEmailAddresses)||void 0===t?void 0:t.length)?(0,n.aX)(o.scoredEmailAddresses[0].address):(null===(i=r.emailAddresses)||void 0===i?void 0:i.length)?(0,n.aX)(r.emailAddresses[0].address):null},y=(e,t)=>a(void 0,void 0,void 0,(function*(){let i;if(p()){i=o._.getCache(r.j.people,r.j.people.stores.contacts);const e=yield i.getValue(t);if(e&&u()>Date.now()-e.timeCached)return JSON.parse(e.person)}const n=`${t.replace(/#/g,"%2523")}`,a=yield e.api("/me/contacts").filter(`emailAddresses/any(a:a/address eq '${n}')`).middlewareOptions((0,s.F)(f)).get();return p()&&a&&(yield i.putValue(t,{person:JSON.stringify(a.value)})),a?a.value:null})),w=(e,t,i,n)=>a(void 0,void 0,void 0,(function*(){var a;let l;const d=`${t}${i}`;if(p()){l=o._.getCache(r.j.people,r.j.people.stores.peopleQuery);const e=yield l.getValue(d);if(e&&u()>Date.now()-e.timeCached)return e.results.map((e=>JSON.parse(e)))}let c=e.api(i).version(t);(null==n?void 0:n.length)&&(c=c.middlewareOptions((0,s.F)(n)));let h=yield c.get();if(h&&Array.isArray(h.value)&&h["@odata.nextLink"]){let i=h;for(;null==i?void 0:i["@odata.nextLink"];){const o=i["@odata.nextLink"].split(t)[1];i=yield e.api(o).version(t).get(),(null===(a=null==i?void 0:i.value)||void 0===a?void 0:a.length)&&(i.value=h.value.concat(i.value),h=i)}}if(p()&&h){const e={results:null};Array.isArray(h.value)?e.results=h.value.map((e=>JSON.stringify(e))):e.results=[JSON.stringify(h)],yield l.putValue(d,e)}return null==h?void 0:h.value}))},4747:(e,t,i)=>{i.d(t,{B2:()=>p,HJ:()=>u,aC:()=>h,e_:()=>f,f8:()=>b,pc:()=>w,qr:()=>g,r$:()=>x,t5:()=>y});var o=i(5232),s=i(2783),n=i(5076),r=i(7822),a=i(3558),l=i(3765),d=i(4545),c=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const h=()=>o._.config.photos.invalidationPeriod||o._.config.defaultInvalidationPeriod,u=()=>o._.config.photos.isEnabled&&o._.config.isEnabled,p=["User.ReadBasic.All","User.Read.All","User.ReadWrite.All"],g=["User.Read","User.ReadWrite",...p],f=(e,t,i)=>c(void 0,void 0,void 0,(function*(){try{const o=yield e.api(`${t}/photo/$value`).responseType(n.yl.RAW).middlewareOptions((0,s.F)(i)).get();if(404===o.status)return{eTag:null,photo:null};if(!o.ok)return null;return{eTag:o["@odata.mediaEtag"],photo:yield(0,r.Sk)(yield o.blob())}}catch(e){return null}})),v=(e,t)=>c(void 0,void 0,void 0,(function*(){let i,s;return u()&&(i=o._.getCache(a.j.photos,a.j.photos.stores.contacts),s=yield i.getValue(t),s&&h()>Date.now()-s.timeCached)?s.photo:(s=yield f(e,`me/contacts/${t}`,["Contacts.Read","Contacts.ReadWrite"]),u()&&s&&(yield i.putValue(t,s)),s?s.photo:null)})),m=(e,t)=>c(void 0,void 0,void 0,(function*(){let i,s;if(u()){if(i=o._.getCache(a.j.photos,a.j.photos.stores.users),s=yield i.getValue(t),s&&h()>Date.now()-s.timeCached)return s.photo;if(s)try{const i=yield e.api(`users/${t}/photo`).get();i&&(i["@odata.mediaEtag"]!==s.eTag||null===i["@odata.mediaEtag"]&&null===s.eTag)&&(s=null)}catch(e){return null}}return s=s||(yield f(e,`users/${t}`,p)),u()&&s&&(yield i.putValue(t,s)),s?s.photo:null})),b=(e,t,i=!0)=>c(void 0,void 0,void 0,(function*(){if("personType"in t&&"OrganizationUser"!==t.personType.subclass){if("PersonalContact"===t.personType.subclass&&i){const i=(0,l.iu)(t),o=yield(0,l.K3)(e,i);if((null==o?void 0:o.length)&&o[0].id)return yield v(e,o[0].id)}return null}if(t.userPrincipalName||t.id){const i=t.userPrincipalName||t.id;return yield m(e,i)}if(t.id){const i=yield m(e,t.id);if(i)return i}const o=(0,l.iu)(t);if(o){const t=yield(0,d.Ei)(e,o,1);if(null==t?void 0:t.length)return yield m(e,t[0].id);if(i){const t=yield(0,l.K3)(e,o);if(null==t?void 0:t.length)return yield v(e,t[0].id)}}return null})),y=(e,t)=>c(void 0,void 0,void 0,(function*(){let i,s;const n=t.id;if(u()){if(s=o._.getCache(a.j.photos,a.j.photos.stores.groups),i=yield s.getValue(n),i&&h()>Date.now()-i.timeCached)return i.photo;if(i)try{const t=yield e.api(`groups/${n}/photo`).get();t&&(t["@odata.mediaEtag"]!==i.eTag||null===t["@odata.mediaEtag"]&&null===i.eTag)&&(i=null)}catch(e){return null}}return i=i||(yield f(e,`groups/${n}`,["Group.Read.All","Group.ReadWrite.All"])),u()&&i&&(yield s.putValue(n,i)),i?i.photo:null})),w=(e,t)=>c(void 0,void 0,void 0,(function*(){const i=o._.getCache(a.j.photos,t);return yield i.getValue(e)})),x=(e,t,i)=>c(void 0,void 0,void 0,(function*(){const s=o._.getCache(a.j.photos,t);yield s.putValue(e,i)}))},9239:(e,t,i)=>{i.d(t,{R:()=>d,u:()=>c});var o=i(5232),s=i(2783),n=i(3558),r=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const a=()=>o._.config.presence.invalidationPeriod||o._.config.defaultInvalidationPeriod,l=()=>o._.config.presence.isEnabled&&o._.config.isEnabled,d=(e,t)=>r(void 0,void 0,void 0,(function*(){let i;if(l()){i=o._.getCache(n.j.presence,n.j.presence.stores.presence);const e=yield i.getValue(t||"me");if(e&&a()>Date.now()-e.timeCached)return JSON.parse(e.presence)}const r=t?["presence.read.all"]:["presence.read","presence.read.all"],d=t?`/users/${t}/presence`:"/me/presence",c=yield e.api(d).middlewareOptions((0,s.F)(r)).get();return l()&&(yield i.putValue(t||"me",{presence:JSON.stringify(c)})),c})),c=(e,t)=>r(void 0,void 0,void 0,(function*(){if(!t||0===t.length)return{};const i={},r=[],c=["presence.read.all"];let h;l()&&(h=o._.getCache(n.j.presence,n.j.presence.stores.presence));for(const e of t)if(null==e?void 0:e.id){const t=e.id;let o;i[t]=null,l()&&(o=yield h.getValue(t)),l()&&o&&a()>Date.now()-o.timeCached?i[t]=JSON.parse(o.presence):r.push(t)}try{if(r.length>0){const t=yield e.api("/communications/getPresencesByUserId").middlewareOptions((0,s.F)(c)).post({ids:r});for(const e of t.value)i[e.id]=e,l()&&(yield h.putValue(e.id,{presence:JSON.stringify(e)}))}return i}catch(o){try{const o=yield Promise.all(t.filter((e=>(null==e?void 0:e.id)&&!i[e.id]&&"personType"in e&&"OrganizationUser"===e.personType.subclass)).map((t=>d(e,t.id))));for(const e of o)i[e.id]=e;return i}catch(e){return null}}}))},4545:(e,t,i)=>{i.d(t,{$q:()=>f,Ei:()=>m,PD:()=>l,cA:()=>d,fp:()=>y,jp:()=>u,lo:()=>c,sb:()=>b,vW:()=>p,vl:()=>v,wz:()=>g});var o=i(5232),s=i(2783),n=i(3558),r=i(3765),a=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const l=()=>o._.config.users.invalidationPeriod||o._.config.defaultInvalidationPeriod,d=()=>o._.config.users.isEnabled&&o._.config.isEnabled,c=(e,t="",i=10)=>a(void 0,void 0,void 0,(function*(){const r=["User.ReadBasic.All","User.Read.All","Directory.Read.All","User.ReadWrite.All","Directory.ReadWrite.All"];let a;const c=`${""===t?"*":t}:${i}`,h={maxResults:i,results:null};if(d()){a=o._.getCache(n.j.users,n.j.users.stores.userFilters);const e=yield a.getValue(c);if(e&&l()>Date.now()-e.timeCached)return e.results.map((e=>JSON.parse(e)))}const u=e.api("/users").top(i);t&&u.filter(t).header("ConsistencyLevel","eventual").count(!0);try{const e=yield u.middlewareOptions((0,s.F)(r)).get();return d()&&e&&(h.results=e.value.map((e=>JSON.stringify(e))),yield a.putValue(t,h)),e.value}catch(e){}})),h=["User.Read","User.ReadWrite"],u=(e,t)=>a(void 0,void 0,void 0,(function*(){let i;if(d()){i=o._.getCache(n.j.users,n.j.users.stores.users);const e=yield i.getValue("me");if(e&&l()>Date.now()-e.timeCached){const i=JSON.parse(e.user),o=t?t.filter((e=>!Object.keys(i).includes(e))):null;if(!o||o.length<=1)return i}}let r="me";t&&(r=r+"?$select="+t.toString());const a=yield e.api(r).middlewareOptions((0,s.F)(h)).get();return d()&&(yield i.putValue("me",{user:JSON.stringify(a)})),a})),p=["User.ReadBasic.All","User.Read.All","Directory.Read.All","User.ReadWrite.All","Directory.ReadWrite.All"],g=(e,t,i)=>a(void 0,void 0,void 0,(function*(){let r;if(d()){r=o._.getCache(n.j.users,n.j.users.stores.users);const e=yield r.getValue(t);if(e&&l()>Date.now()-e.timeCached){const t=e.user?JSON.parse(e.user):null,o=i&&t?i.filter((e=>!Object.keys(t).includes(e))):null;if(!o||o.length<=1)return t}}let a,c=`/users/${t}`;i&&(c=c+"?$select="+i.toString());try{a=yield e.api(c).middlewareOptions((0,s.F)(p)).get()}catch(e){}return d()&&(yield r.putValue(t,{user:JSON.stringify(a)})),a})),f=(e,t,i="",s="",r)=>a(void 0,void 0,void 0,(function*(){if(!t||0===t.length)return[];const c=e.createBatch(),h={},f={},v=[];let m;i=i.toLowerCase(),d()&&(m=o._.getCache(n.j.users,n.j.users.stores.users));for(const o of t){h[o]=null;let t,n,r=`/users/${o}`;if(d()&&(n=yield m.getValue(o)),(null==n?void 0:n.user)&&l()>Date.now()-n.timeCached)if(t=JSON.parse(null==n?void 0:n.user),i){if(t){const e=t.displayName;(null==e?void 0:e.toLowerCase().includes(i))&&(f[o]=t)}}else t?h[o]=t:(c.get(o,r,p),v.push(o));else""!==o&&("me"===o?h[o]=yield u(e):(r=`/users/${o}`,s&&(r+=`${r}?$filter=${s}&$count=true`),c.get(o,r,p,s?{ConsistencyLevel:"eventual"}:{}),v.push(o)))}try{if(c.hasRequests){const e=yield c.executeAll();for(const o of t){const t=e.get(o);if(null==t?void 0:t.content){const e=t.content;i?((null==e?void 0:e.displayName.toLowerCase())||"").includes(i)&&(f[o]=e):h[o]=e,d()&&(yield m.putValue(o,{user:JSON.stringify(e)}))}else{const e=r.find((e=>Object.values(e).includes(o)));e&&(h[o]=e)}}}return i&&Object.keys(f).length?Promise.all(Object.values(f)):Promise.all(Object.values(h))}catch(i){try{return t.filter((e=>v.includes(e))).forEach((t=>{h[t]=g(e,t)})),d()&&(yield Promise.all(t.filter((e=>v.includes(e))).map((e=>a(void 0,void 0,void 0,(function*(){return yield m.putValue(e,{user:JSON.stringify(yield h[e])})})))))),Promise.all(Object.values(h))}catch(e){return[]}}})),v=(e,t,i)=>a(void 0,void 0,void 0,(function*(){var s;const c=["People.Read","People.Read.All"];if(!t||0===t.length)return[];const h=e.createBatch(),u=[];let p,g;d()&&(g=o._.getCache(n.j.users,n.j.users.stores.usersQuery));for(const e of t)if(d()&&(p=yield g.getValue(e)),d()&&(null==p?void 0:p.results[0])&&l()>Date.now()-p.timeCached){const e=JSON.parse(p.results[0]);u.push(e)}else h.get(e,`/me/people?$search="${e}"`,c,{"X-PeopleQuery-QuerySources":"Mailbox,Directory"});if(h.hasRequests)try{const e=yield h.executeAll();for(const o of t){const t=e.get(o);if((null===(s=null==t?void 0:t.content)||void 0===s?void 0:s.value)&&t.content.value.length>0)u.push(t.content.value[0]),d()&&(yield g.putValue(o,{maxResults:1,results:[JSON.stringify(t.content.value[0])]}));else{const e=i.find((e=>Object.values(e).includes(o)));e&&u.push(e)}}return u}catch(i){try{return Promise.all(t.filter((e=>e&&""!==e)).map((t=>a(void 0,void 0,void 0,(function*(){const i=yield(0,r.lq)(e,t,1);if(null==i?void 0:i.length)return d()&&(yield g.putValue(t,{maxResults:1,results:[JSON.stringify(i[0])]})),i[0]})))))}catch(e){return[]}}return u})),m=(e,t,i=10,r="")=>a(void 0,void 0,void 0,(function*(){const a=p,c={maxResults:i,results:null},h=`${t}:${i}:${r}`;let u;if(d()){u=o._.getCache(n.j.users,n.j.users.stores.usersQuery);const e=yield u.getValue(h);if(e&&l()>Date.now()-e.timeCached)return e.results.map((e=>JSON.parse(e)))}const g=`${t.replace(/#/g,"%2523")}`,f=e.api("users").search(`"displayName:${g}" OR "mail:${g}" OR "userPrincipalName: ${g}"`).header("ConsistencyLevel","eventual").count(!0);let v;""!==r&&f.filter(r);try{v=yield f.top(i).middlewareOptions((0,s.F)(a)).get()}catch(e){}return d()&&v&&(c.results=v.value.map((e=>JSON.stringify(e))),yield u.putValue(t,c)),v?v.value:null})),b=(e,t,i,r=10,c="person",h=!1,u="",p="")=>a(void 0,void 0,void 0,(function*(){const a={maxResults:r,results:null};let g;const f=`${i||"*"}:${t||"*"}:${r}:${c}:${h}:${u}`;if(d()){g=o._.getCache(n.j.users,n.j.users.stores.usersQuery);const e=yield g.getValue(f);if(e&&l()>Date.now()-e.timeCached)return e.results.map((e=>JSON.parse(e)))}let v="";t&&(v=`startswith(displayName,'${t}') or startswith(givenName,'${t}') or startswith(surname,'${t}') or startswith(mail,'${t}') or startswith(userPrincipalName,'${t}')`);let m=`/groups/${i}/${h?"transitiveMembers":"members"}`;"person"===c?m+="/microsoft.graph.user":"group"===c&&(m+="/microsoft.graph.group",t&&(v=`startswith(displayName,'${t}') or startswith(mail,'${t}')`)),u&&(v+=t?` and ${u}`:u),p&&(v+=t?` and ${p}`:p);const b=e.api(m).top(r).filter(v);u&&b.header("ConsistencyLevel","eventual").count(!0);const y=yield b.middlewareOptions((0,s.F)(["GroupMember.Read.All","Group.Read.All","Directory.Read.All","GroupMember.ReadWrite.All","Group.ReadWrite.All"])).get();return d()&&y&&(a.results=y.value.map((e=>JSON.stringify(e))),yield g.putValue(f,a)),y?y.value:null})),y=(e,t,i,o=10,s="person",n=!1,r="")=>a(void 0,void 0,void 0,(function*(){const a=[];for(const l of i)try{const i=yield b(e,t,l,o,s,n,r);a.push(...i)}catch(e){continue}return a}))},2157:(e,t,i)=>{i.d(t,{_:()=>d});var o=i(5232),s=i(2783),n=i(4747),r=i(4545),a=i(3558),l=i(7006);const d=(e,t,i)=>{return d=void 0,c=void 0,u=function*(){const d=["User.ReadBasic.All","User.Read.All","Directory.Read.All","User.ReadWrite.All","Directory.ReadWrite.All"],c=["User.Read","User.ReadWrite",...d],h=t?d:c,u=t?n.B2:n.qr;let p,g,f,v=null;const m=t?`users/${t}`:"me",b=m+(i?`?$select=${i.toString()}`:"");if((0,r.cA)()){const e=o._.getCache(a.j.users,a.j.users.stores.users);f=yield e.getValue(t||"me"),f&&(0,r.PD)()>Date.now()-f.timeCached?(v=f.user?JSON.parse(f.user):null,null!==v&&i&&i.filter((e=>!Object.keys(v).includes(e))).length>=1&&(v=null,f=null)):f=null}if((0,n.HJ)())if(g=yield(0,n.pc)(t||"me",a.j.photos.stores.users),g&&(0,n.aC)()>Date.now()-g.timeCached)p=g.photo;else if(g)try{const i=yield e.api(`${m}/photo`).get();(null==i?void 0:i["@odata.mediaEtag"])&&i["@odata.mediaEtag"]===g.eTag?(yield(0,n.r$)(t||"me",a.j.photos.stores.users,g),p=g.photo):g=null}catch(e){(0,l.Z)(e)&&("ErrorItemNotFound"!==e.code&&"ImageNotFound"!==e.code||(yield(0,n.r$)(t||"me",a.j.photos.stores.users,{eTag:null,photo:null})))}if(g||f)if(g){if(!f)try{const i=yield e.api(b).middlewareOptions((0,s.F)(h)).get();if(i){if((0,r.cA)()){const e=o._.getCache(a.j.users,a.j.users.stores.users);yield e.putValue(t||"me",{user:JSON.stringify(i)})}v=i}}catch(e){}}else try{const i=yield(0,n.e_)(e,m,u);i&&((0,n.HJ)()&&(yield(0,n.r$)(t||"me",a.j.photos.stores.users,{eTag:i.eTag,photo:i.photo})),p=i.photo)}catch(e){}else{let s;const l=e.createBatch();t?(l.get("user",`/users/${t}${i?"?$select="+i.toString():""}`,h),l.get("photo",`users/${t}/photo/$value`,u)):(l.get("user","me",h),l.get("photo","me/photo/$value",u));const d=yield l.executeAll(),c=d.get("photo");c&&(s=c.headers.ETag,p=c.content);const g=d.get("user");if(g&&(v=g.content),(0,r.cA)()){const e=o._.getCache(a.j.users,a.j.users.stores.users);yield e.putValue(t||"me",{user:JSON.stringify(v)})}(0,n.HJ)()&&(yield(0,n.r$)(t||"me",a.j.photos.stores.users,{eTag:s,photo:p}))}return v&&(v.personImage=p),v},new((h=void 0)||(h=Promise))((function(e,t){function i(e){try{s(u.next(e))}catch(e){t(e)}}function o(e){try{s(u.throw(e))}catch(e){t(e)}}function s(t){var s;t.done?e(t.value):(s=t.value,s instanceof h?s:new h((function(e){e(s)}))).then(i,o)}s((u=u.apply(d,c||[])).next())}));var d,c,h,u}},7006:(e,t,i)=>{i.d(t,{Z:()=>o});const o=e=>{const t=e;return t.statusCode&&"code"in t&&"body"in t&&t.date&&"message"in t&&"name"in t&&"requestId"in t}},283:(e,t,i)=>{i.d(t,{E:()=>s});const o=["image","oneline","twolines","threelines","fourlines"],s=(e,t="twolines")=>(e=>"string"==typeof e&&o.includes(e))(e)?e:t},2207:(e,t,i)=>{i.d(t,{A:()=>r,G:()=>n});const o={PowerPoint:"pptx",Word:"docx",Excel:"xlsx",Pdf:"pdf",OneNote:"onetoc",OneNotePage:"one",InfoPath:"xsn",Visio:"vstx",Publisher:"pub",Project:"mpp",Access:"accdb",Mail:"email",Csv:"csv",Archive:"archive",Xps:"vector",Audio:"audio",Video:"video",Image:"photo",Web:"html",Text:"txt",Xml:"xml",Story:"genericfile",ExternalContent:"genericfile",Folder:"folder",Spsite:"spo",Other:"genericfile"},s="https://spoprod-a.akamaihd.net/files/fabric-cdn-prod_20201008.001/assets/item-types",n=(e,t,i)=>{const n=o[e]||"genericfile";return`${s}/${t.toString()}/${n}.${i}`},r=(e,t,i)=>Object.keys(o).find((t=>o[t]===e))?`${s}/${t.toString()}/${e}.${i}`:"jpg"===e||"png"===e?(e="photo",`${s}/${t.toString()}/${e}.${i}`):null},6389:(e,t,i)=>{i.d(t,{E:()=>m});var o=i(7023),s=i(4637),n=i(2083),r=i(6243),a=i(6661);const l=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),d=new Map,c=new Map;let h=null;const u=n.DI.createInterface((e=>e.cachedCallback((e=>(null===h&&(h=new g(null,e)),h))))),p=Object.freeze({tagFor:e=>c.get(e),responsibleFor(e){const t=e.$$designSystem$$;return t||n.DI.findResponsibleContainer(e).get(u)},getOrCreate(e){if(!e)return null===h&&(h=n.DI.getOrCreateDOMContainer().get(u)),h;const t=e.$$designSystem$$;if(t)return t;const i=n.DI.getOrCreateDOMContainer(e);if(i.has(u,!1))return i.get(u);{const t=new g(e,i);return i.register(n.cH.instance(u,t)),t}}});class g{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>l.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,i=[],o=this.disambiguate,n=this.shadowRootMode,a={elementPrefix:this.prefix,tryDefineElement(e,r,a){const h=function(e,t,i){return"string"==typeof e?{name:e,type:t,callback:i}:e}(e,r,a),{name:u,callback:p,baseClass:g}=h;let{type:v}=h,m=u,b=d.get(m),y=!0;for(;b;){const e=o(m,v,b);switch(e){case l.ignoreDuplicate:return;case l.definitionCallbackOnly:y=!1,b=void 0;break;default:m=e,b=d.get(m)}}y&&((c.has(v)||v===s.g)&&(v=class extends v{}),d.set(m,v),c.set(v,m),g&&c.set(g,m)),i.push(new f(t,m,v,n,p,y))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&r.G.registerRoot(this.designTokenRoot)),t.registerWithContext(a,...e);for(const e of i)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class f{constructor(e,t,i,o,s,n){this.container=e,this.name=t,this.type=i,this.shadowRootMode=o,this.callback=s,this.willDefine=n,this.definition=null}definePresentation(e){a.E.define(this.name,e,this.container)}defineElement(e){this.definition=new o.I(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return p.tagFor(e)}}const v=p.getOrCreate(undefined).withPrefix("fluent");const m=(...e)=>{if(null==e?void 0:e.length)for(const t of e)v.register(t())}},1309:(e,t,i)=>{i.d(t,{A:()=>o,r:()=>n});var o,s=i(7573);!function(e){e[e.ArrowDown=0]="ArrowDown",e[e.TeamSeparator=1]="TeamSeparator",e[e.Search=2]="Search",e[e.SkypeArrow=3]="SkypeArrow",e[e.SmallEmail=4]="SmallEmail",e[e.SmallEmailHovered=5]="SmallEmailHovered",e[e.SmallChat=6]="SmallChat",e[e.SmallChatHovered=7]="SmallChatHovered",e[e.Video=8]="Video",e[e.VideoHovered=9]="VideoHovered",e[e.ExpandDown=10]="ExpandDown",e[e.Overview=11]="Overview",e[e.Send=12]="Send",e[e.Contact=13]="Contact",e[e.Copy=14]="Copy",e[e.Phone=15]="Phone",e[e.CellPhone=16]="CellPhone",e[e.Chat=17]="Chat",e[e.Call=18]="Call",e[e.CallHovered=19]="CallHovered",e[e.Confirmation=20]="Confirmation",e[e.Department=21]="Department",e[e.Dot=22]="Dot",e[e.Email=23]="Email",e[e.OfficeLocation=24]="OfficeLocation",e[e.Person=25]="Person",e[e.Messages=26]="Messages",e[e.Organization=27]="Organization",e[e.ExpandRight=28]="ExpandRight",e[e.Profile=29]="Profile",e[e.Birthday=30]="Birthday",e[e.File=31]="File",e[e.Files=32]="Files",e[e.Back=33]="Back",e[e.Close=34]="Close",e[e.Upload=35]="Upload",e[e.FileCloud=36]="FileCloud",e[e.DragFile=37]="DragFile",e[e.Cancel=38]="Cancel",e[e.CheckMark=39]="CheckMark",e[e.Radio=40]="Radio",e[e.Success=41]="Success",e[e.Fail=42]="Fail",e[e.SelectAccount=43]="SelectAccount",e[e.News=44]="News",e[e.DoubleBookmark=45]="DoubleBookmark",e[e.ChevronLeft=46]="ChevronLeft",e[e.ChevronRight=47]="ChevronRight",e[e.Event=48]="Event",e[e.BookOpen=49]="BookOpen",e[e.FileOuter=50]="FileOuter",e[e.BookQuestion=51]="BookQuestion",e[e.Globe=52]="Globe",e[e.Delete=53]="Delete",e[e.Add=54]="Add",e[e.Calendar=55]="Calendar",e[e.Planner=56]="Planner",e[e.Milestone=57]="Milestone",e[e.PersonAdd=58]="PersonAdd",e[e.PresenceAvailable=59]="PresenceAvailable",e[e.PresenceOofAvailable=60]="PresenceOofAvailable",e[e.PresenceBusy=61]="PresenceBusy",e[e.PresenceOofBusy=62]="PresenceOofBusy",e[e.PresenceDnd=63]="PresenceDnd",e[e.PresenceOofDnd=64]="PresenceOofDnd",e[e.PresenceAway=65]="PresenceAway",e[e.PresenceOofAway=66]="PresenceOofAway",e[e.PresenceOffline=67]="PresenceOffline",e[e.PresenceStatusUnknown=68]="PresenceStatusUnknown"}(o||(o={}));const n=(e,t)=>{switch(e){case o.ArrowDown:return s.qy`
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L2.46447 5.46447H6H9.53553L6 9Z" />
        </svg>
      `;case o.TeamSeparator:return s.qy`
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.70711 5L1.49999 9.20711L0.792886 8.50001L4.29289 5L0.792887 1.49999L1.49999 0.792885L5.70711 5Z"
            fill=${t}
          />
        </svg>
      `;case o.Search:return s.qy`
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.30887 8.01596C6.53903 8.63179 5.56252 9.00004 4.5 9.00004C2.01472 9.00004 0 6.98531 0 4.50002C0 2.01473 2.01472 0 4.5 0C6.98528 0 9 2.01473 9 4.50002C9 5.56252 8.63177 6.53901 8.01597 7.30885L11.8536 11.1464C12.0488 11.3417 12.0488 11.6583 11.8536 11.8536C11.6583 12.0488 11.3417 12.0488 11.1464 11.8536L7.30887 8.01596ZM8 4.50002C8 2.56701 6.433 1 4.5 1C2.567 1 1 2.56701 1 4.50002C1 6.43302 2.567 8.00003 4.5 8.00003C6.433 8.00003 8 6.43302 8 4.50002Z" fill="currentColor"/>
        </svg>`;case o.SkypeArrow:return s.qy`
        <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.95184 0.480534C4.23385 0.10452 4.70926 -0.0724722 5.1685 0.0275755C5.62775 0.127623 5.98645 0.486329 6.0865 0.945575C6.18655 1.40482 6.00956 1.88023 5.63354 2.16224L4.07196 3.72623H10.7988C11.4622 3.72623 12 4.26403 12 4.92744C12 5.59086 11.4622 6.12866 10.7988 6.12866H4.07196L5.63114 7.68784C6.0955 8.15225 6.0955 8.90515 5.63114 9.36955C5.51655 9.48381 5.38119 9.57514 5.23234 9.63862C5.09341 9.69857 4.94399 9.73042 4.79269 9.73232C4.63498 9.73233 4.4789 9.70046 4.33382 9.63862C4.18765 9.57669 4.05593 9.48507 3.94703 9.36955L0.343377 5.7659C-0.114459 5.29881 -0.114459 4.55128 0.343377 4.08419L3.95184 0.480534Z"
            fill="#B4009E"
          />
        </svg>
      `;case o.SmallEmail:return s.qy`
        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="filled" d="M16 3.373V10.5C16 11.8807 14.8807 13 13.5 13H2.5C1.11929 13 -7.62939e-05 11.8807 -7.62939e-05 10.5V3.373L7.74649 7.93097C7.90297 8.02301 8.09704 8.02301 8.25351 7.93097L16 3.373ZM13.5 0C14.7871 0 15.847 0.972604 15.9848 2.22293L8 6.91991L0.0151832 2.22293C0.15304 0.972604 1.21294 0 2.5 0H13.5Z" fill="currentColor"/>
          <path class="regular" d="M13.608 0.833496C14.9887 0.833496 16.108 1.95278 16.108 3.3335V11.3335C16.108 12.7142 14.9887 13.8335 13.608 13.8335H2.60803C1.22732 13.8335 0.108032 12.7142 0.108032 11.3335V3.3335C0.108032 1.95278 1.22732 0.833496 2.60803 0.833496H13.608ZM15.108 4.7945L8.36154 8.76446C8.23115 8.84117 8.07464 8.85395 7.93554 8.80281L7.85452 8.76446L1.10803 4.7965V11.3335C1.10803 12.1619 1.77961 12.8335 2.60803 12.8335H13.608C14.4365 12.8335 15.108 12.1619 15.108 11.3335V4.7945ZM13.608 1.8335H2.60803C1.77961 1.8335 1.10803 2.50507 1.10803 3.3335V3.6355L8.10803 7.75341L15.108 3.6345V3.3335C15.108 2.50507 14.4365 1.8335 13.608 1.8335Z" fill="currentColor"/>
        </svg>
      `;case o.SmallChat:return s.qy`
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="filled" d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C6.72679 16 5.49591 15.7018 4.38669 15.1393L4.266 15.075L0.621091 15.9851C0.311269 16.0625 0.0262241 15.8369 0.00130987 15.5438L0.00114131 15.4624L0.0149329 15.3787L0.925 11.735L0.86169 11.6153C0.406602 10.7186 0.124331 9.74223 0.0327466 8.72826L0.00737596 8.34634L0 8C0 3.58172 3.58172 0 8 0ZM8.5 9H5.5L5.41012 9.00806C5.17688 9.05039 5 9.25454 5 9.5C5 9.74546 5.17688 9.94961 5.41012 9.99194L5.5 10H8.5L8.58988 9.99194C8.82312 9.94961 9 9.74546 9 9.5C9 9.25454 8.82312 9.05039 8.58988 9.00806L8.5 9ZM10.5 6H5.5L5.41012 6.00806C5.17688 6.05039 5 6.25454 5 6.5C5 6.74546 5.17688 6.94961 5.41012 6.99194L5.5 7H10.5L10.5899 6.99194C10.8231 6.94961 11 6.74546 11 6.5C11 6.25454 10.8231 6.05039 10.5899 6.00806L10.5 6Z" fill="currentColor"/>
          <path class="regular" d="M8.38599 0.833496C12.8043 0.833496 16.386 4.41522 16.386 8.8335C16.386 13.2518 12.8043 16.8335 8.38599 16.8335C7.11277 16.8335 5.8819 16.5353 4.77267 15.9728L4.65199 15.9085L1.00708 16.8186C0.697255 16.8959 0.41221 16.6704 0.387296 16.3773L0.387128 16.2959L0.400919 16.2122L1.31099 12.5685L1.24768 12.4488C0.792589 11.5521 0.510317 10.5757 0.418733 9.56176L0.393362 9.17984L0.385986 8.8335C0.385986 4.41522 3.96771 0.833496 8.38599 0.833496ZM8.38599 1.8335C4.51999 1.8335 1.38599 4.9675 1.38599 8.8335C1.38599 10.0505 1.69653 11.2213 2.27951 12.2584C2.32645 12.3419 2.34809 12.4365 2.34291 12.5308L2.32873 12.6247L1.57299 15.6455L4.59703 14.8918C4.65892 14.8764 4.72261 14.8731 4.78472 14.8814L4.87629 14.9026L4.963 14.941C5.9996 15.5233 7.16969 15.8335 8.38599 15.8335C12.252 15.8335 15.386 12.6995 15.386 8.8335C15.386 4.9675 12.252 1.8335 8.38599 1.8335ZM8.88599 9.8335C9.16213 9.8335 9.38599 10.0574 9.38599 10.3335C9.38599 10.579 9.20911 10.7831 8.97586 10.8254L8.88599 10.8335H5.88599C5.60984 10.8335 5.38599 10.6096 5.38599 10.3335C5.38599 10.088 5.56286 9.88389 5.79611 9.84155L5.88599 9.8335H8.88599ZM10.886 6.8335C11.1621 6.8335 11.386 7.05735 11.386 7.3335C11.386 7.57896 11.2091 7.7831 10.9759 7.82544L10.886 7.8335L5.88599 7.8335C5.60984 7.8335 5.38599 7.60964 5.38599 7.3335C5.38599 7.08804 5.56286 6.88389 5.79611 6.84155L5.88599 6.8335L10.886 6.8335Z" fill="currentColor"/>
        </svg>
      `;case o.Video:return s.qy`
        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="filled" d="M11 2.5C11 1.11929 9.88071 0 8.5 0H2.5C1.11929 0 0 1.11929 0 2.5V9.5C0 10.8807 1.11929 12 2.5 12H8.5C9.88071 12 11 10.8807 11 9.5V2.5ZM12 3.93082V8.08149L14.7642 10.4319C15.2512 10.8461 16 10.4999 16 9.86055V2.19315C16 1.55685 15.2575 1.20962 14.7692 1.61756L12 3.93082Z" fill="currentColor"/>
          <path class="regular" d="M2.72095 0.833496C1.34024 0.833496 0.220947 1.95278 0.220947 3.3335V10.3335C0.220947 11.7142 1.34024 12.8335 2.72095 12.8335H9.72095C11.1017 12.8335 12.2209 11.7142 12.2209 10.3335V9.33348L14.6209 11.1335C15.2802 11.6279 16.2209 11.1575 16.2209 10.3335V3.33348C16.2209 2.50944 15.2802 2.03905 14.6209 2.53348L12.2209 4.33348V3.3335C12.2209 1.95278 11.1017 0.833496 9.72095 0.833496H2.72095ZM12.2209 5.58348L15.2209 3.33348V10.3335L12.2209 8.08348V5.58348ZM11.2209 3.3335V10.3335C11.2209 11.1619 10.5494 11.8335 9.72095 11.8335H2.72095C1.89252 11.8335 1.22095 11.1619 1.22095 10.3335V3.3335C1.22095 2.50507 1.89252 1.8335 2.72095 1.8335H9.72095C10.5494 1.8335 11.2209 2.50507 11.2209 3.3335Z" fill="currentColor"/>
        </svg>
      `;case o.ExpandDown:return s.qy`
        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 1L7.5 7L1 1" stroke="currentColor" />
        </svg>
      `;case o.Overview:return s.qy`
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.5 10.5C2.67157 10.5 2 9.82843 2 9V4C2 3.17157 2.67157 2.5 3.5 2.5H12.5C13.3284 2.5 14 3.17157 14 4V9C14 9.82843 13.3284 10.5 12.5 10.5H3.5ZM3.5 3.5C3.22386 3.5 3 3.72386 3 4V5.5H13V4C13 3.72386 12.7761 3.5 12.5 3.5H3.5ZM5 6.5H3V9C3 9.27614 3.22386 9.5 3.5 9.5H5V6.5ZM6 9.5H12.5C12.7761 9.5 13 9.27614 13 9V6.5H6V9.5ZM0 3C0 1.61929 1.11929 0.5 2.5 0.5H13.5C14.8807 0.5 16 1.61929 16 3V10C16 11.3807 14.8807 12.5 13.5 12.5H2.5C1.11929 12.5 0 11.3807 0 10V3ZM2.5 1.5C1.67157 1.5 1 2.17157 1 3V10C1 10.8284 1.67157 11.5 2.5 11.5H13.5C14.3284 11.5 15 10.8284 15 10V3C15 2.17157 14.3284 1.5 13.5 1.5H2.5Z" fill="#717171"/>
        </svg>
      `;case o.Send:return s.qy`
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.27144 8.99999L1.72572 2.45387C1.54854 1.99826 1.9928 1.56256 2.43227 1.71743L2.50153 1.74688L16.0015 8.49688C16.3902 8.69122 16.4145 9.22336 16.0744 9.45992L16.0015 9.50311L2.50153 16.2531C2.0643 16.4717 1.58932 16.0697 1.70282 15.6178L1.72572 15.5461L4.27144 8.99999L1.72572 2.45387L4.27144 8.99999ZM3.3028 3.4053L5.25954 8.43705L10.2302 8.43749C10.515 8.43749 10.7503 8.64911 10.7876 8.92367L10.7927 8.99999C10.7927 9.28476 10.5811 9.52011 10.3065 9.55736L10.2302 9.56249L5.25954 9.56205L3.3028 14.5947L14.4922 8.99999L3.3028 3.4053Z"
          />
        </svg>
      `;case o.Contact:return s.qy`
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5ZM2 7.69879C2 7.17479 2.42479 6.75 2.94879 6.75H6.05121C6.57521 6.75 7 7.17479 7 7.69879C7 8.54603 6.42338 9.28454 5.60144 9.49003L5.54243 9.50478C4.85801 9.67589 4.14199 9.67589 3.45757 9.50478L3.39856 9.49003C2.57661 9.28454 2 8.54603 2 7.69879ZM9.5 4C9.22386 4 9 4.22386 9 4.5C9 4.77614 9.22386 5 9.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H9.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8H12.5C12.7761 8 13 7.77614 13 7.5C13 7.22386 12.7761 7 12.5 7H9.5ZM0 1.75C0 0.783502 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V10.25C16 11.2165 15.2165 12 14.25 12H1.75C0.783501 12 0 11.2165 0 10.25V1.75ZM1.75 1C1.33579 1 1 1.33579 1 1.75V10.25C1 10.6642 1.33579 11 1.75 11H14.25C14.6642 11 15 10.6642 15 10.25V1.75C15 1.33579 14.6642 1 14.25 1H1.75Z" fill="#717171"/>
        </svg>
      `;case o.Call:return s.qy`
        <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="filled" d="M3.98706 1.06589C4.89545 0.792081 5.86254 1.19479 6.31418 2.01224L6.38841 2.16075L7.04987 3.63213C7.46246 4.54992 7.28209 5.61908 6.60754 6.3496L6.47529 6.48248L5.43194 7.45541C5.24417 7.63298 5.38512 8.32181 6.06527 9.49986C6.67716 10.5597 7.17487 11.0552 7.41986 11.0823L7.4628 11.082L7.5158 11.0716L9.56651 10.4446C10.1332 10.2713 10.7438 10.4487 11.1298 10.8865L11.2215 11.0014L12.5781 12.8815C13.1299 13.6462 13.0689 14.6842 12.4533 15.378L12.3314 15.5039L11.7886 16.018C10.7948 16.9592 9.34348 17.2346 8.07389 16.7231C6.13867 15.9433 4.38077 14.1607 2.78368 11.3945C1.18323 8.62242 0.519004 6.20438 0.815977 4.13565C0.99977 2.85539 1.87301 1.78674 3.07748 1.3462L3.27036 1.28192L3.98706 1.06589Z" fill="currentColor"/>
          <path class="regular" d="M3.9292 0.399388L3.2125 0.615419C1.90898 1.00834 0.951582 2.1215 0.758116 3.46915C0.461142 5.53787 1.12537 7.95591 2.72582 10.728C4.32291 13.4942 6.0808 15.2768 8.01603 16.0565C9.28562 16.5681 10.7369 16.2927 11.7308 15.3515L12.2736 14.8374C13.0011 14.1485 13.1065 13.0275 12.5202 12.215L11.1636 10.3349C10.788 9.81423 10.1226 9.59039 9.50865 9.7781L7.45794 10.4051L7.40494 10.4154C7.17877 10.4485 6.65754 9.95942 6.00741 8.83335C5.32726 7.65531 5.1863 6.96648 5.37408 6.7889L6.41743 5.81598C7.19937 5.08681 7.43039 3.94078 6.99201 2.96562L6.33055 1.49424C5.91866 0.578005 4.89102 0.109471 3.9292 0.399388ZM5.41847 1.90427L6.07993 3.37564C6.34277 3.96031 6.20426 4.64744 5.73543 5.08463L4.68953 6.05994C4.02044 6.69268 4.24206 7.77567 5.14138 9.33335C5.98759 10.799 6.75958 11.5233 7.58908 11.3977L7.71341 11.3711L9.80102 10.7344C10.0057 10.6718 10.2275 10.7464 10.3527 10.92L11.7093 12.8001C12.0024 13.2064 11.9497 13.7669 11.586 14.1113L11.0432 14.6254C10.3333 15.2977 9.29663 15.4944 8.38977 15.129C6.6917 14.4448 5.08689 12.8175 3.59185 10.228C2.09375 7.63319 1.48745 5.42604 1.74797 3.61125C1.88616 2.64864 2.57001 1.85352 3.5011 1.57287L4.2178 1.35684C4.69871 1.21188 5.21253 1.44615 5.41847 1.90427Z" fill="currentColor"/>
        </svg>
      `;case o.Confirmation:return s.qy`
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.03212 13.9072L3.56056 10.0017C3.28538 9.69214 2.81132 9.66425 2.50174 9.93944C2.19215 10.2146 2.16426 10.6887 2.43945 10.9983L6.43945 15.4983C6.72614 15.8208 7.2252 15.8355 7.53034 15.5303L18.0303 5.03033C18.3232 4.73744 18.3232 4.26256 18.0303 3.96967C17.7374 3.67678 17.2626 3.67678 16.9697 3.96967L7.03212 13.9072Z" fill="#009E00"/>
      </svg>
      `;case o.Copy:return s.qy`
        <svg width="13" height="14" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.625 5.50293V14H3.875V11.375H0.375V0H6.24707L8.87207 2.625H9.74707L12.625 5.50293ZM10 5.25H11.1279L10 4.12207V5.25ZM3.875 2.625H7.62793L5.87793 0.875H1.25V10.5H3.875V2.625ZM11.75 6.125H9.125V3.5H4.75V13.125H11.75V6.125Z"
          />
        </svg>
      `;case o.Phone:return s.qy`
        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" fill="none">
            <path d="M1607 1213q44 0 84 16t72 48l220 220q31 31 47 71t17 85q0 44-16 84t-48 72l-14 14q-54 54-99 96t-94 70-109 44-143 15q-125 0-257-39t-262-108-256-164-237-207-206-238-162-256T38 775 0 523q0-83 14-142t43-108 70-93 96-99l16-16q31-31 71-48t85-17q44 0 84 17t72 48l220 220q31 31 47 71t17 85q0 44-15 78t-37 63-48 51-49 45-37 44-15 49q0 38 27 65l551 551q27 27 65 27 26 0 48-15t45-37 45-48 51-49 62-37 79-15zm-83 707q72 0 120-13t88-39 76-64 85-86q27-27 27-65 0-18-14-42t-38-52-51-55-56-54-51-47-37-35q-27-27-66-27-26 0-48 15t-44 37-45 48-52 49-62 37-79 15q-44 0-84-16t-72-48L570 927q-31-31-47-71t-17-85q0-44 15-78t37-63 48-51 49-46 37-44 15-48q0-39-27-66-13-13-34-36t-47-51-54-56-56-52-51-37-43-15q-38 0-65 27l-85 85q-37 37-64 76t-40 87-14 120q0 112 36 231t101 238 153 234 192 219 219 190 234 150 236 99 226 36z" fill="${t}"></path>
        </svg>
      `;case o.CellPhone:return s.qy`
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12C3.72386 12 3.5 12.2239 3.5 12.5C3.5 12.7761 3.72386 13 4 13H6C6.27614 13 6.5 12.7761 6.5 12.5C6.5 12.2239 6.27614 12 6 12H4ZM2 0C0.89543 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H8C9.10457 16 10 15.1046 10 14V2C10 0.89543 9.10457 0 8 0H2ZM1 2C1 1.44772 1.44772 1 2 1H8C8.55228 1 9 1.44772 9 2V14C9 14.5523 8.55228 15 8 15H2C1.44772 15 1 14.5523 1 14V2Z" fill="#717171"/>
        </svg>
      `;case o.Chat:return s.qy`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C6.72679 16 5.49591 15.7018 4.38669 15.1393L4.266 15.075L0.621091 15.9851C0.311269 16.0625 0.0262241 15.8369 0.00130987 15.5438L0.00114131 15.4624L0.0149329 15.3787L0.925 11.735L0.86169 11.6153C0.406602 10.7186 0.124331 9.74223 0.0327466 8.72826L0.00737596 8.34634L0 8C0 3.58172 3.58172 0 8 0ZM8 1C4.13401 1 1 4.13401 1 8C1 9.21704 1.31054 10.3878 1.89352 11.4249C1.94046 11.5084 1.9621 11.603 1.95692 11.6973L1.94274 11.7912L1.187 14.812L4.21104 14.0583C4.27294 14.0429 4.33662 14.0396 4.39873 14.0479L4.4903 14.0691L4.57701 14.1075C5.61362 14.6898 6.7837 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM8.5 9C8.77614 9 9 9.22386 9 9.5C9 9.74546 8.82312 9.94961 8.58988 9.99194L8.5 10H5.5C5.22386 10 5 9.77614 5 9.5C5 9.25454 5.17688 9.05039 5.41012 9.00806L5.5 9H8.5ZM10.5 6C10.7761 6 11 6.22386 11 6.5C11 6.74546 10.8231 6.94961 10.5899 6.99194L10.5 7L5.5 7C5.22386 7 5 6.77614 5 6.5C5 6.25454 5.17688 6.05039 5.41012 6.00806L5.5 6L10.5 6Z" fill="#717171"/>
        </svg>
      `;case o.Department:return s.qy`
        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 1.5V3H2C0.895431 3 0 3.89543 0 5V12C0 13.1046 0.895432 14 2 14H14.0026C15.1071 14 16.0026 13.1046 16.0026 12V5C16.0026 3.89543 15.1071 3 14.0026 3H12V1.5C12 0.671573 11.3284 0 10.5 0H5.5C4.67157 0 4 0.671573 4 1.5ZM5.5 1H10.5C10.7761 1 11 1.22386 11 1.5V3H5V1.5C5 1.22386 5.22386 1 5.5 1ZM2 4H14.0026C14.5549 4 15.0026 4.44772 15.0026 5V7H12L12 6.50073C12 6.22459 11.7761 6.00073 11.5 6.00073C11.2239 6.00073 11 6.22459 11 6.50074L11 7H5V6.50073C5 6.22459 4.77614 6.00073 4.5 6.00073C4.22386 6.00073 4 6.22459 4 6.50073V7H1V5C1 4.44772 1.44772 4 2 4ZM11 8L11 8.5C11 8.77615 11.2239 9 11.5 9C11.7762 9 12 8.77614 12 8.5L12 8H15.0026V12C15.0026 12.5523 14.5549 13 14.0026 13H2C1.44772 13 1 12.5523 1 12V8H4V8.5C4 8.77614 4.22386 9 4.5 9C4.77614 9 5 8.77614 5 8.5V8H11Z" fill="#717171"/>
        </svg>
      `;case o.Dot:return s.qy`
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.25 10C6.25 10.6904 5.69036 11.25 5 11.25C4.30964 11.25 3.75 10.6904 3.75 10C3.75 9.30964 4.30964 8.75 5 8.75C5.69036 8.75 6.25 9.30964 6.25 10ZM11.25 10C11.25 10.6904 10.6904 11.25 10 11.25C9.30964 11.25 8.75 10.6904 8.75 10C8.75 9.30964 9.30964 8.75 10 8.75C10.6904 8.75 11.25 9.30964 11.25 10ZM15 11.25C15.6904 11.25 16.25 10.6904 16.25 10C16.25 9.30964 15.6904 8.75 15 8.75C14.3096 8.75 13.75 9.30964 13.75 10C13.75 10.6904 14.3096 11.25 15 11.25Z" fill="currentColor"/>
        </svg>
        `;case o.Email:return s.qy`
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 0C14.8807 0 16 1.11929 16 2.5V10.5C16 11.8807 14.8807 13 13.5 13H2.5C1.11929 13 0 11.8807 0 10.5V2.5C0 1.11929 1.11929 0 2.5 0H13.5ZM15 3.961L8.25351 7.93097C8.12311 8.00767 7.96661 8.02045 7.82751 7.96932L7.74649 7.93097L1 3.963V10.5C1 11.3284 1.67157 12 2.5 12H13.5C14.3284 12 15 11.3284 15 10.5V3.961ZM13.5 1H2.5C1.67157 1 1 1.67157 1 2.5V2.802L8 6.91991L15 2.801V2.5C15 1.67157 14.3284 1 13.5 1Z" fill="#717171"/>
        </svg>
      `;case o.OfficeLocation:return s.qy`
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>Location icon</title>
          <path d="M10 7C10 8.65685 8.65685 10 7 10C5.34315 10 4 8.65685 4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7ZM9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7ZM11.9497 11.955C14.6834 9.2201 14.6834 4.78601 11.9497 2.05115C9.21608 -0.683716 4.78392 -0.683716 2.05025 2.05115C-0.683418 4.78601 -0.683418 9.2201 2.05025 11.955L3.57128 13.4538L5.61408 15.4389L5.74691 15.5567C6.52168 16.1847 7.65623 16.1455 8.38611 15.4391L10.8223 13.0691L11.9497 11.955ZM2.75499 2.75619C5.09944 0.410715 8.90055 0.410715 11.245 2.75619C13.5294 5.04153 13.5879 8.71039 11.4207 11.0667L11.245 11.2499L9.92371 12.5539L7.69315 14.7225L7.60016 14.8021C7.24594 15.0699 6.7543 15.0698 6.40012 14.802L6.30713 14.7224L3.3263 11.817L2.75499 11.2499L2.57927 11.0667C0.412077 8.71039 0.47065 5.04153 2.75499 2.75619Z" fill="#717171"/>
        </svg>
      `;case o.Birthday:return s.qy`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.81357 0.667333C6.07581 0.320242 6.48151 0 7 0C7.51849 0 7.92419 0.320242 8.18643 0.667333C8.45471 1.0224 8.63508 1.47991 8.69561 1.93392C8.75552 2.3832 8.70532 2.89341 8.42852 3.3086C8.134 3.75039 7.63965 4 7 4C6.36035 4 5.866 3.75039 5.57148 3.3086C5.29468 2.89341 5.24448 2.3832 5.30439 1.93392C5.36492 1.47991 5.54529 1.0224 5.81357 0.667333ZM6.40353 2.7539C6.484 2.87461 6.63965 3 7 3C7.36035 3 7.516 2.87461 7.59647 2.7539C7.69468 2.60659 7.74448 2.3668 7.70439 2.06608C7.66492 1.77009 7.54529 1.4776 7.38857 1.27017C7.22581 1.05476 7.08151 1 7 1C6.91849 1 6.77419 1.05476 6.61143 1.27017C6.45471 1.4776 6.33508 1.77009 6.29561 2.06608C6.25552 2.3668 6.30532 2.60659 6.40353 2.7539ZM1 7C1 5.89543 1.89543 5 3 5H11C12.1046 5 13 5.89543 13 7V12H13.5C13.7761 12 14 12.2239 14 12.5C14 12.7761 13.7761 13 13.5 13H0.5C0.223858 13 0 12.7761 0 12.5C0 12.2239 0.223858 12 0.5 12H1V7ZM2 12H12V9.01931C11.9109 9.10285 11.8174 9.18842 11.7208 9.27412C11.4006 9.55804 11.0346 9.85319 10.6715 10.0802C10.3274 10.2953 9.90815 10.5 9.5 10.5C8.77182 10.5 8.30806 9.98986 8.00471 9.65617C7.9834 9.63273 7.96289 9.61016 7.94312 9.58869C7.5876 9.20261 7.35769 9 7 9C6.64231 9 6.4124 9.20261 6.05688 9.58869C6.03711 9.61016 6.0166 9.63273 5.99529 9.65617C5.69194 9.98986 5.22818 10.5 4.5 10.5C4.10587 10.5 3.69263 10.2897 3.35907 10.0789C3.00198 9.85313 2.63516 9.55951 2.31117 9.27666C2.20329 9.18247 2.09896 9.08844 2 8.9971V12ZM2 7.59993C2.05039 7.65198 2.11363 7.71652 2.1873 7.7902C2.38843 7.99132 2.6649 8.25801 2.96883 8.52334C3.27484 8.79049 3.59802 9.04687 3.89343 9.23362C4.21237 9.43525 4.41413 9.5 4.5 9.5C4.75817 9.5 4.93171 9.33433 5.32125 8.91131L5.32447 8.90781C5.65956 8.5439 6.16039 8 7 8C7.83961 8 8.34044 8.5439 8.67553 8.90781L8.67875 8.91131C9.06828 9.33433 9.24183 9.5 9.5 9.5C9.6106 9.5 9.82569 9.42967 10.1414 9.23229C10.4381 9.04681 10.7573 8.79196 11.0573 8.52588C11.3554 8.26163 11.6238 7.99594 11.8184 7.7955C11.89 7.72165 11.9513 7.65703 12 7.60506V7C12 6.44772 11.5523 6 11 6H3C2.44772 6 2 6.44772 2 7V7.59993Z" fill="#717171"/>
        </svg>
      `;case o.Person:return s.qy`
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0C4.79086 0 3 1.79086 3 4C3 6.20914 4.79086 8 7 8C9.20914 8 11 6.20914 11 4C11 1.79086 9.20914 0 7 0ZM4 4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4ZM2.00873 9C0.903151 9 0 9.88687 0 11C0 12.6912 0.83281 13.9663 2.13499 14.7966C3.41697 15.614 5.14526 16 7 16C8.85474 16 10.583 15.614 11.865 14.7966C13.1672 13.9663 14 12.6912 14 11C14 9.89557 13.1045 9.00001 12 9.00001L2.00873 9ZM1 11C1 10.4467 1.44786 10 2.00873 10L12 10C12.5522 10 13 10.4478 13 11C13 12.3088 12.3777 13.2837 11.3274 13.9534C10.2568 14.636 8.73511 15 7 15C5.26489 15 3.74318 14.636 2.67262 13.9534C1.62226 13.2837 1 12.3088 1 11Z" fill="#717171"/>
        </svg>
      `;case o.Messages:return s.qy`
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 0C14.8807 0 16 1.11929 16 2.5V10.5C16 11.8807 14.8807 13 13.5 13H2.5C1.11929 13 0 11.8807 0 10.5V2.5C0 1.11929 1.11929 0 2.5 0H13.5ZM15 3.961L8.25351 7.93097C8.12311 8.00767 7.96661 8.02045 7.82751 7.96932L7.74649 7.93097L1 3.963V10.5C1 11.3284 1.67157 12 2.5 12H13.5C14.3284 12 15 11.3284 15 10.5V3.961ZM13.5 1H2.5C1.67157 1 1 1.67157 1 2.5V2.802L8 6.91991L15 2.801V2.5C15 1.67157 14.3284 1 13.5 1Z" fill="#717171"/>
        </svg>
      `;case o.Organization:return s.qy`
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.99992 0C6.34271 0 4.99927 1.34344 4.99927 3.00066C4.99927 4.48754 6.08073 5.72183 7.49999 5.95985V7.5H4.5C3.67157 7.5 3 8.17157 3 9V10.0416C1.5811 10.2799 0.5 11.514 0.5 13.0007C0.5 14.6579 1.84344 16.0013 3.50066 16.0013C5.15787 16.0013 6.50131 14.6579 6.50131 13.0007C6.50131 11.5136 5.41954 10.2791 4 10.0414V9C4 8.72386 4.22386 8.5 4.5 8.5H11.5C11.7761 8.5 12 8.72386 12 9V10.0416C10.5811 10.2799 9.5 11.514 9.5 13.0007C9.5 14.6579 10.8434 16.0013 12.5007 16.0013C14.1579 16.0013 15.5013 14.6579 15.5013 13.0007C15.5013 11.5136 14.4195 10.2791 13 10.0414V9C13 8.17157 12.3284 7.5 11.5 7.5H8.49999V5.95983C9.91918 5.72176 11.0006 4.48749 11.0006 3.00066C11.0006 1.34344 9.65714 0 7.99992 0ZM5.99927 3.00066C5.99927 1.89572 6.89499 1 7.99992 1C9.10485 1 10.0006 1.89572 10.0006 3.00066C10.0006 4.10559 9.10485 5.00131 7.99992 5.00131C6.89499 5.00131 5.99927 4.10559 5.99927 3.00066ZM1.5 13.0007C1.5 11.8957 2.39572 11 3.50066 11C4.60559 11 5.50131 11.8957 5.50131 13.0007C5.50131 14.1056 4.60559 15.0013 3.50066 15.0013C2.39572 15.0013 1.5 14.1056 1.5 13.0007ZM12.5007 11C13.6056 11 14.5013 11.8957 14.5013 13.0007C14.5013 14.1056 13.6056 15.0013 12.5007 15.0013C11.3957 15.0013 10.5 14.1056 10.5 13.0007C10.5 11.8957 11.3957 11 12.5007 11Z" fill="#717171"/>
        </svg>
      `;case o.ExpandRight:return s.qy`
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L6.5 6.5L1 1" stroke="#B8B8B8" stroke-width="2" />
        </svg>
      `;case o.Profile:return s.qy`
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0C4.79086 0 3 1.79086 3 4C3 6.20914 4.79086 8 7 8C9.20914 8 11 6.20914 11 4C11 1.79086 9.20914 0 7 0ZM4 4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4ZM2.00873 9C0.903151 9 0 9.88687 0 11C0 12.6912 0.83281 13.9663 2.13499 14.7966C3.41697 15.614 5.14526 16 7 16C8.85474 16 10.583 15.614 11.865 14.7966C13.1672 13.9663 14 12.6912 14 11C14 9.89557 13.1045 9.00001 12 9.00001L2.00873 9ZM1 11C1 10.4467 1.44786 10 2.00873 10L12 10C12.5522 10 13 10.4478 13 11C13 12.3088 12.3777 13.2837 11.3274 13.9534C10.2568 14.636 8.73511 15 7 15C5.26489 15 3.74318 14.636 2.67262 13.9534C1.62226 13.2837 1 12.3088 1 11Z" fill="#717171"/>
        </svg>
      `;case o.File:return s.qy`
        <svg width="28" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.64"
            d="M19.613 6.993L13.018 0.421C12.7473 0.15221 12.3815 0.000947397 12 0H1.4C0.628 0 0 0.615 0 1.372V24.642C0 25.391 0.622 26 1.386 26H18.6C19.372 26 20 25.385 20 24.628V7.923C20 7.577 19.86 7.237 19.613 6.993Z"
            fill="#605E5C"
          />
          <path
            d="M19 24.628C19 24.83 18.816 25 18.6 25H1.386C1.173 25 1 24.84 1 24.642V1.372C1 1.17 1.184 1 1.4 1H12V6.6C12 7.372 12.628 8 13.4 8H19V24.628Z"
            fill="white"
          />
          <path d="M18.204 6.99994L13 1.81494V6.59994C13 6.81994 13.18 6.99994 13.4 6.99994H18.204Z" fill="white" />
        </svg>
      `;case o.Files:return s.qy`
        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9956 4.07309V4C14.9956 2.61929 13.8763 1.5 12.4956 1.5H7.66418L6.06391 0.299946C5.80428 0.105247 5.48851 0 5.16399 0H2.5C1.11916 0 -0.000181445 1.11949 2.20615e-08 2.50033L0.0011832 11.4978C0.00135142 12.7772 0.962583 13.8321 2.2023 13.9798C2.2867 13.9945 2.37375 14.0021 2.46289 14.0021H13.1798C13.8981 14.0021 14.5156 13.4929 14.6524 12.7877L16.0097 5.78769C16.1587 5.01967 15.696 4.29703 14.9956 4.07309ZM2.5 1H5.16399C5.27216 1 5.37742 1.03508 5.46396 1.09998L7.19756 2.40002C7.2841 2.46492 7.38936 2.5 7.49753 2.5H12.4956C13.324 2.5 13.9956 3.17157 13.9956 4V4.00214H3.824C3.10596 4.00214 2.48863 4.511 2.35158 5.21583L1.05351 11.8916C1.01941 11.7661 1.0012 11.634 1.00118 11.4976L1 2.5002C0.999891 1.67169 1.6715 1 2.5 1ZM3.33319 5.4067C3.37888 5.17176 3.58465 5.00214 3.824 5.00214H14.5372C14.8515 5.00214 15.0879 5.28874 15.028 5.59732L13.6706 12.5973C13.6251 12.8324 13.4192 13.0021 13.1798 13.0021H2.46289C2.14845 13.0021 1.91206 12.7154 1.97208 12.4067L3.33319 5.4067Z" fill="#717171"/>
        </svg>
      `;case o.Back:return s.qy`
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 8.5H1.95312L8.10156 14.6484L7.39844 15.3516L0.046875 8L7.39844 0.648438L8.10156 1.35156L1.95312 7.5H16V8.5Z"
          />
        </svg>
      `;case o.Close:return s.qy`
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.73838 5.032L9.70337 1.067L8.99638 0.360001L5.03137 4.325L1.06637 0.360001L0.359375 1.067L4.32438 5.032L0.359375 8.997L1.06637 9.704L5.03137 5.739L8.99638 9.704L9.70337 8.997L5.73838 5.032Z" fill="currentColor"/>
        </svg>
     `;case o.Upload:return s.qy`
        <svg class="upload-icon" width="21" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 2C4.08579 2 3.75 2.33579 3.75 2.75C3.75 3.16421 4.08579 3.5 4.5 3.5H15C15.4142 3.5 15.75 3.16421 15.75 2.75C15.75 2.33579 15.4142 2 15 2H4.5ZM10.4963 17.3493C10.4466 17.7154 10.1328 17.9976 9.75311 17.9976C9.3389 17.9976 9.00311 17.6618 9.00311 17.2476L9.00249 7.05856L6.02995 10.026L5.94578 10.0986C5.65202 10.3162 5.23537 10.2917 4.96929 10.0253C4.67661 9.73215 4.67695 9.25728 4.97005 8.96459L9.25962 4.67989C9.33377 4.61512 9.42089 4.56485 9.5169 4.53385L9.59777 4.51072C9.64749 4.50019 9.69837 4.4947 9.74849 4.4947L9.80855 4.49661L9.87781 4.50451L9.99828 4.53462L10.0895 4.57254L10.1259 4.59371L10.2169 4.6523L10.2875 4.71481L14.5303 8.96546L14.6029 9.04964C14.8205 9.34345 14.7959 9.7601 14.5294 10.0261L14.4452 10.0987C14.1514 10.3162 13.7347 10.2917 13.4687 10.0251L10.5025 7.05456L10.5031 17.2476L10.4963 17.3493Z" fill="#ffffff"/>
        </svg>
      `;case o.FileCloud:return s.qy`
        <svg width="16" height="16"  xmlns="http://www.w3.org/2000/svg">
          <path
            d="m8,0c2.8166,0 4.4145,1.9233 4.6469,4.246l0.071,0c1.8127,0 3.2821,1.5119 3.2821,3.377c0,0.0953 -0.0038,0.1897 -0.0114,0.283c-0.322,-0.4017 -0.6967,-0.7591 -1.1138,-1.062c-0.3104,-0.9329 -1.1627,-1.598 -2.1568,-1.598l-0.0711,0c-0.5137,0 -0.9439,-0.3893 -0.9951,-0.9005c-0.2021,-2.0206 -1.5433,-3.3455 -3.6518,-3.3455c-2.1139,0 -3.4489,1.3159 -3.6518,3.3455c-0.0511,0.5112 -0.4813,0.9005 -0.9951,0.9005l-0.071,0c-1.2539,0 -2.2821,1.0579 -2.2821,2.377c0,1.3191 1.0282,2.377 2.2821,2.377l2.6655,0c-0.087,0.323 -0.1466,0.6572 -0.1762,1l-2.4893,0c-1.8127,0 -3.2821,-1.5119 -3.2821,-3.377c0,-1.8029 1.3731,-3.2758 3.102,-3.372l0.2511,-0.005c0.2338,-2.338 1.8303,-4.246 4.6469,-4.246zm3.5,16c2.4853,0 4.5,-2.0147 4.5,-4.5c0,-2.4853 -2.0147,-4.5 -4.5,-4.5c-2.4853,0 -4.5,2.0147 -4.5,4.5c0,2.4853 2.0147,4.5 4.5,4.5zm0,-7c0.2761,0 0.5,0.2239 0.5,0.5l0,1.5l1.5,0c0.2761,0 0.5,0.2239 0.5,0.5c0,0.2761 -0.2239,0.5 -0.5,0.5l-1.5,0l0,1.5c0,0.2761 -0.2239,0.5 -0.5,0.5c-0.2761,0 -0.5,-0.2239 -0.5,-0.5l0,-1.5l-1.5,0c-0.2761,0 -0.5,-0.2239 -0.5,-0.5c0,-0.2761 0.2239,-0.5 0.5,-0.5l1.5,0l0,-1.5c0,-0.2761 0.2239,-0.5 0.5,-0.5z" fill="#0078D4"
          />
        </svg>
      `;case o.DragFile:return s.qy`
        <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m0,1.00189c0,-0.8451 0.983,-1.3091 1.636,-0.772l11.006,9.0622c0.724,0.5964 0.302,1.772 -0.636,1.772l-5.592,0c-0.435,0 -0.849,0.1892 -1.134,0.5185l-3.524,4.0725c-0.606,0.7003 -1.756,0.2717 -1.756,-0.6544l0,-13.9988zm12.006,9.0622l-11.006,-9.0622l0,13.9988l3.524,-4.0724c0.475,-0.5488 1.164,-0.8642 1.89,-0.8642l5.592,0z"
          />
        </svg>
      `;case o.Cancel:return s.qy`
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.588591 0.715694L0.646447 0.646447C0.820013 0.47288 1.08944 0.453595 1.28431 0.588591L1.35355 0.646447L6 5.293L10.6464 0.646447C10.8417 0.451185 11.1583 0.451185 11.3536 0.646447C11.5488 0.841709 11.5488 1.15829 11.3536 1.35355L6.707 6L11.3536 10.6464C11.5271 10.82 11.5464 11.0894 11.4114 11.2843L11.3536 11.3536C11.18 11.5271 10.9106 11.5464 10.7157 11.4114L10.6464 11.3536L6 6.707L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451185 11.1583 0.451185 10.8417 0.646447 10.6464L5.293 6L0.646447 1.35355C0.47288 1.17999 0.453595 0.910563 0.588591 0.715694L0.646447 0.646447L0.588591 0.715694Z" fill="currentColor"/>
        </svg>
     `;case o.Success:return s.qy`
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path fill="#009E00" d="m6.322,12c3.492,0 6.323,-2.6863 6.323,-6c0,-3.3137 -2.831,-6 -6.323,-6c-3.491,0 -6.322,2.6863 -6.322,6c0,3.3137 2.831,6 6.322,6z"/>
          <path fill="white" d="m9.629,3.7509c-0.131,-0.125 -0.31,-0.1952 -0.496,-0.1952c-0.187,0 -0.365,0.0702 -0.497,0.1952l-3.267,3.1l-1.393,-1.3222c-0.177,-0.1695 -0.436,-0.2361 -0.68,-0.1746c-0.243,0.0615 -0.433,0.2418 -0.497,0.4725c-0.065,0.2307 0.005,0.4767 0.184,0.6449l1.807,1.7154c0.019,0.0331 0.041,0.0646 0.066,0.094c0.289,0.2562 0.738,0.2562 1.027,0c0.024,-0.0294 0.047,-0.0609 0.065,-0.0941l3.681,-3.4931c0.275,-0.2603 0.275,-0.6824 0,-0.9428z"/>
        </svg>
      `;case o.CheckMark:return s.qy`
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="filled" d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.2197 6.96967L8.75 11.4393L6.78033 9.46967C6.48744 9.17678 6.01256 9.17678 5.71967 9.46967C5.42678 9.76256 5.42678 10.2374 5.71967 10.5303L8.21967 13.0303C8.51256 13.3232 8.98744 13.3232 9.28033 13.0303L14.2803 8.03033C14.5732 7.73744 14.5732 7.26256 14.2803 6.96967C13.9874 6.67678 13.5126 6.67678 13.2197 6.96967Z" fill="currentColor"/>
        <path class="regular" d="M10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="currentColor"/>
      </svg>
      `;case o.Radio:return s.qy`
      <svg width="66" height="20" viewBox="0 0 66 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="#F3F3F3"/>
        <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#636363"/>
        <path d="M36.5596 16H35.1924L33.5107 13.2178C33.1963 12.6982 32.9274 12.3656 32.7041 12.2197C32.4808 12.0693 32.2096 11.9941 31.8906 11.9941H30.7627V16H29.6143V6.19727H32.54C33.3923 6.19727 34.1009 6.42285 34.666 6.87402C35.2357 7.3252 35.5205 7.99056 35.5205 8.87012C35.5205 9.56283 35.3405 10.1439 34.9805 10.6133C34.6204 11.0827 34.126 11.4222 33.4971 11.6318V11.6592C33.7021 11.7822 33.8822 11.9167 34.0371 12.0625C34.1921 12.2083 34.3561 12.4225 34.5293 12.7051L36.5596 16ZM30.7627 7.23633V10.9551H32.3213C32.891 10.9551 33.3649 10.7705 33.7432 10.4014C34.126 10.0322 34.3174 9.55371 34.3174 8.96582C34.3174 8.44173 34.1465 8.02246 33.8047 7.70801C33.4674 7.39355 32.9775 7.23633 32.335 7.23633H30.7627ZM42.8008 16H41.6797V14.9062H41.6523C41.4108 15.3255 41.1123 15.64 40.7568 15.8496C40.4059 16.0592 39.9958 16.1641 39.5264 16.1641C38.8701 16.1641 38.3392 15.9727 37.9336 15.5898C37.528 15.207 37.3252 14.6989 37.3252 14.0654C37.3252 13.4684 37.5303 12.974 37.9404 12.582C38.3506 12.1901 38.9316 11.9395 39.6836 11.8301L41.6797 11.5635V11.4062C41.6797 10.8184 41.543 10.4014 41.2695 10.1553C40.9961 9.90462 40.6315 9.7793 40.1758 9.7793C39.8112 9.7793 39.4603 9.84766 39.123 9.98438C38.7858 10.1211 38.4691 10.3307 38.1729 10.6133L37.5166 9.93652C37.9085 9.55827 38.3255 9.28027 38.7676 9.10254C39.2096 8.9248 39.7018 8.83594 40.2441 8.83594C41.0918 8.83594 41.7298 9.05469 42.1582 9.49219C42.5866 9.92513 42.8008 10.5768 42.8008 11.4473V16ZM41.6797 13.1562V12.459L39.9912 12.6914C39.4762 12.7643 39.0889 12.8942 38.8291 13.0811C38.5693 13.2679 38.4395 13.5618 38.4395 13.9629C38.4395 14.3822 38.5602 14.7035 38.8018 14.9268C39.0479 15.1455 39.3464 15.2549 39.6973 15.2549C40.3034 15.2549 40.7842 15.0566 41.1396 14.6602C41.4997 14.2637 41.6797 13.7624 41.6797 13.1562ZM49.7939 14.8105C49.5342 15.2617 49.2038 15.6012 48.8027 15.8291C48.4062 16.0524 47.9346 16.1641 47.3877 16.1641C46.5081 16.1641 45.804 15.8519 45.2754 15.2275C44.7513 14.5986 44.4893 13.7441 44.4893 12.6641C44.4893 11.5065 44.7809 10.5791 45.3643 9.88184C45.9476 9.18457 46.7246 8.83594 47.6953 8.83594C48.1784 8.83594 48.5931 8.93164 48.9395 9.12305C49.2904 9.3099 49.5752 9.59245 49.7939 9.9707H49.8213V5.63672H50.9424V16H49.8213V14.8105H49.7939ZM45.6377 12.6094C45.6377 13.416 45.8245 14.054 46.1982 14.5234C46.5765 14.9883 47.0824 15.2207 47.7158 15.2207C48.3447 15.2207 48.8529 14.9951 49.2402 14.5439C49.6276 14.0928 49.8213 13.5231 49.8213 12.835V11.8027C49.8213 11.2376 49.6322 10.7591 49.2539 10.3672C48.8802 9.97526 48.4085 9.7793 47.8389 9.7793C47.1553 9.7793 46.6175 10.0299 46.2256 10.5312C45.8337 11.0326 45.6377 11.7253 45.6377 12.6094ZM53.7861 7.3252C53.5583 7.3252 53.3669 7.25 53.2119 7.09961C53.057 6.94466 52.9795 6.75553 52.9795 6.53223C52.9795 6.30892 53.057 6.12207 53.2119 5.97168C53.3669 5.81673 53.5583 5.73926 53.7861 5.73926C54.014 5.73926 54.2054 5.81673 54.3604 5.97168C54.5153 6.12207 54.5928 6.30892 54.5928 6.53223C54.5928 6.75553 54.5153 6.94466 54.3604 7.09961C54.2054 7.25 54.014 7.3252 53.7861 7.3252ZM54.333 16H53.2119V9H54.333V16ZM59.5283 16.1641C58.4938 16.1641 57.6667 15.8382 57.0469 15.1865C56.4316 14.5303 56.124 13.6621 56.124 12.582C56.124 11.4108 56.443 10.4948 57.0811 9.83398C57.7191 9.17318 58.5895 8.84049 59.6924 8.83594C60.736 8.83138 61.5495 9.15267 62.1328 9.7998C62.7207 10.4469 63.0146 11.3379 63.0146 12.4727C63.0146 13.5938 62.6979 14.4893 62.0645 15.1592C61.4355 15.8291 60.5902 16.1641 59.5283 16.1641ZM59.6104 15.2207C60.335 15.2207 60.891 14.986 61.2783 14.5166C61.6702 14.0426 61.8662 13.375 61.8662 12.5137C61.8662 11.6341 61.6702 10.9596 61.2783 10.4902C60.8864 10.0163 60.3304 9.7793 59.6104 9.7793C58.8903 9.7793 58.3206 10.0254 57.9014 10.5176C57.4821 11.0098 57.2725 11.6842 57.2725 12.541C57.2725 13.3704 57.4844 14.0244 57.9082 14.5029C58.332 14.9814 58.8994 15.2207 59.6104 15.2207Z" fill="#1A1A1A"/>
      </svg>
      `;case o.Fail:return s.qy`
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path fill="#EF355D" d="m6,12c3.314,0 6,-2.6863 6,-6c0,-3.3137 -2.686,-6 -6,-6c-3.314,0 -6,2.6863 -6,6c0,3.3137 2.686,6 6,6z"/>
          <path fill="white" d="m6.943,6.0004l1.544,-1.5444c0.169,-0.1683 0.236,-0.4142 0.174,-0.6448c-0.061,-0.2306 -0.241,-0.4107 -0.472,-0.4722c-0.231,-0.0616 -0.477,0.0049 -0.645,0.1742l-1.544,1.5443l-1.545,-1.5443c-0.26,-0.259 -0.681,-0.2583 -0.941,0.0014c-0.26,0.2598 -0.26,0.6808 -0.001,0.9414l1.544,1.5444l-1.544,1.5444c-0.259,0.2606 -0.259,0.6815 0.001,0.9413c0.26,0.2598 0.681,0.2604 0.941,0.0015l1.545,-1.5444l1.544,1.5444c0.261,0.2589 0.682,0.2583 0.942,-0.0015c0.259,-0.2598 0.26,-0.6807 0.001,-0.9413l-1.544,-1.5444z" />
        </svg>
      `;case o.SelectAccount:return s.qy`
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
      <path fill=${t} d="M6.22176 13.9567C3.55468 13.653 2 11.8026 2 10V9.5C2 8.67157 2.67157 8 3.5 8H5.59971C5.43777 8.31679 5.30564 8.65136 5.20703 9H3.5C3.22386 9 3 9.22386 3 9.5V10C3 11.1281 3.88187 12.333 5.50235 12.7996C5.69426 13.216 5.93668 13.6043 6.22176 13.9567ZM9.62596 5.06907C9.70657 4.81036 9.75 4.53525 9.75 4.25C9.75 2.73122 8.51878 1.5 7 1.5C5.48122 1.5 4.25 2.73122 4.25 4.25C4.25 5.53662 5.13357 6.61687 6.32704 6.91706C6.64202 6.55055 7.00446 6.226 7.40482 5.95294C7.27488 5.98371 7.13934 6 7 6C6.0335 6 5.25 5.2165 5.25 4.25C5.25 3.2835 6.0335 2.5 7 2.5C7.9665 2.5 8.75 3.2835 8.75 4.25C8.75 4.73141 8.55561 5.16743 8.24104 5.48382C8.67558 5.28783 9.14016 5.14664 9.62596 5.06907ZM10.5 15C12.9853 15 15 12.9853 15 10.5C15 8.01472 12.9853 6 10.5 6C8.01472 6 6 8.01472 6 10.5C6 12.9853 8.01472 15 10.5 15ZM10.5 8C10.7761 8 11 8.22386 11 8.5V10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H11V12.5C11 12.7761 10.7761 13 10.5 13C10.2239 13 10 12.7761 10 12.5V11H8.5C8.22386 11 8 10.7761 8 10.5C8 10.2239 8.22386 10 8.5 10H10V8.5C10 8.22386 10.2239 8 10.5 8Z"/>
    </svg>
  `;case o.News:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.75 20H5.25C3.51697 20 2.10075 18.6435 2.00514 16.9344L2 16.75V6.25C2 5.05914 2.92516 4.08436 4.09595 4.00519L4.25 4H16.75C17.9409 4 18.9156 4.92516 18.9948 6.09595L19 6.25V7H19.75C20.9409 7 21.9156 7.92516 21.9948 9.09595L22 9.25V16.75C22 18.483 20.6435 19.8992 18.9344 19.9949L18.75 20H5.25H18.75ZM5.25 18.5H18.75C19.6682 18.5 20.4212 17.7929 20.4942 16.8935L20.5 16.75V9.25C20.5 8.8703 20.2178 8.55651 19.8518 8.50685L19.75 8.5H19V16.25C19 16.6297 18.7178 16.9435 18.3518 16.9932L18.25 17C17.8703 17 17.5565 16.7178 17.5068 16.3518L17.5 16.25V6.25C17.5 5.8703 17.2178 5.55651 16.8518 5.50685L16.75 5.5H4.25C3.8703 5.5 3.55651 5.78215 3.50685 6.14823L3.5 6.25V16.75C3.5 17.6682 4.20711 18.4212 5.10647 18.4942L5.25 18.5H18.75H5.25ZM12.246 14.5H15.2522C15.6665 14.5 16.0022 14.8358 16.0022 15.25C16.0022 15.6297 15.7201 15.9435 15.354 15.9932L15.2522 16H12.246C11.8318 16 11.496 15.6642 11.496 15.25C11.496 14.8703 11.7782 14.5565 12.1442 14.5068L12.246 14.5H15.2522H12.246ZM9.24328 11.0045C9.6575 11.0045 9.99328 11.3403 9.99328 11.7545V15.25C9.99328 15.6642 9.6575 16 9.24328 16H5.74776C5.33355 16 4.99776 15.6642 4.99776 15.25V11.7545C4.99776 11.3403 5.33355 11.0045 5.74776 11.0045H9.24328ZM8.49328 12.5045H6.49776V14.5H8.49328V12.5045ZM12.246 11.0045H15.2522C15.6665 11.0045 16.0022 11.3403 16.0022 11.7545C16.0022 12.1342 15.7201 12.448 15.354 12.4976L15.2522 12.5045H12.246C11.8318 12.5045 11.496 12.1687 11.496 11.7545C11.496 11.3748 11.7782 11.061 12.1442 11.0113L12.246 11.0045H15.2522H12.246ZM5.74776 7.50247H15.2522C15.6665 7.50247 16.0022 7.83826 16.0022 8.25247C16.0022 8.63217 15.7201 8.94596 15.354 8.99563L15.2522 9.00247H5.74776C5.33355 9.00247 4.99776 8.66669 4.99776 8.25247C4.99776 7.87278 5.27991 7.55898 5.64599 7.50932L5.74776 7.50247H15.2522H5.74776Z" fill="none" />
      </svg>
      `;case o.DoubleBookmark:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6.74814C4 5.50535 5.00742 4.49786 6.25013 4.49786H15.2506C16.4933 4.49786 17.5008 5.50535 17.5008 6.74814V21.2499C17.5008 21.5185 17.3572 21.7666 17.1243 21.9003C16.8914 22.0341 16.6048 22.0332 16.3728 21.8978L10.7504 18.6179L5.12797 21.8978C4.89599 22.0332 4.60936 22.0341 4.37648 21.9003C4.14359 21.7666 4 21.5185 4 21.2499V6.74814ZM6.25013 5.99805C5.83589 5.99805 5.50008 6.33387 5.50008 6.74814V19.944L10.3725 17.1016C10.606 16.9653 10.8948 16.9653 11.1283 17.1016L16.0007 19.944V6.74814C16.0007 6.33387 15.6649 5.99805 15.2506 5.99805H6.25013ZM15.2497 2C17.8732 2 20 4.12691 20 6.75058V18.6232C20 19.0374 19.6642 19.3733 19.25 19.3733C18.8357 19.3733 18.4999 19.0374 18.4999 18.6232V6.75058C18.4999 4.95543 17.0448 3.50018 15.2497 3.50018H6.63687C6.63687 3.50018 6.75016 2.94339 7.43379 2.41948C8.00023 2 8.60182 2 8.60182 2H15.2497Z" fill="none" />
        </svg>
      `;case o.ChevronLeft:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5303 4.21967C15.8232 4.51256 15.8232 4.98744 15.5303 5.28033L8.81066 12L15.5303 18.7197C15.8232 19.0126 15.8232 19.4874 15.5303 19.7803C15.2374 20.0732 14.7626 20.0732 14.4697 19.7803L7.21967 12.5303C6.92678 12.2374 6.92678 11.7626 7.21967 11.4697L14.4697 4.21967C14.7626 3.92678 15.2374 3.92678 15.5303 4.21967Z" fill="none" />
        </svg>`;case o.ChevronRight:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.46967 4.21967C8.17678 4.51256 8.17678 4.98744 8.46967 5.28033L15.1893 12L8.46967 18.7197C8.17678 19.0126 8.17678 19.4874 8.46967 19.7803C8.76256 20.0732 9.23744 20.0732 9.53033 19.7803L16.7803 12.5303C17.0732 12.2374 17.0732 11.7626 16.7803 11.4697L9.53033 4.21967C9.23744 3.92678 8.76256 3.92678 8.46967 4.21967Z" fill="currentColor" />
        </svg>`;case o.Delete:return s.qy`
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 4H11.5C11.5 3.17157 10.8284 2.5 10 2.5C9.17157 2.5 8.5 3.17157 8.5 4ZM7.5 4C7.5 2.61929 8.61929 1.5 10 1.5C11.3807 1.5 12.5 2.61929 12.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H16.4456L15.2521 15.3439C15.0774 16.8576 13.7957 18 12.2719 18H7.72813C6.20431 18 4.92256 16.8576 4.7479 15.3439L3.55437 5H2.5C2.22386 5 2 4.77614 2 4.5C2 4.22386 2.22386 4 2.5 4H7.5ZM5.74131 15.2292C5.85775 16.2384 6.71225 17 7.72813 17H12.2719C13.2878 17 14.1422 16.2384 14.2587 15.2292L15.439 5H4.56101L5.74131 15.2292ZM8.5 7.5C8.77614 7.5 9 7.72386 9 8V14C9 14.2761 8.77614 14.5 8.5 14.5C8.22386 14.5 8 14.2761 8 14V8C8 7.72386 8.22386 7.5 8.5 7.5ZM12 8C12 7.72386 11.7761 7.5 11.5 7.5C11.2239 7.5 11 7.72386 11 8V14C11 14.2761 11.2239 14.5 11.5 14.5C11.7761 14.5 12 14.2761 12 14V8Z" fill="currentColor"/>
        </svg>
    `;case o.Add:return s.qy`
        <svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.39563 0.5C8.39563 0.223858 8.17177 0 7.89563 0C7.61949 0 7.39563 0.223858 7.39563 0.5V7H0.89563C0.619487 7 0.39563 7.22386 0.39563 7.5C0.39563 7.77614 0.619487 8 0.89563 8H7.39563V14.5C7.39563 14.7761 7.61949 15 7.89563 15C8.17177 15 8.39563 14.7761 8.39563 14.5V8H14.8956C15.1718 8 15.3956 7.77614 15.3956 7.5C15.3956 7.22386 15.1718 7 14.8956 7H8.39563V0.5Z" fill="${t}"/>
        </svg>`;case o.Calendar:return s.qy`
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11C7.55228 11 8 10.5523 8 10C8 9.44771 7.55228 9 7 9C6.44772 9 6 9.44771 6 10C6 10.5523 6.44772 11 7 11ZM8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44771 10.5523 9 10 9C9.44771 9 9 9.44771 9 10C9 10.5523 9.44771 11 10 11ZM11 13C11 13.5523 10.5523 14 10 14C9.44771 14 9 13.5523 9 13C9 12.4477 9.44771 12 10 12C10.5523 12 11 12.4477 11 13ZM13 11C13.5523 11 14 10.5523 14 10C14 9.44771 13.5523 9 13 9C12.4477 9 12 9.44771 12 10C12 10.5523 12.4477 11 13 11ZM17 5.5C17 4.11929 15.8807 3 14.5 3H5.5C4.11929 3 3 4.11929 3 5.5V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V5.5ZM4 7H16V14.5C16 15.3284 15.3284 16 14.5 16H5.5C4.67157 16 4 15.3284 4 14.5V7ZM5.5 4H14.5C15.3284 4 16 4.67157 16 5.5V6H4V5.5C4 4.67157 4.67157 4 5.5 4Z" fill=${t}/>
        </svg>
    `;case o.Planner:return s.qy`
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5Zm1.75 5.5h-15v9.25c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V8.5Zm-11.75 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm-4.25-4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm1.5-6H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75Z" fill="${t}"/>
        </svg>`;case o.Milestone:return s.qy`
        <svg width="24" height="24" fill="${t}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.25 13c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 15.25 21H3.75A1.75 1.75 0 0 1 2 19.25v-4.5c0-.966.783-1.75 1.75-1.75h11.5ZM21 14.899v5.351a.75.75 0 0 1-1.494.102l-.006-.102v-5.338a3.006 3.006 0 0 0 1.5-.013Zm-5.75-.399H3.75a.25.25 0 0 0-.25.25v4.5c0 .138.111.25.25.25h11.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25Zm5-4.408a1.908 1.908 0 1 1 0 3.816 1.908 1.908 0 0 1 0-3.816ZM15.244 3c.967 0 1.75.784 1.75 1.75v4.5a1.75 1.75 0 0 1-1.75 1.75h-11.5a1.75 1.75 0 0 1-1.75-1.75v-4.5a1.75 1.75 0 0 1 1.607-1.744L3.745 3h11.5Zm0 1.5h-11.5l-.057.007a.25.25 0 0 0-.193.243v4.5c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25ZM20.25 3a.75.75 0 0 1 .743.648L21 3.75v5.351a3.004 3.004 0 0 0-1.5-.013V3.75a.75.75 0 0 1 .75-.75Z" fill="${t}"/>
        </svg>`;case o.PersonAdd:return s.qy`
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="svg" fill="currentColor">
          <path d="M9 2a4 4 0 100 8 4 4 0 000-8zM6 6a3 3 0 116 0 3 3 0 01-6 0z"></path>
          <path d="M4 11a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 009 18c.41 0 .82-.02 1.21-.06A5.5 5.5 0 019.6 17 12 12 0 019 17a8.16 8.16 0 01-4.33-1.05A3.36 3.36 0 013 13a1 1 0 011-1h5.6c.18-.36.4-.7.66-1H4z"></path>
          <path d="M14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 010 1H15v1.5a.5.5 0 01-1 0V15h-1.5a.5.5 0 010-1H14v-1.5c0-.28.22-.5.5-.5z"></path>
        </svg>`;case o.Event:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.75 3C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75ZM19.5 8.5H4.5V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H17.75C18.7165 19.5 19.5 18.7165 19.5 17.75V8.5ZM7.75 14.5C8.44036 14.5 9 15.0596 9 15.75C9 16.4404 8.44036 17 7.75 17C7.05964 17 6.5 16.4404 6.5 15.75C6.5 15.0596 7.05964 14.5 7.75 14.5ZM12 14.5C12.6904 14.5 13.25 15.0596 13.25 15.75C13.25 16.4404 12.6904 17 12 17C11.3096 17 10.75 16.4404 10.75 15.75C10.75 15.0596 11.3096 14.5 12 14.5ZM7.75 10.5C8.44036 10.5 9 11.0596 9 11.75C9 12.4404 8.44036 13 7.75 13C7.05964 13 6.5 12.4404 6.5 11.75C6.5 11.0596 7.05964 10.5 7.75 10.5ZM12 10.5C12.6904 10.5 13.25 11.0596 13.25 11.75C13.25 12.4404 12.6904 13 12 13C11.3096 13 10.75 12.4404 10.75 11.75C10.75 11.0596 11.3096 10.5 12 10.5ZM16.25 10.5C16.9404 10.5 17.5 11.0596 17.5 11.75C17.5 12.4404 16.9404 13 16.25 13C15.5596 13 15 12.4404 15 11.75C15 11.0596 15.5596 10.5 16.25 10.5ZM17.75 4.5H6.25C5.2835 4.5 4.5 5.2835 4.5 6.25V7H19.5V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5Z" fill="none" />
        </svg>
      `;case o.BookOpen:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19.1375C11.4986 19.6686 10.788 20 10 20H3.75C2.7835 20 2 19.2165 2 18.25V5.75C2 4.7835 2.7835 4 3.75 4H10C10.788 4 11.4986 4.33145 12 4.86253C12.5014 4.33145 13.212 4 14 4H20.25C21.2165 4 22 4.7835 22 5.75V18.25C22 19.2165 21.2165 20 20.25 20H14C13.212 20 12.5014 19.6686 12 19.1375ZM3.5 5.75V18.25C3.5 18.3881 3.61193 18.5 3.75 18.5H10C10.6904 18.5 11.25 17.9404 11.25 17.25V6.75C11.25 6.05964 10.6904 5.5 10 5.5H3.75C3.61193 5.5 3.5 5.61193 3.5 5.75ZM12.75 17.25C12.75 17.9404 13.3096 18.5 14 18.5H20.25C20.3881 18.5 20.5 18.3881 20.5 18.25V5.75C20.5 5.61193 20.3881 5.5 20.25 5.5H14C13.3096 5.5 12.75 6.05964 12.75 6.75V17.25Z" fill="none" />
        </svg>
      `;case o.FileOuter:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V9.82777C20 9.29733 19.7893 8.78863 19.4142 8.41355L13.5864 2.58579C13.2114 2.21071 12.7027 2 12.1722 2H6ZM5.5 4C5.5 3.72386 5.72386 3.5 6 3.5H12V8C12 9.10457 12.8954 10 14 10H18.5V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V4ZM17.3793 8.5H14C13.7239 8.5 13.5 8.27614 13.5 8V4.62066L17.3793 8.5Z" fill="none" />
        </svg>
      `;case o.BookQuestion:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.9998 8.01752C10.9905 8.42363 10.6584 8.74999 10.25 8.74999C9.5 8.74999 9.5 7.9989 9.5 7.9989L9.5 7.99777L9.50001 7.99539L9.50006 7.99017C9.50032 7.9755 9.50072 7.96084 9.50144 7.94618C9.50262 7.92198 9.50473 7.89159 9.50846 7.8559C9.51591 7.78477 9.52996 7.69092 9.55665 7.58186C9.60973 7.36492 9.71565 7.07652 9.92848 6.78906C10.3825 6.17582 11.1982 5.72727 12.513 5.7501C13.4627 5.76659 14.3059 6.16497 14.834 6.82047C15.371 7.48704 15.5517 8.3902 15.1964 9.27853C14.8342 10.1839 14.0149 10.5437 13.5442 10.7503L13.4932 10.7728C13.2147 10.8957 13.0813 10.9599 13.0013 11.024L13 11.0251L13 11.7492C13.0001 12.1634 12.6643 12.4999 12.2501 12.5C11.8359 12.5 11.5001 12.1643 11.5 11.7501L11.5 11C11.5 10.4769 11.752 10.1029 12.0633 9.85345C12.3134 9.65303 12.6276 9.51483 12.8491 9.4174L12.8875 9.40049C13.4292 9.16137 13.6868 9.01346 13.8036 8.72145C13.9483 8.35977 13.8789 8.02596 13.6659 7.76153C13.4439 7.48604 13.0371 7.25943 12.487 7.24988C11.5518 7.23364 11.2425 7.53509 11.134 7.68162C11.0656 7.77404 11.0309 7.86797 11.0137 7.93838C11.0052 7.973 11.0017 7.99908 11.0003 8.01197L10.9998 8.01752ZM12.25 15.5C12.8023 15.5 13.25 15.0523 13.25 14.5C13.25 13.9477 12.8023 13.5 12.25 13.5C11.6977 13.5 11.25 13.9477 11.25 14.5C11.25 15.0523 11.6977 15.5 12.25 15.5ZM4 4.5C4 3.11929 5.11929 2 6.5 2H18C19.3807 2 20.5 3.11929 20.5 4.5V18.75C20.5 19.1642 20.1642 19.5 19.75 19.5H5.5C5.5 20.0523 5.94772 20.5 6.5 20.5H19.75C20.1642 20.5 20.5 20.8358 20.5 21.25C20.5 21.6642 20.1642 22 19.75 22H6.5C5.11929 22 4 20.8807 4 19.5V4.5ZM5.5 4.5V18H19V4.5C19 3.94772 18.5523 3.5 18 3.5H6.5C5.94772 3.5 5.5 3.94772 5.5 4.5Z" fill="none" />
        </svg>
      `;case o.Globe:return s.qy`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0001 1.99805C17.5238 1.99805 22.0016 6.47589 22.0016 11.9996C22.0016 17.5233 17.5238 22.0011 12.0001 22.0011C6.47638 22.0011 1.99854 17.5233 1.99854 11.9996C1.99854 6.47589 6.47638 1.99805 12.0001 1.99805ZM14.939 16.4993H9.06118C9.71322 18.9135 10.8466 20.5011 12.0001 20.5011C13.1536 20.5011 14.2869 18.9135 14.939 16.4993ZM7.5084 16.4999L4.78591 16.4998C5.74425 18.0328 7.1777 19.2384 8.88008 19.9104C8.3578 19.0906 7.92681 18.0643 7.60981 16.8949L7.5084 16.4999ZM19.2143 16.4998L16.4918 16.4999C16.168 17.8337 15.7004 18.9995 15.119 19.9104C16.716 19.2804 18.0757 18.1814 19.0291 16.7833L19.2143 16.4998ZM7.09351 9.99895H3.7359L3.73115 10.0162C3.57906 10.6525 3.49854 11.3166 3.49854 11.9996C3.49854 13.0558 3.69112 14.0669 4.0431 14.9999L7.21626 14.9995C7.07396 14.0504 6.99854 13.0422 6.99854 11.9996C6.99854 11.3156 7.031 10.6464 7.09351 9.99895ZM15.397 9.99901H8.60316C8.53514 10.6393 8.49853 11.309 8.49853 11.9996C8.49853 13.0591 8.58468 14.0694 8.73827 14.9997H15.2619C15.4155 14.0694 15.5016 13.0591 15.5016 11.9996C15.5016 11.309 15.465 10.6393 15.397 9.99901ZM20.2647 9.99811L16.9067 9.99897C16.9692 10.6464 17.0016 11.3156 17.0016 11.9996C17.0016 13.0422 16.9262 14.0504 16.7839 14.9995L19.9571 14.9999C20.309 14.0669 20.5016 13.0558 20.5016 11.9996C20.5016 11.3102 20.4196 10.64 20.2647 9.99811ZM8.88114 4.08875L8.85823 4.09747C6.81092 4.91218 5.1549 6.49949 4.25023 8.49935L7.29835 8.49972C7.61171 6.74693 8.15855 5.221 8.88114 4.08875ZM12.0001 3.49805L11.8844 3.50335C10.619 3.6191 9.39651 5.62107 8.8288 8.4993H15.1714C14.6052 5.62914 13.388 3.63033 12.1264 3.50436L12.0001 3.49805ZM15.1201 4.08881L15.2269 4.2629C15.8961 5.37537 16.4043 6.83525 16.7018 8.49972L19.7499 8.49935C18.8853 6.58795 17.3343 5.05341 15.4113 4.21008L15.1201 4.08881Z" />
        </svg>
      `;case o.PresenceAvailable:return s.qy`
        <svg fill="#13a10e" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10Zm2.1-5.9L4.85 6.35a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.9-1.9a.5.5 0 0 1 .7.71Z" fill="#13a10e"></path>
        </svg>`;case o.PresenceOofAvailable:return s.qy`
        <svg fill="#13a10e" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0ZM1 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm6.1-1.6c.2.2.2.5 0 .7L4.85 6.35a.5.5 0 0 1-.7 0l-1-1a.5.5 0 1 1 .7-.7l.65.64 1.9-1.9c.2-.19.5-.19.7 0Z" fill="#13a10e"></path>
        </svg>`;case o.PresenceBusy:return s.qy`
        <svg fill="#d13438" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 5A5 5 0 1 1 0 5a5 5 0 0 1 10 0Z" fill="#d13438"></path>
        </svg>`;case o.PresenceOofBusy:return s.qy`
        <svg fill="#d13438" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM0 5a5 5 0 1 1 10 0A5 5 0 0 1 0 5Z" fill="#d13438"></path>
        </svg>
      `;case o.PresenceDnd:return s.qy`
        <svg fill="#d13438" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10ZM3.5 4.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Z" fill="#d13438"></path>
        </svg>`;case o.PresenceOofDnd:return s.qy`
        <svg fill="#d13438" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0ZM1 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm2 0c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 3 5Z" fill="#d13438"></path>
        </svg>`;case o.PresenceAway:return s.qy`
        <svg fill="#eaa300" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10Zm0-7v1.8l1.35 1.35a.5.5 0 1 1-.7.7l-1.5-1.5A.5.5 0 0 1 4 5V3a.5.5 0 0 1 1 0Z" fill="#eaa300"></path>
        </svg>`;case o.PresenceOofAway:return s.qy`
        <svg fill="#c239b3" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.35 3.85a.5.5 0 1 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7L4.7 5.5h1.8a.5.5 0 1 0 0-1H4.7l.65-.65ZM5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0ZM1 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" fill="#c239b3"></path>
        </svg>`;case o.PresenceOffline:return s.qy`
        <svg fill="#929292" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.85 3.15c.2.2.2.5 0 .7L5.71 5l1.14 1.15a.5.5 0 1 1-.7.7L5 5.71 3.85 6.85a.5.5 0 1 1-.7-.7L4.29 5 3.15 3.85a.5.5 0 1 1 .7-.7L5 4.29l1.15-1.14c.2-.2.5-.2.7 0ZM0 5a5 5 0 1 1 10 0A5 5 0 0 1 0 5Zm5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" fill="#929292"></path>
        </svg>`;case o.PresenceStatusUnknown:return s.qy`
        <svg fill="#d13438" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM0 5a5 5 0 1 1 10 0A5 5 0 0 1 0 5Z" fill="#d13438"></path>
        </svg>`}}},7822:(e,t,i)=>{i.d(t,{B9:()=>c,Gp:()=>n,Sk:()=>l,aX:()=>d,ez:()=>u,h3:()=>s,jD:()=>f,jE:()=>v,sg:()=>a,wJ:()=>p,x8:()=>g,z3:()=>h});var o=i(5232);const s=e=>{const t=new Date,i=new Date(t.getFullYear(),t.getMonth(),t.getDate());if(e>=i)return e.toLocaleString("default",{hour:"numeric",minute:"numeric"});const o=new Date(i);if(o.setDate(t.getDate()-t.getDay()),e>=o)return e.toLocaleString("default",{hour:"numeric",minute:"numeric",weekday:"short"});const s=new Date(o);return s.setDate(o.getDate()-7),e>=s?e.toLocaleString("default",{day:"numeric",month:"numeric",weekday:"short"}):e.toLocaleString("default",{day:"numeric",month:"numeric",year:"numeric"})},n=e=>{const t=e.getMonth(),i=e.getDate();return`${r(t)} ${i}`},r=e=>{switch(e){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December";default:return"Month"}},a=(e,t)=>{let i;return function(){window.clearTimeout(i),i=window.setTimeout((()=>e.apply(this,arguments)),t)}},l=e=>new Promise(((t,i)=>{const o=new FileReader;o.onerror=i,o.onload=()=>{t(o.result)},o.readAsDataURL(e)})),d=e=>e.startsWith("[")?e.match(/([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi).toString():e,c=e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),h=(e,t=2)=>{if(0===e)return"0 Bytes";const i=t<0?0:t,o=Math.floor(Math.log(e)/Math.log(1024));return`${parseFloat((e/Math.pow(1024,o)).toFixed(i))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][o]}`},u=e=>(e&&(e=null==(e=null==(e=null==e?void 0:e.replace(/<ddd\/>/gi,"..."))?void 0:e.replace(/<c0>/gi,"<b>"))?void 0:e.replace(/<\/c0>/gi,"</b>")),e),p=e=>null==e?void 0:e.replace(/\.[^/.]+$/,""),g=e=>new URL(e).pathname.split("/").pop().replace(/-/g," "),f=e=>e||o._.config.response.invalidationPeriod||o._.config.defaultInvalidationPeriod,v=()=>o._.config.response.isEnabled&&o._.config.isEnabled},242:(e,t,i)=>{i.d(t,{I:()=>o,z:()=>s});const o="https://graph.microsoft.com",s=new Set([o,"https://graph.microsoft.us","https://dod-graph.microsoft.us","https://graph.microsoft.de","https://microsoftgraph.chinacloudapi.cn","https://canary.graph.microsoft.com"])},5304:(e,t,i)=>{i.d(t,{D:()=>p,I:()=>o});var o,s=i(7573),n=i(3511),r=i(3204),a=i(5468),l=i(5876),d=i(1933),c=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};!function(e){e.mobile="",e.tablet="tablet",e.desktop="desktop"}(o||(o={}));class p extends s.WF{static get packageVersion(){return d.i}get mediaQuery(){return this.offsetWidth<768?o.mobile:this.offsetWidth<1200?o.tablet:o.desktop}get isLoadingState(){return this._isLoadingState}get isFirstUpdated(){return this._isFirstUpdated}get strings(){return{}}constructor(){super(),this.providerState=r.HJ.Loading,this.direction="ltr",this._isLoadingState=!1,this._isFirstUpdated=!1,this.setLoadingState=e=>{this._isLoadingState!==e&&(this._isLoadingState=e,this.requestUpdate("isLoadingState"))},this.handleProviderUpdates=()=>{var e,t;this.providerState=null!==(t=null===(e=a.b.globalProvider)||void 0===e?void 0:e.state)&&void 0!==t?t:r.HJ.Loading,this.requestStateUpdate()},this.handleActiveAccountUpdates=()=>{this.clearState(),this.requestStateUpdate()},this.handleLocalizationChanged=()=>{l.w.updateStringsForTag(this.tagName,this.strings),this.requestUpdate()},this.handleDirectionChanged=()=>{this.direction=l.w.getDocumentDirection()},this.handleDirectionChanged(),this.handleLocalizationChanged()}connectedCallback(){super.connectedCallback(),l.w.onStringsUpdated(this.handleLocalizationChanged),l.w.onDirectionUpdated(this.handleDirectionChanged)}disconnectedCallback(){super.disconnectedCallback(),l.w.removeOnStringsUpdated(this.handleLocalizationChanged),l.w.removeOnDirectionUpdated(this.handleDirectionChanged),a.b.removeProviderUpdatedListener(this.handleProviderUpdates),a.b.removeActiveAccountChangedListener(this.handleActiveAccountUpdates)}firstUpdated(e){super.firstUpdated(e),this._isFirstUpdated=!0,a.b.onProviderUpdated(this.handleProviderUpdates),a.b.onActiveAccountChanged(this.handleActiveAccountUpdates),this.requestStateUpdate()}loadState(){return Promise.resolve()}clearState(){}fireCustomEvent(e,t,i=!1,o=!1,s=!1){const n=new CustomEvent(e,{bubbles:i,cancelable:o,composed:s,detail:t});return this.dispatchEvent(n)}updated(e){super.updated(e);const t=new CustomEvent("updated",{bubbles:!0,cancelable:!0});this.dispatchEvent(t)}requestStateUpdate(e=!1){return u(this,void 0,void 0,(function*(){if(!this._isFirstUpdated)return;this.isLoadingState&&!e&&(yield this._currentLoadStatePromise);const t=a.b.globalProvider;if(!t)return Promise.resolve();if(t.state!==r.HJ.SignedOut){if(t.state===r.HJ.Loading)return Promise.resolve();{const t=new Promise(((i,o)=>u(this,void 0,void 0,(function*(){try{this.setLoadingState(!0),this.fireCustomEvent("loadingInitiated"),yield this.loadState(),this.setLoadingState(!1),this.fireCustomEvent("loadingCompleted"),i()}catch(e){this.clearState(),this.setLoadingState(!1),this.fireCustomEvent("loadingFailed"),o(e)}return this._currentLoadStatePromise=this.isLoadingState&&this._currentLoadStatePromise&&e?this._currentLoadStatePromise.then((()=>t)):t}))))}}else this.clearState()}))}}c([(0,n.wk)(),h("design:type",Number)],p.prototype,"providerState",void 0),c([(0,n.wk)(),h("design:type",String)],p.prototype,"direction",void 0)},1739:(e,t,i)=>{i.d(t,{S:()=>p});var o=i(6247),s=i(7573),n=i(3511),r=i(3204),a=i(5468),l=i(5876),d=i(1933),c=i(5304),h=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class p extends s.WF{static get packageVersion(){return d.i}get mediaQuery(){return this.offsetWidth<768?c.I.mobile:this.offsetWidth<1200?c.I.tablet:c.I.desktop}get isFirstUpdated(){return this._isFirstUpdated}get strings(){return{}}constructor(){super(),this.providerState=r.HJ.Loading,this.direction="ltr",this._isFirstUpdated=!1,this._task=new o.YZ(this,{task:()=>this.loadState(),args:()=>this.args()}),this.renderLoading=()=>s.qy`<span>Loading...</span>`,this.renderError=e=>s.qy`<p>Error: ${e}</p>`,this.renderContent=()=>s.qy`<!-- baseTaskComponent, please implement renderContent -->`,this.handleProviderUpdates=()=>{var e,t;this.providerState=null!==(t=null===(e=a.b.globalProvider)||void 0===e?void 0:e.state)&&void 0!==t?t:r.HJ.Loading},this.handleActiveAccountUpdates=()=>{this.clearState()},this.handleLocalizationChanged=()=>{l.w.updateStringsForTag(this.tagName,this.strings),this.requestUpdate()},this.handleDirectionChanged=()=>{this.direction=l.w.getDocumentDirection()},this.handleDirectionChanged(),this.handleLocalizationChanged()}connectedCallback(){super.connectedCallback(),l.w.onStringsUpdated(this.handleLocalizationChanged),l.w.onDirectionUpdated(this.handleDirectionChanged)}disconnectedCallback(){super.disconnectedCallback(),l.w.removeOnStringsUpdated(this.handleLocalizationChanged),l.w.removeOnDirectionUpdated(this.handleDirectionChanged),a.b.removeProviderUpdatedListener(this.handleProviderUpdates),a.b.removeActiveAccountChangedListener(this.handleActiveAccountUpdates)}firstUpdated(e){super.firstUpdated(e),this._isFirstUpdated=!0,a.b.onProviderUpdated(this.handleProviderUpdates),a.b.onActiveAccountChanged(this.handleActiveAccountUpdates)}clearState(){}fireCustomEvent(e,t,i=!1,o=!1,s=!1){const n=new CustomEvent(e,{bubbles:i,cancelable:o,composed:s,detail:t});return this.dispatchEvent(n)}updated(e){super.updated(e),this.fireCustomEvent("updated",void 0,!0,!1)}loadState(){return e=this,t=void 0,o=function*(){return Promise.resolve()},new((i=void 0)||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}));var e,t,i,o}args(){return[this.providerState]}render(){return this._task.render({pending:this.renderLoading,complete:this.renderContent,error:this.renderError})}}h([(0,n.wk)(),u("design:type",Number)],p.prototype,"providerState",void 0),h([(0,n.wk)(),u("design:type",String)],p.prototype,"direction",void 0)},4425:(e,t,i)=>{i.d(t,{U:()=>o});const o=new class{constructor(){this._disambiguation=""}get defaultPrefix(){return"mgt"}withDisambiguation(e){return e&&!this._disambiguation&&(this._disambiguation=e.toLowerCase(),e!==this._disambiguation&&console.warn(`🦒: Disambiguation value, ${e}, should be lowercase. Value has been converted to lowercase, ${this._disambiguation}.`)),this}get prefix(){return this._disambiguation?`${this.defaultPrefix}-${this._disambiguation}`:this.defaultPrefix}get disambiguation(){return this._disambiguation}get isDisambiguated(){return Boolean(this._disambiguation)}normalize(e){return this.isDisambiguated?e.toUpperCase().replace(this.prefix.toUpperCase(),this.defaultPrefix.toUpperCase()):e}}},5292:(e,t,i)=>{i.d(t,{N:()=>c});var o=i(3511),s=i(7573),n=i(2368);class r{static renderTemplate(e,t,i){var o;let s;if(t.$parentTemplateContext&&(i=Object.assign(Object.assign({},i),{$parent:t.$parentTemplateContext})),null===(o=t.content)||void 0===o?void 0:o.childNodes.length){const o=t.content.cloneNode(!0);s=this.renderNode(o,e,i)}else if(t.childNodes.length){const o=document.createElement("div");for(const e of t.childNodes)o.appendChild(this.simpleCloneNode(e));s=this.renderNode(o,e,i)}s&&e.appendChild(s)}static setBindingSyntax(e,t){this._startExpression=e,this._endExpression=t;const i=this.escapeRegex(this._startExpression),o=this.escapeRegex(this._endExpression);this._expression=new RegExp(`${i}\\s*([$\\w\\.,'"\\s()\\[\\]]+)\\s*${o}`,"g")}static get globalContext(){return this._globalContext}static get expression(){return this._expression||this.setBindingSyntax("{{","}}"),this._expression}static escapeRegex(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}static simpleCloneNode(e){if(!e)return null;const t=e.cloneNode(!1);for(const i of e.childNodes){const e=this.simpleCloneNode(i);e&&t.appendChild(e)}return t}static expandExpressionsAsString(e,t){return e.replace(this.expression,((e,i)=>{const o=this.evalInContext(i||this.trimExpression(e),t);return o?"object"==typeof o?JSON.stringify(o):o.toString():""}))}static renderNode(e,t,i){if("#text"===e.nodeName)return e.textContent=this.expandExpressionsAsString(e.textContent,i),e;if("TEMPLATE"===e.nodeName)return e.$parentTemplateContext=i,e;const o=e;if(o.attributes)for(const e of o.attributes)if("data-props"===e.name){const s=this.trimExpression(e.value);for(const e of s.split(",")){const s=e.trim().split(":");if(2===s.length){const e=s[0].trim(),n=this.evalInContext(s[1].trim(),i);e.startsWith("@")?"function"==typeof n&&o.addEventListener(e.substring(1),(e=>n(e,i,t))):o[e]=n}}}else o.setAttribute(e.name,this.expandExpressionsAsString(e.value,i));const s=[],n=[];let r=!1;for(const o of e.childNodes){const e=o;let a=!1;if(e.dataset){let l=!1;if(e.dataset.if){const t=e.dataset.if;this.evalBoolInContext(this.trimExpression(t),i)?(e.removeAttribute("data-if"),r=!0,a=!0):(n.push(e),l=!0)}else void 0!==e.dataset.else&&(r?(n.push(e),l=!0):e.removeAttribute("data-else"));e.dataset.for&&!l?s.push(e):l||this.renderNode(o,t,i)}else this.renderNode(o,t,i);a||"#text"===o.nodeName||(r=!1)}for(const e of n)o.removeChild(e);for(const e of s){const s=e.dataset.for,n=this.trimExpression(s).split(/\s(in|of)\s/i);if(3===n.length){const s=n[0].trim(),r=n[2].trim(),a=this.evalInContext(r,i);if(Array.isArray(a)){e.removeAttribute("data-for");for(let n=0;n<a.length;n++){const r=Object.assign({$index:n},i);r[s]=a[n];const l=e.cloneNode(!0);this.renderNode(l,t,r),o.insertBefore(l,e)}}o.removeChild(e)}}return e}static evalBoolInContext(e,t){return t=Object.assign(Object.assign({},t),this.globalContext),new Function("with(this) { return !!("+e+")}").call(t)}static evalInContext(e,t){t=Object.assign(Object.assign({},t),this.globalContext);const i=new Function("with(this) { return "+e+";}");let o;try{o=i.call(t)}catch(e){}return o}static trimExpression(e){return(e=e.trim()).startsWith(this._startExpression)&&e.endsWith(this._endExpression)&&(e=(e=e.substr(this._startExpression.length,e.length-this._startExpression.length-this._endExpression.length)).trim()),e}}r._globalContext={};var a=i(1739),l=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class c extends a.S{constructor(){super(),this.templates={},this._renderedSlots=!1,this._renderedTemplates={},this._slotNamesAddedDuringRender=[],this.renderLoading=()=>this.renderTemplate("loading",null)||s.qy``,this.renderError=e=>this.hasTemplate("error")?this.renderTemplate("error",e):s.qy`
      <div class="error">
        ${e}
      </div>
    `,this.templateContext=this.templateContext||{}}update(e){this.templates=this.getTemplates(),this._slotNamesAddedDuringRender=[],super.update(e)}updated(e){super.updated(e),this.removeUnusedSlottedElements()}renderTemplate(e,t,i){if(!this.hasTemplate(e))return null;i=i||e,this._slotNamesAddedDuringRender.push(i),this._renderedSlots=!0;const o=s.qy`
      <slot name=${i}></slot>
    `,a=Object.assign(Object.assign({},t),this.templateContext);if(Object.prototype.hasOwnProperty.call(this._renderedTemplates,i)){const{context:e,slot:t}=this._renderedTemplates[i];if((0,n.a)(e,a))return o;this.removeChild(t)}const l=document.createElement("div");l.slot=i,l.dataset.generated="template",r.renderTemplate(l,this.templates[e],a),this.appendChild(l),this._renderedTemplates[i]={context:a,slot:l};const d={templateType:e,context:a,element:l};return this.fireCustomEvent("templateRendered",d),o}hasTemplate(e){var t;return Boolean(null===(t=this.templates)||void 0===t?void 0:t[e])}getTemplates(){const e={};for(let t=0;t<this.children.length;t++){const i=this.children[t];if("TEMPLATE"===i.nodeName){const o=i;o.dataset.type?e[o.dataset.type]=o:e.default=o,o.templateOrder=t}}return e}removeUnusedSlottedElements(){var e;if(this._renderedSlots){for(let t=0;t<this.children.length;t++){const i=this.children[t];(null===(e=i.dataset)||void 0===e?void 0:e.generated)&&!this._slotNamesAddedDuringRender.includes(i.slot)&&(this.removeChild(i),delete this._renderedTemplates[i.slot],t--)}this._renderedSlots=!1}}}l([(0,o.MZ)({attribute:!1}),d("design:type",Object)],c.prototype,"templateContext",void 0),l([(0,o.wk)(),d("design:type",Object)],c.prototype,"error",void 0)},3204:(e,t,i)=>{i.d(t,{DH:()=>l,HJ:()=>s});var o,s,n=i(9889),r=i(242),a=i(7872);class l{get isMultiAccountSupportedAndEnabled(){return!1}get approvedScopes(){return this._approvedScopes}set approvedScopes(e){this._approvedScopes=e.map((e=>e.toLowerCase()))}hasAtLeastOneApprovedScope(e){return e.some((e=>this.approvedScopes.includes(e.toLowerCase().trim())))}hasAllOneApprovedScope(e){return e.some((e=>!this.approvedScopes.includes(e.toLowerCase().trim())))}needsAdditionalScopes(e){const t=[];return e.length&&!this.hasAtLeastOneApprovedScope(e)&&t.push(e[0].trim()),t}set baseURL(e){if(!(0,n.N)(e))throw new Error(`${e} is not a valid Graph URL endpoint.`);this._baseURL=e}get baseURL(){return this._baseURL}set customHosts(e){this._customHosts=e}get customHosts(){return this._customHosts}get isMultiAccountSupported(){return this.isMultipleAccountSupported}get state(){return this._state}get isIncrementalConsentDisabled(){return this._isIncrementalConsentDisabled}set isIncrementalConsentDisabled(e){this._isIncrementalConsentDisabled=e}get name(){return"MgtIProvider"}constructor(){this.isMultipleAccountDisabled=!0,this._loginChangedDispatcher=new a.Q,this._activeAccountChangedDispatcher=new a.Q,this._baseURL=r.I,this._approvedScopes=[],this._customHosts=void 0,this._isIncrementalConsentDisabled=!1,this.isMultipleAccountSupported=!1,this._state=s.Loading}setState(e){e!==this._state&&(this._state=e,this._loginChangedDispatcher.fire({}))}onStateChanged(e){this._loginChangedDispatcher.add(e)}removeStateChangedHandler(e){this._loginChangedDispatcher.remove(e)}setActiveAccount(e){this.fireActiveAccountChanged()}onActiveAccountChanged(e){this._activeAccountChangedDispatcher.add(e)}removeActiveAccountChangedHandler(e){this._activeAccountChangedDispatcher.remove(e)}fireActiveAccountChanged(){this._activeAccountChangedDispatcher.fire({})}getAccessTokenForScopes(...e){return this.getAccessToken({scopes:e})}}!function(e){e[e.Popup=0]="Popup",e[e.Redirect=1]="Redirect"}(o||(o={})),function(e){e[e.Loading=0]="Loading",e[e.SignedOut=1]="SignedOut",e[e.SignedIn=2]="SignedIn"}(s||(s={}))},5468:(e,t,i)=>{i.d(t,{b:()=>a});var o,s=i(7872),n=i(3204),r=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};class a{static get globalProvider(){return this._globalProvider}static set globalProvider(e){e!==this._globalProvider&&(this._globalProvider&&(this._globalProvider.removeStateChangedHandler(this.handleProviderStateChanged),this._globalProvider.isMultiAccountSupportedAndEnabled&&this._globalProvider.removeActiveAccountChangedHandler(this.handleActiveAccountChanged)),e&&(e.onStateChanged(this.handleProviderStateChanged),e.isMultiAccountSupportedAndEnabled&&e.onActiveAccountChanged(this.handleActiveAccountChanged)),this._globalProvider=e,this._eventDispatcher.fire(o.ProviderChanged))}static onProviderUpdated(e){this._eventDispatcher.add(e)}static removeProviderUpdatedListener(e){this._eventDispatcher.remove(e)}static onActiveAccountChanged(e){this._activeAccountChangedDispatcher.add(e)}static removeActiveAccountChangedListener(e){this._activeAccountChangedDispatcher.remove(e)}static me(){return this.client?(this._mePromise||(this._mePromise=this.getMe()),this._mePromise):(this._mePromise=null,null)}static getMe(){return r(this,void 0,void 0,(function*(){try{const e=yield this.client.api("me").get();if(null==e?void 0:e.id)return e}catch(e){}return null}))}static getCacheId(){var e;return r(this,void 0,void 0,(function*(){if(this._cacheId)return this._cacheId;if((null===(e=a.globalProvider)||void 0===e?void 0:e.state)===n.HJ.SignedIn&&!this._cacheId&&this.client)try{this._cacheId=yield this.createCacheId()}catch(e){}return this._cacheId}))}static unsetCacheId(){this._cacheId=null,this._mePromise=null}static createCacheId(){return r(this,void 0,void 0,(function*(){if(a.globalProvider.isMultiAccountSupportedAndEnabled){const e=this.createCacheIdWithAccountDetails();if(e)return e}return yield this.createCacheIdWithUserDetails()}))}static createCacheIdWithUserDetails(){return r(this,void 0,void 0,(function*(){const e=yield this.me();return(null==e?void 0:e.id)?e.id+"-"+e.userPrincipalName:null}))}static createCacheIdWithAccountDetails(){const e=a.globalProvider.getActiveAccount();return e.tenantId&&e.id?e.tenantId+e.id:null}static get client(){return a.globalProvider&&a.globalProvider.state===n.HJ.SignedIn?a.globalProvider.graph.client:null}}a._eventDispatcher=new s.Q,a._activeAccountChangedDispatcher=new s.Q,a.handleProviderStateChanged=()=>{a.globalProvider&&a.globalProvider.state===n.HJ.SignedIn||(a._mePromise=null),a._eventDispatcher.fire(o.ProviderStateChanged)},a.handleActiveAccountChanged=()=>{a.unsetCacheId(),a._activeAccountChangedDispatcher.fire(null)},function(e){e[e.ProviderChanged=0]="ProviderChanged",e[e.ProviderStateChanged=1]="ProviderStateChanged"}(o||(o={}))},5232:(e,t,i)=>{i.d(t,{_:()=>D});var o=i(5468),s=i(3204);const n=(e,t)=>t.some((t=>e instanceof t));let r,a;const l=new WeakMap,d=new WeakMap,c=new WeakMap;let h={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return g(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function u(e){h=e(h)}function p(e){return"function"==typeof e?(t=e,(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(f(this),e),g(this.request)}:function(...e){return g(t.apply(f(this),e))}):(e instanceof IDBTransaction&&function(e){if(l.has(e))return;const t=new Promise(((t,i)=>{const o=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",n),e.removeEventListener("abort",n)},s=()=>{t(),o()},n=()=>{i(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",s),e.addEventListener("error",n),e.addEventListener("abort",n)}));l.set(e,t)}(e),n(e,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,h):e);var t}function g(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,i)=>{const o=()=>{e.removeEventListener("success",s),e.removeEventListener("error",n)},s=()=>{t(g(e.result)),o()},n=()=>{i(e.error),o()};e.addEventListener("success",s),e.addEventListener("error",n)}));return c.set(t,e),t}(e);if(d.has(e))return d.get(e);const t=p(e);return t!==e&&(d.set(e,t),c.set(t,e)),t}const f=e=>c.get(e),v=["get","getKey","getAll","getAllKeys","count"],m=["put","add","delete","clear"],b=new Map;function y(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(b.get(t))return b.get(t);const i=t.replace(/FromIndex$/,""),o=t!==i,s=m.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!s&&!v.includes(i))return;const n=async function(e,...t){const n=this.transaction(e,s?"readwrite":"readonly");let r=n.store;return o&&(r=r.index(t.shift())),(await Promise.all([r[i](...t),s&&n.done]))[0]};return b.set(t,n),n}u((e=>({...e,get:(t,i,o)=>y(t,i)||e.get(t,i,o),has:(t,i)=>!!y(t,i)||e.has(t,i)})));const w=["continue","continuePrimaryKey","advance"],x={},k=new WeakMap,C=new WeakMap,$={get(e,t){if(!w.includes(t))return e[t];let i=x[t];return i||(i=x[t]=function(...e){k.set(this,C.get(this)[t](...e))}),i}};async function*S(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;const i=new Proxy(t,$);for(C.set(i,t),c.set(i,f(t));t;)yield i,t=await(k.get(i)||t.continue()),k.delete(i)}function _(e,t){return t===Symbol.asyncIterator&&n(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&n(e,[IDBIndex,IDBObjectStore])}u((e=>({...e,get:(t,i,o)=>_(t,i)?S:e.get(t,i,o),has:(t,i)=>_(t,i)||e.has(t,i)})));const I="mgt-db-list";var A=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};class T{constructor(e,t){if(!(t in e.stores))throw Error('"store" must be defined in the "schema"');this.schema=e,this.store=t}getValue(e){return A(this,void 0,void 0,(function*(){if(!window.indexedDB)return null;try{return(yield this.getDb()).get(this.store,e)}catch(e){return null}}))}putValue(e,t){return A(this,void 0,void 0,(function*(){if(window.indexedDB)try{yield(yield this.getDb()).put(this.store,Object.assign(Object.assign({},t),{timeCached:Date.now()}),e)}catch(e){return}}))}clearStore(){return A(this,void 0,void 0,(function*(){if(window.indexedDB)try{yield(yield this.getDb()).clear(this.store)}catch(e){return}}))}getDBName(){return A(this,void 0,void 0,(function*(){const e=yield o.b.getCacheId();if(e)return`mgt-${this.schema.name}-${e}`}))}getDb(){return A(this,void 0,void 0,(function*(){const e=yield this.getDBName();if(e)return function(e,t,{blocked:i,upgrade:o,blocking:s,terminated:n}={}){const r=indexedDB.open(e,t),a=g(r);return o&&r.addEventListener("upgradeneeded",(e=>{o(g(r.result),e.oldVersion,e.newVersion,g(r.transaction),e)})),i&&r.addEventListener("blocked",(e=>i(e.oldVersion,e.newVersion,e))),a.then((e=>{n&&e.addEventListener("close",(()=>n())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(e,this.schema.version,{upgrade:(t,i,o,s)=>{const n=JSON.parse(localStorage.getItem(I))||[];n.includes(e)||n.push(e),localStorage.setItem(I,JSON.stringify(n));for(const e in this.schema.stores)Object.prototype.hasOwnProperty.call(this.schema.stores,e)&&!t.objectStoreNames.contains(e)&&t.createObjectStore(e)}})}))}}class D{static getCache(e,t){const i=`${e.name}/${t}`;return this.isInitialized||this.init(),this.cacheStore.has(t)||this.cacheStore.set(i,new T(e,t)),this.cacheStore.get(i)}static clearCacheById(e){const t=[],i=JSON.parse(localStorage.getItem(I));if(i){const o=[];i.forEach((i=>{i.includes(e)?t.push(new Promise(((e,t)=>{const o=indexedDB.deleteDatabase(i);o.onsuccess=()=>e(),o.onerror=()=>{console.error(`🦒: ${o.error.name} occurred deleting cache: ${i}`,o.error.message),t()}}))):o.push(i)})),o.length>0?localStorage.setItem(I,JSON.stringify(o)):localStorage.removeItem(I)}return Promise.all(t)}static get config(){return this.cacheConfig}static init(){let e;o.b.globalProvider&&(e=o.b.globalProvider.state),o.b.onProviderUpdated((()=>{return t=this,i=void 0,r=function*(){if(e===s.HJ.SignedIn&&o.b.globalProvider.state===s.HJ.SignedOut){const e=yield o.b.getCacheId();null!==e&&(yield this.clearCacheById(e))}e=o.b.globalProvider.state},new((n=void 0)||(n=Promise))((function(e,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(s,a)}l((r=r.apply(t,i||[])).next())}));var t,i,n,r})),this.isInitialized=!0}}D.cacheStore=new Map,D.isInitialized=!1,D.cacheConfig={defaultInvalidationPeriod:36e5,groups:{invalidationPeriod:null,isEnabled:!0},isEnabled:!0,people:{invalidationPeriod:null,isEnabled:!0},photos:{invalidationPeriod:null,isEnabled:!0},presence:{invalidationPeriod:3e5,isEnabled:!0},users:{invalidationPeriod:null,isEnabled:!0},response:{invalidationPeriod:null,isEnabled:!0},files:{invalidationPeriod:null,isEnabled:!0},fileLists:{invalidationPeriod:null,isEnabled:!0}}},7872:(e,t,i)=>{i.d(t,{Q:()=>o});class o{constructor(){this.eventHandlers=[]}fire(e){for(const t of this.eventHandlers)t(e)}add(e){this.eventHandlers.push(e)}remove(e){for(let t=0;t<this.eventHandlers.length;t++)this.eventHandlers[t]===e&&(this.eventHandlers.splice(t,1),t--)}}},4980:(e,t,i)=>{i.d(t,{E:()=>s});var o=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};class s{get value(){return this._value}get hasNext(){return Boolean(this._nextLink)}static create(e,t,i){return o(this,void 0,void 0,(function*(){const o=yield t.get();if(null==o?void 0:o.value){const t=new s;return t._graph=e,t._value=o.value,t._nextLink=o["@odata.nextLink"],t._version=i||e.version,t}return null}))}static createFromValue(e,t,i=null){const o=new s;return o._graph=e,o._value=t,o._nextLink=i,o._version=e.version,o}get nextLink(){return this._nextLink||""}next(){var e;return o(this,void 0,void 0,(function*(){if(this._nextLink){const t=this._nextLink.split(this._version)[1],i=yield this._graph.api(t).version(this._version).get();if(null===(e=null==i?void 0:i.value)||void 0===e?void 0:e.length)return this._value=this._value.concat(i.value),this._nextLink=i["@odata.nextLink"],i.value}return null}))}}},5876:(e,t,i)=>{i.d(t,{w:()=>s});var o=i(7872);class s{static get strings(){return this._strings}static set strings(e){this._strings=e,this._stringsEventDispatcher.fire(null)}static getDocumentDirection(){var e,t;switch((null===(e=document.body)||void 0===e?void 0:e.getAttribute("dir"))||(null===(t=document.documentElement)||void 0===t?void 0:t.getAttribute("dir"))){case"rtl":return"rtl";case"auto":return"auto";default:return"ltr"}}static onStringsUpdated(e){this._stringsEventDispatcher.add(e)}static removeOnStringsUpdated(e){this._stringsEventDispatcher.remove(e)}static onDirectionUpdated(e){this._directionEventDispatcher.add(e),this.initDirection()}static removeOnDirectionUpdated(e){this._directionEventDispatcher.remove(e)}static initDirection(){if(this._isDirectionInit)return;this._isDirectionInit=!0,this.mutationObserver=new MutationObserver((e=>{e.forEach((e=>{"dir"===e.attributeName&&this._directionEventDispatcher.fire(null)}))}));const e={attributes:!0,attributeFilter:["dir"]};this.mutationObserver.observe(document.body,e),this.mutationObserver.observe(document.documentElement,e)}static updateStringsForTag(e,t){var i;if((e=e.toLowerCase()).startsWith("mgt-")&&(e=e.substring(4)),this._strings&&t){for(const e of Object.entries(t)){const i=this._strings[e[0]];"string"==typeof i&&(t[e[0]]=i)}if(null===(i=this._strings._components)||void 0===i?void 0:i[e]){const i=this._strings._components[e];for(const e of Object.keys(i))t[e]&&(t[e]=i[e])}}return t}}s._stringsEventDispatcher=new o.Q,s._directionEventDispatcher=new o.Q,s._isDirectionInit=!1},2368:(e,t,i)=>{i.d(t,{V:()=>n,a:()=>o});const o=(e,t)=>s(e,t,new Set),s=(e,t,i)=>{const o=Object.prototype.toString.call(e),n=Object.prototype.toString.call(t);if("object"==typeof e&&"object"==typeof t&&o===n&&"[object Object]"===o&&!i.has(e)){i.add(e);for(const o in e)if(!s(e[o],t[o],i))return!1;for(const i in t)if(!Object.prototype.hasOwnProperty.call(e,i))return!1;return!0}if(Array.isArray(e)&&Array.isArray(t)&&!i.has(e)){if(i.add(e),e.length!==t.length)return!1;for(let o=0;o<e.length;o++)if(!s(e[o],t[o],i))return!1;return!0}return e===t},n=(e,t)=>{if(e===t)return!0;if(!e||!t)return!1;if(e.length!==t.length)return!1;if(0===e.length)return!0;const i=new Set(e);for(const e of t)if(!i.has(e))return!1;return!0}},6172:(e,t,i)=>{i.d(t,{Q:()=>a});var o=i(7573),s=i(4425);const n=new WeakMap,r=(e,t,i)=>{const o=[];for(const s of e)o.push(s.replace(t,i));return o},a=(e,...t)=>{if(s.U.isDisambiguated){let t=n.get(e);if(!t){const i=new RegExp("(</?)mgt-(?!"+s.U.disambiguation+"-)"),o=`$1${s.U.prefix}-`;t=Object.assign(r(e,i,o),{raw:r(e.raw,i,o)}),n.set(e,t)}e=t}return(0,o.qy)(e,...t)}},2783:(e,t,i)=>{i.d(t,{F:()=>n});var o=i(5076),s=i(5468);const n=(e,t=s.b.globalProvider)=>{const i={scopes:t.needsAdditionalScopes(e)};return t.isIncrementalConsentDisabled?[]:[new o.Ts(void 0,i)]}},5045:(e,t,i)=>{i.d(t,{F:()=>s,N:()=>n});var o=i(4425);const s=e=>`${o.U.prefix}-${e}`,n=(e,t,i)=>{const o=s(e);customElements.get(o)||customElements.define(o,t,i)}},9889:(e,t,i)=>{i.d(t,{N:()=>s});var o=i(242);const s=e=>{try{const t=new URL(e).origin;if(o.z.has(t))return t}catch(e){return}}},1933:(e,t,i)=>{i.d(t,{i:()=>o});const o="4.2.3"},5076:(e,t,i)=>{i.d(t,{Ts:()=>C,Tz:()=>n,Kj:()=>U,eg:()=>_,yl:()=>b,Z$:()=>A,Rz:()=>I,MD:()=>F});var o,s=i(1635);!function(e){e.GET="GET",e.PATCH="PATCH",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE"}(o||(o={}));class n{constructor(e){if(this.requests=new Map,void 0!==e){const t=n.requestLimit;if(e.length>t){const e=new Error(`Maximum requests limit exceeded, Max allowed number of requests are ${t}`);throw e.name="Limit Exceeded Error",e}for(const t of e)this.addRequest(t)}}static validateDependencies(e){if(0===e.size){const e=new Error("Empty requests map, Please provide at least one request.");throw e.name="Empty Requests Error",e}return(e=>{const t=e.entries();let i=t.next();for(;!i.done;){const e=i.value[1];if(void 0!==e.dependsOn&&e.dependsOn.length>0)return!1;i=t.next()}return!0})(e)||(e=>{const t=e.entries();let i=t.next();const o=i.value[1];if(void 0!==o.dependsOn&&o.dependsOn.length>0)return!1;let s=i;for(i=t.next();!i.done;){const e=i.value[1];if(void 0===e.dependsOn||1!==e.dependsOn.length||e.dependsOn[0]!==s.value[1].id)return!1;s=i,i=t.next()}return!0})(e)||(e=>{const t=e.entries();let i=t.next();const o=i.value[1];let s;if(void 0===o.dependsOn||0===o.dependsOn.length)s=o.id;else{if(1!==o.dependsOn.length)return!1;{const t=o.dependsOn[0];if(t===o.id||!e.has(t))return!1;s=t}}for(i=t.next();!i.done;){const e=i.value[1];if((void 0===e.dependsOn||0===e.dependsOn.length)&&s!==e.id)return!1;if(void 0!==e.dependsOn&&0!==e.dependsOn.length){if(1===e.dependsOn.length&&(e.id===s||e.dependsOn[0]!==s))return!1;if(e.dependsOn.length>1)return!1}i=t.next()}return!0})(e)}static getRequestData(e){return(0,s.sH)(this,void 0,void 0,(function*(){const t={url:""},i=new RegExp("^https?://");t.url=i.test(e.url)?"/"+e.url.split(/.*?\/\/.*?\//)[1]:e.url,t.method=e.method;const s={};return e.headers.forEach(((e,t)=>{s[t]=e})),Object.keys(s).length&&(t.headers=s),e.method!==o.PATCH&&e.method!==o.POST&&e.method!==o.PUT||(t.body=yield n.getRequestBody(e)),t}))}static getRequestBody(e){return(0,s.sH)(this,void 0,void 0,(function*(){let t,i=!1;try{const o=e.clone();t=yield o.json(),i=!0}catch(e){}if(!i)try{if("undefined"!=typeof Blob){const i=yield e.blob(),o=new FileReader;t=yield new Promise((e=>{o.addEventListener("load",(()=>{const t=o.result,i=new RegExp("^s*data:(.+?/.+?(;.+?=.+?)*)?(;base64)?,(.*)s*$").exec(t);e(i[4])}),!1),o.readAsDataURL(i)}))}else"undefined"!=typeof Buffer&&(t=(yield e.buffer()).toString("base64"));i=!0}catch(e){}return t}))}addRequest(e){const t=n.requestLimit;if(""===e.id){const e=new Error("Id for a request is empty, Please provide an unique id");throw e.name="Empty Id For Request",e}if(this.requests.size===t){const e=new Error(`Maximum requests limit exceeded, Max allowed number of requests are ${t}`);throw e.name="Limit Exceeded Error",e}if(this.requests.has(e.id)){const t=new Error(`Adding request with duplicate id ${e.id}, Make the id of the requests unique`);throw t.name="Duplicate RequestId Error",t}return this.requests.set(e.id,e),e.id}removeRequest(e){const t=this.requests.delete(e),i=this.requests.entries();let o=i.next();for(;!o.done;){const t=o.value[1].dependsOn;if(void 0!==t){const i=t.indexOf(e);-1!==i&&t.splice(i,1),0===t.length&&delete o.value[1].dependsOn}o=i.next()}return t}getContent(){return(0,s.sH)(this,void 0,void 0,(function*(){const e=[],t={requests:e},i=this.requests.entries();let o=i.next();if(o.done){const e=new Error("No requests added yet, Please add at least one request.");throw e.name="Empty Payload",e}if(!n.validateDependencies(this.requests)){const e=new Error("Invalid dependency found, Dependency should be:\n1. Parallel - no individual request states a dependency in the dependsOn property.\n2. Serial - all individual requests depend on the previous individual request.\n3. Same - all individual requests that state a dependency in the dependsOn property, state the same dependency.");throw e.name="Invalid Dependency",e}for(;!o.done;){const t=o.value[1],s=yield n.getRequestData(t.request);if(void 0!==s.body&&(void 0===s.headers||void 0===s.headers["content-type"])){const e=new Error(`Content-type header is not mentioned for request #${t.id}, For request having body, Content-type header should be mentioned`);throw e.name="Invalid Content-type header",e}s.id=t.id,void 0!==t.dependsOn&&t.dependsOn.length>0&&(s.dependsOn=t.dependsOn),e.push(s),o=i.next()}return t.requests=e,t}))}addDependency(e,t){if(!this.requests.has(e)){const t=new Error(`Dependent ${e} does not exists, Please check the id`);throw t.name="Invalid Dependent",t}if(void 0!==t&&!this.requests.has(t)){const e=new Error(`Dependency ${t} does not exists, Please check the id`);throw e.name="Invalid Dependency",e}if(void 0!==t){const i=this.requests.get(e);if(void 0===i.dependsOn&&(i.dependsOn=[]),-1!==i.dependsOn.indexOf(t)){const i=new Error(`Dependency ${t} is already added for the request ${e}`);throw i.name="Duplicate Dependency",i}i.dependsOn.push(t)}else{const i=this.requests.entries();let o,s=i.next();for(;!s.done&&s.value[1].id!==e;)o=s,s=i.next();if(void 0===o){const e=new Error(`Can't add dependency ${t}, There is only a dependent request in the batch`);throw e.name="Invalid Dependency Addition",e}{const t=o.value[0];if(void 0===s.value[1].dependsOn&&(s.value[1].dependsOn=[]),-1!==s.value[1].dependsOn.indexOf(t)){const i=new Error(`Dependency ${t} is already added for the request ${e}`);throw i.name="Duplicate Dependency",i}s.value[1].dependsOn.push(t)}}}removeDependency(e,t){const i=this.requests.get(e);if(void 0===i||void 0===i.dependsOn||0===i.dependsOn.length)return!1;if(void 0!==t){const e=i.dependsOn.indexOf(t);return-1!==e&&(i.dependsOn.splice(e,1),!0)}return delete i.dependsOn,!0}}n.requestLimit=20;const r=new Set(["graph.microsoft.com","graph.microsoft.us","dod-graph.microsoft.us","graph.microsoft.de","microsoftgraph.chinacloudapi.cn","canary.graph.microsoft.com"]);class a extends Error{constructor(e){super(e),Object.setPrototypeOf(this,a.prototype)}static setGraphClientError(e){let t;return e instanceof Error?t=e:(t=new a,t.customError=e),t}}const l=["$select","$expand","$orderby","$filter","$top","$skip","$skipToken","$count"],d=e=>{const t=e&&e.constructor&&e.constructor.name;if("Buffer"===t||"Blob"===t||"File"===t||"FormData"===t||"string"==typeof e)return e;if("ArrayBuffer"===t)e=Buffer.from(e);else if("Int8Array"===t||"Int16Array"===t||"Int32Array"===t||"Uint8Array"===t||"Uint16Array"===t||"Uint32Array"===t||"Uint8ClampedArray"===t||"Float32Array"===t||"Float64Array"===t||"DataView"===t)e=Buffer.from(e.buffer);else try{e=JSON.stringify(e)}catch(e){throw new Error("Unable to stringify the content")}return e},c=e=>u(e),h=(e,t)=>(t.forEach((e=>p(e))),u(e,t)),u=(e,t=r)=>{if(-1!==(e=e.toLowerCase()).indexOf("https://")){const i=(e=e.replace("https://","")).indexOf(":"),o=e.indexOf("/");let s="";if(-1!==o)return-1!==i&&i<o?(s=e.substring(0,i),t.has(s)):(s=e.substring(0,o),t.has(s))}return!1},p=e=>{if(-1!==e.indexOf("/"))throw new a("Please add only hosts or hostnames to the CustomHosts config. If the url is `http://example.com:3000/`, host is `example:3000`")};class g{constructor(e=[]){this.middlewareOptions=new Map;for(const t of e){const e=t.constructor;this.middlewareOptions.set(e,t)}}getMiddlewareOptions(e){return this.middlewareOptions.get(e)}setMiddlewareOptions(e,t){this.middlewareOptions.set(e,t)}}var f,v,m,b,y,w,x,k=i(5100);class C{constructor(e,t){this.authenticationProvider=e,this.authenticationProviderOptions=t}}!function(e){e[e.NONE=0]="NONE",e[e.REDIRECT_HANDLER_ENABLED=1]="REDIRECT_HANDLER_ENABLED",e[e.RETRY_HANDLER_ENABLED=2]="RETRY_HANDLER_ENABLED",e[e.AUTHENTICATION_HANDLER_ENABLED=4]="AUTHENTICATION_HANDLER_ENABLED"}(f||(f={}));class ${constructor(){this.featureUsage=f.NONE}static updateFeatureUsageFlag(e,t){let i;e.middlewareControl instanceof g?i=e.middlewareControl.getMiddlewareOptions($):e.middlewareControl=new g,void 0===i&&(i=new $,e.middlewareControl.setMiddlewareOptions($,i)),i.setFeatureUsage(t)}setFeatureUsage(e){this.featureUsage=this.featureUsage|e}getFeatureUsage(){return this.featureUsage.toString(16)}}class S{constructor(e){this.authenticationProvider=e}execute(e){return(0,s.sH)(this,void 0,void 0,(function*(){const t="string"==typeof e.request?e.request:e.request.url;if(c(t)||e.customHosts&&h(t,e.customHosts)){let t,i,o;e.middlewareControl instanceof g&&(t=e.middlewareControl.getMiddlewareOptions(C)),t&&(i=t.authenticationProvider,o=t.authenticationProviderOptions),i||(i=this.authenticationProvider);const s=`Bearer ${yield i.getAccessToken(o)}`;(0,k.Vr)(e.request,e.options,S.AUTHORIZATION_HEADER,s),$.updateFeatureUsageFlag(e,f.AUTHENTICATION_HANDLER_ENABLED)}else e.options.headers&&delete e.options.headers[S.AUTHORIZATION_HEADER];return yield this.nextMiddleware.execute(e)}))}setNext(e){this.nextMiddleware=e}}S.AUTHORIZATION_HEADER="Authorization";class _{execute(e){return(0,s.sH)(this,void 0,void 0,(function*(){e.response=yield fetch(e.request,e.options)}))}}class I{constructor(e=I.DEFAULT_DELAY,t=I.DEFAULT_MAX_RETRIES,i=I.defaultShouldRetry){if(e>I.MAX_DELAY&&t>I.MAX_MAX_RETRIES){const e=new Error(`Delay and MaxRetries should not be more than ${I.MAX_DELAY} and ${I.MAX_MAX_RETRIES}`);throw e.name="MaxLimitExceeded",e}if(e>I.MAX_DELAY){const e=new Error(`Delay should not be more than ${I.MAX_DELAY}`);throw e.name="MaxLimitExceeded",e}if(t>I.MAX_MAX_RETRIES){const e=new Error(`MaxRetries should not be more than ${I.MAX_MAX_RETRIES}`);throw e.name="MaxLimitExceeded",e}if(e<0&&t<0){const e=new Error("Delay and MaxRetries should not be negative");throw e.name="MinExpectationNotMet",e}if(e<0){const e=new Error("Delay should not be negative");throw e.name="MinExpectationNotMet",e}if(t<0){const e=new Error("MaxRetries should not be negative");throw e.name="MinExpectationNotMet",e}this.delay=Math.min(e,I.MAX_DELAY),this.maxRetries=Math.min(t,I.MAX_MAX_RETRIES),this.shouldRetry=i}getMaxDelay(){return I.MAX_DELAY}}I.DEFAULT_DELAY=3,I.DEFAULT_MAX_RETRIES=3,I.MAX_DELAY=180,I.MAX_MAX_RETRIES=10,I.defaultShouldRetry=()=>!0;class A{constructor(e=new I){this.options=e}isRetry(e){return-1!==A.RETRY_STATUS_CODES.indexOf(e.status)}isBuffered(e,t){const i="string"==typeof e?t.method:e.method;return i!==o.PUT&&i!==o.PATCH&&i!==o.POST||"application/octet-stream"!==(0,k.XH)(e,t,"Content-Type")}getDelay(e,t,i){const o=()=>Number(Math.random().toFixed(3)),s=void 0!==e.headers?e.headers.get(A.RETRY_AFTER_HEADER):null;let n;return n=null!==s?Number.isNaN(Number(s))?Math.round((new Date(s).getTime()-Date.now())/1e3):Number(s):t>=2?this.getExponentialBackOffTime(t)+i+o():i+o(),Math.min(n,this.options.getMaxDelay()+o())}getExponentialBackOffTime(e){return Math.round(.5*(Math.pow(2,e)-1))}sleep(e){return(0,s.sH)(this,void 0,void 0,(function*(){const t=1e3*e;return new Promise((e=>setTimeout(e,t)))}))}getOptions(e){let t;return e.middlewareControl instanceof g&&(t=e.middlewareControl.getMiddlewareOptions(this.options.constructor)),void 0===t&&(t=Object.assign(new I,this.options)),t}executeWithRetry(e,t,i){return(0,s.sH)(this,void 0,void 0,(function*(){if(yield this.nextMiddleware.execute(e),t<i.maxRetries&&this.isRetry(e.response)&&this.isBuffered(e.request,e.options)&&i.shouldRetry(i.delay,t,e.request,e.options,e.response)){++t,(0,k.RO)(e.request,e.options,A.RETRY_ATTEMPT_HEADER,t.toString());const o=this.getDelay(e.response,t,i.delay);return yield this.sleep(o),yield this.executeWithRetry(e,t,i)}}))}execute(e){return(0,s.sH)(this,void 0,void 0,(function*(){const t=this.getOptions(e);return $.updateFeatureUsageFlag(e,f.RETRY_HANDLER_ENABLED),yield this.executeWithRetry(e,0,t)}))}setNext(e){this.nextMiddleware=e}}A.RETRY_STATUS_CODES=[429,503,504],A.RETRY_ATTEMPT_HEADER="Retry-Attempt",A.RETRY_AFTER_HEADER="Retry-After";class T{constructor(e=T.DEFAULT_MAX_REDIRECTS,t=T.defaultShouldRedirect){if(e>T.MAX_MAX_REDIRECTS){const e=new Error(`MaxRedirects should not be more than ${T.MAX_MAX_REDIRECTS}`);throw e.name="MaxLimitExceeded",e}if(e<0){const e=new Error("MaxRedirects should not be negative");throw e.name="MinExpectationNotMet",e}this.maxRedirects=e,this.shouldRedirect=t}}T.DEFAULT_MAX_REDIRECTS=5,T.MAX_MAX_REDIRECTS=20,T.defaultShouldRedirect=()=>!0;class D{constructor(e=new T){this.options=e}isRedirect(e){return-1!==D.REDIRECT_STATUS_CODES.indexOf(e.status)}hasLocationHeader(e){return e.headers.has(D.LOCATION_HEADER)}getLocationHeader(e){return e.headers.get(D.LOCATION_HEADER)}isRelativeURL(e){return-1===e.indexOf("://")}shouldDropAuthorizationHeader(e,t){const i=/^[A-Za-z].+?:\/\/.+?(?=\/|$)/,o=i.exec(e);let s,n;null!==o&&(s=o[0]);const r=i.exec(t);return null!==r&&(n=r[0]),void 0!==s&&void 0!==n&&s!==n}updateRequestUrl(e,t){return(0,s.sH)(this,void 0,void 0,(function*(){t.request="string"==typeof t.request?e:yield(0,k.o7)(e,t.request)}))}getOptions(e){let t;return e.middlewareControl instanceof g&&(t=e.middlewareControl.getMiddlewareOptions(T)),void 0===t&&(t=Object.assign(new T,this.options)),t}executeWithRedirect(e,t,i){return(0,s.sH)(this,void 0,void 0,(function*(){yield this.nextMiddleware.execute(e);const s=e.response;if(t<i.maxRedirects&&this.isRedirect(s)&&this.hasLocationHeader(s)&&i.shouldRedirect(s)){if(++t,s.status===D.STATUS_CODE_SEE_OTHER)e.options.method=o.GET,delete e.options.body;else{const t=this.getLocationHeader(s);!this.isRelativeURL(t)&&this.shouldDropAuthorizationHeader(s.url,t)&&delete e.options.headers[D.AUTHORIZATION_HEADER],yield this.updateRequestUrl(t,e)}yield this.executeWithRedirect(e,t,i)}}))}execute(e){return(0,s.sH)(this,void 0,void 0,(function*(){const t=this.getOptions(e);return e.options.redirect=D.MANUAL_REDIRECT,$.updateFeatureUsageFlag(e,f.REDIRECT_HANDLER_ENABLED),yield this.executeWithRedirect(e,0,t)}))}setNext(e){this.nextMiddleware=e}}D.REDIRECT_STATUS_CODES=[301,302,303,307,308],D.STATUS_CODE_SEE_OTHER=303,D.LOCATION_HEADER="Location",D.AUTHORIZATION_HEADER="Authorization",D.MANUAL_REDIRECT="manual";class F{execute(e){return(0,s.sH)(this,void 0,void 0,(function*(){const t="string"==typeof e.request?e.request:e.request.url;if(c(t)||e.customHosts&&h(t,e.customHosts)){let t=(0,k.XH)(e.request,e.options,F.CLIENT_REQUEST_ID_HEADER);t||(t=(0,k.lk)(),(0,k.RO)(e.request,e.options,F.CLIENT_REQUEST_ID_HEADER,t));let i,o=`${F.PRODUCT_NAME}/3.0.2`;if(e.middlewareControl instanceof g&&(i=e.middlewareControl.getMiddlewareOptions($)),i){const e=i.getFeatureUsage();o+=` (${F.FEATURE_USAGE_STRING}=${e})`}(0,k.Vr)(e.request,e.options,F.SDK_VERSION_HEADER,o)}else delete e.options.headers[F.CLIENT_REQUEST_ID_HEADER],delete e.options.headers[F.SDK_VERSION_HEADER];return yield this.nextMiddleware.execute(e)}))}setNext(e){this.nextMiddleware=e}}F.CLIENT_REQUEST_ID_HEADER="client-request-id",F.SDK_VERSION_HEADER="SdkVersion",F.PRODUCT_NAME="graph-js",F.FEATURE_USAGE_STRING="featureUsage",(m=v||(v={}))[m.MANUAL=0]="MANUAL",m[m.RANDOM=1]="RANDOM",function(e){e.ARRAYBUFFER="arraybuffer",e.BLOB="blob",e.DOCUMENT="document",e.JSON="json",e.RAW="raw",e.STREAM="stream",e.TEXT="text"}(b||(b={})),function(e){e.TEXT_HTML="text/html",e.TEXT_XML="text/xml",e.APPLICATION_XML="application/xml",e.APPLICATION_XHTML="application/xhtml+xml"}(y||(y={})),function(e){e.TEXT_PLAIN="text/plain",e.APPLICATION_JSON="application/json"}(w||(w={})),function(e){e.DOCUMENT="^(text\\/(html|xml))|(application\\/(xml|xhtml\\+xml))$",e.IMAGE="^image\\/.+"}(x||(x={}));class P{static parseDocumentResponse(e,t){return"undefined"!=typeof DOMParser?new Promise(((i,o)=>{e.text().then((e=>{try{const o=(new DOMParser).parseFromString(e,t);i(o)}catch(e){o(e)}}))})):Promise.resolve(e.body)}static convertResponse(e,t){return(0,s.sH)(this,void 0,void 0,(function*(){if(204===e.status)return Promise.resolve();let i;const o=e.headers.get("Content-type");switch(t){case b.ARRAYBUFFER:i=yield e.arrayBuffer();break;case b.BLOB:i=yield e.blob();break;case b.DOCUMENT:i=yield P.parseDocumentResponse(e,y.TEXT_XML);break;case b.JSON:i=yield e.json();break;case b.STREAM:i=yield Promise.resolve(e.body);break;case b.TEXT:i=yield e.text();break;default:if(null!==o){const t=o.split(";")[0];i=new RegExp(x.DOCUMENT).test(t)?yield P.parseDocumentResponse(e,t):new RegExp(x.IMAGE).test(t)?e.blob():t===w.TEXT_PLAIN?yield e.text():t===w.APPLICATION_JSON?yield e.json():Promise.resolve(e.body)}else i=Promise.resolve(e.body)}return i}))}static getResponse(e,t,i){return(0,s.sH)(this,void 0,void 0,(function*(){if(t===b.RAW)return Promise.resolve(e);{const o=yield P.convertResponse(e,t);if(!e.ok)throw o;if("function"!=typeof i)return o;i(null,o)}}))}}class L{constructor(e=-1,t=-1){this.minValue=e,this.maxValue=t}}class O{constructor(e,t){this._location=t,this._responseBody=e}get location(){return this._location}set location(e){this._location=e}get responseBody(){return this._responseBody}set responseBody(e){this._responseBody=e}static CreateUploadResult(e,t){return new O(e,t.get("location"))}}class R{constructor(e,t,i,o={}){if(this.DEFAULT_FILE_SIZE=5242880,this.client=e,!t.sliceFile)throw new a("Please pass the FileUpload object, StreamUpload object or any custom implementation of the FileObject interface");this.file=t,this.file=t,o.rangeSize||(o.rangeSize=this.DEFAULT_FILE_SIZE),this.options=o,this.uploadSession=i,this.nextRange=new L(0,this.options.rangeSize-1)}static createUploadSession(e,t,i,o={}){return(0,s.sH)(this,void 0,void 0,(function*(){const s=yield e.api(t).headers(o).post(i);return{url:s.uploadUrl,expiry:new Date(s.expirationDateTime),isCancelled:!1}}))}parseRange(e){const t=e[0];if(void 0===t||""===t)return new L;const i=t.split("-"),o=parseInt(i[0],10);let s=parseInt(i[1],10);return Number.isNaN(s)&&(s=this.file.size-1),new L(o,s)}updateTaskStatus(e){this.uploadSession.expiry=new Date(e.expirationDateTime),this.nextRange=this.parseRange(e.nextExpectedRanges)}getNextRange(){if(-1===this.nextRange.minValue)return this.nextRange;const e=this.nextRange.minValue;let t=e+this.options.rangeSize-1;return t>=this.file.size&&(t=this.file.size-1),new L(e,t)}sliceFile(e){if(console.warn("The LargeFileUploadTask.sliceFile() function has been deprecated and moved into the FileObject interface."),this.file.content instanceof ArrayBuffer||this.file.content instanceof Blob||this.file.content instanceof Uint8Array)return this.file.content.slice(e.minValue,e.maxValue+1);throw new a("The LargeFileUploadTask.sliceFile() function expects only Blob, ArrayBuffer or Uint8Array file content. Please note that the sliceFile() function is deprecated.")}upload(){return(0,s.sH)(this,void 0,void 0,(function*(){const e=this.options&&this.options.uploadEventHandlers;for(;!this.uploadSession.isCancelled;){const t=this.getNextRange();if(-1===t.maxValue){const e=new Error("Task with which you are trying to upload is already completed, Please check for your uploaded file");throw e.name="Invalid Session",e}const i=yield this.file.sliceFile(t),o=yield this.uploadSliceGetRawResponse(i,t,this.file.size);if(!o)throw new a("Something went wrong! Large file upload slice response is null.");const s=yield P.getResponse(o);if(201===o.status||200===o.status&&s.id)return O.CreateUploadResult(s,o.headers);const n={expirationDateTime:s.expirationDateTime||s.ExpirationDateTime,nextExpectedRanges:s.NextExpectedRanges||s.nextExpectedRanges};this.updateTaskStatus(n),e&&e.progress&&e.progress(t,e.extraCallbackParam)}}))}uploadSlice(e,t,i){return(0,s.sH)(this,void 0,void 0,(function*(){return yield this.client.api(this.uploadSession.url).headers({"Content-Length":""+(t.maxValue-t.minValue+1),"Content-Range":`bytes ${t.minValue}-${t.maxValue}/${i}`,"Content-Type":"application/octet-stream"}).put(e)}))}uploadSliceGetRawResponse(e,t,i){return(0,s.sH)(this,void 0,void 0,(function*(){return yield this.client.api(this.uploadSession.url).headers({"Content-Length":""+(t.maxValue-t.minValue+1),"Content-Range":`bytes ${t.minValue}-${t.maxValue}/${i}`,"Content-Type":"application/octet-stream"}).responseType(b.RAW).put(e)}))}cancel(){return(0,s.sH)(this,void 0,void 0,(function*(){const e=yield this.client.api(this.uploadSession.url).responseType(b.RAW).delete();return 204===e.status&&(this.uploadSession.isCancelled=!0),e}))}getStatus(){return(0,s.sH)(this,void 0,void 0,(function*(){const e=yield this.client.api(this.uploadSession.url).get();return this.updateTaskStatus(e),e}))}resume(){return(0,s.sH)(this,void 0,void 0,(function*(){return yield this.getStatus(),yield this.upload()}))}getUploadSession(){return this.uploadSession}}class E{constructor(e,t,i){if(this.content=e,this.name=t,this.size=i,!e||!t||!i)throw new a("Please provide the upload content, name of the file and size of the file")}sliceFile(e){return this.content.slice(e.minValue,e.maxValue+1)}}class M extends R{constructor(e,t,i,o){super(e,t,i,o)}static constructCreateSessionUrl(e,t=M.DEFAULT_UPLOAD_PATH){return e=e.trim(),""===(t=t.trim())&&(t="/"),"/"!==t[0]&&(t=`/${t}`),"/"!==t[t.length-1]&&(t=`${t}/`),`/me/drive/root:${t.split("/").map((e=>encodeURIComponent(e))).join("/")}${encodeURIComponent(e)}:/createUploadSession`}static getFileInfo(e,t){let i,o;if("undefined"!=typeof Blob&&e instanceof Blob)i=new File([e],t),o=i.size;else if("undefined"!=typeof File&&e instanceof File)i=e,o=i.size;else if("undefined"!=typeof Uint8Array&&e instanceof Uint8Array){const t=e;o=t.byteLength,i=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}return{content:i,size:o}}static create(e,t,i){return(0,s.sH)(this,void 0,void 0,(function*(){if(!e||!t||!i)throw new a("Please provide the Graph client instance, file object and OneDriveLargeFileUploadOptions value");const o=i.fileName,s=M.getFileInfo(t,o),n=new E(s.content,o,s.size);return this.createTaskWithFileObject(e,n,i)}))}static createTaskWithFileObject(e,t,i){return(0,s.sH)(this,void 0,void 0,(function*(){if(!e||!t||!i)throw new a("Please provide the Graph client instance, FileObject interface implementation and OneDriveLargeFileUploadOptions value");const o=M.constructCreateSessionUrl(i.fileName,i.path),s={fileName:i.fileName,fileDescription:i.fileDescription,conflictBehavior:i.conflictBehavior},n=yield M.createUploadSession(e,o,s),r=((e=5242880)=>{const t=62914560;return e>t&&(e=t),(i=e)>327680&&(i=320*Math.floor(i/327680)*1024),i;var i})(i.rangeSize);return new M(e,t,n,{rangeSize:r,uploadEventHandlers:i.uploadEventHandlers})}))}static createUploadSession(e,t,i){const o=Object.create(null,{createUploadSession:{get:()=>super.createUploadSession}});return(0,s.sH)(this,void 0,void 0,(function*(){const s={item:{"@microsoft.graph.conflictBehavior":(null==i?void 0:i.conflictBehavior)||"rename",name:null==i?void 0:i.fileName,description:null==i?void 0:i.fileDescription}};return o.createUploadSession.call(this,e,t,s)}))}commit(e,t="rename"){return(0,s.sH)(this,void 0,void 0,(function*(){const i={name:this.file.name,"@microsoft.graph.conflictBehavior":t,"@microsoft.graph.sourceUrl":this.uploadSession.url};return yield this.client.api(e).put(i)}))}}M.DEFAULT_UPLOAD_PATH="/";class H{constructor(e){this.provider=e}getAccessToken(){return(0,s.sH)(this,void 0,void 0,(function*(){return new Promise(((e,t)=>{this.provider(((i,o)=>(0,s.sH)(this,void 0,void 0,(function*(){if(o)e(o);else{i||(i=new a("Access token is undefined or empty.\t\t\t\t\t\tPlease provide a valid token.\t\t\t\t\t\tFor more help - https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/dev/docs/CustomAuthenticationProvider.md"));const e=yield a.setGraphClientError(i);t(e)}}))))}))}))}}class V extends Error{constructor(e=-1,t,i){super(t||i&&i.message),Object.setPrototypeOf(this,V.prototype),this.statusCode=e,this.code=null,this.requestId=null,this.date=new Date,this.body=null,this.stack=i?i.stack:this.stack}}class z{static constructError(e,t){const i=new V(t,"",e);return void 0!==e.name&&(i.code=e.name),i.body=e.toString(),i.date=new Date,i}static constructErrorFromResponse(e,t){const i=e.error,o=new V(t,i.message);return o.code=i.code,void 0!==i.innerError&&(o.requestId=i.innerError["request-id"],o.date=new Date(i.innerError.date)),o.body=JSON.stringify(i),o}static getError(e=null,t=-1,i){return(0,s.sH)(this,void 0,void 0,(function*(){let o;if(e&&e.error?o=z.constructErrorFromResponse(e,t):e instanceof Error?o=z.constructError(e,t):(o=new V(t),o.body=e),"function"!=typeof i)return o;i(o,null)}))}}class N{constructor(e,t,i){this.parsePath=e=>{if(-1!==e.indexOf("https://")){const t=(e=e.replace("https://","")).indexOf("/");-1!==t&&(this.urlComponents.host="https://"+e.substring(0,t),e=e.substring(t+1,e.length));const i=e.indexOf("/");-1!==i&&(this.urlComponents.version=e.substring(0,i),e=e.substring(i+1,e.length))}"/"===e.charAt(0)&&(e=e.substr(1));const t=e.indexOf("?");if(-1===t)this.urlComponents.path=e;else{this.urlComponents.path=e.substr(0,t);const i=e.substring(t+1,e.length).split("&");for(const e of i)this.parseQueryParameter(e)}},this.httpClient=e,this.config=t,this.urlComponents={host:this.config.baseUrl,version:this.config.defaultVersion,oDataQueryParams:{},otherURLQueryParams:{},otherURLQueryOptions:[]},this._headers={},this._options={},this._middlewareOptions=[],this.parsePath(i)}addCsvQueryParameter(e,t,i){this.urlComponents.oDataQueryParams[e]=this.urlComponents.oDataQueryParams[e]?this.urlComponents.oDataQueryParams[e]+",":"";let o=[];i.length>1&&"string"==typeof t?o=Array.prototype.slice.call(i):"string"==typeof t?o.push(t):o=o.concat(t),this.urlComponents.oDataQueryParams[e]+=o.join(",")}buildFullUrl(){const e=(e=>{const t=e=>e.replace(/^\/+/,"");return Array.prototype.slice.call(e).reduce(((e,i)=>{return[(o=e,o.replace(/\/+$/,"")),t(i)].join("/");var o}))})([this.urlComponents.host,this.urlComponents.version,this.urlComponents.path])+this.createQueryString();return this.config.debugLogging&&console.log(e),e}createQueryString(){const e=this.urlComponents,t=[];if(0!==Object.keys(e.oDataQueryParams).length)for(const i in e.oDataQueryParams)Object.prototype.hasOwnProperty.call(e.oDataQueryParams,i)&&t.push(i+"="+e.oDataQueryParams[i]);if(0!==Object.keys(e.otherURLQueryParams).length)for(const i in e.otherURLQueryParams)Object.prototype.hasOwnProperty.call(e.otherURLQueryParams,i)&&t.push(i+"="+e.otherURLQueryParams[i]);if(0!==e.otherURLQueryOptions.length)for(const i of e.otherURLQueryOptions)t.push(i);return t.length>0?"?"+t.join("&"):""}parseQueryParameter(e){if("string"==typeof e)if("?"===e.charAt(0)&&(e=e.substring(1)),-1!==e.indexOf("&")){const t=e.split("&");for(const e of t)this.parseQueryParamenterString(e)}else this.parseQueryParamenterString(e);else if(e.constructor===Object)for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&this.setURLComponentsQueryParamater(t,e[t]);return this}parseQueryParamenterString(e){if(this.isValidQueryKeyValuePair(e)){const t=e.indexOf("="),i=e.substring(0,t),o=e.substring(t+1);this.setURLComponentsQueryParamater(i,o)}else this.urlComponents.otherURLQueryOptions.push(e)}setURLComponentsQueryParamater(e,t){if(-1!==l.indexOf(e)){const i=this.urlComponents.oDataQueryParams[e],o=i&&("$expand"===e||"$select"===e||"$orderby"===e);this.urlComponents.oDataQueryParams[e]=o?i+","+t:t}else this.urlComponents.otherURLQueryParams[e]=t}isValidQueryKeyValuePair(e){const t=e.indexOf("=");return-1!==t&&!(-1!==e.indexOf("(")&&e.indexOf("(")<t)}updateRequestOptions(e){const t=Object.assign({},e.headers);if(void 0!==this.config.fetchOptions){const t=Object.assign({},this.config.fetchOptions);Object.assign(e,t),void 0!==typeof this.config.fetchOptions.headers&&(e.headers=Object.assign({},this.config.fetchOptions.headers))}Object.assign(e,this._options),void 0!==e.headers&&Object.assign(t,e.headers),Object.assign(t,this._headers),e.headers=t}send(e,t,i){var o;return(0,s.sH)(this,void 0,void 0,(function*(){let s;const n=new g(this._middlewareOptions);this.updateRequestOptions(t);const r=null===(o=this.config)||void 0===o?void 0:o.customHosts;try{return s=(yield this.httpClient.sendRequest({request:e,options:t,middlewareControl:n,customHosts:r})).response,yield P.getResponse(s,this._responseType,i)}catch(e){if(e instanceof a)throw e;let t;throw s&&(t=s.status),yield z.getError(e,t,i)}}))}setHeaderContentType(){if(!this._headers)return void this.header("Content-Type","application/json");const e=Object.keys(this._headers);for(const t of e)if("content-type"===t.toLowerCase())return;this.header("Content-Type","application/json")}header(e,t){return this._headers[e]=t,this}headers(e){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this._headers[t]=e[t]);return this}option(e,t){return this._options[e]=t,this}options(e){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this._options[t]=e[t]);return this}middlewareOptions(e){return this._middlewareOptions=e,this}version(e){return this.urlComponents.version=e,this}responseType(e){return this._responseType=e,this}select(e){return this.addCsvQueryParameter("$select",e,arguments),this}expand(e){return this.addCsvQueryParameter("$expand",e,arguments),this}orderby(e){return this.addCsvQueryParameter("$orderby",e,arguments),this}filter(e){return this.urlComponents.oDataQueryParams.$filter=e,this}search(e){return this.urlComponents.oDataQueryParams.$search=e,this}top(e){return this.urlComponents.oDataQueryParams.$top=e,this}skip(e){return this.urlComponents.oDataQueryParams.$skip=e,this}skipToken(e){return this.urlComponents.oDataQueryParams.$skipToken=e,this}count(e=!0){return this.urlComponents.oDataQueryParams.$count=e.toString(),this}query(e){return this.parseQueryParameter(e)}get(e){return(0,s.sH)(this,void 0,void 0,(function*(){const t=this.buildFullUrl(),i={method:o.GET};return yield this.send(t,i,e)}))}post(e,t){return(0,s.sH)(this,void 0,void 0,(function*(){const i=this.buildFullUrl(),s={method:o.POST,body:d(e)};return"FormData"===(e&&e.constructor&&e.constructor.name)?s.headers={}:(this.setHeaderContentType(),s.headers=this._headers),yield this.send(i,s,t)}))}create(e,t){return(0,s.sH)(this,void 0,void 0,(function*(){return yield this.post(e,t)}))}put(e,t){return(0,s.sH)(this,void 0,void 0,(function*(){const i=this.buildFullUrl();this.setHeaderContentType();const s={method:o.PUT,body:d(e)};return yield this.send(i,s,t)}))}patch(e,t){return(0,s.sH)(this,void 0,void 0,(function*(){const i=this.buildFullUrl();this.setHeaderContentType();const s={method:o.PATCH,body:d(e)};return yield this.send(i,s,t)}))}update(e,t){return(0,s.sH)(this,void 0,void 0,(function*(){return yield this.patch(e,t)}))}delete(e){return(0,s.sH)(this,void 0,void 0,(function*(){const t=this.buildFullUrl(),i={method:o.DELETE};return yield this.send(t,i,e)}))}del(e){return(0,s.sH)(this,void 0,void 0,(function*(){return yield this.delete(e)}))}getStream(e){return(0,s.sH)(this,void 0,void 0,(function*(){const t=this.buildFullUrl(),i={method:o.GET};return this.responseType(b.STREAM),yield this.send(t,i,e)}))}putStream(e,t){return(0,s.sH)(this,void 0,void 0,(function*(){const i=this.buildFullUrl(),s={method:o.PUT,headers:{"Content-Type":"application/octet-stream"},body:e};return yield this.send(i,s,t)}))}}class q{constructor(...e){if(!e||!e.length){const e=new Error;throw e.name="InvalidMiddlewareChain",e.message="Please provide a default middleware chain or custom middleware chain",e}this.setMiddleware(...e)}setMiddleware(...e){e.length>1?this.parseMiddleWareArray(e):this.middleware=e[0]}parseMiddleWareArray(e){e.forEach(((t,i)=>{i<e.length-1&&t.setNext(e[i+1])})),this.middleware=e[0]}sendRequest(e){return(0,s.sH)(this,void 0,void 0,(function*(){if("string"==typeof e.request&&void 0===e.options){const e=new Error;throw e.name="InvalidRequestOptions",e.message="Unable to execute the middleware, Please provide valid options for a request",e}return yield this.middleware.execute(e),e}))}}class B{static createWithAuthenticationProvider(e){const t=new S(e),i=new A(new I),o=new F,s=new _;if(t.setNext(i),"object"==typeof process){const e=new D(new T);i.setNext(e),e.setNext(o)}else i.setNext(o);return o.setNext(s),B.createWithMiddleware(t)}static createWithMiddleware(...e){return new q(...e)}}class U{constructor(e){this.config={baseUrl:"https://graph.microsoft.com/",debugLogging:!1,defaultVersion:"v1.0"},(()=>{if("undefined"==typeof Promise&&"undefined"==typeof fetch){const e=new Error("Library cannot function without Promise and fetch. So, please provide polyfill for them.");throw e.name="PolyFillNotAvailable",e}if("undefined"==typeof Promise){const e=new Error("Library cannot function without Promise. So, please provide polyfill for it.");throw e.name="PolyFillNotAvailable",e}if("undefined"==typeof fetch){const e=new Error("Library cannot function without fetch. So, please provide polyfill for it.");throw e.name="PolyFillNotAvailable",e}})();for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.config[t]=e[t]);let t;if(void 0!==e.authProvider&&void 0!==e.middleware){const e=new Error;throw e.name="AmbiguityInInitialization",e.message="Unable to Create Client, Please provide either authentication provider for default middleware chain or custom middleware chain not both",e}if(void 0!==e.authProvider)t=B.createWithAuthenticationProvider(e.authProvider);else{if(void 0===e.middleware){const e=new Error;throw e.name="InvalidMiddlewareChain",e.message="Unable to Create Client, Please provide either authentication provider for default middleware chain or custom middleware chain",e}t=new q(...[].concat(e.middleware))}this.httpClient=t}static init(e){const t={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]="authProvider"===i?new H(e[i]):e[i]);return U.initWithMiddleware(t)}static initWithMiddleware(e){return new U(e)}api(e){return new N(this.httpClient,this.config,e)}}},5100:(e,t,i)=>{i.d(t,{RO:()=>r,Vr:()=>a,XH:()=>n,lk:()=>s,o7:()=>l});var o=i(1635);const s=()=>{let e="";for(let t=0;t<32;t++)8!==t&&12!==t&&16!==t&&20!==t||(e+="-"),e+=Math.floor(16*Math.random()).toString(16);return e},n=(e,t,i)=>{let o=null;if("undefined"!=typeof Request&&e instanceof Request)o=e.headers.get(i);else if(void 0!==t&&void 0!==t.headers)if("undefined"!=typeof Headers&&t.headers instanceof Headers)o=t.headers.get(i);else if(t.headers instanceof Array){const e=t.headers;for(let t=0,s=e.length;t<s;t++)if(e[t][0]===i){o=e[t][1];break}}else void 0!==t.headers[i]&&(o=t.headers[i]);return o},r=(e,t,i,o)=>{if("undefined"!=typeof Request&&e instanceof Request)e.headers.set(i,o);else if(void 0!==t)if(void 0===t.headers)t.headers=new Headers({[i]:o});else if("undefined"!=typeof Headers&&t.headers instanceof Headers)t.headers.set(i,o);else if(t.headers instanceof Array){let e=0;const s=t.headers.length;for(;e<s;e++){const s=t.headers[e];if(s[0]===i){s[1]=o;break}}e===s&&t.headers.push([i,o])}else Object.assign(t.headers,{[i]:o})},a=(e,t,i,o)=>{"undefined"!=typeof Request&&e instanceof Request?e.headers.append(i,o):void 0!==t&&(void 0===t.headers?t.headers=new Headers({[i]:o}):"undefined"!=typeof Headers&&t.headers instanceof Headers?t.headers.append(i,o):t.headers instanceof Array?t.headers.push([i,o]):void 0===t.headers?t.headers={[i]:o}:void 0===t.headers[i]?t.headers[i]=o:t.headers[i]+=`, ${o}`)},l=(e,t)=>(0,o.sH)(void 0,void 0,void 0,(function*(){const i=t.headers.get("Content-Type")?yield t.blob():yield Promise.resolve(void 0),{method:o,headers:s,referrer:n,referrerPolicy:r,mode:a,credentials:l,cache:d,redirect:c,integrity:h,keepalive:u,signal:p}=t;return new Request(e,{method:o,headers:s,body:i,referrer:n,referrerPolicy:r,mode:a,credentials:l,cache:d,redirect:c,integrity:h,keepalive:u,signal:p})}))},5127:(e,t,i)=>{i.d(t,{mN:()=>S,AH:()=>l,W3:()=>k,Ec:()=>C});const o=globalThis,s=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;class a{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}}const l=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new a(i,e,n)},d=(e,t)=>{if(s)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),s=o.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=i.cssText,e.appendChild(t)}},c=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,n))(t)})(e):e,{is:h,defineProperty:u,getOwnPropertyDescriptor:p,getOwnPropertyNames:g,getOwnPropertySymbols:f,getPrototypeOf:v}=Object,m=globalThis,b=m.trustedTypes,y=b?b.emptyScript:"",w=m.reactiveElementPolyfillSupport,x=(e,t)=>e,k={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},C=(e,t)=>!h(e,t),$={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:C};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&u(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:s}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const n=o?.call(this);s.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=v(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...g(e),...f(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:k).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:k;this._$Em=o,this[o]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??C)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[x("elementProperties")]=new Map,S[x("finalized")]=new Map,w?.({ReactiveElement:S}),(m.reactiveElementVersions??=[]).push("2.0.4")},6247:(e,t,i)=>{i.d(t,{YZ:()=>r,e1:()=>s});var o=i(5127);const s={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},n=Symbol();class r{get taskComplete(){return this.t||(1===this.status?this.t=new Promise(((e,t)=>{this.i=e,this.o=t})):3===this.status?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(e,t,i){this.u=0,this.status=0,(this.p=e).addController(this);const o="object"==typeof t?t:{task:t,args:i};this._=o.task,this.v=o.args,this.j=o.argsEqual??a,this.m=o.onComplete,this.g=o.onError,this.autoRun=o.autoRun??!0,"initialValue"in o&&(this.l=o.initialValue,this.status=2,this.k=this.A?.())}hostUpdate(){!0===this.autoRun&&this.O()}hostUpdated(){"afterUpdate"===this.autoRun&&this.O()}A(){if(void 0===this.v)return;const e=this.v();if(!Array.isArray(e))throw Error("The args function must return an array");return e}async O(){const e=this.A(),t=this.k;this.k=e,e===t||void 0===e||void 0!==t&&this.j(t,e)||await this.run(e)}async run(e){let t,i;e??=this.A(),this.k=e,1===this.status?this.T?.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this.p.requestUpdate())):this.p.requestUpdate();const o=++this.u;this.T=new AbortController;let s=!1;try{t=await this._(e,{signal:this.T.signal})}catch(e){s=!0,i=e}if(this.u===o){if(t===n)this.status=0;else{if(!1===s){try{this.m?.(t)}catch{}this.status=2,this.i?.(t)}else{try{this.g?.(i)}catch{}this.status=3,this.o?.(i)}this.l=t,this.h=i}this.p.requestUpdate()}}abort(e){1===this.status&&this.T?.abort(e)}get value(){return this.l}get error(){return this.h}render(e){switch(this.status){case 0:return e.initial?.();case 1:return e.pending?.();case 2:return e.complete?.(this.value);case 3:return e.error?.(this.error);default:throw Error("Unexpected status: "+this.status)}}}const a=(e,t)=>e===t||e.length===t.length&&e.every(((e,i)=>!(0,o.Ec)(e,t[i])))},6884:(e,t,i)=>{i.d(t,{Ep:()=>h,QX:()=>p,eK:()=>f,SU:()=>u,mi:()=>g,Z8:()=>l});var o=i(778),s=i(4338),n=i(7122),r=i(7820);class a{constructor(e,t,i){this.x=e,this.y=t,this.z=i}static fromObject(e){return!e||isNaN(e.x)||isNaN(e.y)||isNaN(e.z)?null:new a(e.x,e.y,e.z)}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new a((0,r.l)(this.x,e),(0,r.l)(this.y,e),(0,r.l)(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function l(e){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return function(e){return.2126*e.r+.7152*e.g+.0722*e.b}(new n.M(t(e.r),t(e.g),t(e.b),1))}function d(e,t,i){return i-t==0?0:(e-t)/(i-t)}function c(e,t,i){return(d(e.r,t.r,i.r)+d(e.g,t.g,i.g)+d(e.b,t.b,i.b))/3}function h(e,t,i=null){let o=0,s=i;return null!==s?o=c(e,t,s):(s=new n.M(0,0,0,1),o=c(e,t,s),o<=0&&(s=new n.M(1,1,1,1),o=c(e,t,s))),o=Math.round(1e3*o)/1e3,new n.M(s.r,s.g,s.b,o)}function u(e){const t=Math.max(e.r,e.g,e.b),i=Math.min(e.r,e.g,e.b),s=t-i;let n=0;0!==s&&(n=t===e.r?(e.g-e.b)/s%6*60:t===e.g?60*((e.b-e.r)/s+2):60*((e.r-e.g)/s+4)),n<0&&(n+=360);const r=(t+i)/2;let a=0;return 0!==s&&(a=s/(1-Math.abs(2*r-1))),new o.D(n,a,r)}function p(e,t=1){const i=(1-Math.abs(2*e.l-1))*e.s,o=i*(1-Math.abs(e.h/60%2-1)),s=e.l-i/2;let r=0,a=0,l=0;return e.h<60?(r=i,a=o,l=0):e.h<120?(r=o,a=i,l=0):e.h<180?(r=0,a=i,l=o):e.h<240?(r=0,a=o,l=i):e.h<300?(r=o,a=0,l=i):e.h<360&&(r=i,a=0,l=o),new n.M(r+s,a+s,l+s,t)}function g(e){return function(e){function t(e){return e>s.h.epsilon?Math.pow(e,1/3):(s.h.kappa*e+16)/116}const i=t(e.x/a.whitePoint.x),o=t(e.y/a.whitePoint.y),n=116*o-16,r=500*(i-o),l=200*(o-t(e.z/a.whitePoint.z));return new s.h(n,r,l)}(function(e){function t(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}const i=t(e.r),o=t(e.g),s=t(e.b);return new a(.4124564*i+.3575761*o+.1804375*s,.2126729*i+.7151522*o+.072175*s,.0193339*i+.119192*o+.9503041*s)}(e))}function f(e,t=1){return function(e,t=1){function i(e){return e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055}const o=i(3.2404542*e.x-1.5371385*e.y-.4985314*e.z),s=i(-.969266*e.x+1.8760108*e.y+.041556*e.z),r=i(.0556434*e.x-.2040259*e.y+1.0572252*e.z);return new n.M(o,s,r,t)}(function(e){const t=(e.l+16)/116,i=t+e.a/500,o=t-e.b/200,n=Math.pow(i,3),r=Math.pow(t,3),l=Math.pow(o,3);let d=0;d=n>s.h.epsilon?n:(116*i-16)/s.h.kappa;let c=0;c=e.l>s.h.epsilon*s.h.kappa?r:e.l/s.h.kappa;let h=0;return h=l>s.h.epsilon?l:(116*o-16)/s.h.kappa,d=a.whitePoint.x*d,c=a.whitePoint.y*c,h=a.whitePoint.z*h,new a(d,c,h)}(e),t)}a.whitePoint=new a(.95047,1,1.08883)},778:(e,t,i)=>{i.d(t,{D:()=>s});var o=i(7820);class s{constructor(e,t,i){this.h=e,this.s=t,this.l=i}static fromObject(e){return!e||isNaN(e.h)||isNaN(e.s)||isNaN(e.l)?null:new s(e.h,e.s,e.l)}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new s((0,o.l)(this.h,e),(0,o.l)(this.s,e),(0,o.l)(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}},4338:(e,t,i)=>{i.d(t,{h:()=>s});var o=i(7820);class s{constructor(e,t,i){this.l=e,this.a=t,this.b=i}static fromObject(e){return!e||isNaN(e.l)||isNaN(e.a)||isNaN(e.b)?null:new s(e.l,e.a,e.b)}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new s((0,o.l)(this.l,e),(0,o.l)(this.a,e),(0,o.l)(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}s.epsilon=216/24389,s.kappa=24389/27},7122:(e,t,i)=>{i.d(t,{M:()=>s});var o=i(7820);class s{constructor(e,t,i,o){this.r=e,this.g=t,this.b=i,this.a="number"!=typeof o||isNaN(o)?1:o}static fromObject(e){return!e||isNaN(e.r)||isNaN(e.g)||isNaN(e.b)?null:new s(e.r,e.g,e.b,e.a)}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round((0,o.NU)(this.r,0,255))},${Math.round((0,o.NU)(this.g,0,255))},${Math.round((0,o.NU)(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round((0,o.NU)(this.r,0,255))},${Math.round((0,o.NU)(this.g,0,255))},${Math.round((0,o.NU)(this.b,0,255))},${(0,o.qE)(this.a,0,1)})`}roundToPrecision(e){return new s((0,o.l)(this.r,e),(0,o.l)(this.g,e),(0,o.l)(this.b,e),(0,o.l)(this.a,e))}clamp(){return new s((0,o.qE)(this.r,0,1),(0,o.qE)(this.g,0,1),(0,o.qE)(this.b,0,1),(0,o.qE)(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return(0,o.IG)((0,o.NU)(e,0,255))}}},7820:(e,t,i)=>{function o(e,t,i){return isNaN(e)||e<=t?t:e>=i?i:e}function s(e,t,i){return isNaN(e)||e<=t?0:e>=i?1:e/(i-t)}function n(e,t,i){return isNaN(e)?t:t+e*(i-t)}function r(e){const t=Math.round(o(e,0,255)).toString(16);return 1===t.length?"0"+t:t}function a(e,t,i){return isNaN(e)||e<=0?t:e>=1?i:t+e*(i-t)}function l(e,t){const i=Math.pow(10,t);return Math.round(e*i)/i}i.d(t,{Cc:()=>a,IG:()=>r,NU:()=>n,S8:()=>s,l:()=>l,qE:()=>o}),Math.PI},7022:(e,t,i)=>{i.d(t,{Hs:()=>r});var o=i(7122),s=i(7820);const n=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function r(e){const t=n.exec(e);if(null===t)return null;let i=t[1];if(3===i.length){const e=i.charAt(0),t=i.charAt(1),o=i.charAt(2);i=e.concat(e,t,t,o,o)}const r=parseInt(i,16);return isNaN(r)?null:new o.M((0,s.S8)((16711680&r)>>>16,0,255),(0,s.S8)((65280&r)>>>8,0,255),(0,s.S8)(255&r,0,255),1)}},1039:(e,t,i)=>{i.d(t,{$u:()=>r,Bs:()=>a,CF:()=>c,O1:()=>d,R$:()=>l});var o=i(4885),s=i(4331),n=i(4208);const r=Object.freeze({locate:(0,n.iX)()}),a={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},l={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class d{constructor(e,t,i=t.toLowerCase(),o="reflect",s){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=i,this.mode=o,this.converter=s,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===o&&void 0===s&&(this.converter=a)}setValue(e,t){const i=e[this.fieldName],o=this.converter;void 0!==o&&(t=o.fromView(t)),i!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,t),e.$fastController.notify(this.name))}getValue(e){return o.cP.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,i=this.guards;i.has(e)||"fromView"===t||s.dv.queueUpdate((()=>{i.add(e);const o=e[this.fieldName];switch(t){case"reflect":const t=this.converter;s.dv.setAttribute(e,this.attribute,void 0!==t?t.toView(o):o);break;case"boolean":s.dv.setBooleanAttribute(e,this.attribute,o)}i.delete(e)}))}static collect(e,...t){const i=[];t.push(r.locate(e));for(let o=0,s=t.length;o<s;++o){const s=t[o];if(void 0!==s)for(let t=0,o=s.length;t<o;++t){const o=s[t];"string"==typeof o?i.push(new d(e,o)):i.push(new d(e,o.property,o.attribute,o.mode,o.converter))}}return i}}function c(e,t){let i;function o(e,t){arguments.length>1&&(i.property=t),r.locate(e.constructor).push(i)}return arguments.length>1?(i={},void o(e,t)):(i=void 0===e?{}:e,o)}},7023:(e,t,i)=>{i.d(t,{I:()=>c});var o=i(4208),s=i(4885),n=i(6025),r=i(1039);const a={mode:"open"},l={},d=o.Zx.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class c{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const i=r.O1.collect(e,t.attributes),o=new Array(i.length),s={},d={};for(let e=0,t=i.length;e<t;++e){const t=i[e];o[e]=t.attribute,s[t.name]=t,d[t.attribute]=t}this.attributes=i,this.observedAttributes=o,this.propertyLookup=s,this.attributeLookup=d,this.shadowOptions=void 0===t.shadowOptions?a:null===t.shadowOptions?void 0:Object.assign(Object.assign({},a),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?l:Object.assign(Object.assign({},l),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?n.vv.create(t.styles):t.styles instanceof n.vv?t.styles:n.vv.create([t.styles])}get isDefined(){return!!d.getByType(this.type)}define(e=customElements){const t=this.type;if(d.register(this)){const e=this.attributes,i=t.prototype;for(let t=0,o=e.length;t<o;++t)s.cP.defineProperty(i,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}c.forType=d.getByType},1784:(e,t,i)=>{i.d(t,{L:()=>u});var o=i(4331),s=i(1286),n=i(4885),r=i(7023);const a=new WeakMap,l={bubbles:!0,composed:!0,cancelable:!0};function d(e){return e.shadowRoot||a.get(e)||null}class c extends s.S{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const i=t.shadowOptions;if(void 0!==i){const t=e.attachShadow(i);"closed"===i.mode&&a.set(e,t)}const o=n.cP.getAccessors(e);if(o.length>0){const t=this.boundObservables=Object.create(null);for(let i=0,s=o.length;i<s;++i){const s=o[i].name,n=e[s];void 0!==n&&(delete e[s],t[s]=n)}}}get isConnected(){return n.cP.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,n.cP.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=d(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const i=e.behaviors;e.addStylesTo(t),null!==i&&this.addBehaviors(i)}}removeStyles(e){const t=d(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const i=e.behaviors;e.removeStylesFrom(t),null!==i&&this.removeBehaviors(i)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),i=e.length,o=[];for(let s=0;s<i;++s){const i=e[s];t.has(i)?t.set(i,t.get(i)+1):(t.set(i,1),o.push(i))}if(this._isConnected){const e=this.element;for(let t=0;t<o.length;++t)o[t].bind(e,n.Fj)}}removeBehaviors(e,t=!1){const i=this.behaviors;if(null===i)return;const o=e.length,s=[];for(let n=0;n<o;++n){const o=e[n];if(i.has(o)){const e=i.get(o)-1;0===e||t?i.delete(o)&&s.push(o):i.set(o,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<s.length;++t)s[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,n.Fj);const t=this.behaviors;if(null!==t)for(const[i]of t)i.bind(e,n.Fj);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[i]of t)i.unbind(e)}}onAttributeChangedCallback(e,t,i){const o=this.definition.attributeLookup[e];void 0!==o&&o.onAttributeChangedCallback(this.element,i)}emit(e,t,i){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},l),i)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const i=Object.keys(t);for(let o=0,s=i.length;o<s;++o){const s=i[o];e[s]=t[s]}this.boundObservables=null}const i=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,i=d(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||o.dv.removeChildNodes(i),e&&(this.view=e.render(t,i,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const i=r.I.forType(e.constructor);if(void 0===i)throw new Error("Missing FASTElement definition.");return e.$fastController=new c(e,i)}}function h(e){return class extends e{constructor(){super(),c.forCustomElement(this)}$emit(e,t,i){return this.$fastController.emit(e,t,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,i){this.$fastController.onAttributeChangedCallback(e,t,i)}}}const u=Object.assign(h(HTMLElement),{from:e=>h(e),define:(e,t)=>new r.I(e,t).define().type})},4331:(e,t,i)=>{i.d(t,{No:()=>d,ae:()=>l,dv:()=>c});var o=i(4208);const s=o.am.FAST.getById(1,(()=>{const e=[],t=[];function i(){if(t.length)throw t.shift()}function s(e){try{e.call()}catch(e){t.push(e),setTimeout(i,0)}}function n(){let t=0;for(;t<e.length;)if(s(e[t]),t++,t>1024){for(let i=0,o=e.length-t;i<o;i++)e[i]=e[i+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&o.am.requestAnimationFrame(n),e.push(t)},process:n})})),n=o.am.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let r=n;const a=`fast-${Math.random().toString(36).substring(2,8)}`,l=`${a}{`,d=`}${a}`,c=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(r!==n)throw new Error("The HTML policy can only be set once.");r=e},createHTML:e=>r.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(a),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${a}:`,"")),createInterpolationPlaceholder:e=>`${l}${e}${d}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${a}:${e}--\x3e`,queueUpdate:s.enqueue,processUpdates:s.process,nextUpdate:()=>new Promise(s.enqueue),setAttribute(e,t,i){null==i?e.removeAttribute(t):e.setAttribute(t,i)},setBooleanAttribute(e,t,i){i?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)})},1286:(e,t,i)=>{i.d(t,{S:()=>s,l:()=>o});class o{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else-1===t.indexOf(e)&&t.push(e)}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const i=t.indexOf(e);-1!==i&&t.splice(i,1)}}notify(e){const t=this.spillover,i=this.source;if(void 0===t){const t=this.sub1,o=this.sub2;void 0!==t&&t.handleChange(i,e),void 0!==o&&o.handleChange(i,e)}else for(let o=0,s=t.length;o<s;++o)t[o].handleChange(i,e)}}class s{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const i=this.subscribers[e];void 0!==i&&i.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var i;if(t){let i=this.subscribers[t];void 0===i&&(this.subscribers[t]=i=new o(this.source)),i.subscribe(e)}else this.sourceSubscribers=null!==(i=this.sourceSubscribers)&&void 0!==i?i:new o(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var i;if(t){const i=this.subscribers[t];void 0!==i&&i.unsubscribe(e)}else null===(i=this.sourceSubscribers)||void 0===i||i.unsubscribe(e)}}},4885:(e,t,i)=>{i.d(t,{Fj:()=>h,Jg:()=>l,ao:()=>c,cP:()=>r,sH:()=>a});var o=i(4331),s=i(4208),n=i(1286);const r=s.Zx.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,i=o.dv.queueUpdate;let r,a=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function l(e){let i=e.$fastController||t.get(e);return void 0===i&&(Array.isArray(e)?i=a(e):t.set(e,i=new n.S(e))),i}const d=(0,s.iX)();class c{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==r&&r.watch(e,this.name),e[this.field]}setValue(e,t){const i=this.field,o=e[i];if(o!==t){e[i]=t;const s=e[this.callback];"function"==typeof s&&s.call(e,o,t),l(e).notify(this.name)}}}class h extends n.l{constructor(e,t,i=!1){super(e,t),this.binding=e,this.isVolatileBinding=i,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const i=r;r=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const o=this.binding(e,t);return r=i,o}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const i=this.last,o=l(e),s=null===i?this.first:{};if(s.propertySource=e,s.propertyName=t,s.notifier=o,o.subscribe(this,t),null!==i){if(!this.needsRefresh){let t;r=void 0,t=i.propertySource[i.propertyName],r=this,e===t&&(this.needsRefresh=!0)}i.next=s}this.last=s}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){a=e},getNotifier:l,track(e,t){void 0!==r&&r.watch(e,t)},trackVolatile(){void 0!==r&&(r.needsRefresh=!0)},notify(e,t){l(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new c(t)),d(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:d,binding(e,t,i=this.isVolatileBinding(e)){return new h(e,t,i)},isVolatileBinding:t=>e.test(t.toString())})}));function a(e,t){r.defineProperty(e,t)}function l(e,t,i){return Object.assign({},i,{get:function(){return r.trackVolatile(),i.get.apply(this)}})}const d=s.Zx.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class c{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return d.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){d.set(e)}}r.defineProperty(c.prototype,"index"),r.defineProperty(c.prototype,"length");const h=Object.seal(new c)},4208:(e,t,i)=>{i.d(t,{Zx:()=>n,am:()=>o,iX:()=>a,tR:()=>r});const o=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===o.trustedTypes&&(o.trustedTypes={createPolicy:(e,t)=>t});const s={configurable:!1,enumerable:!1,writable:!1};void 0===o.FAST&&Reflect.defineProperty(o,"FAST",Object.assign({value:Object.create(null)},s));const n=o.FAST;if(void 0===n.getById){const e=Object.create(null);Reflect.defineProperty(n,"getById",Object.assign({value(t,i){let o=e[t];return void 0===o&&(o=i?e[t]=i():null),o}},s))}const r=Object.freeze([]);function a(){const e=new WeakMap;return function(t){let i=e.get(t);if(void 0===i){let o=Reflect.getPrototypeOf(t);for(;void 0===i&&null!==o;)i=e.get(o),o=Reflect.getPrototypeOf(o);i=void 0===i?[]:i.slice(0),e.set(t,i)}return i}}},9717:(e,t,i)=>{i.d(t,{x:()=>o});class o{createCSS(){return""}createBehavior(){}}},5861:(e,t,i)=>{i.d(t,{A:()=>r,L:()=>l});var o=i(9717),s=i(6025);function n(e,t){const i=[];let n="";const r=[];for(let a=0,l=e.length-1;a<l;++a){n+=e[a];let l=t[a];if(l instanceof o.x){const e=l.createBehavior();l=l.createCSS(),e&&r.push(e)}l instanceof s.vv||l instanceof CSSStyleSheet?(""!==n.trim()&&(i.push(n),n=""),i.push(l)):n+=l}return n+=e[e.length-1],""!==n.trim()&&i.push(n),{styles:i,behaviors:r}}function r(e,...t){const{styles:i,behaviors:o}=n(e,t),r=s.vv.create(i);return o.length&&r.withBehaviors(...o),r}class a extends o.x{constructor(e,t){super(),this.behaviors=t,this.css="";const i=e.reduce(((e,t)=>("string"==typeof t?this.css+=t:e.push(t),e)),[]);i.length&&(this.styles=s.vv.create(i))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}function l(e,...t){const{styles:i,behaviors:o}=n(e,t);return new a(i,o)}},6025:(e,t,i)=>{i.d(t,{vv:()=>s});var o=i(4331);class s{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function n(e){return e.map((e=>e instanceof s?n(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function r(e){return e.map((e=>e instanceof s?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}s.create=(()=>{if(o.dv.supportsAdoptedStyleSheets){const e=new Map;return t=>new d(t,e)}return e=>new h(e)})();let a=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},l=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(o.dv.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),a=(e,t)=>{e.adoptedStyleSheets.push(...t)},l=(e,t)=>{for(const i of t){const t=e.adoptedStyleSheets.indexOf(i);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class d extends s{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=r(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=n(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let i=t.get(e);return void 0===i&&(i=new CSSStyleSheet,i.replaceSync(e),t.set(e,i)),i}))}return this._styleSheets}addStylesTo(e){a(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){l(e,this.styleSheets),super.removeStylesFrom(e)}}let c=0;class h extends s{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=r(e),this.styleSheets=n(e),this.styleClass="fast-style-class-"+ ++c}addStylesTo(e){const t=this.styleSheets,i=this.styleClass;e=this.normalizeTarget(e);for(let o=0;o<t.length;o++){const s=document.createElement("style");s.innerHTML=t[o],s.className=i,e.append(s)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let i=0,o=t.length;i<o;++i)e.removeChild(t[i]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}},7148:(e,t,i)=>{i.d(t,{dg:()=>s,pY:()=>n,xz:()=>r});var o=i(4331);class s{constructor(){this.targetIndex=0}}class n extends s{constructor(){super(...arguments),this.createPlaceholder=o.dv.createInterpolationPlaceholder}}class r extends s{constructor(e,t,i){super(),this.name=e,this.behavior=t,this.options=i}createPlaceholder(e){return o.dv.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}},510:(e,t,i)=>{i.d(t,{Y:()=>n,n:()=>r});var o=i(4885),s=i(4208);function n(e){return e?function(t,i,o){return 1===t.nodeType&&t.matches(e)}:function(e,t,i){return 1===e.nodeType}}class r{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=o.cP.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(s.tR),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}},6028:(e,t,i)=>{i.d(t,{K:()=>n});var o=i(7148);class s{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function n(e){return new o.xz("fast-ref",s,e)}},1840:(e,t,i)=>{i.d(t,{e:()=>r});var o=i(7148),s=i(510);class n extends s.n{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function r(e){return"string"==typeof e&&(e={property:e}),new o.xz("fast-slotted",n,e)}},5960:(e,t,i)=>{i.d(t,{q:()=>A});var o=i(4331),s=i(4885),n=i(7148);function r(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=s.cP.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function a(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function l(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function d(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function c(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function h(e){o.dv.setAttribute(this.target,this.targetName,e)}function u(e){o.dv.setBooleanAttribute(this.target,this.targetName,e)}function p(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function g(e){this.target[this.targetName]=e}function f(e){const t=this.classVersions||Object.create(null),i=this.target;let o=this.version||0;if(null!=e&&e.length){const s=e.split(/\s+/);for(let e=0,n=s.length;e<n;++e){const n=s[e];""!==n&&(t[n]=o,i.classList.add(n))}}if(this.classVersions=t,this.version=o+1,0!==o){o-=1;for(const e in t)t[e]===o&&i.classList.remove(e)}}class v extends n.pY{constructor(e){super(),this.binding=e,this.bind=r,this.unbind=l,this.updateTarget=h,this.isBindingVolatile=s.cP.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=g,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,i)=>o.dv.createHTML(e(t,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=u;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=a,this.unbind=c;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=f)}}targetAtContent(){this.updateTarget=p,this.unbind=d}createBehavior(e){return new m(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class m{constructor(e,t,i,o,s,n,r){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=i,this.bind=o,this.unbind=s,this.updateTarget=n,this.targetName=r}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){s.ao.setEvent(e);const t=this.binding(this.source,this.context);s.ao.setEvent(null),!0!==t&&e.preventDefault()}}let b=null;class y{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){b=this}static borrow(e){const t=b||new y;return t.directives=e,t.reset(),b=null,t}}function w(e){if(1===e.length)return e[0];let t;const i=e.length,o=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),s=new v(((e,t)=>{let s="";for(let n=0;n<i;++n)s+=o[n](e,t);return s}));return s.targetName=t,s}const x=o.No.length;function k(e,t){const i=t.split(o.ae);if(1===i.length)return null;const s=[];for(let t=0,n=i.length;t<n;++t){const n=i[t],r=n.indexOf(o.No);let a;if(-1===r)a=n;else{const t=parseInt(n.substring(0,r));s.push(e.directives[t]),a=n.substring(r+x)}""!==a&&s.push(a)}return s}function C(e,t,i=!1){const o=t.attributes;for(let s=0,n=o.length;s<n;++s){const r=o[s],a=r.value,l=k(e,a);let d=null;null===l?i&&(d=new v((()=>a)),d.targetName=r.name):d=w(l),null!==d&&(t.removeAttributeNode(r),s--,n--,e.addFactory(d))}}function $(e,t,i){const o=k(e,t.textContent);if(null!==o){let s=t;for(let n=0,r=o.length;n<r;++n){const r=o[n],a=0===n?t:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);"string"==typeof r?a.textContent=r:(a.textContent=" ",e.captureContentBinding(r)),s=a,e.targetIndex++,a!==t&&i.nextNode()}e.targetIndex--}}var S=i(332);class _{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=o.dv.createHTML(t);const i=e.content.firstElementChild;null!==i&&"TEMPLATE"===i.tagName&&(e=i)}else e=t;const i=function(e,t){const i=e.content;document.adoptNode(i);const s=y.borrow(t);C(s,e,!0);const n=s.behaviorFactories;s.reset();const r=o.dv.createTemplateWalker(i);let a;for(;a=r.nextNode();)switch(s.targetIndex++,a.nodeType){case 1:C(s,a);break;case 3:$(s,a,r);break;case 8:o.dv.isMarker(a)&&s.addFactory(t[o.dv.extractDirectiveIndexFromMarker(a)])}let l=0;(o.dv.isMarker(i.firstChild)||1===i.childNodes.length&&t.length)&&(i.insertBefore(document.createComment(""),i.firstChild),l=-1);const d=s.behaviorFactories;return s.release(),{fragment:i,viewBehaviorFactories:d,hostBehaviorFactories:n,targetOffset:l}}(e,this.directives);this.fragment=i.fragment,this.viewBehaviorFactories=i.viewBehaviorFactories,this.hostBehaviorFactories=i.hostBehaviorFactories,this.targetOffset=i.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,s=new Array(this.behaviorCount),n=o.dv.createTemplateWalker(t);let r=0,a=this.targetOffset,l=n.nextNode();for(let e=i.length;r<e;++r){const e=i[r],t=e.targetIndex;for(;null!==l;){if(a===t){s[r]=e.createBehavior(l);break}l=n.nextNode(),a++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let i=0,o=t.length;i<o;++i,++r)s[r]=t[i].createBehavior(e)}return new S.N(t,s)}render(e,t,i){"string"==typeof t&&(t=document.getElementById(t)),void 0===i&&(i=t);const o=this.create(i);return o.bind(e,s.Fj),o.appendTo(t),o}}const I=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function A(e,...t){const i=[];let o="";for(let s=0,r=e.length-1;s<r;++s){const r=e[s];let a=t[s];if(o+=r,a instanceof _){const e=a;a=()=>e}if("function"==typeof a&&(a=new v(a)),a instanceof n.pY){const e=I.exec(r);null!==e&&(a.targetName=e[2])}a instanceof n.dg?(o+=a.createPlaceholder(i.length),i.push(a)):o+=a}return o+=e[e.length-1],new _(o,i)}},332:(e,t,i)=>{i.d(t,{N:()=>s});const o=document.createRange();class s{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const i=e.parentNode;let o,s=this.firstChild;for(;s!==t;)o=s.nextSibling,i.insertBefore(s,e),s=o;i.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let i,o=this.firstChild;for(;o!==t;)i=o.nextSibling,e.appendChild(o),o=i;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let i,o=this.firstChild;for(;o!==t;)i=o.nextSibling,e.removeChild(o),o=i;e.removeChild(t);const s=this.behaviors,n=this.source;for(let e=0,t=s.length;e<t;++e)s[e].unbind(n)}bind(e,t){const i=this.behaviors;if(this.source!==e)if(null!==this.source){const o=this.source;this.source=e,this.context=t;for(let s=0,n=i.length;s<n;++s){const n=i[s];n.unbind(o),n.bind(e,t)}}else{this.source=e,this.context=t;for(let o=0,s=i.length;o<s;++o)i[o].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let i=0,o=e.length;i<o;++i)e[i].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){o.setStartBefore(e[0].firstChild),o.setEndAfter(e[e.length-1].lastChild),o.deleteContents();for(let t=0,i=e.length;t<i;++t){const i=e[t],o=i.behaviors,s=i.source;for(let e=0,t=o.length;e<t;++e)o[e].unbind(s)}}}}},5330:(e,t,i)=>{i.d(t,{z:()=>r});const o=e=>"function"==typeof e,s=()=>null;function n(e){return void 0===e?s:o(e)?e:()=>e}function r(e,t,i){const s=o(e)?e:()=>e,r=n(t),a=n(i);return(e,t)=>s(e,t)?r(e,t):a(e,t)}},174:(e,t,i)=>{i.d(t,{$:()=>p});var o=i(1880),s=i(1039),n=i(4885),r=i(7057),a=i(4882),l=i(9210),d=i(9871),c=i(4637);class h extends c.g{}class u extends((0,d.rf)(h)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class p extends u{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}(0,o.Cg)([(0,s.CF)({mode:"boolean"})],p.prototype,"autofocus",void 0),(0,o.Cg)([(0,s.CF)({attribute:"form"})],p.prototype,"formId",void 0),(0,o.Cg)([s.CF],p.prototype,"formaction",void 0),(0,o.Cg)([s.CF],p.prototype,"formenctype",void 0),(0,o.Cg)([s.CF],p.prototype,"formmethod",void 0),(0,o.Cg)([(0,s.CF)({mode:"boolean"})],p.prototype,"formnovalidate",void 0),(0,o.Cg)([s.CF],p.prototype,"formtarget",void 0),(0,o.Cg)([s.CF],p.prototype,"type",void 0),(0,o.Cg)([n.sH],p.prototype,"defaultSlottedContent",void 0);class g{}(0,o.Cg)([(0,s.CF)({attribute:"aria-expanded"})],g.prototype,"ariaExpanded",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-pressed"})],g.prototype,"ariaPressed",void 0),(0,l.X)(g,r.z),(0,l.X)(p,a.qw,g)},6661:(e,t,i)=>{i.d(t,{D:()=>l,E:()=>a});var o=i(6025),s=i(2083);function n(e){return`${e.toLowerCase()}:presentation`}const r=new Map,a=Object.freeze({define(e,t,i){const o=n(e);void 0===r.get(o)?r.set(o,t):r.set(o,!1),i.register(s.cH.instance(o,t))},forTag(e,t){const i=n(e),o=r.get(i);return!1===o?s.DI.findResponsibleContainer(t).get(i):o||null}});class l{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?o.vv.create(t):t instanceof o.vv?t:o.vv.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}},6243:(e,t,i)=>{i.d(t,{G:()=>_});var o=i(1880),s=i(9717),n=i(4885),r=i(1784),a=i(2972),l=i(4331),d=i(6025);const c=document.createElement("div");class h{setProperty(e,t){l.dv.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){l.dv.queueUpdate((()=>this.target.removeProperty(e)))}}class u extends h{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class p extends h{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class g{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),n.cP.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),l.dv.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),l.dv.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:i}=this.style;if(i){const e=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[e].style}else this.target=null}}(0,o.Cg)([n.sH],g.prototype,"target",void 0);class f{constructor(e){this.target=e.style}setProperty(e,t){l.dv.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){l.dv.queueUpdate((()=>this.target.removeProperty(e)))}}class v{setProperty(e,t){v.properties[e]=t;for(const i of v.roots.values())y.getOrCreate(v.normalizeRoot(i)).setProperty(e,t)}removeProperty(e){delete v.properties[e];for(const t of v.roots.values())y.getOrCreate(v.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=v;if(!t.has(e)){t.add(e);const i=y.getOrCreate(this.normalizeRoot(e));for(const e in v.properties)i.setProperty(e,v.properties[e])}}static unregisterRoot(e){const{roots:t}=v;if(t.has(e)){t.delete(e);const i=y.getOrCreate(v.normalizeRoot(e));for(const e in v.properties)i.removeProperty(e)}}static normalizeRoot(e){return e===c?document:e}}v.roots=new Set,v.properties={};const m=new WeakMap,b=l.dv.supportsAdoptedStyleSheets?class extends h{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(d.vv.create([t]))}}:g,y=Object.freeze({getOrCreate(e){if(m.has(e))return m.get(e);let t;return t=e===c?new v:e instanceof Document?l.dv.supportsAdoptedStyleSheets?new u:new p:e instanceof r.L?new b(e):new f(e),m.set(e,t),t}});class w extends s.x{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=w.uniqueId(),w.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new w({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return w.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=S.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof w&&(t=this.alias(t)),S.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),S.existsFor(e)&&S.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(c,e),this}subscribe(e,t){const i=this.getOrCreateSubscriberSet(t);t&&!S.existsFor(t)&&S.getOrCreate(t),i.has(e)||i.add(e)}unsubscribe(e,t){const i=this.subscribers.get(t||this);i&&i.has(e)&&i.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}w.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),w.tokensById=new Map;class x{constructor(e,t,i){this.source=e,this.token=t,this.node=i,this.dependencies=new Set,this.observer=n.cP.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,n.Fj))}}class k{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),n.cP.getNotifier(this).notify(e.id))}get(e){return n.cP.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const C=new WeakMap,$=new WeakMap;class S{constructor(e){this.target=e,this.store=new k,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const i=w.getTokenById(t);if(i&&(i.notify(this.target),w.isCSSDesignToken(i))){const t=this.parent,o=this.isReflecting(i);if(t){const s=t.get(i),n=e.get(i);s===n||o?s===n&&o&&this.stopReflectToCSS(i):this.reflectToCSS(i)}else o||this.reflectToCSS(i)}}},C.set(e,this),n.cP.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof r.L?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return C.get(e)||new S(e)}static existsFor(e){return C.has(e)}static findParent(e){if(c!==e.target){let t=(0,a.Z)(e.target);for(;null!==t;){if(C.has(t))return C.get(t);t=(0,a.Z)(t)}return S.getOrCreate(c)}return null}static findClosestAssignedNode(e,t){let i=t;do{if(i.has(e))return i;i=i.parent?i.parent:i.target!==c?S.getOrCreate(c):null}while(null!==i);return null}get parent(){return $.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const i=this.getRaw(e);return void 0!==i?(this.hydrate(e,i),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=S.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){w.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),w.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=S.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&$.get(this).removeChild(this)}appendChild(e){e.parent&&$.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));$.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),n.cP.getNotifier(this.store).subscribe(e);for(const[t,i]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):i)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),n.cP.getNotifier(this.store).unsubscribe(e),e.parent===this&&$.delete(e)}contains(e){return function(e,t){let i=t;for(;null!==i;){if(i===e)return!0;i=(0,a.Z)(i)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),S.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),S.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const i=w.getTokenById(t);i&&this.hydrate(i,this.getRaw(i))}hydrate(e,t){if(!this.has(e)){const i=this.bindingObservers.get(e);w.isDerivedDesignTokenValue(t)?i?i.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(i&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const i=new x(t,e,this);return this.bindingObservers.set(e,i),i}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}S.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:i}=e;this.add(t,i)}add(e,t){y.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(S.getOrCreate(t).get(e)))}remove(e,t){y.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},(0,o.Cg)([n.sH],S.prototype,"children",void 0);const _=Object.freeze({create:function(e){return w.from(e)},notifyConnection:e=>!(!e.isConnected||!S.existsFor(e)||(S.getOrCreate(e).bind(),0)),notifyDisconnection:e=>!(e.isConnected||!S.existsFor(e)||(S.getOrCreate(e).unbind(),0)),registerRoot(e=c){v.registerRoot(e)},unregisterRoot(e=c){v.unregisterRoot(e)}})},2083:(e,t,i)=>{i.d(t,{DI:()=>p,cH:()=>P});var o=i(1784),s=i(4208);const n=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(i){Reflect.defineMetadata(e,t,i)}},Reflect.defineMetadata=function(e,t,i){let o=n.get(i);void 0===o&&n.set(i,o=new Map),o.set(e,t)},Reflect.getOwnMetadata=function(e,t){const i=n.get(t);if(void 0!==i)return i.get(e)});class r{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,F(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:i,key:o}=this;return this.container=this.key=void 0,i.registerResolver(o,new y(o,e,t))}}function a(e){const t=e.slice(),i=Object.keys(e),o=i.length;let s;for(let n=0;n<o;++n)s=i[n],V(s)||(t[s]=e[s]);return t}const l=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new y(e,1,e),transient:e=>new y(e,2,e)}),d=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:l.singleton})}),c=new Map;function h(e){return t=>Reflect.getOwnMetadata(e,t)}let u=null;const p=Object.freeze({createContainer:e=>new T(null,Object.assign({},d.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:p.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(I,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||p.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new T(e,Object.assign({},d.default,t,{parentLocator:p.findParentContainer})):u||(u=new T(null,Object.assign({},d.default,t,{parentLocator:()=>null}))),getDesignParamtypes:h("design:paramtypes"),getAnnotationParamtypes:h("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=c.get(e);if(void 0===t){const i=e.inject;if(void 0===i){const i=p.getDesignParamtypes(e),o=p.getAnnotationParamtypes(e);if(void 0===i)if(void 0===o){const i=Object.getPrototypeOf(e);t="function"==typeof i&&i!==Function.prototype?a(p.getDependencies(i)):[]}else t=a(o);else if(void 0===o)t=a(i);else{t=a(i);let e,s=o.length;for(let i=0;i<s;++i)e=o[i],void 0!==e&&(t[i]=e);const n=Object.keys(o);let r;s=n.length;for(let e=0;e<s;++e)r=n[e],V(r)||(t[r]=o[r])}}else t=a(i);c.set(e,t)}return t},defineProperty(e,t,i,s=!1){const n=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[n];if(void 0===e){const r=this instanceof HTMLElement?p.findResponsibleContainer(this):p.getOrCreateDOMContainer();if(e=r.get(i),this[n]=e,s&&this instanceof o.L){const o=this.$fastController,s=()=>{p.findResponsibleContainer(this).get(i)!==this[n]&&(this[n]=e,o.notify(t))};o.subscribe({handleChange:s},"isConnected")}}return e}})},createInterface(e,t){const i="function"==typeof e?e:t,o="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||R,s="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),n=function(e,t,i){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${n.friendlyName}'`);t?p.defineProperty(e,t,n,s):p.getOrCreateAnnotationParamTypes(e)[i]=n};return n.$isInterface=!0,n.friendlyName=null==o?"(anonymous)":o,null!=i&&(n.register=function(e,t){return i(new r(e,null!=t?t:n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject:(...e)=>function(t,i,o){if("number"==typeof o){const i=p.getOrCreateAnnotationParamTypes(t),s=e[0];void 0!==s&&(i[o]=s)}else if(i)p.defineProperty(t,i,e[0]);else{const i=o?p.getOrCreateAnnotationParamTypes(o.value):p.getOrCreateAnnotationParamTypes(t);let s;for(let t=0;t<e.length;++t)s=e[t],void 0!==s&&(i[t]=s)}},transient:e=>(e.register=function(t){return P.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=v)=>(e.register=function(t){return P.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),g=p.createInterface("Container");function f(e){return function(t){const i=function(e,t,o){p.inject(i)(e,t,o)};return i.$isResolver=!0,i.resolve=function(i,o){return e(t,i,o)},i}}p.inject;const v={scoped:!1};function m(e,t,i){p.inject(m)(e,t,i)}function b(e,t){return t.getFactory(e).construct(t)}f(((e,t,i)=>()=>i.get(e))),f(((e,t,i)=>i.has(e,!0)?i.get(e):void 0)),m.$isResolver=!0,m.resolve=()=>{},f(((e,t,i)=>{const o=b(e,t),s=new y(e,0,o);return i.registerResolver(e,s),o})),f(((e,t,i)=>b(e,t)));class y{constructor(e,t,i){this.key=e,this.strategy=t,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const i=e.getFactory(this.state);if(null===i)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,i,o;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(o=null===(i=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===i?void 0:i.call(t,e))&&void 0!==o?o:null;default:return null}}}function w(e){return this.get(e)}function x(e,t){return t(e)}class k{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let i;return i=void 0===t?new this.Type(...this.dependencies.map(w,e)):new this.Type(...this.dependencies.map(w,e),...t),null==this.transformers?i:this.transformers.reduce(x,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const C={$isResolver:!0,resolve:(e,t)=>t};function $(e){return"function"==typeof e.register}function S(e){return function(e){return $(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const _=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),I="__DI_LOCATE_PARENT__",A=new Map;class T{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(g,C),e instanceof Node&&e.addEventListener(I,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,i,o,s,n;const r=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],E(t))if($(t))t.register(this,r);else if(void 0!==t.prototype)P.singleton(t,t).register(this);else for(i=Object.keys(t),s=0,n=i.length;s<n;++s)o=t[i[s]],E(o)&&($(o)?o.register(this,r):this.register(o));return--this.registerDepth,this}registerResolver(e,t){L(e);const i=this.resolvers,o=i.get(e);return null==o?i.set(e,t):o instanceof y&&4===o.strategy?o.state.push(t):i.set(e,new y(e,4,[o,t])),t}registerTransformer(e,t){const i=this.getResolver(e);if(null==i)return!1;if(i.getFactory){const e=i.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(L(e),void 0!==e.resolve)return e;let i,o=this;for(;null!=o;){if(i=o.resolvers.get(e),null!=i)return i;if(null==o.parent){const i=S(e)?this:o;return t?this.jitRegister(e,i):null}o=o.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(L(e),e.$isResolver)return e.resolve(this,this);let t,i=this;for(;null!=i;){if(t=i.resolvers.get(e),null!=t)return t.resolve(i,this);if(null==i.parent){const o=S(e)?this:i;return t=this.jitRegister(e,o),t.resolve(i,this)}i=i.parent}throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){L(e);const i=this;let o,n=i;if(t){let t=s.tR;for(;null!=n;)o=n.resolvers.get(e),null!=o&&(t=t.concat(O(o,n,i))),n=n.parent;return t}for(;null!=n;){if(o=n.resolvers.get(e),null!=o)return O(o,n,i);if(n=n.parent,null==n)return s.tR}return s.tR}getFactory(e){let t=A.get(e);if(void 0===t){if(M(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);A.set(e,t=new k(e,p.getDependencies(e)))}return t}registerFactory(e,t){A.set(e,t)}createChild(e){return new T(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(_.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if($(e)){const i=e.register(t);if(!(i instanceof Object)||null==i.resolve){const i=t.resolvers.get(e);if(null!=i)return i;throw new Error("A valid resolver was not returned from the static register method")}return i}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const i=this.config.defaultResolver(e,t);return t.resolvers.set(e,i),i}}}const D=new WeakMap;function F(e){return function(t,i,o){if(D.has(o))return D.get(o);const s=e(t,i,o);return D.set(o,s),s}}const P=Object.freeze({instance:(e,t)=>new y(e,0,t),singleton:(e,t)=>new y(e,1,t),transient:(e,t)=>new y(e,2,t),callback:(e,t)=>new y(e,3,t),cachedCallback:(e,t)=>new y(e,3,F(t)),aliasTo:(e,t)=>new y(t,5,e)});function L(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function O(e,t,i){if(e instanceof y&&4===e.strategy){const o=e.state;let s=o.length;const n=new Array(s);for(;s--;)n[s]=o[s].resolve(t,i);return n}return[e.resolve(t,i)]}const R="(anonymous)";function E(e){return"object"==typeof e&&null!==e||"function"==typeof e}const M=function(){const e=new WeakMap;let t=!1,i="",o=0;return function(s){return t=e.get(s),void 0===t&&(i=s.toString(),o=i.length,t=o>=29&&o<=100&&125===i.charCodeAt(o-1)&&i.charCodeAt(o-2)<=32&&93===i.charCodeAt(o-3)&&101===i.charCodeAt(o-4)&&100===i.charCodeAt(o-5)&&111===i.charCodeAt(o-6)&&99===i.charCodeAt(o-7)&&32===i.charCodeAt(o-8)&&101===i.charCodeAt(o-9)&&118===i.charCodeAt(o-10)&&105===i.charCodeAt(o-11)&&116===i.charCodeAt(o-12)&&97===i.charCodeAt(o-13)&&110===i.charCodeAt(o-14)&&88===i.charCodeAt(o-15),e.set(s,t)),t}}(),H={};function V(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=H[e];if(void 0!==t)return t;const i=e.length;if(0===i)return H[e]=!1;let o=0;for(let t=0;t<i;++t)if(o=e.charCodeAt(t),0===t&&48===o&&i>1||o<48||o>57)return H[e]=!1;return H[e]=!0}default:return!1}}},9871:(e,t,i)=>{i.d(t,{dx:()=>p,rf:()=>u});var o=i(4208),s=i(4331),n=i(1039),r=i(4885),a=i(5230);const l="form-associated-proxy",d="ElementInternals",c=d in window&&"setFormValue"in window[d].prototype,h=new WeakMap;function u(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return c}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=e?t.concat(Array.from(e)):t;return Object.freeze(i)}return o.tR}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),s.dv.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),s.dv.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!c)return null;let e=h.get(this);return e||(e=this.attachInternals(),h.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,i){this.elementInternals?this.elementInternals.setValidity(e,t,i):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",l),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",l)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===a.Mm&&this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return(0,n.CF)({mode:"boolean"})(t.prototype,"disabled"),(0,n.CF)({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),(0,n.CF)({attribute:"current-value"})(t.prototype,"currentValue"),(0,n.CF)(t.prototype,"name"),(0,n.CF)({mode:"boolean"})(t.prototype,"required"),(0,r.sH)(t.prototype,"value"),t}function p(e){class t extends(u(e)){}class i extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return(0,n.CF)({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),(0,n.CF)({attribute:"current-checked",converter:n.Bs})(i.prototype,"currentChecked"),(0,r.sH)(i.prototype,"defaultChecked"),(0,r.sH)(i.prototype,"checked"),i}},4637:(e,t,i)=>{i.d(t,{g:()=>a});var o=i(1880),s=i(1784),n=i(4885),r=i(6661);class a extends s.L{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=r.E.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new d(this===a?class extends a{}:this,e,t)}}function l(e,t,i){return"function"==typeof e?e(t,i):e}(0,o.Cg)([n.sH],a.prototype,"template",void 0),(0,o.Cg)([n.sH],a.prototype,"styles",void 0);class d{constructor(e,t,i){this.type=e,this.elementDefinition=t,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const i=this.definition,o=this.overrideDefinition,s=`${i.prefix||t.elementPrefix}-${i.baseName}`;t.tryDefineElement({name:s,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new r.D(l(i.template,e,i),l(i.styles,e,i));e.definePresentation(t);let s=l(i.shadowOptions,e,i);e.shadowRootMode&&(s?o.shadowOptions||(s.mode=e.shadowRootMode):null!==s&&(s={mode:e.shadowRootMode})),e.defineElement({elementOptions:l(i.elementOptions,e,i),shadowOptions:s,attributes:l(i.attributes,e,i)})}})}}},7057:(e,t,i)=>{i.d(t,{z:()=>n});var o=i(1880),s=i(1039);class n{}(0,o.Cg)([(0,s.CF)({attribute:"aria-atomic"})],n.prototype,"ariaAtomic",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-busy"})],n.prototype,"ariaBusy",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-controls"})],n.prototype,"ariaControls",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-current"})],n.prototype,"ariaCurrent",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-describedby"})],n.prototype,"ariaDescribedby",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-details"})],n.prototype,"ariaDetails",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-disabled"})],n.prototype,"ariaDisabled",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-errormessage"})],n.prototype,"ariaErrormessage",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-flowto"})],n.prototype,"ariaFlowto",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-haspopup"})],n.prototype,"ariaHaspopup",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-hidden"})],n.prototype,"ariaHidden",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-invalid"})],n.prototype,"ariaInvalid",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-keyshortcuts"})],n.prototype,"ariaKeyshortcuts",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-label"})],n.prototype,"ariaLabel",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-labelledby"})],n.prototype,"ariaLabelledby",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-live"})],n.prototype,"ariaLive",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-owns"})],n.prototype,"ariaOwns",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-relevant"})],n.prototype,"ariaRelevant",void 0),(0,o.Cg)([(0,s.CF)({attribute:"aria-roledescription"})],n.prototype,"ariaRoledescription",void 0)},4882:(e,t,i)=>{i.d(t,{LT:()=>a,Sm:()=>l,aO:()=>r,pS:()=>d,qw:()=>n});var o=i(5960),s=i(6028);class n{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const r=(e,t)=>o.q`
    <span
        part="end"
        ${(0,s.K)("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${(0,s.K)("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,a=(e,t)=>o.q`
    <span
        part="start"
        ${(0,s.K)("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${(0,s.K)("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`,l=o.q`
    <span part="end" ${(0,s.K)("endContainer")}>
        <slot
            name="end"
            ${(0,s.K)("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,d=o.q`
    <span part="start" ${(0,s.K)("startContainer")}>
        <slot
            name="start"
            ${(0,s.K)("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`},9725:(e,t,i)=>{i.d(t,{z:()=>a});var o=i(1880),s=i(1039),n=i(4885),r=i(4637);class a extends r.g{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,i="number"==typeof this.value?this.value:0,o=t-e;this.percentComplete=0===o?0:Math.fround((i-e)/o*100)}}(0,o.Cg)([(0,s.CF)({converter:s.R$})],a.prototype,"value",void 0),(0,o.Cg)([(0,s.CF)({converter:s.R$})],a.prototype,"min",void 0),(0,o.Cg)([(0,s.CF)({converter:s.R$})],a.prototype,"max",void 0),(0,o.Cg)([(0,s.CF)({mode:"boolean"})],a.prototype,"paused",void 0),(0,o.Cg)([n.sH],a.prototype,"percentComplete",void 0)},9210:(e,t,i)=>{i.d(t,{X:()=>s});var o=i(1039);function s(e,...t){const i=o.$u.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((i=>{"constructor"!==i&&Object.defineProperty(e.prototype,i,Object.getOwnPropertyDescriptor(t.prototype,i))})),o.$u.locate(t).forEach((e=>i.push(e)))}))}},2972:(e,t,i)=>{function o(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}i.d(t,{Z:()=>o})},1731:(e,t,i)=>{i.d(t,{mr:()=>n});class o{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:t}=this,i=this.constructListener(e);i.bind(t)(),t.addListener(i),this.listenerCache.set(e,i)}unbind(e){const t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}}class s extends o{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new s(e,t)}constructListener(e){let t=!1;const i=this.styles;return function(){const{matches:o}=this;o&&!t?(e.$fastController.addStyles(i),t=o):!o&&t&&(e.$fastController.removeStyles(i),t=o)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const n=s.with(window.matchMedia("(forced-colors)"));s.with(window.matchMedia("(prefers-color-scheme: dark)")),s.with(window.matchMedia("(prefers-color-scheme: light)"))},8753:(e,t,i)=>{i.d(t,{Z:()=>o});const o="not-allowed"},7707:(e,t,i)=>{i.d(t,{V:()=>s});const o=":host([hidden]){display:none}";function s(e){return`${o}:host{display:${e}}`}},1445:(e,t,i)=>{i.d(t,{N:()=>o});const o=(0,i(3167).UA)()?"focus-visible":"focus"},6773:(e,t,i)=>{function o(e,t,i){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}i.d(t,{g:()=>o})},3167:(e,t,i)=>{function o(...e){return e.every((e=>e instanceof HTMLElement))}function s(e,t){if(e&&t&&o(e))return Array.from(e.querySelectorAll(t)).filter((e=>null!==e.offsetParent))}let n;function r(){if("boolean"==typeof n)return n;if("undefined"==typeof window||!window.document||!window.document.createElement)return n=!1,n;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),n=!0}catch(e){n=!1}finally{document.head.removeChild(e)}return n}i.d(t,{UA:()=>r,JL:()=>s,sb:()=>o})},5230:(e,t,i)=>{var o;i.d(t,{Ac:()=>u,F9:()=>d,FM:()=>h,HX:()=>s,I5:()=>a,Is:()=>m,J9:()=>v,Mm:()=>l,Tg:()=>c,bb:()=>r,f_:()=>p,gG:()=>f,kT:()=>n,oK:()=>g}),function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(o||(o={}));const s="ArrowDown",n="ArrowLeft",r="ArrowRight",a="ArrowUp",l="Enter",d="Escape",c="Home",h="End",u="F2",p="PageDown",g="PageUp",f=" ",v="Tab",m={ArrowDown:s,ArrowLeft:n,ArrowRight:r,ArrowUp:a}},1157:(e,t,i)=>{var o;i.d(t,{O:()=>o}),function(e){e.ltr="ltr",e.rtl="rtl"}(o||(o={}))},5096:(e,t,i)=>{function o(e,t,i){return Math.min(Math.max(i,e),t)}function s(e,t,i=0){return[t,i]=[t,i].sort(((e,t)=>e-t)),t<=e&&e<i}i.d(t,{AB:()=>o,r4:()=>s})},180:(e,t,i)=>{i.d(t,{NF:()=>s});let o=0;function s(e=""){return`${e}${o++}`}},882:(e,t,i)=>{var o;i.d(t,{A:()=>o}),function(e){e.Canvas="Canvas",e.CanvasText="CanvasText",e.LinkText="LinkText",e.VisitedText="VisitedText",e.ActiveText="ActiveText",e.ButtonFace="ButtonFace",e.ButtonText="ButtonText",e.Field="Field",e.FieldText="FieldText",e.Highlight="Highlight",e.HighlightText="HighlightText",e.GrayText="GrayText"}(o||(o={}))},1280:(e,t,i)=>{i.d(t,{OA:()=>o,WL:()=>n,u$:()=>s});const o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=e=>(...t)=>({_$litDirective$:e,values:t});class n{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},852:(e,t,i)=>{i.d(t,{XX:()=>q,c0:()=>S,ge:()=>z,qy:()=>$,s6:()=>_});const o=globalThis,s=o.trustedTypes,n=s?s.createPolicy("lit-html",{createHTML:e=>e}):void 0,r="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,l="?"+a,d=`<${l}>`,c=document,h=()=>c.createComment(""),u=e=>null===e||"object"!=typeof e&&"function"!=typeof e,p=Array.isArray,g=e=>p(e)||"function"==typeof e?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,b=/>/g,y=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),w=/'/g,x=/"/g,k=/^(?:script|style|textarea|title)$/i,C=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),$=C(1),S=(C(2),Symbol.for("lit-noChange")),_=Symbol.for("lit-nothing"),I=new WeakMap,A=c.createTreeWalker(c,129);function T(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==n?n.createHTML(t):t}const D=(e,t)=>{const i=e.length-1,o=[];let s,n=2===t?"<svg>":"",l=v;for(let t=0;t<i;t++){const i=e[t];let c,h,u=-1,p=0;for(;p<i.length&&(l.lastIndex=p,h=l.exec(i),null!==h);)p=l.lastIndex,l===v?"!--"===h[1]?l=m:void 0!==h[1]?l=b:void 0!==h[2]?(k.test(h[2])&&(s=RegExp("</"+h[2],"g")),l=y):void 0!==h[3]&&(l=y):l===y?">"===h[0]?(l=s??v,u=-1):void 0===h[1]?u=-2:(u=l.lastIndex-h[2].length,c=h[1],l=void 0===h[3]?y:'"'===h[3]?x:w):l===x||l===w?l=y:l===m||l===b?l=v:(l=y,s=void 0);const g=l===y&&e[t+1].startsWith("/>")?" ":"";n+=l===v?i+d:u>=0?(o.push(c),i.slice(0,u)+r+i.slice(u)+a+g):i+a+(-2===u?t:g)}return[T(e,n+(e[i]||"<?>")+(2===t?"</svg>":"")),o]};class F{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let n=0,d=0;const c=e.length-1,u=this.parts,[p,g]=D(e,t);if(this.el=F.createElement(p,i),A.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=A.nextNode())&&u.length<c;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(r)){const t=g[d++],i=o.getAttribute(e).split(a),s=/([.?@])?(.*)/.exec(t);u.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?E:"?"===s[1]?M:"@"===s[1]?H:R}),o.removeAttribute(e)}else e.startsWith(a)&&(u.push({type:6,index:n}),o.removeAttribute(e));if(k.test(o.tagName)){const e=o.textContent.split(a),t=e.length-1;if(t>0){o.textContent=s?s.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],h()),A.nextNode(),u.push({type:2,index:++n});o.append(e[t],h())}}}else if(8===o.nodeType)if(o.data===l)u.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(a,e+1));)u.push({type:7,index:n}),e+=a.length-1}n++}}static createElement(e,t){const i=c.createElement("template");return i.innerHTML=e,i}}function P(e,t,i=e,o){if(t===S)return t;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const n=u(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(e),s._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(t=P(e,s._$AS(e,t.values),s,o)),t}class L{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??c).importNode(t,!0);A.currentNode=o;let s=A.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new O(s,s.nextSibling,this,e):1===a.type?t=new a.ctor(s,a.name,a.strings,this,e):6===a.type&&(t=new V(s,this,e)),this._$AV.push(t),a=i[++r]}n!==a?.index&&(s=A.nextNode(),n++)}return A.currentNode=c,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),u(e)?e===_||null==e||""===e?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==S&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):g(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==_&&u(this._$AH)?this._$AA.nextSibling.data=e:this.T(c.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=F.createElement(T(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new L(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=I.get(e.strings);return void 0===t&&I.set(e.strings,t=new F(e)),t}k(e){p(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new O(this.S(h()),this.S(h()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,s){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(e,t=this,i,o){const s=this.strings;let n=!1;if(void 0===s)e=P(this,e,t,0),n=!u(e)||e!==this._$AH&&e!==S,n&&(this._$AH=e);else{const o=e;let r,a;for(e=s[0],r=0;r<s.length-1;r++)a=P(this,o[i+r],t,r),a===S&&(a=this._$AH[r]),n||=!u(a)||a!==this._$AH[r],a===_?e=_:e!==_&&(e+=(a??"")+s[r+1]),this._$AH[r]=a}n&&!o&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class E extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class M extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class H extends R{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){if((e=P(this,e,t,0)??_)===S)return;const i=this._$AH,o=e===_&&i!==_||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==_&&(i===_||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class V{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}const z={P:r,A:a,C:l,M:1,L:D,R:L,D:g,V:P,I:O,H:R,N:M,U:H,B:E,F:V},N=o.litHtmlPolyfillSupport;N?.(F,O),(o.litHtmlVersions??=[]).push("3.1.2");const q=(e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=i?.renderBefore??null;o._$litPart$=s=new O(t.insertBefore(h(),e),e,void 0,i??{})}return s._$AI(e),s}},3511:(e,t,i)=>{i.d(t,{MZ:()=>r,wk:()=>a});var o=i(5127);const s={attribute:!0,type:String,converter:o.W3,reflect:!1,hasChanged:o.Ec},n=(e=s,t,i)=>{const{kind:o,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,s,e)},init(t){return void 0!==t&&this.P(o,void 0,e),t}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];t.call(this,i),this.requestUpdate(o,s,e)}}throw Error("Unsupported decorator location: "+o)};function r(e){return(t,i)=>"object"==typeof i?n(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function a(e){return r({...e,state:!0,attribute:!1})}},6572:(e,t,i)=>{i.d(t,{H:()=>n});var o=i(852),s=i(1280);const n=(0,s.u$)(class extends s.WL{constructor(e){if(super(e),e.type!==s.OA.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return o.c0}})},1550:(e,t,i)=>{i.d(t,{J:()=>s});var o=i(852);const s=e=>e??o.s6},9313:(e,t,i)=>{i.d(t,{u:()=>u});var o=i(852),s=i(1280);const{I:n}=o.ge,r=()=>document.createComment(""),a=(e,t,i)=>{const o=e._$AA.parentNode,s=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=o.insertBefore(r(),s),a=o.insertBefore(r(),s);i=new n(t,a,e,e.options)}else{const t=i._$AB.nextSibling,n=i._$AM,r=n!==e;if(r){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==n._$AU&&i._$AP(t)}if(t!==s||r){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,s),e=t}}}return i},l=(e,t,i=e)=>(e._$AI(t,i),e),d={},c=e=>{e._$AP?.(!1,!0);let t=e._$AA;const i=e._$AB.nextSibling;for(;t!==i;){const e=t.nextSibling;t.remove(),t=e}},h=(e,t,i)=>{const o=new Map;for(let s=t;s<=i;s++)o.set(e[s],s);return o},u=(0,s.u$)(class extends s.WL{constructor(e){if(super(e),e.type!==s.OA.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let o;void 0===i?i=t:void 0!==t&&(o=t);const s=[],n=[];let r=0;for(const t of e)s[r]=o?o(t,r):r,n[r]=i(t,r),r++;return{values:n,keys:s}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,s]){const n=e._$AH,{values:r,keys:u}=this.dt(t,i,s);if(!Array.isArray(n))return this.ut=u,r;const p=this.ut??=[],g=[];let f,v,m=0,b=n.length-1,y=0,w=r.length-1;for(;m<=b&&y<=w;)if(null===n[m])m++;else if(null===n[b])b--;else if(p[m]===u[y])g[y]=l(n[m],r[y]),m++,y++;else if(p[b]===u[w])g[w]=l(n[b],r[w]),b--,w--;else if(p[m]===u[w])g[w]=l(n[m],r[w]),a(e,g[w+1],n[m]),m++,w--;else if(p[b]===u[y])g[y]=l(n[b],r[y]),a(e,n[m],n[b]),b--,y++;else if(void 0===f&&(f=h(u,y,w),v=h(p,m,b)),f.has(p[m]))if(f.has(p[b])){const t=v.get(u[y]),i=void 0!==t?n[t]:null;if(null===i){const t=a(e,n[m]);l(t,r[y]),g[y]=t}else g[y]=l(i,r[y]),a(e,n[m],i),n[t]=null;y++}else c(n[b]),b--;else c(n[m]),m++;for(;y<=w;){const t=a(e,g[w+1]);l(t,r[y]),g[y++]=t}for(;m<=b;){const e=n[m++];null!==e&&c(e)}return this.ut=u,((e,t=d)=>{e._$AH=t})(e,g),o.c0}})},7573:(e,t,i)=>{i.d(t,{WF:()=>n,AH:()=>o.AH,qy:()=>s.qy,s6:()=>s.s6});var o=i(5127),s=i(852);class n extends o.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,s.XX)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return s.c0}}n._$litElement$=!0,n.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:n});const r=globalThis.litElementPolyfillSupport;r?.({LitElement:n}),(globalThis.litElementVersions??=[]).push("4.0.4")},1635:(e,t,i)=>{function o(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}function s(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))}i.d(t,{Cg:()=>o,sH:()=>s}),Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}},t={};function i(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o=i(5468),s=i(3204),n=i(5076);class r{}var a=i(2783);class l{constructor(e,t,i,o){this.resource=i.startsWith("/")?i:`/${i}`,this.method=o,this.index=e,this.id=t}}var d=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};class c{static get baseUrl(){return"https://graph.microsoft.com"}constructor(e){this.graph=e,this.allRequests=[],this.requestsQueue=[],this.scopes=[],this.nextIndex=0,this.retryAfter=0}get hasRequests(){return this.requestsQueue.length>0}get(e,t,i,o){const s=this.nextIndex++,n=new l(s,e,t,"GET");n.headers=o,this.allRequests.push(n),this.requestsQueue.push(s),i&&(this.scopes=this.scopes.concat(i))}executeNext(){return d(this,void 0,void 0,(function*(){const e=new Map;var t,i,o,s,l;if(this.retryAfter&&(yield(t=1e3*this.retryAfter,i=void 0,o=void 0,s=void 0,l=function*(){return new Promise((e=>{setTimeout(e,t)}))},new(s||(s=Promise))((function(e,t){function n(e){try{a(l.next(e))}catch(e){t(e)}}function r(e){try{a(l.throw(e))}catch(e){t(e)}}function a(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(n,r)}a((l=l.apply(i,o||[])).next())}))),this.retryAfter=0),!this.hasRequests)return e;const d=this.requestsQueue.splice(0,20),h=new n.Tz;for(const e of d.map((e=>this.allRequests[e])))h.addRequest({id:e.index.toString(),request:new Request(c.baseUrl+e.resource,{method:e.method,headers:e.headers})});const u=this.scopes.length?(0,a.F)(this.scopes):[],p=this.graph.api("$batch").middlewareOptions(u),g=yield h.getContent(),f=yield p.post(g);for(const t of f.responses){const i=new r,o=parseInt(t.id,10),s=this.allRequests[o];if(i.id=s.id,i.index=s.index,i.headers=t.headers,200===t.status)"string"==typeof t.body?t.headers["Content-Type"].includes("image/jpeg")?i.content="data:image/jpeg;base64,"+t.body:t.headers["Content-Type"].includes("image/pjpeg")?i.content="data:image/pjpeg;base64,"+t.body:t.headers["Content-Type"].includes("image/png")&&(i.content="data:image/png;base64,"+t.body):i.content=t.body,e.set(s.id,i);else if(429===t.status){this.requestsQueue.unshift(o);const e=t.headers["Retry-After"];this.retryAfter=Math.max(this.retryAfter,parseInt(e,10)||1)}}return e}))}executeAll(){return d(this,void 0,void 0,(function*(){const e=new Map;for(;this.hasRequests;){const t=yield this.executeNext();for(const[i,o]of t)e.set(i,o)}return e}))}}class h{constructor(e){this.componentName="string"==typeof e?e:e.tagName.toLowerCase()}}var u=i(4425);class p{get client(){return this._client}get componentName(){return this._componentName}get version(){return this._version}constructor(e,t="v1.0"){this._client=e,this._version=t}forComponent(e){const t=new p(this._client,this._version);return t.setComponent(e),t}api(e){let t=this._client.api(e).version(this._version);return this._componentName&&(t.middlewareOptions=e=>(t._middlewareOptions=t._middlewareOptions.concat(e),t),t=t.middlewareOptions([new h(this._componentName)])),t}createBatch(){return new c(this)}setComponent(e){this._componentName=e instanceof Element?u.U.normalize(e.tagName):e}}const g=(...e)=>{const t=e[0];let i=t;for(let t=1;t<e.length;++t){const o=e[t];i.setNext&&i.setNext(o),i=o}return t};var f=i(5100),v=i(9889);class m{constructor(e,t){this._packageVersion=e,this._providerName=t}execute(e){var t,i,o,s,n;return i=this,o=void 0,n=function*(){try{if("string"==typeof e.request)if((0,v.N)(e.request)){const t=[],i=e.middlewareControl.getMiddlewareOptions(h);if(i){const e=`${i.componentName}/${this._packageVersion}`;t.push(e)}if(this._providerName){const e=`${this._providerName}/${this._packageVersion}`;t.push(e)}const o=`mgt/${this._packageVersion}`;t.push(o),t.push((0,f.XH)(e.request,e.options,"SdkVersion"));const s=t.join(", ");(0,f.RO)(e.request,e.options,"SdkVersion",s)}else null===(t=null==e?void 0:e.options)||void 0===t||delete t.headers.SdkVersion}catch(e){}return yield this._nextMiddleware.execute(e)},new((s=void 0)||(s=Promise))((function(e,t){function r(e){try{l(n.next(e))}catch(e){t(e)}}function a(e){try{l(n.throw(e))}catch(e){t(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(r,a)}l((n=n.apply(i,o||[])).next())}))}setNext(e){this._nextMiddleware=e}}var b=i(1933);class y{constructor(e){this._getCustomHeaders=e}execute(e){return t=this,i=void 0,s=function*(){if(this._getCustomHeaders){const t=yield this._getCustomHeaders();for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(0,f.RO)(e.request,e.options,i,t[i])}return yield this._nextMiddleware.execute(e)},new((o=void 0)||(o=Promise))((function(e,n){function r(e){try{l(s.next(e))}catch(e){n(e)}}function a(e){try{l(s.throw(e))}catch(e){n(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(r,a)}l((s=s.apply(t,i||[])).next())}));var t,i,o,s}setNext(e){this._nextMiddleware=e}}class w extends p{constructor(e,t){const i=[new n.Z$(new n.Rz),new n.MD,new m(b.i),new y(t),new n.eg];super(n.Kj.initWithMiddleware({baseUrl:e,middleware:g(...i),customHosts:new Set([new URL(e).hostname])}))}}class x extends s.DH{get name(){return"MgtProxyProvider"}constructor(e,t){super(),this.graph=new w(e,t),this.graph.api("me").get().then((e=>{null!=e?this.setState(s.HJ.SignedIn):this.setState(s.HJ.SignedOut)}),(e=>{this.setState(s.HJ.SignedOut)}))}getAccessToken(){return Promise.resolve("")}}var k=i(9754),C=i(8099),$=i(7573),S=i(3511),_=i(5292),I=i(6172);const A=[$.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--card-height:auto;--card-width:99%;background-color:var(--agenda-background-color,transparent)}:host .header{margin:var(--agenda-header-margin,18px 0 12px 10px);font-size:var(--agenda-header-font-size, 24px);font-style:normal;font-weight:400;line-height:32px;color:var(--agenda-header-color,var(--neutral-foreground-rest));opacity:.9}:host .agenda,:host .group{display:flex;flex-direction:column;row-gap:var(--agenda-event-row-gap,14px)}:host .agenda>.group:first-child>.header,:host .group>.group:first-child>.header{margin-top:0}:host .agenda .event,:host .group .event{background:var(--agenda-event-background-color,var(--fill-color));border:var(--agenda-event-border,solid 2px transparent);box-shadow:var(--agenda-event-box-shadow,var(--elevation-shadow-card-rest));padding:var(--agenda-event-padding,12px);position:relative;display:flex;flex:1 1 auto;content-visibility:visible;contain:none}:host .agenda .event-container,:host .group .event-container{border-radius:calc(var(--layer-corner-radius) * 1px);padding:1px}:host .agenda .event.narrow,:host .group .event.narrow{display:flex;flex-direction:column;inset:0}:host .agenda .event-time-container,:host .group .event-time-container{font-style:normal;font-weight:600;font-size:12px;color:var(--agenda-event-time-color,var(--neutral-foreground-rest));width:112px;height:16px}:host .agenda .event-time-container.narrow,:host .group .event-time-container.narrow{margin-bottom:1px;width:100%}:host .agenda .event-time,:host .group .event-time{font-size:var(--agenda-event-time-font-size, 12px);color:var(--agenda-event-time-color,var(--neutral-foreground-rest));font-weight:600}:host .agenda .event-details-container,:host .group .event-details-container{display:flex;flex-direction:column;position:relative;bottom:8px;top:0;padding-inline-start:32px}:host .agenda .event-details-container.narrow,:host .group .event-details-container.narrow{position:inherit;left:6px;display:flex;flex-direction:column;padding-inline-start:0}:host .agenda .event-subject,:host .group .event-subject{font-style:normal;font-weight:400;font-size:var(--agenda-event-subject-font-size, 20px);line-height:28px;color:var(--agenda-event-subject-color,var(--neutral-foreground-rest));mix-blend-mode:normal;position:inherit;bottom:8px}:host .agenda .event-location-container,:host .group .event-location-container{display:inline-flex;flex-direction:row}:host .agenda .event-location-container .event-location,:host .group .event-location-container .event-location{padding-inline-start:3px;font-style:normal;font-weight:400;font-size:var(--agenda-event-location-font-size, 12px);line-height:16px;color:var(--agenda-event-location-color,var(--neutral-foreground-rest))}:host .agenda .event-location-container .event-location-loading,:host .group .event-location-container .event-location-loading{width:90px;height:10px;margin:2px 0 0 4px}:host .agenda .event-location-container .event-location-icon,:host .group .event-location-container .event-location-icon{display:inline-flex}:host .agenda .event-location-container .event-location-icon svg,:host .group .event-location-container .event-location-icon svg{position:relative;top:2px;width:12px;height:12px}:host .agenda .event-location-container .event-location-icon svg path,:host .group .event-location-container .event-location-icon svg path{stroke:var(--agenda-event-location-color,var(--neutral-foreground-rest))}:host .agenda .event-location-container .event-location-icon-loading,:host .group .event-location-container .event-location-icon-loading{width:14px;height:14px}:host .agenda .event-location-container .event-attendee-loading,:host .group .event-location-container .event-attendee-loading{width:20px;height:20px;border-radius:10px;margin:0 2px 0 0}:host .agenda .event-attendees,:host .group .event-attendees{--list-margin:8px 0 0 0;--person-avatar-size:20px}fluent-card.event.event-loading{--card-height:90px}:host .event-attendees{--color:$agenda-event-attendees-color}:host fluent-tooltip{width:auto;contain:inline-size}[dir=rtl] :host{direction:rtl}[dir=rtl] .event-time-container{direction:ltr;display:flex;justify-content:flex-end}@media (forced-colors:active) and (prefers-color-scheme:dark){:host .agenda .event-location-container .event-location-icon svg path{stroke:rgb(255,255,255)!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host .agenda .event-location-container .event-location-icon svg path{stroke:rgb(0,0,0)!important}}
`];var T=i(4980),D=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const F=(e,t,i)=>D(void 0,void 0,void 0,(function*(){const o=e.api(t).middlewareOptions((0,a.F)(i)).orderby("start/dateTime");return T.E.create(e,o)}));var P=i(1309),L=i(9313),O=i(3765),R=i(9239),E=i(4545),M=i(5045),H=i(7323);const V=[$.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .people-list{list-style:none;margin:var(--people-list-margin,8px 4px 8px 8px);padding:unset;display:flex;align-items:center;gap:var(--people-avatar-gap,4px)}:host .people-list .people-person{--person-avatar-size:var(--people-person-avatar-size, 24px)}:host .overflow span{vertical-align:middle;color:var(--people-overflow-font-color,currentColor);font-size:var(--people-overflow-font-size, 12px);font-weight:var(--people-overflow-font-weight,400)}
`];var z=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},N=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};const q=()=>{(0,k.sN)(),(0,M.N)("people",B)};class B extends _.N{static get styles(){return V}static get requiredScopes(){return[...new Set(["user.read.all","people.read","user.readbasic.all","presence.read.all","contacts.read",...k.O$.requiredScopes])]}constructor(){super(),this.personCardInteraction="hover",this.version="v1.0",this.scopes=[],this._peoplePresence={},this._arrowKeyLocation=-1,this.renderContent=()=>this.people&&0!==this.people.length?this.renderTemplate("default",{people:this.people,max:this.showMax})||this.renderPeople():this.renderNoData(),this.renderLoading=()=>this.renderTemplate("loading",null)||$.qy``,this.handleKeyDown=e=>{const t=this.shadowRoot.querySelector(".people-list");let i;const o=null==t?void 0:t.children,s=e.key;for(const e of o){const t=e;t.removeAttribute("tabindex"),i=null==t?void 0:t.querySelector("mgt-person"),i=null==i?void 0:i.shadowRoot.querySelector(".person-root"),null==i||i.removeAttribute("tabindex"),t.blur()}e.target!==t||"Tab"!==s&&"Escape"!==s||(this._arrowKeyLocation=-1,null==t||t.blur());let n=null==t?void 0:t.childElementCount,r=null==t?void 0:t.querySelector(".overflow");if(r&&(r.removeAttribute("tabindex"),n--),"ArrowRight"===s)this._arrowKeyLocation=(this._arrowKeyLocation+1+n)%n;else if("ArrowLeft"===s)this._arrowKeyLocation=(this._arrowKeyLocation-1+n)%n;else if(["Enter","space"," "].includes(s)&&"none"!==this.personCardInteraction){const e=o[this._arrowKeyLocation].querySelector("mgt-person");e&&e.showPersonCard()}this._arrowKeyLocation>-1&&(i=o[this._arrowKeyLocation],i.setAttribute("tabindex","0"),i.focus(),i=i.querySelector(".people-person"),null==i||i.shadowRoot.querySelector(".person-root").setAttribute("tabindex","0"))},this.showMax=3}clearState(){this.people=null}args(){return[this.providerState,this.groupId,this.userIds,this.peopleQueries,this.showMax,this.resource,this.version,this.fallbackDetails]}updated(e){super.updated(e),this.checkPeopleListAndFireEvent()}checkPeopleListAndFireEvent(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".people-list");(null==t?void 0:t.childElementCount)>0&&this.fireCustomEvent("people-rendered")}renderPeople(){const e=this.people.slice(0,this.showMax).filter((e=>e));return $.qy`
      <ul
        tabindex="0"
        class="people-list"
        aria-label="people"
        @keydown=${this.handleKeyDown}>
        ${(0,L.u)(e,(e=>e.id?e.id:e.displayName),(e=>$.qy`
            <li class="people-person">
              ${this.renderPerson(e)}
            </li>
          `))}
        ${this.people.length>this.showMax?this.renderOverflow():null}
      </ul>
    `}renderOverflow(){const e=this.people.length-this.showMax;return this.renderTemplate("overflow",{extra:e,max:this.showMax,people:this.people})||$.qy`
        <li aria-label="and ${e} more attendees" class="overflow"><span>+${e}</span></li>
      `}renderPerson(e){let t={activity:"Offline",availability:"Offline",id:null};return this.showPresence&&this._peoplePresence&&(t=this._peoplePresence[e.id]),this.renderTemplate("person",{person:e},e.id)||I.Q`
        <mgt-person
          .personDetails=${e}
          .fetchImage=${!0}
          .avatarSize=${"small"}
          .personCardInteraction=${this.personCardInteraction}
          .showPresence=${this.showPresence}
          .personPresence=${t}
          .usage=${"people"}
        ></mgt-person>
      `}renderNoData(){return this.renderTemplate("no-data",null)||$.qy``}loadState(){return e=this,t=void 0,n=function*(){if(!this.people){const e=o.b.globalProvider;if(e&&e.state===s.HJ.SignedIn){const t=e.graph.forComponent(this);this.groupId?this.people=yield(0,E.sb)(t,null,this.groupId,this.showMax,"person"):this.userIds?this.people=yield(0,E.$q)(t,this.userIds,"","",this.fallbackDetails):this.peopleQueries?this.people=yield(0,E.vl)(t,this.peopleQueries,this.fallbackDetails):this.resource?this.people=yield(0,O.ox)(t,this.version,this.resource,this.scopes):this.people=yield(0,O.cB)(t),this.showPresence?this._peoplePresence=yield(0,R.u)(t,this.people):this._peoplePresence=null}}},new((i=void 0)||(i=Promise))((function(o,s){function r(e){try{l(n.next(e))}catch(e){s(e)}}function a(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((n=n.apply(e,t||[])).next())}));var e,t,i,n}}z([(0,S.MZ)({attribute:"group-id",type:String}),N("design:type",String)],B.prototype,"groupId",void 0),z([(0,S.MZ)({attribute:"user-ids",converter:(e,t)=>e.split(",").map((e=>e.trim()))}),N("design:type",Array)],B.prototype,"userIds",void 0),z([(0,S.MZ)({attribute:"people",type:Object}),N("design:type",Array)],B.prototype,"people",void 0),z([(0,S.MZ)({attribute:"people-queries",converter:(e,t)=>e.split(",").map((e=>e.trim()))}),N("design:type",Array)],B.prototype,"peopleQueries",void 0),z([(0,S.MZ)({attribute:"show-max",type:Number}),N("design:type",Number)],B.prototype,"showMax",void 0),z([(0,S.MZ)({attribute:"show-presence",type:Boolean}),N("design:type",Boolean)],B.prototype,"showPresence",void 0),z([(0,S.MZ)({attribute:"person-card",converter:(e,t)=>(0,H.e)(e,"hover")}),N("design:type",String)],B.prototype,"personCardInteraction",void 0),z([(0,S.MZ)({attribute:"resource",type:String}),N("design:type",String)],B.prototype,"resource",void 0),z([(0,S.MZ)({attribute:"version",type:String}),N("design:type",Object)],B.prototype,"version",void 0),z([(0,S.MZ)({attribute:"scopes",converter:e=>e?e.toLowerCase().split(","):null,reflect:!0}),N("design:type",Array)],B.prototype,"scopes",void 0),z([(0,S.MZ)({attribute:"fallback-details",type:Array}),N("design:type",Array)],B.prototype,"fallbackDetails",void 0),z([(0,S.wk)(),N("design:type",Object)],B.prototype,"_arrowKeyLocation",void 0);var U=i(6389),j=i(2615),Z=i(6572),W=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},G=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},Q=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};class K extends _.N{constructor(){super(...arguments),this.days=3,this.renderContent=()=>{if(!this.events||0===this.events.length)return this.renderNoData();const e=this.showMax&&this.showMax>0?this.events.slice(0,this.showMax):this.events,t=this.renderTemplate("default",{events:e});if(t)return t;const i={agenda:!0,grouped:this.groupByDay};return $.qy`
      <div dir=${this.direction} class="${(0,Z.H)(i)}">
        ${this.groupByDay?this.renderGroups(e):this.renderEvents(e)}
      </div>
    `},this.renderLoading=()=>this.renderTemplate("loading",null)||$.qy`
        <fluent-card class="event event-loading">
          <div class="event-time-container">
            <div class="event-time-loading loading-element"></div>
          </div>
          <div class="event-details-container">
            <div class="event-subject-loading loading-element"></div>
            <div class="event-location-container">
              <div class="event-location-icon-loading loading-element"></div>
              <div class="event-location-loading loading-element"></div>
            </div>
            <div class="event-location-container">
              <div class="event-attendee-loading loading-element"></div>
              <div class="event-attendee-loading loading-element"></div>
              <div class="event-attendee-loading loading-element"></div>
            </div>
          </div>
        </fluent-card>`,this.onResize=()=>{this._isNarrow=this.offsetWidth<600}}static get styles(){return A}static get requiredScopes(){return[...new Set(["calendars.read",...B.requiredScopes])]}connectedCallback(){this._isNarrow=this.offsetWidth<600,super.connectedCallback(),window.addEventListener("resize",this.onResize)}disconnectedCallback(){window.removeEventListener("resize",this.onResize),super.disconnectedCallback()}reload(){return Q(this,void 0,void 0,(function*(){this.events=yield this.loadEvents()}))}clearState(){this.events=null}renderNoData(){return this.renderTemplate("no-data",null)||$.qy``}renderEvent(e){this._isNarrow=this.offsetWidth<600;const t={narrow:this._isNarrow};return $.qy`
      <fluent-card class="${(0,Z.H)(Object.assign({event:!0},t))}">
        <div class="${(0,Z.H)(Object.assign({"event-time-container":!0},t))}">
          <div class="event-time" aria-label="${this.getEventTimeString(e)}">${this.getEventTimeString(e)}</div>
        </div>
        <div class="${(0,Z.H)(Object.assign({"event-details-container":!0},t))}">
          ${this.renderTitle(e)} ${this.renderLocation(e)} ${this.renderAttendees(e)}
        </div>
        <div class="event-other-container">${this.renderOther(e)}</div>
      </fluent-card>
    `}renderHeader(e){return this.renderTemplate("header",{header:e},"header-"+e)||$.qy`
        <div class="header" aria-label="${e}">${e}</div>
      `}renderTitle(e){return $.qy`
      <div
        aria-label=${e.subject}
        class="${(0,Z.H)({"event-subject":!0,narrow:this._isNarrow})}"
      >
        ${e.subject}
      </div>`}renderLocation(e){return e.location.displayName?$.qy`
      <div class="event-location-container">
        <div class="event-location-icon">${(0,P.r)(P.A.OfficeLocation)}</div>
        <div class="event-location" aria-label="${e.location.displayName}">${e.location.displayName}</div>
      </div>
    `:null}renderAttendees(e){return e.attendees.length?I.Q`
      <mgt-people
        show-max="5"
        show-presence
        class="event-attendees"
        .peopleQueries=${e.attendees.map((e=>e.emailAddress.address))}
      ></mgt-people>
    `:null}renderOther(e){return this.hasTemplate("event-other")?$.qy`
          ${this.renderTemplate("event-other",{event:e},e.id+"-other")}
        `:null}renderGroups(e){const t={};return e.forEach((e=>{var i;let o=null===(i=null==e?void 0:e.start)||void 0===i?void 0:i.dateTime;"UTC"===e.end.timeZone&&(o+="Z");const s=this.getDateHeaderFromDateTimeString(o);t[s]=t[s]||[],t[s].push(e)})),$.qy`
      ${Object.keys(t).map((e=>$.qy`
            <div class="group">${this.renderHeader(e)} ${this.renderEvents(t[e])}</div>
          `))}
    `}renderEvents(e){return $.qy`
        ${e.map((e=>$.qy`
              <div
                class="event-container"
                tabindex="0"
                @focus=${()=>this.eventClicked(e)}>
                ${this.renderTemplate("event",{event:e},e.id)||this.renderEvent(e)}
              </div>`))}`}args(){return[this.providerState,this.preferredTimezone,this.eventQuery,this.date,this.groupId,this.days]}loadState(){return Q(this,void 0,void 0,(function*(){if(this.events)return;const e=yield this.loadEvents();(null==e?void 0:e.length)>0&&(this.events=e)}))}eventClicked(e){this.fireCustomEvent("eventClick",e)}getEventTimeString(e){if(e.isAllDay)return"ALL DAY";let t=e.start.dateTime;"UTC"===e.start.timeZone&&(t+="Z");let i=e.end.dateTime;return"UTC"===e.end.timeZone&&(i+="Z"),`${this.prettyPrintTimeFromDateTime(new Date(t))} - ${this.prettyPrintTimeFromDateTime(new Date(i))}`}loadEvents(){return Q(this,void 0,void 0,(function*(){const e=o.b.globalProvider;let t=[];if((null==e?void 0:e.state)===s.HJ.SignedIn){const i=e.graph.forComponent(this);if(this.eventQuery)try{const e=this.eventQuery.split("|");let o,s;e.length>1?(s=e[0].trim(),o=e[1].trim()):s=this.eventQuery;const n=yield F(i,s,o?[o]:[]);if(null==n?void 0:n.value)for(t=n.value;n.hasNext;)yield n.next(),t=n.value}catch(e){}else{const e=this.date?new Date(this.date):new Date,o=new Date(e.getTime());o.setDate(e.getDate()+this.days);try{const s=yield((e,t,i,o)=>D(void 0,void 0,void 0,(function*(){const s=`startdatetime=${t.toISOString()}`,n=`enddatetime=${i.toISOString()}`;return F(e,o?`groups/${o}/calendar/calendarview?${s}&${n}`:`me/calendarview?${s}&${n}`,o?["Group.Read.All","Group.ReadWrite.All"]:["Calendars.ReadBasic","Calendars.Read","Calendars.ReadWrite"])})))(i,e,o,this.groupId);if(null==s?void 0:s.value)for(t=s.value;s.hasNext;)yield s.next(),t=s.value}catch(e){}}}return t}))}prettyPrintTimeFromDateTime(e){return e.toLocaleTimeString(navigator.language,{timeStyle:"short",timeZone:this.preferredTimezone})}getDateHeaderFromDateTimeString(e){return new Date(e).toLocaleDateString(navigator.language,{dateStyle:"full",timeZone:this.preferredTimezone})}}W([(0,S.MZ)({attribute:"date",type:String}),G("design:type",String)],K.prototype,"date",void 0),W([(0,S.MZ)({attribute:"group-id",type:String}),G("design:type",String)],K.prototype,"groupId",void 0),W([(0,S.MZ)({attribute:"days",type:Number}),G("design:type",Object)],K.prototype,"days",void 0),W([(0,S.MZ)({attribute:"event-query",type:String}),G("design:type",String)],K.prototype,"eventQuery",void 0),W([(0,S.MZ)({attribute:"events",type:Array,hasChanged:(e,t)=>e!==t}),G("design:type",Array)],K.prototype,"events",void 0),W([(0,S.MZ)({attribute:"show-max",type:Number}),G("design:type",Number)],K.prototype,"showMax",void 0),W([(0,S.MZ)({attribute:"group-by-day",type:Boolean}),G("design:type",Boolean)],K.prototype,"groupByDay",void 0),W([(0,S.MZ)({attribute:"preferred-timezone",type:String}),G("design:type",String)],K.prototype,"preferredTimezone",void 0),W([(0,S.MZ)({attribute:!1}),G("design:type",Boolean)],K.prototype,"_isNarrow",void 0);var X=i(5232),J=i(2368),Y=i(4747),ee=i(7723),te=i(3558),ie=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},oe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};const se=e=>Array.isArray(null==e?void 0:e.value),ne=["json","image"],re=()=>X._.config.response.isEnabled&&X._.config.isEnabled,ae=()=>(0,M.N)("get",le);class le extends _.N{constructor(){super(...arguments),this.scopes=[],this.version="v1.0",this.type="json",this.maxPages=3,this.pollingRate=0,this.cacheEnabled=!1,this.cacheInvalidationPeriod=0,this.isPolling=!1,this.isRefreshing=!1,this.renderLoading=()=>{const e=this.renderTemplate("loading",null);return se(this.response)?this.renderValueContentWithDefaultTemplate($.qy`${this.response.value.map((e=>this.renderTemplate("value",e,e.id)))} ${e} `):e},this.renderContent=()=>{if(this.hasTemplate("value")&&se(this.response)){const e=se(this.response)?$.qy`
          ${this.response.value.map((e=>this.renderTemplate("value",e,e.id)))}
        `:this.renderTemplate("value",this.response);return this.renderValueContentWithDefaultTemplate(e)}return this.response?this.renderTemplate("default",this.response)||$.qy``:this.hasTemplate("no-data")?this.renderTemplate("no-data",null):$.qy``}}refresh(e=!1){this.isRefreshing=!0,e&&this.clearState(),this._task.run()}clearState(){this.response=null}args(){return[this.providerState,this.resource,this.scopes,this.version,this.pollingRate,this.type,this.maxPages,this.cacheEnabled,this.cacheInvalidationPeriod]}renderValueContentWithDefaultTemplate(e){var t,i;if(this.hasTemplate("default")){const o=this.renderTemplate("default",this.response);return(null!==(i=null===(t=this.templates.value)||void 0===t?void 0:t.templateOrder)&&void 0!==i?i:999)>this.templates.default.templateOrder?$.qy`
          ${o}${e}
        `:$.qy`
          ${e}${o}
        `}return e}loadState(){var e,t,i,n,r,l,d;return n=this,r=void 0,d=function*(){const n=o.b.globalProvider;if(this.error=null,n&&n.state===s.HJ.SignedIn){if(this.resource){try{let o;const s=`${this.version}${this.resource}`;let r=null;if(this.shouldRetrieveCache()){o=X._.getCache(te.j.get,te.j.get.stores.responses);const e=re()?yield o.getValue(s):null;e&&(this.cacheInvalidationPeriod||X._.config.response.invalidationPeriod||X._.config.defaultInvalidationPeriod)>Date.now()-e.timeCached&&(r=JSON.parse(e.response))}if(!r){let l=this.resource,d=!1;(null===(e=this.response)||void 0===e?void 0:e["@odata.deltaLink"])?(l=this.response["@odata.deltaLink"],d=!0):d=new URL(l,"https://graph.microsoft.com").pathname.endsWith("delta");const c=n.graph.forComponent(this);let h=c.api(l).version(this.version);if((null===(t=this.scopes)||void 0===t?void 0:t.length)&&(h=h.middlewareOptions((0,a.F)(this.scopes))),"json"===this.type){if(r=yield h.get(),d&&se(this.response)&&se(r)){const e=r.value;r.value=this.response.value.concat(e)}if(this.isPolling||(0,J.a)(this.response,r)||(this.response=r),se(r)&&r["@odata.nextLink"]){let e=1,t=r;for(;(e<this.maxPages||this.maxPages<=0||d&&this.pollingRate)&&(null==t?void 0:t["@odata.nextLink"]);){e++;const o=t["@odata.nextLink"].split(this.version)[1];t=yield c.api(o).version(this.version).get(),(null===(i=null==t?void 0:t.value)||void 0===i?void 0:i.length)&&(t.value=r.value.concat(t.value),r=t,this.isPolling||(this.response=r))}}}else{if(-1===this.resource.indexOf("/photo/$value")&&-1===this.resource.indexOf("/thumbnails/"))throw new Error("Only /photo/$value and /thumbnails/ endpoints support the image type");let e;if(this.resource.indexOf("/photo/$value")>-1){const t=this.resource.replace("/photo/$value",""),i=yield(0,Y.e_)(c,t,this.scopes);i&&(e=i.photo)}else if(this.resource.indexOf("/thumbnails/")>-1){const t=yield(0,ee.W1)(c,this.resource,this.scopes);t&&(e=t.thumbnail)}e&&(r={image:e})}this.shouldUpdateCache()&&r&&(o=X._.getCache(te.j.get,te.j.get.stores.responses),yield o.putValue(s,{response:JSON.stringify(r)}))}(0,J.a)(this.response,r)||(this.response=r)}catch(e){this.error=e}this.response&&(this.error=null,this.pollingRate&&setTimeout((()=>{this.isPolling=!0,this.loadState().finally((()=>{this.isPolling=!1}))}),this.pollingRate))}else this.response=null;this.isRefreshing=!1,this.fireCustomEvent("dataChange",{response:this.response,error:this.error},!0,!1,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{s(d.next(e))}catch(e){t(e)}}function o(e){try{s(d.throw(e))}catch(e){t(e)}}function s(t){var s;t.done?e(t.value):(s=t.value,s instanceof l?s:new l((function(e){e(s)}))).then(i,o)}s((d=d.apply(n,r||[])).next())}))}shouldRetrieveCache(){return re()&&this.cacheEnabled&&!(this.isRefreshing||this.isPolling)}shouldUpdateCache(){return re()&&this.cacheEnabled}}ie([(0,S.MZ)({attribute:"resource",reflect:!0,type:String}),oe("design:type",String)],le.prototype,"resource",void 0),ie([(0,S.MZ)({attribute:"scopes",converter:(e,t)=>e?e.toLowerCase().split(","):null,reflect:!0}),oe("design:type",Array)],le.prototype,"scopes",void 0),ie([(0,S.MZ)({attribute:"version",reflect:!0,type:String}),oe("design:type",Object)],le.prototype,"version",void 0),ie([(0,S.MZ)({attribute:"type",reflect:!0,type:String,converter:e=>((e,t="json")=>(e=>"string"==typeof e&&ne.includes(e))(e)?e:t)(e,"json")}),oe("design:type",String)],le.prototype,"type",void 0),ie([(0,S.MZ)({attribute:"max-pages",reflect:!0,type:Number}),oe("design:type",Object)],le.prototype,"maxPages",void 0),ie([(0,S.MZ)({attribute:"polling-rate",reflect:!0,type:Number}),oe("design:type",Object)],le.prototype,"pollingRate",void 0),ie([(0,S.MZ)({attribute:"cache-enabled",reflect:!0,type:Boolean}),oe("design:type",Object)],le.prototype,"cacheEnabled",void 0),ie([(0,S.MZ)({attribute:"cache-invalidation-period",type:Number}),oe("design:type",Object)],le.prototype,"cacheInvalidationPeriod",void 0),ie([(0,S.MZ)({attribute:!1}),oe("design:type",Object)],le.prototype,"response",void 0),ie([(0,S.MZ)({attribute:!1}),oe("design:type",Object)],le.prototype,"error",void 0);var de=i(1550),ce=i(8932),he=i(2157);const ue=[$.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .signed-in-person{--person-background-color:$signed-in-background-color;padding:var(--login-button-padding,10px 16px)}:host .account{padding:0;margin:7px 0}:host .account,:host .person,:host .signed-in-person{--person-avatar-size:var(--login-person-avatar-size, 40px)}:host fluent-button.signed-in{height:auto;min-width:auto}:host fluent-button.signed-in::part(control){width:100%;height:100%;padding:var(--login-button-padding,0);background:var(--login-signed-in-background,transparent);word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host fluent-button.signed-in::part(control):focus-within,:host fluent-button.signed-in::part(control):hover{background:var(--login-signed-in-hover-background,var(--neutral-fill-stealth-hover));--secondary-text-color:var(--secondary-text-hover-color)}:host fluent-button.signed-out::part(control){color:var(--login-signed-out-button-text-color,var(--neutral-fill-foreground-rest));background:var(--login-signed-out-button-background,padding-box linear-gradient(var(--neutral-fill-rest),var(--neutral-fill-rest)),border-box var(--neutral-stroke-control-rest))}:host fluent-button.signed-out::part(control):focus-within,:host fluent-button.signed-out::part(control):hover{background:var(--login-signed-out-button-hover-background,var(--neutral-fill-stealth-hover))}:host fluent-button.small::part(control):hover{background:0 0}:host fluent-button:focus-visible{outline-style:var(--focus-ring-style,auto)}:host fluent-card{--fill-color:var(--login-popup-background-color, var(--neutral-layer-1));padding:var(--login-popup-padding,16px)}:host .login-root .small .signed-in-person{padding:0;background:0 0}:host .login-root .small .signed-in-person:focus-within,:host .login-root .small .signed-in-person:hover{background:0 0}:host .login-root .account-list{padding:calc(var(--design-unit) * 1px) 0;margin:0}:host .login-root .account-item{height:auto;min-width:auto;margin-top:4px;background:var(--login-popup-background-color,var(--neutral-layer-1));list-style-type:none;cursor:pointer}:host .login-root .account-item:hover{background:var(--login-account-item-hover-bg-color,var(--neutral-fill-stealth-hover));--person-background-color:$login-account-item-hover-bg-color}:host .login-root .flyout .flyout-command{color:var(--login-flyout-command-text-color,var(--accent-foreground-rest))}:host .login-root .flyout .popup-content .commands{display:flex;align-items:flex-end;justify-content:flex-end}:host .login-root .flyout .popup-content .commands fluent-button::part(control){color:var(--login-command-button-text-color,var(--neutral-fill-foreground-rest));background:var(--login-command-button-background-color,var(--neutral-fill-stealth-rest));word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host .login-root .flyout .popup-content .commands fluent-button::part(control):hover{background:var(--login-command-button-hover-background-color,var(--neutral-fill-stealth-hover))}:host .login-root .flyout .popup-content .content .main-profile{margin-bottom:56px;margin-top:27px}:host .login-root .flyout .popup-content .add-account{padding-top:16px}:host .login-root .flyout .popup-content .add-account fluent-button::part(control){color:var(--login-add-account-button-text-color,var(--neutral-fill-foreground-rest));background:var(--login-add-account-button-background-color,var(--neutral-fill-stealth-rest));word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host .login-root .flyout .popup-content .add-account fluent-button::part(control):hover{background:var(--login-add-account-button-hover-background-color,var(--neutral-fill-stealth-hover))}
`],pe={signInLinkSubtitle:"Sign In",signOutLinkSubtitle:"Sign Out",signInWithADifferentAccount:"Sign in with a different account"};var ge=i(1880),fe=i(4885),ve=i(1039),me=i(5230),be=i(180),ye=i(4637),we=i(3167),xe=i(7057),ke=i(4882),Ce=i(9210);function $e(e){return(0,we.sb)(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class Se extends ye.g{constructor(e,t,i,o){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),i&&(this.defaultSelected=i),o&&(this.selected=o),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),fe.cP.notify(this,"value")}get value(){var e;return fe.cP.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}(0,ge.Cg)([fe.sH],Se.prototype,"checked",void 0),(0,ge.Cg)([fe.sH],Se.prototype,"content",void 0),(0,ge.Cg)([fe.sH],Se.prototype,"defaultSelected",void 0),(0,ge.Cg)([(0,ve.CF)({mode:"boolean"})],Se.prototype,"disabled",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"selected",mode:"boolean"})],Se.prototype,"selectedAttribute",void 0),(0,ge.Cg)([fe.sH],Se.prototype,"selected",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"value",mode:"fromView"})],Se.prototype,"initialValue",void 0);class _e{}(0,ge.Cg)([fe.sH],_e.prototype,"ariaChecked",void 0),(0,ge.Cg)([fe.sH],_e.prototype,"ariaPosInSet",void 0),(0,ge.Cg)([fe.sH],_e.prototype,"ariaSelected",void 0),(0,ge.Cg)([fe.sH],_e.prototype,"ariaSetSize",void 0),(0,Ce.X)(_e,xe.z),(0,Ce.X)(Se,ke.qw,_e);class Ie extends ye.g{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return fe.cP.track(this,"options"),this._options}set options(e){this._options=e,fe.cP.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const i=e>t?-1:e<t?1:0,o=e+i;let s=null;switch(i){case-1:s=this.options.reduceRight(((e,t,i)=>!e&&!t.disabled&&i<o?t:e),s);break;case 1:s=this.options.reduce(((e,t,i)=>!e&&!t.disabled&&i>o?t:e),s)}return this.options.indexOf(s)}handleChange(e,t){"selected"===t&&(Ie.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions())}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),Ie.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case me.Tg:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case me.HX:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case me.I5:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case me.FM:e.preventDefault(),this.selectLastOption();break;case me.J9:return this.focusAndScrollOptionIntoView(),!0;case me.Mm:case me.F9:return!0;case me.gG:if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var i;if(this.hasSelectableOptions){if((null===(i=this.options[this.selectedIndex])||void 0===i?void 0:i.disabled)&&"number"==typeof e){const i=this.getSelectableIndex(e,t),o=i>-1?i:e;return this.selectedIndex=o,void(t===o&&this.selectedIndexChanged(t,o))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var i;const o=t.filter(Ie.slottedOptionFilter);null===(i=this.options)||void 0===i||i.forEach((e=>{const t=fe.cP.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=o.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let i=e.length;for(;i--;)if(!e[i].disabled)return i;return-1}(this.options))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,i;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>($e(t)&&e.push(t),e)),[]);const i=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=(0,be.NF)("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=i})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}Ie.slottedOptionFilter=e=>$e(e)&&!e.hidden,Ie.TYPE_AHEAD_TIMEOUT_MS=1e3,(0,ge.Cg)([(0,ve.CF)({mode:"boolean"})],Ie.prototype,"disabled",void 0),(0,ge.Cg)([fe.sH],Ie.prototype,"selectedIndex",void 0),(0,ge.Cg)([fe.sH],Ie.prototype,"selectedOptions",void 0),(0,ge.Cg)([fe.sH],Ie.prototype,"slottedOptions",void 0),(0,ge.Cg)([fe.sH],Ie.prototype,"typeaheadBuffer",void 0);class Ae{}(0,ge.Cg)([fe.sH],Ae.prototype,"ariaActiveDescendant",void 0),(0,ge.Cg)([fe.sH],Ae.prototype,"ariaDisabled",void 0),(0,ge.Cg)([fe.sH],Ae.prototype,"ariaExpanded",void 0),(0,ge.Cg)([fe.sH],Ae.prototype,"ariaMultiSelectable",void 0),(0,Ce.X)(Ae,xe.z),(0,Ce.X)(Ie,Ae);var Te=i(5960),De=i(1840),Fe=i(4331),Pe=i(5096);class Le extends Ie{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var i,o;this.ariaActiveDescendant=null!==(o=null===(i=this.options[t])||void 0===i?void 0:i.id)&&void 0!==o?o:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=(0,Pe.r4)(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=(0,Pe.r4)(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=(0,Pe.r4)(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=(0,Pe.r4)(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const i=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return i&&!i.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:i}=e;switch(this.shouldSkipFocus=!1,t){case me.Tg:return void this.checkFirstOption(i);case me.HX:return void this.checkNextOption(i);case me.I5:return void this.checkPreviousOption(i);case me.FM:return void this.checkLastOption(i);case me.J9:return this.focusAndScrollOptionIntoView(),!0;case me.F9:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case me.gG:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var i;this.ariaMultiSelectable=t?"true":null,null===(i=this.options)||void 0===i||i.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var i;const o=Math.max(0,parseInt(null!==(i=null==t?void 0:t.toFixed())&&void 0!==i?i:"",10));o!==t&&Fe.dv.queueUpdate((()=>{this.size=o}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}(0,ge.Cg)([fe.sH],Le.prototype,"activeIndex",void 0),(0,ge.Cg)([(0,ve.CF)({mode:"boolean"})],Le.prototype,"multiple",void 0),(0,ge.Cg)([(0,ve.CF)({converter:ve.R$})],Le.prototype,"size",void 0);var Oe=i(5861),Re=i(7707),Ee=i(9931),Me=i(1151);const He=class extends Ie{}.compose({baseName:"listbox",template:(e,t)=>Te.q`
    <template
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        class="listbox"
        role="listbox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        <slot
            ${(0,De.e)({filter:Le.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,styles:(e,t)=>Oe.A`
    ${(0,Re.V)("inline-flex")} :host {
      border: calc(${Ee.XAH} * 1px) solid ${Ee.I21};
      border-radius: calc(${Ee.PbG} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${Ee.vR1} * 1px) 0;
    }

    ::slotted(${e.tagFor(Se)}) {
      margin: 0 calc(${Ee.vR1} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${Me.W}
    }
  `});var Ve=i(4791),ze=i(7404),Ne=i(6247),qe=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},Be=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},Ue=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};class je extends _.N{static get styles(){return ue}get strings(){return pe}get flyout(){return this.renderRoot.querySelector(".flyout")}static get requiredScopes(){return[...new Set(["user.read",...k.O$.requiredScopes])]}get _userDetailsKey(){return"-userDetails"}constructor(){super(),this.showPresence=!1,this.loginView="full",this._arrowKeyLocation=-1,this.logout=()=>Ue(this,void 0,void 0,(function*(){if(!this.fireCustomEvent("logoutInitiated"))return;const e=o.b.globalProvider;if(null==e?void 0:e.logout){const t=e.getActiveAccount();yield e.logout(),this.userDetails=null,e.isMultiAccountSupportedAndEnabled&&localStorage.removeItem((null==t?void 0:t.id)+this._userDetailsKey),this.hideFlyout(),this.fireCustomEvent("logoutCompleted")}})),this.renderContent=()=>$.qy`
      <div class="login-root">
        ${this.renderButton()}
        ${this.renderFlyout()}
      </div>`,this.flyoutOpened=()=>{this._isFlyoutOpen=!0},this.flyoutClosed=()=>{this._isFlyoutOpen=!1},this.onUserKeyDown=e=>{if(!this.flyout.isOpen)return;const t=this.renderRoot.querySelector(".popup-content"),i=t.querySelectorAll("ul, fluent-button"),o=t.querySelector("#signout-button")||i[0],s=t.querySelector("#signin-different-account-button")||i[i.length-1];if("Tab"===e.key&&e.shiftKey&&o===e.target&&(e.preventDefault(),null==s||s.focus()),"Tab"!==e.key||e.shiftKey||s!==e.target||(e.preventDefault(),null==o||o.focus()),"Escape"===e.key){const e=this.renderRoot.querySelector("#login-button");null==e||e.focus()}const n=this.renderRoot.querySelector("fluent-card");e.shiftKey&&"Tab"===e.key&&e.target===n&&this.hideFlyout()},this.handleAccountListKeyDown=e=>{const t=this.renderRoot.querySelector("ul.account-list");let i;const o=null==t?void 0:t.children;for(const e of o){const t=e;t.setAttribute("tabindex","-1"),t.blur()}const s=t.childElementCount,n=e.key;if("ArrowDown"===n)this._arrowKeyLocation=(this._arrowKeyLocation+1+s)%s;else if("ArrowUp"===n)this._arrowKeyLocation=(this._arrowKeyLocation-1+s)%s;else if("Tab"===n||"Escape"===n)return this._arrowKeyLocation=-1,t.blur(),void("Escape"===n&&(e.preventDefault(),e.stopPropagation()));this._arrowKeyLocation>-1&&(i=o[this._arrowKeyLocation],i.setAttribute("tabindex","1"),i.focus())},this.onClick=()=>{this.userDetails&&this._isFlyoutOpen?this.hideFlyout():this.userDetails?this.showFlyout():this.login()},this._isFlyoutOpen=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(e=>e.stopPropagation()))}login(){return Ue(this,void 0,void 0,(function*(){const e=o.b.globalProvider;(!this.userDetails&&this.fireCustomEvent("loginInitiated")||e.isMultiAccountSupportedAndEnabled)&&(null==e?void 0:e.login)&&(yield e.login(),e.state===s.HJ.SignedIn?this.fireCustomEvent("loginCompleted"):this.fireCustomEvent("loginFailed"))}))}args(){return[this.providerState]}loadState(){return Ue(this,void 0,void 0,(function*(){const e=o.b.globalProvider;e&&!this.userDetails&&(e.state===s.HJ.SignedIn?(this.userDetails=yield(0,he._)(e.graph.forComponent(this)),this.userDetails.personImage&&(this._image=this.userDetails.personImage),e.isMultiAccountSupportedAndEnabled&&localStorage.setItem(o.b.globalProvider.getActiveAccount().id+this._userDetailsKey,JSON.stringify(this.userDetails)),this.fireCustomEvent("loginCompleted")):this.userDetails=null)}))}renderButton(){var e;const t=(null===(e=o.b.globalProvider)||void 0===e?void 0:e.state)===s.HJ.SignedIn,i=(0,Z.H)({"signed-in":t&&Boolean(this.userDetails),"signed-out":!t,small:"avatar"===this.loginView}),n=t?"stealth":"neutral",r=t&&this.userDetails,a=r?this.renderSignedInButtonContent(this.userDetails,this._image):this.renderSignedOutButtonContent(),l=r?this._isFlyoutOpen:void 0;return $.qy`
      <fluent-button
        id="login-button"
        aria-expanded="${(0,de.J)(l)}"
        appearance=${n}
        aria-label="${(0,de.J)(t?void 0:this.strings.signInLinkSubtitle)}"
        ?disabled=${this._task.status===Ne.e1.PENDING}
        @click=${this.onClick}
        class=${i}>
          ${a}
      </fluent-button>`}renderFlyout(){return I.Q`
      <mgt-flyout
        class="flyout"
        light-dismiss
        @opened=${this.flyoutOpened}
        @closed=${this.flyoutClosed}>
        <fluent-card
          slot="flyout"
          tabindex="0"
          class="flyout-card"
          @keydown=${this.onUserKeyDown}
          >
          ${this.renderFlyoutContent()}
        </fluent-card>
      </mgt-flyout>`}renderFlyoutContent(){if(this.userDetails)return $.qy`
       <div class="popup">
         <div class="popup-content">
           <div class="commands">
             ${this.renderFlyoutCommands()}
           </div>
           <div class="content">
             <div class="main-profile">
               ${this.renderFlyoutPersonDetails(this.userDetails,this._image)}
             </div>
             ${this.renderAccounts()}
           </div>
           ${this.renderAddAccountContent()}
         </div>
       </div>
     `}get hasMultipleAccounts(){var e,t,i,s;return(null===(e=o.b.globalProvider)||void 0===e?void 0:e.isMultiAccountSupportedAndEnabled)&&(null===(s=null===(i=null===(t=o.b.globalProvider)||void 0===t?void 0:t.getAllAccounts)||void 0===i?void 0:i.call(t))||void 0===s?void 0:s.length)>1}get usesVerticalPersonCard(){return"full"===this.loginView||this.hasMultipleAccounts}renderFlyoutPersonDetails(e,t){return this.renderTemplate("flyout-person-details",{personDetails:e,personImage:t})||I.Q`
        <mgt-person
          .personDetails=${e}
          .personImage=${t}
          view="twolines"
          .line2Property=${"email"}
          ?vertical-layout=${this.usesVerticalPersonCard}
          class="person">
        </mgt-person>`}renderFlyoutCommands(){return this.renderTemplate("flyout-commands",{handleSignOut:()=>this.logout()})||$.qy`
        <fluent-button
          id="signout-button"
          appearance="stealth"
          size="medium"
          class="flyout-command"
          @click=${this.logout}
          aria-label=${this.strings.signOutLinkSubtitle}>
            ${this.strings.signOutLinkSubtitle}
        </fluent-button>`}renderButtonContent(){return this.userDetails?this.renderSignedInButtonContent(this.userDetails,this._image):this.renderSignedOutButtonContent()}renderAddAccountContent(){if(o.b.globalProvider.isMultiAccountSupportedAndEnabled)return $.qy`
        <div class="add-account">
          <fluent-button
            id="signin-different-account-button"
            appearance="stealth"
            aria-label="${this.strings.signInWithADifferentAccount}"
            @click=${()=>{this.login()}}>
            <span slot="start"><i>${(0,P.r)(P.A.SelectAccount,"currentColor")}</i></span>
            ${this.strings.signInWithADifferentAccount}
          </fluent-button>
        </div>`}parsePersonDisplayConfiguration(){const e={view:"twolines",avatarSize:"small"};switch(this.loginView){case"avatar":e.view="image",e.avatarSize="small";break;case"compact":e.view="oneline",e.avatarSize="small";break;default:e.view="twolines",e.avatarSize="auto"}return e}renderSignedInButtonContent(e,t){const i=this.renderTemplate("signed-in-button-content",{personDetails:e,personImage:t}),o=this.parsePersonDisplayConfiguration();return i||I.Q`
        <mgt-person
          .personDetails=${this.userDetails}
          .personImage=${this._image}
          .view=${o.view}
          .showPresence=${this.showPresence}
          .avatarSize=${o.avatarSize}
          line2-property="email"
          class="signed-in-person"
        ></mgt-person>`}renderAccounts(){if(o.b.globalProvider.state===s.HJ.SignedIn&&o.b.globalProvider.isMultiAccountSupportedAndEnabled){const e=o.b.globalProvider,t=e.getAllAccounts();if((null==t?void 0:t.length)>1)return $.qy`
          <div id="accounts">
            <ul
              tabindex="0"
              class="account-list"
              part="account-list"
              aria-label="${this.ariaLabel}"
              @keydown=${this.handleAccountListKeyDown}
            >
              ${t.filter((t=>t.id!==e.getActiveAccount().id)).map((e=>{const t=localStorage.getItem(e.id+this._userDetailsKey);return I.Q`
                    <li
                      tabindex="-1"
                      part="account-item"
                      class="account-item"
                      @click=${()=>this.setActiveAccount(e)}
                      @keyup=${t=>{"Enter"===t.key&&this.setActiveAccount(e)}}
                    >
                      <mgt-person
                        .personDetails=${t?JSON.parse(t):null}
                        .fallbackDetails=${{displayName:e.name,mail:e.mail}}
                        .view=${"twolines"}
                        class="account"
                      ></mgt-person>
                    </li>`}))}
            </ul>
          </div>
       `}}setActiveAccount(e){o.b.globalProvider.setActiveAccount(e)}clearState(){this.userDetails=null,this._image=null}renderSignedOutButtonContent(){return this.renderTemplate("signed-out-button-content",null)||$.qy`
        <span>${this.strings.signInLinkSubtitle}</span>`}showFlyout(){const e=this.flyout;e&&e.open()}hideFlyout(){const e=this.flyout;e&&e.close()}}qe([(0,S.MZ)({attribute:"user-details",type:Object}),Be("design:type",Object)],je.prototype,"userDetails",void 0),qe([(0,S.MZ)({attribute:"show-presence",type:Boolean}),Be("design:type",Object)],je.prototype,"showPresence",void 0),qe([(0,S.MZ)({attribute:"login-view",type:String}),Be("design:type",String)],je.prototype,"loginView",void 0),qe([(0,S.wk)(),Be("design:type",Boolean)],je.prototype,"_isFlyoutOpen",void 0),qe([(0,S.wk)(),Be("design:type",Object)],je.prototype,"_arrowKeyLocation",void 0);var Ze=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const We=["any","unified","security","mailenabledsecurity","distribution"],Ge=e=>"string"==typeof e&&We.includes(e),Qe=(e,t="any")=>Ge(e)?e:t,Ke=()=>X._.config.groups.invalidationPeriod||X._.config.defaultInvalidationPeriod,Xe=()=>X._.config.groups.isEnabled&&X._.config.isEnabled,Je=["GroupMember.Read.All","Group.Read.All","Directory.Read.All","Group.ReadWrite.All","Directory.ReadWrite.All"],Ye=(e,t,i=10,o=["any"],s="")=>Ze(void 0,void 0,void 0,(function*(){let n;const r=`${t||"*"}*${o.join("+")}*${s}:${i}`;if(Xe()){n=X._.getCache(te.j.groups,te.j.groups.stores.groupsQuery);const e=yield n.getValue(r);if(e&&Ke()>Date.now()-e.timeCached&&e.top>=i)return e.groups.map((e=>JSON.parse(e))).slice(0,i+1)}let l,d="";const c=[];if(""!==t&&(d=`(startswith(displayName,'${t}') or startswith(mailNickname,'${t}') or startswith(mail,'${t}'))`),s&&(d+=`${t?" and ":""}${s}`),o.includes("any")){if(0===c.length){const t=yield e.api("groups").filter(d).top(i).count(!0).header("ConsistencyLevel","eventual").middlewareOptions((0,a.F)(Je)).get();return Xe()&&t&&(yield n.putValue(r,{groups:t.value.map((e=>JSON.stringify(e))),top:i})),t?t.value:null}}else{const t=e.createBatch(),s=[];o.includes("unified")&&s.push("groupTypes/any(c:c+eq+'Unified')"),o.includes("security")&&s.push("(mailEnabled eq false and securityEnabled eq true)"),o.includes("mailenabledsecurity")&&s.push("(mailEnabled eq true and securityEnabled eq true)"),o.includes("distribution")&&s.push("(mailEnabled eq true and securityEnabled eq false)"),d=d?`${d} and `:"";for(const e of s)t.get(e,`/groups?$filter=${d+e}`,Je);try{l=yield t.executeAll();for(const e of s)if(l.get(e).content.value)for(const t of l.get(e).content.value)c.find((e=>e.id===t.id))||c.push(t)}catch(t){try{const t=[];for(const o of s)t.push(e.api("groups").filter(`${d} and ${o}`).top(i).count(!0).header("ConsistencyLevel","eventual").middlewareOptions((0,a.F)(Je)).get());return(yield Promise.all(t)).map((e=>e.value)).reduce(((e,t)=>e.concat(t)),[])}catch(e){return[]}}}return c})),et=(e,t,i)=>Ze(void 0,void 0,void 0,(function*(){let o;if(Xe()){o=X._.getCache(te.j.groups,te.j.groups.stores.groups);const e=yield o.getValue(t);if(e&&Ke()>Date.now()-e.timeCached){const t=e.group?JSON.parse(e.group):null,o=i&&t?i.filter((e=>!Object.keys(t).includes(e))):null;if(!o||o.length<=1)return t}}let s=`/groups/${t}`;i&&(s=s+"?$select="+i.toString());const n=yield e.api(s).middlewareOptions((0,a.F)(Je)).get();return Xe()&&(yield o.putValue(t,{group:JSON.stringify(n)})),n})),tt=(e,t,i="")=>Ze(void 0,void 0,void 0,(function*(){if(!t||0===t.length)return[];const o=e.createBatch(),s={},n=[];let r;Xe()&&(r=X._.getCache(te.j.groups,te.j.groups.stores.groups));for(const e of t){let t;if(s[e]=null,Xe()&&(t=yield r.getValue(e)),t&&Ke()>Date.now()-t.timeCached)s[e]=t.group?JSON.parse(t.group):null;else if(""!==e){let t=`/groups/${e}`;i&&(t=`${t}?$filters=${i}`),o.get(e,t,Je),n.push(e)}}try{const e=yield o.executeAll();for(const i of t){const t=e.get(i);(null==t?void 0:t.content)&&(s[i]=t.content,Xe()&&(yield r.putValue(i,{group:JSON.stringify(t.content)})))}return Promise.all(Object.values(s))}catch(i){try{return t.filter((e=>n.includes(e))).forEach((t=>{s[t]=et(e,t)})),Xe()&&(yield Promise.all(t.filter((e=>n.includes(e))).map((e=>Ze(void 0,void 0,void 0,(function*(){return yield r.putValue(e,{group:JSON.stringify(yield s[e])})})))))),Promise.all(Object.values(s))}catch(e){return[]}}}));var it=i(7822);const ot=[$.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--person-details-wrapper-width:0;width:auto}:host fluent-text-field{width:100%;font-size:var(--people-picker-font-size, 14px)}:host fluent-text-field::part(root){display:flex;flex-wrap:wrap;height:auto;background:padding-box linear-gradient(var(--people-picker-input-background,var(--neutral-fill-input-rest)),var(--people-picker-input-background,var(--neutral-fill-input-rest))),border-box var(--people-picker-input-border-color,var(--neutral-stroke-input-rest))}:host fluent-text-field::part(root):hover{background:padding-box linear-gradient(var(--people-picker-input-hover-background,var(--neutral-fill-input-hover)),var(--people-picker-input-hover-background,var(--neutral-fill-input-hover))),border-box var(--people-picker-input-hover-border-color,var(--neutral-stroke-input-hover))}:host fluent-text-field::part(root):focus,:host fluent-text-field::part(root):focus-within{background:padding-box linear-gradient(var(--people-picker-input-focus-background,var(--neutral-fill-input-focus)),var(--people-picker-input-focus-background,var(--neutral-fill-input-focus))),border-box var(--people-picker-input-focus-border-color,var(--neutral-stroke-input-focus))}:host fluent-text-field::part(start){margin:unset}:host fluent-text-field::part(control){width:auto;flex-grow:1;min-width:25%;height:calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px);word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host fluent-text-field::part(control)::placeholder{color:var(--people-picker-input-placeholder-text-color,var(--input-placeholder-rest))}:host fluent-text-field::part(control):hover::placeholder{color:var(--people-picker-input-placeholder-hover-text-color,var(--input-placeholder-hover))}:host fluent-text-field::part(control):focus-within::placeholder,:host fluent-text-field::part(control):focus::placeholder{color:var(--people-picker-input-placeholder-focus-text-color,var(--input-placeholder-filled))}:host fluent-text-field .search-icon{display:flex;padding-top:10px;padding-inline-start:10px}:host fluent-text-field .search-icon svg path{fill:var(--people-picker-search-icon-color,currentColor)}:host .selected-list{display:flex;flex-wrap:wrap;column-gap:5px;padding:unset;margin:0 5px}:host .selected-list-item{display:flex;column-gap:5px;border-radius:100px;margin-top:3px;background-color:var(--people-picker-selected-option-background-color,var(--person-background-color,var(--neutral-layer-3)))}:host .selected-list-item.highlighted{background-color:var(--people-picker-selected-option-highlight-background-color,var(--accent-fill-rest))}:host .selected-list-item-close-icon{display:flex;justify-content:center;align-items:center;padding-inline-end:8px;cursor:pointer}:host .selected-list-item-close-icon svg path{fill:var(--people-picker-remove-selected-close-icon-color,currentColor)}:host .selected-list-item .person-image-selected{width:max-content;--person-avatar-size:var(--people-picker-selected-person-avatar-size, 24px)}:host fluent-card{margin-top:4px;background-color:var(--people-picker-dropdown-background-color,var(--fill-color))}:host .searched-people-list{list-style:none;padding:4px;margin:auto}:host .searched-people-list-result{padding:4px;border-radius:4px;background:var(--people-picker-dropdown-result-background-color,var(--person-background-color,transparent))}:host .searched-people-list-result:hover{background:var(--people-picker-dropdown-result-hover-background-color,var(--person-background-color,var(--neutral-fill-input-hover)))}:host .searched-people-list-result:focus,:host .searched-people-list-result:focus-within{background:var(--people-picker-dropdown-result-focus-background-color,var(--person-background-color,var(--neutral-fill-input-focus)))}:host .searched-people-list-result .person-image-result{--person-avatar-size:var(--people-picker-result-person-avatar-size, 40px)}:host .message-parent{display:flex;place-content:center;flex-direction:row;padding:10px 15px;column-gap:5px}:host .message-parent .loading-text,:host .message-parent .search-error-text{font-style:normal;font-weight:600;font-size:14px;line-height:19px;text-align:center;color:var(--people-picker-no-results-text-color,var(--neutral-foreground-hint))}
`];var st=i(9860);const nt={inputPlaceholderText:"Search for a name",maxSelectionsPlaceHolder:"Max contacts added",maxSelectionsAriaLabel:"Maximum contact selections reached",noResultsFound:"We didn't find any matches.",loadingMessage:"Loading...",selected:"selected",removeSelectedUser:"Remove ",selectContact:"select a contact",suggestionsTitle:"Suggested contacts"};var rt=i(8472),at=i(7006),lt=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},dt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},ct=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const ht=()=>{(0,U.E)(st.oR,j.z1),(0,ce.r)(),(0,k.sN)(),(0,rt.i)(),(0,M.N)("people-picker",ut)};class ut extends _.N{static get styles(){return ot}get strings(){return nt}get flyout(){return this.renderRoot.querySelector(".flyout")}get input(){return this.renderRoot.querySelector("fluent-text-field")}get selectedPeople(){return this._selectedPeople}set selectedPeople(e){e||(e=[]),(0,J.V)(this._selectedPeople,e)||(this._selectedPeople=e,this.fireCustomEvent("selectionChanged",this._selectedPeople))}static get requiredScopes(){return[...new Set(["user.read.all","people.read","group.read.all","user.readbasic.all","contacts.read",...k.O$.requiredScopes])]}constructor(){super(),this.groupIds=[],this.type="any",this.groupType=["any"],this.userType="any",this.transitiveSearch=!1,this.people=null,this.showMax=6,this.disableImages=!1,this.personCardInteraction="none",this.defaultSelectedUserIds=[],this.defaultSelectedGroupIds=[],this.disabled=!1,this.allowAnyEmail=!1,this.userIds=[],this.disableSuggestions=!1,this.userInput="",this._selectedPeople=[],this._arrowSelectionCount=-1,this.defaultSelectedUsers=[],this.defaultSelectedGroups=[],this._highlightedUsers=[],this._currentHighlightedUserPos=0,this._isFocused=!1,this._setAnyEmail=!1,this.handleSelectionChanged=()=>{0!==this.selectedPeople.length||this.disabled||this.enableTextInput()},this.renderLoading=()=>this.renderTemplate("loading",null)||I.Q`
         <div class="message-parent">
           <mgt-spinner></mgt-spinner>
           <div aria-label="${this.strings.loadingMessage}" aria-live="polite" role="alert" class="loading-text">
             ${this.strings.loadingMessage}
           </div>
         </div>
       `,this.handleInputClick=()=>{this.flyout.isOpen||this.handleUserSearch()},this.gainedFocus=()=>{this.clearHighlighted(),this._isFocused=!0,this.loadState(),this.showFlyout()},this.lostFocus=()=>{this._isFocused=!1,this.input&&this.input.setAttribute("aria-activedescendant","");const e=this.renderRoot.querySelector(".people-list");if(e)for(const t of e.children)t.classList.remove("focused"),t.setAttribute("aria-selected","false");this.requestUpdate()},this.onUserKeyUp=e=>{const t=e.key,i=e.getModifierState("Control")||e.getModifierState("Meta"),o=i&&"v"===t,s=["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"].includes(t);return!o&&i||s?((i||["ArrowLeft","ArrowRight"].includes(t))&&this.hideFlyout(),void("ArrowDown"===t&&!this.flyout.isOpen&&this._isFocused&&this.handleUserSearch())):["Tab","Enter","Shift"].includes(t)?void 0:"Escape"===t?(this.clearInput(),this._foundPeople=[],void(this._arrowSelectionCount=-1)):"Backspace"===t&&0===this.userInput.length&&this.selectedPeople.length>0?(this.clearHighlighted(),this.selectedPeople=this.selectedPeople.splice(0,this.selectedPeople.length-1),this.loadState(),void this.hideFlyout()):void([";",","].includes(t)&&this.allowAnyEmail&&(this._setAnyEmail=!0,e.preventDefault(),e.stopPropagation()))},this.onUserInput=e=>{const t=e.target;this.userInput=t.value,this.userInput?((0,it.B9)(this.userInput)&&this.allowAnyEmail?this._setAnyEmail&&this.handleAnyEmail():this.handleUserSearch(),this._setAnyEmail=!1):this._foundPeople=[]},this.onUserKeyDown=e=>{e.stopPropagation();const t=e.key,i=this.renderRoot.querySelector(".selected-list"),o=e.getModifierState("Control")||e.getModifierState("Meta");if(o&&i){const e=i.querySelectorAll("mgt-person.person-image-selected");if(this.hideFlyout(),o&&"ArrowLeft"===t)this._currentHighlightedUserPos=(this._currentHighlightedUserPos-1+e.length)%e.length,this._currentHighlightedUserPos>=0&&!Number.isNaN(this._currentHighlightedUserPos)?this._highlightedUsers.push(e[this._currentHighlightedUserPos]):this._currentHighlightedUserPos=0;else if(o&&"ArrowRight"===t){const e=this._highlightedUsers.pop();if(e){const t=e.parentElement;t&&(this.clearHighlighted(t),this._currentHighlightedUserPos++)}}else o&&"a"===t&&(this._highlightedUsers=[],e.forEach((e=>this._highlightedUsers.push(e))));this._highlightedUsers&&this.highlightSelectedPeople(this._highlightedUsers)}else if(this.clearHighlighted(),this.flyout.isOpen){if("ArrowUp"!==t&&"ArrowDown"!==t||(this.handleArrowSelection(e),e.preventDefault()),"Enter"===t){if(!e.shiftKey&&this._foundPeople){e.preventDefault();const t=this._foundPeople[this._arrowSelectionCount];if(t)return this.addPerson(t),this.hideFlyout(),this.input.value="",void(this.hasMaxSelections&&this.disableTextInput())}this.allowAnyEmail?this.handleAnyEmail():this.showFlyout()}[";",",","Tab"].includes(t)&&this.allowAnyEmail&&("Tab"!==t&&e.preventDefault(),this.userInput=this.input.value,this.handleAnyEmail()),"Tab"===t&&this.hideFlyout()}},this.handleCut=()=>{this.writeHighlightedText().then((()=>{this.removeHighlightedOnCut()}),(()=>{}))},this.handleCopy=()=>{this.writeHighlightedText()},this.handlePaste=()=>{navigator.clipboard.readText().then((e=>{if(e)try{const t=JSON.parse(e);if(t&&t.length>0)for(const e of t)this.addPerson(e)}catch(t){if(t instanceof SyntaxError){const t=[",",";"];let i;try{for(const o of t)if(i=e.split(o),i.length>1){this.hideFlyout(),this.selectUsersById(i);break}}catch(e){}}}}),(e=>{}))},this.addEventListener("copy",this.handleCopy),this.addEventListener("cut",this.handleCut),this.addEventListener("paste",this.handlePaste),this.addEventListener("selectionChanged",this.handleSelectionChanged)}disableTextInput(){const e=this.input.shadowRoot.querySelector("input");e&&(e.setAttribute("disabled","true"),e.value="")}enableTextInput(){const e=this.input.shadowRoot.querySelector("input");e&&(e.removeAttribute("disabled"),e.focus())}get hasMaxSelections(){return"single"===this.selectionMode&&this.selectedPeople.length>=1}focus(e){this.input&&(this.input.focus(e),this.input.select())}selectUsersById(e){var t;return ct(this,void 0,void 0,(function*(){const i=o.b.globalProvider,n=o.b.globalProvider.graph;if(i&&i.state===s.HJ.SignedIn)for(const i in e){const o=e[i];try{const e=yield(0,E.wz)(n,o,k.ge);this.addPerson(e)}catch(e){if((0,at.Z)(e)&&(null===(t=e.message)||void 0===t?void 0:t.includes("does not exist"))&&this.allowAnyEmail&&(0,it.B9)(o)){const e={mail:o,displayName:o};this.addPerson(e)}}}}))}selectGroupsById(e){return ct(this,void 0,void 0,(function*(){const t=o.b.globalProvider,i=o.b.globalProvider.graph;if(t&&t.state===s.HJ.SignedIn)for(const t in e)try{const o=yield et(i,e[t]);this.addPerson(o)}catch(e){}}))}render(){const e=this.renderTemplate("default",{people:this._foundPeople});if(e)return e;const t=this.renderSelectedPeople(this.selectedPeople),i=this.renderInput(t),o=this.renderFlyout(i);return $.qy`
      <div>
        ${o}
      </div>
    `}args(){return[this.providerState,this.groupId,this.groupIds,this.type,this.groupType,this.userType,this.transitiveSearch,this.people,this.showMax,this.defaultSelectedUserIds,this.defaultSelectedGroupIds,this.userIds,this.userFilters,this.peopleFilters,this.groupFilters]}clearState(){this.selectedPeople=[],this.userInput="",this._highlightedUsers=[],this._currentHighlightedUserPos=0}renderInput(e){var t,i,o;const s=this.disabled?"":this.placeholder||this.strings.inputPlaceholderText,n=this.hasMaxSelections?this.strings.maxSelectionsAriaLabel:"",r=$.qy`<span class="search-icon">${(0,P.r)(P.A.Search)}</span>`,a=(null===(t=this.selectedPeople)||void 0===t?void 0:t.length)>0?e:r;return $.qy`
      <fluent-text-field
        autocomplete="off"
        appearance="outline"
        slot="anchor"
        id="people-picker-input"
        role="combobox"
        aria-live="assertive"
        aria-atomic="true"
        placeholder=${this.hasMaxSelections?this.strings.maxSelectionsPlaceHolder:s}
        aria-label=${this.ariaLabel||n||s||this.strings.selectContact}
        aria-expanded=${null!==(o=null===(i=this.flyout)||void 0===i?void 0:i.isOpen)&&void 0!==o&&o}
        @click="${this.hasMaxSelections?void 0:this.handleInputClick}"
        @focus="${this.hasMaxSelections?void 0:this.gainedFocus}"
        @keydown="${this.hasMaxSelections?void 0:this.onUserKeyDown}"
        @input="${this.hasMaxSelections?void 0:this.onUserInput}"
        @blur="${this.lostFocus}"
        ?disabled=${this.disabled}
      >
        <span slot="start">${a}</span>
      </fluent-text-field>
    `}renderSelectedPeople(e){return(null==e?void 0:e.length)?$.qy`
       <ul
        id="selected-list"
        aria-label="${this.strings.selected}"
        class="selected-list">
          ${(0,L.u)(e,(e=>null==e?void 0:e.id),(e=>{var t;return $.qy`
            <li class="selected-list-item">
              ${this.renderTemplate("selected-person",{person:e},`selected-${(null==e?void 0:e.id)?e.id:e.displayName}`)||this.renderSelectedPerson(e)}

              <div
                role="button"
                tabindex="0"
                class="selected-list-item-close-icon"
                aria-label="${this.strings.removeSelectedUser}${null!==(t=null==e?void 0:e.displayName)&&void 0!==t?t:""}"
                @click="${t=>this.removePerson(e,t)}"
                @keydown="${t=>this.handleRemovePersonKeyDown(e,t)}">
                  ${(0,P.r)(P.A.Close)}
              </div>
          </li>`}))}
      </ul>`:$.qy``}renderFlyout(e){return I.Q`
       <mgt-flyout light-dismiss class="flyout">
         ${e}
         <fluent-card
          tabindex="0"
          slot="flyout"
          class="flyout-root"
          @wheel=${e=>this.handleSectionScroll(e)}
          @keydown=${e=>this.onUserKeyDown(e)}
          class="custom">
           ${this.renderFlyoutContent()}
         </fluent-card>
       </mgt-flyout>
     `}renderFlyoutContent(){if(this._task.status===Ne.e1.PENDING)return this.renderLoading();const e=this._foundPeople;return e&&0!==e.length&&0!==this.showMax?this.renderSearchResults(e):this.renderNoData()}renderNoData(){if(this._isFocused)return this.renderTemplate("error",null)||this.renderTemplate("no-data",null)||$.qy`
         <div class="message-parent">
           <div aria-label=${this.strings.noResultsFound} aria-live="polite" role="alert" class="search-error-text">
             ${this.strings.noResultsFound}
           </div>
         </div>
       `}renderSearchResults(e){const t=e.filter((e=>e.id));return $.qy`
      <ul
        id="suggestions-list"
        class="searched-people-list"
        role="listbox"
        aria-live="polite"
        aria-label="${this.strings.suggestionsTitle}"
        title=${this.strings.suggestionsTitle}
      >
        ${(0,L.u)(t,(e=>e.id),(e=>$.qy`
          <li
            id="${e.id}"
            class="searched-people-list-result"
            role="option"
            @click="${()=>this.handleSuggestionClick(e)}">
              ${this.renderPersonResult(e)}
          </li>
        `))}
      </ul>
     `}renderPersonResult(e){return this.renderTemplate("person",{person:e},e.id)||I.Q`
         <mgt-person
          class="person-image-result"
          ?show-presence=${this.showPresence}
          view="twolines"
          line2-property="jobTitle,mail"
          .personDetails=${e}
          ?fetch-image=${!this.disableImages}
          person-card="none"
        ></mgt-person>`}renderSelectedPerson(e){return I.Q`
       <mgt-person
         class="person-image-selected"
         .personDetails=${e}
         ?fetch-image=${!this.disableImages}
         view="oneline"
         person-card=${this.personCardInteraction}
        ></mgt-person>
     `}loadState(){var e,t;return ct(this,void 0,void 0,(function*(){this._groupPeople=null,this._foundPeople=null,this.defaultPeople=null;let i=this.people;const n=this.userInput.toLowerCase(),r=o.b.globalProvider;if(null==i?void 0:i.length){if(n){const e=i.filter((e=>null==e?void 0:e.displayName.toLowerCase().includes(n)));i=e}}else if(!i&&r&&r.state===s.HJ.SignedIn){const o=r.graph.forComponent(this);if(!n.length){if(this.disableSuggestions)return void(this._foundPeople=[]);if(this.defaultPeople)i=this.defaultPeople;else{if(this.groupId||this.groupIds.length){if(null===this._groupPeople)if(this.groupId)try{"group"===this.type?this._groupPeople=yield(0,E.sb)(o,null,this.groupId,this.showMax,this.type,this.transitiveSearch):this._groupPeople=yield(0,E.sb)(o,null,this.groupId,this.showMax,this.type,this.transitiveSearch,this.userFilters,this.peopleFilters)}catch(e){this._groupPeople=[]}else if("group"===this.type)try{this._groupPeople=yield tt(o,this.groupIds,this.groupFilters)}catch(e){this._groupPeople=[]}else try{const e=yield(0,E.fp)(o,"",this.groupIds,this.showMax,this.type,this.transitiveSearch,this.userFilters);this._groupPeople=e}catch(e){this._groupPeople=[]}i=this._groupPeople||[]}else if("person"===this.type||"any"===this.type)if(this.userIds.length)i=yield(0,E.$q)(o,this.userIds,"",this.userFilters);else{const e="user"===this.userType||"contact"===this.userType;i=this.userFilters&&e?yield(0,E.lo)(o,this.userFilters,this.showMax):yield(0,O.cB)(o,this.userType,this.peopleFilters,this.showMax)}else if("group"===this.type){let e=(yield Ye(o,"",this.showMax,this.groupType,this.groupFilters))||[];e.length>0&&e[0].value&&(e=e[0].value),i=e}this.defaultPeople=i}}if(!(this.defaultSelectedUserIds.length>0||this.defaultSelectedGroupIds.length>0)||this.selectedPeople.length||this.defaultSelectedUsers.length||this.defaultSelectedGroups.length||(this.defaultSelectedUsers=yield(0,E.$q)(o,this.defaultSelectedUserIds,"",this.userFilters),this.defaultSelectedGroups=yield tt(o,this.defaultSelectedGroupIds,this.peopleFilters),this.defaultSelectedGroups=this.defaultSelectedGroups.filter((e=>null!==e)),this.defaultSelectedUsers=this.defaultSelectedUsers.filter((e=>null!==e)),this.selectedPeople=[...this.defaultSelectedUsers,...this.defaultSelectedGroups],this.hasMaxSelections&&this.disableTextInput(),this.requestUpdate()),n)if(i=[],this.groupId)i=(yield(0,E.sb)(o,n,this.groupId,this.showMax,this.type,this.transitiveSearch,this.userFilters,this.peopleFilters))||[];else{if("person"===this.type||"any"===this.type){try{if("contact"===this.userType||"user"===this.userType)i=(null===(e=this.userIds)||void 0===e?void 0:e.length)?yield(0,E.$q)(o,this.userIds,n,this.userFilters):yield(0,E.Ei)(o,n,this.showMax,this.userFilters);else if(this.groupIds.length)try{i=yield(0,E.fp)(o,n,this.groupIds,this.showMax,this.type,this.transitiveSearch,this.userFilters)}catch(e){}else i=(null===(t=this.userIds)||void 0===t?void 0:t.length)?yield(0,E.$q)(o,this.userIds,n,this.userFilters):(yield(0,O.lq)(o,n,this.showMax,this.userType,this.peopleFilters))||[]}catch(e){}if(i&&i.length<this.showMax&&"contact"!==this.userType&&"person"!==this.type)try{const e=(yield(0,E.Ei)(o,n,this.showMax,this.userFilters))||[],t=new Set(i.map((e=>e.id)));for(const o of e)t.has(o.id)||i.push(o)}catch(e){}}if(("group"===this.type||"any"===this.type)&&i.length<this.showMax)if(this.groupIds.length)try{i=yield((e,t,i,o=10,s=["any"],n="")=>Ze(void 0,void 0,void 0,(function*(){const r=[],a=yield Ye(e,t,o,s,n);if(a)for(const e of a)e.id&&i.includes(e.id)&&r.push(e);return r})))(o,n,this.groupIds,this.showMax,this.groupType,this.userFilters)}catch(e){}else{let e=[];try{e=(yield Ye(o,n,this.showMax,this.groupType,this.groupFilters))||[],i=i.concat(e)}catch(e){}}}}this._foundPeople=this.filterPeople(i)}))}getGroupsForGroupIds(e,t){return ct(this,void 0,void 0,(function*(){const i=yield tt(e,this.groupIds,this.groupFilters);for(const e of i)t=t.concat(e);return t=t.filter((e=>e))}))}hideFlyout(){const e=this.flyout;e&&e.close(),this.input&&this.input.setAttribute("aria-activedescendant",""),this._arrowSelectionCount=-1}showFlyout(){const e=this.flyout;e&&e.open(),this._arrowSelectionCount=-1}removePerson(e,t){t.stopPropagation();const i=this.selectedPeople.filter((t=>!e.id&&t.displayName?t.displayName!==e.displayName:t.id!==e.id));this.selectedPeople=i,this.loadState()}handleRemovePersonKeyDown(e,t){"Enter"===t.key&&(this.removePerson(e,t),this.enableTextInput())}addPerson(e){e&&(setTimeout((()=>{this.clearInput()}),50),0===this.selectedPeople.filter((t=>!e.id&&t.displayName?t.displayName===e.displayName:t.id===e.id)).length&&(this.selectedPeople=[...this.selectedPeople,e],this.loadState(),this._foundPeople=[],this._arrowSelectionCount=-1),this.enableTextInput())}clearInput(){this.clearHighlighted(),"single"!==this.selectionMode&&(this.input.value=""),this.userInput=""}handleAnyEmail(){if(this._arrowSelectionCount=-1,(0,it.B9)(this.userInput)){const e={mail:this.userInput,displayName:this.userInput};this.addPerson(e)}this.hideFlyout(),this.input&&(this.input.focus(),this._isFocused=!0)}handleSuggestionClick(e){this.addPerson(e),this.hasMaxSelections&&(this.disableTextInput(),this.input.value=""),this.hideFlyout()}handleUserSearch(){this._debouncedSearch||(this._debouncedSearch=(0,it.sg)((()=>ct(this,void 0,void 0,(function*(){yield this._task.run(),this._arrowSelectionCount=-1,this.showFlyout()}))),400)),this._debouncedSearch()}writeHighlightedText(){return ct(this,void 0,void 0,(function*(){const e=[];for(const t of this._highlightedUsers){const{id:i,displayName:o,mail:s,userPrincipalName:n,scoredEmailAddresses:r}=t._personDetails;let a;a=r&&r.length>0?r.pop().address:n||s,e.push({id:i,displayName:o,email:a})}let t="";e.length>0&&(t=JSON.stringify(e)),yield navigator.clipboard.writeText(t)}))}removeHighlightedOnCut(){this.selectedPeople=this.selectedPeople.splice(0,this.selectedPeople.length-this._highlightedUsers.length),this._highlightedUsers=[],this._currentHighlightedUserPos=0,this.loadState(),this.hideFlyout()}highlightSelectedPeople(e){for(const t of e)(null==t?void 0:t.parentElement).classList.add("highlighted")}clearHighlighted(e){if(e)e.classList.remove("highlighted");else{for(const e of this._highlightedUsers){const t=e.parentElement;t&&t.classList.remove("highlighted")}this._highlightedUsers=[],this._currentHighlightedUserPos=0}}handleArrowSelection(e){var t,i;const o=this.renderRoot.querySelector(".searched-people-list");if(null===(t=null==o?void 0:o.children)||void 0===t?void 0:t.length){e&&("ArrowUp"===e.key&&(-1===this._arrowSelectionCount?this._arrowSelectionCount=0:this._arrowSelectionCount=(this._arrowSelectionCount-1+o.children.length)%o.children.length),"ArrowDown"===e.key&&(-1===this._arrowSelectionCount?this._arrowSelectionCount=0:this._arrowSelectionCount=(this._arrowSelectionCount+1+o.children.length)%o.children.length));for(const e of null!==(i=null==o?void 0:o.children)&&void 0!==i?i:[]){const t=e;t.setAttribute("aria-selected","false"),t.blur(),t.removeAttribute("tabindex")}const t=o.children[this._arrowSelectionCount];t&&(t.setAttribute("tabindex","0"),t.focus(),t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"}),t.setAttribute("aria-selected","true"),this.input.setAttribute("aria-activedescendant",null==t?void 0:t.id))}}filterPeople(e){const t=[];if(e&&e.length>0){e=e.filter((e=>e));const i=this.selectedPeople.map((e=>e.id?e.id:e.displayName)),o=e.filter((e=>(null==e?void 0:e.id)?-1===i.indexOf(e.id):-1===i.indexOf(null==e?void 0:e.displayName))),s=new Set;for(const e of o){const t=JSON.stringify(e);s.add(t)}s.forEach((e=>{const i=JSON.parse(e);t.push(i)}))}return t}handleSectionScroll(e){const t=this.renderRoot.querySelector(".flyout-root");t&&(e.deltaY<0&&0===t.scrollTop||e.deltaY>0&&t.clientHeight+t.scrollTop>=t.scrollHeight-1||e.stopPropagation())}}lt([(0,S.MZ)({attribute:"group-id",converter:e=>e.trim()}),dt("design:type",String)],ut.prototype,"groupId",void 0),lt([(0,S.MZ)({attribute:"group-ids",converter:e=>e.split(",").map((e=>e.trim()))}),dt("design:type",Array)],ut.prototype,"groupIds",void 0),lt([(0,S.MZ)({attribute:"type",converter:e=>(0,O.ys)(e,"any")}),dt("design:type",String)],ut.prototype,"type",void 0),lt([(0,S.MZ)({attribute:"group-type",converter:e=>{const t=["any"];if(!e||0===e.length)return t;const i=e.split(","),o=[];for(let e of i)e=e.trim(),Ge(e)&&o.push(Qe(e));return 0===o.length?t:o}}),dt("design:type",Array)],ut.prototype,"groupType",void 0),lt([(0,S.MZ)({attribute:"user-type",converter:e=>(0,O.we)(e)}),dt("design:type",String)],ut.prototype,"userType",void 0),lt([(0,S.MZ)({attribute:"transitive-search",type:Boolean}),dt("design:type",Object)],ut.prototype,"transitiveSearch",void 0),lt([(0,S.MZ)({attribute:"people",type:Object}),dt("design:type",Array)],ut.prototype,"people",void 0),lt([(0,S.MZ)({attribute:"show-max",type:Number}),dt("design:type",Object)],ut.prototype,"showMax",void 0),lt([(0,S.MZ)({attribute:"disable-images",type:Boolean}),dt("design:type",Object)],ut.prototype,"disableImages",void 0),lt([(0,S.MZ)({attribute:"show-presence",type:Boolean}),dt("design:type",Boolean)],ut.prototype,"showPresence",void 0),lt([(0,S.MZ)({attribute:"person-card",converter:e=>(0,H.e)(e)}),dt("design:type",String)],ut.prototype,"personCardInteraction",void 0),lt([(0,S.MZ)({attribute:"selected-people",type:Array}),dt("design:type",Array),dt("design:paramtypes",[Array])],ut.prototype,"selectedPeople",null),lt([(0,S.MZ)({attribute:"default-selected-user-ids",converter:e=>e.split(",").map((e=>e.trim())),type:String}),dt("design:type",Array)],ut.prototype,"defaultSelectedUserIds",void 0),lt([(0,S.MZ)({attribute:"default-selected-group-ids",converter:e=>e.split(",").map((e=>e.trim())),type:String}),dt("design:type",Array)],ut.prototype,"defaultSelectedGroupIds",void 0),lt([(0,S.MZ)({attribute:"placeholder",type:String}),dt("design:type",String)],ut.prototype,"placeholder",void 0),lt([(0,S.MZ)({attribute:"disabled",type:Boolean}),dt("design:type",Object)],ut.prototype,"disabled",void 0),lt([(0,S.MZ)({attribute:"allow-any-email",type:Boolean}),dt("design:type",Object)],ut.prototype,"allowAnyEmail",void 0),lt([(0,S.MZ)({attribute:"selection-mode",type:String}),dt("design:type",String)],ut.prototype,"selectionMode",void 0),lt([(0,S.MZ)({attribute:"user-ids",converter:e=>e.split(",").map((e=>e.trim())),type:String}),dt("design:type",Array)],ut.prototype,"userIds",void 0),lt([(0,S.MZ)({attribute:"user-filters"}),dt("design:type",String)],ut.prototype,"userFilters",void 0),lt([(0,S.MZ)({attribute:"people-filters"}),dt("design:type",String)],ut.prototype,"peopleFilters",void 0),lt([(0,S.MZ)({attribute:"group-filters"}),dt("design:type",String)],ut.prototype,"groupFilters",void 0),lt([(0,S.MZ)({attribute:"aria-label",type:String}),dt("design:type",String)],ut.prototype,"ariaLabel",void 0),lt([(0,S.MZ)({attribute:"disable-suggestions",type:Boolean}),dt("design:type",Object)],ut.prototype,"disableSuggestions",void 0),lt([(0,S.wk)(),dt("design:type",Object)],ut.prototype,"userInput",void 0),lt([(0,S.wk)(),dt("design:type",Object)],ut.prototype,"_arrowSelectionCount",void 0),lt([(0,S.wk)(),dt("design:type",Array)],ut.prototype,"_highlightedUsers",void 0),lt([(0,S.wk)(),dt("design:type",Object)],ut.prototype,"_isFocused",void 0),lt([(0,S.wk)(),dt("design:type",Object)],ut.prototype,"_setAnyEmail",void 0),lt([(0,S.wk)(),dt("design:type",Array)],ut.prototype,"_foundPeople",void 0);const pt=[$.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{background-color:var(--tasks-background-color,transparent);padding:var(--tasks-padding,12px);border:var(--tasks-border,0);border-radius:var(--tasks-border-radius,0);--skeleton-fill:var(--neutral-foreground-active)}:host .header{display:flex;align-items:center;justify-content:space-between;padding:var(--tasks-header-padding,0 0 14px 0);margin:var(--tasks-header-padding,0 0 14px 0);font-size:var(--tasks-header-font-size, 16px);font-weight:var(--tasks-header-font-weight,600);color:var(--tasks-header-text-color,var(--neutral-foreground-hint))}:host .header:hover{color:var(--tasks-header-text-hover-color,var(--neutral-foreground-hover))}:host .header .title{justify-content:left;display:flex;align-items:center}:host .header .title .shimmer{width:80px;height:20px}:host .header .title svg{margin-top:3px;padding:0 4px;width:16px;height:16px}:host .header .new-task-button{justify-content:right}:host .header .new-task-button .shimmer{width:40px;height:24px}:host .header .new-task-button::part(control){font-weight:var(--tasks-new-button-text-font-weight,700);color:var(--tasks-new-button-text-color,var(--foreground-on-accent-rest));width:var(--tasks-new-button-width,none);height:var(--tasks-new-button-height,none);background:var(--tasks-new-button-background,padding-box linear-gradient(var(--accent-fill-rest),var(--accent-fill-rest)),border-box var(--accent-stroke-control-rest))}:host .header .new-task-button::part(control):hover{background:var(--tasks-new-button-background-hover,var(--accent-fill-hover))}:host .header .new-task-button::part(control):active{background:var(--tasks-new-button-background-active,var(--accent-fill-active))}:host .tasks{display:flex;flex-direction:column;row-gap:var(--tasks-gap,20px)}:host .tasks .task{display:flex;column-gap:4px;align-items:flex-start;justify-content:space-between}:host .tasks .task.updating{background:var(--neutral-stroke-rest)!important;pointer-events:none;opacity:.4}:host .tasks .task.complete{border:var(--task-complete-border,2px dotted var(--neutral-foreground-active));border-radius:var(--task-complete-border-radius,4px);background:var(--task-complete-background-color,transparent);padding:var(--task-complete-padding,10px)}:host .tasks .task.incomplete{border:var(--task-incomplete-border,1px solid var(--neutral-foreground-active));border-radius:var(--task-complete-border-radius,4px);background:var(--task-incomplete-background-color,var(--neutral-layer-1));padding:var(--task-incomplete-padding,10px)}:host .tasks .task .task-details-container{display:flex;flex-direction:column;row-gap:12px;width:100%}:host .tasks .task .task-details-container .top{display:flex;justify-content:space-between;column-gap:4px}:host .tasks .task .task-details-container .top.add-new-task{flex-direction:row}:host .tasks .task .task-details-container .top .check-and-title{display:flex;align-items:flex-start;flex-direction:column;width:100%;row-gap:12px}:host .tasks .task .task-details-container .top .check-and-title.shimmer{display:flex;flex-direction:inherit;gap:10px}:host .tasks .task .task-details-container .top .check-and-title.shimmer .checkbox{height:10px;width:10px}:host .tasks .task .task-details-container .top .check-and-title.shimmer .title{height:10px;width:100%}:host .tasks .task .task-details-container .top .check-and-title .task-content{display:grid;grid-template-columns:repeat(auto-fit,250px);gap:12px;justify-content:start;width:100%}:host .tasks .task .task-details-container .top .check-and-title .task-content .picker{max-width:250px}:host .tasks .task .task-details-container .top .check-and-title .task-content .task-due fluent-text-field.dark::part(control){color-scheme:dark}:host .tasks .task .task-details-container .top .task-options .options{height:10px;width:20px}:host .tasks .task .task-details-container .top .task-options.new-task-action-buttons{display:flex;flex-direction:column;row-gap:12px}:host .tasks .task .task-details-container .bottom{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;grid-column-gap:6px}:host .tasks .task .task-details-container .bottom .task-bucket,:host .tasks .task .task-details-container .bottom .task-due,:host .tasks .task .task-details-container .bottom .task-group{display:flex;align-items:center;gap:6px}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon,:host .tasks .task .task-details-container .bottom .task-due .task-icon,:host .tasks .task .task-details-container .bottom .task-group .task-icon{display:flex;place-content:center;width:var(--task-icons-width,20px);height:var(--task-icons-height,20px)}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon .shimmer.icon,:host .tasks .task .task-details-container .bottom .task-due .task-icon .shimmer.icon,:host .tasks .task .task-details-container .bottom .task-group .task-icon .shimmer.icon{width:20px;height:20px}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon svg,:host .tasks .task .task-details-container .bottom .task-due .task-icon svg,:host .tasks .task .task-details-container .bottom .task-group .task-icon svg{width:var(--task-icons-width,20px);height:var(--task-icons-height,20px)}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon svg path,:host .tasks .task .task-details-container .bottom .task-due .task-icon svg path,:host .tasks .task .task-details-container .bottom .task-group .task-icon svg path{fill:var(--task-icons-background-color,var(--neutral-foreground-hint))}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon-text,:host .tasks .task .task-details-container .bottom .task-due .task-icon-text,:host .tasks .task .task-details-container .bottom .task-group .task-icon-text{color:var(--task-icons-text-font-color,var(--neutral-foreground-hint));font-size:var(--task-icons-text-font-size, 12px);font-weight:var(--task-icons-text-font-weight,600);white-space:normal;width:100%}:host .tasks .task .task-details-container .bottom .task-bucket .task-icon-text .shimmer.text,:host .tasks .task .task-details-container .bottom .task-due .task-icon-text .shimmer.text,:host .tasks .task .task-details-container .bottom .task-group .task-icon-text .shimmer.text{width:100%;height:10px}:host .tasks .task .task-details-container .task-details{display:flex;flex-direction:column;row-gap:8px}:host .tasks .task .task-details-container .task-details.shimmer{flex-direction:row;place-items:center;column-gap:6px}:host .tasks .task .task-details-container .task-details.shimmer .shimmer.icon{width:24px;height:24px}:host .tasks .task .task-details-container .task-details.shimmer .shimmer.text{width:100%;height:10px}:host .tasks .task .task-details-container .task-details .task-title{color:var(--foreground-on-neutral-rest)}:host .tasks .task .task-details-container .task-details .task-body{display:flex}:host fluent-button.add-task::part(control){font-weight:var(--task-add-new-button-text-font-weight,initial);color:var(--task-add-new-button-text-color,var(--neutral-foreground-rest));width:var(--task-add-new-button-width,none);height:var(--task-add-new-button-height,none);background:var(--task-add-new-button-background,padding-box linear-gradient(var(--neutral-fill-active),var(--neutral-fill-active)),border-box var(--neutral-stroke-control-active));border:var(--task-add-new-button-border,calc(var(--stroke-width) * 1px) solid transparent)}:host fluent-button.add-task::part(control):hover{background:var(--task-add-new-button-background-hover,padding-box linear-gradient(var(--neutral-fill-hover),var(--neutral-fill-hover)),border-box var(--neutral-stroke-control-hover))}:host fluent-button.add-task::part(control):active{background:var(--task-add-new-button-background-active,padding-box linear-gradient(var(--neutral-fill-active),var(--neutral-fill-active)),border-box var(--neutral-stroke-control-active))}:host fluent-button.cancel-task::part(control){font-weight:var(--task-cancel-new-button-text-font-weight,initial);color:var(--task-cancel-new-button-text-color,var(--neutral-foreground-rest));width:var(--task-cancel-new-button-width,none);height:var(--task-cancel-new-button-height,none);background:var(--task-cancel-new-button-background,padding-box linear-gradient(var(--neutral-fill-active),var(--neutral-fill-active)),border-box var(--neutral-stroke-control-active));border:var(--task-cancel-new-button-border,calc(var(--stroke-width) * 1px) solid transparent)}:host fluent-button.cancel-task::part(control):hover{background:var(--task-cancel-new-button-background-hover,padding-box linear-gradient(var(--neutral-fill-hover),var(--neutral-fill-hover)),border-box var(--neutral-stroke-control-hover))}:host fluent-button.cancel-task::part(control):active{background:var(--task-cancel-new-button-background-active,padding-box linear-gradient(var(--neutral-fill-active),var(--neutral-fill-active)),border-box var(--neutral-stroke-control-active))}:host fluent-option{background:var(--task-new-dropdown-list-background-color,var(--fill-color))}:host fluent-option:hover{background:var(--task-new-dropdown-option-hover-background-color,var(--neutral-fill-stealth-hover))}:host fluent-option::part(content){color:var(--task-new-dropdown-option-text-color,var(--neutral-foreground-rest))}:host fluent-select::part(listbox){background:var(--task-new-dropdown-list-background-color,var(--fill-color))}:host fluent-select::part(control){border:var(--task-new-dropdown-border,calc(var(--stroke-width) * 1px) solid transparent);border-radius:var(--task-new-dropdown-border-radius,calc(var(--control-corner-radius) * 1px));background:var(--task-new-dropdown-background-color,padding-box linear-gradient(var(--neutral-fill-input-rest),var(--neutral-fill-input-rest)),border-box var(--neutral-stroke-input-rest))}:host fluent-select::part(control):hover{background:var(--task-new-dropdown-hover-background-color,padding-box linear-gradient(var(--neutral-fill-input-hover),var(--neutral-fill-input-hover)),border-box var(--neutral-stroke-input-hover))}:host fluent-select::part(control)::placeholder{color:var(--task-new-dropdown-placeholder-color,var(--input-placeholder-rest))}:host fluent-checkbox{padding-top:1px}:host fluent-checkbox::part(control){border-radius:50%;background:var(--task-incomplete-checkbox-background-color,var(--neutral-fill-input-alt-rest))}:host fluent-checkbox::part(control):hover{background:var(--task-incomplete-checkbox-background-hover-color,var(--neutral-fill-input-alt-hover))}:host fluent-checkbox::part(label){font-size:var(--task-title-text-font-size, medium);font-weight:var(--task-title-text-font-weight,600);color:var(--task-incomplete-title-text-color,var(var(--neutral-foreground-rest)))}:host fluent-checkbox.checked::part(control){background:var(--task-complete-checkbox-background-color,var(--accent-fill-rest));color:var(--task-complete-checkbox-text-color,currentColor)}:host fluent-checkbox.checked::part(label){text-decoration:line-through;color:var(--task-complete-title-text-color,var(--neutral-foreground-hint))}:host fluent-text-field.new-task{width:100%}:host fluent-text-field.new-task::part(root){border:var(--task-new-input-border,calc(var(--stroke-width) * 1px) solid transparent);border-radius:var(--task-new-input-border-radius,calc(var(--control-corner-radius) * 1px));background:var(--task-new-input-background-color,padding-box linear-gradient(var(--neutral-fill-input-rest),var(--neutral-fill-input-rest)),border-box var(--neutral-stroke-input-rest))}:host fluent-text-field.new-task::part(root):hover{background:var(--task-new-input-hover-background-color,padding-box linear-gradient(var(--neutral-fill-input-hover),var(--neutral-fill-input-hover)),border-box var(--neutral-stroke-input-hover))}:host fluent-text-field.new-task::part(root)::placeholder{color:var(--task-new-input-placeholder-color,var(--input-placeholder-rest))}:host .people [slot=no-data] fluent-button::part(control){color:var(--task-new-person-icon-text-color,var(--neutral-foreground-hint))}:host .people [slot=no-data] svg{fill:var(--task-new-person-icon-color,var(--neutral-foreground-hint))}@media only screen and (width <= 600px){:host fluent-select{width:100%}:host .tasks .task .task-details-container .bottom{display:grid;grid-auto-flow:row;grid-auto-columns:unset;row-gap:4px}:host .tasks .task .task-details-container .bottom .ask-bucket,:host .tasks .task .task-details-container .bottom .ask-due,:host .tasks .task .task-details-container .bottom .ask-group{margin-inline-start:8px}:host .tasks .task .task-details-container .top.add-new-task{flex-direction:column;row-gap:12px}:host .tasks .task .task-details-container .top.add-new-task .check-and-title .task-content{display:grid;grid-auto-flow:row;row-gap:12px;width:100%}:host .tasks .task .task-details-container .top.add-new-task .task-options.new-task-action-buttons{flex-direction:row;column-gap:4px}}
`],gt={removeTaskSubtitle:"Delete Task",cancelNewTaskSubtitle:"Cancel",newTaskPlaceholder:"Adding a task...",addTaskButtonSubtitle:"Add",due:"Due ",addTaskDate:"Add the task date",assign:"Assign",planNotFound:"Plan not found",plansSelfAssigned:"All Plans",bucketNotFound:"Bucket not found",bucketsSelfAssigned:"All Tasks",baseSelfAssigned:"Assigned to Me"};class ft extends p{static fromGraph(e){const t=new ft(e.client);return t.setComponent(e.componentName),t}constructor(e,t="beta"){super(e,t)}forComponent(e){const t=new ft(this.client);return this.setComponent(e),t}}var vt=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const mt=["Tasks.ReadWrite","Group.ReadWrite.All"],bt=["Tasks.Read","Group.Read.All","Tasks.ReadWrite","Group.ReadWrite.All"],yt=(e,t,i)=>vt(void 0,void 0,void 0,(function*(){let o;try{o=yield e.api(`/planner/tasks/${t.id}`).header("Cache-Control","no-store").middlewareOptions((0,a.F)(mt)).header("Prefer","return=representation").header("If-Match",t.eTag).update(i)}catch(e){}return o}));var wt=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};class xt{constructor(e){this.graph=ft.fromGraph(e)}}class kt extends xt{getTaskGroups(){return wt(this,void 0,void 0,(function*(){var e;return(yield(e=this.graph,vt(void 0,void 0,void 0,(function*(){const t=yield e.api("/me/planner/plans").header("Cache-Control","no-store").middlewareOptions((0,a.F)(bt)).get();return null==t?void 0:t.value})))).map((e=>{var t;return{id:e.id,title:e.title,containerId:null===(t=null==e?void 0:e.container)||void 0===t?void 0:t.containerId}}))}))}getTaskGroupsForGroup(e){return wt(this,void 0,void 0,(function*(){var t,i;return(yield(t=this.graph,i=e,vt(void 0,void 0,void 0,(function*(){const e=`/groups/${i}/planner/plans`,o=yield t.api(e).header("Cache-Control","no-store").middlewareOptions((0,a.F)(bt)).get();return null==o?void 0:o.value})))).map((e=>({id:e.id,title:e.title})))}))}getTaskGroup(e){return wt(this,void 0,void 0,(function*(){const t=yield(i=this.graph,o=e,vt(void 0,void 0,void 0,(function*(){return yield i.api(`/planner/plans/${o}`).header("Cache-Control","no-store").middlewareOptions((0,a.F)(bt)).get()})));var i,o;return{id:t.id,title:t.title,_raw:t}}))}getTaskFoldersForTaskGroup(e){return wt(this,void 0,void 0,(function*(){var t,i;return(yield(t=this.graph,i=e,vt(void 0,void 0,void 0,(function*(){const e=yield t.api(`/planner/plans/${i}/buckets`).header("Cache-Control","no-store").middlewareOptions((0,a.F)(bt)).get();return null==e?void 0:e.value})))).map((e=>({_raw:e,id:e.id,name:e.name,parentId:e.planId})))}))}getTasksForTaskFolder(e){return wt(this,void 0,void 0,(function*(){var t,i;return(yield(t=this.graph,i=e,vt(void 0,void 0,void 0,(function*(){const e=yield t.api(`/planner/buckets/${i}/tasks`).header("Cache-Control","no-store").middlewareOptions((0,a.F)(bt)).get();return null==e?void 0:e.value})))).map((e=>({_raw:e,assignments:e.assignments,completed:100===e.percentComplete,dueDate:e.dueDateTime&&new Date(e.dueDateTime),eTag:e["@odata.etag"],id:e.id,immediateParentId:e.bucketId,name:e.title,topParentId:e.planId})))}))}setTaskComplete(e){return wt(this,void 0,void 0,(function*(){return yield((e,t)=>vt(void 0,void 0,void 0,(function*(){yield yt(e,t,{percentComplete:100})})))(this.graph,e)}))}setTaskIncomplete(e){return wt(this,void 0,void 0,(function*(){return((e,t)=>vt(void 0,void 0,void 0,(function*(){yield yt(e,t,{percentComplete:0})})))(this.graph,e)}))}addTask(e){var t;return wt(this,void 0,void 0,(function*(){return yield((e,t)=>vt(void 0,void 0,void 0,(function*(){return yield e.api("/planner/tasks").header("Cache-Control","no-store").middlewareOptions((0,a.F)(mt)).post(t)})))(this.graph,{assignments:e.assignments,bucketId:e.immediateParentId,dueDateTime:null===(t=e.dueDate)||void 0===t?void 0:t.toISOString(),planId:e.topParentId,title:e.name})}))}assignPeopleToTask(e,t){return wt(this,void 0,void 0,(function*(){return((e,t,i)=>vt(void 0,void 0,void 0,(function*(){const o={assignments:i,appliedCategories:{category4:!0}};yield yt(e,t,o)})))(this.graph,e,t)}))}removeTask(e){return wt(this,void 0,void 0,(function*(){return yield((e,t)=>vt(void 0,void 0,void 0,(function*(){yield e.api(`/planner/tasks/${t.id}`).header("Cache-Control","no-store").header("If-Match",t.eTag).middlewareOptions((0,a.F)(mt)).delete()})))(this.graph,e)}))}isAssignedToMe(e,t){return Object.keys(e.assignments).includes(t)}}var Ct=i(916),$t=i(8098);const St=e=>{const t=Ee.li_.getValueFor(e);return(0,Ct.H)($t.q.create(t,t,t))};var _t=i(1635),It=i(9871);class At extends Le{}class Tt extends((0,It.rf)(At)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const Dt="above",Ft="below";class Pt extends Tt{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=(0,be.NF)("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void Fe.dv.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return fe.cP.track(this,"value"),this._value}set value(e){var t,i,o,s,n,r,a;const l=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),l=null!==(o=null===(i=this._options[this.selectedIndex])||void 0===i?void 0:i.value)&&void 0!==o?o:null,d=null!==(n=null===(s=this._options[t])||void 0===s?void 0:s.value)&&void 0!==n?n:null;-1!==t&&l===d||(e="",this.selectedIndex=t),e=null!==(a=null===(r=this.firstSelectedOption)||void 0===r?void 0:r.value)&&void 0!==a?a:e}l!==e&&(this._value=e,super.valueChanged(l,e),fe.cP.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,i;this.$fastController.isConnected&&(this.value=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==i?i:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?Dt:Ft,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Dt?~~e.top:~~t}get displayValue(){var e,t;return fe.cP.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const i=e.relatedTarget;this.isSameNode(i)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(i))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{fe.cP.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{fe.cP.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var i;super.selectedOptionsChanged(e,t),null===(i=this.options)||void 0===i||i.forEach(((e,t)=>{var i;const o=null===(i=this.proxy)||void 0===i?void 0:i.options.item(t);o&&(o.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(Ie.slottedOptionFilter),i=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===i?0:i}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case me.gG:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case me.Tg:case me.FM:e.preventDefault();break;case me.Mm:e.preventDefault(),this.open=!this.open;break;case me.F9:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case me.J9:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===me.HX||t===me.I5)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&fe.cP.notify(this,"displayValue")}}(0,ge.Cg)([(0,ve.CF)({attribute:"open",mode:"boolean"})],Pt.prototype,"open",void 0),(0,ge.Cg)([fe.Jg],Pt.prototype,"collapsible",null),(0,ge.Cg)([fe.sH],Pt.prototype,"control",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"position"})],Pt.prototype,"positionAttribute",void 0),(0,ge.Cg)([fe.sH],Pt.prototype,"position",void 0),(0,ge.Cg)([fe.sH],Pt.prototype,"maxHeight",void 0);class Lt{}(0,ge.Cg)([fe.sH],Lt.prototype,"ariaControls",void 0),(0,Ce.X)(Lt,Ae),(0,Ce.X)(Pt,ke.qw,Lt);var Ot=i(5330),Rt=i(6028),Et=i(1445),Mt=i(8753),Ht=i(1731),Vt=i(882),zt=i(8172),Nt=i(6538),qt=i(3120),Bt=i(4416),Ut=i(1323),jt=i(6523);const Zt=".control",Wt=":not([disabled]):not([open])",Gt="[disabled]",Qt=(e,t)=>Oe.A`
    ${(0,Re.V)("inline-flex")}
    
    :host {
      border-radius: calc(${Ee.PbG} * 1px);
      box-sizing: border-box;
      color: ${Ee.lHw};
      fill: currentcolor;
      font-family: ${Ee.OCo};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${zt.H0};
      background: ${Ee.pfK};
      border-radius: calc(${Ee.JUW} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${Nt.D} * 1px));
      padding: calc((${Ee.vR1} - ${Ee.XAH} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${Ee.XAH} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${Ee.XAH} * 1px) solid transparent;
      border-radius: calc(${Ee.PbG} * 1px);
      height: calc(${Nt.D} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${Bt.Ah}
      min-height: 100%;
      padding: 0 calc(${Ee.vR1} * 2.25px);
      width: 100%;
    }

    :host(:${Et.N}) {
      ${Me.W}
    }

    :host([disabled]) .control {
      cursor: ${Mt.Z};
      opacity: ${Ee.qB4};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${Nt.D} + ${Ee.vR1} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${Nt.D} + ${Ee.vR1} * 2) * 1px);
    }

    .selected-value {
      font-family: inherit;
      flex: 1 1 auto;
      text-align: start;
    }

    .indicator {
      flex: 0 0 auto;
      margin-inline-start: 1em;
    }

    slot[name='listbox'] {
      display: none;
      width: 100%;
    }

    :host([open]) slot[name='listbox'] {
      display: flex;
      position: absolute;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }

    .start,
    .end,
    .indicator,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([role='option']) {
      flex: 0 0 auto;
    }
  `;class Kt extends Pt{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&Ee.pfK.setValueFor(this.listbox,Ee.Tkp)}}(0,_t.Cg)([(0,ve.CF)({mode:"fromView"})],Kt.prototype,"appearance",void 0);const Xt=Kt.compose({baseName:"select",baseClass:Pt,template:(e,t)=>Te.q`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${(0,Ot.z)((e=>e.collapsible),Te.q`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${(0,Rt.K)("control")}
                >
                    ${(0,ke.LT)(e,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${(0,ke.aO)(e,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${(0,Rt.K)("listbox")}
        >
            <slot
                ${(0,De.e)({filter:Ie.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Qt().withBehaviors((0,qt.f)("outline",(0,Ut._9)(e,t,Wt,Gt)),(0,qt.f)("filled",(0,jt.dM)(e,t,Zt,Wt).withBehaviors((0,Ht.mr)((0,jt.lb)(e,t,Zt,Wt)))),(0,qt.f)("stealth",(0,Ut.ss)(e,t,Wt,Gt)),(0,Ht.mr)(Oe.A`
    :host([open]) .listbox {
      background: ${Vt.A.ButtonFace};
      border-color: ${Vt.A.CanvasText};
    }
  `)),indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '});class Jt{constructor(e,t){this.cache=new WeakMap,this.ltr=e,this.rtl=t}bind(e){this.attach(e)}unbind(e){const t=this.cache.get(e);t&&Ee.oWd.unsubscribe(t)}attach(e){const t=this.cache.get(e)||new Yt(this.ltr,this.rtl,e),i=Ee.oWd.getValueFor(e);Ee.oWd.subscribe(t),t.attach(i),this.cache.set(e,t)}}class Yt{constructor(e,t,i){this.ltr=e,this.rtl=t,this.source=i,this.attached=null}handleChange({target:e,token:t}){this.attach(t.getValueFor(this.source))}attach(e){this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const ei=Se.compose({baseName:"option",template:(e,t)=>Te.q`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${(0,ke.LT)(e,t)}
        <span class="content" part="content">
            <slot ${(0,De.e)("content")}></slot>
        </span>
        ${(0,ke.aO)(e,t)}
    </template>
`,styles:(e,t)=>Oe.A`
    ${(0,Re.V)("inline-flex")} :host {
      position: relative;
      ${Bt.Ah}
      background: ${Ee.WlO};
      border-radius: calc(${Ee.PbG} * 1px);
      border: calc(${Ee.XAH} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${Ee.lHw};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${Nt.D} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${Ee.vR1} * 3) - ${Ee.XAH} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${Ee.vdx} - ${Ee.XAH}) * 1px);
      top: calc((${Nt.D} / 4) - ${Ee.vdx} * 1px);
      width: 3px;
      height: calc((${Nt.D} / 2) * 1px);
      background: transparent;
      border-radius: calc(${Ee.PbG} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${Ee.oO8};
    }

    :host(:not([disabled]):active) {
      background: ${Ee.wOW};
    }

    :host(:not([disabled]):active)::before {
      background: ${Ee.IRh};
      height: calc(((${Nt.D} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${Ee.IRh};
    }

    :host(:${Et.N}) {
      ${Me.W}
      background: ${Ee.UBo};
    }

    :host([aria-selected='true']) {
      background: ${Ee.v8G};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${Ee.Rgz};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${Ee.DKg};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Ee.oO8};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${Ee.wOW};
    }

    :host([disabled]) {
      cursor: ${Mt.Z};
      opacity: ${Ee.qB4};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(new Jt(null,Oe.A`
      :host::before {
        right: calc((${Ee.vdx} - ${Ee.XAH}) * 1px);
      }
    `),(0,Ht.mr)(Oe.A`
        :host {
          background: ${Vt.A.ButtonFace};
          border-color: ${Vt.A.ButtonFace};
          color: ${Vt.A.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${Vt.A.Highlight};
          color: ${Vt.A.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${Vt.A.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${Vt.A.Canvas};
          color: ${Vt.A.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${Et.N}) {
          outline-color: ${Vt.A.CanvasText};
        }
      `))});var ti=i(1389),ii=i(7580);const oi="menuitem",si="menuitemcheckbox",ni="menuitemradio",ri={[oi]:"menuitem",[si]:"menuitemcheckbox",[ni]:"menuitemradio"};var ai=i(1157);const li=e=>{const t=e.closest("[dir]");return null!==t&&"rtl"===t.dir?ai.O.rtl:ai.O.ltr};class di extends ye.g{constructor(){super(...arguments),this.role=oi,this.hasSubmenu=!1,this.currentDirection=ai.O.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=e=>{if(e.defaultPrevented)return!1;switch(e.key){case me.Mm:case me.gG:return this.invoke(),!1;case me.bb:return this.expandAndFocus(),!1;case me.kT:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=e=>(e.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=e=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=e=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case si:this.checked=!this.checked;break;case oi:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case ni:this.checked||(this.checked=!0)}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find((e=>"menu"===e.getAttribute("role"))),this.hasSubmenu=void 0!==this.submenu}}expandedChanged(e){if(this.$fastController.isConnected){if(void 0===this.submenu)return;!1===this.expanded?this.submenu.collapseExpandedItem():this.currentDirection=li(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(e,t){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),Fe.dv.queueUpdate((()=>{this.updateSubmenu()})),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,void 0!==this.observer&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter((e=>!e.hasAttribute("hidden")))}}(0,ge.Cg)([(0,ve.CF)({mode:"boolean"})],di.prototype,"disabled",void 0),(0,ge.Cg)([(0,ve.CF)({mode:"boolean"})],di.prototype,"expanded",void 0),(0,ge.Cg)([fe.sH],di.prototype,"startColumnCount",void 0),(0,ge.Cg)([ve.CF],di.prototype,"role",void 0),(0,ge.Cg)([(0,ve.CF)({mode:"boolean"})],di.prototype,"checked",void 0),(0,ge.Cg)([fe.sH],di.prototype,"submenuRegion",void 0),(0,ge.Cg)([fe.sH],di.prototype,"hasSubmenu",void 0),(0,ge.Cg)([fe.sH],di.prototype,"currentDirection",void 0),(0,ge.Cg)([fe.sH],di.prototype,"submenu",void 0),(0,Ce.X)(di,ke.qw);class ci extends ye.g{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&(0,we.sb)(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=e=>{if(!this.contains(e.relatedTarget)&&void 0!==this.menuItems){this.collapseExpandedItem();const e=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[e].setAttribute("tabindex","0"),this.focusIndex=e}},this.handleItemFocus=e=>{const t=e.target;void 0!==this.menuItems&&t!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(t),t.setAttribute("tabindex","0"))},this.handleExpandedChanged=e=>{if(e.defaultPrevented||null===e.target||void 0===this.menuItems||this.menuItems.indexOf(e.target)<0)return;e.preventDefault();const t=e.target;null===this.expandedItem||t!==this.expandedItem||!1!==t.expanded?t.expanded&&(null!==this.expandedItem&&this.expandedItem!==t&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=t,this.focusIndex=this.menuItems.indexOf(t),t.setAttribute("tabindex","0")):this.expandedItem=null},this.removeItemListeners=()=>{void 0!==this.menuItems&&this.menuItems.forEach((e=>{e.removeEventListener("expanded-change",this.handleExpandedChanged),e.removeEventListener("focus",this.handleItemFocus)}))},this.setItems=()=>{const e=this.domChildren();this.removeItemListeners(),this.menuItems=e;const t=this.menuItems.filter(this.isMenuItemElement);t.length&&(this.focusIndex=0);const i=t.reduce(((e,t)=>{const i=function(e){const t=e.getAttribute("role"),i=e.querySelector("[slot=start]");return t!==oi&&null===i||t===oi&&null!==i?1:t!==oi&&null!==i?2:0}(t);return e>i?e:i}),0);t.forEach(((e,t)=>{e.setAttribute("tabindex",0===t?"0":"-1"),e.addEventListener("expanded-change",this.handleExpandedChanged),e.addEventListener("focus",this.handleItemFocus),e instanceof di&&(e.startColumnCount=i)}))},this.changeHandler=e=>{if(void 0===this.menuItems)return;const t=e.target,i=this.menuItems.indexOf(t);if(-1!==i&&"menuitemradio"===t.role&&!0===t.checked){for(let e=i-1;e>=0;--e){const t=this.menuItems[e],i=t.getAttribute("role");if(i===ni&&(t.checked=!1),"separator"===i)break}const e=this.menuItems.length-1;for(let t=i+1;t<=e;++t){const e=this.menuItems[t],i=e.getAttribute("role");if(i===ni&&(e.checked=!1),"separator"===i)break}}},this.isMenuItemElement=e=>(0,we.sb)(e)&&ci.focusableElementRoles.hasOwnProperty(e.getAttribute("role")),this.isFocusableElement=e=>this.isMenuItemElement(e)}itemsChanged(e,t){this.$fastController.isConnected&&void 0!==this.menuItems&&this.setItems()}connectedCallback(){super.connectedCallback(),Fe.dv.queueUpdate((()=>{this.setItems()})),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(e){if(!e.defaultPrevented&&void 0!==this.menuItems)switch(e.key){case me.HX:return void this.setFocus(this.focusIndex+1,1);case me.I5:return void this.setFocus(this.focusIndex-1,-1);case me.FM:return void this.setFocus(this.menuItems.length-1,-1);case me.Tg:return void this.setFocus(0,1);default:return!0}}domChildren(){return Array.from(this.children).filter((e=>!e.hasAttribute("hidden")))}setFocus(e,t){if(void 0!==this.menuItems)for(;e>=0&&e<this.menuItems.length;){const i=this.menuItems[e];if(this.isFocusableElement(i)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=e,i.setAttribute("tabindex","0"),i.focus();break}e+=t}}}ci.focusableElementRoles=ri,(0,ge.Cg)([fe.sH],ci.prototype,"items",void 0);const hi="horizontal";class ui extends ye.g{constructor(){super(...arguments),this.role="separator",this.orientation=hi}}(0,ge.Cg)([ve.CF],ui.prototype,"role",void 0),(0,ge.Cg)([ve.CF],ui.prototype,"orientation",void 0);const pi=class extends ci{connectedCallback(){super.connectedCallback(),Ee.pfK.setValueFor(this,Ee.Tkp)}}.compose({baseName:"menu",baseClass:ci,template:(e,t)=>Te.q`
    <template
        slot="${e=>e.slot?e.slot:e.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(e,t)=>e.handleMenuKeyDown(t.event)}"
        @focusout="${(e,t)=>e.handleFocusOut(t.event)}"
    >
        <slot ${(0,De.e)("items")}></slot>
    </template>
`,styles:(e,t)=>Oe.A`
    ${(0,Re.V)("block")} :host {
      background: ${Ee.Tkp};
      border: calc(${Ee.XAH} * 1px) solid transparent;
      border-radius: calc(${Ee.JUW} * 1px);
      box-shadow: ${zt.H0};
      padding: calc((${Ee.vR1} - ${Ee.XAH}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${Ee.vR1} * 2px);
    }

    ::slotted(${e.tagFor(di)}) {
      margin: 0 calc(${Ee.vR1} * 1px);
    }

    ::slotted(${e.tagFor(ui)}) {
      margin: calc(${Ee.vR1} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${Ee.vR1} * 1px) 0;
      border: none;
      border-top: calc(${Ee.XAH} * 1px) solid ${Ee.hb6};
    }
  `.withBehaviors((0,Ht.mr)(Oe.A`
        :host([slot='submenu']) {
          background: ${Vt.A.Canvas};
          border-color: ${Vt.A.CanvasText};
        }
      `))}),gi="focus",fi="focusin",vi="focusout",mi="keydown",bi="resize",yi="scroll";var wi=i(4208);class xi extends ye.g{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=ai.O.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),null!==this.anchorElement&&(this.requestPositionUpdates(),null!==this.resizeDetector&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{null===this.anchorElement||this.pendingPositioningUpdate||(xi.intersectionService.requestPosition(this,this.handleIntersection),xi.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&xi.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,xi.intersectionService.cancelRequestPosition(this,this.handleIntersection),null!==this.anchorElement&&xi.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&xi.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),null!==this.resizeDetector&&this.resizeDetector.disconnect()},this.getViewport=()=>"string"!=typeof this.viewport||""===this.viewport?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=e=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(e)&&this.updateLayout())},this.applyIntersectionEntries=e=>{const t=e.find((e=>e.target===this)),i=e.find((e=>e.target===this.anchorElement)),o=e.find((e=>e.target===this.viewportElement));return void 0!==t&&void 0!==o&&void 0!==i&&!!(!this.regionVisible||this.forceUpdate||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect||this.isRectDifferent(this.anchorRect,i.boundingClientRect)||this.isRectDifferent(this.viewportRect,o.boundingClientRect)||this.isRectDifferent(this.regionRect,t.boundingClientRect))&&(this.regionRect=t.boundingClientRect,this.anchorRect=i.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(o.boundingClientRect.x+document.documentElement.scrollLeft,o.boundingClientRect.y+document.documentElement.scrollTop,o.boundingClientRect.width,o.boundingClientRect.height):this.viewportRect=o.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0)},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(e,t)=>Math.abs(e.top-t.top)>this.updateThreshold||Math.abs(e.right-t.right)>this.updateThreshold||Math.abs(e.bottom-t.bottom)>this.updateThreshold||Math.abs(e.left-t.left)>this.updateThreshold,this.handleResize=e=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,null===this.anchorElement&&(this.anchorElement=this.getAnchor()),null===this.viewportElement&&(this.viewportElement=this.getViewport()),this.currentDirection=li(this),this.startObservers())},this.updateLayout=()=>{let e,t;if("uncontrolled"!==this.horizontalPositioningMode){const e=this.getPositioningOptions(this.horizontalInset);if("center"===this.horizontalDefaultPosition)t="center";else if("unset"!==this.horizontalDefaultPosition){let e=this.horizontalDefaultPosition;if("start"===e||"end"===e){const t=li(this);if(t!==this.currentDirection)return this.currentDirection=t,void this.initialize();e=this.currentDirection===ai.O.ltr?"start"===e?"left":"right":"start"===e?"right":"left"}switch(e){case"left":t=this.horizontalInset?"insetStart":"start";break;case"right":t=this.horizontalInset?"insetEnd":"end"}}const i=void 0!==this.horizontalThreshold?this.horizontalThreshold:void 0!==this.regionRect?this.regionRect.width:0,o=void 0!==this.anchorRect?this.anchorRect.left:0,s=void 0!==this.anchorRect?this.anchorRect.right:0,n=void 0!==this.anchorRect?this.anchorRect.width:0,r=void 0!==this.viewportRect?this.viewportRect.left:0,a=void 0!==this.viewportRect?this.viewportRect.right:0;(void 0===t||"locktodefault"!==this.horizontalPositioningMode&&this.getAvailableSpace(t,o,s,n,r,a)<i)&&(t=this.getAvailableSpace(e[0],o,s,n,r,a)>this.getAvailableSpace(e[1],o,s,n,r,a)?e[0]:e[1])}if("uncontrolled"!==this.verticalPositioningMode){const t=this.getPositioningOptions(this.verticalInset);if("center"===this.verticalDefaultPosition)e="center";else if("unset"!==this.verticalDefaultPosition)switch(this.verticalDefaultPosition){case"top":e=this.verticalInset?"insetStart":"start";break;case"bottom":e=this.verticalInset?"insetEnd":"end"}const i=void 0!==this.verticalThreshold?this.verticalThreshold:void 0!==this.regionRect?this.regionRect.height:0,o=void 0!==this.anchorRect?this.anchorRect.top:0,s=void 0!==this.anchorRect?this.anchorRect.bottom:0,n=void 0!==this.anchorRect?this.anchorRect.height:0,r=void 0!==this.viewportRect?this.viewportRect.top:0,a=void 0!==this.viewportRect?this.viewportRect.bottom:0;(void 0===e||"locktodefault"!==this.verticalPositioningMode&&this.getAvailableSpace(e,o,s,n,r,a)<i)&&(e=this.getAvailableSpace(t[0],o,s,n,r,a)>this.getAvailableSpace(t[1],o,s,n,r,a)?t[0]:t[1])}const i=this.getNextRegionDimension(t,e),o=this.horizontalPosition!==t||this.verticalPosition!==e;if(this.setHorizontalPosition(t,i),this.setVerticalPosition(e,i),this.updateRegionStyle(),!this.initialLayoutComplete)return this.initialLayoutComplete=!0,void this.requestPositionUpdates();this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),o&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top","start"===this.verticalPosition),this.classList.toggle("bottom","end"===this.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.verticalPosition),this.classList.toggle("vertical-center","center"===this.verticalPosition),this.classList.toggle("left","start"===this.horizontalPosition),this.classList.toggle("right","end"===this.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.horizontalPosition),this.classList.toggle("horizontal-center","center"===this.horizontalPosition)},this.setHorizontalPosition=(e,t)=>{if(void 0===e||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let i=0;switch(this.horizontalScaling){case"anchor":case"fill":i=this.horizontalViewportLock?this.viewportRect.width:t.width,this.regionWidth=`${i}px`;break;case"content":i=this.regionRect.width,this.regionWidth="unset"}let o=0;switch(e){case"start":this.translateX=this.baseHorizontalOffset-i,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-i+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(o=(this.anchorRect.width-i)/2,this.translateX=this.baseHorizontalOffset+o,this.horizontalViewportLock){const e=this.anchorRect.left+o,t=this.anchorRect.right-o;e<this.viewportRect.left&&!(t>this.viewportRect.right)?this.translateX=this.translateX-(e-this.viewportRect.left):t>this.viewportRect.right&&!(e<this.viewportRect.left)&&(this.translateX=this.translateX-(t-this.viewportRect.right))}}this.horizontalPosition=e},this.setVerticalPosition=(e,t)=>{if(void 0===e||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let i=0;switch(this.verticalScaling){case"anchor":case"fill":i=this.verticalViewportLock?this.viewportRect.height:t.height,this.regionHeight=`${i}px`;break;case"content":i=this.regionRect.height,this.regionHeight="unset"}let o=0;switch(e){case"start":this.translateY=this.baseVerticalOffset-i,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-i+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(o=(this.anchorRect.height-i)/2,this.translateY=this.baseVerticalOffset+o,this.verticalViewportLock){const e=this.anchorRect.top+o,t=this.anchorRect.bottom-o;e<this.viewportRect.top&&!(t>this.viewportRect.bottom)?this.translateY=this.translateY-(e-this.viewportRect.top):t>this.viewportRect.bottom&&!(e<this.viewportRect.top)&&(this.translateY=this.translateY-(t-this.viewportRect.bottom))}}this.verticalPosition=e},this.getPositioningOptions=e=>e?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(e,t,i,o,s,n)=>{const r=t-s,a=n-(t+o);switch(e){case"start":return r;case"insetStart":return r+o;case"insetEnd":return a+o;case"end":return a;case"center":return 2*Math.min(r,a)+o}},this.getNextRegionDimension=(e,t)=>{const i={height:void 0!==this.regionRect?this.regionRect.height:0,width:void 0!==this.regionRect?this.regionRect.width:0};return void 0!==e&&"fill"===this.horizontalScaling?i.width=this.getAvailableSpace(e,void 0!==this.anchorRect?this.anchorRect.left:0,void 0!==this.anchorRect?this.anchorRect.right:0,void 0!==this.anchorRect?this.anchorRect.width:0,void 0!==this.viewportRect?this.viewportRect.left:0,void 0!==this.viewportRect?this.viewportRect.right:0):"anchor"===this.horizontalScaling&&(i.width=void 0!==this.anchorRect?this.anchorRect.width:0),void 0!==t&&"fill"===this.verticalScaling?i.height=this.getAvailableSpace(t,void 0!==this.anchorRect?this.anchorRect.top:0,void 0!==this.anchorRect?this.anchorRect.bottom:0,void 0!==this.anchorRect?this.anchorRect.height:0,void 0!==this.viewportRect?this.viewportRect.top:0,void 0!==this.viewportRect?this.viewportRect.bottom:0):"anchor"===this.verticalScaling&&(i.height=void 0!==this.anchorRect?this.anchorRect.height:0),i},this.startAutoUpdateEventListeners=()=>{window.addEventListener(bi,this.update,{passive:!0}),window.addEventListener(yi,this.update,{passive:!0,capture:!0}),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(bi,this.update),window.removeEventListener(yi,this.update),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(e,t){this.$fastController.isConnected&&this.initialLayoutComplete&&("auto"===e&&this.stopAutoUpdateEventListeners(),"auto"===t&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),"auto"===this.autoUpdateMode&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),"auto"===this.autoUpdateMode&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){null!==this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),null===this.anchorElement&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&!1===this.pendingReset&&(this.setInitialState(),Fe.dv.queueUpdate((()=>this.reset())),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}xi.intersectionService=new class{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(e,t)=>{var i;null!==this.intersectionDetector&&(this.observedElements.has(e)?null===(i=this.observedElements.get(e))||void 0===i||i.push(t):(this.observedElements.set(e,[t]),this.intersectionDetector.observe(e)))},this.cancelRequestPosition=(e,t)=>{const i=this.observedElements.get(e);if(void 0!==i){const e=i.indexOf(t);-1!==e&&i.splice(e,1)}},this.initializeIntersectionDetector=()=>{wi.am.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=e=>{if(null===this.intersectionDetector)return;const t=[],i=[];e.forEach((e=>{var o;null===(o=this.intersectionDetector)||void 0===o||o.unobserve(e.target);const s=this.observedElements.get(e.target);void 0!==s&&(s.forEach((o=>{let s=t.indexOf(o);-1===s&&(s=t.length,t.push(o),i.push([])),i[s].push(e)})),this.observedElements.delete(e.target))})),t.forEach(((e,t)=>{e(i[t])}))},this.initializeIntersectionDetector()}},(0,ge.Cg)([ve.CF],xi.prototype,"anchor",void 0),(0,ge.Cg)([ve.CF],xi.prototype,"viewport",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"horizontal-positioning-mode"})],xi.prototype,"horizontalPositioningMode",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"horizontal-default-position"})],xi.prototype,"horizontalDefaultPosition",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"horizontal-viewport-lock",mode:"boolean"})],xi.prototype,"horizontalViewportLock",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"horizontal-inset",mode:"boolean"})],xi.prototype,"horizontalInset",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"horizontal-threshold"})],xi.prototype,"horizontalThreshold",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"horizontal-scaling"})],xi.prototype,"horizontalScaling",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"vertical-positioning-mode"})],xi.prototype,"verticalPositioningMode",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"vertical-default-position"})],xi.prototype,"verticalDefaultPosition",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"vertical-viewport-lock",mode:"boolean"})],xi.prototype,"verticalViewportLock",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"vertical-inset",mode:"boolean"})],xi.prototype,"verticalInset",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"vertical-threshold"})],xi.prototype,"verticalThreshold",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"vertical-scaling"})],xi.prototype,"verticalScaling",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"fixed-placement",mode:"boolean"})],xi.prototype,"fixedPlacement",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"auto-update-mode"})],xi.prototype,"autoUpdateMode",void 0),(0,ge.Cg)([fe.sH],xi.prototype,"anchorElement",void 0),(0,ge.Cg)([fe.sH],xi.prototype,"viewportElement",void 0),(0,ge.Cg)([fe.sH],xi.prototype,"initialLayoutComplete",void 0);const ki=di.compose({baseName:"menu-item",template:(e,t)=>Te.q`
    <template
        role="${e=>e.role}"
        aria-haspopup="${e=>e.hasSubmenu?"menu":void 0}"
        aria-checked="${e=>e.role!==oi?e.checked:void 0}"
        aria-disabled="${e=>e.disabled}"
        aria-expanded="${e=>e.expanded}"
        @keydown="${(e,t)=>e.handleMenuItemKeyDown(t.event)}"
        @click="${(e,t)=>e.handleMenuItemClick(t.event)}"
        @mouseover="${(e,t)=>e.handleMouseOver(t.event)}"
        @mouseout="${(e,t)=>e.handleMouseOut(t.event)}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.expanded?"expanded":""} ${e=>`indent-${e.startColumnCount}`}"
    >
            ${(0,Ot.z)((e=>e.role===si),Te.q`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${(0,Ot.z)((e=>e.role===ni),Te.q`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${t.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${(0,ke.LT)(e,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${(0,ke.aO)(e,t)}
        ${(0,Ot.z)((e=>e.hasSubmenu),Te.q`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${t.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${(0,Ot.z)((e=>e.expanded),Te.q`
                <${e.tagFor(xi)}
                    :anchorElement="${e=>e}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${e=>e.currentDirection}"
                    @loaded="${e=>e.submenuLoaded()}"
                    ${(0,Rt.K)("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${e.tagFor(xi)}>
            `)}
    </template>
`,styles:(e,t)=>Oe.A`
    ${(0,Re.V)("grid")} :host {
      contain: layout;
      overflow: visible;
      ${Bt.Ah}
      box-sizing: border-box;
      height: calc(${Nt.D} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${Ee.lHw};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${Ee.PbG} * 1px);
      border: calc(${Ee.XAH} * 1px) solid transparent;
      position: relative;
    }

    :host(.indent-0) {
      grid-template-columns: auto 1fr minmax(32px, auto);
    }

    :host(.indent-0) .content {
      grid-column: 1;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-0) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) {
      grid-template-columns: minmax(32px, auto) minmax(32px, auto) 1fr minmax(32px, auto) minmax(32px, auto);
    }

    :host(.indent-2) .content {
      grid-column: 3;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-2) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) .start {
      grid-column: 2;
    }

    :host(.indent-2) .end {
      grid-column: 4;
    }

    :host(:${Et.N}) {
      ${Me.W}
    }

    :host(:not([disabled]):hover) {
      background: ${Ee.oO8};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${Ee.wOW};
      color: ${Ee.lHw};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${Mt.Z};
      opacity: ${Ee.qB4};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end {
      display: flex;
      justify-content: center;
    }

    :host(.indent-0[aria-haspopup='menu']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-1[aria-haspopup='menu']),
    :host(.indent-1[role='menuitemcheckbox']),
    :host(.indent-1[role='menuitemradio']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup='menu'])) .end {
      grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
      display: none;
    }

    :host([aria-haspopup='menu']) .expand-collapse-glyph-container,
    :host([role='menuitemcheckbox']) .input-container,
    :host([role='menuitemradio']) .input-container {
      display: grid;
    }

    :host([aria-haspopup='menu']) .content,
    :host([role='menuitemcheckbox']) .content,
    :host([role='menuitemradio']) .content {
      grid-column-start: 3;
    }

    :host([aria-haspopup='menu'].indent-0) .content {
      grid-column-start: 1;
    }

    :host([aria-haspopup='menu']) .end,
    :host([role='menuitemcheckbox']) .end,
    :host([role='menuitemradio']) .end {
      grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    slot[name='checkbox-indicator'],
    slot[name='radio-indicator'] {
      display: none;
    }

    ::slotted([slot='end']:not(svg)) {
      margin-inline-end: 10px;
      color: ${Ee.cRz};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors((0,Ht.mr)(Oe.A`
        :host,
        ::slotted([slot='end']:not(svg)) {
          forced-color-adjust: none;
          color: ${Vt.A.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled]):hover) {
          background: ${Vt.A.Highlight};
          color: ${Vt.A.HighlightText};
          fill: currentcolor;
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg),
        :host(:hover) ::slotted([slot='end']:not(svg)),
        :host(:${Et.N}) ::slotted([slot='end']:not(svg)) {
          color: ${Vt.A.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${Vt.A.Highlight};
          color: ${Vt.A.HighlightText};
        }
        :host(:${Et.N}) {
          background: ${Vt.A.Highlight};
          outline-color: ${Vt.A.ButtonText};
          color: ${Vt.A.HighlightText};
          fill: currentcolor;
        }
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg),
        :host([disabled]:${Et.N}) {
          background: ${Vt.A.ButtonFace};
          color: ${Vt.A.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${Et.N}) {
          outline-color: ${Vt.A.GrayText};
        }
        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${Vt.A.ButtonText};
          background: ${Vt.A.HighlightText};
        }
        :host([checked]) .checkbox,
        :host([checked]) .radio {
          background: ${Vt.A.HighlightText};
          border-color: ${Vt.A.HighlightText};
        }
        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${Et.N}) .expanded-toggle,
            :host(:${Et.N}) .checkbox,
            :host(:${Et.N}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${Et.N}) .checkbox,
            :host([checked]:${Et.N}) .radio {
          border-color: ${Vt.A.HighlightText};
        }
        :host([aria-checked='true']) {
          background: ${Vt.A.Highlight};
          color: ${Vt.A.HighlightText};
        }
        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${Vt.A.Highlight};
        }
        :host([aria-checked='true']) .radio-indicator {
          background: ${Vt.A.Highlight};
        }
      `),new Jt(Oe.A`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,Oe.A`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),checkboxIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',expandCollapseGlyph:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M5.65 3.15a.5.5 0 000 .7L9.79 8l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  ',radioIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="2"/>\n    </svg>\n  '});var Ci=i(1739);const $i={dotOptionsTitle:"More options"},Si=[$.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{display:flex;flex-direction:column;align-items:flex-end}:host .dot-icon{font-family:FabricMDL2Icons;min-width:40px;min-height:30px;text-align:center;line-height:30px}:host .menu{position:absolute;box-shadow:var(--dot-options-menu-shadow-color,var(--fill-color)) 0 0 40px 5px;background:var(--dot-options-menu-background-color,var(--fill-color));z-index:1;display:none;white-space:nowrap;transform:var(--dot-options-translatey,translateY(32px))}:host .menu.open{display:block}:host fluent-button::part(control){background:inherit}:host fluent-menu>fluent-menu-item::part(content){color:var(--dot-options-menu-item-color,var(--neutral-foreground-hint))}:host fluent-menu>fluent-menu-item:hover{background:var(--dot-options-menu-item-hover-background-color,var(--neutral-fill-input-hover))}
`];var _i=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},Ii=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class Ai extends Ci.S{constructor(){super(...arguments),this._clickHandler=()=>this.open=!1,this.renderContent=()=>{const e=Object.keys(this.options);return $.qy`
      <fluent-button
        appearance="stealth"
        aria-label=${this.strings.dotOptionsTitle}
        aria-expanded=${this.open}
        @click=${this.onDotClick}
        @keydown=${this.onDotKeydown}
        class="dot-icon">${(0,P.r)(P.A.Dot)}</fluent-button>
      <fluent-menu class=${(0,Z.H)({menu:!0,open:this.open})} aria-expanded=${this.open} aria-label=${this.strings.dotOptionsTitle}>
        ${e.map((e=>this.getMenuOption(e,this.options[e])))}
      </fluent-menu>`},this.handleItemClick=(e,t)=>{e.preventDefault(),e.stopPropagation(),t(e),this.open=!1},this.handleItemKeydown=(e,t)=>{this.handleKeydownMenuOption(e),t(e),this.open=!1},this.onDotClick=e=>{e.preventDefault(),e.stopPropagation(),this.open=!this.open},this.onDotKeydown=e=>{"Enter"===e.key&&(e.preventDefault(),e.stopPropagation(),this.open=!this.open)}}static get styles(){return Si}get strings(){return $i}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._clickHandler)}disconnectedCallback(){window.removeEventListener("click",this._clickHandler),super.disconnectedCallback()}getMenuOption(e,t){return $.qy`
      <fluent-menu-item
        @click=${e=>this.handleItemClick(e,t)}
        @keydown=${e=>this.handleItemKeydown(e,t)}>
          ${e}
      </fluent-menu-item>`}handleKeydownMenuOption(e){"Enter"===e.key&&(e.preventDefault(),e.stopPropagation())}}_i([(0,S.MZ)({type:Boolean}),Ii("design:type",Boolean)],Ai.prototype,"open",void 0),_i([(0,S.MZ)({type:Object}),Ii("design:type",Object)],Ai.prototype,"options",void 0);const Ti=[$.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative}:host .header::part(control){font-size:var(--arrow-options-button-font-size, large);font-weight:var(--arrow-options-button-font-weight,600);color:var(--arrow-options-button-font-color,var(--accent-base-color));background:var(--arrow-options-button-background-color,transparent)}:host .header::part(control):hover{background:var(--neutral-fill-stealth-hover)}:host .header::part(control):active,:host .header::part(control):focus{background:var(--neutral-fill-stealth-active)}:host .menu{position:absolute;left:var(--arrow-options-left,0);z-index:1;display:none}:host .menu.open{display:block;width:max-content}
`];var Di=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},Fi=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class Pi extends Ci.S{static get styles(){return Ti}constructor(){super(),this.onHeaderClick=e=>{Object.keys(this.options).length>1&&(e.preventDefault(),e.stopPropagation(),this.open=!this.open)},this.onHeaderKeyDown=e=>{if("Enter"===e.key){e.preventDefault(),e.stopPropagation(),this.open=!this.open;const t=this.renderRoot.querySelector("fluent-menu");t&&(t.classList.remove("closed"),t.classList.add("open"));const i=e.target;if(i){const e=this.renderRoot.querySelector("fluent-menu-item[tabindex='0']");e&&(i.blur(),e.focus())}}},this.renderContent=()=>$.qy`
      <fluent-button
        class="header"
        @click=${this.onHeaderClick}
        @keydown=${this.onHeaderKeyDown}
        appearance="lightweight">
          ${this.value}
      </fluent-button>
      <fluent-menu
        class=${(0,Z.H)({menu:!0,open:this.open,closed:!this.open})}>
          ${this.getMenuOptions()}
      </fluent-menu>`,this.value="",this.options={},this._clickHandler=()=>this.open=!1,window.addEventListener("onblur",(()=>this.open=!1))}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._clickHandler)}disconnectedCallback(){window.removeEventListener("click",this._clickHandler),super.disconnectedCallback()}getMenuOptions(){return Object.keys(this.options).map((e=>$.qy`
          <fluent-menu-item
            @click=${t=>{this.open=!1,this.options[e](t)}}
            @keydown=${t=>{const i=this.renderRoot.querySelector(".header");"Enter"===t.key?(this.open=!1,this.options[e](t),i.focus()):"Tab"===t.key?this.open=!1:"Escape"===t.key&&(this.open=!1,i&&i.focus())}}>
              ${e}
          </fluent-menu-item>`))}}Di([(0,S.MZ)({type:Boolean}),Fi("design:type",Boolean)],Pi.prototype,"open",void 0),Di([(0,S.MZ)({type:String}),Fi("design:type",String)],Pi.prototype,"value",void 0),Di([(0,S.MZ)({type:Object}),Fi("design:type",Object)],Pi.prototype,"options",void 0);var Li=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},Oi=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},Ri=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const Ei={"@odata.type":"#microsoft.graph.plannerAssignment",orderHint:" !"};class Mi extends _.N{static get styles(){return pt}get strings(){return gt}get isNewTaskVisible(){return this._isNewTaskVisible}set isNewTaskVisible(e){this._isNewTaskVisible=e,e||(this._newTaskDueDate=null,this._newTaskName="",this._newTaskGroupId="",this._newTaskContainerId="")}static get requiredScopes(){return[...new Set(["group.read.all","group.readwrite.all","tasks.read","tasks.readwrite",...B.requiredScopes,...ut.requiredScopes])]}get filteredTasks(){const e=this._tasks.filter((e=>this.isTaskInSelectedGroupFilter(e))).filter((e=>this.isTaskInSelectedFolderFilter(e))).filter((e=>!this._hiddenTasks.includes(e.id)));return this.taskFilter?e.filter((e=>this.taskFilter(e._raw))):e}constructor(){super(),this._isDarkMode=!1,this._me=null,this.renderLoading=()=>this._hasDoneInitialLoad?this.renderContent():this.renderLoadingTask(),this.renderContent=()=>{const e=this._inTaskLoad&&!this._hasDoneInitialLoad?this.renderLoadingTask():null;let t;return this.hideHeader||(t=$.qy`
        <div class="header">
          ${this.renderPlanOptions()}
        </div>
      `),$.qy`
      ${t}
      <div class="tasks">
        ${this._isNewTaskVisible?this.renderNewTask():null} ${e}
        ${(0,L.u)(this.filteredTasks,(e=>e.id),(e=>this.renderTask(e)))}
      </div>
    `},this.onResize=()=>{this.mediaQuery!==this.previousMediaQuery&&(this.previousMediaQuery=this.mediaQuery,this.requestUpdate())},this.onThemeChanged=()=>{this._isDarkMode=St(this)},this.onAddTaskClick=()=>{var e;const t=this.getPeoplePicker(null),i={};if(t)for(const o of null!==(e=null==t?void 0:t.selectedPeople)&&void 0!==e?e:[])i[o.id]=Ei;!this._newTaskBeingAdded&&this._newTaskName&&(this._currentGroup||this._newTaskGroupId)&&this.addTask(this._newTaskName,this._newTaskDueDate,this._currentGroup?this._currentGroup:this._newTaskGroupId,this._currentFolder?this._currentFolder:this._newTaskFolderId,i)},this.onAddTaskKeyDown=e=>{"Enter"!==e.key&&" "!==e.key||this.onAddTaskClick()},this.addNewTaskButtonClick=()=>{this.isNewTaskVisible=!this.isNewTaskVisible},this.newTaskVisible=e=>{"Enter"===e.key&&(this.isNewTaskVisible=!1)},this.handleDateChange=e=>{const t=e.target.value;this._newTaskDueDate=t?new Date(t+"T17:00"):null},this.renderPlannerIcon=e=>(0,P.r)(P.A.Planner,e),this.renderBucketIcon=e=>(0,P.r)(P.A.Milestone,e),this.handlePeopleClick=(e,t)=>{this.togglePeoplePicker(t),e.stopPropagation()},this.handlePeopleKeydown=(e,t)=>{"Enter"!==e.key&&" "!==e.key||(this.togglePeoplePicker(t),e.stopPropagation(),e.preventDefault())},this.handlePeoplePickerKeydown=e=>{"Enter"===e.key&&e.stopPropagation()},this.clearState(),this.previousMediaQuery=this.mediaQuery}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onResize),window.addEventListener("darkmodechanged",this.onThemeChanged),this.onThemeChanged()}disconnectedCallback(){window.removeEventListener("resize",this.onResize),window.removeEventListener("darkmodechanged",this.onThemeChanged),super.disconnectedCallback()}clearState(){this._newTaskFolderId="",this._newTaskGroupId="",this._newTaskDueDate=null,this._newTaskName="",this._newTaskBeingAdded=!1,this._tasks=[],this._folders=[],this._groups=[],this._hiddenTasks=[],this._hasDoneInitialLoad=!1,this._inTaskLoad=!1}firstUpdated(e){super.firstUpdated(e),this.initialId&&!this._currentGroup&&(this._currentGroup=this.initialId),this.initialBucketId&&!this._currentFolder&&(this._currentFolder=this.initialBucketId)}loadState(){return Ri(this,void 0,void 0,(function*(){const e=this.getTaskSource();if(!e)return;const t=o.b.globalProvider;if(t&&t.state===s.HJ.SignedIn){if(this._inTaskLoad=!0,!this._me){const e=t.graph.forComponent(this);this._me=yield(0,E.jp)(e)}this.groupId?yield this._loadTasksForGroup(e):this.targetId?yield this._loadTargetPlannerTasks(e):yield this._loadAllTasks(e),this._inTaskLoad=!1,this._hasDoneInitialLoad=!0}}))}_loadTargetPlannerTasks(e){return Ri(this,void 0,void 0,(function*(){const t=yield e.getTaskGroup(this.targetId);let i=yield e.getTaskFoldersForTaskGroup(t.id);this.targetBucketId&&(i=i.filter((e=>e.id===this.targetBucketId)));const o=(yield Promise.all(i.map((t=>e.getTasksForTaskFolder(t.id,t.parentId))))).reduce(((e,t)=>[...e,...t]),[]);this._tasks=o,this._folders=i,this._groups=[t]}))}_loadAllTasks(e){return Ri(this,void 0,void 0,(function*(){const t=yield e.getTaskGroups(),i=(yield Promise.all(t.map((t=>e.getTaskFoldersForTaskGroup(t.id))))).reduce(((e,t)=>[...e,...t]),[]),o=(yield Promise.all(i.map((t=>e.getTasksForTaskFolder(t.id,t.parentId))))).reduce(((e,t)=>[...e,...t]),[]);this._tasks=o,this._folders=i,this._groups=t}))}_loadTasksForGroup(e){return Ri(this,void 0,void 0,(function*(){const t=yield e.getTaskGroupsForGroup(this.groupId),i=(yield Promise.all(t.map((t=>e.getTaskFoldersForTaskGroup(t.id))))).reduce(((e,t)=>[...e,...t]),[]),o=(yield Promise.all(i.map((t=>e.getTasksForTaskFolder(t.id,t.parentId))))).reduce(((e,t)=>[...e,...t]),[]);this._tasks=o,this._folders=i,this._groups=t}))}addTask(e,t,i,o,s={}){return Ri(this,void 0,void 0,(function*(){const n=this.getTaskSource();if(!n)return;const r={assignments:s,dueDate:t,immediateParentId:o,name:e,topParentId:i};this._newTaskBeingAdded=!0,r._raw=yield n.addTask(r),this.fireCustomEvent("taskAdded",r),this._newTaskBeingAdded=!1,this.isNewTaskVisible=!1,yield this._task.run()}))}completeTask(e){return Ri(this,void 0,void 0,(function*(){const t=this.getTaskSource();t&&(yield t.setTaskComplete(e),this.fireCustomEvent("taskChanged",e),yield this._task.run())}))}uncompleteTask(e){return Ri(this,void 0,void 0,(function*(){const t=this.getTaskSource();t&&(yield t.setTaskIncomplete(e),this.fireCustomEvent("taskChanged",e),yield this._task.run())}))}removeTask(e,t){return Ri(this,void 0,void 0,(function*(){const i=this.getTaskSource();i&&(t instanceof KeyboardEvent&&"Enter"!==t.key||(this._hiddenTasks=[...this._hiddenTasks,e.id],yield i.removeTask(e),this.fireCustomEvent("taskRemoved",e),yield this._task.run(),this._hiddenTasks=this._hiddenTasks.filter((t=>t!==e.id))))}))}assignPeople(e,t=[]){return Ri(this,void 0,void 0,(function*(){const i=this.getTaskSource();if(!i)return;let o=[];e&&e.assignments&&(o=Object.keys(e.assignments).sort());const s=t.map((e=>e.id));if(s.length===o.length&&s.sort().every(((e,t)=>e===o[t])))return;const n={};for(const e of o)s.includes(e)?n[e]=Ei:n[e]=null;s.forEach((e=>{o.includes(e)||(n[e]=Ei)})),e&&(yield i.assignPeopleToTask(e,n),yield this._task.run())}))}renderPlanOptions(){var e;const t=o.b.globalProvider;if(!t||t.state!==s.HJ.SignedIn)return null;if(this._inTaskLoad&&!this._hasDoneInitialLoad)return $.qy`<span class="loading-header"></span>`;const i=this.readOnly||this._isNewTaskVisible?null:$.qy`
          <fluent-button
            appearance="accent"
            class="new-task-button"
            @click=${this.addNewTaskButtonClick}>
              <span slot="start">${(0,P.r)(P.A.Add,"currentColor")}</span>
              ${this.strings.addTaskButtonSubtitle}
          </fluent-button>
        `,n=this._groups.find((e=>e.id===this._currentGroup))||{title:this.strings.baseSelfAssigned},r={[this.strings.baseSelfAssigned]:()=>{this._currentGroup=null,this._currentFolder=null}};for(const e of this._groups)r[e.title]=()=>{this._currentGroup=e.id,this._currentFolder=null};const a=I.Q`
        <mgt-arrow-options
          class="arrow-options"
          .options="${r}"
          .value="${n.title}"
        ></mgt-arrow-options>`,l=this._currentGroup?(0,P.r)(P.A.ChevronRight):null,d=this._folders.find((e=>e.id===this._currentFolder))||{name:this.strings.bucketsSelfAssigned},c={[this.strings.bucketsSelfAssigned]:()=>{this._currentFolder=null}};for(const e of this._folders.filter((e=>e.parentId===this._currentGroup)))c[e.name]=()=>{this._currentFolder=e.id};const h=this.targetBucketId?$.qy`
            <span class="plan-title">
              ${(null===(e=this._folders[0])||void 0===e?void 0:e.name)||""}
            </span>`:I.Q`
            <mgt-arrow-options class="arrow-options" .options="${c}" .value="${d.name}"></mgt-arrow-options>
          `;return $.qy`
        <div class="title">
          ${a} ${l} ${this._currentGroup?h:null}
        </div>
        ${i}
      `}renderNewTask(){const e="var(--neutral-foreground-hint)",t=$.qy`
      <fluent-text-field
        autocomplete="off"
        ?autofocus=${this.isNewTaskVisible}
        placeholder=${this.strings.newTaskPlaceholder}
        .value="${this._newTaskName}"
        class="new-task"
        aria-label=${this.strings.newTaskPlaceholder}
        @input=${e=>this._newTaskName=e.target.value}>
      </fluent-text-field>`;this._groups.length>0&&!this._newTaskGroupId&&(this._newTaskGroupId=this._groups[0].id);const i=$.qy`
      ${(0,L.u)(this._groups,(e=>e.id),(e=>$.qy`<fluent-option value="${e.id}">${e.title}</fluent-option>`))}`,o=this._currentGroup?$.qy`
          <span class="new-task-group">
            ${this.renderPlannerIcon(e)}
            <span>${this.getPlanTitle(this._currentGroup)}</span>
          </span>`:$.qy`
            <fluent-select>
              <span slot="start">${this.renderPlannerIcon(e)}</span>
              ${this._groups.length>0?i:$.qy`<fluent-option selected>No groups found</fluent-option>`}
            </fluent-select>`,s=this._folders.filter((e=>this._currentGroup&&e.parentId===this._currentGroup||!this._currentGroup&&e.parentId===this._newTaskGroupId));s.length>0&&!this._newTaskFolderId&&(this._newTaskFolderId=s[0].id);const n=$.qy`
      ${(0,L.u)(s,(e=>e.id),(e=>$.qy`<fluent-option value="${e.id}">${e.name}</fluent-option>`))}`,r=this._currentFolder?$.qy`
          <span class="new-task-bucket">
            ${this.renderBucketIcon(e)}
            <span>${this.getFolderName(this._currentFolder)}</span>
          </span>
        `:$.qy`
         <fluent-select>
          <span slot="start">${this.renderBucketIcon(e)}</span>
          ${s.length>0?n:$.qy`<fluent-option selected>No folders found</fluent-option>`}
        </fluent-select>`,a={dark:this._isDarkMode,"new-task":!0},l=$.qy`
      <fluent-text-field
        autocomplete="off"
        type="date"
        class=${(0,Z.H)(a)}
        aria-label="${this.strings.addTaskDate}"
        .value="${this.dateToInputValue(this._newTaskDueDate)}"
        @change=${this.handleDateChange}>
      </fluent-text-field>`,d=this.renderAssignedPeople(null),c=this._newTaskBeingAdded?$.qy`<div class="task-add-button-container"></div>`:$.qy`
          <fluent-button
            class="add-task"
            ?disabled=${!this._newTaskName}
            @click=${this.onAddTaskClick}
            @keydown=${this.onAddTaskKeyDown}
            appearance="neutral">
              ${this.strings.addTaskButtonSubtitle}
          </fluent-button>
          <fluent-button
            class="cancel-task"
            @click=${()=>this.isNewTaskVisible=!1}
            @keydown=${this.newTaskVisible}
            appearance="neutral">
              ${this.strings.cancelNewTaskSubtitle}
          </fluent-button>`;return $.qy`
    <div
      class=${(0,Z.H)({task:!0,"new-task":!0})}>
      <div class="task-details-container">
        <div class="top add-new-task">
          <div class="check-and-title">
            ${t}
            <div class="task-content">
              <div class="task-group">${o}</div>
              <div class="task-bucket">${r}</div>
              ${d}
              <div class="task-due">${l}</div>
            </div>
          </div>
          <div class="task-options new-task-action-buttons">${c}</div>
        </div>
      </div>
    </div>
  `}togglePeoplePicker(e){const t=this.getPeoplePicker(e),i=this.getMgtPeople(e),o=this.getFlyout(e);t&&i&&o&&(o.isOpen?o.close():(t.selectedPeople=i.people,o.open(),setTimeout((()=>t.focus()),100)))}updateAssignedPeople(e){const t=this.getPeoplePicker(e),i=this.getMgtPeople(e);t&&t.selectedPeople!==i.people&&(i.people=t.selectedPeople,this.assignPeople(e,t.selectedPeople))}getPeoplePicker(e){const t=e?e.id:"new-task";return this.renderRoot.querySelector(`.picker-${t}`)}getMgtPeople(e){const t=e?e.id:"new-task";return this.renderRoot.querySelector(`.people-${t}`)}getFlyout(e){const t=e?e.id:"new-task";return this.renderRoot.querySelector(`.flyout-${t}`)}renderTask(e){const{name:t="Task",completed:i=!1,dueDate:o}=e,s=this._currentGroup?null:this.getPlanTitle(e.topParentId),n=this._currentFolder?null:this.getFolderName(e.immediateParentId),r={task:Object.assign(Object.assign({},e._raw),{groupTitle:s,folderTitle:n})},a=this.renderTemplate("task",r,e.id);if(a)return a;let l=this.renderTemplate("task-details",r,`task-details-${e.id}`);if(!l){const t="var(--neutral-foreground-hint)",i=this._currentGroup?null:$.qy`
              <div class="task-group">
                <span class="task-icon">${this.renderPlannerIcon(t)}</span>
                <span class="task-icon-text">${this.getPlanTitle(e.topParentId)}</span>
              </div>
            `,s=this._currentFolder?null:$.qy`
            <div class="task-bucket">
              <span class="task-icon">${this.renderBucketIcon(t)}</span>
              <span class="task-icon-text">${this.getFolderName(e.immediateParentId)}</span>
            </div>
          `,n=o?$.qy`
            <div class="task-due">
              <span class="task-icon-text">${this.strings.due}${(0,it.Gp)(o)}</span>
            </div>
          `:null,r=this.renderAssignedPeople(e);l=$.qy`${i} ${s} ${r} ${n}`}const d=this.readOnly||this.hideOptions?null:I.Q`
            <mgt-dot-options
              class="dot-options"
              .options="${{[this.strings.removeTaskSubtitle]:t=>this.removeTask(e,t)}}"
            ></mgt-dot-options>`,c=(0,Z.H)({task:!0,complete:i,incomplete:!i,"read-only":this.readOnly});return $.qy`
      <div
        data-id="task-${e.id}"
        class=${c}
        @click=${()=>this.handleTaskClick(e)}>
        <div class="task-details-container">
          <div class="top">
            <div class="check-and-title">
              <fluent-checkbox
                @click=${t=>this.handleTaskCheckClick(t,e)}
                @keydown=${t=>this.handleTaskCheckKeyDown(t,e)}
                ?checked=${i}>
                  ${t}
              </fluent-checkbox>
            </div>
            <div class="task-options">${d}</div>
          </div>
          <div class="bottom">${l}</div>
        </div>
      </div>
    `}handleTaskCheckKeyDown(e,t){return Ri(this,void 0,void 0,(function*(){"Enter"===e.key&&(e.stopPropagation(),e.preventDefault(),yield this.checkTask(t))}))}handleTaskCheckClick(e,t){return Ri(this,void 0,void 0,(function*(){e.stopPropagation(),e.preventDefault(),yield this.checkTask(t)}))}checkTask(e){return Ri(this,void 0,void 0,(function*(){if(!this.readOnly){const t=this.shadowRoot.querySelector(`[data-id='task-${e.id}'`);t&&t.classList.add("updating"),e.completed?yield this.uncompleteTask(e):yield this.completeTask(e),t&&t.classList.remove("updating")}}))}renderAssignedPeople(e){var t;let i;const o={"new-task-assignee":null===e,"task-assignee":null!==e,"task-detail":null!==e},s=e?e.id:"new-task";o[`flyout-${s}`]=!0;const n=e?Object.keys(e.assignments).map((e=>e)):[];if(!this.newTaskVisible){const o=null==e?void 0:e._raw,s=null==o?void 0:o.planId;s&&(i=null===(t=this._groups.filter((e=>e.id===s)).pop())||void 0===t?void 0:t.containerId)}const r=this.isNewTaskVisible?this._newTaskContainerId:i,a=I.Q`
      <mgt-people
        class="people people-${s}"
        .userIds=${n}
        person-card="none"
        @click=${t=>this.handlePeopleClick(t,e)}
        @keydown=${t=>this.handlePeopleKeydown(t,e)}
      >
        <template data-type="no-data">
          <fluent-button>
            <span style="display:flex;place-content:start;gap:4px;padding-inline-start:4px">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="svg" fill="currentColor">
                <path d="M9 2a4 4 0 100 8 4 4 0 000-8zM6 6a3 3 0 116 0 3 3 0 01-6 0z"></path>
                <path d="M4 11a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 009 18c.41 0 .82-.02 1.21-.06A5.5 5.5 0 019.6 17 12 12 0 019 17a8.16 8.16 0 01-4.33-1.05A3.36 3.36 0 013 13a1 1 0 011-1h5.6c.18-.36.4-.7.66-1H4z"></path>
                <path d="M14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 010 1H15v1.5a.5.5 0 01-1 0V15h-1.5a.5.5 0 010-1H14v-1.5c0-.28.22-.5.5-.5z"></path>
              </svg> Assign</span>
            </fluent-button>
        </template>
      </mgt-people>`,l=I.Q`
      <mgt-people-picker
        class="people-picker picker-${s}"
        .groupId=${(0,de.J)(r)}
        @keydown=${this.handlePeoplePickerKeydown}>
      ></mgt-people-picker>`;return I.Q`
      <mgt-flyout
        light-dismiss
        class=${(0,Z.H)(o)}
        @closed=${()=>this.updateAssignedPeople(e)}
      >
        <div slot="anchor">${a}</div>
        <div slot="flyout" part="picker" class="picker">${l}</div>
      </mgt-flyout>
    `}handleTaskClick(e){e&&this.fireCustomEvent("taskClick",e)}renderLoadingTask(){return $.qy`
      <div class="header">
        <div class="title">
          <fluent-skeleton shimmer class="shimmer" shape="rect"></fluent-skeleton>
        </div>
        <div class="new-task-button">
          <fluent-skeleton shimmer class="shimmer" shape="rect"></fluent-skeleton>
        </div>
      </div>
      <div class="tasks">
        <div class="task incomplete">
          <div class="task-details-container">
            <div class="top">
              <div class="check-and-title shimmer">
                <fluent-skeleton shimmer class="checkbox" shape="circle"></fluent-skeleton>
                <fluent-skeleton shimmer class="title" shape="rect"></fluent-skeleton>
              </div>
              <div class="task-options">
                <fluent-skeleton shimmer class="options" shape="rect"></fluent-skeleton>
              </div>
            </div>
            <div class="bottom">
              <div class="task-group">
                <div class="task-icon">
                  <fluent-skeleton shimmer class="shimmer icon" shape="rect"></fluent-skeleton>
                </div>
                <div class="task-icon-text">
                  <fluent-skeleton shimmer class="shimmer text" shape="rect"></fluent-skeleton>
                </div>
              </div>
              <div class="task-bucket">
                <div class="task-icon">
                  <fluent-skeleton shimmer class="shimmer icon" shape="rect"></fluent-skeleton>
                </div>
                <div class="task-icon-text">
                  <fluent-skeleton shimmer class="shimmer text" shape="rect"></fluent-skeleton>
                </div>
              </div>
              <div class="task-details shimmer">
                <fluent-skeleton shimmer class="shimmer icon" shape="circle"></fluent-skeleton>
                <fluent-skeleton shimmer class="shimmer icon" shape="circle"></fluent-skeleton>
                <fluent-skeleton shimmer class="shimmer icon" shape="circle"></fluent-skeleton>
              </div>
              <div class="task-due">
                <div class="task-icon-text">
                  <fluent-skeleton shimmer class="shimmer text" shape="rect"></fluent-skeleton>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    `}getTaskSource(){const e=o.b.globalProvider;if(!e||e.state!==s.HJ.SignedIn)return null;const t=e.graph.forComponent(this);return new kt(t)}getPlanTitle(e){return e?e===this.strings.plansSelfAssigned?this.strings.plansSelfAssigned:(this._groups.find((t=>t.id===e))||{title:this.strings.planNotFound}).title:this.strings.baseSelfAssigned}getFolderName(e){return e?(this._folders.find((t=>t.id===e))||{name:this.strings.bucketNotFound}).name:this.strings.bucketsSelfAssigned}isTaskInSelectedGroupFilter(e){var t;return!this._currentGroup||e.topParentId===this._currentGroup||!this._currentGroup&&this.getTaskSource().isAssignedToMe(e,null===(t=this._me)||void 0===t?void 0:t.id)}isTaskInSelectedFolderFilter(e){return e.immediateParentId===this._currentFolder||!this._currentFolder}dateToInputValue(e){return e?new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().split("T")[0]:null}}Li([(0,S.MZ)({attribute:"read-only",type:Boolean}),Oi("design:type",Boolean)],Mi.prototype,"readOnly",void 0),Li([(0,S.MZ)({attribute:"target-id",type:String}),Oi("design:type",String)],Mi.prototype,"targetId",void 0),Li([(0,S.MZ)({attribute:"target-bucket-id",type:String}),Oi("design:type",String)],Mi.prototype,"targetBucketId",void 0),Li([(0,S.MZ)({attribute:"initial-id",type:String}),Oi("design:type",String)],Mi.prototype,"initialId",void 0),Li([(0,S.MZ)({attribute:"initial-bucket-id",type:String}),Oi("design:type",String)],Mi.prototype,"initialBucketId",void 0),Li([(0,S.MZ)({attribute:"hide-header",type:Boolean}),Oi("design:type",Boolean)],Mi.prototype,"hideHeader",void 0),Li([(0,S.MZ)({attribute:"hide-options",type:Boolean}),Oi("design:type",Boolean)],Mi.prototype,"hideOptions",void 0),Li([(0,S.MZ)({attribute:"group-id",type:String}),Oi("design:type",String)],Mi.prototype,"groupId",void 0),Li([(0,S.wk)(),Oi("design:type",Boolean)],Mi.prototype,"_isNewTaskVisible",void 0),Li([(0,S.wk)(),Oi("design:type",Boolean)],Mi.prototype,"_newTaskBeingAdded",void 0),Li([(0,S.wk)(),Oi("design:type",String)],Mi.prototype,"_newTaskName",void 0),Li([(0,S.wk)(),Oi("design:type",Date)],Mi.prototype,"_newTaskDueDate",void 0),Li([(0,S.wk)(),Oi("design:type",String)],Mi.prototype,"_newTaskGroupId",void 0),Li([(0,S.wk)(),Oi("design:type",String)],Mi.prototype,"_newTaskFolderId",void 0),Li([(0,S.wk)(),Oi("design:type",String)],Mi.prototype,"_newTaskContainerId",void 0),Li([(0,S.wk)(),Oi("design:type",Array)],Mi.prototype,"_groups",void 0),Li([(0,S.wk)(),Oi("design:type",Array)],Mi.prototype,"_folders",void 0),Li([(0,S.wk)(),Oi("design:type",Array)],Mi.prototype,"_tasks",void 0),Li([(0,S.wk)(),Oi("design:type",Array)],Mi.prototype,"_hiddenTasks",void 0),Li([(0,S.wk)(),Oi("design:type",Boolean)],Mi.prototype,"_inTaskLoad",void 0),Li([(0,S.wk)(),Oi("design:type",Boolean)],Mi.prototype,"_hasDoneInitialLoad",void 0),Li([(0,S.wk)(),Oi("design:type",String)],Mi.prototype,"_currentGroup",void 0),Li([(0,S.wk)(),Oi("design:type",String)],Mi.prototype,"_currentFolder",void 0),Li([(0,S.wk)(),Oi("design:type",Object)],Mi.prototype,"_isDarkMode",void 0),Li([(0,S.wk)(),Oi("design:type",Object)],Mi.prototype,"_me",void 0);const Hi=[$.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .container{display:flex;flex-direction:column;position:relative}:host .dropdown{display:none;position:absolute;z-index:1000;top:34px}:host .dropdown.visible{display:flex}:host .dropdown .team-photo{width:24px;position:inherit;border-radius:50%;margin:0 6px}:host .dropdown .team-start-slot{width:max-content}:host .dropdown .team-parent-name{width:auto}:host .loading-text,:host .search-error-text{font-style:normal;font-weight:400;font-size:14px;line-height:20px}:host .message-parent{display:flex;flex-direction:row;gap:5px;padding:5px}:host .message-parent .loading-text{margin:auto}:host fluent-card{background:var(--channel-picker-dropdown-background-color,var(--fill-color));padding:2px;--card-height:auto;--width:var(--card-width)}:host fluent-text-field{width:100%}:host fluent-text-field::part(root){background:padding-box linear-gradient(var(--channel-picker-input-background-color,var(--neutral-fill-input-rest)),var(--channel-picker-input-background-color,var(--neutral-fill-input-rest))),border-box var(--channel-picker-input-border-color,var(--neutral-stroke-input-rest))}:host fluent-text-field::part(root):hover{background:padding-box linear-gradient(var(--channel-picker-input-background-color-hover,var(--neutral-fill-input-hover)),var(--channel-picker-input-background-color-hover,var(--neutral-fill-input-hover))),border-box var(--channel-picker-input-hover-border-color,var(--neutral-stroke-input-hover))}:host fluent-text-field::part(root):focus,:host fluent-text-field::part(root):focus-within{background:padding-box linear-gradient(var(--channel-picker-input-background-color-focus,var(--neutral-fill-input-focus)),var(--channel-picker-input-background-color-focus,var(--neutral-fill-input-focus))),border-box var(--channel-picker-input-focus-border-color,var(--neutral-stroke-input-focus))}:host fluent-text-field::part(control){word-spacing:inherit;text-indent:inherit;letter-spacing:inherit}:host fluent-text-field::part(control)::placeholder{color:var(--channel-picker-input-placeholder-text-color,var(--input-placeholder-rest))}:host fluent-text-field::part(control):hover::placeholder{color:var(--channel-picker-input-placeholder-text-color-hover,var(--input-placeholder-hover))}:host fluent-text-field::part(control):focus-within::placeholder,:host fluent-text-field::part(control):focus::placeholder{color:var(--channel-picker-input-placeholder-text-color-focus,var(--input-placeholder-filled))}:host fluent-text-field .search-icon svg path{fill:var(--channel-picker-search-icon-color,currentColor)}:host fluent-text-field .down-chevron{height:auto;min-width:auto}:host fluent-text-field .down-chevron svg path{fill:var(--channel-picker-down-chevron-color,currentColor)}:host fluent-text-field .up-chevron{height:auto;min-width:auto}:host fluent-text-field .up-chevron svg path{fill:var(--channel-picker-up-chevron-color,currentColor)}:host fluent-text-field .close-icon{height:auto;min-width:auto}:host fluent-text-field .close-icon svg path{fill:var(--channel-picker-close-icon-color,currentColor)}:host fluent-tree-view{min-width:100%;--tree-item-nested-width:2em}:host fluent-tree-item{width:100%;--tree-item-nested-width:2em}:host fluent-tree-item:focus-visible{outline:0}:host fluent-tree-item::part(expand-collapse-button){background:0 0}:host fluent-tree-item::part(content-region),:host fluent-tree-item::part(positioning-region){color:var(--channel-picker-dropdown-item-text-color,currentColor);background:var(--channel-picker-dropdown-background-color,transparent);border:calc(var(--stroke-width) * 2px) solid transparent;height:auto}:host fluent-tree-item::part(content-region):hover,:host fluent-tree-item::part(positioning-region):hover{background:var(--channel-picker-dropdown-item-background-color-hover,var(--neutral-fill-stealth-hover))}:host fluent-tree-item::part(content-region):hover::part(expand-collapse-button),:host fluent-tree-item::part(positioning-region):hover::part(expand-collapse-button){background:var(--channel-picker-dropdown-item-background-color-hover,var(--neutral-fill-stealth-hover))}:host fluent-tree-item fluent-tree-item::part(content-region){height:auto}:host fluent-breadcrumb-item{color:var(--channel-picker-dropdown-item-text-color-selected,var(--neutral-foreground-rest))}:host fluent-breadcrumb-item .team-parent-name{font-weight:700}:host fluent-breadcrumb-item .team-photo{width:19px;position:inherit;border-radius:50%}:host fluent-breadcrumb-item .arrow{margin-left:8px;margin-right:8px}:host fluent-breadcrumb-item .arrow svg{stroke:var(--channel-picker-arrow-fill,var(--neutral-foreground-rest))}[dir=rtl] :host{--direction:rtl}[dir=rtl] .dropdown{text-align:right}[dir=rtl] .arrow{transform:scaleX(-1);filter:fliph;filter:"FlipH";margin-right:0;margin-left:5px}[dir=rtl] .selected-team{padding-left:10px}[dir=rtl] .message-parent .loading-text{right:auto;left:10px;padding-right:8px;text-align:right}@media (forced-colors:active) and (prefers-color-scheme:dark){:host fluent-text-field svg{stroke:rgb(255,255,255)!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host fluent-text-field svg{stroke:rgb(0,0,0)!important}}
`];var Vi=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const zi=["Team.ReadBasic.All","TeamSettings.Read.All","TeamSettings.ReadWrite.All","User.Read.All","User.ReadWrite.All"],Ni=["Channel.ReadBasic.All","ChannelSettings.Read.All","ChannelSettings.ReadWrite.All"],qi=["Team.ReadBasic.All","TeamSettings.Read.All","TeamSettings.ReadWrite.All"],Bi={inputPlaceholderText:"Select a channel",noResultsFound:"We didn't find any matches.",loadingMessage:"Loading...",photoFor:"Teams photo for",teamsChannels:"Teams and channels results",closeButtonAriaLabel:"remove the selected channel",downChevronButtonAriaLabel:"Teams show results button",upChevronButtonAriaLabel:"Teams hide results button"};class Ui extends ye.g{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{var e;null===(e=this.control)||void 0===e||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}(0,ge.Cg)([ve.CF],Ui.prototype,"download",void 0),(0,ge.Cg)([ve.CF],Ui.prototype,"href",void 0),(0,ge.Cg)([ve.CF],Ui.prototype,"hreflang",void 0),(0,ge.Cg)([ve.CF],Ui.prototype,"ping",void 0),(0,ge.Cg)([ve.CF],Ui.prototype,"referrerpolicy",void 0),(0,ge.Cg)([ve.CF],Ui.prototype,"rel",void 0),(0,ge.Cg)([ve.CF],Ui.prototype,"target",void 0),(0,ge.Cg)([ve.CF],Ui.prototype,"type",void 0),(0,ge.Cg)([fe.sH],Ui.prototype,"defaultSlottedContent",void 0);class ji{}(0,ge.Cg)([(0,ve.CF)({attribute:"aria-expanded"})],ji.prototype,"ariaExpanded",void 0),(0,Ce.X)(ji,xe.z),(0,Ce.X)(Ui,ke.qw,ji);class Zi extends Ui{constructor(){super(...arguments),this.separator=!0}}(0,ge.Cg)([fe.sH],Zi.prototype,"separator",void 0),(0,Ce.X)(Zi,ke.qw,ji);class Wi extends ye.g{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(void 0===this.slottedBreadcrumbItems||0===this.slottedBreadcrumbItems.length)return;const e=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach((t=>{const i=t===e;this.setItemSeparator(t,i),this.setAriaCurrent(t,i)}))}}setItemSeparator(e,t){e instanceof Zi&&(e.separator=!t)}findChildWithHref(e){var t,i;return e.childElementCount>0?e.querySelector("a[href]"):(null===(t=e.shadowRoot)||void 0===t?void 0:t.childElementCount)?null===(i=e.shadowRoot)||void 0===i?void 0:i.querySelector("a[href]"):null}setAriaCurrent(e,t){const i=this.findChildWithHref(e);null===i&&e.hasAttribute("href")&&e instanceof Zi?t?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current"):null!==i&&(t?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current"))}}(0,ge.Cg)([fe.sH],Wi.prototype,"slottedBreadcrumbItems",void 0);var Gi=i(510);const Qi=Wi.compose({baseName:"breadcrumb",template:(e,t)=>Te.q`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${(0,De.e)({property:"slottedBreadcrumbItems",filter:(0,Gi.Y)()})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Oe.A`
  ${(0,Re.V)("inline-block")} :host {
    box-sizing: border-box;
    ${Bt.Ah};
  }

  .list {
    display: flex;
  }
`}),Ki=Zi.compose({baseName:"breadcrumb-item",template:(e,t)=>Te.q`
    <div role="listitem" class="listitem" part="listitem">
        ${(0,Ot.z)((e=>e.href&&e.href.length>0),Te.q`
                ${((e,t)=>Te.q`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${(0,Rt.K)("control")}
    >
        ${(0,ke.LT)(e,t)}
        <span class="content" part="content">
            <slot ${(0,De.e)("defaultSlottedContent")}></slot>
        </span>
        ${(0,ke.aO)(e,t)}
    </a>
`)(e,t)}
            `)}
        ${(0,Ot.z)((e=>!e.href),Te.q`
                ${(0,ke.LT)(e,t)}
                <slot></slot>
                ${(0,ke.aO)(e,t)}
            `)}
        ${(0,Ot.z)((e=>e.separator),Te.q`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${t.separator||""}</slot>
                </span>
            `)}
    </div>
`,styles:(e,t)=>Oe.A`
    ${(0,Re.V)("inline-flex")} :host {
      background: transparent;
      color: ${Ee.lHw};
      fill: currentcolor;
      box-sizing: border-box;
      ${Bt.Ah};
      min-width: calc(${Nt.D} * 1px);
      border-radius: calc(${Ee.PbG} * 1px);
    }

    .listitem {
      display: flex;
      align-items: center;
      border-radius: inherit;
    }

    .control {
      position: relative;
      align-items: center;
      box-sizing: border-box;
      color: inherit;
      fill: inherit;
      cursor: pointer;
      display: flex;
      outline: none;
      text-decoration: none;
      white-space: nowrap;
      border-radius: inherit;
    }

    .control:hover {
      color: ${Ee.LnO};
    }

    .control:active {
      color: ${Ee.LIX};
    }

    .control:${Et.N} {
      ${Me.v}
    }

    :host(:not([href])),
    :host([aria-current]) .control {
      color: ${Ee.lHw};
      fill: currentcolor;
      cursor: default;
    }

    .start {
      display: flex;
      margin-inline-end: 6px;
    }

    .end {
      display: flex;
      margin-inline-start: 6px;
    }

    .separator {
      display: flex;
    }
  `.withBehaviors((0,Ht.mr)(Oe.A`
        :host(:not([href])),
        .start,
        .end,
        .separator {
          background: ${Vt.A.ButtonFace};
          color: ${Vt.A.ButtonText};
          fill: currentcolor;
        }
        .separator {
          fill: ${Vt.A.ButtonText};
        }
        :host([href]) {
          forced-color-adjust: none;
          background: ${Vt.A.ButtonFace};
          color: ${Vt.A.LinkText};
        }
        :host([href]) .control:hover {
          background: ${Vt.A.LinkText};
          color: ${Vt.A.HighlightText};
          fill: currentcolor;
        }
        .control:${Et.N} {
          outline-color: ${Vt.A.LinkText};
        }
      `)),shadowOptions:{delegatesFocus:!0},separator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  '});function Xi(e){return(0,we.sb)(e)&&"treeitem"===e.getAttribute("role")}class Ji extends ye.g{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>Xi(this.parentElement),this.handleExpandCollapseButtonClick=e=>{this.disabled||e.defaultPrevented||(this.expanded=!this.expanded)},this.handleFocus=e=>{this.setAttribute("tabindex","0")},this.handleBlur=e=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(e,t){this.$fastController.isConnected&&this.items.forEach((e=>{Xi(e)&&(e.nested=!0)}))}static focusItem(e){e.focusable=!0,e.focus()}childItemLength(){const e=this.childItems.filter((e=>Xi(e)));return e?e.length:0}}(0,ge.Cg)([(0,ve.CF)({mode:"boolean"})],Ji.prototype,"expanded",void 0),(0,ge.Cg)([(0,ve.CF)({mode:"boolean"})],Ji.prototype,"selected",void 0),(0,ge.Cg)([(0,ve.CF)({mode:"boolean"})],Ji.prototype,"disabled",void 0),(0,ge.Cg)([fe.sH],Ji.prototype,"focusable",void 0),(0,ge.Cg)([fe.sH],Ji.prototype,"childItems",void 0),(0,ge.Cg)([fe.sH],Ji.prototype,"items",void 0),(0,ge.Cg)([fe.sH],Ji.prototype,"nested",void 0),(0,ge.Cg)([fe.sH],Ji.prototype,"renderCollapsedChildren",void 0),(0,Ce.X)(Ji,ke.qw);class Yi extends ye.g{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=e=>{if(!(this.slottedTreeItems.length<1))return e.target===this?(null===this.currentFocused&&(this.currentFocused=this.getValidFocusableItem()),void(null!==this.currentFocused&&Ji.focusItem(this.currentFocused))):void(this.contains(e.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=e.target))},this.handleBlur=e=>{e.target instanceof HTMLElement&&(null===e.relatedTarget||!this.contains(e.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=e=>{if(e.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const t=this.getVisibleNodes();switch(e.key){case me.Tg:return void(t.length&&Ji.focusItem(t[0]));case me.FM:return void(t.length&&Ji.focusItem(t[t.length-1]));case me.kT:if(e.target&&this.isFocusableElement(e.target)){const t=e.target;t instanceof Ji&&t.childItemLength()>0&&t.expanded?t.expanded=!1:t instanceof Ji&&t.parentElement instanceof Ji&&Ji.focusItem(t.parentElement)}return!1;case me.bb:if(e.target&&this.isFocusableElement(e.target)){const t=e.target;t instanceof Ji&&t.childItemLength()>0&&!t.expanded?t.expanded=!0:t instanceof Ji&&t.childItemLength()>0&&this.focusNextNode(1,e.target)}return;case me.HX:return void(e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(1,e.target));case me.I5:return void(e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(-1,e.target));case me.Mm:return void this.handleClick(e)}return!0},this.handleSelectedChange=e=>{if(e.defaultPrevented)return;if(!(e.target instanceof Element&&Xi(e.target)))return!0;const t=e.target;t.selected?(this.currentSelected&&this.currentSelected!==t&&(this.currentSelected.selected=!1),this.currentSelected=t):t.selected||this.currentSelected!==t||(this.currentSelected=null)},this.setItems=()=>{const e=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=e,null!==this.currentFocused&&this.contains(this.currentFocused)||(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach((e=>{Xi(e)&&(e.nested=this.nested)}))},this.isFocusableElement=e=>Xi(e),this.isSelectedElement=e=>e.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),Fe.dv.queueUpdate((()=>{this.setItems()}))}handleClick(e){if(e.defaultPrevented)return;if(!(e.target instanceof Element&&Xi(e.target)))return!0;const t=e.target;t.disabled||(t.selected=!t.selected)}focusNextNode(e,t){const i=this.getVisibleNodes();if(!i)return;const o=i[i.indexOf(t)+e];(0,we.sb)(o)&&Ji.focusItem(o)}getValidFocusableItem(){const e=this.getVisibleNodes();let t=e.findIndex(this.isSelectedElement);return-1===t&&(t=e.findIndex(this.isFocusableElement)),-1!==t?e[t]:null}checkForNestedItems(){return this.slottedTreeItems.some((e=>Xi(e)&&e.querySelector("[role='treeitem']")))}getVisibleNodes(){return(0,we.JL)(this,"[role='treeitem']")||[]}}(0,ge.Cg)([(0,ve.CF)({attribute:"render-collapsed-nodes"})],Yi.prototype,"renderCollapsedNodes",void 0),(0,ge.Cg)([fe.sH],Yi.prototype,"currentSelected",void 0),(0,ge.Cg)([fe.sH],Yi.prototype,"slottedTreeItems",void 0);const eo=Yi.compose({baseName:"tree-view",template:(e,t)=>Te.q`
    <template
        role="tree"
        ${(0,Rt.K)("treeView")}
        @keydown="${(e,t)=>e.handleKeyDown(t.event)}"
        @focusin="${(e,t)=>e.handleFocus(t.event)}"
        @focusout="${(e,t)=>e.handleBlur(t.event)}"
        @click="${(e,t)=>e.handleClick(t.event)}"
        @selected-change="${(e,t)=>e.handleSelectedChange(t.event)}"
    >
        <slot ${(0,De.e)("slottedTreeItems")}></slot>
    </template>
`,styles:(e,t)=>Oe.A`
  :host([hidden]) {
    display: none;
  }

  ${(0,Re.V)("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`});var to=i(7148);class io extends Gi.n{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}var oo=i(6243);const so=Oe.A`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${Nt.D} * -1px));
  }
  :host([selected])::after {
    left: calc(${Ee.vdx} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,no=Oe.A`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${Nt.D} * -1px));
  }
  :host([selected])::after {
    right: calc(${Ee.vdx} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,ro=Oe.L`((${Ee.Sss} / 2) * ${Ee.vR1}) + ((${Ee.vR1} * ${Ee.Brd}) / 2)`,ao=oo.G.create("tree-item-expand-collapse-hover").withDefault((e=>{const t=Ee.EE_.getValueFor(e);return t.evaluate(e,t.evaluate(e).hover).hover})),lo=oo.G.create("tree-item-expand-collapse-selected-hover").withDefault((e=>{const t=Ee.jIq.getValueFor(e);return Ee.EE_.getValueFor(e).evaluate(e,t.evaluate(e).rest).hover})),co=Ji.compose({baseName:"tree-item",template:(e,t)=>{return Te.q`
    <template
        role="treeitem"
        slot="${e=>e.isNestedItem()?"item":void 0}"
        tabindex="-1"
        class="${e=>e.expanded?"expanded":""} ${e=>e.selected?"selected":""} ${e=>e.nested?"nested":""}
            ${e=>e.disabled?"disabled":""}"
        aria-expanded="${e=>e.childItems&&e.childItemLength()>0?e.expanded:void 0}"
        aria-selected="${e=>e.selected}"
        aria-disabled="${e=>e.disabled}"
        @focusin="${(e,t)=>e.handleFocus(t.event)}"
        @focusout="${(e,t)=>e.handleBlur(t.event)}"
        ${i={property:"childItems",filter:(0,Gi.Y)()},"string"==typeof i&&(i={property:i}),new to.xz("fast-children",io,i)}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${(0,Ot.z)((e=>e.childItems&&e.childItemLength()>0),Te.q`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(e,t)=>e.handleExpandCollapseButtonClick(t.event)}"
                            ${(0,Rt.K)("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${t.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${(0,ke.LT)(e,t)}
                <slot></slot>
                ${(0,ke.aO)(e,t)}
            </div>
        </div>
        ${(0,Ot.z)((e=>e.childItems&&e.childItemLength()>0&&(e.expanded||e.renderCollapsedChildren)),Te.q`
                <div role="group" class="items" part="items">
                    <slot name="item" ${(0,De.e)("items")}></slot>
                </div>
            `)}
    </template>
`;var i},styles:(e,t)=>Oe.A`
    ${(0,Re.V)("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${Ee.lHw};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${Ee.OCo};
      --expand-collapse-button-size: calc(${Nt.D} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${Ee.WlO};
      border: calc(${Ee.XAH} * 1px) solid transparent;
      border-radius: calc(${Ee.PbG} * 1px);
      height: calc((${Nt.D} + 1) * 1px);
    }

    :host(:${Et.N}) .positioning-region {
      ${Me.W}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${Ee.oO8};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${Ee.wOW};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${Nt.D} * 1px);
      margin-inline-start: calc(${Ee.vR1} * 2px + 8px);
      ${Bt.Ah}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${Ee.vR1} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${Ee.PbG} * 1px);
      ${""} width: calc((${ro} + (${Ee.vR1} * 2)) * 1px);
      height: calc((${ro} + (${Ee.vR1} * 2)) * 1px);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0 6px;
    }

    .expand-collapse-button svg {
      transition: transform 0.1s linear;
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
    }

    .start {
      ${""} margin-inline-end: calc(${Ee.vR1} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${Ee.vR1} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${Ee.qB4};
      cursor: ${Mt.Z};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${ao};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${Ee.v8G};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${lo};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${Nt.D} / 4) * 1px);
      width: 3px;
      height: calc((${Nt.D} / 2) * 1px);
      ${""} background: ${Ee.IRh};
      border-radius: calc(${Ee.PbG} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${Nt.D} * -1px);
    }
  `.withBehaviors(new Jt(so,no),(0,Ht.mr)(Oe.A`
        :host {
          color: ${Vt.A.ButtonText};
        }
        .positioning-region {
          border-color: ${Vt.A.ButtonFace};
          background: ${Vt.A.ButtonFace};
        }
        :host(:not([disabled])) .positioning-region:hover,
        :host(:not([disabled])) .positioning-region:active,
        :host(:not([disabled])[selected]) .positioning-region {
          background: ${Vt.A.Highlight};
        }
        :host .positioning-region:hover .content-region,
        :host([selected]) .positioning-region .content-region {
          forced-color-adjust: none;
          color: ${Vt.A.HighlightText};
        }
        :host([disabled][selected]) .positioning-region .content-region {
          color: ${Vt.A.GrayText};
        }
        :host([selected])::after {
          background: ${Vt.A.HighlightText};
        }
        :host(:${Et.N}) .positioning-region {
          forced-color-adjust: none;
          outline-color: ${Vt.A.ButtonFace};
        }
        :host([disabled]),
        :host([disabled]) .content-region,
        :host([disabled]) .positioning-region:hover .content-region {
          opacity: 1;
          color: ${Vt.A.GrayText};
        }
        :host(.nested) .expand-collapse-button:hover,
        :host(:not([disabled])[selected]) .expand-collapse-button:hover {
          background: ${Vt.A.ButtonFace};
          fill: ${Vt.A.ButtonText};
        }
      `)),expandCollapseGlyph:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  '});var ho=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},uo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},po=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};class go extends _.N{static get styles(){return Hi}get strings(){return Bi}get selectedItem(){return this._selectedItemState?{channel:this._selectedItemState.item,team:this._selectedItemState.parent.item}:null}static get requiredScopes(){return["team.readbasic.all","channel.readbasic.all"]}set items(e){this._items!==e&&(this._items=e,this._treeViewState=e?this.generateTreeViewState(e):[],this.resetFocusState())}get items(){return this._items}get _inputWrapper(){return this.renderRoot.querySelector("fluent-text-field")}get _input(){const e=this._inputWrapper;return null==e?void 0:e.shadowRoot.querySelector("input")}constructor(){super(),this.teamsPhotos={},this._inputValue="",this._treeViewState=[],this._focusList=[],this.renderLoading=()=>this.renderContent(),this.renderContent=()=>{var e;const t={dropdown:!0,visible:this._isDropdownVisible};return this.renderTemplate("default",{teams:null!==(e=this.items)&&void 0!==e?e:[]})||$.qy`
        <div class="container" @blur=${this.lostFocus}>
          <fluent-text-field
            autocomplete="off"
            appearance="outline"
            id="teams-channel-picker-input"
            role="combobox"
            placeholder="${this._selectedItemState?"":this.strings.inputPlaceholderText} "
            aria-label=${this.strings.inputPlaceholderText}
            aria-expanded="${this._isDropdownVisible}"
            label="teams-channel-picker-input"
            @focus=${this.handleFocus}
            @keyup=${this.handleInputChanged}
            @click=${this.handleInputClick}
            @keydown=${this.handleInputKeydown}
          >
            <div tabindex="0" slot="start" style="width: max-content;" @keydown=${this.handleStartSlotKeydown}>${this.renderSelected()}</div>
            <div tabindex="0" slot="end" @keydown=${this.handleChevronKeydown}>${this.renderChevrons()}${this.renderCloseButton()}</div>
          </fluent-text-field>
          <fluent-card
            class=${(0,Z.H)(t)}
          >
            ${this.renderDropdown()}
          </fluent-card>
        </div>`},this.handleInputClick=e=>{e.stopPropagation(),this.gainedFocus()},this.handleInputKeydown=e=>{const t=e.key;["ArrowDown","Enter"].includes(t)?this._isDropdownVisible?this.renderRoot.querySelector("fluent-tree-item").focus():this.gainedFocus():"Escape"===t?this.lostFocus():"Tab"===t&&this.blurPicker()},this.onClickCloseButton=()=>{this.removeSelectedChannel(null)},this.onKeydownCloseButton=e=>{"Enter"===e.key&&this.removeSelectedChannel(null)},this.renderError=()=>this.renderTemplate("error",null,"error")||$.qy`
        <div class="message-parent">
          <div
            label="search-error-text"
            aria-live="polite"
            aria-relevant="all"
            aria-atomic="true"
            class="search-error-text"
          >
            ${this.strings.noResultsFound}
          </div>
        </div>
      `,this.renderLoadingIndicator=()=>this.renderTemplate("loading",null,"loading")||I.Q`
        <div class="message-parent">
          <mgt-spinner></mgt-spinner>
          <div label="loading-text" aria-label="loading" class="loading-text">
            ${this.strings.loadingMessage}
          </div>
        </div>
      `,this.onKeydownTreeView=e=>{"Escape"===e.key&&this.lostFocus()},this.handleTeamTreeItemClick=e=>{e.preventDefault(),e.stopImmediatePropagation();const t=e.target;t&&(t.getAttribute("expanded")?t.removeAttribute("expanded"):t.setAttribute("expanded","true"),t.removeAttribute("selected"),t.getAttribute("id")&&t.setAttribute("selected","true"))},this.handleInputChanged=e=>{const t=e.target;this._inputValue!==(null==t?void 0:t.value)&&(this._inputValue=null==t?void 0:t.value,"Tab"!==e.key&&"Enter"!==e.key&&"Escape"!==e.key&&this.gainedFocus(),this.debouncedSearch||(this.debouncedSearch=(0,it.sg)((()=>{this.filterList()}),400)),this.debouncedSearch())},this.loadTeamsIfNotLoaded=()=>{this.items||this._task.status===Ne.e1.PENDING||this._task.run()},this.handleWindowClick=e=>{e.target!==this&&this.lostFocus()},this.gainedFocus=()=>{const e=this._input;e&&e.focus(),this._isDropdownVisible=!0,this.toggleChevron(),this.resetFocusState(),this.requestUpdate()},this.lostFocus=()=>{this._inputValue="",this._input&&(this._input.value=this._inputValue,this._input.textContent="");const e=this._inputWrapper;e&&(e.value="",e.blur()),this._isDropdownVisible=!1,this.filterList(),this.toggleChevron(),this.requestUpdate(),void 0!==this._selectedItemState&&this.showCloseIcon()},this.handleFocus=()=>{this.gainedFocus()},this.handleUpChevronClick=e=>{e.stopPropagation(),this.lostFocus()},this.handleChevronKeydown=e=>{"Tab"===e.key&&this.blurPicker()},this.handleStartSlotKeydown=e=>{"Tab"===e.key&&e.shiftKey&&this.blurPicker()},this.blurPicker=()=>{const e=this._inputWrapper,t=this._input;null==e||e.blur(),null==t||t.blur()},this._inputValue="",this._treeViewState=[],this._focusList=[],this._isDropdownVisible=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this.handleWindowClick),this.addEventListener("focus",this.loadTeamsIfNotLoaded),this.addEventListener("mouseover",this.loadTeamsIfNotLoaded),this.addEventListener("blur",this.lostFocus);const e=this.renderRoot.ownerDocument;e&&e.documentElement.setAttribute("dir",this.direction)}disconnectedCallback(){window.removeEventListener("click",this.handleWindowClick),this.removeEventListener("focus",this.loadTeamsIfNotLoaded),this.removeEventListener("mouseover",this.loadTeamsIfNotLoaded),this.removeEventListener("blur",this.lostFocus),super.disconnectedCallback()}args(){return[]}selectChannelById(e){return po(this,void 0,void 0,(function*(){const t=o.b.globalProvider;if(t&&t.state===s.HJ.SignedIn){this.items||(yield this._task.run());for(const t of this._treeViewState)for(const i of t.channels)if(i.item.id===e)return t.isExpanded=!0,this.selectChannel(i),this.markSelectedChannelInDropdown(e),!0}return!1}))}markSelectedChannelInDropdown(e){const t=this.renderRoot.querySelector(`[id='${e}']`);t&&(t.setAttribute("selected","true"),t.parentElement&&t.parentElement.setAttribute("expanded","true"))}renderSelected(){var e,t,i,o,s,n;if(!this._selectedItemState)return this.renderSearchIcon();let r;if(this._selectedItemState.parent.channels){const t=null===(e=this.teamsPhotos[this._selectedItemState.parent.item.id])||void 0===e?void 0:e.photo;r=$.qy`<img
        class="team-photo"
        alt="${this._selectedItemState.parent.item.displayName}"
        role="img"
        src=${t} />`}const a=null===(o=null===(i=null===(t=this._selectedItemState)||void 0===t?void 0:t.parent)||void 0===i?void 0:i.item)||void 0===o?void 0:o.displayName.trim(),l=null===(n=null===(s=this._selectedItemState)||void 0===s?void 0:s.item)||void 0===n?void 0:n.displayName.trim();return $.qy`
      <fluent-breadcrumb title=${this._selectedItemState.item.displayName}>
        <fluent-breadcrumb-item>
          <span slot="start">${r}</span>
          <span class="team-parent-name">${a}</span>
          <span slot="separator" class="arrow">${(0,P.r)(P.A.TeamSeparator,"#000000")}</span>
        </fluent-breadcrumb-item>
        <fluent-breadcrumb-item>${l}</fluent-breadcrumb-item>
      </fluent-breadcrumb>`}clearState(){this._inputValue="",this._treeViewState=[],this._focusList=[],this._isDropdownVisible=!1}renderSearchIcon(){return $.qy`
      <div class="search-icon" @keydown=${this.handleStartSlotKeydown}>
        ${(0,P.r)(P.A.Search,"#252424")}
      </div>
    `}renderCloseButton(){return $.qy`
      <fluent-button
        appearance="stealth"
        class="close-icon"
        style="display:none"
        aria-label=${this.strings.closeButtonAriaLabel}
        @click=${this.onClickCloseButton}
        @keydown=${this.onKeydownCloseButton}>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.0885911 0.215694L0.146447 0.146447C0.320013 -0.0271197 0.589437 -0.046405 0.784306 0.0885911L0.853553 0.146447L4 3.293L7.14645 0.146447C7.34171 -0.0488154 7.65829 -0.0488154 7.85355 0.146447C8.04882 0.341709 8.04882 0.658291 7.85355 0.853553L4.707 4L7.85355 7.14645C8.02712 7.32001 8.0464 7.58944 7.91141 7.78431L7.85355 7.85355C7.67999 8.02712 7.41056 8.0464 7.21569 7.91141L7.14645 7.85355L4 4.707L0.853553 7.85355C0.658291 8.04882 0.341709 8.04882 0.146447 7.85355C-0.0488154 7.65829 -0.0488154 7.34171 0.146447 7.14645L3.293 4L0.146447 0.853553C-0.0271197 0.679987 -0.046405 0.410563 0.0885911 0.215694L0.146447 0.146447L0.0885911 0.215694Z" fill="#212121"/>
        </svg>
      </fluent-button>
    `}showCloseIcon(){const e=this.renderRoot.querySelector(".down-chevron"),t=this.renderRoot.querySelector(".up-chevron"),i=this.renderRoot.querySelector(".close-icon");e&&(e.style.display="none"),t&&(t.style.display="none"),i&&(i.style.display=null)}renderDownChevron(){return $.qy`
      <fluent-button
        aria-label=${this.strings.downChevronButtonAriaLabel}
        appearance="stealth"
        class="down-chevron"
        @click=${this.gainedFocus}
        @keydown=${this.handleChevronKeydown}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.21967 4.46967C2.51256 4.17678 2.98744 4.17678 3.28033 4.46967L6 7.18934L8.71967 4.46967C9.01256 4.17678 9.48744 4.17678 9.78033 4.46967C10.0732 4.76256 10.0732 5.23744 9.78033 5.53033L6.53033 8.78033C6.23744 9.07322 5.76256 9.07322 5.46967 8.78033L2.21967 5.53033C1.92678 5.23744 1.92678 4.76256 2.21967 4.46967Z" fill="#212121" />
        </svg>
      </fluent-button>`}renderUpChevron(){return $.qy`
      <fluent-button
        aria-label=${this.strings.upChevronButtonAriaLabel}
        appearance="stealth"
        style="display:none"
        class="up-chevron"
        @click=${this.handleUpChevronClick}
        @keydown=${this.handleChevronKeydown}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.21967 7.53033C2.51256 7.82322 2.98744 7.82322 3.28033 7.53033L6 4.81066L8.71967 7.53033C9.01256 7.82322 9.48744 7.82322 9.78033 7.53033C10.0732 7.23744 10.0732 6.76256 9.78033 6.46967L6.53033 3.21967C6.23744 2.92678 5.76256 2.92678 5.46967 3.21967L2.21967 6.46967C1.92678 6.76256 1.92678 7.23744 2.21967 7.53033Z" fill="#212121" />
        </svg>
      </fluent-button>`}renderChevrons(){return $.qy`${this.renderUpChevron()}${this.renderDownChevron()}`}renderDropdown(){return this._task.status!==Ne.e1.PENDING&&this._treeViewState?this._treeViewState?0===this._treeViewState.length&&this._inputValue.length>0?this.renderError():this.renderDropdownList(this._treeViewState):$.qy``:this.renderLoadingIndicator()}renderDropdownList(e){if(e&&e.length>0){let t=null;return $.qy`
        <fluent-tree-view
          class="tree-view"
          dir=${this.direction}
          aria-live="polite"
          aria-relevant="all"
          aria-atomic="true"
          aria-label=${this.strings.teamsChannels}
          aria-orientation="horizontal"
          @keydown=${this.onKeydownTreeView}>
          ${(0,L.u)(e,(e=>null==e?void 0:e.item),(e=>{var i;return e.channels&&(t=$.qy`<img
                  class="team-photo"
                  alt="${this.strings.photoFor} ${e.item.displayName}"
                  src=${null===(i=this.teamsPhotos[e.item.id])||void 0===i?void 0:i.photo} />`),$.qy`
                <fluent-tree-item
                  ?expanded=${null==e?void 0:e.isExpanded}
                  @click=${this.handleTeamTreeItemClick}>
                    <span slot="start">${t}</span>${e.item.displayName}
                    ${(0,L.u)(null==e?void 0:e.channels,(e=>e.item),(e=>this.renderItem(e)))}
                </fluent-tree-item>`}))}
        </fluent-tree-view>`}return null}renderItem(e){var t;return $.qy`
      <fluent-tree-item
        id=${null===(t=null==e?void 0:e.item)||void 0===t?void 0:t.id}
        @keydown=${t=>this.onUserKeyDown(t,e)}
        @click=${()=>this.handleItemClick(e)}>
          ${null==e?void 0:e.item.displayName}
      </fluent-tree-item>`}loadState(){return po(this,void 0,void 0,(function*(){const e=o.b.globalProvider;let t;if(e&&e.state===s.HJ.SignedIn){const i=e.graph.forComponent(this);t=yield(e=>Vi(void 0,void 0,void 0,(function*(){const t=zi,i=yield e.api("/me/joinedTeams").select(["displayName","id","isArchived"]).middlewareOptions((0,a.F)(t)).get();return null==i?void 0:i.value})))(i),t=t.filter((e=>!e.isArchived));const o=t.map((e=>e.id));this.teamsPhotos=yield((e,t)=>Vi(void 0,void 0,void 0,(function*(){let i,o={};if((0,Y.HJ)()){i=X._.getCache(te.j.photos,te.j.photos.stores.teams);for(const e of t)try{const t=yield i.getValue(e);t&&(0,Y.aC)()>Date.now()-t.timeCached&&(o[e]=t)}catch(e){}if(Object.keys(o).length)return o}o={};for(const s of t)try{const t=yield(0,Y.e_)(e,`/teams/${s}`,qi);(0,Y.HJ)()&&t&&(yield i.putValue(s,t)),o[s]=t}catch(e){}return o})))(i,o),this._items=yield((e,t)=>Vi(void 0,void 0,void 0,(function*(){var i,o;const s=e.createBatch();for(const e of t)s.get(e.id,`teams/${e.id}/channels`,Ni);const n=yield s.executeAll(),r=[];for(const e of t){const t=n.get(e.id);(null===(o=null===(i=null==t?void 0:t.content)||void 0===i?void 0:i.value)||void 0===o?void 0:o.length)&&r.push({item:e,channels:t.content.value.map((e=>({item:e})))})}return r})))(i,t)}this.filterList(),this.resetFocusState()}))}clearSelectedItem(){this.removeSelectedChannel()}removeSelectedChannel(e){this.selectChannel(e);const t=this.renderRoot.querySelectorAll("fluent-tree-item");t&&t.forEach((e=>{e.removeAttribute("expanded"),e.removeAttribute("selected")}))}handleItemClick(e){e.channels?e.isExpanded=!e.isExpanded:(this.selectChannel(e),this.lostFocus())}onUserKeyDown(e,t){switch(e.code){case"Enter":this.selectChannel(t),this.resetFocusState(),this.lostFocus(),e.preventDefault();break;case"Backspace":0===this._inputValue.length&&this._selectedItemState&&(this.selectChannel(null),this.resetFocusState(),e.preventDefault())}}filterList(){this.items&&(this._treeViewState=this.generateTreeViewState(this.items,this._inputValue),this.resetFocusState())}generateTreeViewState(e,t="",i=null){const o=[];if(t=t.toLowerCase(),e)for(const s of e){let e;if(0===t.length||s.item.displayName.toLowerCase().includes(t))e={item:s.item,parent:i},s.channels&&(e.channels=this.generateTreeViewState(s.channels,"",e),e.isExpanded=t.length>0);else if(s.channels){const o={item:s.item,parent:i},n=this.generateTreeViewState(s.channels,t,o);n.length>0&&(e=o,e.channels=n,e.isExpanded=!0)}e&&o.push(e)}return o}generateFocusList(e){if(!e||0===e.length)return[];let t=[];for(const i of e)t.push(i),i.channels&&i.isExpanded&&(t=[...t,...this.generateFocusList(i.channels)]);return t}resetFocusState(){this._focusList=this.generateFocusList(this._treeViewState),this.requestUpdate()}selectChannel(e){var t,i;e&&this._selectedItemState!==e?null===(t=this._input)||void 0===t||t.setAttribute("disabled","true"):null===(i=this._input)||void 0===i||i.removeAttribute("disabled"),this._selectedItemState=e,this.lostFocus(),this.fireCustomEvent("selectionChanged",this.selectedItem)}hideCloseIcon(){const e=this.renderRoot.querySelector(".close-icon");e&&(e.style.display="none")}toggleChevron(){const e=this.renderRoot.querySelector(".down-chevron"),t=this.renderRoot.querySelector(".up-chevron");this._isDropdownVisible?(e&&(e.style.display="none"),t&&(t.style.display=null)):(e&&(e.style.display=null,this.hideCloseIcon()),t&&(t.style.display="none")),this.hideCloseIcon()}}ho([(0,S.wk)(),uo("design:type",Object)],go.prototype,"_selectedItemState",void 0),ho([(0,S.wk)(),uo("design:type",Boolean)],go.prototype,"_isDropdownVisible",void 0);class fo extends ye.g{constructor(){super(...arguments),this.orientation=hi,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const i=e[t];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach((e=>{e!==i&&e.setAttribute("tabindex","-1")})):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,i=e.target,o=null!==i?t.indexOf(i):0,s=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===s&&o===s||s===t.length-1&&s===o)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,i)=>e===t.length&&this.isInsideToolbar&&i===me.bb,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===me.kT,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,t,e.key))this.moveRightOffGroup();else for(i===t.length&&(i=0);i<t.length&&t.length>1;){if(!t[i].disabled){this.moveToRadioByIndex(t,i);break}if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;if(i+1>=t.length){if(this.isInsideToolbar)break;i=0}else i+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,i=i<0?t.length-1:i,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;i>=0&&t.length>1;){if(!t[i].disabled){this.moveToRadioByIndex(t,i);break}if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;i-1<0?i=t.length-1:i-=1}},this.keydownHandler=e=>{const t=e.key;if(t in me.Is&&this.isInsideFoundationToolbar)return!0;switch(t){case me.Mm:this.checkFocusedRadio();break;case me.bb:case me.HX:this.direction===ai.O.ltr?this.moveRight(e):this.moveLeft(e);break;case me.kT:case me.I5:this.direction===ai.O.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=li(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;t>1&&(e[t-1].checked=!0);let i=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!i){const i=e[t-1];i.checked=!0,this.focusedRadio=i,i.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}(0,ge.Cg)([(0,ve.CF)({attribute:"readonly",mode:"boolean"})],fo.prototype,"readOnly",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"disabled",mode:"boolean"})],fo.prototype,"disabled",void 0),(0,ge.Cg)([ve.CF],fo.prototype,"name",void 0),(0,ge.Cg)([ve.CF],fo.prototype,"value",void 0),(0,ge.Cg)([ve.CF],fo.prototype,"orientation",void 0),(0,ge.Cg)([fe.sH],fo.prototype,"childItems",void 0),(0,ge.Cg)([fe.sH],fo.prototype,"slottedRadioButtons",void 0);const vo=fo.compose({baseName:"radio-group",template:(e,t)=>Te.q`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===hi?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${(0,De.e)({property:"slottedRadioButtons",filter:(0,Gi.Y)("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Oe.A`
  ${(0,Re.V)("flex")} :host {
    align-items: flex-start;
    flex-direction: column;
  }

  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }

  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }

  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
`});var mo=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const bo=["Tasks.ReadWrite"],yo=["Tasks.Read","Tasks.ReadWrite"],wo=(e,t)=>mo(void 0,void 0,void 0,(function*(){const i=yield e.api(`/me/todo/lists/${t}/tasks`).header("Cache-Control","no-store").middlewareOptions((0,a.F)(yo)).get();return null==i?void 0:i.value})),xo=(e,t)=>mo(void 0,void 0,void 0,(function*(){return yield e.api(`/me/todo/lists/${t}`).header("Cache-Control","no-store").middlewareOptions((0,a.F)(yo)).get()})),ko=(e,t,i,o)=>mo(void 0,void 0,void 0,(function*(){return yield e.api(`/me/todo/lists/${t}/tasks/${i}`).header("Cache-Control","no-store").middlewareOptions((0,a.F)(bo)).patch(o)})),Co=[$.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{display:flex;flex-direction:column;color:var(--color,var(--neutral-foreground-rest))}:host input[type=date]::-webkit-calendar-picker-indicator,:host input[type=date]::-webkit-inner-spin-button{display:none;appearance:none}:host .task-icon{font-family:FabricMDL2Icons;user-select:none}:host .task-icon.divider{vertical-align:initial;margin:0 12px;font-size:16px}:host .header{margin:var(--tasks-header-margin,0 0 12px 0);padding:var(--tasks-title-padding,0);display:flex;align-items:center;justify-content:space-between}:host .header .header__loading{max-width:90px;width:100%;height:20px;background:#f2f2f2}:host .header select{font-size:var(--tasks-plan-title-font-size, 1.1em);padding:var(--tasks-plan-title-padding,5px);border:none;appearance:none;cursor:pointer}:host .header select::-ms-expand{display:none}:host .header .plan-title{font-size:var(--tasks-plan-title-font-size, 1.1em);padding:var(--tasks-plan-title-padding,5px)}:host .header .add-bar{display:flex}:host .header .add-bar .add-bar-item{flex:1 1 auto}:host .header .new-task-due{display:flex}:host .header .new-task-due input{flex:1 1 auto;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .header .title-cont{flex:1 1 auto;display:flex;align-items:center;height:var(--tasks-new-button-height,34px)}:host .header .new-task-button{flex:0 0 auto;display:flex;justify-content:center;align-items:center;width:var(--tasks-new-button-width,auto);height:var(--tasks-new-button-height,32px);border-radius:2px;padding:0 20px;background:var(--tasks-new-button-background,#0078d4);border:var(--tasks-new-button-border,solid 1px transparent);color:var(--tasks-new-button-color,#fff);user-select:none;cursor:pointer}:host .header .new-task-button span{font-size:14px;font-weight:600;letter-spacing:.1px;line-height:14px}:host .header .new-task-button .task-icon{margin-right:8px}:host .header .new-task-button.hidden{visibility:hidden}:host .header .new-task-button:hover{background:var(--tasks-new-button-hover-background,#106ebe)}:host .header .new-task-button:active{background:var(--tasks-new-button-active-background,#005a9e)}:host .task{position:relative;margin:var(--task-margin,0 0 0 0);padding:var(--task-padding,0 0 0 0);background-color:var(--task-background-color,var(--neutral-layer-floating));border:var(--task-border,var(--neutral-stroke-input-active));border-radius:8px}:host .task .task-content{display:flex}:host .task .task-content .divider{position:absolute;height:2px;left:0;right:0;bottom:0;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .task .task-content .task-details-container{flex:1;display:grid;grid-template-columns:auto 1fr;-ms-grid-columns:auto 1fr;grid-template-rows:auto auto auto auto;-ms-grid-rows:auto auto auto auto;justify-content:space-between;align-items:flex-start;color:var(--task-detail-color,var(--neutral-foreground-hint));font-size:12px;font-weight:600;white-space:normal;margin-bottom:12px}:host .task .task-content .task-details-container .task-detail{width:100%;height:100%;margin:4px 24px 6px 0;display:flex;justify-content:flex-start;align-items:center}:host .task .task-content .task-details-container .task-title{color:var(--task-color,var(--neutral-foreground-rest));font-size:14px;font-weight:600;grid-row:1;grid-column:1/3;grid-column:1;-ms-grid-column-span:2;margin:22px 0 4px}:host .task .task-content .task-details-container .task-group{min-height:24px;grid-row:2;grid-column:1}:host .task .task-content .task-details-container .task-bucket{min-height:24px;grid-row:2;grid-column:2}:host .task .task-content .task-details-container .task-due{justify-content:flex-end;align-items:flex-start;grid-row:4;grid-column:1/3;grid-column:1;-ms-grid-column-span:2}:host .task .task-content .task-details-container.tablet{grid-template-columns:1fr 0.5fr 1fr 0.5fr;-ms-grid-columns:1fr 0.5fr 1fr 0.5fr;grid-template-rows:auto auto;-ms-grid-rows:auto auto}:host .task .task-content .task-details-container.tablet.no-plan{grid-template-columns:0 1fr 1fr 1fr;-ms-grid-columns:0 1fr 1fr 1fr}:host .task .task-content .task-details-container.tablet .task-detail{margin:4px 24px 6px 0}:host .task .task-content .task-details-container.tablet .task-title{grid-row:1;grid-column:1/5;grid-column:1;-ms-grid-column-span:4}:host .task .task-content .task-details-container.tablet .task-group{grid-row:2;grid-column:1}:host .task .task-content .task-details-container.tablet .task-bucket{grid-row:2;grid-column:2}:host .task .task-content .task-details-container.tablet .task-assignee{grid-row:2;grid-column:3}:host .task .task-content .task-details-container.tablet .task-due{justify-content:flex-start;align-items:center;grid-row:2;grid-column:4}:host .task .task-content .task-details-container.desktop{grid-template-columns:2fr 1fr 0.5fr 1fr 0.5fr;-ms-grid-columns:2fr 1fr 0.5fr 1fr 0.5fr;grid-template-rows:auto;-ms-grid-rows:auto;margin:0}:host .task .task-content .task-details-container.desktop.no-plan{grid-template-columns:2fr 0 1fr 1fr 1fr;-ms-grid-columns:2fr 0 1fr 1fr 1fr}:host .task .task-content .task-details-container.desktop .task-detail{margin:0 24px 0 0}:host .task .task-content .task-details-container.desktop .task-title{padding:0;grid-row:1;grid-column:1}:host .task .task-content .task-details-container.desktop .task-group{min-height:61px;grid-row:1;grid-column:2}:host .task .task-content .task-details-container.desktop .task-bucket{grid-row:1;grid-column:3}:host .task .task-content .task-details-container.desktop .task-assignee{grid-row:1;grid-column:4}:host .task .task-content .task-details-container.desktop .task-due{justify-content:flex-start;align-items:center;grid-row:1;grid-column:5}:host .task .task-content .task-details-container svg{vertical-align:middle;margin-right:4px}:host .task .task-content .task-details-container svg path{fill:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task .task-content .task-details-container select,:host .task .task-content .task-details-container span{vertical-align:middle;color:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task .task-content .task-details-container .task-icon{color:#797775;margin-right:8px}:host .task .task-content .task-details-container .people{color:var(--task-detail-color,var(--neutral-foreground-hint));font-size:16px}:host .task .task-content .task-details-container .person{display:inline-block}:host .task .task-content .task-details-container .picker{background-color:var(--task-background-color,var(--neutral-layer-floating));background-clip:padding-box;width:var(--mgt-flyout-set-width,350px);color:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task .task-content .task-details-container .picker .people-picker{--separator-margin:0px 10px 0px 10px}:host .task .task-content .task-details-container input,:host .task .task-content .task-details-container select{color:var(--task-detail-color,var(--neutral-foreground-hint));font-size:.9em;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .task .task-check-container{font-family:FabricMDL2Icons;border-radius:50%;color:#fff;cursor:pointer;display:flex;align-items:var(--task-icon-alignment,flex-start);margin:21px 10px 20px 20px;user-select:none}:host .task .task-check-container.complete .task-check{background-color:var(--task-icon-background-completed,#00ad56);border:var(--task-icon-border-completed,solid 1px #fff);color:var(--task-icon-color-completed,#fff)}:host .task .task-check-container.complete .task-content .task-details-container .task-title{text-decoration:line-through;color:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task .task-check-container .task-check{font-family:FabricMDL2Icons;font-size:12px;width:18px;height:18px;border-radius:var(--task-icon-border-radius,50%);border:var(--task-icon-border,solid 1px #797775);color:var(--task-color,var(--neutral-foreground-rest));display:flex;justify-content:center;align-items:center;background-color:var(--task-icon-background,transparent);user-select:none}:host .task .task-check-container .task-check.loading .task-check-content{animation:rotate-icon 2s infinite linear}:host .task .task-options{cursor:pointer;user-select:none;margin:16px 8px 0 0}:host .task.read-only .task-check-container{cursor:default}:host .task.complete{background:var(--task-complete-background,var(--neutral-layer-1));border:var(--task-complete-border,2px dotted inherit)}:host .task.complete .task-content .task-details-container .task-title{text-decoration:line-through;color:var(--task-detail-color,var(--neutral-foreground-hint))}:host .task.new-task{margin:var(--task-new-margin,var(--task-margin,0 0 24px 0));display:flex;flex-direction:row}:host .task.new-task .self-assign{display:none}:host .task.new-task .assign-to{border:0;background:0 0}:host .task.new-task .fake-check-box{width:15px;height:15px;cursor:pointer;margin:0 5px}:host .task.new-task .fake-check-box::after{font-family:FabricMDL2Icons;content:"uE739"}:host .task.new-task .fake-check-box~:checked{font-family:FabricMDL2Icons;content:"uE73A"}:host .task.new-task .task-content{flex:1 1 auto;align-content:center;vertical-align:middle;margin:0 0 0 12px}:host .task.new-task .task-content .task-details-container{display:flex;flex-direction:column;align-items:stretch;margin:0}:host .task.new-task .task-content .task-details-container .task-title{display:flex;height:32px;padding:2px}:host .task.new-task .task-content .task-details-container .task-title input{flex:1;margin:var(--task-new-input-margin,0 24px 0 16px);padding:var(--task-new-input-padding,6px);font-size:var(--task-new-input-font-size, 14px);font-weight:600;border:var(--task-new-border,none);border-bottom:1px solid #e1dfdd;outline:0;border-radius:0;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .task.new-task .task-content .task-details-container .task-title input:hover{border-bottom:1px solid #106ebe}:host .task.new-task .task-content .task-details-container .task-title input:active{border-bottom:1px solid #005a9e}:host .task.new-task .task-content .task-details-container .task-title input:focus{border-bottom:1px solid #0078d4}:host .task.new-task .task-content .task-details-container .task-details{display:flex;justify-content:stretch;align-items:center;flex-wrap:wrap;margin:14px 0 14px 4px}:host .task.new-task .task-content .task-details-container .task-details .new-task-group{margin:8px 16px}:host .task.new-task .task-content .task-details-container .task-details .new-task-bucket{margin:8px 16px}:host .task.new-task .task-content .task-details-container .task-details .new-task-due{margin:8px 16px}:host .task.new-task .task-content .task-details-container .task-details .new-task-assignee{margin:8px 16px;min-width:80px}:host .task.new-task .task-content .task-details-container .task-details .task-people label{display:flex;align-content:center;align-items:center}:host .task.new-task .task-content .task-details-container .task-details input,:host .task.new-task .task-content .task-details-container .task-details select{font-size:12px;font-weight:600;border:var(--task-new-select-border,none);border-bottom:1px solid #e1dfdd}:host .task.new-task .task-content .task-details-container .task-details input:hover,:host .task.new-task .task-content .task-details-container .task-details select:hover{border-bottom:1px solid #106ebe}:host .task.new-task .task-content .task-details-container .task-details input:active,:host .task.new-task .task-content .task-details-container .task-details select:active{border-bottom:1px solid #005a9e}:host .task.new-task .task-content .task-details-container .task-details input:focus,:host .task.new-task .task-content .task-details-container .task-details select:focus{border-bottom:1px solid #0078d4}:host .task.new-task .task-add-button-container{margin-right:28px}:host .task.new-task .task-add-button-container .task-add,:host .task.new-task .task-add-button-container .task-cancel{justify-content:center;align-items:center;cursor:pointer;flex:0 0 auto;display:flex;width:var(--tasks-new-button-width,100px);height:var(--tasks-new-button-height,32px);border-radius:4px;border:var(--tasks-new-button-border,solid 1px #e5e5e5);font-size:14px;line-height:20px}:host .task.new-task .task-add-button-container .task-add{color:#fff;background:var(--task-new-add-button-background,#0078d4);margin:22px 0 12px auto}:host .task.new-task .task-add-button-container .task-cancel{color:var(--task-new-cancel-button-color,var(--neutral-foreground-rest))}:host .task.new-task .task-add-button-container.disabled .task-add{color:var(--task-new-cancel-button-color,var(--neutral-foreground-rest));background:var(--task-new-add-button-disabled-background,#fff);cursor:default}@keyframes rotate-icon{from{transform:rotate(0)}to{transform:rotate(360deg)}}[dir=rtl] .arrow-options{--arrow-options-left:auto}[dir=rtl] .dot-options{--dot-options-translatex:translateX(60px)}[dir=rtl] .task-details{margin-right:14px!important}[dir=rtl] .task-icon{margin-left:8px}[dir=rtl] .task-detail svg{margin-left:4px}@media (forced-colors:active) and (prefers-color-scheme:dark){:host svg{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}:host svg path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host svg{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}:host svg path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}:host{border-radius:8px;width:100%}:host .task,:host.loading-task{margin-block:1px;box-shadow:var(--task-box-shadow,var(--elevation-shadow-card-active));width:100%;display:flex;background-color:var(--task-background-color,var(--neutral-layer-floating))}:host .task.new-task,:host.loading-task.new-task{margin:14px 0 1px;box-shadow:var(--task-box-shadow,var(--elevation-shadow-card-active))}:host .task.complete,:host.loading-task.complete{border:1px solid var(--task-border-completed,var(--neutral-stroke-input-active));background:var(--task-complete-background,var(--neutral-layer-1))}:host .task.complete .task-details .task-due,:host .task.complete .task-details .title,:host.loading-task.complete .task-details .task-due,:host.loading-task.complete .task-details .title{text-decoration:line-through}:host .task.read-only,:host.loading-task.read-only{opacity:1}:host .task:hover,:host.loading-task:hover{background-color:var(--task-background-color-hover,var(--neutral-fill-hover));border-radius:8px}:host .task .task-details,:host.loading-task .task-details{box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:2px;line-height:24px;border-radius:4px;width:100%}:host .task .task-details .task>div,:host.loading-task .task-details .task>div{display:flex;align-items:center;width:200px}:host .task .task-details .task-delete,:host.loading-task .task-details .task-delete{display:flex}:host .task .task-details .container,:host.loading-task .task-details .container{display:flex;width:100%}:host .task .task-details .task-due,:host.loading-task .task-details .task-due{min-width:120px;margin-inline-end:12px;height:32px;text-decoration:inherit;display:flex}:host fluent-text-field::part(end),:host fluent-text-field::part(start){margin-inline:unset}:host fluent-text-field::part(control){padding:0;cursor:pointer}:host fluent-text-field::part(root){background:0 0}:host fluent-text-field.new-task{width:100%;height:34px}:host fluent-text-field.new-task div.start .add-icon{display:flex;margin-inline:10px}:host fluent-text-field.new-task div:nth-child(2){display:flex;align-items:center}:host fluent-text-field.new-task div:nth-child(2) .calendar{display:flex;align-items:center}:host fluent-text-field.new-task div:nth-child(2) .calendar svg{fill:var(--task-color,var(--neutral-foreground-rest))}:host fluent-text-field.new-task div:nth-child(2) .calendar .date{margin-inline-start:10px;color:var(--task-color,var(--neutral-foreground-rest));width:auto;cursor:pointer}:host fluent-text-field.new-task div:nth-child(2) .calendar input{flex:1;border:none;border-bottom:1px solid var(--task-color,var(--neutral-foreground-rest));outline:0;border-radius:0}:host fluent-text-field.new-task div:nth-child(2) .calendar input:hover{border-bottom:1px solid var(--task-date-input-hover-color,var(--neutral-layer-1))}:host fluent-text-field.new-task div:nth-child(2) .calendar input:active,:host fluent-text-field.new-task div:nth-child(2) .calendar input:focus{border-bottom:1px solid var(--task-date-input-active-color,var(--accent-fill-rest))}:host fluent-text-field.title{flex-grow:1;display:inline}:host fluent-text-field.date{color:var(--task-detail-color,var(--neutral-foreground-hint))}:host fluent-text-field::after{border-bottom:none}:host fluent-text-field.dark::part(control){color-scheme:dark}:host fluent-button.task-add-icon.neutral,:host fluent-button.task-cancel-icon.neutral,:host fluent-button.task-delete.neutral{fill:var(--task-color,var(--neutral-foreground-rest))}:host fluent-button.task-add-icon.neutral::part(control),:host fluent-button.task-cancel-icon.neutral::part(control),:host fluent-button.task-delete.neutral::part(control){border:none;background:inherit}:host fluent-button.task-add-icon.neutral::part(control) svg,:host fluent-button.task-cancel-icon.neutral::part(control) svg,:host fluent-button.task-delete.neutral::part(control) svg{fill:var(--task-color,var(--neutral-foreground-rest))}:host fluent-checkbox.complete div>svg .filled{display:block}:host fluent-checkbox.complete div>svg .regular{display:none}:host fluent-checkbox.complete div>svg path{fill:var(--task-radio-background-color,var(--accent-fill-rest))}:host fluent-checkbox div>svg .filled{display:none}:host fluent-checkbox div>svg .regular{display:block}:host fluent-checkbox div>svg path{fill:var(--task-background-color,var(--neutral-layer-floating))}:host fluent-checkbox::part(control){margin-inline-start:10px;background:0 0;border-radius:50%}:host fluent-checkbox::part(label){margin-inline-end:unset;width:100%}
`],$o={cancelNewTaskSubtitle:"Cancel",newTaskPlaceholder:"Add a task",newTaskLabel:"New Task Input",editTaskLabel:"Edit Task Input",addTaskButtonSubtitle:"Add",deleteTaskOption:"Delete",editTaskOption:"Edit",dueDate:"Due date",newTaskDateInputLabel:"New Task Date Input",changeTaskDateInputLabel:"Change Task Date Input",newTaskNameInputLabel:"New Task Name Input",cancelAddingTask:"Cancel adding a new task"},So={comboboxPlaceholder:"Select an item"};class _o extends Ie{}class Io extends((0,It.rf)(_o)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ao extends Io{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=(0,be.NF)("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return"inline"===this.autocomplete||this.isAutocompleteBoth}get isAutocompleteList(){return"list"===this.autocomplete||this.isAutocompleteBoth}get isAutocompleteBoth(){return"both"===this.autocomplete}openChanged(){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),void Fe.dv.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}get options(){return fe.cP.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(e){this._options=e,fe.cP.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}get value(){return fe.cP.track(this,"value"),this._value}set value(e){var t,i,o;const s=`${this._value}`;if(this.$fastController.isConnected&&this.options){const s=this.options.findIndex((t=>t.text.toLowerCase()===e.toLowerCase())),n=null===(t=this.options[this.selectedIndex])||void 0===t?void 0:t.text,r=null===(i=this.options[s])||void 0===i?void 0:i.text;this.selectedIndex=n!==r?s:this.selectedIndex,e=(null===(o=this.firstSelectedOption)||void 0===o?void 0:o.text)||e}s!==e&&(this._value=e,super.valueChanged(s,e),fe.cP.notify(this,"value"))}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(!t||t.disabled)return;this.selectedOptions=[t],this.control.value=t.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){this.autocomplete&&"none"!==this.autocomplete||(this.filter="");const e=this.filter.toLowerCase();this.filteredOptions=this._options.filter((e=>e.text.toLowerCase().startsWith(this.filter.toLowerCase()))),this.isAutocompleteList&&(this.filteredOptions.length||e||(this.filteredOptions=this._options),this._options.forEach((e=>{e.hidden=!this.filteredOptions.includes(e)})))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame((()=>{var e;null===(e=this.firstSelectedOption)||void 0===e||e.scrollIntoView({block:"nearest"})})))}focusoutHandler(e){if(this.syncValue(),!this.open)return!0;const t=e.relatedTarget;this.isSameNode(t)?this.focus():this.options&&this.options.includes(t)||(this.open=!1)}inputHandler(e){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map((e=>e.text)).indexOf(this.control.value)),e.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(e){const t=e.key;if(e.ctrlKey||e.shiftKey)return!0;switch(t){case"Enter":this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break;case"Escape":if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break;case"Tab":if(this.setInputToSelection(),!this.open)return!0;e.preventDefault(),this.open=!1;break;case"ArrowUp":case"ArrowDown":if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(e),this.isAutocompleteInline&&this.setInlineSelection();break;default:return!0}}keyupHandler(e){switch(e.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions()}}selectedIndexChanged(e,t){if(this.$fastController.isConnected){if((t=(0,Pe.AB)(-1,this.options.length-1,t))!==this.selectedIndex)return void(this.selectedIndex=t);super.selectedIndexChanged(e,t)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const e=this.options.findIndex((e=>null!==e.getAttribute("selected")||e.selected));this.selectedIndex=e,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var e;const t=this.selectedIndex>-1?null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text:this.control.value;this.updateValue(this.value!==t)}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?Dt:Ft,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Dt?~~e.top:~~t}selectedOptionsChanged(e,t){this.$fastController.isConnected&&this._options.forEach((e=>{e.selected=t.includes(e)}))}slottedOptionsChanged(e,t){super.slottedOptionsChanged(e,t),this.updateValue()}updateValue(e){var t;this.$fastController.isConnected&&(this.value=(null===(t=this.firstSelectedOption)||void 0===t?void 0:t.text)||this.control.value,this.control.value=this.value),e&&this.$emit("change")}clearSelectionRange(){const e=this.control.value.length;this.control.setSelectionRange(e,e)}}(0,ge.Cg)([(0,ve.CF)({attribute:"autocomplete",mode:"fromView"})],Ao.prototype,"autocomplete",void 0),(0,ge.Cg)([fe.sH],Ao.prototype,"maxHeight",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"open",mode:"boolean"})],Ao.prototype,"open",void 0),(0,ge.Cg)([ve.CF],Ao.prototype,"placeholder",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"position"})],Ao.prototype,"positionAttribute",void 0),(0,ge.Cg)([fe.sH],Ao.prototype,"position",void 0);class To{}(0,ge.Cg)([fe.sH],To.prototype,"ariaAutoComplete",void 0),(0,ge.Cg)([fe.sH],To.prototype,"ariaControls",void 0),(0,Ce.X)(To,Ae),(0,Ce.X)(Ao,ke.qw,To);const Do=".control",Fo=":not([disabled]):not([open])";class Po extends Ao{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&Ee.pfK.setValueFor(this.listbox,Ee.Tkp)}}(0,_t.Cg)([(0,ve.CF)({mode:"fromView"})],Po.prototype,"appearance",void 0);const Lo=Po.compose({baseName:"combobox",baseClass:Ao,shadowOptions:{delegatesFocus:!0},template:(e,t)=>Te.q`
    <template
        aria-disabled="${e=>e.ariaDisabled}"
        autocomplete="${e=>e.autocomplete}"
        class="${e=>e.open?"open":""} ${e=>e.disabled?"disabled":""} ${e=>e.position}"
        ?open="${e=>e.open}"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
    >
        <div class="control" part="control">
            ${(0,ke.LT)(e,t)}
            <slot name="control">
                <input
                    aria-activedescendant="${e=>e.open?e.ariaActiveDescendant:null}"
                    aria-autocomplete="${e=>e.ariaAutoComplete}"
                    aria-controls="${e=>e.ariaControls}"
                    aria-disabled="${e=>e.ariaDisabled}"
                    aria-expanded="${e=>e.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${e=>e.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${e=>e.disabled}"
                    :value="${e=>e.value}"
                    @input="${(e,t)=>e.inputHandler(t.event)}"
                    @keyup="${(e,t)=>e.keyupHandler(t.event)}"
                    ${(0,Rt.K)("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${t.indicator||""}
                    </slot>
                </div>
            </slot>
            ${(0,ke.aO)(e,t)}
        </div>
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!e.open}"
            ${(0,Rt.K)("listbox")}
        >
            <slot
                ${(0,De.e)({filter:Ie.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Oe.A`
    ${Qt()}

    ${(0,jt.y$)(e,t,Do)}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${Mt.Z};
      user-select: none;
    }

    :host(:active) .selected-value {
      user-select: none;
    }

    .selected-value {
      -webkit-appearance: none;
      background: transparent;
      border: none;
      color: inherit;
      ${Bt.Ah}
      height: calc(100% - ${Ee.XAH} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors((0,qt.f)("outline",(0,jt.Tv)(e,t,Do,Fo)),(0,qt.f)("filled",(0,jt.dM)(e,t,Do,Fo)),(0,Ht.mr)((0,jt.lb)(e,t,Do,Fo))),indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '}),Oo=[$.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--max-height:var(--picker-max-height, 380px);font-family:var(--default-font-family)}:host .picker{background-color:var(--picker-background-color,transparent)}:host fluent-combobox::part(selected-value)::placeholder{color:var(--picker-text-color,var(--input-filled-placeholder-rest))}:host fluent-combobox::part(selected-value):hover::placeholder{color:var(--picker-text-color-hover,var(--secondary-text-hover-color))}[dir=rtl] .picker{direction:rtl}
`];var Ro=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},Eo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};const Mo=()=>{(0,U.E)(Lo,ei),ae(),(0,M.N)("picker",Ho)};class Ho extends _.N{get strings(){return So}static get styles(){return Oo}constructor(){super(),this.version="v1.0",this.maxPages=3,this.scopes=[],this.cacheEnabled=!1,this.cacheInvalidationPeriod=0,this.renderLoading=()=>this.response?this.renderContent():this.renderTemplate("loading",null),this.renderContent=()=>{var e;const t=this.error?this.error:null;return t&&this.hasTemplate("error")?this.renderTemplate("error",{error:t},"error"):this.hasTemplate("no-data")?this.renderTemplate("no-data",null):(null===(e=this.response)||void 0===e?void 0:e.length)>0?this.renderPicker():this.renderGet()},this.handleComboboxKeydown=e=>{let t,i;const o=e.key,s=e.target.querySelector(".selected");s&&(t=s.getAttribute("value")),"Enter"===o&&t&&(i=this.response.filter((e=>e.id===t)).pop(),this.fireCustomEvent("selectionChanged",i,!0,!1,!0))},this.placeholder=this.strings.comboboxPlaceholder,this.entityType=null,this.keyName=null}refresh(e=!1){e&&this.clearState(),this._task.run()}clearState(){this.response=null,this.error=null}renderPicker(){return I.Q`
      <fluent-combobox
        @keydown=${this.handleComboboxKeydown}
        current-value=${(0,de.J)(this.selectedValue)}
        part="picker"
        class="picker"
        id="combobox"
        autocomplete="list"
        placeholder=${this.placeholder}>
          ${this.response.map((e=>$.qy`
            <fluent-option value=${e.id} @click=${t=>this.handleClick(t,e)}> ${this.getNestedPropertyValue(e,this.keyName)} </fluent-option>`))}
      </fluent-combobox>
     `}getNestedPropertyValue(e,t){const i=t.split(".");let o=e;for(const e of i)if(o=o[e],void 0===o)return console.warn(`mgt-picker: Key '${e}' is undefined.`),"";return o}renderGet(){return I.Q`
      <mgt-get
        class="mgt-get"
        resource=${this.resource}
        version=${this.version}
        .scopes=${this.scopes}
        max-pages=${this.maxPages}
        ?cache-enabled=${this.cacheEnabled}
        ?cache-invalidation-period=${this.cacheInvalidationPeriod}>
      </mgt-get>`}firstUpdated(e){super.firstUpdated(e);const t=this.renderRoot;t?t.addEventListener("dataChange",(e=>this.handleDataChange(e))):console.error("🦒: mgt-picker component requires a renderRoot. Something has gone horribly wrong.")}handleDataChange(e){const t=e.detail.response.value,i=e.detail.error?e.detail.error:null;this.response=t,this.error=i}handleClick(e,t){this.fireCustomEvent("selectionChanged",t,!0,!1,!0)}}Ro([(0,S.MZ)({attribute:"resource",type:String}),Eo("design:type",String)],Ho.prototype,"resource",void 0),Ro([(0,S.MZ)({attribute:"version",type:String}),Eo("design:type",Object)],Ho.prototype,"version",void 0),Ro([(0,S.MZ)({attribute:"max-pages",type:Number}),Eo("design:type",Object)],Ho.prototype,"maxPages",void 0),Ro([(0,S.MZ)({attribute:"placeholder",type:String}),Eo("design:type",String)],Ho.prototype,"placeholder",void 0),Ro([(0,S.MZ)({attribute:"key-name",type:String}),Eo("design:type",String)],Ho.prototype,"keyName",void 0),Ro([(0,S.MZ)({attribute:"entity-type",type:String}),Eo("design:type",String)],Ho.prototype,"entityType",void 0),Ro([(0,S.MZ)({attribute:"scopes",converter:e=>e?e.toLowerCase().split(","):null}),Eo("design:type",Array)],Ho.prototype,"scopes",void 0),Ro([(0,S.MZ)({attribute:"cache-enabled",type:Boolean}),Eo("design:type",Object)],Ho.prototype,"cacheEnabled",void 0),Ro([(0,S.MZ)({attribute:"cache-invalidation-period",type:Number}),Eo("design:type",Object)],Ho.prototype,"cacheInvalidationPeriod",void 0),Ro([(0,S.MZ)({attribute:"selected-value",type:String}),Eo("design:type",String)],Ho.prototype,"selectedValue",void 0),Ro([(0,S.wk)(),Eo("design:type",Array)],Ho.prototype,"response",void 0);const Vo={cancelNewTaskSubtitle:"Cancel",newTaskPlaceholder:"Add a task",addTaskButtonSubtitle:"Add",removeTaskSubtitle:"Delete Task"};class zo{constructor(e){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,e)for(const t in e){const i=e[t];"date"===t?this.date=this.getDateObject(i):this[t]=i}}getDateObject(e){if("string"==typeof e){const t=e.split(/[/-]/);return t.length<3?new Date:new Date(parseInt(t[2],10),parseInt(t[0],10)-1,parseInt(t[1],10))}if("day"in e&&"month"in e&&"year"in e){const{day:t,month:i,year:o}=e;return new Date(o,i-1,t)}return e}getDate(e=this.date,t={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},i=this.locale){const o=this.getDateObject(e);if(!o.getTime())return"";const s=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},t);return new Intl.DateTimeFormat(i,s).format(o)}getDay(e=this.date.getDate(),t=this.dayFormat,i=this.locale){return this.getDate({month:1,day:e,year:2020},{day:t},i)}getMonth(e=this.date.getMonth()+1,t=this.monthFormat,i=this.locale){return this.getDate({month:e,day:2,year:2020},{month:t},i)}getYear(e=this.date.getFullYear(),t=this.yearFormat,i=this.locale){return this.getDate({month:2,day:2,year:e},{year:t},i)}getWeekday(e=0,t=this.weekdayFormat,i=this.locale){const o=`1-${e+1}-2017`;return this.getDate(o,{weekday:t},i)}getWeekdays(e=this.weekdayFormat,t=this.locale){return Array(7).fill(null).map(((i,o)=>this.getWeekday(o,e,t)))}}class No extends ye.g{constructor(){super(...arguments),this.dateFormatter=new zo,this.readonly=!1,this.locale="en-US",this.month=(new Date).getMonth()+1,this.year=(new Date).getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(e=this.month,t=this.year){const i=e=>new Date(e.getFullYear(),e.getMonth(),1).getDay(),o=e=>{const t=new Date(e.getFullYear(),e.getMonth()+1,1);return new Date(t.getTime()-this.oneDayInMs).getDate()},s=new Date(t,e-1),n=new Date(t,e),r=new Date(t,e-2);return{length:o(s),month:e,start:i(s),year:t,previous:{length:o(r),month:r.getMonth()+1,start:i(r),year:r.getFullYear()},next:{length:o(n),month:n.getMonth()+1,start:i(n),year:n.getFullYear()}}}getDays(e=this.getMonthInfo(),t=this.minWeeks){t=t>10?10:t;const{start:i,length:o,previous:s,next:n}=e,r=[];let a=1-i;for(;a<o+1||r.length<t||r[r.length-1].length%7!=0;){const{month:t,year:i}=a<1?s:a>o?n:e,l=a<1?s.length+a:a>o?a-o:a,d=`${t}-${l}-${i}`,c={day:l,month:t,year:i,disabled:this.dateInString(d,this.disabledDates),selected:this.dateInString(d,this.selectedDates)},h=r[r.length-1];0===r.length||h.length%7==0?r.push([c]):h.push(c),a++}return r}dateInString(e,t){const i=t.split(",").map((e=>e.trim()));return e="string"==typeof e?e:`${e.getMonth()+1}-${e.getDate()}-${e.getFullYear()}`,i.some((t=>t===e))}getDayClassNames(e,t){const{day:i,month:o,year:s,disabled:n,selected:r}=e;return["day",t===`${o}-${i}-${s}`&&"today",this.month!==o&&"inactive",n&&"disabled",r&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const e=this.dateFormatter.getWeekdays().map((e=>({text:e})));if("long"!==this.weekdayFormat){const t=this.dateFormatter.getWeekdays("long");e.forEach(((e,i)=>{e.abbr=t[i]}))}return e}handleDateSelect(e,t){e.preventDefault,this.$emit("dateselected",t)}handleKeydown(e,t){return e.key===me.Mm&&this.handleDateSelect(e,t),!0}}function qo(e,t,i){return{index:e,removed:t,addedCount:i}}(0,ge.Cg)([(0,ve.CF)({mode:"boolean"})],No.prototype,"readonly",void 0),(0,ge.Cg)([ve.CF],No.prototype,"locale",void 0),(0,ge.Cg)([(0,ve.CF)({converter:ve.R$})],No.prototype,"month",void 0),(0,ge.Cg)([(0,ve.CF)({converter:ve.R$})],No.prototype,"year",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"day-format",mode:"fromView"})],No.prototype,"dayFormat",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"weekday-format",mode:"fromView"})],No.prototype,"weekdayFormat",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"month-format",mode:"fromView"})],No.prototype,"monthFormat",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"year-format",mode:"fromView"})],No.prototype,"yearFormat",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"min-weeks",converter:ve.R$})],No.prototype,"minWeeks",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"disabled-dates"})],No.prototype,"disabledDates",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"selected-dates"})],No.prototype,"selectedDates",void 0);const Bo=0,Uo=1,jo=2,Zo=3;function Wo(e,t,i,o,s,n){let r=0,a=0;const l=Math.min(i-t,n-s);if(0===t&&0===s&&(r=function(e,t,i){for(let o=0;o<i;++o)if(e[o]!==t[o])return o;return i}(e,o,l)),i===e.length&&n===o.length&&(a=function(e,t,i){let o=e.length,s=t.length,n=0;for(;n<i&&e[--o]===t[--s];)n++;return n}(e,o,l-r)),s+=r,n-=a,(i-=a)-(t+=r)==0&&n-s==0)return wi.tR;if(t===i){const e=qo(t,[],0);for(;s<n;)e.removed.push(o[s++]);return[e]}if(s===n)return[qo(t,[],i-t)];const d=function(e){let t=e.length-1,i=e[0].length-1,o=e[t][i];const s=[];for(;t>0||i>0;){if(0===t){s.push(jo),i--;continue}if(0===i){s.push(Zo),t--;continue}const n=e[t-1][i-1],r=e[t-1][i],a=e[t][i-1];let l;l=r<a?r<n?r:n:a<n?a:n,l===n?(n===o?s.push(Bo):(s.push(Uo),o=n),t--,i--):l===r?(s.push(Zo),t--,o=r):(s.push(jo),i--,o=a)}return s.reverse(),s}(function(e,t,i,o,s,n){const r=n-s+1,a=i-t+1,l=new Array(r);let d,c;for(let e=0;e<r;++e)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;++e)l[0][e]=e;for(let i=1;i<r;++i)for(let n=1;n<a;++n)e[t+n-1]===o[s+i-1]?l[i][n]=l[i-1][n-1]:(d=l[i-1][n]+1,c=l[i][n-1]+1,l[i][n]=d<c?d:c);return l}(e,t,i,o,s,n)),c=[];let h,u=t,p=s;for(let e=0;e<d.length;++e)switch(d[e]){case Bo:void 0!==h&&(c.push(h),h=void 0),u++,p++;break;case Uo:void 0===h&&(h=qo(u,[],0)),h.addedCount++,u++,h.removed.push(o[p]),p++;break;case jo:void 0===h&&(h=qo(u,[],0)),h.addedCount++,u++;break;case Zo:void 0===h&&(h=qo(u,[],0)),h.removed.push(o[p]),p++}return void 0!==h&&c.push(h),c}const Go=Array.prototype.push;function Qo(e,t,i,o){const s=qo(t,i,o);let n=!1,r=0;for(let t=0;t<e.length;t++){const i=e[t];if(i.index+=r,n)continue;const o=(a=s.index,l=s.index+s.removed.length,d=i.index,c=i.index+i.addedCount,l<d||c<a?-1:l===d||c===a?0:a<d?l<c?l-d:c-d:c<l?c-a:l-a);if(o>=0){e.splice(t,1),t--,r-=i.addedCount-i.removed.length,s.addedCount+=i.addedCount-o;const a=s.removed.length+i.removed.length-o;if(s.addedCount||a){let e=i.removed;if(s.index<i.index){const t=s.removed.slice(0,i.index-s.index);Go.apply(t,e),e=t}if(s.index+s.removed.length>i.index+i.addedCount){const t=s.removed.slice(i.index+i.addedCount-s.index);Go.apply(e,t)}s.removed=e,i.index<s.index&&(s.index=i.index)}else n=!0}else if(s.index<i.index){n=!0,e.splice(t,0,s),t++;const o=s.addedCount-s.removed.length;i.index+=o,r+=o}}var a,l,d,c;n||e.push(s)}var Ko=i(1286);let Xo=!1;function Jo(e,t){let i=e.index;const o=t.length;return i>o?i=o-e.addedCount:i<0&&(i=o+e.removed.length+i-e.addedCount),i<0&&(i=0),e.index=i,e}class Yo extends Ko.l{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,Fe.dv.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,Fe.dv.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const i=void 0===t?function(e,t){let i=[];const o=function(e){const t=[];for(let i=0,o=e.length;i<o;i++){const o=e[i];Qo(t,o.index,o.removed,o.addedCount)}return t}(t);for(let t=0,s=o.length;t<s;++t){const s=o[t];1!==s.addedCount||1!==s.removed.length?i=i.concat(Wo(e,s.index,s.index+s.addedCount,s.removed,0,s.removed.length)):s.removed[0]!==e[s.index]&&i.push(s)}return i}(this.source,e):Wo(this.source,0,this.source.length,t,0,t.length);this.notify(i)}}var es=i(332);const ts=Object.freeze({positioning:!1,recycle:!0});function is(e,t,i,o){e.bind(t[i],o)}function os(e,t,i,o){const s=Object.create(o);s.index=i,s.length=t.length,e.bind(t[i],s)}class ss{constructor(e,t,i,o,s,n){this.location=e,this.itemsBinding=t,this.templateBinding=o,this.options=n,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=is,this.itemsBindingObserver=fe.cP.binding(t,this,i),this.templateBindingObserver=fe.cP.binding(o,this,s),n.positioning&&(this.bindView=os)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=wi.tR);const t=this.itemsObserver,i=this.itemsObserver=fe.cP.getNotifier(this.items),o=t!==i;o&&null!==t&&t.unsubscribe(this),(o||e)&&i.subscribe(this)}updateViews(e){const t=this.childContext,i=this.views,o=this.bindView,s=this.items,n=this.template,r=this.options.recycle,a=[];let l=0,d=0;for(let c=0,h=e.length;c<h;++c){const h=e[c],u=h.removed;let p=0,g=h.index;const f=g+h.addedCount,v=i.splice(h.index,u.length),m=d=a.length+v.length;for(;g<f;++g){const e=i[g],c=e?e.firstChild:this.location;let h;r&&d>0?(p<=m&&v.length>0?(h=v[p],p++):(h=a[l],l++),d--):h=n.create(),i.splice(g,0,h),o(h,s,g,t),h.insertBefore(c)}v[p]&&a.push(...v.slice(p))}for(let e=l,t=a.length;e<t;++e)a[e].dispose();if(this.options.positioning)for(let e=0,t=i.length;e<t;++e){const o=i[e].context;o.length=t,o.index=e}}refreshAllViews(e=!1){const t=this.items,i=this.childContext,o=this.template,s=this.location,n=this.bindView;let r=t.length,a=this.views,l=a.length;if(0!==r&&!e&&this.options.recycle||(es.N.disposeContiguousBatch(a),l=0),0===l){this.views=a=new Array(r);for(let e=0;e<r;++e){const r=o.create();n(r,t,e,i),a[e]=r,r.insertBefore(s)}}else{let e=0;for(;e<r;++e)if(e<l)n(a[e],t,e,i);else{const r=o.create();n(r,t,e,i),a.push(r),r.insertBefore(s)}const d=a.splice(e,l-e);for(e=0,r=d.length;e<r;++e)d[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,i=e.length;t<i;++t)e[t].unbind()}}class ns extends to.dg{constructor(e,t,i){super(),this.itemsBinding=e,this.templateBinding=t,this.options=i,this.createPlaceholder=Fe.dv.createBlockPlaceholder,function(){if(Xo)return;Xo=!0,fe.cP.setArrayObserverFactory((e=>new Yo(e)));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,i=e.push,o=e.reverse,s=e.shift,n=e.sort,r=e.splice,a=e.unshift;e.pop=function(){const e=this.length>0,i=t.apply(this,arguments),o=this.$fastController;return void 0!==o&&e&&o.addSplice(qo(this.length,[i],0)),i},e.push=function(){const e=i.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Jo(qo(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const i=o.apply(this,arguments);return void 0!==t&&t.reset(e),i},e.shift=function(){const e=this.length>0,t=s.apply(this,arguments),i=this.$fastController;return void 0!==i&&e&&i.addSplice(qo(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const i=n.apply(this,arguments);return void 0!==t&&t.reset(e),i},e.splice=function(){const e=r.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Jo(qo(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=a.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Jo(qo(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=fe.cP.isVolatileBinding(e),this.isTemplateBindingVolatile=fe.cP.isVolatileBinding(t)}createBehavior(e){return new ss(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function rs(e,t,i=ts){return new ns(e,"function"==typeof t?t:()=>t,Object.assign(Object.assign({},ts),i))}const as="sticky",ls="default",ds="columnheader",cs="default",hs=Te.q`
    <template>
        ${e=>null===e.rowData||null===e.columnDefinition||null===e.columnDefinition.columnDataKey?null:e.rowData[e.columnDefinition.columnDataKey]}
    </template>
`,us=Te.q`
    <template>
        ${e=>null===e.columnDefinition?null:void 0===e.columnDefinition.title?e.columnDefinition.columnDataKey:e.columnDefinition.title}
    </template>
`;class ps extends ye.g{constructor(){super(...arguments),this.cellType=ls,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(fi,this.handleFocusin),this.addEventListener(vi,this.handleFocusout),this.addEventListener(mi,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(e=this.columnDefinition)||void 0===e?void 0:e.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(fi,this.handleFocusin),this.removeEventListener(vi,this.handleFocusout),this.removeEventListener(mi,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){if(this.isActiveCell=!0,this.cellType===ds){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const e=this.columnDefinition.headerCellFocusTargetCallback(this);null!==e&&e.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const e=this.columnDefinition.cellFocusTargetCallback(this);null!==e&&e.focus()}this.$emit("cell-focused",this)}}handleFocusout(e){this===document.activeElement||this.contains(document.activeElement)||(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||null===this.columnDefinition||this.cellType===ls&&!0!==this.columnDefinition.cellInternalFocusQueue||this.cellType===ds&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(e.key){case me.Mm:case me.Ac:if(this.contains(document.activeElement)&&document.activeElement!==this)return;if(this.cellType===ds){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const t=this.columnDefinition.headerCellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const t=this.columnDefinition.cellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}break;case me.F9:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case ds:void 0!==this.columnDefinition.headerCellTemplate?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=us.render(this,this);break;case void 0:case"rowheader":case ls:void 0!==this.columnDefinition.cellTemplate?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=hs.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}(0,ge.Cg)([(0,ve.CF)({attribute:"cell-type"})],ps.prototype,"cellType",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"grid-column"})],ps.prototype,"gridColumn",void 0),(0,ge.Cg)([fe.sH],ps.prototype,"rowData",void 0),(0,ge.Cg)([fe.sH],ps.prototype,"columnDefinition",void 0);class gs extends ye.g{constructor(){super(...arguments),this.rowType=cs,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new ns((e=>e.columnDefinitions),(e=>e.activeCellItemTemplate),{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(vi,this.handleFocusout),this.addEventListener(mi,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(vi,this.handleFocusout),this.removeEventListener(mi,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case me.kT:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case me.bb:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case me.Tg:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case me.FM:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===cs&&void 0!==this.cellItemTemplate?this.cellItemTemplate:this.rowType===cs&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}(0,ge.Cg)([(0,ve.CF)({attribute:"grid-template-columns"})],gs.prototype,"gridTemplateColumns",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"row-type"})],gs.prototype,"rowType",void 0),(0,ge.Cg)([fe.sH],gs.prototype,"rowData",void 0),(0,ge.Cg)([fe.sH],gs.prototype,"columnDefinitions",void 0),(0,ge.Cg)([fe.sH],gs.prototype,"cellItemTemplate",void 0),(0,ge.Cg)([fe.sH],gs.prototype,"headerCellItemTemplate",void 0),(0,ge.Cg)([fe.sH],gs.prototype,"rowIndex",void 0),(0,ge.Cg)([fe.sH],gs.prototype,"isActiveRow",void 0),(0,ge.Cg)([fe.sH],gs.prototype,"activeCellItemTemplate",void 0),(0,ge.Cg)([fe.sH],gs.prototype,"defaultCellItemTemplate",void 0),(0,ge.Cg)([fe.sH],gs.prototype,"defaultHeaderCellItemTemplate",void 0),(0,ge.Cg)([fe.sH],gs.prototype,"cellElements",void 0);class fs extends ye.g{constructor(){super(),this.noTabbing=!1,this.generateHeader="default",this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,i)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const o=Math.max(0,Math.min(this.rowElements.length-1,e)),s=this.rowElements[o].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),n=s[Math.max(0,Math.min(s.length-1,t))];i&&this.scrollHeight!==this.clientHeight&&(o<this.focusRowIndex&&this.scrollTop>0||o>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&n.scrollIntoView({block:"center",inline:"center"}),n.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach((e=>{e.addedNodes.forEach((e=>{1===e.nodeType&&"row"===e.getAttribute("role")&&(e.columnDefinitions=this.columnDefinitions)}))})),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,Fe.dv.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(void 0===e){if(""===this.generatedGridTemplateColumns&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach(((t,i)=>{const o=t;o.rowIndex=i,o.gridTemplateColumns=e,this.columnDefinitionsStale&&(o.columnDefinitions=this.columnDefinitions)})),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach((e=>{t=`${t}${""===t?"":" "}1fr`})),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=fs.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=fs.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new ns((e=>e.rowsData),(e=>e.rowItemTemplate),{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(gi,this.handleFocus),this.addEventListener(mi,this.handleKeydown),this.addEventListener(vi,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),Fe.dv.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(gi,this.handleFocus),this.removeEventListener(mi,this.handleKeydown),this.removeEventListener(vi,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){null!==e.relatedTarget&&this.contains(e.relatedTarget)||this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const i=this.rowElements.length-1,o=this.offsetHeight+this.scrollTop,s=this.rowElements[i];switch(e.key){case me.I5:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case me.HX:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case me.oK:if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(t=this.focusRowIndex-1;t>=0;t--){const e=this.rowElements[t];if(e.offsetTop<this.scrollTop){this.scrollTop=e.offsetTop+e.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case me.f_:if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=i||s.offsetTop+s.offsetHeight<=o)return void this.focusOnCell(i,this.focusColumnIndex,!1);for(t=this.focusRowIndex+1;t<=i;t++){const e=this.rowElements[t];if(e.offsetTop+e.offsetHeight>o){let t=0;this.generateHeader===as&&null!==this.generatedHeader&&(t=this.generatedHeader.clientHeight),this.scrollTop=e.offsetTop-t;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case me.Tg:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case me.FM:e.ctrlKey&&null!==this.columnDefinitions&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,Fe.dv.queueUpdate((()=>this.updateFocus())))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),"none"!==this.generateHeader&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);return this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===as?"sticky-header":"header",void(null===this.firstChild&&null===this.rowsPlaceholder||this.insertBefore(e,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}fs.generateColumns=e=>Object.getOwnPropertyNames(e).map(((e,t)=>({columnDataKey:e,gridColumn:`${t}`}))),(0,ge.Cg)([(0,ve.CF)({attribute:"no-tabbing",mode:"boolean"})],fs.prototype,"noTabbing",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"generate-header"})],fs.prototype,"generateHeader",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"grid-template-columns"})],fs.prototype,"gridTemplateColumns",void 0),(0,ge.Cg)([fe.sH],fs.prototype,"rowsData",void 0),(0,ge.Cg)([fe.sH],fs.prototype,"columnDefinitions",void 0),(0,ge.Cg)([fe.sH],fs.prototype,"rowItemTemplate",void 0),(0,ge.Cg)([fe.sH],fs.prototype,"cellItemTemplate",void 0),(0,ge.Cg)([fe.sH],fs.prototype,"headerCellItemTemplate",void 0),(0,ge.Cg)([fe.sH],fs.prototype,"focusRowIndex",void 0),(0,ge.Cg)([fe.sH],fs.prototype,"focusColumnIndex",void 0),(0,ge.Cg)([fe.sH],fs.prototype,"defaultRowItemTemplate",void 0),(0,ge.Cg)([fe.sH],fs.prototype,"rowElementTag",void 0),(0,ge.Cg)([fe.sH],fs.prototype,"rowElements",void 0);const vs=Te.q`
    <div
        class="title"
        part="title"
        aria-label="${e=>e.dateFormatter.getDate(`${e.month}-2-${e.year}`,{month:"long",year:"numeric"})}"
    >
        <span part="month">
            ${e=>e.dateFormatter.getMonth(e.month)}
        </span>
        <span part="year">${e=>e.dateFormatter.getYear(e.year)}</span>
    </div>
`,ms=(e,t)=>{const i=e.tagFor(fs),o=e.tagFor(gs);return Te.q`
    <${i} class="days interact" part="days" generate-header="none">
        <${o}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${rs((e=>e.getWeekdayText()),(e=>{const t=e.tagFor(ps);return Te.q`
        <${t}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(e,t)=>t.index+1}"
            abbr="${e=>e.abbr}"
        >
            ${e=>e.text}
        </${t}>
    `})(e),{positioning:!0})}
        </${o}>
        ${rs((e=>e.getDays()),((e,t)=>{const i=e.tagFor(gs);return Te.q`
        <${i}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${rs((e=>e),((e,t)=>{const i=e.tagFor(ps);return Te.q`
        <${i}
            class="${(e,i)=>i.parentContext.parent.getDayClassNames(e,t)}"
            part="day"
            tabindex="-1"
            role="gridcell"
            grid-column="${(e,t)=>t.index+1}"
            @click="${(e,t)=>t.parentContext.parent.handleDateSelect(t.event,e)}"
            @keydown="${(e,t)=>t.parentContext.parent.handleKeydown(t.event,e)}"
            aria-label="${(e,t)=>t.parentContext.parent.dateFormatter.getDate(`${e.month}-${e.day}-${e.year}`,{month:"long",day:"numeric"})}"
        >
            <div
                class="date"
                part="${e=>t===`${e.month}-${e.day}-${e.year}`?"today":"date"}"
            >
                ${(e,t)=>t.parentContext.parent.dateFormatter.getDay(e.day)}
            </div>
            <slot name="${e=>e.month}-${e=>e.day}-${e=>e.year}"></slot>
        </${i}>
    `})(e,t),{positioning:!0})}
        </${i}>
    `})(e,t))}
    </${i}>
`},bs=Oe.A`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,ys=Oe.A`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`;class ws extends No{constructor(){super(...arguments),this.readonly=!0}}(0,_t.Cg)([(0,ve.CF)({converter:ve.Bs})],ws.prototype,"readonly",void 0);const xs=ws.compose({baseName:"calendar",template:(e,t)=>{var i;const o=new Date,s=`${o.getMonth()+1}-${o.getDate()}-${o.getFullYear()}`;return Te.q`
        <template>
            ${ke.pS}
            ${t.title instanceof Function?t.title(e,t):null!==(i=t.title)&&void 0!==i?i:""}
            <slot></slot>
            ${(0,Ot.z)((e=>e.readonly),(e=>Te.q`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${rs((e=>e.getWeekdayText()),Te.q`
                        <div class="week-day" part="week-day" abbr="${e=>e.abbr}">
                            ${e=>e.text}
                        </div>
                    `)}
            </div>
            ${rs((e=>e.getDays()),Te.q`
                    <div class="week">
                        ${rs((e=>e),Te.q`
                                <div
                                    class="${(t,i)=>i.parentContext.parent.getDayClassNames(t,e)}"
                                    part="day"
                                    aria-label="${(e,t)=>t.parentContext.parent.dateFormatter.getDate(`${e.month}-${e.day}-${e.year}`,{month:"long",day:"numeric"})}"
                                >
                                    <div
                                        class="date"
                                        part="${t=>e===`${t.month}-${t.day}-${t.year}`?"today":"date"}"
                                    >
                                        ${(e,t)=>t.parentContext.parent.dateFormatter.getDay(e.day)}
                                    </div>
                                    <slot
                                        name="${e=>e.month}-${e=>e.day}-${e=>e.year}"
                                    ></slot>
                                </div>
                            `)}
                    </div>
                `)}
        </div>
    `)(s),ms(e,s))}
            ${ke.Sm}
        </template>
    `},styles:(e,t)=>Oe.A`
${(0,Re.V)("inline-block")} :host {
  --calendar-cell-size: calc((${Ee.Sss} + 2 + ${Ee.Brd}) * ${Ee.vR1} * 1px);
  --calendar-gap: 2px;
  ${Bt.Ah}
  color: ${Ee.lHw};
}

.title {
  padding: calc(${Ee.vR1} * 2px);
  font-weight: 600;
}

.days {
  text-align: center;
}

.week-days,
.week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: var(--calendar-gap);
  border: 0;
  padding: 0;
}

.day,
.week-day {
  border: 0;
  width: var(--calendar-cell-size);
  height: var(--calendar-cell-size);
  line-height: var(--calendar-cell-size);
  padding: 0;
  box-sizing: initial;
}

.week-day {
  font-weight: 600;
}

.day {
  border: calc(${Ee.XAH} * 1px) solid transparent;
  border-radius: calc(${Ee.PbG} * 1px);
}

.interact .day {
  cursor: pointer;
}

.date {
  height: 100%;
}

.inactive .date,
.inactive.disabled::before {
  color: ${Ee.cRz};
}

.disabled::before {
  content: '';
  display: inline-block;
  width: calc(var(--calendar-cell-size) * .8);
  height: calc(${Ee.XAH} * 1px);
  background: currentColor;
  position: absolute;
  margin-top: calc(var(--calendar-cell-size) / 2);
  transform-origin: center;
  z-index: 1;
}

.selected {
  color: ${Ee.IRh};
  border: 1px solid ${Ee.IRh};
  background: ${Ee.pfK};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${Ee.XAH} + ${Ee.PbG}) * 1px);
  margin-inline-start: calc((${Ee.PbG} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${Ee.l_5};
}

.today .date {
  color: ${Ee.l_5};
  background: ${Ee.IRh};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors((0,Ht.mr)(Oe.A`
          .day.selected {
              color: ${Vt.A.Highlight};
          }

          .today .date {
              background: ${Vt.A.Highlight};
              color: ${Vt.A.HighlightText};
          }
      `),new Jt(bs,ys)),title:vs});var ks=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},Cs=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class $s extends _.N{get strings(){return Vo}constructor(){super(),this.renderLoading=()=>this.renderLoadingTask(),this.renderContent=()=>{const e=o.b.globalProvider;if(!e||e.state!==s.HJ.SignedIn)return $.qy``;const t=this.renderPicker(),i=this.renderNewTask(),n=this.renderTasks();return $.qy`
      ${t}
      ${i}
      <div class="tasks" dir=${this.direction}>
        ${n}
      </div>
    `},this.handleTaskClick=e=>{this.fireCustomEvent("taskClick",{task:e})},this.onResize=()=>{this.mediaQuery!==this._previousMediaQuery&&(this._previousMediaQuery=this.mediaQuery,this.requestUpdate())},(0,U.E)(st.oR,ze.zi,xs),this.clearState(),this._previousMediaQuery=this.mediaQuery}args(){return[this.providerState,this.targetId,this.initialId]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onResize)}disconnectedCallback(){window.removeEventListener("resize",this.onResize),super.disconnectedCallback()}renderLoadingTask(){return $.qy`
      <div class="task loading-task">
        <div class="task-details">
          <div class="title"></div>
          <div class="task-due"></div>
          <div class="task-delete"></div>
        </div>
      </div>
    `}clearState(){this.requestUpdate()}dateToInputValue(e){return e?new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().split("T")[0]:null}}ks([(0,S.MZ)({attribute:"read-only",type:Boolean}),Cs("design:type",Boolean)],$s.prototype,"readOnly",void 0),ks([(0,S.MZ)({attribute:"hide-header",type:Boolean}),Cs("design:type",Boolean)],$s.prototype,"hideHeader",void 0),ks([(0,S.MZ)({attribute:"hide-options",type:Boolean}),Cs("design:type",Boolean)],$s.prototype,"hideOptions",void 0),ks([(0,S.MZ)({attribute:"target-id",type:String}),Cs("design:type",String)],$s.prototype,"targetId",void 0),ks([(0,S.MZ)({attribute:"initial-id",type:String}),Cs("design:type",String)],$s.prototype,"initialId",void 0);var Ss=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},_s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},Is=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};class As extends $s{static get styles(){return Co}get strings(){return $o}static get requiredScopes(){return["tasks.read","tasks.readwrite"]}constructor(){super(),this._isChangedDueDate=!1,this._isDarkMode=!1,this.onThemeChanged=()=>{this._isDarkMode=St(this)},this.renderNewTask=()=>{const e=this._newTaskName?$.qy`
        <fluent-checkbox
          class="task-add-icon"
          @click="${this.addTask}">
        </fluent-checkbox>
      `:$.qy`
        <span class="add-icon">${(0,P.r)(P.A.Add)}</span>
      `,t=$.qy`
      <fluent-button
        aria-label=${this.strings.cancelAddingTask}
        class="task-cancel-icon" 
        @click="${this.clearNewTaskData}"
      >
        ${(0,P.r)(P.A.Cancel)}
      </fluent-button>
    `,i={dark:this._isDarkMode,date:!0},o=$.qy`
      <fluent-text-field
        autocomplete="off"
        type="date"
        id="new-taskDate-input"
        class="${(0,Z.H)(i)}"
        aria-label="${this.strings.newTaskDateInputLabel}"
        .value="${this.dateToInputValue(this._newTaskDueDate)}"
        @change="${this.handleDateChange}"
      >
      </fluent-text-field>
    `,s=this.readOnly?$.s6:$.qy`
      <fluent-text-field
        autocomplete="off"
        appearance="outline"
        class="new-task"
        id="new-task-name-input"
        aria-label="${this.strings.newTaskLabel}"
        .value=${this._newTaskName}
        placeholder="${this.strings.newTaskPlaceholder}"
        @keydown="${this.handleKeyDown}"
        @input="${this.handleInput}"
      >
        <div slot="start" class="start">${e}</div>
        ${this._newTaskName?$.qy`
              <div slot="end" class="end">
                <span class="calendar">${o}</span>
                ${t}
              </div> `:$.qy``}
      </fluent-text-field>
    `;return $.qy`
      ${this.currentList?$.qy`
            <div dir=${this.direction} class="task new-task incomplete">
              ${s}
            </div>
        `:$.qy``}  
     `},this.handleSelectionChanged=e=>{this.currentList=e.detail,this.loadTasks(this.currentList)},this.renderTaskDetails=e=>{const t={task:e,list:this.currentList};if(this.hasTemplate("task"))return this.renderTemplate("task",t,e.id);let i=null;const o=$.qy`
      <fluent-button class="task-delete"
        @click="${()=>this.removeTask(e.id)}"
        aria-label="${this.strings.deleteTaskOption}">
        ${(0,P.r)(P.A.Delete)}
      </fluent-button>`;if(this.hasTemplate("task-details"))i=this.renderTemplate("task-details",t,`task-details-${e.id}`);else{const t={dark:this._isDarkMode,date:!0,"task-due":!0},s=$.qy`
        <fluent-text-field
          autocomplete="off"
          type="date"
          id="${e.id}-taskDate-input"
          class="${(0,Z.H)(t)}"
          aria-label="${this.strings.changeTaskDateInputLabel}"
          .value="${e.dueDateTime?this.dateToInputValue(new Date(e.dueDateTime.dateTime)):this._taskBeingUpdated===e?this.dateToInputValue(this._newTaskDueDate):$.s6}"
          @change="${this.handleDateUpdate}"
          @focus="${t=>this.updatingTask(t,e)}"
          @blur="${this.handleBlur}"
        >
        </fluent-text-field>
      `,n=$.qy`
          <fluent-text-field 
            autocomplete="off"
            appearance="outline"
            class="title"
            id=${e.id}
            .value="${e.title?e.title:this._taskBeingUpdated===e?this._changedTaskName:""}"
            aria-label="${this.strings.editTaskLabel}"
            @keydown="${t=>this.handleChange(t,e)}"
            @input="${t=>this.handleChange(t,e)}"
            @focus="${t=>this.updatingTask(t,e)}"
          >
          </fluent-text-field>
          ${e.dueDateTime||this._taskBeingUpdated===e?$.qy`${s}`:$.s6}
          ${o}
      `;i=$.qy`
      <div class="task-details">
        ${n}
      </div>
      `}return $.qy`${i}`},this.renderTask=e=>{const t="completed"===e.status,i=(0,Z.H)({complete:t,"read-only":this.readOnly,task:!0}),o=(0,Z.H)({complete:t}),s=$.qy`${(0,P.r)(P.A.CheckMark)}`;return $.qy`
      <div class=${i} @blur="${this.handleBlur}">
        <fluent-checkbox 
          id=${e.id} 
          class=${o}
          ?checked=${t}
          @click="${()=>this.handleTaskCheckClick(e)}"
          @keydown="${t=>this.handleTaskCheckKeydown(t,e)}"
        >
          <div slot="checked-indicator">
            ${s}
          </div>
        </fluent-checkbox>
        ${this.renderTaskDetails(e)}
      </div>
    `},this.loadState=()=>Is(this,void 0,void 0,(function*(){const e=o.b.globalProvider;if(e&&e.state===s.HJ.SignedIn){if(!this._graph){const t=e.graph.forComponent(this);this._graph=t}if(!this.currentList&&!this.initialId){const e=yield(t=this._graph,mo(void 0,void 0,void 0,(function*(){const e=yield t.api("/me/todo/lists").header("Cache-Control","no-store").middlewareOptions((0,a.F)(yo)).get();return null==e?void 0:e.value}))),i=null==e?void 0:e.find((e=>"defaultList"===e.wellknownListName));i&&(yield this.loadTasks(i))}var t;this.targetId?(this.currentList=yield xo(this._graph,this.targetId),this._tasks=yield wo(this._graph,this.targetId)):this.initialId&&(this.currentList=yield xo(this._graph,this.initialId),this._tasks=yield wo(this._graph,this.initialId))}})),this.addTask=()=>Is(this,void 0,void 0,(function*(){if(!this._isNewTaskBeingAdded&&this._newTaskName){this._isNewTaskBeingAdded=!0;try{yield this.createNewTask()}finally{this.clearNewTaskData(),this._isNewTaskBeingAdded=!1}}})),this.updateTask=e=>Is(this,void 0,void 0,(function*(){try{if(!this._changedTaskName&&!this._isChangedDueDate)return;yield this.updateTaskItem(e)}finally{this.clearNewTaskData()}})),this.clearNewTaskData=()=>{this._newTaskDueDate=null,this._newTaskName="",this._changedTaskName="",this._isChangedDueDate=!1,this.focusOnTaskInput()},this.focusOnTaskInput=()=>{const e=this.renderRoot.querySelector("#new-task-name-input"),t=null==e?void 0:e.shadowRoot.querySelector("input");t&&t.focus()},this.clearState=()=>{super.clearState(),this.currentList=null,this._tasks=[],this._taskBeingUpdated=null},this.loadTasks=e=>Is(this,void 0,void 0,(function*(){this.currentList=e,this._tasks=yield wo(this._graph,e.id)})),this.updateTaskStatus=(e,t)=>Is(this,void 0,void 0,(function*(){e.status=t;const i=this.currentList.id;e=yield ko(this._graph,i,e.id,e);const o=this._tasks.findIndex((t=>t.id===e.id));this._tasks[o]=e,yield this._task.run()})),this.removeTask=e=>Is(this,void 0,void 0,(function*(){this._tasks=this._tasks.filter((t=>t.id!==e)),this.requestUpdate();const t=this.currentList.id;yield((e,t,i)=>mo(void 0,void 0,void 0,(function*(){yield e.api(`/me/todo/lists/${t}/tasks/${i}`).header("Cache-Control","no-store").middlewareOptions((0,a.F)(bo)).delete()})))(this._graph,t,e),this._tasks=this._tasks.filter((t=>t.id!==e))})),this.handleInput=e=>{"new-task-name-input"===e.target.id&&(this._newTaskName=e.target.value)},this.handleChange=(e,t)=>Is(this,void 0,void 0,(function*(){var i;e.target.id===t.id&&("Enter"===e.key&&(yield this.updateTask(t),null===(i=e.target)||void 0===i||i.blur()),this._changedTaskName=e.target.value)})),this.handleKeyDown=e=>Is(this,void 0,void 0,(function*(){"Enter"===e.key&&"new-task-name-input"===e.target.id&&(yield this.addTask())})),this.updatingTask=(e,t)=>{e.target.id===t.id&&(this._taskBeingUpdated=t),e.target.id===`${t.id}-taskDate-input`&&(this._updatingTaskDate=!0,this._taskBeingUpdated=t)},this.handleBlur=()=>{const e=this._taskBeingUpdated,t=this.renderRoot.querySelectorAll("fluent-text-field");for(const i of t)!e||i.id!==e.id&&i.id!==`${e.id}-taskDate-input`||(this.updateTask(e),null==i||i.blur(),this._taskBeingUpdated=null,this._updatingTaskDate=!1)},this.handleDateChange=e=>{const t=e.target.value;this._newTaskDueDate=t?new Date(t+"T17:00"):null},this.handleDateUpdate=e=>{const t=this._taskBeingUpdated;if(t){const i=e.target.value;this._newTaskDueDate=i?new Date(i+"T17:00"):null,t.dueDateTime&&this._newTaskDueDate?this._isChangedDueDate=new Date(t.dueDateTime.dateTime)!==this._newTaskDueDate:t.dueDateTime||this._newTaskDueDate?this._isChangedDueDate=!0:this._isChangedDueDate=!1}},this._graph=null,this._newTaskDueDate=null,this._tasks=[],this.addEventListener("selectionChanged",this.handleSelectionChanged),this.addEventListener("blur",this.handleBlur)}connectedCallback(){super.connectedCallback(),window.addEventListener("darkmodechanged",this.onThemeChanged),this.onThemeChanged()}disconnectedCallback(){window.removeEventListener("darkmodechanged",this.onThemeChanged),super.disconnectedCallback()}renderTasks(){let e=this._tasks;e&&this.taskFilter&&(e=e.filter((e=>this.taskFilter(e))));const t=e.filter((e=>"completed"===e.status)),i=(0,L.u)(e.filter((e=>"completed"!==e.status)),(e=>e.id),(e=>this.renderTask(e))),o=(0,L.u)(t.sort(((e,t)=>e.lastModifiedDateTime<t.lastModifiedDateTime?-1:1)).filter((e=>"completed"===e.status)),(e=>e.id),(e=>this.renderTask(e)));return $.qy`
      ${i}
      ${o}
    `}renderPicker(){var e,t;return this.targetId?$.qy`<p>${null===(e=this.currentList)||void 0===e?void 0:e.displayName}</p>`:I.Q`
        <mgt-picker
          resource="me/todo/lists"
          scopes="tasks.read, tasks.readwrite"
          key-name="displayName"
          selected-value="${(0,de.J)(null===(t=this.currentList)||void 0===t?void 0:t.displayName)}"
          placeholder="Select a task list">
        </mgt-picker>`}createNewTask(){return Is(this,void 0,void 0,(function*(){const e=this.currentList.id,t={title:this._newTaskName};this._newTaskDueDate&&(t.dueDateTime={dateTime:new Date(this._newTaskDueDate).toLocaleDateString(),timeZone:"UTC"});const i=yield((e,t,i)=>mo(void 0,void 0,void 0,(function*(){return yield e.api(`/me/todo/lists/${t}/tasks`).header("Cache-Control","no-store").middlewareOptions((0,a.F)(bo)).post(i)})))(this._graph,e,t);this._tasks.unshift(i)}))}updateTaskItem(e){return Is(this,void 0,void 0,(function*(){const t=this.currentList.id;let i={};if(this._changedTaskName&&this._changedTaskName!==e.title&&(i={title:this._changedTaskName}),this._updatingTaskDate){if(!this._isChangedDueDate)return;this._newTaskDueDate?i.dueDateTime={dateTime:new Date(this._newTaskDueDate).toLocaleDateString(),timeZone:"UTC"}:(this._isChangedDueDate&&this._newTaskDueDate,i.dueDateTime=null)}if(!Object.keys(i).length)return;const o=yield ko(this._graph,t,e.id,i),s=this._tasks.findIndex((e=>e.id===o.id));this._tasks[s]=o}))}handleTaskCheckClick(e){this.handleTaskClick(e),this.readOnly||("completed"===e.status?this.updateTaskStatus(e,"notStarted"):this.updateTaskStatus(e,"completed"))}handleTaskCheckKeydown(e,t){"Enter"!==e.key||this.readOnly||(this.handleTaskClick(t),"completed"===t.status?this.updateTaskStatus(t,"notStarted"):this.updateTaskStatus(t,"completed"))}}Ss([(0,S.wk)(),_s("design:type",Array)],As.prototype,"_tasks",void 0),Ss([(0,S.wk)(),_s("design:type",Object)],As.prototype,"_taskBeingUpdated",void 0),Ss([(0,S.wk)(),_s("design:type",Boolean)],As.prototype,"_updatingTaskDate",void 0),Ss([(0,S.wk)(),_s("design:type",Object)],As.prototype,"_isChangedDueDate",void 0),Ss([(0,S.wk)(),_s("design:type",Date)],As.prototype,"_newTaskDueDate",void 0),Ss([(0,S.wk)(),_s("design:type",String)],As.prototype,"_newTaskName",void 0),Ss([(0,S.wk)(),_s("design:type",String)],As.prototype,"_changedTaskName",void 0),Ss([(0,S.wk)(),_s("design:type",Boolean)],As.prototype,"_isNewTaskBeingAdded",void 0),Ss([(0,S.wk)(),_s("design:type",Object)],As.prototype,"_graph",void 0),Ss([(0,S.wk)(),_s("design:type",Object)],As.prototype,"currentList",void 0),Ss([(0,S.wk)(),_s("design:type",Object)],As.prototype,"_isDarkMode",void 0);var Ts=i(8263),Ds=i(2886);const Fs={termsetIdRequired:"The termsetId property or termset-id attribute is required",noTermsFound:"No terms found",comboboxPlaceholder:"Select a term",loadingMessage:"Loading..."},Ps=[$.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--max-height:var(--taxonomy-picker-list-max-height, 380px)}:host .picker{background-color:var(--taxonomy-picker-background-color,transparent)}:host fluent-combobox::part(selected-value)::placeholder{color:var(--taxonomy-picker-placeholder-color,var(--input-filled-placeholder-rest))}:host fluent-combobox::part(selected-value):hover::placeholder{color:var(--taxonomy-picker-placeholder-color-hover,var(--secondary-text-hover-color))}[dir=rtl] .picker{direction:rtl}
`];var Ls=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},Os=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class Rs extends _.N{get strings(){return Fs}static get styles(){return Ps}constructor(){super(),this.version="beta",this.position="below",this.selectedTerm=null,this.cacheEnabled=!1,this.cacheInvalidationPeriod=0,this.renderLoading=()=>this.terms?this.renderContent():this.renderTemplate("loading",null,"loading")||I.Q`
        <div class="message-parent">
          <mgt-spinner></mgt-spinner>
          <div label="loading-text" aria-label="loading">
            ${this.strings.loadingMessage}
          </div>
        </div>
      `,this.renderContent=()=>{var e;return this.error?this.renderError():this.noTerms?this.renderNoData():(null===(e=this.terms)||void 0===e?void 0:e.length)>0?this.renderTaxonomyPicker():this.renderGet()},this.renderError=()=>this.renderTemplate("error",null,"error")||$.qy`<span>${this.error}</span>`,this.placeholder=this.strings.comboboxPlaceholder,this.noTerms=!1}refresh(e=!1){e&&this.clearState()}clearState(){this.terms=null,this.error=null,this.noTerms=!1}renderNoData(){return this.renderTemplate("no-data",null)||$.qy`<span>${this.strings.noTermsFound}</span>`}renderTaxonomyPicker(){return I.Q`
      <fluent-combobox class="taxonomy-picker" autocomplete="both" placeholder=${this.placeholder} position=${this.position} ?disabled=${this.disabled}>
        ${this.terms.map((e=>this.renderTaxonomyPickerItem(e)))}
      </fluent-combobox>
     `}renderTaxonomyPickerItem(e){const t=this.defaultSelectedTermId&&this.defaultSelectedTermId===e.id;return $.qy`
        <fluent-option value=${e.id} ?selected=${t} @click=${t=>this.handleClick(t,e)}> ${this.renderTemplate("term",{term:e},e.id)||e.labels[0].name} </fluent-option>
        `}renderGet(){if(!this.termsetId)return $.qy`<span>${this.strings.termsetIdRequired}</span>`;let e=`/termStore/sets/${this.termsetId}/children`;return this.termId&&(e=`/termStore/sets/${this.termsetId}/terms/${this.termId}/children`),this.siteId&&(e=`/sites/${this.siteId}${e}`),e+="?$select=id,labels,descriptions,properties",I.Q`
      <mgt-get
        class="mgt-get"
        resource=${e}
        version=${this.version}
        scopes="TermStore.Read.All, TermStore.ReadWrite.All"
        ?cache-enabled=${this.cacheEnabled}
        ?cache-invalidation-period=${this.cacheInvalidationPeriod}>
      </mgt-get>`}firstUpdated(e){super.firstUpdated(e),this.renderRoot.addEventListener("dataChange",(e=>this.handleDataChange(e)))}handleDataChange(e){const t=e.detail.error?e.detail.error:null;if(t)return void(this.error=t);this.locale&&(this.locale=this.locale.toLowerCase());const i=e.detail.response.value.map((e=>{const t=e.labels;if(t&&t.length>0&&this.locale){const i=t.find((e=>e.languageTag.toLowerCase()===this.locale));i&&(e.labels=[i,...t.filter((e=>e.languageTag.toLowerCase()!==this.locale))])}return e}));this.terms=i,0===i.length&&(this.noTerms=!0)}handleClick(e,t){this.selectedTerm=t,this.fireCustomEvent("selectionChanged",t)}}Ls([(0,S.MZ)({attribute:"term-set-id",type:String}),Os("design:type",String)],Rs.prototype,"termsetId",void 0),Ls([(0,S.MZ)({attribute:"term-id",type:String}),Os("design:type",String)],Rs.prototype,"termId",void 0),Ls([(0,S.MZ)({attribute:"site-id",type:String}),Os("design:type",String)],Rs.prototype,"siteId",void 0),Ls([(0,S.MZ)({attribute:"locale",type:String}),Os("design:type",String)],Rs.prototype,"locale",void 0),Ls([(0,S.MZ)({attribute:"version",type:String}),Os("design:type",Object)],Rs.prototype,"version",void 0),Ls([(0,S.MZ)({attribute:"placeholder",type:String}),Os("design:type",String)],Rs.prototype,"placeholder",void 0),Ls([(0,S.MZ)({attribute:"position",type:String,converter:e=>"above"===e?"above":"below"}),Os("design:type",String)],Rs.prototype,"position",void 0),Ls([(0,S.MZ)({attribute:"default-selected-term-id",type:String}),Os("design:type",String)],Rs.prototype,"defaultSelectedTermId",void 0),Ls([(0,S.MZ)({attribute:"selected-term",type:Object}),Os("design:type",Object)],Rs.prototype,"selectedTerm",void 0),Ls([(0,S.MZ)({attribute:"disabled",type:Boolean}),Os("design:type",Boolean)],Rs.prototype,"disabled",void 0),Ls([(0,S.MZ)({attribute:"cache-enabled",type:Boolean}),Os("design:type",Object)],Rs.prototype,"cacheEnabled",void 0),Ls([(0,S.MZ)({attribute:"cache-invalidation-period",type:Number}),Os("design:type",Object)],Rs.prototype,"cacheInvalidationPeriod",void 0),Ls([(0,S.wk)(),Os("design:type",Array)],Rs.prototype,"terms",void 0),Ls([(0,S.wk)(),Os("design:type",Boolean)],Rs.prototype,"noTerms",void 0);class Es extends ye.g{}class Ms extends((0,It.dx)(Es)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Hs extends Ms{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case me.Mm:case me.gG:this.checked=!this.checked}},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(e,t){super.checkedChanged(e,t),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}(0,ge.Cg)([(0,ve.CF)({attribute:"readonly",mode:"boolean"})],Hs.prototype,"readOnly",void 0),(0,ge.Cg)([fe.sH],Hs.prototype,"defaultSlottedNodes",void 0);const Vs=Hs.compose({baseName:"switch",template:(e,t)=>Te.q`
    <template
        role="switch"
        aria-checked="${e=>e.checked}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.checked?"checked":""}"
    >
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${(0,De.e)("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${t.switch||""}</slot>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`,styles:(e,t)=>Oe.A`
    :host([hidden]) {
      display: none;
    }

    ${(0,Re.V)("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Ee.OCo};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${Ee.qB4};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${Mt.Z};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${Nt.D} / 2) + ${Ee.vR1}) * 2px);
      height: calc(((${Nt.D} / 2) + ${Ee.vR1}) * 1px);
      background: ${Ee.ymW};
      border-radius: calc(${Nt.D} * 1px);
      border: calc(${Ee.XAH} * 1px) solid ${Ee.nF5};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${Ee.IpM};
      border-color: ${Ee.vA6};
    }

    :host(:not(.disabled):active) .switch {
      background: ${Ee.MPS};
      border-color: ${Ee.p4W};
    }

    :host(:${Et.N}) .switch {
      ${Me.v}
      background: ${Ee.wsB};
    }

    :host(.checked) .switch {
      background: ${Ee.IRh};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${Ee.OS0};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Ee.amQ};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${Ee.lHw};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${Ee.lHw};
      cursor: pointer;
      ${Bt.Ah}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${Ee.lHw};
      ${Bt.Ah}
      margin-inline-end: calc(${Ee.vR1} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${Ee.vR1} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${Ee.IRh};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${Ee.l_5};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${Ee.OS0};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${Ee.XKp};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Ee.amQ};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${Ee.J_F};
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host(.checked) .unchecked-message {
      display: none;
    }

    :host(.checked) .checked-message {
      display: block;
    }
  `.withBehaviors(new Jt(Oe.A`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,Oe.A`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),(0,Ht.mr)(Oe.A`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${Vt.A.FieldText};
        }
        .switch {
          background: ${Vt.A.Field};
          border-color: ${Vt.A.FieldText};
        }
        :host(.checked) .switch {
          background: ${Vt.A.Highlight};
          border-color: ${Vt.A.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${Vt.A.HighlightText};
          border-color: ${Vt.A.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${Vt.A.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${Vt.A.Highlight};
        }
        :host(:${Et.N}) .switch {
          forced-color-adjust: none;
          background: ${Vt.A.Field}; 
          border-color: ${Vt.A.Highlight};
          outline-color: ${Vt.A.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${Vt.A.GrayText};
        }
        :host(.disabled) .switch {
          background: ${Vt.A.Field};
          border-color: ${Vt.A.GrayText};
        }
        .status-message,
        .label {
          color: ${Vt.A.FieldText};
        }
      `)),switch:'\n    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n      <rect x="2" y="2" width="12" height="12" rx="6"/>\n    </svg>\n  '});var zs=i(7225),Ns=i(7022);const qs="#717171",Bs=oo.G.create("secondary-text-color").withDefault(qs),Us="#1a1a1a",js=oo.G.create("secondary-text-hover-color").withDefault(Us),Zs=(e,t=document.body)=>{const i=Gs(e);Ws(i,t)},Ws=(e,t=document.body)=>{var i;Ee.fdT.setValueFor(t,$t.q.from((0,Ns.Hs)(e.accentBaseColor))),Ee.eQf.setValueFor(t,$t.q.from((0,Ns.Hs)(e.neutralBaseColor))),Ee.li_.setValueFor(t,e.baseLayerLuminance),null===(i=e.designTokenOverrides)||void 0===i||i.call(e,t)},Gs=e=>{switch(e){case"contrast":return{accentBaseColor:"#7f85f5",neutralBaseColor:"#adadad",baseLayerLuminance:zs.y.DarkMode};case"default":return{accentBaseColor:"#5b5fc7",neutralBaseColor:"#616161",baseLayerLuminance:zs.y.LightMode};case"dark":return{accentBaseColor:"#479ef5",neutralBaseColor:"#adadad",baseLayerLuminance:zs.y.DarkMode,designTokenOverrides:e=>{Ee.IRh.setValueFor(e,$t.q.from((0,Ns.Hs)("#115ea3"))),Ee.OS0.setValueFor(e,$t.q.from((0,Ns.Hs)("#0f6cbd"))),Ee.amQ.setValueFor(e,$t.q.from((0,Ns.Hs)("#0c3b5e"))),Ee.KJd.setValueFor(e,$t.q.from((0,Ns.Hs)("#0f548c"))),Ee.W_m.setValueFor(e,$t.q.from((0,Ns.Hs)("#479EF5"))),Ee.YLI.setValueFor(e,$t.q.from((0,Ns.Hs)("#62abf5"))),Ee.QL0.setValueFor(e,$t.q.from((0,Ns.Hs)("#2886de"))),Ee.iLG.setValueFor(e,$t.q.from((0,Ns.Hs)("#479ef5"))),Ee.enQ.setValueFor(e,$t.q.from((0,Ns.Hs)("#115ea3"))),Ee.eNp.setValueFor(e,$t.q.from((0,Ns.Hs)("#0f6cbd"))),Ee.uB0.setValueFor(e,$t.q.from((0,Ns.Hs)("#0c3b5e"))),Ee.cDQ.setValueFor(e,$t.q.from((0,Ns.Hs)("#0f548c"))),Ee.J_F.setValueFor(e,$t.q.from((0,Ns.Hs)("#ffffff"))),Ee.l_5.setValueFor(e,$t.q.from((0,Ns.Hs)("#ffffff"))),Ee.XKp.setValueFor(e,$t.q.from((0,Ns.Hs)("#ffffff"))),Ee.BgV.setValueFor(e,$t.q.from((0,Ns.Hs)("#ffffff"))),Bs.setValueFor(e,"#8e8e8e"),js.setValueFor(e,"#ffffff")}};default:return{accentBaseColor:"#0f6cbd",neutralBaseColor:"#616161",baseLayerLuminance:zs.y.LightMode,designTokenOverrides:e=>{Bs.setValueFor(e,qs),js.setValueFor(e,Us)}}}},Qs={label:"Color mode:",on:"Dark",off:"Light"};class Ks extends Ci.S{constructor(){super(),this.onSwitchChanged=e=>{this.darkModeActive=e.target.checked};const e=window.matchMedia("(prefers-color-scheme:dark)").matches;this.darkModeActive=e,this.applyTheme(this.darkModeActive)}get strings(){return Qs}updated(e){e.has("darkModeActive")&&this.applyTheme(this.darkModeActive)}render(){return $.qy`
      <fluent-switch checked=${this.darkModeActive} @change=${this.onSwitchChanged}>
        <span slot="checked-message">${Qs.on}</span>
        <span slot="unchecked-message">${Qs.off}</span>
        <label for="direction-switch">${Qs.label}</label>
      </fluent-switch>
`}applyTheme(e){const t=e?"dark":"light";Zs(t),document.body.classList.remove("mgt-dark-mode","mgt-light-mode"),document.body.classList.add(`mgt-${t}-mode`),this.fireCustomEvent("darkmodechanged",this.darkModeActive,!0,!1,!0)}}!function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);n>3&&r&&Object.defineProperty(t,i,r)}([(0,S.MZ)({attribute:"mode",reflect:!0,type:String,converter:{fromAttribute:e=>"dark"===e,toAttribute:e=>e?"dark":"light"}}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],Ks.prototype,"darkModeActive",void 0);class Xs extends ye.g{}class Js extends((0,It.rf)(Xs)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ys extends Js{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&Fe.dv.queueUpdate((()=>{this.focus()}))}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}}(0,ge.Cg)([(0,ve.CF)({attribute:"readonly",mode:"boolean"})],Ys.prototype,"readOnly",void 0),(0,ge.Cg)([(0,ve.CF)({mode:"boolean"})],Ys.prototype,"autofocus",void 0),(0,ge.Cg)([ve.CF],Ys.prototype,"placeholder",void 0),(0,ge.Cg)([ve.CF],Ys.prototype,"list",void 0),(0,ge.Cg)([(0,ve.CF)({converter:ve.R$})],Ys.prototype,"maxlength",void 0),(0,ge.Cg)([(0,ve.CF)({converter:ve.R$})],Ys.prototype,"minlength",void 0),(0,ge.Cg)([ve.CF],Ys.prototype,"pattern",void 0),(0,ge.Cg)([(0,ve.CF)({converter:ve.R$})],Ys.prototype,"size",void 0),(0,ge.Cg)([(0,ve.CF)({mode:"boolean"})],Ys.prototype,"spellcheck",void 0),(0,ge.Cg)([fe.sH],Ys.prototype,"defaultSlottedNodes",void 0);class en{}(0,Ce.X)(en,xe.z),(0,Ce.X)(Ys,ke.qw,en);var tn=i(6773),on=i(174);const sn=".root",nn=oo.G.create("clear-button-hover").withDefault((e=>{const t=Ee.EE_.getValueFor(e),i=Ee.VYG.getValueFor(e);return t.evaluate(e,i.evaluate(e).focus).hover})),rn=oo.G.create("clear-button-active").withDefault((e=>{const t=Ee.EE_.getValueFor(e),i=Ee.VYG.getValueFor(e);return t.evaluate(e,i.evaluate(e).focus).active}));class an extends Ys{constructor(){super(...arguments),this.appearance="outline"}}(0,_t.Cg)([ve.CF],an.prototype,"appearance",void 0);const ln=an.compose({baseName:"search",baseClass:Ys,template:(e,t)=>Te.q`
  <template
    class="
            ${e=>e.readOnly?"readonly":""}
        "
  >
    <label
      part="label"
      for="control"
      class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
    >
      <slot ${(0,De.e)({property:"defaultSlottedNodes",filter:tn.g})}></slot>
    </label>
    <div class="root" part="root" ${(0,Rt.K)("root")}>
      ${(0,ke.LT)(e,t)}
      <div class="input-wrapper" part="input-wrapper">
        <input
          class="control"
          part="control"
          id="control"
          @input="${e=>e.handleTextInput()}"
          @change="${e=>e.handleChange()}"
          ?autofocus="${e=>e.autofocus}"
          ?disabled="${e=>e.disabled}"
          list="${e=>e.list}"
          maxlength="${e=>e.maxlength}"
          minlength="${e=>e.minlength}"
          pattern="${e=>e.pattern}"
          placeholder="${e=>e.placeholder}"
          ?readonly="${e=>e.readOnly}"
          ?required="${e=>e.required}"
          size="${e=>e.size}"
          ?spellcheck="${e=>e.spellcheck}"
          :value="${e=>e.value}"
          type="search"
          aria-atomic="${e=>e.ariaAtomic}"
          aria-busy="${e=>e.ariaBusy}"
          aria-controls="${e=>e.ariaControls}"
          aria-current="${e=>e.ariaCurrent}"
          aria-describedby="${e=>e.ariaDescribedby}"
          aria-details="${e=>e.ariaDetails}"
          aria-disabled="${e=>e.ariaDisabled}"
          aria-errormessage="${e=>e.ariaErrormessage}"
          aria-flowto="${e=>e.ariaFlowto}"
          aria-haspopup="${e=>e.ariaHaspopup}"
          aria-hidden="${e=>e.ariaHidden}"
          aria-invalid="${e=>e.ariaInvalid}"
          aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
          aria-label="${e=>e.ariaLabel}"
          aria-labelledby="${e=>e.ariaLabelledby}"
          aria-live="${e=>e.ariaLive}"
          aria-owns="${e=>e.ariaOwns}"
          aria-relevant="${e=>e.ariaRelevant}"
          aria-roledescription="${e=>e.ariaRoledescription}"
          ${(0,Rt.K)("control")}
        />
        <slot name="clear-button">
          <button
            class="clear-button ${e=>e.value?"":"clear-button__hidden"}"
            part="clear-button"
            tabindex="-1"
            @click=${e=>e.handleClearInput()}
          >
            <slot name="clear-glyph">
              <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2.09 2.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L6 5.29l3.15-3.14a.5.5 0 1 1 .7.7L6.71 6l3.14 3.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L6 6.71 2.85 9.85a.5.5 0 0 1-.7-.7L5.29 6 2.15 2.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"
                />
              </svg>
            </slot>
          </button>
        </slot>
      </div>
      ${(0,ke.aO)(e,t)}
    </div>
  </template>
`,styles:(e,t)=>Oe.A`
    ${(0,Re.V)("inline-block")}

    ${(0,jt.aB)(e,t,sn)}

    ${(0,jt.y$)(e,t,sn)}

    .root {
      display: flex;
      flex-direction: row;
    }
    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${Ee.vR1} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
    .clear-button {
      display: inline-flex;
      align-items: center;
      margin: 1px;
      height: calc(100% - 2px);
      opacity: 0;
      background: transparent;
      color: ${Ee.lHw};
      fill: currentcolor;
      border: none;
      border-radius: calc(${Ee.PbG} * 1px);
      min-width: calc(${Nt.D} * 1px);
      ${Bt.Ah}
      outline: none;
      padding: 0 calc((10 + (${Ee.vR1} * 2 * ${Ee.Brd})) * 1px);
    }
    .clear-button:hover {
      background: ${nn};
    }
    .clear-button:active {
      background: ${rn};
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button,
    :host(:active:not([disabled], [readOnly])) .clear-button,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button {
        opacity: 1;
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:active:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button__hidden {
        opacity: 0;
    }
    .control::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
    .input-wrapper {
      display: flex;
      position: relative;
      width: 100%;
    }
    .start,
    .end {
      display: flex;
      margin: 1px;
      align-items: center;
    }
    .start {
      display: flex;
      margin-inline-start: 11px;
    }
    ::slotted([slot="end"]) {
      height: 100%
    }
    .clear-button__hidden {
      opacity: 0;
    }
    .end {
        margin-inline-end: 11px;
    }
    ::slotted(${e.tagFor(on.$)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors((0,qt.f)("outline",(0,jt.Tv)(e,t,sn)),(0,qt.f)("filled",(0,jt.dM)(e,t,sn)),(0,Ht.mr)((0,jt.lb)(e,t,sn))),start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}}),dn={placeholder:"Search",title:"Search"},cn=[$.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host fluent-search{width:100%}
`];var hn=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},un=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class pn extends Ci.S{static get styles(){return cn}get strings(){return dn}get searchTerm(){return this._searchTerm}set searchTerm(e){this._searchTerm=e,this.fireSearchTermChanged()}constructor(){super(),this._searchTerm="",this.renderContent=()=>{var e;return $.qy`
      <fluent-search
        autocomplete="off"
        class="search-term-input"
        appearance="outline"
        value=${null!==(e=this.searchTerm)&&void 0!==e?e:""}
        placeholder=${this.placeholder?this.placeholder:dn.placeholder}
        title=${this.title?this.title:dn.title}
        @input=${this.onInputChanged}
        @change=${this.onInputChanged}
      >
      </fluent-search>`},this.onInputChanged=e=>{this.searchTerm=e.target.value},this.debounceDelay=300}fireSearchTermChanged(){this.debouncedSearchTermChanged||(this.debouncedSearchTermChanged=(0,it.sg)((()=>{this.fireCustomEvent("searchTermChanged",this.searchTerm)}),this.debounceDelay)),this.debouncedSearchTermChanged()}}hn([(0,S.MZ)({attribute:"placeholder",type:String}),un("design:type",String)],pn.prototype,"placeholder",void 0),hn([(0,S.MZ)({attribute:"search-term",type:String}),un("design:type",Object),un("design:paramtypes",[Object])],pn.prototype,"searchTerm",null),hn([(0,S.MZ)({attribute:"debounce-delay",type:Number,reflect:!0}),un("design:type",Number)],pn.prototype,"debounceDelay",void 0);const gn={modified:"modified on",back:"Back",next:"Next",pages:"pages",page:"Page"},fn=[$.AH`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}.search-results{scroll-margin:100px}.search-result-grid{font-size:14px;margin:16px 4px;display:grid;grid-template-columns:32px 2fr 0fr;gap:.5rem}.search-result{font-size:14px;margin:16px 4px}.file-icon{--file-type-icon-height:32px}.search-result-info{margin:4px 0;display:inline-flex}.search-result-date{padding-top:3px;color:var(--color,var(--neutral-foreground-rest))}.search-result-date__shimmer{border-radius:4px;margin-top:2%;margin-left:5px;height:10px;width:200px}.search-result-summary{margin:4px 0;color:var(--color,var(--neutral-foreground-rest))}.search-result-thumbnail__shimmer{width:126px;height:72px}.search-result-thumbnail img{height:72px;max-width:126px;width:126px;object-fit:cover}.search-result-url{font-size:14px;font-weight:600;margin:4px 0}.search-result-url a{color:var(--color,var(--neutral-foreground-rest));text-decoration:none}.search-result-url a:hover{text-decoration:underline}.search-result-content__shimmer{border-radius:4px;margin-top:10px;height:10px}.search-result-name{font-size:16px;font-weight:600;margin:4px 0}.search-result-name__shimmer{border-radius:4px;margin-top:10px;height:10px;width:20%}.search-result-name a{color:var(--color,var(--neutral-foreground-rest));text-decoration:none}.search-result-name a:hover{text-decoration:underline}.search-result-author__shimmer{width:24px;height:24px}.search-result-icon{width:30px;height:30px}.search-result-icon__shimmer{width:32px;height:32px}.search-result-icon img{width:100%}.search-result-icon svg,.search-result-icon svg>path{width:100%;height:100%;fill:var(--neutral-foreground-rest);fill-rule:nonzero!important;clip-rule:nonzero!important}.search-results-page-active{border-bottom-style:solid;border-bottom-color:var(--accent-base-color)}.search-results-page svg,.search-results-page svg>path{height:12px;fill:var(--neutral-foreground-rest);fill-rule:nonzero!important;clip-rule:nonzero!important}.search-result-answer{box-shadow:var(--answer-box-shadow,0 3.2px 7.2px rgba(0,0,0,.132),0 .6px 1.8px rgba(0,0,0,.108));border-radius:var(--answer-border-radius,4px);border:var(--answer-border,none);padding:var(--answer-padding,10px)}.search-results-pages{margin:16px 4px}
`];class vn extends ye.g{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=ai.O.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=e=>{this.classList.toggle("top","start"===this.region.verticalPosition),this.classList.toggle("bottom","end"===this.region.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.region.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.region.verticalPosition),this.classList.toggle("center-vertical","center"===this.region.verticalPosition),this.classList.toggle("left","start"===this.region.horizontalPosition),this.classList.toggle("right","end"===this.region.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.region.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.region.horizontalPosition),this.classList.toggle("center-horizontal","center"===this.region.horizontalPosition)},this.handleRegionMouseOver=e=>{this.isRegionHovered=!0},this.handleRegionMouseOut=e=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=e=>{this.tooltipVisible?this.isAnchorHoveredFocused=!0:this.startShowDelayTimer()},this.handleAnchorMouseOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=e=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout((()=>{this.updateTooltipVisibility()}),60))},this.clearHideDelayTimer=()=>{null!==this.hideDelayTimer&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{this.isAnchorHoveredFocused||(this.delay>1?null===this.showDelayTimer&&(this.showDelayTimer=window.setTimeout((()=>{this.startHover()}),this.delay)):this.startHover())},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{null!==this.showDelayTimer&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const e=this.getRootNode();return e instanceof ShadowRoot?e.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=e=>{!e.defaultPrevented&&this.tooltipVisible&&e.key===me.F9&&(this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss"))},this.updateTooltipVisibility=()=>{if(!1===this.visible)this.hideTooltip();else{if(!0===this.visible)return void this.showTooltip();if(this.isAnchorHoveredFocused||this.isRegionHovered)return void this.showTooltip();this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=li(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),Fe.dv.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),null!==this.region&&void 0!==this.region&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(e){if(this.$fastController.isConnected){if(null!=e&&(e.removeEventListener("mouseover",this.handleAnchorMouseOver),e.removeEventListener("mouseout",this.handleAnchorMouseOut),e.removeEventListener("focusin",this.handleAnchorFocusIn),e.removeEventListener("focusout",this.handleAnchorFocusOut)),null!==this.anchorElement&&void 0!==this.anchorElement){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const e=this.anchorElement.id;null!==this.anchorElement.parentElement&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach((t=>{t.id===e&&this.startShowDelayTimer()}))}null!==this.region&&void 0!==this.region&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){null!==this.region&&void 0!==this.region&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case"top":case"bottom":this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case"right":case"left":case"start":case"end":this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case"top-left":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case"top-right":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case"bottom-left":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case"bottom-right":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case"top-start":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case"top-end":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case"bottom-start":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case"bottom-end":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center"}}}(0,ge.Cg)([(0,ve.CF)({mode:"boolean"})],vn.prototype,"visible",void 0),(0,ge.Cg)([ve.CF],vn.prototype,"anchor",void 0),(0,ge.Cg)([ve.CF],vn.prototype,"delay",void 0),(0,ge.Cg)([ve.CF],vn.prototype,"position",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"auto-update-mode"})],vn.prototype,"autoUpdateMode",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"horizontal-viewport-lock"})],vn.prototype,"horizontalViewportLock",void 0),(0,ge.Cg)([(0,ve.CF)({attribute:"vertical-viewport-lock"})],vn.prototype,"verticalViewportLock",void 0),(0,ge.Cg)([fe.sH],vn.prototype,"anchorElement",void 0),(0,ge.Cg)([fe.sH],vn.prototype,"viewportElement",void 0),(0,ge.Cg)([fe.sH],vn.prototype,"verticalPositioningMode",void 0),(0,ge.Cg)([fe.sH],vn.prototype,"horizontalPositioningMode",void 0),(0,ge.Cg)([fe.sH],vn.prototype,"horizontalInset",void 0),(0,ge.Cg)([fe.sH],vn.prototype,"verticalInset",void 0),(0,ge.Cg)([fe.sH],vn.prototype,"horizontalScaling",void 0),(0,ge.Cg)([fe.sH],vn.prototype,"verticalScaling",void 0),(0,ge.Cg)([fe.sH],vn.prototype,"verticalDefaultPosition",void 0),(0,ge.Cg)([fe.sH],vn.prototype,"horizontalDefaultPosition",void 0),(0,ge.Cg)([fe.sH],vn.prototype,"tooltipVisible",void 0),(0,ge.Cg)([fe.sH],vn.prototype,"currentDirection",void 0);const mn=class extends vn{connectedCallback(){super.connectedCallback(),Ee.pfK.setValueFor(this,Ee.Tkp)}}.compose({baseName:"tooltip",baseClass:vn,template:(e,t)=>Te.q`
        ${(0,Ot.z)((e=>e.tooltipVisible),Te.q`
            <${e.tagFor(xi)}
                fixed-placement="true"
                auto-update-mode="${e=>e.autoUpdateMode}"
                vertical-positioning-mode="${e=>e.verticalPositioningMode}"
                vertical-default-position="${e=>e.verticalDefaultPosition}"
                vertical-inset="${e=>e.verticalInset}"
                vertical-scaling="${e=>e.verticalScaling}"
                horizontal-positioning-mode="${e=>e.horizontalPositioningMode}"
                horizontal-default-position="${e=>e.horizontalDefaultPosition}"
                horizontal-scaling="${e=>e.horizontalScaling}"
                horizontal-inset="${e=>e.horizontalInset}"
                vertical-viewport-lock="${e=>e.horizontalViewportLock}"
                horizontal-viewport-lock="${e=>e.verticalViewportLock}"
                dir="${e=>e.currentDirection}"
                ${(0,Rt.K)("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${e.tagFor(xi)}>
        `)}
    `,styles:(e,t)=>Oe.A`
    :host {
      position: relative;
      contain: layout;
      overflow: visible;
      height: 0;
      width: 0;
      z-index: 10000;
    }

    .tooltip {
      box-sizing: border-box;
      border-radius: calc(${Ee.PbG} * 1px);
      border: calc(${Ee.XAH} * 1px) solid ${Ee.ppm};
      background: ${Ee.pfK};
      color: ${Ee.lHw};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${Bt.Ah}
      white-space: nowrap;
      box-shadow: ${zt.tf};
    }

    ${e.tagFor(xi)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${e.tagFor(xi)}.right,
    ${e.tagFor(xi)}.left {
      flex-direction: column;
    }

    ${e.tagFor(xi)}.top .tooltip::after,
    ${e.tagFor(xi)}.bottom .tooltip::after,
    ${e.tagFor(xi)}.left .tooltip::after,
    ${e.tagFor(xi)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${Ee.pfK};
      border-top: calc(${Ee.XAH} * 1px) solid ${Ee.ppm};
      border-left: calc(${Ee.XAH} * 1px) solid ${Ee.ppm};
      position: absolute;
    }

    ${e.tagFor(xi)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${e.tagFor(xi)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${e.tagFor(xi)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${e.tagFor(xi)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${e.tagFor(xi)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${e.tagFor(xi)}.left .tooltip {
      margin-right: 12px;
    }

    ${e.tagFor(xi)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${e.tagFor(xi)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors((0,Ht.mr)(Oe.A`
        :host([disabled]) {
          opacity: 1;
        }
        ${e.tagFor(xi)}.top .tooltip::after,
        ${e.tagFor(xi)}.bottom .tooltip::after,
        ${e.tagFor(xi)}.left .tooltip::after,
        ${e.tagFor(xi)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `))}),bn=ui.compose({baseName:"divider",template:(e,t)=>Te.q`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>Oe.A`
    ${(0,Re.V)("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${Ee.XAH} * 1px) solid ${Ee.hb6};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${Ee.vR1} * 1px);
      border-left: calc(${Ee.XAH} * 1px) solid ${Ee.hb6};
  }
  `});var yn=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},wn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class xn extends _.N{static get styles(){return fn}get strings(){return gn}get queryString(){return this._queryString}set queryString(e){this._queryString!==e&&(this._queryString=e,this.currentPage=1)}get from(){return(this.currentPage-1)*this.size}get size(){return this._size}set size(e){e>this.maxPageSize?this._size=this.maxPageSize:this._size=e}get searchEndpoint(){return"/search/query"}get maxPageSize(){return 1e3}constructor(){super(),this._size=10,this.entityTypes=["driveItem","listItem","site"],this.scopes=[],this.contentSources=[],this.version="v1.0",this.pagingMax=7,this.enableTopResults=!1,this.cacheEnabled=!1,this.cacheInvalidationPeriod=3e4,this.isRefreshing=!1,this.defaultFields=["webUrl","lastModifiedBy","lastModifiedDateTime","summary","displayName","name"],this.currentPage=1,this.renderContent=()=>{var e,t,i,o,s,n,r,a;let l=null,d=null,c=null;return this.hasTemplate("header")&&(d=this.renderTemplate("header",this.response)),c=this.renderFooter(null===(t=null===(e=this.response)||void 0===e?void 0:e.value[0])||void 0===t?void 0:t.hitsContainers[0]),l=this.response&&this.hasTemplate("default")?this.renderTemplate("default",this.response)||$.qy``:(null===(o=null===(i=this.response)||void 0===i?void 0:i.value[0])||void 0===o?void 0:o.hitsContainers[0])?$.qy`${null===(a=null===(r=null===(n=null===(s=this.response)||void 0===s?void 0:s.value[0])||void 0===n?void 0:n.hitsContainers[0])||void 0===r?void 0:r.hits)||void 0===a?void 0:a.map((e=>this.renderResult(e)))}`:this.hasTemplate("no-data")?this.renderTemplate("no-data",null):$.qy``,$.qy`
      ${d}
      <div class="search-results">
        ${l}
      </div>
      ${c}`},this.renderLoading=()=>this.renderTemplate("loading",null)||$.qy`
        ${[...Array(this.size)].map((()=>$.qy`
            <div class="search-result">
              <div class="search-result-grid">
                <div class="search-result-icon">
                  <fluent-skeleton class="search-result-icon__shimmer" shape="rect" shimmer></fluent-skeleton>
                </div>
                <div class="searc-result-content">
                  <div class="search-result-name">
                    <fluent-skeleton class="search-result-name__shimmer" shape="rect" shimmer></fluent-skeleton>
                  </div>
                  <div class="search-result-info">
                    <div class="search-result-author">
                      <fluent-skeleton class="search-result-author__shimmer" shape="circle" shimmer></fluent-skeleton>
                    </div>
                    <div class="search-result-date">
                      <fluent-skeleton class="search-result-date__shimmer" shape="rect" shimmer></fluent-skeleton>
                    </div>
                  </div>
                  <fluent-skeleton class="search-result-content__shimmer" shape="rect" shimmer></fluent-skeleton>
                  <fluent-skeleton class="search-result-content__shimmer" shape="rect" shimmer></fluent-skeleton>
                </div>
                ${this.fetchThumbnail&&$.qy`
                    <div class="search-result-thumbnail">
                      <fluent-skeleton class="search-result-thumbnail__shimmer" shape="rect" shimmer></fluent-skeleton>
                    </div>
                  `}
              </div>
              <fluent-divider></fluent-divider>
            </div>
          `))}
       `,this.onFirstPageClick=()=>{this.currentPage=1,this.scrollToFirstResult()},this.onPageBackClick=()=>{this.currentPage--,this.scrollToFirstResult()},this.onPageNextClick=()=>{this.currentPage++,this.scrollToFirstResult()}}args(){return[this.providerState,this.queryString,this.queryTemplate,this.entityTypes,this.contentSources,this.scopes,this.version,this.size,this.fetchThumbnail,this.fields,this.enableTopResults,this.currentPage]}refresh(e=!1){this.isRefreshing=!0,e&&this.clearState(),this._task.run()}clearState(){this.response=null}loadState(){var e,t,i,n,r,l,d,c,h,u;return d=this,c=void 0,u=function*(){const d=o.b.globalProvider;if(this.error=null,d&&d.state===s.HJ.SignedIn){if(this.queryString){try{const o=this.getRequestOptions();let s;const c=JSON.stringify({endpoint:`${this.version}${this.searchEndpoint}`,requestOptions:o});let h=null;if(this.shouldRetrieveCache()){s=X._.getCache(te.j.search,te.j.search.stores.responses);const e=(0,it.jE)()?yield s.getValue(c):null;e&&(0,it.jD)(this.cacheInvalidationPeriod)>Date.now()-e.timeCached&&(h=JSON.parse(e.response))}if(!h){const u=d.graph.forComponent(this);let p=u.api(this.searchEndpoint).version(this.version);if((null===(e=this.scopes)||void 0===e?void 0:e.length)&&(p=p.middlewareOptions((0,a.F)(this.scopes))),h=yield p.post({requests:[o]}),this.fetchThumbnail){const e=u.createBatch(),o=ft.fromGraph(u).createBatch(),s=(null===(t=h.value)||void 0===t?void 0:t.length)&&(null===(i=h.value[0].hitsContainers)||void 0===i?void 0:i.length)&&null!==(r=null===(n=h.value[0].hitsContainers[0])||void 0===n?void 0:n.hits)&&void 0!==r?r:[];for(const t of s){const i=t.resource;!(i.size>0||(null===(l=i.webUrl)||void 0===l?void 0:l.endsWith(".aspx")))||"#microsoft.graph.driveItem"!==i["@odata.type"]&&"#microsoft.graph.listItem"!==i["@odata.type"]||("#microsoft.graph.listItem"===i["@odata.type"]?o.get(t.hitId.toString(),`/sites/${i.parentReference.siteId}/pages/${i.id}`):e.get(t.hitId.toString(),`/drives/${i.parentReference.driveId}/items/${i.id}/thumbnails/0/medium`))}const a=e=>{if(e&&e.size>0)for(const[t,i]of e){const e=h.value[0].hitsContainers[0].hits[t],o="#microsoft.graph.listItem"===e.resource["@odata.type"]?{url:i.content.thumbnailWebUrl}:{url:i.content.url};e.resource.thumbnail=o}};try{a(yield e.executeAll()),a(yield o.executeAll())}catch(e){}}this.shouldUpdateCache()&&h&&(s=X._.getCache(te.j.search,te.j.search.stores.responses),yield s.putValue(c,{response:JSON.stringify(h)}))}(0,J.a)(this.response,h)||(this.response=h)}catch(e){this.error=e}this.response&&(this.error=null)}else this.response=null;this.isRefreshing=!1,this.fireCustomEvent("dataChange",{response:this.response,error:this.error})}},new((h=void 0)||(h=Promise))((function(e,t){function i(e){try{s(u.next(e))}catch(e){t(e)}}function o(e){try{s(u.throw(e))}catch(e){t(e)}}function s(t){var s;t.done?e(t.value):(s=t.value,s instanceof h?s:new h((function(e){e(s)}))).then(i,o)}s((u=u.apply(d,c||[])).next())}))}renderResult(e){const t=this.getResourceType(e.resource);if(this.hasTemplate(`result-${t}`))return this.renderTemplate(`result-${t}`,e,e.hitId);switch(e.resource["@odata.type"]){case"#microsoft.graph.driveItem":return this.renderDriveItem(e);case"#microsoft.graph.site":return this.renderSite(e);case"#microsoft.graph.person":return this.renderPerson(e);case"#microsoft.graph.drive":case"#microsoft.graph.list":return this.renderList(e);case"#microsoft.graph.listItem":return this.renderListItem(e);case"#microsoft.graph.search.bookmark":return this.renderBookmark(e);case"#microsoft.graph.search.acronym":return this.renderAcronym(e);case"#microsoft.graph.search.qna":return this.renderQnA(e);default:return this.renderDefault(e)}}renderFooter(e){if(this.pagingRequired(e)){const t=this.getActivePages(e.total);return $.qy`
        <div class="search-results-pages">
          ${this.renderPreviousPage()}
          ${this.renderFirstPage(t)}
          ${this.renderAllPages(t)}
          ${this.renderNextPage()}
        </div>
      `}}pagingRequired(e){return(null==e?void 0:e.moreResultsAvailable)||this.currentPage*this.size<(null==e?void 0:e.total)}getActivePages(e){const t=[],i=(()=>{const e=this.currentPage-Math.floor(this.pagingMax/2)-1;return e>=Math.floor(this.pagingMax/2)?e:0})();if(i+1>this.pagingMax-this.currentPage||this.pagingMax===this.currentPage)for(let o=i+1;o<Math.ceil(e/this.size)&&o<this.pagingMax+(this.currentPage-1)&&t.length<this.pagingMax-2;++o)t.push(o+1);else for(let e=i;e<this.pagingMax;++e)t.push(e+1);return t}renderAllPages(e){return $.qy`
      ${e.map((e=>$.qy`
            <fluent-button
              title="${gn.page} ${e}"
              appearance="stealth"
              class="${e===this.currentPage?"search-results-page-active":"search-results-page"}"
              @click="${()=>this.onPageClick(e)}">
                ${e}
            </fluent-button>`))}`}renderFirstPage(e){return $.qy`
      ${e.some((e=>1===e))?$.s6:$.qy`
              <fluent-button
                 title="${gn.page} 1"
                 appearance="stealth"
                 class="search-results-page"
                 @click="${this.onFirstPageClick}">
                 1
               </fluent-button>`?$.qy`
              <fluent-button
                id="page-back-dot"
                appearance="stealth"
                class="search-results-page"
                title="${this.getDotButtonTitle()}"
                @click="${()=>this.onPageClick(this.currentPage-Math.ceil(this.pagingMax/2))}"
              >
                ...
              </fluent-button>`:$.s6}`}getDotButtonTitle(){return`${gn.back} ${Math.ceil(this.pagingMax/2)} ${gn.pages}`}renderPreviousPage(){return this.currentPage>1?$.qy`
          <fluent-button
            appearance="stealth"
            class="search-results-page"
            title="${gn.back}"
            @click="${this.onPageBackClick}">
              ${(0,P.r)(P.A.ChevronLeft)}
            </fluent-button>`:$.s6}renderNextPage(){return this.isLastPage()?$.s6:$.qy`
          <fluent-button
            appearance="stealth"
            class="search-results-page"
            title="${gn.next}"
            aria-label="${gn.next}"
            @click="${this.onPageNextClick}">
              ${(0,P.r)(P.A.ChevronRight)}
            </fluent-button>`}onPageClick(e){this.currentPage=e,this.scrollToFirstResult()}isLastPage(){return this.currentPage===Math.ceil(this.response.value[0].hitsContainers[0].total/this.size)}scrollToFirstResult(){this.renderRoot.querySelector(".search-results").scrollIntoView({block:"start",behavior:"smooth"})}getResourceType(e){return e["@odata.type"].split(".").pop()}renderDriveItem(e){var t,i;const o=e.resource;return I.Q`
      <div class="search-result-grid">
        <div class="search-result-icon">
          <mgt-file
            .fileDetails="${e.resource}"
            view="image"
            class="file-icon">
          </mgt-file>
        </div>
        <div class="search-result-content">
          <div class="search-result-name">
            <a href="${o.webUrl}?Web=1" target="_blank">${(0,it.wJ)(o.name)}</a>
          </div>
          <div class="search-result-info">
            <div class="search-result-author">
              <mgt-person
                person-query=${o.lastModifiedBy.user.email}
                view="oneline"
                person-card="hover"
                show-presence="true">
              </mgt-person>
            </div>
            <div class="search-result-date">
              &nbsp; ${gn.modified} ${(0,it.h3)(new Date(o.lastModifiedDateTime))}
            </div>
          </div>
          <div class="search-result-summary" .innerHTML="${(0,it.ez)(e.summary)}"></div>
        </div>
        ${(null===(t=o.thumbnail)||void 0===t?void 0:t.url)&&$.qy`
          <div class="search-result-thumbnail">
            <a href="${o.webUrl}" target="_blank"><img alt="${o.name}" src="${null===(i=o.thumbnail)||void 0===i?void 0:i.url}" /></a>
          </div>`}

      </div>
      <fluent-divider></fluent-divider>
    `}renderSite(e){const t=e.resource;return $.qy`
      <div class="search-result-grid">
        <div class="search-result-icon">
          ${this.getResourceIcon(t)}
        </div>
        <div class="searc-result-content">
          <div class="search-result-name">
            <a href="${t.webUrl}" target="_blank">${t.displayName}</a>
          </div>
          <div class="search-result-info">
            <div class="search-result-url">
              <a href="${t.webUrl}" target="_blank">${t.webUrl}</a>
            </div>
          </div>
          <div class="search-result-summary" .innerHTML="${(0,it.ez)(e.summary)}"></div>
        </div>
      </div>
      <fluent-divider></fluent-divider>
    `}renderList(e){const t=e.resource;return I.Q`
      <div class="search-result-grid">
        <div class="search-result-icon">
          <mgt-file
            .fileDetails="${e.resource}"
            view="image">
          </mgt-file>
        </div>
        <div class="search-result-content">
          <div class="search-result-name">
            <a href="${t.webUrl}?Web=1" target="_blank">
              ${(0,it.wJ)(t.name||(0,it.x8)(t.webUrl))}
            </a>
          </div>
          <div class="search-result-summary" .innerHTML="${(0,it.ez)(e.summary)}"></div>
        </div>
      </div>
      <fluent-divider></fluent-divider>
    `}renderListItem(e){var t,i;const o=e.resource;return I.Q`
      <div class="search-result-grid">
        <div class="search-result-icon">
          ${o.webUrl.endsWith(".aspx")?(0,P.r)(P.A.News):(0,P.r)(P.A.FileOuter)}
        </div>
        <div class="search-result-content">
          <div class="search-result-name">
            <a href="${o.webUrl}?Web=1" target="_blank">
              ${(0,it.wJ)(o.name||(0,it.x8)(o.webUrl))}
            </a>
          </div>
          <div class="search-result-info">
            <div class="search-result-author">
              <mgt-person
                person-query=${o.lastModifiedBy.user.email}
                view="oneline"
                person-card="hover"
                show-presence="true">
              </mgt-person>
            </div>
            <div class="search-result-date">
              &nbsp; ${gn.modified} ${(0,it.h3)(new Date(o.lastModifiedDateTime))}
            </div>
          </div>
          <div class="search-result-summary" .innerHTML="${(0,it.ez)(e.summary)}"></div>
        </div>
        ${(null===(t=o.thumbnail)||void 0===t?void 0:t.url)&&$.qy`
          <div class="search-result-thumbnail">
            <a href="${o.webUrl}" target="_blank"><img alt="${(0,it.wJ)(o.name||(0,it.x8)(o.webUrl))}" src="${(null===(i=o.thumbnail)||void 0===i?void 0:i.url)||$.s6}" /></a>
          </div>`}
      </div>
      <fluent-divider></fluent-divider>
    `}renderPerson(e){const t=e.resource;return I.Q`
      <div class="search-result">
        <mgt-person
          view="fourlines"
          person-query=${t.userPrincipalName}
          person-card="hover"
          show-presence="true">
        </mgt-person>
      </div>
      <fluent-divider></fluent-divider>
    `}renderBookmark(e){return this.renderAnswer(e,P.A.DoubleBookmark)}renderAcronym(e){return this.renderAnswer(e,P.A.BookOpen)}renderQnA(e){return this.renderAnswer(e,P.A.BookQuestion)}renderAnswer(e,t){const i=e.resource;return $.qy`
      <div class="search-result-grid search-result-answer">
        <div class="search-result-icon">
          ${(0,P.r)(t)}
        </div>
        <div class="search-result-content">
          <div class="search-result-name">
            <a href="${this.getResourceUrl(i)}?Web=1" target="_blank">${i.displayName}</a>
          </div>
          <div class="search-result-summary">${i.description}</div>
        </div>
      </div>
      <fluent-divider></fluent-divider>
    `}renderDefault(e){const t=e.resource,i=this.getResourceUrl(t);return $.qy`
      <div class="search-result-grid">
        <div class="search-result-icon">
          ${this.getResourceIcon(t)}
        </div>
        <div class="search-result-content">
          <div class="search-result-name">
            ${i?$.qy`
                  <a href="${i}?Web=1" target="_blank">${this.getResourceName(t)}</a>
                `:$.qy`
                  ${this.getResourceName(t)}
                `}
          </div>
          <div class="search-result-summary" .innerHTML="${this.getResultSummary(e)}"></div>
        </div>
      </div>
      <fluent-divider></fluent-divider>
    `}getResourceUrl(e){return e.webUrl||e.webLink||null}getResourceName(e){return e.displayName||e.subject||(0,it.wJ)(e.name)}getResultSummary(e){var t;return(0,it.ez)(e.summary||(null===(t=e.resource)||void 0===t?void 0:t.description)||null)}getResourceIcon(e){switch(e["@odata.type"]){case"#microsoft.graph.site":return(0,P.r)(P.A.Globe);case"#microsoft.graph.message":return(0,P.r)(P.A.Email);case"#microsoft.graph.event":return(0,P.r)(P.A.Event);case"microsoft.graph.chatMessage":return(0,P.r)(P.A.SmallChat);default:return(0,P.r)(P.A.FileOuter)}}shouldRetrieveCache(){return(0,it.jE)()&&this.cacheEnabled&&!this.isRefreshing}shouldUpdateCache(){return(0,it.jE)()&&this.cacheEnabled}getRequestOptions(){const e={entityTypes:this.entityTypes,query:{queryString:this.queryString},from:this.from?this.from:void 0,size:this.size?this.size:void 0,fields:this.getFields(),enableTopResults:this.enableTopResults?this.enableTopResults:void 0};return this.entityTypes.includes("externalItem")&&(e.contentSources=this.contentSources),"beta"===this.version&&(e.query.queryTemplate=this.queryTemplate?this.queryTemplate:void 0),e}getFields(){if(this.fields)return this.defaultFields.concat(this.fields)}}yn([(0,S.MZ)({attribute:"query-string",type:String}),wn("design:type",String),wn("design:paramtypes",[String])],xn.prototype,"queryString",null),yn([(0,S.MZ)({attribute:"query-template",type:String}),wn("design:type",String)],xn.prototype,"queryTemplate",void 0),yn([(0,S.MZ)({attribute:"entity-types",converter:e=>e.split(",").map((e=>e.trim())),type:String}),wn("design:type",Array)],xn.prototype,"entityTypes",void 0),yn([(0,S.MZ)({attribute:"scopes",converter:(e,t)=>e?e.toLowerCase().split(","):null}),wn("design:type",Array)],xn.prototype,"scopes",void 0),yn([(0,S.MZ)({attribute:"content-sources",converter:(e,t)=>e?e.toLowerCase().split(","):null}),wn("design:type",Array)],xn.prototype,"contentSources",void 0),yn([(0,S.MZ)({attribute:"version",reflect:!0,type:String}),wn("design:type",Object)],xn.prototype,"version",void 0),yn([(0,S.MZ)({attribute:"size",reflect:!0,type:Number}),wn("design:type",Number),wn("design:paramtypes",[Object])],xn.prototype,"size",null),yn([(0,S.MZ)({attribute:"paging-max",reflect:!0,type:Number}),wn("design:type",Object)],xn.prototype,"pagingMax",void 0),yn([(0,S.MZ)({attribute:"fetch-thumbnail",type:Boolean}),wn("design:type",Boolean)],xn.prototype,"fetchThumbnail",void 0),yn([(0,S.MZ)({attribute:"fields",converter:e=>e.split(",").map((e=>e.trim())),type:String}),wn("design:type",Array)],xn.prototype,"fields",void 0),yn([(0,S.MZ)({attribute:"enable-top-results",reflect:!0,type:Boolean}),wn("design:type",Object)],xn.prototype,"enableTopResults",void 0),yn([(0,S.MZ)({attribute:"cache-enabled",reflect:!0,type:Boolean}),wn("design:type",Object)],xn.prototype,"cacheEnabled",void 0),yn([(0,S.MZ)({attribute:"cache-invalidation-period",reflect:!0,type:Number}),wn("design:type",Object)],xn.prototype,"cacheInvalidationPeriod",void 0),yn([(0,S.wk)(),wn("design:type",Object)],xn.prototype,"response",void 0),yn([(0,S.MZ)({attribute:!1}),wn("design:type",Object)],xn.prototype,"currentPage",void 0);(0,k.sN)(),(0,C.registerMgtPersonCardComponent)(),(0,U.E)(j.z1),q(),(0,M.N)("agenda",K),ae(),(0,U.E)(He,Ve.m9,ze.zi,j.z1),(0,ce.r)(),(0,k.sN)(),(0,M.N)("login",je),ht(),q(),(0,U.E)(Xt,ei,st.oR,ze.zi,ti.c,ii._0),(0,U.E)(pi,ki,ze.zi),(0,M.N)("arrow-options",Pi),(0,U.E)(pi,ki,ze.zi),(0,M.N)("dot-options",Ai),(0,ce.r)(),q(),ht(),(0,M.N)("planner",Mi),(0,U.E)(Qi,Ki,j.z1,eo,co,st.oR),(0,rt.i)(),(0,M.N)("teams-channel-picker",go),(0,U.E)(ti.c,vo,ze.zi),Mo(),(0,M.N)("todo",As),(0,Ts.R)(),(0,Ds.x)(),Mo(),(0,U.E)(Lo,ei),(0,rt.i)(),ae(),(0,M.N)("taxonomy-picker",Rs),(0,U.E)(Vs),(0,M.N)("theme-toggle",Ks),(0,U.E)(ln),(0,M.N)("search-box",pn),(0,U.E)(ii._0,ze.zi,mn,bn),(0,Ts.R)(),(0,k.sN)(),(0,M.N)("search-results",xn),(0,rt.i)(),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".entra-id-people-picker"),t=window;function i(){return t.getThemeManagerProperty("entra-id","theme")}if(t.getThemeManagerProperty&&i()){const o=()=>Zs(i(),e);o(),t.isSystemRespectingTheme&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{o()}))}}));const kn=window.location.href.replace("configureSecurity/","").replace("configure","").replace("pipeline-syntax/","").replace("manage/cloud/create","").replace("cloud/create","").replace("computer/createItem","");o.b.globalProvider=new x(`${kn}/GraphProxy`,(()=>{return e=void 0,t=void 0,o=function*(){return{[document.head.dataset.crumbHeader]:document.head.dataset.crumbValue}},new((i=void 0)||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}));var e,t,i,o}))})();
//# sourceMappingURL=azure-ad-bundle.js.map