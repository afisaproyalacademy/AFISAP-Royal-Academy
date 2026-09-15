
const slides=[...document.querySelectorAll('.slide')];
const dots=[...document.querySelectorAll('.dot')];
let current=0;
function showSlide(n){
  current=(n+slides.length)%slides.length;
  slides.forEach((s,i)=>s.classList.toggle('active',i===current));
  dots.forEach((d,i)=>d.classList.toggle('active',i===current));
}
dots.forEach((d,i)=>d.addEventListener('click',()=>showSlide(i)));
const SLIDE_DURATION=5000; setInterval(()=>showSlide(current+1),SLIDE_DURATION);
const menu=document.querySelector('.menu');
const navlinks=document.querySelector('.navlinks');
if(menu) menu.addEventListener('click',()=>navlinks.classList.toggle('open'));

/* Afisap Royal Academy local school-information assistant */
(function(){const l=document.getElementById('aiLauncher'),p=document.getElementById('aiPanel'),c=document.getElementById('aiClose'),f=document.getElementById('aiForm'),i=document.getElementById('aiInput'),m=document.getElementById('aiMessages');if(!l||!p)return;const a=[[/program|daycare|pre-school|preschool|primary|junior high|jhs/i,"Afisap Royal Academy offers Daycare, Pre-School, Lower Primary, Upper Primary and Junior High School."],[/reopen|opening|3rd september|8th september|september 2026/i,"The school reopened for the new school period on 8th September 2026."],[/language|french|english|spanish|dutch/i,"English and French are currently offered. The Academy is exploring Spanish, Dutch and other international languages for the future."],[/contact|phone|telephone|call|email/i,"You can contact Afisap Royal Academy on 055 610 4186, 024 437 4683 or 024 272 7685, or email afisaproyalacademy@gmail.com."],[/where|location|address|map/i,"Afisap Royal Academy postal address is P.O. Box SE 58, Suame, Kumasi. The school is located at Abuakwa Atwima Agogo, near Gaso Fueling Station, Ashanti Region, Ghana."],[/admission|apply|enrol|enroll/i,"Please visit the Admissions page for guidance, then use the Start Online Application button to continue to the official AFISAP Admissions Portal."],[/hours|office/i,"Office hours are Monday–Friday, 7:00 AM–5:00 PM."]];function r(q){let h=a.find(x=>x[0].test(q));return h?h[1]:"I can help with Afisap programs, admissions, contact details, reopening, languages and the school's location. For information not covered here, please contact the school directly."}function add(t,k){let d=document.createElement('div');d.className='ai-msg '+k;d.textContent=t;m.appendChild(d);m.scrollTop=m.scrollHeight}l.onclick=()=>p.classList.toggle('open');if(c)c.onclick=()=>p.classList.remove('open');document.querySelectorAll('.ai-suggestions button').forEach(b=>b.onclick=()=>{add(b.dataset.q,'user');setTimeout(()=>add(r(b.dataset.q),'bot'),180)});if(f)f.onsubmit=e=>{e.preventDefault();let q=i.value.trim();if(!q)return;add(q,'user');i.value='';setTimeout(()=>add(r(q),'bot'),180)}})();
