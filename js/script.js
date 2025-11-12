document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const navegacion = document.querySelector('.navegacion');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      navegacion.classList.toggle('activo');
      menuBtn.classList.toggle('activo');
    });
  }

  // Cierra el menú al hacer clic en un enlace
  const enlaces = document.querySelectorAll('.navegacion a');
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
      navegacion.classList.remove('activo');
      menuBtn.classList.remove('activo');
    });
  });
});



document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      window.scrollTo({
        top: destino.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});


// Formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.Email.value.trim();
    const mensaje = form.mensaje.value.trim();

    // Validaciones
    if (!nombre) {
      alert('Por favor, ingresa tu nombre.');
      form.nombre.focus();
      return;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert('Por favor, ingresa un correo válido.');
      form.Email.focus();
      return;
    }

    if (!mensaje) {
      alert('Por favor, escribe un mensaje.');
      form.mensaje.focus();
      return;
    }

    alert('¡Mensaje enviado! Gracias, te responderé pronto.');
    form.reset();
  });
});


