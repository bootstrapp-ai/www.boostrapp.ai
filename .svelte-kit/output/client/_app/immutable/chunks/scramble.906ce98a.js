import{b as m,a as f,r as g,s as R}from"./animationSetup.dbf9ad84.js";const y=(s,o)=>{const e=o/3;return s.map(()=>m(e,o-100))},D=()=>{const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),o=s.length,e=m(0,o);return s[e]},P=async(s,o)=>{const{options:e,elements:a}=f(s,o),c=e.scrambleDuration;await new Promise(u=>{a.forEach(async({currentNode:r,text:i})=>{let n=i.split("");const p=y(n,c),l=Date.now();for(g(r,e.parentElement,t=>{t.classList.add("finished-typing")});Date.now()-l<c;){const t=m(0,n.length),h=p[t],T=n[t]===" ",d=()=>Date.now()-l;if((()=>d()>=h)()||T)if(!(n[t]===i[t]))n[t]=i[t];else continue;else n[t]=D();const L=n.join("");r.innerHTML=L;const w=L===i,b=e.scrambleSlowdown?Math.round(d()/100):1;if(await R(b),w){u();break}}r.innerHTML=i})}),e.dispatch("done")};export{P as default};
