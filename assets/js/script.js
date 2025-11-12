// Inizializzazione EmailJS
(function(){
  emailjs.init("Gy_tI34e3uX4RtQ3D"); // <-- PUBLIC_KEY
})();

// Gestione del form di contatto
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm('service_ypwhfhe', 'template_l5ik70y', this)
      .then(() => {
        feedback.textContent = "✅ Messaggio inviato con successo!";
        feedback.className = "alert alert-success mt-3";
        feedback.classList.remove("d-none");
        form.reset();
      }, (error) => {
        feedback.textContent = "❌ Si è verificato un errore. Riprova più tardi.";
        feedback.className = "alert alert-danger mt-3";
        feedback.classList.remove("d-none");
        console.error("Errore:", error);
      });
  });
});
