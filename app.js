const inr=n=>'₹'+Math.round(n).toLocaleString('en-IN');
const P={city:['Volta City',999000,0],aero:['Volta Aero',1799000,50000],terra:['Volta Terra',2499000,50000]};
const $=id=>document.getElementById(id);
if($('pf')){
 const q=new URLSearchParams(location.search).get('model');if(P[q])$('model').value=q;
 function sum(){
  const [n,p,d]=P[$('model').value],chg=$('chg').checked,fin=$('pay').value==='fin';
  const total=p-d+(chg?0:45000);
  $('s1').textContent=n+' '+inr(p);$('s2').textContent=d?'−'+inr(d):'—';$('s3').textContent=chg?'Free':'+₹45,000';
  if(fin){const L=total*0.9,r=0.089/12,k=Math.pow(1+r,60);$('s4l').textContent='EMI (60 months, 8.9%)';$('s4').textContent=inr(L*r*k/(k-1))}
  else{$('s4l').textContent='Due today';$('s4').textContent='₹11,000 deposit'}
  $('s5').textContent=inr(total);
 }
 ['model','chg','pay'].forEach(i=>$(i).addEventListener('change',sum));sum();
 $('pf').addEventListener('submit',e=>{e.preventDefault();$('ok').style.display='block'});
}
if($('cf'))$('cf').addEventListener('submit',e=>{e.preventDefault();$('cok').style.display='block';e.target.reset()});
