"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[759],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),k=i,g=p["".concat(s,".").concat(k)]||p[k]||u[k]||o;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(25773),i=(n(27378),n(35318));const o={sidebar_position:6,title:"Deleting your Kind cluster",description:"Deleting your local Kind-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},a="Deleting your local Kind-powered Kubernetes cluster",l={unversionedId:"onboarding/kubernetes/kind/deleting-your-kind-cluster",id:"onboarding/kubernetes/kind/deleting-your-kind-cluster",title:"Deleting your Kind cluster",description:"Deleting your local Kind-powered Kubernetes cluster.",source:"@site/docs/onboarding/kubernetes/kind/deleting-your-kind-cluster.md",sourceDirName:"onboarding/kubernetes/kind",slug:"/onboarding/kubernetes/kind/deleting-your-kind-cluster",permalink:"/docs/onboarding/kubernetes/kind/deleting-your-kind-cluster",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/onboarding/kubernetes/kind/deleting-your-kind-cluster.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"kind",permalink:"/docs/tags/kind"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Deleting your Kind cluster",description:"Deleting your local Kind-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},sidebar:"mySidebar",previous:{title:"Restarting your Kind cluster",permalink:"/docs/onboarding/kubernetes/kind/restarting-your-kind-cluster"},next:{title:"Custom Lima instance",permalink:"/docs/onboarding/kubernetes/creating-a-lima-instance-with-podman-desktop"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deleting-your-local-kind-powered-kubernetes-cluster"},"Deleting your local Kind-powered Kubernetes cluster"),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/onboarding/kubernetes/kind/creating-a-kind-cluster"},"You configured Podman"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"You installed Kind"),".")),(0,i.kt)("h4",{id:"procedure"},"Procedure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"),"."),(0,i.kt)("li",{parentName:"ol"},"Find the Kind cluster to delete."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("icon",{icon:"fa-solid fa-stop",size:"lg"})," to stop the cluster."),(0,i.kt)("li",{parentName:"ol"},"Once the cluster is stopped, click ",(0,i.kt)("icon",{icon:"fa-solid fa-trash",size:"lg"})," to delete it.")),(0,i.kt)("h4",{id:"verification"},"Verification"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"),", the deleted Kind cluster is not visible.")))}u.isMDXComponent=!0}}]);