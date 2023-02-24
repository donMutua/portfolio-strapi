"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[3677],{14928:(M,d,t)=>{t.r(d),t.d(d,{default:()=>x});var e=t(67294),n=t(68547),r=t(15482),i=t(97132),c=t(87751),m=t(14087),s=t(17034),o=t(67838),E=t(49066),P=t(185),u=t(75515),T=t(11057),C=t(63985),v=t(47144),g=t(18374),L=t(550),I=t(23724);const N=async()=>{const{get:l}=(0,n.getFetchClient)(),{data:a}=await l("/admin/plugins");return a},A=l=>{const a=(0,n.useNotification)();return(0,I.useQuery)("list-enabled-plugins",()=>N(),{onSuccess(){l&&l()},onError(){a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},D=()=>{const{formatMessage:l}=(0,i.useIntl)(),{notifyStatus:a}=(0,m.G)();(0,n.useFocusWhenNavigate)();const h=l({id:"global.plugins",defaultMessage:"Plugins"}),B=()=>{a(l({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:h}))},{status:p,data:y}=A(B);return p!=="success"&&p!=="error"?e.createElement(s.A,null,e.createElement(P.o,{"aria-busy":!0},e.createElement(n.LoadingIndicatorPage,null))):e.createElement(s.A,null,e.createElement(P.o,null,e.createElement(o.T,{title:h,subtitle:l({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),e.createElement(E.D,null,e.createElement(T.i,{colCount:2,rowCount:y?.plugins?.length??0+1},e.createElement(C.h,null,e.createElement(v.Tr,null,e.createElement(g.Th,null,e.createElement(u.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),e.createElement(g.Th,null,e.createElement(u.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"description"}))))),e.createElement(L.p,null,y.plugins.map(({name:f,displayName:O,description:W})=>e.createElement(v.Tr,{key:f},e.createElement(g.Td,null,e.createElement(u.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},l({id:`global.plugins.${f}`,defaultMessage:O}))),e.createElement(g.Td,null,e.createElement(u.Z,{textColor:"neutral800"},l({id:`global.plugins.${f}.description`,defaultMessage:W}))))))))))},x=()=>{const{formatMessage:l}=(0,i.useIntl)(),a=l({id:"global.plugins",defaultMessage:"Plugins"});return e.createElement(n.CheckPagePermissions,{permissions:c.Z.marketplace.main},e.createElement(r.Helmet,{title:a}),e.createElement(D,null))}},17034:(M,d,t)=>{t.d(d,{A:()=>s});var e=t(67294),n=t(45697),r=t(27821),i=t(41580);const c=(0,r.default)(i.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:o})=>o?"auto 1fr":"1fr"};
`,m=(0,r.default)(i.x)`
  overflow-x: hidden;
`,s=({sideNav:o,children:E})=>e.createElement(c,{hasSideNav:Boolean(o)},o,e.createElement(m,{paddingBottom:10},E));s.defaultProps={sideNav:void 0},s.propTypes={children:n.node.isRequired,sideNav:n.node}}}]);
