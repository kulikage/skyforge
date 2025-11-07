// Minimal "demo" waitlist handler for static hosting.
// Replace `data-mode="demo"` with your Formspark/Formspree endpoint to make it live.
(function(){
  const form = document.getElementById('waitlist');
  if(!form) return;
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const msg = document.getElementById('waitlist-msg');
    const data = { email: form.email.value.trim() };
    try{
      // Demo mode: just fake success.
      if(form.dataset.mode === 'demo'){
        await new Promise(r=>setTimeout(r,500));
        msg.style.display = 'block';
        msg.textContent = 'Thanks! You’re on the list.';
        form.reset();
        return;
      }
      // Live example with Formspark (uncomment and set your form ID)
      // const FORMSPARK_ID = "YOUR_FORM_ID";
      // await fetch("https://submit-form.com/" + FORMSPARK_ID, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json", "Accept": "application/json" },
      //   body: JSON.stringify(data),
      // });
      // msg.style.display = 'block';
      // msg.textContent = 'Thanks! You’re on the list.';
      // form.reset();
    }catch(err){
      msg.style.display = 'block';
      msg.textContent = 'Sorry, something went wrong.';
    }
  });
})();