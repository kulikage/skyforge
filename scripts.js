(function(){
  const form = document.getElementById('waitlist');
  if(!form) return;
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const msg = document.getElementById('waitlist-msg');
    const data = { email: form.email.value.trim() };
    try{
      if(form.dataset.mode === 'demo'){
        await new Promise(r=>setTimeout(r,400));
        msg.style.display = 'block';
        msg.textContent = 'Thanks! You’re on the list.';
        form.reset();
        return;
      }
      // Hook up your provider (Formspark/Formspree) here:
      // await fetch("https://submit-form.com/FORM_ID", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(data) });
      // msg.style.display = 'block'; msg.textContent = 'Thanks! You’re on the list.'; form.reset();
    }catch(_){
      msg.style.display = 'block';
      msg.textContent = 'Sorry, something went wrong.';
    }
  });
})();