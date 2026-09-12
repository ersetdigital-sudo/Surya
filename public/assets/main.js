/* Shared motion layer for case-study pages */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);

  if(!reduce && window.Lenis){
    var lenis = new Lenis({ duration:1.05, smoothWheel:true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function(t){ lenis.raf(t*1000); });
    gsap.ticker.lagSmoothing(0);
  }

  gsap.to('#prog',{scaleX:1,ease:'none',scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:.2}});

  var cur=document.getElementById('cur'), dot=document.getElementById('curdot');
  if(cur && window.matchMedia('(hover:hover) and (pointer:fine)').matches){
    var xs=gsap.quickTo(cur,'x',{duration:.5,ease:'power3'}), ys=gsap.quickTo(cur,'y',{duration:.5,ease:'power3'});
    var xd=gsap.quickTo(dot,'x',{duration:.08,ease:'power3'}), yd=gsap.quickTo(dot,'y',{duration:.08,ease:'power3'});
    window.addEventListener('pointermove',function(e){ xs(e.clientX); ys(e.clientY); xd(e.clientX); yd(e.clientY); });
    document.querySelectorAll('a,button,.tile').forEach(function(el){
      el.addEventListener('pointerenter',function(){ gsap.to(cur,{scale:1.9,duration:.3}); });
      el.addEventListener('pointerleave',function(){ gsap.to(cur,{scale:1,duration:.3}); });
    });
  }

  gsap.from('h1',{y:38,opacity:0,duration:1,ease:'expo.out'});
  gsap.from('h1 + p',{y:22,opacity:0,duration:.9,ease:'power3.out',delay:.15});

  gsap.utils.toArray('section h2, .feat, .step, .tile').forEach(function(el){
    gsap.from(el,{y:26,opacity:0,duration:.8,ease:'power3.out',
      scrollTrigger:{trigger:el,start:'top 90%'}});
  });

  document.querySelectorAll('.tile').forEach(function(t){
    t.addEventListener('pointermove',function(e){
      var r=t.getBoundingClientRect();
      t.style.setProperty('--mx',(e.clientX-r.left)+'px');
      t.style.setProperty('--my',(e.clientY-r.top)+'px');
    });
  });
})();
