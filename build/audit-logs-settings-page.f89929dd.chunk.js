"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[2812],{94699:(Y,P,t)=>{t.d(P,{Z:()=>O});var e=t(67294),l=t(45697),p=t.n(l),E=t(97132),g=t(29728),b=t(41580),s=t(89597),M=t(68547),v=t.n(M);const y=({displayedFilters:S})=>{const[T,I]=(0,e.useState)(!1),{formatMessage:U}=(0,E.useIntl)(),D=(0,e.useRef)(),F=()=>{I(R=>!R)};return e.createElement(e.Fragment,null,e.createElement(b.x,{paddingTop:1,paddingBottom:1},e.createElement(g.z,{variant:"tertiary",ref:D,startIcon:e.createElement(s.Z,null),onClick:F,size:"S"},U({id:"app.utils.filters",defaultMessage:"Filters"})),T&&e.createElement(M.FilterPopoverURLQuery,{displayedFilters:S,isVisible:T,onToggle:F,source:D})),e.createElement(M.FilterListURLQuery,{filtersSchema:S}))};y.propTypes={displayedFilters:p().arrayOf(p().shape({name:p().string.isRequired,metadatas:p().shape({label:p().string}),fieldSchema:p().shape({type:p().string})})).isRequired};const O=y},35915:(Y,P,t)=>{t.r(P),t.d(P,{default:()=>ue});var e=t(67294),l=t(68547),p=t(87751),E=t(97132),g=t(28702),b=t(45697),s=t.n(b),M=t(12028),v=t(11047),y=t(75515),O=t(550),S=t(47144),T=t(18374),I=t(8934),U=t(51196),D=t.n(U);const R=()=>{const{formatDate:a}=(0,E.useIntl)();return d=>{const n=D()(d),o=a(n,{dateStyle:"long"}),u=a(n,{timeStyle:"medium",hourCycle:"h24"});return`${o}, ${u}`}},K={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},B=a=>K[a]||a,x=({headers:a,rows:r,onOpenModal:d})=>{const{formatMessage:n}=(0,E.useIntl)(),o=R(),u=({type:i,value:m,model:c})=>i==="date"?o(m):i==="action"?n({id:`Settings.permissions.auditLogs.${m}`,defaultMessage:B(m)},{model:c}):m||"-";return e.createElement(O.p,null,r.map(i=>e.createElement(S.Tr,{key:i.id,...(0,l.onRowClick)({fn:()=>d(i.id)})},a.map(({key:m,name:c,cellFormatter:f})=>e.createElement(T.Td,{key:m},e.createElement(y.Z,{textColor:"neutral800"},u({type:m,value:f?f(i[c]):i[c],model:i.payload?.model})))),e.createElement(T.Td,{...l.stopPropagation},e.createElement(v.k,{justifyContent:"end"},e.createElement(M.h,{onClick:()=>d(i.id),"aria-label":n({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${i.action} action`}),noBorder:!0,icon:e.createElement(I.default,null)}))))))};x.defaultProps={rows:[]},x.propTypes={headers:s().array.isRequired,rows:s().array,onOpenModal:s().func.isRequired};const G=x,X=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:a=>a?a.fullname:""}];var Q=t(41580);const V=({pagination:a})=>e.createElement(Q.x,{paddingTop:4},e.createElement(v.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(l.PageSizeURLQuery,null),e.createElement(l.PaginationURLQuery,{pagination:a})));V.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},V.propTypes={pagination:s().shape({page:s().number,pageCount:s().number,pageSize:s().number,total:s().number})};const w=V;var $=t(23724),k=t(42866),q=t(24969),_=t(59946),Z=t(2407),ee=t(88655),te=t(11276),ae=t(74432);const j=({actionLabel:a,actionName:r})=>e.createElement(v.k,{direction:"column",alignItems:"baseline",gap:1},e.createElement(y.Z,{textColor:"neutral600",variant:"sigma"},a),e.createElement(y.Z,{textColor:"neutral600"},r));j.propTypes={actionLabel:s().string.isRequired,actionName:s().string.isRequired};const A=j,N=({status:a,data:r,formattedDate:d})=>{const{formatMessage:n}=(0,E.useIntl)();if(a==="loading")return e.createElement(v.k,{padding:7,justifyContent:"center",alignItems:"center"},e.createElement(ee.a,null,"Loading content..."));const{action:o,user:u,payload:i}=r;return e.createElement(e.Fragment,null,e.createElement(Q.x,{marginBottom:3},e.createElement(y.Z,{variant:"delta",id:"title"},n({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"}))),e.createElement(te.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0},e.createElement(A,{actionLabel:n({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:n({id:`Settings.permissions.auditLogs.${o}`,defaultMessage:B(o)},{model:i?.model})}),e.createElement(A,{actionLabel:n({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:d}),e.createElement(A,{actionLabel:n({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:u?.fullname||"-"}),e.createElement(A,{actionLabel:n({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:u?.id.toString()||"-"})),e.createElement(ae.V,{value:JSON.stringify(i,null,2),disabled:!0,label:n({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})}))};N.defaultProps={data:{}},N.propTypes={status:s().oneOf(["idle","loading","error","success"]).isRequired,data:s().shape({action:s().string,date:s().string,payload:s().object,user:s().object}),formattedDate:s().string.isRequired};const se=N,z=({handleClose:a,logId:r})=>{const{get:d}=(0,l.useFetchClient)(),n=(0,l.useNotification)(),o=async f=>{const{data:L}=await d(`/admin/audit-logs/${f}`);if(!L)throw new Error("Audit log not found");return L},{data:u,status:i}=(0,$.useQuery)(["audit-log",r],()=>o(r),{onError(){n({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),a()}}),m=R(),c=u?m(u.date):"";return e.createElement(k.P,{onClose:a,labelledBy:"title"},e.createElement(q.x,null,e.createElement(Z.O,{label:c,id:"title"},e.createElement(Z.$,null,c))),e.createElement(_.f,null,e.createElement(se,{status:i,data:u,formattedDate:c})))};z.propTypes={handleClose:s().func.isRequired,logId:s().string.isRequired};const ne=z;var oe=t(94699);const W=({value:a,options:r,onChange:d})=>{const{formatMessage:n}=(0,E.useIntl)(),o=n({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return e.createElement(g.Combobox,{"aria-label":o,value:a,onChange:d},r.map(({label:u,customValue:i})=>e.createElement(g.ComboboxOption,{key:i,value:i},u)))};W.defaultProps={value:null},W.propTypes={value:s().string,options:s().arrayOf(s().shape({label:s().string.isRequired,customValue:s().string.isRequired}).isRequired).isRequired,onChange:s().func.isRequired};const H=W,J=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],ie=({formatMessage:a,users:r})=>{const d=Object.keys(K).map(o=>({label:a({id:`Settings.permissions.auditLogs.${o}`,defaultMessage:B(o)},{model:void 0}),customValue:o})),n=r&&r.results.map(o=>({label:a({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:o.firstname,lastname:o.lastname}),customValue:o.id.toString()}));return[{name:"action",metadatas:{customOperators:J,label:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),options:d,customInput:H},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}},{name:"user",metadatas:{customOperators:J,label:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:n,customInput:H},fieldSchema:{type:"relation",mainField:{name:"id"}}}]};var re=t(49656);const le=({canRead:a})=>{const{get:r}=(0,l.useFetchClient)(),{search:d}=(0,re.useLocation)(),n=(0,l.useNotification)(),o=async({queryKey:C})=>{const ce=C[1],{data:ge}=await r(`/admin/audit-logs${ce}`);return ge},u=async()=>{const{data:C}=await r("/admin/users");return C},i={enabled:a,keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:C=>n({type:"warning",message:C.message})},{data:m,isLoading:c,isError:f}=(0,$.useQuery)(["auditLogs",d],o,i),{data:L,isError:h}=(0,$.useQuery)(["auditLogsUsers"],u,{...i,staleTime:2*(1e3*60)}),me=f||h;return{auditLogs:m,users:L?.data,isLoading:c,hasError:me}},de=()=>{const{formatMessage:a}=(0,E.useIntl)(),{allowedActions:{canRead:r}}=(0,l.useRBAC)(p.Z.settings.auditLogs),[{query:d},n]=(0,l.useQueryParams)(),{auditLogs:o,users:u,isLoading:i,hasError:m}=le({canRead:r});(0,l.useFocusWhenNavigate)();const c=ie({formatMessage:a,users:u}),f=a({id:"global.auditLogs",defaultMessage:"Audit Logs"}),L=X.map(h=>({...h,metadatas:{...h.metadatas,label:a(h.metadatas.label)}}));return m?e.createElement(g.Layout,null,e.createElement(g.ContentLayout,null,e.createElement(g.Box,{paddingTop:8},e.createElement(l.AnErrorOccurred,null)))):e.createElement(g.Main,{"aria-busy":i},e.createElement(l.SettingsPageTitle,{name:f}),e.createElement(g.HeaderLayout,{title:f,subtitle:a({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),e.createElement(g.ActionLayout,{startActions:e.createElement(oe.Z,{displayedFilters:c})}),e.createElement(g.ContentLayout,{canRead:r},e.createElement(l.DynamicTable,{contentType:"Audit logs",headers:L,rows:o?.results||[],withBulkActions:!0,isLoading:i},e.createElement(G,{headers:L,rows:o?.results||[],onOpenModal:h=>n({id:h})})),e.createElement(w,{pagination:o?.pagination})),d?.id&&e.createElement(ne,{handleClose:()=>n({id:null},"remove"),logId:d.id}))},ue=()=>e.createElement(l.CheckPagePermissions,{permissions:p.Z.settings.auditLogs.main},e.createElement(de,null))}}]);
