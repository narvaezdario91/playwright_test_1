# language: es
@ui @orangehrm @autenticacion
Característica: Autenticación y recuperación de credenciales en OrangeHRM

  Como empleado de la organización
  Quiero acceder al sistema OrangeHRM con mis credenciales
  Para gestionar mis actividades laborales de forma segura

  Antecedentes:
    Dado que "Dario" navega a la página de inicio de sesión de OrangeHRM

  @smoke @happy_path
  Escenario: Inicio de sesión exitoso con credenciales válidas
    Cuando "Dario" ingresa a OrangeHRM con el usuario "Admin" y la contraseña "admin123"
    Entonces "Dario" debería ver el panel principal de OrangeHRM con el título "Dashboard"

  @negative
  Escenario: Intento de inicio de sesión con credenciales inválidas
    Cuando "Dario" ingresa a OrangeHRM con el usuario "Admin" y la contraseña "clave_erronea_99"
    Entonces "Dario" debería ver una alerta de error en OrangeHRM que contiene "Invalid credentials"

  @ui_validation
  Escenario: Validación de campos obligatorios vacíos
    Cuando "Dario" intenta iniciar sesión en OrangeHRM sin ingresar credenciales
    Entonces "Dario" debería ver el mensaje de validación de campo requerido "Required"

  @recuperacion
  Escenario: Solicitud de restablecimiento de contraseña olvidada
    Cuando "Dario" selecciona la opción de recuperación de contraseña en OrangeHRM
    Entonces "Dario" debería ver la pantalla de recuperación con el título "Reset Password"
