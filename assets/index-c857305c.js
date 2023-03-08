(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const e=({tag:t,content:s,proops:n,parent:a})=>{const o=document.createElement(t);return o.textContent=s,n.map(r=>o.setAttribute(Object.keys(r),Object.values(r))),a.appendChild(o),o},c=document.querySelector("#app"),C=new Audio("./audio/buttonSound.mp3"),l=new Audio("./audio/timer.mp3"),i=e({tag:"div",proops:[{class:"tabsZone"}],parent:c}),Z=e({tag:"button",content:"Помидор",proops:[{class:"tabsZoneBtn btn"}],parent:i}),x=e({tag:"button",content:"Маленький перерыв",proops:[{class:"tabsZoneBtn btn"}],parent:i}),L=e({tag:"button",content:"Большой перерыв ",proops:[{class:"tabsZoneBtn btn"}],parent:i}),f=e({tag:"div",proops:[{class:"timerZone"}],parent:c}),O=e({tag:"h1",content:"25:00",proops:[{class:"timer"}],parent:f}),E=e({tag:"button",content:"Запустить таймер",proops:[{class:"pomidoroTimerBtn btn"}],parent:f});g(E,1500,O,"25:00");const m=e({tag:"div",proops:[{class:"timerZone"}],parent:c}),I=e({tag:"h1",content:"05:00",proops:[{class:"timer"}],parent:m}),A=e({tag:"button",content:"Запустить таймер",proops:[{class:"startTimerButton btn"}],parent:m});g(A,300,I,"05:00");const b=e({tag:"div",proops:[{class:"timerZone"}],parent:c}),N=e({tag:"h1",content:"15:00",proops:[{class:"timer"}],parent:b}),w=e({tag:"button",content:"Запустить таймер",proops:[{class:"longBreakTimerButton btn"}],parent:b});g(w,900,N,"15:00");function M(t,s){let n=setInterval(()=>{let a=Math.floor(t%60),o=Math.floor(t/60);t--,t===-1&&clearInterval(n),o===0&&a===0&&(l.load(),l.play()),s.textContent=h(o)+":"+h(a)},1e3);return n}function g(t,s,n,a){let o;t.onclick=()=>{C.play(),t.textContent==="Запустить таймер"?(o=M(s,n),t.textContent="Сброc"):(clearInterval(o),t.textContent="Запустить таймер",n.textContent=a,l.pause())}}const h=t=>t<10?"0"+t:t,k=[Z,x,L],y=[f,m,b],B=()=>{y.forEach(t=>t.style.display="none"),k.forEach(t=>t.classList.remove="active")},T=(t=0)=>{y[t].style.display="flex",k[t].classList.add="active",document.body.style.backgroundColor="#"+(Math.random()*16777215<<0).toString(16)};B();T();i.onclick=t=>{t.target&&t.target.classList.contains("tabsZoneBtn")&&k.forEach((s,n)=>{t.target===s&&(B(),T(n))})};const v=e({tag:"div",proops:[{class:"taskZone"}],parent:c}),P=e({tag:"button",content:"Добавить задачу",proops:[{class:"buttonTask btn"}],parent:v}),u=e({tag:"div",proops:[{class:"tasks"}],parent:v});P.onclick=()=>{const t=[],s=prompt("Введите назавание задачи");if(t.push(s),s){const n=e({tag:"div",proops:[{class:"task"}],parent:u});e({tag:"p",content:t.at(-1),proops:[{class:"taskContent"}],parent:n});const a=e({tag:"p",content:"+",proops:[{class:"taskBtn"}],parent:n});a.onclick=()=>{n.remove()},u.firstChild&&(d.style.display="block")}return t};const d=e({tag:"button",content:"Очистить список задач",proops:[{class:"buttonClearTasks btn"}],parent:c});d.onclick=()=>{d.style.display="none",u.replaceChildren()};