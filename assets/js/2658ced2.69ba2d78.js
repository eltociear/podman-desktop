"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7881],{35318:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>d});var n=o(27378);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(o),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return o?n.createElement(f,i(i({ref:t},l),{},{components:o})):n.createElement(f,i({ref:t},l))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},97833:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=o(25773),r=(o(27378),o(35318));const a={title:"Working with Compose",description:"With Podman Desktop, you can install a Compose engine and manage multi-container applications defined in Compose files.",sidebar_position:1,keywords:["compose"],tags:["compose"]},i="Working with Compose",p={unversionedId:"compose/index",id:"compose/index",title:"Working with Compose",description:"With Podman Desktop, you can install a Compose engine and manage multi-container applications defined in Compose files.",source:"@site/docs/compose/index.md",sourceDirName:"compose",slug:"/compose/",permalink:"/docs/compose/",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/compose/index.md",tags:[{label:"compose",permalink:"/docs/tags/compose"}],version:"current",sidebarPosition:1,frontMatter:{title:"Working with Compose",description:"With Podman Desktop, you can install a Compose engine and manage multi-container applications defined in Compose files.",sidebar_position:1,keywords:["compose"],tags:["compose"]},sidebar:"mySidebar",previous:{title:"OpenShift Local",permalink:"/docs/kubernetes/openshift/creating-an-openshift-local-cluster"},next:{title:"Setting up Compose",permalink:"/docs/compose/setting-up-compose"}},s={},c=[{value:"Procedure",id:"procedure",level:3}],l={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"working-with-compose"},"Working with Compose"),(0,r.kt)("p",null,"Podman Desktop supports the ",(0,r.kt)("a",{parentName:"p",href:"https://compose-spec.io"},"Compose specification"),", and can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set up a Compose engine."),(0,r.kt)("li",{parentName:"ul"},"Manage multi-container applications defined in Compose files.")),(0,r.kt)("h3",{id:"procedure"},"Procedure"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mermaid.live/edit#pako:eNp9Udtq20AQ_ZVhwOhFMZF8UbRvJS4ttCUlDhSKoKytiTJ4L2I1cusK_XvXclJ6o_O0e86Zs7NzBtz7mlBh5WazgR2LggES45v3dCSTKEhq2vVNkkIiT2RpQnQ4JDDCOJtVTtiSYUeVqxzEEhZD8MmHA7sGvrI8wa23re_owm9J5Mz0LSj46GurHWyoO4hvL4Jf6kXwD-LZE8g10-N_CTZ3t-9e3395e7d9iKIjB-8sOYGjDqx35rnlxUbBG5Kft0c2f1gquO_df_lXdQ1G78h0F-b3r8V5uGuNPoHtjfDV3jvRcfAAum0N77Wwd7ETU7QUrOY6ZjKcnSqc9l6hisfz5quY1Rh1uhe_Pbk9Kgk9pdi3tRbasG6CtqgetekiSjWLDx8uIU9Zp9hqh2rAb6iusuU8vynLYp1lZVmusqxI8YQqX6zmRZnneXa9LheLVbkcU_zuffTN5hGMlV0vb9ZFsVhOfp8n7jzI-AMypLOM"},(0,r.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/pako:eNp9Udtq20AQ_ZVhwOhFMZF8UbRvJS4ttCUlDhSKoKytiTJ4L2I1cusK_XvXclJ6o_O0e86Zs7NzBtz7mlBh5WazgR2LggES45v3dCSTKEhq2vVNkkIiT2RpQnQ4JDDCOJtVTtiSYUeVqxzEEhZD8MmHA7sGvrI8wa23re_owm9J5Mz0LSj46GurHWyoO4hvL4Jf6kXwD-LZE8g10-N_CTZ3t-9e3395e7d9iKIjB-8sOYGjDqx35rnlxUbBG5Kft0c2f1gquO_df_lXdQ1G78h0F-b3r8V5uGuNPoHtjfDV3jvRcfAAum0N77Wwd7ETU7QUrOY6ZjKcnSqc9l6hisfz5quY1Rh1uhe_Pbk9Kgk9pdi3tRbasG6CtqgetekiSjWLDx8uIU9Zp9hqh2rAb6iusuU8vynLYp1lZVmusqxI8YQqX6zmRZnneXa9LheLVbkcU_zuffTN5hGMlV0vb9ZFsVhOfp8n7jzI-AMypLOM?type=png",alt:null}))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"compose/setting-up-compose"},"You set up Compose"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You have a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/compose-spec/compose-spec/blob/master/spec.md#compose-file"},"Compose file"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"compose/running-compose"},"You run a Compose engine on the Compose file"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Compose engine starts the containers and services, and adds a label to each resource:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Container label: ",(0,r.kt)("inlineCode",{parentName:"li"},"com.docker.compose.project")),(0,r.kt)("li",{parentName:"ul"},"Service label: ",(0,r.kt)("inlineCode",{parentName:"li"},"com.docker.compose.service")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Podman Desktop detects the Compose labels, and displays the container group as a group of containers."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"img2",src:o(64228).Z,width:"1017",height:"742"})))))}m.isMDXComponent=!0},64228:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/compose-in-containers-view-b93a1a1667842a10985bf3203a035f3b.png"}}]);