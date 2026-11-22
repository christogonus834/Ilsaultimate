const KEY='ilsa_demo_v4',U=(i,w=900)=>`https://images.unsplash.com/photo-${i}?auto=format&fit=crop&q=75&w=${w}`;
const D={
site:{name:'IL-SA Ultimate Service',legal:'IL-SA Ultimate Service Limited',tag:'Agro & Allied Services, Industrial Cleaning Services, General Contractor and Merchandise',
heroTitle:'Quality groundnuts, spotless facilities, dependable supply.',
heroText:'IL-SA Ultimate Service Limited is an Abuja company that grows, processes and supplies groundnuts and agro-allied products, cleans industrial and commercial spaces, and delivers general contracts and merchandise across Nigeria.',
heroImg:U('1788122290883-6587385ffb8c',1600),bnProducts:U('1589752881676-589e85baec16',1600),bnServices:U('1740657254989-42fe9c3b8cce',1600),bnAbout:U('1788122290883-6587385ffb8c',1600),bnContact:U('1552329822-b1e325719181',1600),aboutImg:U('1442774503508-2e17027df511'),
st1v:'2024',st1l:'Incorporated in Abuja',st2v:'7',st2l:'Service lines',st3v:'8+',st3l:'Products in store',st4v:'FCT',st4l:'Based in Abuja, Nigeria',
about:'IL-SA Ultimate Service Limited is a private company limited by shares, incorporated in Abuja on 20 September 2024 under the Companies and Allied Matters Act 2020. We combine agro-allied production and trading, professional cleaning and fumigation, and general supplies under one name.',
mission:'To deliver quality products and reliable services that businesses and households can trust, from the farm to the warehouse floor.',
person:"Alhassan Sa'adatu",role:'Operations Manager',address:'No 234, Rafinsayin Street, Karamajiji Airport Road, Abuja, FCT, Nigeria',
phone:'+234 812 038 5151',whatsapp:'2348120385151',email:'info@ilsaultimateservice.com',hours:'Monday to Saturday, 8:00am to 5:00pm',
rc:'7945655',tin:'32171139-0001',social:'@ilsaultimateservice'},
services:[
{id:'s1',icon:'sprout',title:'Agro & Allied Products',text:'Farming, nuts processing, storage of farm produce and export of agro products, including groundnuts, peanuts and yoghurt.'},
{id:'s2',icon:'sparkles',title:'Industrial Cleaning',text:'Cleaning of production floors, warehouses, storage facilities, administrative blocks, gangways, spillages and drains.'},
{id:'s3',icon:'window',title:'Window, Blinds & Carpet Cleaning',text:'Professional window and blinds cleaning and carpet cleaning for offices, homes and commercial buildings.'},
{id:'s4',icon:'bug',title:'Fumigation',text:'Pest control and fumigation for homes, warehouses, farms and commercial premises.'},
{id:'s5',icon:'hardhat',title:'General Contracts & Supplies',text:'General contractors, commission agents and suppliers of equipment, technical tools and building materials.'},
{id:'s6',icon:'utensils',title:'Catering & Hospitality',text:'Industrial catering operations, hotel and catering services and supply of catering equipment.'},
{id:'s7',icon:'globe',title:'Import & Export',text:'Import and export of goods, raw materials and industrial cleaning equipment to and from markets worldwide.'}],
products:[
{id:'p1',name:'Raw Shelled Groundnuts',cat:'Groundnuts',price:2800,unit:'per kg',desc:'Clean, sorted, sun-dried shelled groundnuts ready for roasting, oil or resale.',img:U('1589752881676-589e85baec16'),stock:true},
{id:'p2',name:'Groundnuts in Shell',cat:'Groundnuts',price:1400,unit:'per kg',desc:'Fresh unshelled groundnuts, packed in breathable bags for bulk buyers.',img:U('1552329822-b1e325719181'),stock:true},
{id:'p3',name:'Roasted Groundnuts',cat:'Groundnuts',price:3200,unit:'per kg',desc:'Evenly roasted, crunchy and lightly salted. Ready to eat.',img:U('1635843122601-f09e510f17f7'),stock:true},
{id:'p4',name:'Pure Groundnut Oil',cat:'Groundnuts',price:4500,unit:'per litre',desc:'Cold-pressed groundnut oil for cooking and frying.',img:U('1552329823-8eb0509f741c'),stock:true},
{id:'p5',name:'Kuli-Kuli (Groundnut Cake)',cat:'Groundnuts',price:1500,unit:'per pack',desc:'Traditional crunchy groundnut snack, made in small batches.',img:U('1558442092-f97cd912801a'),stock:true},
{id:'p6',name:'Natural Yoghurt',cat:'Dairy & Beverages',price:1800,unit:'per litre',desc:'Fresh, creamy natural yoghurt. Order ahead for events.',img:U('1633893215271-f7e1fca081ad'),stock:true},
{id:'p7',name:'Industrial Cleaning Equipment',cat:'Cleaning Supplies',price:0,unit:'',desc:'Floor scrubbers, vacuums and cleaning tools. Tell us what you need.',img:U('1740657254989-42fe9c3b8cce'),stock:true},
{id:'p8',name:'Building Materials',cat:'General Supplies',price:0,unit:'',desc:'Quality building materials supplied to contractors and developers.',img:'',stock:true}],
faqs:[
{id:'f1',q:'Do I pay on the website?',a:'No. Browse our products, add what you want to your enquiry list and send it to us. We confirm availability and price, then arrange delivery and payment with you directly.'},
{id:'f2',q:'Can I buy groundnuts in bulk?',a:'Yes. We supply shelled and unshelled groundnuts to retailers, processors and exporters. Send an enquiry with the quantity you need.'},
{id:'f3',q:'Which areas do you cover?',a:'We are based in Abuja and serve clients across Nigeria. Cleaning and fumigation jobs are scheduled by location, so call us to confirm.'},
{id:'f4',q:'How do I book a cleaning or fumigation job?',a:'Call or message us on WhatsApp with your location and the size of the space. We will arrange an inspection and send a quote.'}],
slides:[
{id:'h1',title:'Quality groundnuts, spotless facilities, dependable supply.',text:'An Abuja company that grows, processes and supplies groundnuts and agro-allied products, and cleans industrial and commercial spaces across Nigeria.',img:U('1788122290883-6587385ffb8c',1600),btn:'Shop groundnuts',link:'products.html'},
{id:'h2',title:'Fresh groundnuts, ready for bulk orders.',text:'Shelled, unshelled, roasted and pressed into oil. Add what you need to your enquiry list and we confirm price and delivery.',img:U('1589752881676-589e85baec16',1600),btn:'See products',link:'products.html'},
{id:'h3',title:'Industrial cleaning that keeps operations running.',text:'Production floors, warehouses, gangways, drains, windows, blinds and carpets, plus fumigation for homes and premises.',img:U('1740657254989-42fe9c3b8cce',1600),btn:'Request a quote',link:'contact.html'},
{id:'h4',title:'Agro products, supplied and exported.',text:'Farm produce, storage, processing and export of agro products, plus general contracts and merchandise.',img:U('1442774503508-2e17027df511',1600),btn:'Our services',link:'services.html'}],
msgs:[]};
let S;try{S=JSON.parse(localStorage.getItem(KEY))}catch(e){}S=S||structuredClone(D);
for(const k in D.site)if(S.site[k]===undefined)S.site[k]=D.site[k];
for(const k of['faqs','slides'])if(!S[k])S[k]=structuredClone(D[k]);
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){alert('Storage is full. Use image links instead of uploads, or delete some items.')}};
const uid=()=>Math.random().toString(36).slice(2,9),naira=n=>'₦'+Number(n).toLocaleString('en-NG');
const ICONS={"sprout": "M7 20h10 M10 20c5.5-2.5.8-6.4 3-10 M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z", "sparkles": "M9.9 15.5A2 2 0 0 0 8.5 14.1l-6.1-1.6a.5.5 0 0 1 0-1L8.5 9.9A2 2 0 0 0 9.9 8.5l1.6-6.1a.5.5 0 0 1 1 0l1.6 6.1a2 2 0 0 0 1.4 1.4l6.1 1.6a.5.5 0 0 1 0 1l-6.1 1.6a2 2 0 0 0-1.4 1.4l-1.6 6.1a.5.5 0 0 1-1 0z M20 3v4 M22 5h-4 M4 17v2 M5 18H3", "window": "M3 3h18v18H3z M12 3v18 M3 12h18", "bug": "M8 2l1.9 1.9 M14.1 3.9 16 2 M9 7.1v-1a3 3 0 1 1 6 0v1 M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6z M12 20v-9 M6.5 9C4.6 8.8 3 7.1 3 5 M6 13H2 M3 21c0-2.1 1.7-3.9 3.8-4 M21 5c0 2.1-1.6 3.8-3.5 4 M22 13h-4 M17.2 17c2.1.1 3.8 1.9 3.8 4", "hardhat": "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5 M14 6a6 6 0 0 1 6 6v3 M4 15v-3a6 6 0 0 1 6-6 M3 15h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z", "utensils": "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2 M7 2v20 M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z M21 15v7", "globe": "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z", "bottle": "M9 2h6 M10 2v3L8 8v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8l-2-3V2 M8 13h8", "box": "M21 8l-9-5-9 5v8l9 5 9-5z M3.3 7.5 12 12.5l8.7-5 M12 22V12.5", "bricks": "M3 3h18v18H3z M3 9h18 M3 15h18 M9 3v6 M15 9v6 M9 15v6", "phone": "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z", "mail": "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 7l-10 7L2 7", "pin": "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", "clock": "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 6v6l4 2"};
const svg=n=>`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ICONS[n]||ICONS.box}"/></svg>`;
const ICO={'Groundnuts':'sprout','Dairy & Beverages':'bottle','Cleaning Supplies':'sparkles','General Supplies':'bricks'},ico=c=>svg(ICO[c]||'box');
let ENQ=[];try{ENQ=JSON.parse(localStorage.ilsa_enq||'[]')}catch(e){}
const P=document.body.dataset.page;
const img=(p)=>p.img?`<img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy" onerror="this.remove()">`:'';
const card=p=>`<article class="card"><div class="ph" onclick="view('${p.id}')">${ico(p.cat)}${img(p)}${p.stock?'':'<i class="tag">Out of stock</i>'}</div><div class="pb"><small>${esc(p.cat)}</small><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p><div class="pr"><b>${p.price>0?naira(p.price):'Call for price'}</b><em>${p.price>0?esc(p.unit):''}</em></div><button class="btn sm" onclick="add('${p.id}')">${ENQ.includes(p.id)?'Added':'Add to enquiry'}</button><button class="btn sm o" style="color:var(--n)" onclick="view('${p.id}')">Details</button></div></article>`;
const svc=s=>`<div class="card svc"><span class="ic">${svg(s.icon)}</span><h3>${esc(s.title)}</h3><p class="m">${esc(s.text)}</p></div>`;
const faq=f=>`<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`;
function bind(){$$('i[data-i]').forEach(e=>e.innerHTML=svg(e.dataset.i));const s=S.site;$$('[data-k]').forEach(e=>{if(s[e.dataset.k])e.textContent=s[e.dataset.k]});
$$('[data-bg]').forEach(e=>{const u=s[e.dataset.bg];if(u)e.style.backgroundImage=`linear-gradient(rgba(14,26,59,.78),rgba(14,26,59,.55)),url("${u}")`});
$$('[data-src]').forEach(e=>{const u=s[e.dataset.src];if(u)e.src=u});
$$('[data-tel]').forEach(e=>e.href='tel:'+s.phone.replace(/\s/g,''));$$('[data-mail]').forEach(e=>e.href='mailto:'+s.email);
$$('[data-wa]').forEach(e=>e.href='https://wa.me/'+s.whatsapp);
$$('[data-faq]').forEach(e=>e.innerHTML=S.faqs.map(faq).join(''));$$('[data-svc]').forEach(e=>e.innerHTML=S.services.slice(0,+e.dataset.svc||99).map(svc).join(''))}
function grid(){const q=($('#q')?.value||'').toLowerCase(),c=window.cat||'All',L=S.products.filter(p=>(c=='All'||p.cat==c)&&(p.name+p.desc+p.cat).toLowerCase().includes(q));$('#grid').innerHTML=L.length?L.map(card).join(''):'<p class="m">No products match. Try another search or category.</p>';
$('#chips').innerHTML=['All',...new Set(S.products.map(p=>p.cat))].map(x=>`<button class="chip ${x==c?'on':''}" data-c="${esc(x)}">${esc(x)}</button>`).join('')}
function add(id){ENQ=ENQ.includes(id)?ENQ.filter(x=>x!=id):[...ENQ,id];localStorage.ilsa_enq=JSON.stringify(ENQ);basket();if(P=='products')grid();else if(P=='home'){home();slider()}const d=$('#pd');if(d&&d.open)d.close()}
function basket(){const L=ENQ.map(id=>S.products.find(p=>p.id==id)).filter(Boolean);$('#fab').textContent=`Enquiry list (${L.length})`;
const t=L.map(p=>`- ${p.name}${p.price>0?' ('+naira(p.price)+' '+p.unit+')':''}`).join('\n'),msg=`Hello, I would like to enquire about:\n${t}`;
$('#dr').innerHTML=`<div class="row"><h3>Your enquiry list</h3><button class="btn sm o" style="color:var(--n)" onclick="$('#dr').classList.remove('open')">Close</button></div>${L.length?L.map(p=>`<div class="row"><span>${esc(p.name)}</span><button class="btn sm d" onclick="add('${p.id}')">Remove</button></div>`).join('')+`<p class="m">No payment here. We confirm price, stock and delivery with you.</p><a class="btn" target="_blank" rel="noopener" href="https://wa.me/${esc(S.site.whatsapp)}?text=${encodeURIComponent(msg)}">Send on WhatsApp</a><button class="btn n" onclick="toForm()">Use contact form</button>`:'<p class="m">Nothing here yet. Tap "Add to enquiry" on any product.</p>'}`}
function toForm(){const L=ENQ.map(id=>S.products.find(p=>p.id==id)).filter(Boolean);sessionStorage.pre='Hello, I would like to enquire about:\n'+L.map(p=>'- '+p.name).join('\n');location.href='contact.html'}
function view(id){const p=S.products.find(x=>x.id==id);$('#pd').innerHTML=`<div class="ph" style="cursor:default;height:260px">${ico(p.cat)}${img(p)}</div><div class="pb"><small>${esc(p.cat)}</small><h2>${esc(p.name)}</h2><p>${esc(p.desc)}</p><div class="pr"><b>${p.price>0?naira(p.price):'Call for price'}</b><em>${p.price>0?esc(p.unit):''}</em></div><button class="btn" onclick="add('${p.id}')">${ENQ.includes(p.id)?'Remove from enquiry':'Add to enquiry'}</button><button class="btn o" style="color:var(--n)" onclick="$('#pd').close()">Close</button></div>`;$('#pd').showModal()}
function home(){$('#feat').innerHTML=S.products.slice(0,8).map(card).join('')}
function trk(d){$('#feat').scrollBy({left:d*290,behavior:'smooth'})}
function slider(){const el=$('#slides');if(!el)return;const L=S.slides.length?S.slides:D.slides;
el.innerHTML=L.map((s,i)=>`<div class="slide ${i?'':'on'}" style="background-image:linear-gradient(rgba(14,26,59,.82),rgba(14,26,59,.4)),url('${esc(s.img)}')"><div class="wrap"><h1>${esc(s.title)}</h1><p>${esc(s.text)}</p>${s.btn?`<a class="btn" href="${esc(s.link)}">${esc(s.btn)}</a>`:''}<a class="btn o" href="contact.html">Get in touch</a></div></div>`).join('');
$('#dots').innerHTML=L.map((_,i)=>`<button aria-label="Slide ${i+1}" class="${i?'':'on'}" data-i="${i}"></button>`).join('');
let i=0,t;const go=n=>{i=(n+L.length)%L.length;$$('.slide').forEach((e,k)=>e.classList.toggle('on',k==i));$$('#dots button').forEach((e,k)=>e.classList.toggle('on',k==i))};
const play=()=>{clearInterval(t);if(!matchMedia('(prefers-reduced-motion:reduce)').matches)t=setInterval(()=>go(i+1),6000)};
$('#prev').onclick=()=>{go(i-1);play()};$('#next').onclick=()=>{go(i+1);play()};$('#dots').onclick=e=>{if(e.target.dataset.i!=null){go(+e.target.dataset.i);play()}};
let x0=0;const b=$('#sl');b.ontouchstart=e=>x0=e.touches[0].clientX;b.ontouchend=e=>{const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50){go(i+(d<0?1:-1));play()}};play()}
function send(f){S.msgs.unshift({id:uid(),name:f.name.value,phone:f.phone.value,email:f.email.value,msg:f.msg.value,date:new Date().toLocaleString()});save();sessionStorage.removeItem('pre');f.outerHTML='<div class="card" style="padding:24px"><h3>Thank you</h3><p>We received your message and will call you back soon.</p></div>';return false}
document.body.insertAdjacentHTML('beforeend','<button class="fab" id="fab" onclick="$(\'#dr\').classList.add(\'open\')"></button><aside class="dr" id="dr"></aside><dialog id="pd"></dialog>');
$('#mb').onclick=()=>$('#nv').classList.toggle('open');$('#pd').onclick=e=>{if(e.target.id=='pd')e.target.close()};
$$('#nv a').forEach(a=>{if(a.getAttribute('href')==P+'.html'||(P=='home'&&a.getAttribute('href')=='index.html'))a.classList.add('on')});
bind();basket();
if(P=='home')home();
if(P=='products'){window.cat='All';grid();$('#q').oninput=grid;$('#chips').onclick=e=>{if(e.target.dataset.c){cat=e.target.dataset.c;grid()}}}
if(P=='contact'&&$('#msg')&&sessionStorage.pre)$('#msg').value=sessionStorage.pre;
