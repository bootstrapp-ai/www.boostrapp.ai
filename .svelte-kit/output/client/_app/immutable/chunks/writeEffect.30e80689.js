import{s as c,b as t,r as y}from"./animationSetup.dbf9ad84.js";const e=async n=>c(Array.isArray(n)?n[t(0,n.length)]:n),f=async({currentNode:n,text:a},r)=>{y(n,r.parentElement,s=>{const i=n===s?"typing":"finished-typing";s.classList.add(i)});for(let s=0;s<=a.length;s++)a[s]==="<"&&(s=a.indexOf(">",s)),n.innerHTML=a.slice(0,s),await e(r.interval)};export{e as t,f as w};
