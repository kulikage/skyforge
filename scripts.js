(function(){
  const form = document.getElementById('waitlist'); if(!form) return;
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const msg = document.getElementById('waitlist-msg');
    try{ await new Promise(r=>setTimeout(r,300)); msg.style.display='block'; msg.textContent='Thanks! You’re on the list.'; form.reset(); }
    catch(_){ msg.style.display='block'; msg.textContent='Sorry, something went wrong.'; }
  });
})();