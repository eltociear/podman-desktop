"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8065],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?i.createElement(k,o(o({ref:t},c),{},{components:n})):i.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(25773),a=(n(27378),n(35318));const r={sidebar_position:10,title:"Building and testing an image",description:"Building an image and testing it in Kind",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes"]},o="Building an image and testing it in Kind",l={unversionedId:"kubernetes/kind/building-an-image-and-testing-it-in-kind",id:"kubernetes/kind/building-an-image-and-testing-it-in-kind",title:"Building and testing an image",description:"Building an image and testing it in Kind",source:"@site/docs/kubernetes/kind/building-an-image-and-testing-it-in-kind.md",sourceDirName:"kubernetes/kind",slug:"/kubernetes/kind/building-an-image-and-testing-it-in-kind",permalink:"/docs/kubernetes/kind/building-an-image-and-testing-it-in-kind",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kubernetes/kind/building-an-image-and-testing-it-in-kind.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Building and testing an image",description:"Building an image and testing it in Kind",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes"]},sidebar:"mySidebar",previous:{title:"Working with your Kind cluster",permalink:"/docs/kubernetes/kind/working-with-your-local-kind-cluster"},next:{title:"Push an image to Kind",permalink:"/docs/kubernetes/kind/pushing-an-image-to-kind"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-an-image-and-testing-it-in-kind"},"Building an image and testing it in Kind"),(0,a.kt)("p",null,"With Podman Desktop, you can build an image with your container engine, and test it in your local Kind-powered Kubernetes cluster."),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/onboarding/containers"},"You onboarded a container engine"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/onboarding/kubernetes/kind"},"You onboarded a Kind cluster"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/kubernetes/kind/working-with-your-local-kind-cluster"},"You have set your Kubernetes context to your local Kind-powered Kubernetes cluster"),"."),(0,a.kt)("li",{parentName:"ul"},"A container definition file: ",(0,a.kt)("inlineCode",{parentName:"li"},"Containerfile")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile"),".")),(0,a.kt)("h4",{id:"procedure"},"Procedure"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build your image:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Images > ",(0,a.kt)("icon",{icon:"fa-solid fa-cube",size:"lg"})," Build an image"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Containerfile path"),": select your ",(0,a.kt)("inlineCode",{parentName:"li"},"Containerfile")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Build context directory"),": optionally, select a directory different from the directory containing your ",(0,a.kt)("inlineCode",{parentName:"li"},"Containerfile")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Image Name"),": enter your image name ",(0,a.kt)("inlineCode",{parentName:"li"},"my-custom-image"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cube",size:"lg"})," Build"),"."),(0,a.kt)("li",{parentName:"ol"},"Wait for the image build to finish."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Done")," to get back to the images list."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Push your image to your Kind cluster:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Search images"),": enter your image name ",(0,a.kt)("inlineCode",{parentName:"li"},"my-custom-image")," to find the image."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,a.kt)("icon",{icon:"fa-solid fa-ellipsis-v",size:"lg"})," Push image to Kind cluster"),"."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test your image by creating a container:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-play",size:"lg"}))," to open the ",(0,a.kt)("strong",{parentName:"li"},"Create a container from image")," dialog."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Container name"),": enter ",(0,a.kt)("inlineCode",{parentName:"li"},"my-custom-image-container"),"."),(0,a.kt)("li",{parentName:"ol"},"Review the parameters that Podman Desktop has detected from your image definition."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-play",size:"lg"})," Start Container")," to start the container in your container engine."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test your image and container on your Kind cluster:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Search containers"),": enter ",(0,a.kt)("inlineCode",{parentName:"li"},"my-custom-image-container")," to find the running container."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,a.kt)("icon",{icon:"fa-solid fa-rocket",size:"lg"})," Deploy to Kubernetes")," to open the ",(0,a.kt)("strong",{parentName:"li"},"Deploy generated pod to Kubernetes")," screen."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Pod Name"),": keep the proposed value ",(0,a.kt)("inlineCode",{parentName:"li"},"my-custom-image-container-pod"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Use Kubernetes Services"),": select ",(0,a.kt)("strong",{parentName:"li"},"Replace ",(0,a.kt)("inlineCode",{parentName:"strong"},"hostPort")," exposure on containers by Services. It is the recommended way to expose ports, as a cluster policy might prevent to use ",(0,a.kt)("inlineCode",{parentName:"strong"},"hostPort"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Expose service locally using Kubernetes Ingress"),": if your container is exposing at a port, select ",(0,a.kt)("strong",{parentName:"li"},"Create a Kubernetes ingress to get access to the ports that this pod exposes, at the default ingress controller location. Example: on a default Kind cluster created with Podman Desktop: ",(0,a.kt)("inlineCode",{parentName:"strong"},"http://localhost:9090"),". Requirements: your cluster has an ingress controller`"),"."),(0,a.kt)("li",{parentName:"ol"},"Optionally, if your container is exposing more than one port, select the port to expose."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Kubernetes namespaces"),": select ",(0,a.kt)("inlineCode",{parentName:"li"},"default"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-rocket",size:"lg"})," Deploy"),"."),(0,a.kt)("li",{parentName:"ol"},"Wait for the pod to reach the state: ",(0,a.kt)("strong",{parentName:"li"},"Phase: Running"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Done"),".")))),(0,a.kt)("h4",{id:"verification"},"Verification"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Pods")," screen lists the running ",(0,a.kt)("inlineCode",{parentName:"li"},"my-image-container-pod")," pod."),(0,a.kt)("li",{parentName:"ol"},"Click on the pod name to view details and logs."),(0,a.kt)("li",{parentName:"ol"},"Optionally, if your container is exposing a port, go to ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:9090"),": your application is running.")))}d.isMDXComponent=!0}}]);