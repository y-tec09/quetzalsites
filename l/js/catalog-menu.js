// Script para alternar secciones
const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Quitar estado activo de botones y secciones
    buttons.forEach(b => b.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Activar el botón y la sección seleccionada
    btn.classList.add('active');
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});
