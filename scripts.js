(function(){
  const form = document.getElementById('waitlist');
  if(!form) return;

  const ENDPOINT = 'https://script.google.com/macros/s/AKfycbyJqKL389EDdY1g8Tk-StLwKKJIgeqazHQdng4GKGdZVwSLTtbRG7XSfBw2wP4Duu8ExA/exec'; // ← твой URL

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const msg = document.getElementById('waitlist-msg');
    const email = form.email.value.trim();
    const name  = (form.name?.value || '').trim();
    msg.style.display = 'block';

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      msg.textContent = 'Please enter a valid email.';
      return;
    }

    msg.textContent = 'Submitting…';
    try{
      const body = new URLSearchParams({
        email, name,
        _gotcha: form.querySelector('[name="_gotcha"]').value || ''
      });

      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded' },
        body
      });

      if(res.ok){
        msg.textContent = 'Thanks! You’re on the list.';
        form.reset();
      } else {
        msg.textContent = 'Server error. Please try again later.';
      }
    } catch(_){
      msg.textContent = 'Network error. Please try again.';
    }
  });
})();
