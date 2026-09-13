# language: es
@api @usuarios
Característica: Gestión de usuarios mediante API REST

  Como sistema consumidor de servicios
  Quiero enviar peticiones al endpoint de usuarios
  Para gestionar los datos de los usuarios

  Escenario: Creación exitosa de un nuevo usuario
    Dado que "Dario" envía una solicitud para crear un usuario con nombre "Dario QA" y cargo "Lead Automation Engineer"
    Entonces "Dario" debería recibir una respuesta con código de estado 201

  Escenario: Consulta de un usuario existente por ID
    Dado que "Dario" consulta la información del usuario con ID 2
    Entonces "Dario" debería recibir una respuesta con código de estado 200
