import{_ as e}from"./preload-helper-41c905a7.js";const m=o=>{var t;return((t=o.match(/([\w-]+)\.(svelte\.md|md|svx)/i))==null?void 0:t[1])??null};async function _({params:o}){const t=Object.assign({"/src/blog-posts/first.md":()=>e(()=>import("./first-e14ff1c5.js"),["./first-e14ff1c5.js","./index-52872fdd.js"],import.meta.url),"/src/blog-posts/second.md":()=>e(()=>import("./second-9b4eea9b.js"),["./second-9b4eea9b.js","./index-52872fdd.js"],import.meta.url),"/src/blog-posts/third.md":()=>e(()=>import("./third-8d22c438.js"),["./third-8d22c438.js","./index-52872fdd.js"],import.meta.url)});let r={};for(const[a,l]of Object.entries(t))if(m(a)===o.slug){r={path:a,resolver:l};break}const s=await r.resolver();return{frontmatter:s.metadata,component:s.default}}const n=Object.freeze(Object.defineProperty({__proto__:null,load:_},Symbol.toStringTag,{value:"Module"}));export{n as _,_ as l};
