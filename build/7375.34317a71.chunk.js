"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[7375],{67375:(ct,ge,o)=>{o.d(ge,{Z:()=>st});var e=o(67294),A=o(97132),u=o(68547),w=o(185),me=o(80831),q=o(49656),_=o(23724),fe=o(38683),ee=o(47292),ye=o(73825);const Ee=(n,a,s="en")=>{if(a&&typeof a=="number"){const l=a/24/60/60/1e3;return(0,ee.format)((0,ee.addDays)(new Date(n),l),"PPP",{locale:ye[s]})}return"Unlimited"};var I=o(53209);const he=I.Ry().shape({name:I.Z_(u.translatedErrors.string).required(u.translatedErrors.required),type:I.Z_(u.translatedErrors.string).oneOf(["read-only","full-access","custom"]).required(u.translatedErrors.required),description:I.Z_().nullable(),lifespan:I.Rx().integer().min(0).nullable().defined(u.translatedErrors.required)});var M=o(96486);const te=n=>{const a={allActionsIds:[],permissions:[]};return a.permissions=Object.keys(n).map(s=>({apiId:s,label:s.split("::")[1],controllers:(0,M.flatten)(Object.keys(n[s].controllers).map(l=>({controller:l,actions:(0,M.flatten)(n[s].controllers[l].map(i=>{const r=`${s}.${l}.${i}`;return s.includes("api::")&&a.allActionsIds.push(r),{action:i,actionId:r}}))})))})),a};var ne=o(67838),ae=o(49066),Z=o(29728),se=o(85018),Te=o(45697),t=o.n(Te);const U=({apiTokenName:n})=>{const{formatMessage:a}=(0,A.useIntl)();return(0,u.useFocusWhenNavigate)(),e.createElement(w.o,{"aria-busy":"true"},e.createElement(u.SettingsPageTitle,{name:"API Tokens"}),e.createElement(ne.T,{primaryAction:e.createElement(Z.z,{disabled:!0,startIcon:e.createElement(se.Z,null),type:"button",size:"L"},a({id:"global.save",defaultMessage:"Save"})),title:n||a({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),e.createElement(ae.D,null,e.createElement(u.LoadingIndicatorPage,null)))};U.defaultProps={apiTokenName:null},U.propTypes={apiTokenName:t().string};const Ce=U;var Ae=o(67109),k=o(7681),oe=o(30815),ve=o(48474);const F=({onRegenerate:n,idToRegenerate:a})=>{const{formatMessage:s}=(0,A.useIntl)(),[l,i]=(0,e.useState)(!1),{regenerateData:r,isLoadingConfirmation:p}=(0,ve.rW)(a,n),f=async()=>{r(),i(!1)};return e.createElement(e.Fragment,null,e.createElement(Z.z,{startIcon:e.createElement(oe.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>i(!0),name:"regenerate"},s({id:"Settings.apiTokens.regenerate",defaultMessage:"Regenerate"})),e.createElement(u.ConfirmDialog,{bodyText:{id:"Settings.apiTokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:e.createElement(oe.Z,null),isConfirmButtonLoading:p,isOpen:l,onToggleDialog:()=>i(!1),onConfirm:f,leftButtonText:{id:"Settings.apiTokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.apiTokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.apiTokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};F.defaultProps={onRegenerate(){}},F.propTypes={onRegenerate:t().func,idToRegenerate:t().oneOfType([t().number,t().string]).isRequired};const ie=F,K=({apiToken:n,setApiToken:a,canEditInputs:s,canRegenerate:l,isSubmitting:i})=>{const{formatMessage:r}=(0,A.useIntl)(),p=f=>{a({...n,accessKey:f})};return e.createElement(ne.T,{title:n?.name||r({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"}),primaryAction:s?e.createElement(k.K,{horizontal:!0,spacing:2},l&&n?.id&&e.createElement(ie,{onRegenerate:p,idToRegenerate:n?.id}),e.createElement(Z.z,{disabled:i,loading:i,startIcon:e.createElement(se.Z,null),type:"submit",size:"S"},r({id:"global.save",defaultMessage:"Save"}))):l&&n?.id&&e.createElement(ie,{onRegenerate:p,idToRegenerate:n?.id}),navigationAction:e.createElement(u.Link,{startIcon:e.createElement(Ae.Z,null),to:"/settings/api-tokens"},r({id:"global.back",defaultMessage:"Back"}))})};K.propTypes={apiToken:t().shape({id:t().oneOfType([t().number,t().string]),type:t().string,lifespan:t().oneOfType([t().number,t().string]),name:t().string,accessKey:t().string,permissions:t().array,description:t().string,createdAt:t().string}),canEditInputs:t().bool.isRequired,canRegenerate:t().bool.isRequired,setApiToken:t().func.isRequired,isSubmitting:t().bool.isRequired},K.defaultProps={apiToken:void 0};const ke=K;var Se=o(12028),Re=o(65186),xe=o(74855),Pe=o(69427);const W=({apiToken:n})=>{const{formatMessage:a}=(0,A.useIntl)(),s=(0,u.useNotification)(),{trackUsage:l}=(0,u.useTracking)(),i=(0,e.useRef)(l);return e.createElement(u.ContentBox,{endAction:n&&e.createElement("span",{style:{alignSelf:"start"}},e.createElement(xe.CopyToClipboard,{onCopy:()=>{i.current("didCopyTokenKey"),s({type:"success",message:{id:"Settings.apiTokens.notification.copied"}})},text:n},e.createElement(Se.h,{label:a({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),noBorder:!0,icon:e.createElement(Re.Z,null),style:{padding:0,height:"1rem"}}))),title:n||a({id:"Settings.apiTokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:a(n?{id:"Settings.apiTokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.apiTokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:e.createElement(Pe.Z,null),iconBackground:"neutral100"})};W.defaultProps={apiToken:null},W.propTypes={apiToken:t().string};const Ie=W;var S=o(41580),$=o(11276),R=o(74571),re=o(91216),x=o(82562),Me=o(64256),be=o(16364),C=o(75515);const H=({errors:n,onChange:a,canEditInputs:s,isCreating:l,values:i,apiToken:r,onDispatch:p,setHasChangedPermissions:f})=>{const{formatMessage:d}=(0,A.useIntl)(),[v]=(0,u.usePersistentState)("strapi-admin-language","en"),b=({target:{value:y}})=>{f(!1),y==="full-access"&&p({type:"SELECT_ALL_ACTIONS"}),y==="read-only"&&p({type:"ON_CHANGE_READ_ONLY"})};return e.createElement(S.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(k.K,{spacing:4},e.createElement(C.Z,{variant:"delta",as:"h2"},d({id:"global.details",defaultMessage:"Details"})),e.createElement($.r,{gap:5},e.createElement(R.P,{key:"name",col:6,xs:12},e.createElement(be.o,{name:"name",error:n.name?d(n.name?.id?n.name:{id:n.name,defaultMessage:n.name}):null,label:d({id:"Settings.apiTokens.form.name",defaultMessage:"Name"}),onChange:a,value:i.name,disabled:!s,required:!0})),e.createElement(R.P,{key:"description",col:6,xs:12},e.createElement(Me.g,{label:d({id:"Settings.apiTokens.form.description",defaultMessage:"Description"}),name:"description",error:n.description?d(n.description?.id?n.description:{id:n.description,defaultMessage:n.description}):null,onChange:a,disabled:!s},i.description)),e.createElement(R.P,{key:"lifespan",col:6,xs:12},e.createElement(re.P,{name:"lifespan",label:d({id:"Settings.apiTokens.form.duration",defaultMessage:"Token duration"}),value:i.lifespan!==null?i.lifespan:"0",error:n.lifespan?d(n.lifespan?.id?n.lifespan:{id:n.lifespan,defaultMessage:n.lifespan}):null,onChange:y=>{a({target:{name:"lifespan",value:y}})},required:!0,disabled:!l,placeholder:"Select"},e.createElement(x.W,{value:"604800000"},d({id:"Settings.apiTokens.duration.7-days",defaultMessage:"7 days"})),e.createElement(x.W,{value:"2592000000"},d({id:"Settings.apiTokens.duration.30-days",defaultMessage:"30 days"})),e.createElement(x.W,{value:"7776000000"},d({id:"Settings.apiTokens.duration.90-days",defaultMessage:"90 days"})),e.createElement(x.W,{value:"0"},d({id:"Settings.apiTokens.duration.unlimited",defaultMessage:"Unlimited"}))),e.createElement(C.Z,{variant:"pi",textColor:"neutral600"},!l&&`${d({id:"Settings.apiTokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${Ee(r?.createdAt,parseInt(i.lifespan,10),v)}`)),e.createElement(R.P,{key:"type",col:6,xs:12},e.createElement(re.P,{name:"type",label:d({id:"Settings.apiTokens.form.type",defaultMessage:"Token type"}),value:i?.type,error:n.type?d(n.type?.id?n.type:{id:n.type,defaultMessage:n.type}):null,onChange:y=>{b({target:{value:y}}),a({target:{name:"type",value:y}})},placeholder:"Select",required:!0,disabled:!s},e.createElement(x.W,{value:"read-only"},d({id:"Settings.apiTokens.types.read-only",defaultMessage:"Read-only"})),e.createElement(x.W,{value:"full-access"},d({id:"Settings.apiTokens.types.full-access",defaultMessage:"Full access"})),e.createElement(x.W,{value:"custom"},d({id:"Settings.apiTokens.types.custom",defaultMessage:"Custom"})))))))};H.propTypes={errors:t().shape({name:t().string,description:t().string,lifespan:t().string,type:t().string}),onChange:t().func.isRequired,canEditInputs:t().bool.isRequired,values:t().shape({name:t().string,description:t().string,lifespan:t().oneOfType([t().number,t().string]),type:t().string}).isRequired,isCreating:t().bool.isRequired,apiToken:t().shape({id:t().oneOfType([t().number,t().string]),type:t().string,lifespan:t().string,name:t().string,accessKey:t().string,permissions:t().array,description:t().string,createdAt:t().string}),onDispatch:t().func.isRequired,setHasChangedPermissions:t().func.isRequired},H.defaultProps={errors:{},apiToken:{}};const Oe=H;var Le=o(48734),Ne=o(74756),De=o(63081),le=o(36213),Be=o(11047),Ze=o(78114),D=o(27821);const ce=(0,e.createContext)({}),de=({children:n,...a})=>e.createElement(ce.Provider,{value:a},n),G=()=>(0,e.useContext)(ce);de.propTypes={children:t().node.isRequired};const ue=D.css`
  background: ${n=>n.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Ue=(0,D.default)(S.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${n=>n.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${n=>n.isActive&&ue}
  &:hover {
    ${ue}
  }
`,Fe=D.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:n})=>n.colors.neutral150};
`,V=({controllers:n,label:a,orderNumber:s,disabled:l,onExpanded:i,indexExpandendCollapsedContent:r})=>{const{value:{onChangeSelectAll:p,onChange:f,selectedActions:d,setSelectedAction:v,selectedAction:b}}=G(),[y,B]=(0,e.useState)(!1),O=()=>{B(g=>!g),i(s)};(0,e.useEffect)(()=>{r!==null&&r!==s&&y&&B(!1)},[r,s,y]);const m=g=>g===b;return e.createElement(Le.U,{expanded:y,onToggle:O,variant:s%2?"primary":"secondary"},e.createElement(Ne.B,{title:(0,M.capitalize)(a)}),e.createElement(De.v,null,n?.map(g=>{const L=g.actions.every(E=>d.includes(E.actionId)),Q=g.actions.some(E=>d.includes(E.actionId));return e.createElement(S.x,{key:`${a}.${g?.controller}`},e.createElement(Be.k,{justifyContent:"space-between",alignItems:"center",padding:4},e.createElement(S.x,{paddingRight:4},e.createElement(C.Z,{variant:"sigma",textColor:"neutral600"},g?.controller)),e.createElement(Fe,null),e.createElement(S.x,{paddingLeft:4},e.createElement(le.X,{value:L,indeterminate:!L&&Q,onValueChange:()=>{p({target:{value:[...g.actions]}})},disabled:l},"Select all"))),e.createElement($.r,{gap:4,padding:4},g?.actions&&g?.actions.map(E=>e.createElement(R.P,{col:6,key:E.actionId},e.createElement(Ue,{isActive:m(E.actionId),padding:2,hasRadius:!0},e.createElement(le.X,{value:d.includes(E.actionId),name:E.actionId,onValueChange:()=>{f({target:{value:E.actionId}})},disabled:l},E.action),e.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>v({target:{value:E.actionId}}),style:{display:"inline-flex",alignItems:"center"}},e.createElement(Ze.Z,null)))))))})))};V.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},V.propTypes={controllers:t().array,orderNumber:t().number,label:t().string.isRequired,disabled:t().bool,onExpanded:t().func,indexExpandendCollapsedContent:t().number};const Ke=V,z=({section:n,...a})=>{const[s,l]=(0,e.useState)(null),i=r=>l(r);return e.createElement(S.x,{padding:4,background:"neutral0"},n&&n.map((r,p)=>e.createElement(Ke,{key:r.apiId,label:r.label,controllers:r.controllers,orderNumber:p,indexExpandendCollapsedContent:s,onExpanded:i,name:r.apiId,...a})))};z.defaultProps={section:null},z.propTypes={section:t().arrayOf(t().object)};const We=z;var $e=o(35161),He=o.n($e),Ge=o(13217),Ve=o.n(Ge);const ze=n=>{switch(n){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Ye=(0,D.default)(S.x)`
  margin: -1px;
  border-radius: ${({theme:n})=>n.spaces[1]} 0 0 ${({theme:n})=>n.spaces[1]};
`;function Y({route:n}){const{formatMessage:a}=(0,A.useIntl)(),{method:s,handler:l,path:i}=n,r=i?Ve()(i.split("/")):[],[p="",f=""]=l?l.split("."):[],d=ze(n.method);return e.createElement(k.K,{spacing:2},e.createElement(C.Z,{variant:"delta",as:"h3"},a({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",e.createElement("span",null,p),e.createElement(C.Z,{variant:"delta",textColor:"primary600"},".",f)),e.createElement(k.K,{horizontal:!0,hasRadius:!0,background:"neutral0",borderColor:"neutral200",spacing:0},e.createElement(Ye,{background:d.background,borderColor:d.border,padding:2},e.createElement(C.Z,{fontWeight:"bold",textColor:d.text},s)),e.createElement(S.x,{paddingLeft:2,paddingRight:2},He()(r,v=>e.createElement(C.Z,{key:v,textColor:v.includes(":")?"neutral600":"neutral900"},"/",v)))))}Y.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},Y.propTypes={route:t().shape({handler:t().string,method:t().string,path:t().string})};const je=Y,Qe=()=>{const{value:{selectedAction:n,routes:a}}=G(),{formatMessage:s}=(0,A.useIntl)(),l=n?.split(".")[0];return e.createElement(R.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},n?e.createElement(k.K,{spacing:2},a[l]?.map(i=>i.config.auth?.scope?.includes(n)||i.handler===n?e.createElement(je,{key:i.handler,route:i}):null)):e.createElement(k.K,{spacing:2},e.createElement(C.Z,{variant:"delta",as:"h3"},s({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})),e.createElement(C.Z,{as:"p",textColor:"neutral600"},s({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))},Xe=({...n})=>{const{value:{data:a}}=G(),{formatMessage:s}=(0,A.useIntl)();return e.createElement($.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},e.createElement(R.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(k.K,{spacing:2},e.createElement(C.Z,{variant:"delta",as:"h2"},s({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})),e.createElement(C.Z,{as:"p",textColor:"neutral600"},s({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."}))),a?.permissions&&e.createElement(We,{section:a?.permissions,...n})),e.createElement(Qe,null))},Je=(0,e.memo)(Xe),j=({apiToken:n,errors:a,onChange:s,canEditInputs:l,isCreating:i,values:r,onDispatch:p,setHasChangedPermissions:f})=>e.createElement(ae.D,null,e.createElement(k.K,{spacing:6},Boolean(n?.name)&&e.createElement(Ie,{apiToken:n?.accessKey}),e.createElement(Oe,{errors:a,onChange:s,canEditInputs:l,isCreating:i,values:r,apiToken:n,onDispatch:p,setHasChangedPermissions:f}),e.createElement(Je,{disabled:!l||r?.type==="read-only"||r?.type==="full-access"})));j.propTypes={errors:t().shape({name:t().string,description:t().string,lifespan:t().string,type:t().string}),apiToken:t().shape({id:t().oneOfType([t().number,t().string]),type:t().string,lifespan:t().oneOfType([t().number,t().string]),name:t().string,accessKey:t().string,permissions:t().array,description:t().string,createdAt:t().string}),onChange:t().func.isRequired,canEditInputs:t().bool.isRequired,isCreating:t().bool.isRequired,values:t().shape({name:t().string,description:t().string,lifespan:t().string,type:t().string}).isRequired,onDispatch:t().func.isRequired,setHasChangedPermissions:t().func.isRequired},j.defaultProps={errors:{},apiToken:{}};const we=j;var qe=o(87751);const _e=(n,a=[])=>({...n,selectedAction:null,routes:[],selectedActions:[],data:te(a)});var et=o(18172);const tt={data:{},selectedActions:[]},nt=(n,a)=>(0,et.default)(n,s=>{switch(a.type){case"ON_CHANGE":{s.selectedActions.includes(a.value)?(0,M.pull)(s.selectedActions,a.value):s.selectedActions.push(a.value);break}case"SELECT_ALL_IN_PERMISSION":{a.value.every(i=>s.selectedActions.includes(i.actionId))?a.value.forEach(i=>{(0,M.pull)(s.selectedActions,i.actionId)}):a.value.forEach(i=>{s.selectedActions.push(i.actionId)});break}case"SELECT_ALL_ACTIONS":{s.selectedActions=[...s.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const l=s.data.allActionsIds.filter(i=>i.includes("find")||i.includes("findOne"));s.selectedActions=[...l];break}case"UPDATE_PERMISSIONS_LAYOUT":{s.data=te(a.value);break}case"UPDATE_ROUTES":{s.routes={...a.value};break}case"UPDATE_PERMISSIONS":{s.selectedActions=[...a.value];break}case"SET_SELECTED_ACTION":{s.selectedAction=a.value;break}default:return s}}),at="Name already taken",st=()=>{(0,u.useFocusWhenNavigate)();const{formatMessage:n}=(0,A.useIntl)(),{lockApp:a,unlockApp:s}=(0,u.useOverlayBlocker)(),l=(0,u.useNotification)(),i=(0,q.useHistory)(),[r,p]=(0,e.useState)(i.location.state?.apiToken.accessKey?{...i.location.state.apiToken}:null),{trackUsage:f}=(0,u.useTracking)(),d=(0,e.useRef)(f),{setCurrentStep:v}=(0,u.useGuidedTour)(),{allowedActions:{canCreate:b,canUpdate:y,canRegenerate:B}}=(0,u.useRBAC)(qe.Z.settings["api-tokens"]),[O,m]=(0,e.useReducer)(nt,tt,c=>_e(c,{})),{params:{id:g}}=(0,q.useRouteMatch)("/settings/api-tokens/:id"),{get:L,post:Q,put:E}=(0,u.useFetchClient)(),T=g==="create";(0,_.useQuery)("content-api-permissions",async()=>{const[c,P]=await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async N=>{const{data:h}=await L(N);return h.data}));m({type:"UPDATE_PERMISSIONS_LAYOUT",value:c}),m({type:"UPDATE_ROUTES",value:P}),r&&(r?.type==="read-only"&&m({type:"ON_CHANGE_READ_ONLY"}),r?.type==="full-access"&&m({type:"SELECT_ALL_ACTIONS"}),r?.type==="custom"&&m({type:"UPDATE_PERMISSIONS",value:r?.permissions}))},{onError(){l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,e.useEffect)(()=>{d.current(T?"didAddTokenFromList":"didEditTokenFromList")},[T]);const{status:ot}=(0,_.useQuery)(["api-token",g],async()=>{const{data:{data:c}}=await L(`/admin/api-tokens/${g}`);return p({...c}),c?.type==="read-only"&&m({type:"ON_CHANGE_READ_ONLY"}),c?.type==="full-access"&&m({type:"SELECT_ALL_ACTIONS"}),c?.type==="custom"&&m({type:"UPDATE_PERMISSIONS",value:c?.permissions}),c},{enabled:!T&&!r,onError(){l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),it=async(c,P)=>{d.current(T?"willCreateToken":"willEditToken"),a();const N=c.lifespan&&parseInt(c.lifespan,10)&&c.lifespan!=="0"?parseInt(c.lifespan,10):null;try{const{data:{data:h}}=T?await Q("/admin/api-tokens",{...c,lifespan:N,permissions:c.type==="custom"?O.selectedActions:null}):await E(`/admin/api-tokens/${g}`,{name:c.name,description:c.description,type:c.type,permissions:c.type==="custom"?O.selectedActions:null});T&&(i.replace(`/settings/api-tokens/${h.id}`,{apiToken:h}),v("apiTokens.success")),s(),p({...h}),l({type:"success",message:n(T?{id:"notification.success.tokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.tokenedited",defaultMessage:"API Token successfully edited"})}),d.current(T?"didCreateToken":"didEditToken",{type:r.type})}catch(h){const J=(0,fe.Iz)(h.response.data);P.setErrors(J),h?.response?.data?.error?.message===at?l({type:"warning",message:h.response.data.message||"notification.error.tokennamenotunique"}):l({type:"warning",message:h?.response?.data?.message||"notification.error"}),s()}},[rt,X]=(0,e.useState)(!1),lt={...O,onChange:({target:{value:c}})=>{X(!0),m({type:"ON_CHANGE",value:c})},onChangeSelectAll:({target:{value:c}})=>{X(!0),m({type:"SELECT_ALL_IN_PERMISSION",value:c})},setSelectedAction:({target:{value:c}})=>{m({type:"SET_SELECTED_ACTION",value:c})}},pe=y&&!T||b&&T;return!T&&!r&&ot!=="success"?e.createElement(Ce,{apiTokenName:r?.name}):e.createElement(de,{value:lt},e.createElement(w.o,null,e.createElement(u.SettingsPageTitle,{name:"API Tokens"}),e.createElement(me.Formik,{validationSchema:he,validateOnChange:!1,initialValues:{name:r?.name||"",description:r?.description||"",type:r?.type,lifespan:r?.lifespan?r.lifespan.toString():r?.lifespan},enableReinitialize:!0,onSubmit:(c,P)=>it(c,P)},({errors:c,handleChange:P,isSubmitting:N,values:h,setFieldValue:J})=>(rt&&h?.type!=="custom"&&J("type","custom"),e.createElement(u.Form,null,e.createElement(ke,{apiToken:r,setApiToken:p,canEditInputs:pe,canRegenerate:B,isSubmitting:N}),e.createElement(we,{apiToken:r,errors:c,onChange:P,canEditInputs:pe,isCreating:T,values:h,onDispatch:m,setHasChangedPermissions:X}))))))}}}]);
