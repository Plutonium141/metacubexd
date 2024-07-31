import{u as O,f as e,ah as X,i as t,ai as I,aj as Z,F as x,ak as J,al as K,am as u,an as U,ao as Y,_ as C,ap as W,aq as B,ar as V,O as ee,t as v,y as L,A as te,q as ae,b as re,x as le,Q as se,$ as k,C as ne,a2 as oe,a3 as ie,B as P,a5 as ce,a1 as j,a6 as de,a9 as ue,aa as ge,a0 as q,ae as he,ag as ve,k as fe}from"./index-BheD7jx9.js";import{c as me,g as be,a as pe,e as _e,f as A,r as $e}from"./index-7DPBCWDQ.js";var Se=v('<div class="flex flex-col gap-4"><div><select class="select select-bordered w-full"></select></div><div><select class="select select-bordered w-full"></select></div><div><select class="select select-bordered w-full">'),M=v("<option>");const xe=i=>{const[r]=O();return e(ee,{ref:o=>{var c;return(c=i.ref)==null?void 0:c.call(i,o)},get icon(){return e(X,{size:24})},get title(){return r("logsSettings")},get children(){var o=Se(),c=o.firstChild,d=c.firstChild,_=c.nextSibling,m=_.firstChild,w=_.nextSibling,b=w.firstChild;return t(c,e(I,{withDivider:!0,get children(){return r("tableSize")}}),d),d.addEventListener("change",a=>Z(a.target.value)),t(d,e(x,{get each(){return Object.values(J)},children:a=>(()=>{var s=M();return s.value=a,t(s,()=>r(a)),s})()})),t(_,e(I,{withDivider:!0,get children(){return r("logLevel")}}),m),m.addEventListener("change",a=>K(a.target.value)),t(m,e(x,{get each(){return[u.Info,u.Error,u.Warning,u.Debug,u.Silent]},children:a=>(()=>{var s=M();return s.value=a,t(s,()=>r(a)),s})()})),t(w,e(I,{withDivider:!0,get children(){return r("logMaxRows")}}),b),b.addEventListener("change",a=>U(parseInt(a.target.value))),t(b,e(x,{each:Y,children:a=>(()=>{var s=M();return s.value=a,t(s,a),s})()})),C(()=>d.value=W()),C(()=>m.value=B()),C(()=>b.value=V()),o}})};let G=1;const[Ce,we]=L([]),ye=te("logs",{level:B()}),[H,Le]=L(!1);ae(()=>{const i=ye();!i||H()||(we(r=>[{...i,seq:G},...r].slice(0,V())),G++)});const Fe=()=>({logs:Ce,paused:H,setPaused:Le});var Ie=v("<span>"),ke=v('<div class="flex h-full flex-col gap-2"><div class="join w-full"><input type=search class="input input-sm join-item input-primary flex-1 flex-shrink-0"></div><div class="overflow-x-auto whitespace-nowrap rounded-md bg-base-300"><table><thead class="sticky top-0 z-10"></thead><tbody>'),Me=v("<tr>"),Re=v('<th class=bg-base-200><div class="flex items-center"><div>'),Ee=v('<tr class="hover:!bg-primary hover:text-primary-content">'),De=v("<td class=py-2>");const N=(i,r,o,c)=>{const d=$e(i.getValue(r),o);return c({itemRank:d}),d.passed},Pe=()=>{const i=re();if(!le())return i("/setup",{replace:!0}),null;let r;const[o]=O(),[c,d]=L(""),{logs:_,paused:m,setPaused:w}=Fe(),[b,a]=se(L([]),{name:"logsTableSorting",storage:localStorage}),s=[{header:o("sequence"),accessorFn:n=>n.seq},{header:o("type"),accessorFn:n=>n.type,cell:({row:n})=>{const p=n.original.type;let g="";switch(p){case u.Error:g="text-error";break;case u.Warning:g="text-warning";break;case u.Info:g="text-info";break;case u.Debug:g="text-success";break}return(()=>{var $=Ie();return k($,g),t($,()=>`[${n.original.type}]`),$})()}},{header:o("payload"),accessorFn:n=>n.payload}],R=me({filterFns:{fuzzy:N},state:{get globalFilter(){return c()},get sorting(){return b()}},get data(){return _()},sortDescFirst:!0,columns:s,onGlobalFilterChange:d,onSortingChange:a,globalFilterFn:N,getFilteredRowModel:be(),getSortedRowModel:pe(),getCoreRowModel:_e()});return(()=>{var n=ke(),p=n.firstChild,g=p.firstChild,$=p.nextSibling,E=$.firstChild,D=E.firstChild,Q=D.nextSibling;return g.$$input=l=>d(l.target.value),t(p,e(P,{class:"btn-primary join-item btn-sm",onClick:()=>w(l=>!l),get icon(){return ne(()=>!!m())()?e(oe,{}):e(ie,{})}}),null),t(p,e(P,{class:"btn-primary join-item btn-sm",onClick:()=>r==null?void 0:r.showModal(),get icon(){return e(ce,{})}}),null),t(D,e(j,{get each(){return R.getHeaderGroups()},children:l=>{const f=l();return(()=>{var h=Me();return t(h,e(j,{get each(){return f.headers},children:y=>{const S=y();return(()=>{var z=Re(),T=z.firstChild,F=T.firstChild;return de(F,"click",S.column.getToggleSortingHandler(),!0),t(F,()=>A(S.column.columnDef.header,S.getContext())),t(T,()=>({asc:e(ue,{}),desc:e(ge,{})})[S.column.getIsSorted()]??null,null),C(()=>k(F,q(S.column.getCanSort()&&"cursor-pointer select-none","flex-1"))),z})()}})),h})()}})),t(Q,e(x,{get each(){return R.getRowModel().rows},children:l=>(()=>{var f=Ee();return t(f,e(x,{get each(){return l.getVisibleCells()},children:h=>(()=>{var y=De();return t(y,()=>A(h.column.columnDef.cell,h.getContext())),y})()})),f})()})),t(n,e(xe,{ref:l=>r=l}),null),C(l=>{var f=o("search"),h=q(he(W()),"table relative rounded-none");return f!==l.e&&ve(g,"placeholder",l.e=f),h!==l.t&&k(E,l.t=h),l},{e:void 0,t:void 0}),n})()};fe(["input","click"]);export{Pe as default};
