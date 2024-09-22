document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  // Cambiar entre pestañas
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Quitar la clase activa de todos los botones y contenidos
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Añadir la clase activa al botón y contenido seleccionados
      button.classList.add('active');
      document.getElementById(button.dataset.tab).classList.add('active');
    });
  });

  // Guardar el estado de las tareas
  const tareas = {};

  // Marcar tareas completadas y guardar observaciones
  document.querySelectorAll('.checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const programa = e.target.getAttribute('data-programa');
      const tareaId = e.target.getAttribute('data-id');
      
      if (!tareas[programa]) tareas[programa] = {};
      
      tareas[programa][tareaId] = {
        ...tareas[programa][tareaId],
        completada: e.target.checked
      };

      console.log(tareas);
    });
  });

  document.querySelectorAll('.input').forEach(input => {
    input.addEventListener('input', (e) => {
      const programa = e.target.getAttribute('data-programa');
      const tareaId = e.target.getAttribute('data-id');

      if (!tareas[programa]) tareas[programa] = {};
      
      tareas[programa][tareaId] = {
        ...tareas[programa][tareaId],
        observaciones: e.target.value
      };

      console.log(tareas);
    });
  });
});
